import { Router, type IRouter } from "express";
import { db, surveySubmissionsTable } from "@workspace/db";
import { SubmitSurveyBody, SubmitSurveyResponse, GetSurveyStatsResponse } from "@workspace/api-zod";
import { sql } from "drizzle-orm";

const router: IRouter = Router();

// Helper: serialize array fields to JSON strings for storage
function serializeArrayField(value: unknown): string | null {
  if (!value) return null;
  if (Array.isArray(value)) return JSON.stringify(value);
  return null;
}

// Helper: write survey data to Google Sheets via configured endpoint URL
async function writeToGoogleSheets(data: Record<string, unknown>): Promise<void> {
  const endpointUrl = process.env.GOOGLE_SHEETS_ENDPOINT_URL;
  if (!endpointUrl) return; // Skip if not configured

  try {
    // Use redirect:'manual' — Apps Script redirects POST→GET after executing,
    // so we must NOT follow the redirect (the script already ran on the first request).
    // A 3xx opaque redirect means success; anything else is a real error.
    const response = await fetch(endpointUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      redirect: "manual",
      signal: AbortSignal.timeout(8000),
    });
    const status = response.status;
    if (status !== 200 && status !== 201 && !(status >= 300 && status < 400)) {
      throw new Error(`Google Sheets endpoint returned ${status}`);
    }
  } catch (err) {
    // Non-fatal — log but don't fail the survey submission
    console.error("Google Sheets write failed:", err);
  }
}

type SurveyData = ReturnType<typeof SubmitSurveyBody.parse>;

type SheetColumn = {
  key: string;
  label: string;
  value: (data: SurveyData, submittedAt: string) => string | number | boolean;
};

const asList = (value: unknown): string =>
  Array.isArray(value) ? value.join(", ") : "";

// Keep this mapping in one place so the spreadsheet has a clear, stable column
// for every quiz answer. The Apps Script uses `sheetHeaders` and `sheetRow` below.
const sheetColumns: SheetColumn[] = [
  { key: "timestamp", label: "Submitted at (UTC)", value: (_, submittedAt) => submittedAt },
  { key: "name", label: "Full name", value: (data) => data.name },
  { key: "email", label: "Business email", value: (data) => data.email },
  { key: "phone", label: "Phone", value: (data) => data.phone },
  { key: "website", label: "Website URL", value: (data) => data.website ?? "" },
  { key: "linkedin", label: "LinkedIn profile", value: (data) => data.linkedin ?? "" },
  { key: "consent", label: "Contact consent", value: (data) => data.consent },
  { key: "userRole", label: "What is your role?", value: (data) => data.userRole ?? "" },
  { key: "businessExpertise", label: "Business or expertise", value: (data) => data.businessExpertise ?? "" },
  { key: "targetAudience", label: "Target audience", value: (data) => data.targetAudience ?? "" },
  { key: "productService", label: "Product or service", value: (data) => data.productService ?? "" },
  { key: "businessType", label: "Business type", value: (data) => data.businessType ?? "" },
  { key: "employees", label: "Team size", value: (data) => data.employees ?? "" },
  { key: "revenueStage", label: "Business journey stage", value: (data) => data.revenueStage ?? "" },
  { key: "growthDreams", label: "What changed when business doubled?", value: (data) => asList(data.growthDreams) },
  { key: "leadSources", label: "Current lead sources", value: (data) => asList(data.leadSources) },
  { key: "bestLeadSource", label: "Best customer source", value: (data) => data.bestLeadSource ?? "" },
  { key: "monthlyLeads", label: "Leads per month", value: (data) => data.monthlyLeads ?? "" },
  { key: "leadSatisfaction", label: "Lead quality satisfaction", value: (data) => data.leadSatisfaction ?? "" },
  { key: "websiteRole", label: "Website role", value: (data) => data.websiteRole ?? "" },
  { key: "knowsConversionRate", label: "Knows website conversion rate", value: (data) => data.knowsConversionRate ?? "" },
  { key: "websiteOptimization", label: "Website conversion optimization", value: (data) => data.websiteOptimization ?? "" },
  { key: "websiteFrustrations", label: "Website frustrations", value: (data) => asList(data.websiteFrustrations) },
  { key: "currentPain", label: "Current sales pain", value: (data) => data.currentPain ?? "" },
  { key: "crmTool", label: "CRM used", value: (data) => data.crmTool ?? "" },
  { key: "crmConnected", label: "Website connected to CRM", value: (data) => data.crmConnected ?? "" },
  { key: "leadsAutoAdded", label: "Leads automatically added to CRM", value: (data) => data.leadsAutoAdded ?? "" },
  { key: "websiteFeatures", label: "Customer next step", value: (data) => asList(data.websiteFeatures) },
  { key: "followUpAutomation", label: "Follow-up automation", value: (data) => asList(data.followUpAutomation) },
  { key: "analyticsTools", label: "Analytics tools", value: (data) => asList(data.analyticsTools) },
  { key: "knowsExitReason", label: "Can identify why visitors leave", value: (data) => data.knowsExitReason ?? "" },
  { key: "knowsBestPage", label: "Can identify best page", value: (data) => data.knowsBestPage ?? "" },
  { key: "biggestProblem", label: "What keeps you awake at night?", value: (data) => data.biggestProblem ?? "" },
  { key: "aiOneThing", label: "One AI task desired", value: (data) => data.aiOneThing ?? "" },
  { key: "aiTools", label: "AI tools used", value: (data) => asList(data.aiTools) },
  { key: "aiTrust", label: "Trust AI to analyze business", value: (data) => data.aiTrust ?? "" },
  { key: "desiredAiFeature", label: "Most interesting AI feature", value: (data) => data.desiredAiFeature ?? "" },
  { key: "futureVision", label: "12-month growth vision", value: (data) => data.futureVision ?? "" },
  { key: "pastInvestments", label: "Past investments", value: (data) => asList(data.pastInvestments) },
  { key: "marketingSpend", label: "Marketing investment (last 12 months)", value: (data) => data.marketingSpend ?? "" },
  { key: "valueRating", label: "GrowthOS value rating (1-10)", value: (data) => data.valueRating ?? "" },
  { key: "wantsEarlyAccess", label: "Wants early access", value: (data) => data.wantsEarlyAccess ?? "" },
  { key: "openToInterview", label: "Open to discovery interview", value: (data) => data.openToInterview ?? "" },
  { key: "biggestObstacle", label: "Biggest obstacle to growth", value: (data) => data.biggestObstacle ?? "" },
  { key: "desiredImprovement", label: "Area to improve", value: (data) => data.desiredImprovement ?? "" },
  { key: "websiteWish", label: "Information wished from website", value: (data) => data.websiteWish ?? "" },
  { key: "growthPersona", label: "Calculated growth persona", value: (data) => data.growthPersona ?? "" },
  { key: "revenueOpportunity", label: "Estimated revenue opportunity", value: (data) => data.revenueOpportunity ?? "" },
  { key: "browser", label: "Browser", value: (data) => data.browser ?? "" },
  { key: "device", label: "Device", value: (data) => data.device ?? "" },
  { key: "os", label: "Operating system", value: (data) => data.os ?? "" },
  { key: "language", label: "Language", value: (data) => data.language ?? "" },
  { key: "timezone", label: "Timezone", value: (data) => data.timezone ?? "" },
  { key: "country", label: "Country", value: (data) => data.country ?? "" },
  { key: "utmSource", label: "UTM source", value: (data) => data.utmSource ?? "" },
  { key: "utmMedium", label: "UTM medium", value: (data) => data.utmMedium ?? "" },
  { key: "utmCampaign", label: "UTM campaign", value: (data) => data.utmCampaign ?? "" },
  { key: "referrer", label: "Referrer", value: (data) => data.referrer ?? "" },
  { key: "sessionId", label: "Session ID", value: (data) => data.sessionId ?? "" },
];

