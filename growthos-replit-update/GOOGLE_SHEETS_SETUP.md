# Store every GrowthOS quiz answer in Google Sheets

The server now sends a labelled value for every question to the configured Google Apps Script URL. Multi-select answers appear in one cell, separated by commas, so each respondent remains on a single row that can be filtered in Google Sheets or downloaded as an Excel `.xlsx` file.

## One-time Google Sheets setup

1. Create or choose the Google Sheet that should contain the responses. Copy its ID from the URL (the part between `/d/` and `/edit`).
2. Open **Extensions → Apps Script** in that spreadsheet and replace the default file contents with [`google-apps-script/Code.gs`](google-apps-script/Code.gs).
3. Open **Project Settings → Script properties** and add `GROWTHOS_SHEET_ID` with the copied ID. You may also add `GROWTHOS_SHEET_NAME` (for example, `Survey responses`).
4. Choose **Deploy → New deployment → Web app**. Execute as yourself and give access to the people who will submit the survey. Copy the deployed web-app URL.
5. Set that URL as `GOOGLE_SHEETS_ENDPOINT_URL` in the API server’s environment, then redeploy the API server.

The script adds any newly introduced question columns automatically, preserves old columns, and appends one complete response per row. To work with it in Excel, use Google Sheets **File → Download → Microsoft Excel (.xlsx)**.

## Important

The URL receives customer contact details and survey answers. Keep it out of public client-side code; it belongs only in the API server environment. If you redeploy Apps Script, update `GOOGLE_SHEETS_ENDPOINT_URL` if Google gives you a new deployment URL.
