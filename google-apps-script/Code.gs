/**
 * GrowthOS survey receiver for Google Sheets.
 *
 * Required Script Properties:
 *   GROWTHOS_SHEET_ID   The ID in the Google Sheet URL.
 * Optional Script Properties:
 *   GROWTHOS_SHEET_NAME Sheet tab name (defaults to "Survey responses").
 */
function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents);
    const headers = payload.sheetHeaders;
    const row = payload.sheetRow;

    if (!Array.isArray(headers) || !Array.isArray(row) || headers.length !== row.length) {
      throw new Error("Invalid GrowthOS survey payload");
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(30000);
    try {
      const sheet = getSurveySheet_();
      const existingHeaders = readHeaders_(sheet);
      const existingHeaderSet = new Set(existingHeaders);
      const missingHeaders = headers.filter(function (header) {
        return !existingHeaderSet.has(header);
      });

      if (missingHeaders.length > 0) {
        sheet.getRange(1, existingHeaders.length + 1, 1, missingHeaders.length)
          .setValues([missingHeaders]);
        sheet.getRange(1, 1, 1, existingHeaders.length + missingHeaders.length)
          .setFontWeight("bold")
          .setWrap(true);
      }

      const finalHeaders = readHeaders_(sheet);
      const answersByHeader = {};
      headers.forEach(function (header, index) {
        answersByHeader[header] = row[index];
      });

      sheet.appendRow(finalHeaders.map(function (header) {
        return Object.prototype.hasOwnProperty.call(answersByHeader, header)
          ? answersByHeader[header]
          : "";
      }));
      sheet.setFrozenRows(1);
    } finally {
      lock.releaseLock();
    }

    return jsonResponse_({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse_({ ok: false, error: String(error) });
  }
}

function getSurveySheet_() {
  const properties = PropertiesService.getScriptProperties();
  const spreadsheetId = properties.getProperty("GROWTHOS_SHEET_ID");
  if (!spreadsheetId) {
    throw new Error("Set the GROWTHOS_SHEET_ID Script Property before deploying");
  }

  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const sheetName = properties.getProperty("GROWTHOS_SHEET_NAME") || "Survey responses";
  return spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);
}

function readHeaders_(sheet) {
  if (sheet.getLastRow() === 0 || sheet.getLastColumn() === 0) {
    return [];
  }
  return sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    .map(String)
    .filter(function (header) { return header.length > 0; });
}

function jsonResponse_(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