// The flat values preserve compatibility with an existing Sheets script. The
// paired headers/row give the supplied dynamic script every answer and its label.
function buildSheetsRow(data: SurveyData) {
  const submittedAt = new Date().toISOString();
  const fields = Object.fromEntries(
    sheetColumns.map((column) => [column.key, column.value(data, submittedAt)]),
  );

  return {
    ...fields,
    sheetHeaders: sheetColumns.map((column) => column.label),
    sheetRow: sheetColumns.map((column) => column.value(data, submittedAt)),
    schemaVersion: "growthos-survey-v1",
  };
}

router.post("/survey/submit", async (req, res): Promise<void> => {
  const parsed = SubmitSurveyBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid survey submission");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const data = parsed.data;

  const [submission] = await db
    .insert(surveySubmissionsTable)
    .values({
      name: data.name,
      email: data.email,
      phone: data.phone,
      website: data.website ?? null,
      linkedin: data.linkedin ?? null,
      consent: data.consent,

      userRole: data.userRole ?? null,
      businessExpertise: data.businessExpertise ?? null,
      targetAudience: data.targetAudience ?? null,
      productService: data.productService ?? null,

      businessType: data.businessType ?? null,
      employees: data.employees ?? null,
      revenueStage: data.revenueStage ?? null,
      monthlyVisitors: data.monthlyVisitors ?? null,
      hasWebsite: data.hasWebsite ?? null,

      leadSources: serializeArrayField(data.leadSources),
      bestLeadSource: data.bestLeadSource ?? null,
      monthlyLeads: data.monthlyLeads ?? null,
      leadSatisfaction: data.leadSatisfaction ?? null,

      websiteFeatures: serializeArrayField(data.websiteFeatures),
      knowsConversionRate: data.knowsConversionRate ?? null,
      websiteOptimization: data.websiteOptimization ?? null,
      websiteFrustrations: serializeArrayField(data.websiteFrustrations),

      crmTool: data.crmTool ?? null,
      crmConnected: data.crmConnected ?? null,
      leadsAutoAdded: data.leadsAutoAdded ?? null,
      followUpAutomation: serializeArrayField(data.followUpAutomation),

      analyticsTools: serializeArrayField(data.analyticsTools),
      knowsExitReason: data.knowsExitReason ?? null,
      knowsBestPage: data.knowsBestPage ?? null,

      aiTools: serializeArrayField(data.aiTools),
      aiTrust: data.aiTrust ?? null,
      desiredAiFeature: data.desiredAiFeature ?? null,

      biggestObstacle: data.biggestObstacle ?? null,
      desiredImprovement: data.desiredImprovement ?? null,
      websiteWish: data.websiteWish ?? null,

      pastInvestments: serializeArrayField(data.pastInvestments),
      marketingSpend: data.marketingSpend ?? null,
      valueRating: data.valueRating ?? null,
      wantsEarlyAccess: data.wantsEarlyAccess ?? null,
      openToInterview: data.openToInterview ?? null,

      growthDreams: serializeArrayField(data.growthDreams),
      currentPain: data.currentPain ?? null,
      websiteRole: data.websiteRole ?? null,
      aiOneThing: data.aiOneThing ?? null,
      biggestProblem: data.biggestProblem ?? null,
      futureVision: data.futureVision ?? null,

      growthPersona: data.growthPersona ?? null,

      browser: data.browser ?? null,
      device: data.device ?? null,
      os: data.os ?? null,
      language: data.language ?? null,
      timezone: data.timezone ?? null,
      country: data.country ?? null,
      utmSource: data.utmSource ?? null,
      utmMedium: data.utmMedium ?? null,
      utmCampaign: data.utmCampaign ?? null,
      referrer: data.referrer ?? null,
      sessionId: data.sessionId ?? null,
      bookedCall: data.bookedCall ?? null,
      revenueOpportunity: data.revenueOpportunity ?? null,
    })
    .returning();

  req.log.info({ id: submission.id }, "Survey submission saved");

  // Fire-and-forget: send to Google Sheets endpoint if configured
  writeToGoogleSheets(buildSheetsRow(data));

  res.status(201).json(
    SubmitSurveyResponse.parse({
      id: submission.id,
      createdAt: submission.createdAt.toISOString(),
      growthPersona: submission.growthPersona ?? null,
    }),
  );
});

