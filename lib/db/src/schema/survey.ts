import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const surveySubmissionsTable = pgTable("survey_submissions", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),

  // Contact
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  website: text("website"),
  linkedin: text("linkedin"),
  consent: boolean("consent").notNull().default(false),

  // New profile questions
  userRole: text("user_role"),
  businessExpertise: text("business_expertise"),
  targetAudience: text("target_audience"),
  productService: text("product_service"),

  // Section 1 – Business Profile
  businessType: text("business_type"),
  employees: text("employees"),
  revenueStage: text("revenue_stage"),
  monthlyVisitors: text("monthly_visitors"),
  hasWebsite: text("has_website"),

  // Section 2 – Lead Generation (arrays stored as JSON strings)
  leadSources: text("lead_sources"),
  bestLeadSource: text("best_lead_source"),
  monthlyLeads: text("monthly_leads"),
  leadSatisfaction: text("lead_satisfaction"),

  // Section 3 – Website Experience
  websiteFeatures: text("website_features"),
  knowsConversionRate: text("knows_conversion_rate"),
  websiteOptimization: text("website_optimization"),
  websiteFrustrations: text("website_frustrations"),

  // Section 4 – CRM & Automation
  crmTool: text("crm_tool"),
  crmConnected: text("crm_connected"),
  leadsAutoAdded: text("leads_auto_added"),
  followUpAutomation: text("follow_up_automation"),

  // Section 5 – Analytics
  analyticsTools: text("analytics_tools"),
  knowsExitReason: text("knows_exit_reason"),
  knowsBestPage: text("knows_best_page"),

  // Section 6 – AI Adoption
  aiTools: text("ai_tools"),
  aiTrust: text("ai_trust"),
  desiredAiFeature: text("desired_ai_feature"),

  // Section 7 – Pain Validation
  biggestObstacle: text("biggest_obstacle"),
  desiredImprovement: text("desired_improvement"),
  websiteWish: text("website_wish"),

  // Section 8 – Buying Behavior
  pastInvestments: text("past_investments"),
  marketingSpend: text("marketing_spend"),
  valueRating: integer("value_rating"),
  wantsEarlyAccess: text("wants_early_access"),
  openToInterview: text("open_to_interview"),

  // Discovery Engine extras
  growthDreams: text("growth_dreams"),
  currentPain: text("current_pain"),
  websiteRole: text("website_role"),
  aiOneThing: text("ai_one_thing"),
  biggestProblem: text("biggest_problem"),
  futureVision: text("future_vision"),

  // Computed persona
  growthPersona: text("growth_persona"),

  // Client metadata
  browser: text("browser"),
  device: text("device"),
  os: text("os"),
  language: text("language"),
  timezone: text("timezone"),
  country: text("country"),
  utmSource: text("utm_source"),
  utmMedium: text("utm_medium"),
  utmCampaign: text("utm_campaign"),
  referrer: text("referrer"),
  sessionId: text("session_id"),
  bookedCall: text("booked_call"),
  revenueOpportunity: text("revenue_opportunity"),
});

export const insertSurveySubmissionSchema = createInsertSchema(
  surveySubmissionsTable,
).omit({ id: true, createdAt: true });

export type InsertSurveySubmission = z.infer<
  typeof insertSurveySubmissionSchema
>;
export type SurveySubmission = typeof surveySubmissionsTable.$inferSelect;