router.get("/survey/stats", async (req, res): Promise<void> => {
  const [{ total }] = await db
    .select({ total: sql<number>`count(*)::int` })
    .from(surveySubmissionsTable);

  const businessTypeRows = await db
    .select({
      label: surveySubmissionsTable.businessType,
      count: sql<number>`count(*)::int`,
    })
    .from(surveySubmissionsTable)
    .where(sql`${surveySubmissionsTable.businessType} IS NOT NULL`)
    .groupBy(surveySubmissionsTable.businessType)
    .orderBy(sql`count(*) desc`)
    .limit(10);

  const employeeRows = await db
    .select({
      label: surveySubmissionsTable.employees,
      count: sql<number>`count(*)::int`,
    })
    .from(surveySubmissionsTable)
    .where(sql`${surveySubmissionsTable.employees} IS NOT NULL`)
    .groupBy(surveySubmissionsTable.employees)
    .orderBy(sql`count(*) desc`)
    .limit(10);

  const aiFeatureRows = await db
    .select({
      label: surveySubmissionsTable.desiredAiFeature,
      count: sql<number>`count(*)::int`,
    })
    .from(surveySubmissionsTable)
    .where(sql`${surveySubmissionsTable.desiredAiFeature} IS NOT NULL`)
    .groupBy(surveySubmissionsTable.desiredAiFeature)
    .orderBy(sql`count(*) desc`)
    .limit(10);

  const [{ avg }] = await db
    .select({ avg: sql<number>`coalesce(avg(${surveySubmissionsTable.valueRating})::numeric(5,1), 0)::float` })
    .from(surveySubmissionsTable);

  const [{ earlyAccess }] = await db
    .select({ earlyAccess: sql<number>`count(*)::int` })
    .from(surveySubmissionsTable)
    .where(sql`${surveySubmissionsTable.wantsEarlyAccess} = 'Yes'`);

  const leadSourceRows = await db
    .select({
      label: surveySubmissionsTable.bestLeadSource,
      count: sql<number>`count(*)::int`,
    })
    .from(surveySubmissionsTable)
    .where(sql`${surveySubmissionsTable.bestLeadSource} IS NOT NULL`)
    .groupBy(surveySubmissionsTable.bestLeadSource)
    .orderBy(sql`count(*) desc`)
    .limit(10);

  const toStatEntries = (rows: { label: string | null; count: number }[]) =>
    rows
      .filter((r) => r.label != null)
      .map((r) => ({ label: r.label as string, count: r.count }));

  res.json(
    GetSurveyStatsResponse.parse({
      totalSubmissions: total,
      businessTypeBreakdown: toStatEntries(businessTypeRows),
      employeeBreakdown: toStatEntries(employeeRows),
      topLeadSources: toStatEntries(leadSourceRows),
      topAiFeatures: toStatEntries(aiFeatureRows),
      avgValueRating: avg,
      earlyAccessCount: earlyAccess,
    }),
  );
});

export default router;
