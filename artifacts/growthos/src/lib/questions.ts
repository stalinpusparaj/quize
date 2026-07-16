import type { SurveyInput } from "@workspace/api-client-react";

export type QuestionType = 'choice' | 'open' | 'input' | 'slider' | 'contact';

export interface QuestionOption {
  label: string;
  emoji: string;
  value: string;
}

export interface Question {
  id: string;
  mission: string;
  title: string;
  subtitle?: string;        // shown below title as examples/hint
  placeholder?: string;     // input placeholder text
  type: QuestionType;
  field: keyof SurveyInput;
  multiSelect?: boolean;
  optional?: boolean;
  options?: QuestionOption[];
  suggestions?: string[];   // quick-pick chips shown below the input
  robotText: string;
}

export const surveyQuestions: Question[] = [
  // Profile Section (new)
  {
    id: "q0a",
    mission: "Quick Profile",
    title: "What is your role?",
    type: "choice",
    field: "userRole",
    robotText: "Let's start with who you are. Your role shapes everything.",
    options: [
      { label: "Founder / Director", emoji: "💰", value: "Founder/Director" },
      { label: "Finance", emoji: "📊", value: "Finance" },
      { label: "Sales", emoji: "📈", value: "Sales" },
      { label: "Customer Success", emoji: "🛟", value: "Customer Success" },
      { label: "Recruiting", emoji: "🚀", value: "Recruiting" },
      { label: "Marketing", emoji: "📣", value: "Marketing" },
      { label: "Education", emoji: "📚", value: "Education" },
      { label: "Consulting", emoji: "💼", value: "Consulting" },
      { label: "Other", emoji: "🦄", value: "Other" },
    ],
  },
  {
    id: "q0b",
    mission: "Quick Profile",
    title: "What is your business or expertise?",
    subtitle: "Click a suggestion or type your own",
    placeholder: "e.g. AI Automation, Digital Marketing…",
    type: "input",
    field: "businessExpertise",
    suggestions: ["AI Automation", "Digital Marketing", "Fitness Coaching", "HR Consulting", "Stock Market", "Real Estate", "SaaS", "E-commerce", "EdTech", "FinTech"],
    robotText: "Tell me about your world — I'll map the opportunities.",
    optional: true,
  },
  {
    id: "q0c",
    mission: "Quick Profile",
    title: "Who is your target audience?",
    subtitle: "Click a suggestion or type your own",
    placeholder: "e.g. Coaches, Doctors, Small Business Owners…",
    type: "input",
    field: "targetAudience",
    suggestions: ["Coaches", "Doctors", "Small Business Owners", "Agencies", "Students", "Manufacturers", "Realtors", "Freelancers", "Enterprises", "Startups"],
    robotText: "Every great product knows exactly who it serves.",
    optional: true,
  },
  {
    id: "q0d",
    mission: "Quick Profile",
    title: "What product or service do you currently offer (or want to sell)?",
    subtitle: "Click a suggestion or type your own",
    placeholder: "e.g. 1:1 Coaching, Course, Agency Service…",
    type: "input",
    field: "productService",
    suggestions: ["1:1 Coaching", "Course", "Agency Service", "Consulting", "Done-for-You Service", "Membership", "Software", "SaaS Product", "Physical Product"],
    robotText: "The offer is the engine. Let's see what's under the hood.",
    optional: true,
  },

  // Mission 1: Business Identity
  {
    id: "q1",
    mission: "Mission 1: Business Identity",
    title: "What type of business do you run?",
    type: "choice",
    field: "businessType",
    robotText: "Every great journey starts with a map. Let's find your coordinates.",
    options: [
      { label: "Healthcare", emoji: "🏥", value: "Healthcare" },
      { label: "Agency", emoji: "🎯", value: "Agency" },
      { label: "SaaS", emoji: "💻", value: "SaaS" },
      { label: "Manufacturing", emoji: "🏭", value: "Manufacturing" },
      { label: "Real Estate", emoji: "🏠", value: "Real Estate" },
      { label: "Education", emoji: "📚", value: "Education" },
      { label: "Finance", emoji: "💰", value: "Finance" },
      { label: "Retail", emoji: "🛍️", value: "Retail" },
      { label: "Consulting", emoji: "🤝", value: "Consulting" },
      { label: "Other", emoji: "✨", value: "Other" }
    ]
  },
  {
    id: "q2",
    mission: "Mission 1: Business Identity",
    title: "How big is your team?",
    type: "choice",
    field: "employees",
    robotText: "A ship needs a crew. How many are aboard?",
    options: [
      { label: "Solo", emoji: "👤", value: "Solo" },
      { label: "2-10", emoji: "👥", value: "2-10" },
      { label: "11-50", emoji: "🏢", value: "11-50" },
      { label: "50-250", emoji: "🏬", value: "50-250" },
      { label: "250+", emoji: "🌍", value: "250+" }
    ]
  },
  {
    id: "q3",
    mission: "Mission 1: Business Identity",
    title: "Where is your business in its journey?",
    type: "choice",
    field: "revenueStage",
    robotText: "Scale isn't just a number, it's a mindset.",
    options: [
      { label: "Just Starting", emoji: "💰", value: "Just Starting" },
      { label: "Growing", emoji: "🌱", value: "Growing" },
      { label: "Scaling", emoji: "🚀", value: "Scaling" },
      { label: "Established", emoji: "🏆", value: "Established" },
      { label: "Enterprise", emoji: "🌎", value: "Enterprise" }
    ]
  },
  
  // Mission 2: Growth Goals
  {
    id: "q4",
    mission: "Mission 2: Growth Goals",
    title: "Imagine tomorrow morning... your business has doubled. What changed?",
    type: "choice",
    field: "growthDreams",
    multiSelect: true,
    robotText: "Dream big. I'll help you build the ladder.",
    options: [
      { label: "More Leads", emoji: "🔥", value: "More Leads" },
      { label: "More Revenue", emoji: "💰", value: "More Revenue" },
      { label: "More Automation", emoji: "🤖", value: "More Automation" },
      { label: "Better Customers", emoji: "⭐", value: "Better Customers" },
      { label: "More Appointments", emoji: "📞", value: "More Appointments" },
      { label: "Faster Sales", emoji: "⚡", value: "Faster Sales" },
      { label: "Better Retention", emoji: "❤️", value: "Better Retention" },
      { label: "Better Website", emoji: "📈", value: "Better Website" },
      { label: "Better Marketing", emoji: "🎯", value: "Better Marketing" },
      { label: "Better AI", emoji: "🧠", value: "Better AI" }
    ]
  },

  // Mission 3: Lead Journey
  {
    id: "q5",
    mission: "Mission 3: Lead Journey",
    title: "How do new customers currently reach you?",
    type: "choice",
    field: "leadSources",
    multiSelect: true,
    robotText: "Let's trace the signal back to the source.",
    options: [
      { label: "Google", emoji: "🌍", value: "Google" },
      { label: "Instagram", emoji: "📱", value: "Instagram" },
      { label: "YouTube", emoji: "🎥", value: "YouTube" },
      { label: "WhatsApp", emoji: "💬", value: "WhatsApp" },
      { label: "Referral", emoji: "👥", value: "Referral" },
      { label: "Cold Calling", emoji: "📞", value: "Cold Calling" },
      { label: "Email", emoji: "📧", value: "Email" },
      { label: "Events", emoji: "🏢", value: "Events" },
      { label: "Website", emoji: "🌐", value: "Website" },
      { label: "Partners", emoji: "🤝", value: "Partners" }
    ]
  },
  {
    id: "q6",
    mission: "Mission 3: Lead Journey",
    title: "Which source generates your BEST customers?",
    type: "choice",
    field: "bestLeadSource",
    robotText: "Quality over quantity. Always.",
    options: [
      { label: "Google", emoji: "🌍", value: "Google" },
      { label: "Instagram", emoji: "📱", value: "Instagram" },
      { label: "YouTube", emoji: "🎥", value: "YouTube" },
      { label: "WhatsApp", emoji: "💬", value: "WhatsApp" },
      { label: "Referral", emoji: "👥", value: "Referral" },
      { label: "Cold Calling", emoji: "📞", value: "Cold Calling" },
      { label: "Email", emoji: "📧", value: "Email" },
      { label: "Events", emoji: "🏢", value: "Events" },
      { label: "Website", emoji: "🌐", value: "Website" },
      { label: "Partners", emoji: "🤝", value: "Partners" }
    ]
  },
  {
    id: "q7",
    mission: "Mission 3: Lead Journey",
    title: "How many leads per month?",
    type: "choice",
    field: "monthlyLeads",
    robotText: "Measuring the flow rate...",
    options: [
      { label: "0-10", emoji: "🌱", value: "0-10" },
      { label: "10-50", emoji: "📈", value: "10-50" },
      { label: "50-200", emoji: "🚀", value: "50-200" },
      { label: "200-500", emoji: "⚡", value: "200-500" },
      { label: "500+", emoji: "🏆", value: "500+" }
    ]
  },
  {
    id: "q8",
    mission: "Mission 3: Lead Journey",
    title: "Are you satisfied with your lead quality?",
    type: "choice",
    field: "leadSatisfaction",
    robotText: "Not all signals are strong. Let's filter the noise.",
    options: [
      { label: "Very Satisfied", emoji: "😍", value: "Very Satisfied" },
      { label: "Satisfied", emoji: "😊", value: "Satisfied" },
      { label: "Neutral", emoji: "😐", value: "Neutral" },
      { label: "Not Satisfied", emoji: "😕", value: "Not Satisfied" },
      { label: "Very Dissatisfied", emoji: "😩", value: "Very Dissatisfied" }
    ]
  },

  // Mission 4: Website Journey
  {
    id: "q9",
    mission: "Mission 4: Website Journey",
    title: "Complete this sentence: My website is like a...",
    type: "choice",
    field: "websiteRole",
    robotText: "Your digital headquarters. Let's evaluate its defenses.",
    options: [
      { label: "Digital Brochure", emoji: "😴", value: "Digital Brochure" },
      { label: "Lead Generator", emoji: "📞", value: "Lead Generator" },
      { label: "Salesperson", emoji: "🛒", value: "Salesperson" },
      { label: "Portfolio", emoji: "💼", value: "Portfolio" },
      { label: "24/7 Employee", emoji: "🤖", value: "24/7 Employee" },
      { label: "I don't know", emoji: "🤷", value: "I don't know" }
    ]
  },
  {
    id: "q10",
    mission: "Mission 4: Website Journey",
    title: "Do you know your website conversion rate?",
    type: "choice",
    field: "knowsConversionRate",
    robotText: "If you can't measure it, you can't improve it.",
    options: [
      { label: "Yes", emoji: "📊", value: "Yes" },
      { label: "No", emoji: "🤷", value: "No" }
    ]
  },
  {
    id: "q11",
    mission: "Mission 4: Website Journey",
    title: "Have you optimized for conversions?",
    type: "choice",
    field: "websiteOptimization",
    robotText: "Optimization is the difference between surviving and thriving.",
    options: [
      { label: "Never", emoji: "🚫", value: "Never" },
      { label: "Sometimes", emoji: "⚡", value: "Sometimes" },
      { label: "Frequently", emoji: "🎯", value: "Frequently" }
    ]
  },
  {
    id: "q12",
    mission: "Mission 4: Website Journey",
    title: "What frustrates you most?",
    type: "choice",
    field: "websiteFrustrations",
    multiSelect: true,
    robotText: "Friction kills growth. Let's find the bottlenecks.",
    options: [
      { label: "Low traffic", emoji: "📉", value: "Low traffic" },
      { label: "Low conversions", emoji: "💔", value: "Low conversions" },
      { label: "Poor design", emoji: "🎨", value: "Poor design" },
      { label: "Slow speed", emoji: "⏱️", value: "Slow speed" },
      { label: "No trust", emoji: "🚫", value: "No trust" },
      { label: "No analytics", emoji: "📊", value: "No analytics" },
      { label: "No landing pages", emoji: "📄", value: "No landing pages" },
      { label: "Poor SEO", emoji: "🔍", value: "Poor SEO" }
    ]
  },

  // Mission 5: Sales Journey
  {
    id: "q13",
    mission: "Mission 5: Sales Journey",
    title: "Which one feels most true today?",
    type: "choice",
    field: "currentPain",
    robotText: "Honesty is the fastest path to optimization.",
    options: [
      { label: "I don't get enough leads", emoji: "😩", value: "I don't get enough leads" },
      { label: "I get leads but they don't convert", emoji: "😕", value: "I get leads but they don't convert" },
      { label: "Everything is manual", emoji: "🤯", value: "Everything is manual" },
      { label: "Marketing is expensive", emoji: "😤", value: "Marketing is expensive" },
      { label: "I don't know what's working", emoji: "😶", value: "I don't know what's working" },
      { label: "Business is good, I want to scale", emoji: "😎", value: "Business is good, I want to scale" }
    ]
  },
  {
    id: "q14",
    mission: "Mission 5: Sales Journey",
    title: "Do you currently use a CRM?",
    type: "choice",
    field: "crmTool",
    robotText: "Your mission control system for customer data.",
    options: [
      { label: "No CRM", emoji: "❌", value: "No CRM" },
      { label: "HubSpot", emoji: "🟠", value: "HubSpot" },
      { label: "Zoho", emoji: "🔵", value: "Zoho" },
      { label: "Salesforce", emoji: "☁️", value: "Salesforce" },
      { label: "GoHighLevel", emoji: "⚡", value: "GoHighLevel" },
      { label: "Freshsales", emoji: "🌿", value: "Freshsales" },
      { label: "Pipedrive", emoji: "🔵", value: "Pipedrive" },
      { label: "Other", emoji: "✨", value: "Other" }
    ]
  },
  {
    id: "q15",
    mission: "Mission 5: Sales Journey",
    title: "Is your website connected to your CRM?",
    type: "choice",
    field: "crmConnected",
    robotText: "Disconnected systems mean lost opportunities.",
    options: [
      { label: "Yes", emoji: "✅", value: "Yes" },
      { label: "Partially", emoji: "⚡", value: "Partially" },
      { label: "No", emoji: "❌", value: "No" }
    ]
  },
  {
    id: "q16",
    mission: "Mission 5: Sales Journey",
    title: "Are leads automatically added to your CRM?",
    type: "choice",
    field: "leadsAutoAdded",
    robotText: "Manual entry is an error waiting to happen.",
    options: [
      { label: "Always", emoji: "✅", value: "Always" },
      { label: "Sometimes", emoji: "⚡", value: "Sometimes" },
      { label: "Never", emoji: "❌", value: "Never" }
    ]
  },

  // Mission 6: Customer Journey
  {
    id: "q17",
    mission: "Mission 6: Customer Journey",
    title: "Once someone is interested, what usually happens?",
    type: "choice",
    field: "websiteFeatures",
    multiSelect: true,
    robotText: "The moment of truth. What's the next step?",
    options: [
      { label: "They leave", emoji: "👀", value: "They leave" },
      { label: "They call", emoji: "📞", value: "They call" },
      { label: "Book Meeting", emoji: "📅", value: "Book Meeting" },
      { label: "Fill Form", emoji: "📝", value: "Fill Form" },
      { label: "WhatsApp", emoji: "💬", value: "WhatsApp" },
      { label: "Buy Online", emoji: "🛒", value: "Buy Online" },
      { label: "Chatbot", emoji: "🤖", value: "Chatbot" }
    ]
  },
  {
    id: "q18",
    mission: "Mission 6: Customer Journey",
    title: "Do you automate follow-ups?",
    type: "choice",
    field: "followUpAutomation",
    multiSelect: true,
    robotText: "The fortune is in the follow-up.",
    options: [
      { label: "Email", emoji: "📧", value: "Email" },
      { label: "WhatsApp", emoji: "💬", value: "WhatsApp" },
      { label: "SMS", emoji: "📱", value: "SMS" },
      { label: "No automation", emoji: "❌", value: "No automation" }
    ]
  },

  // Mission 7: Automation Journey
  {
    id: "q19",
    mission: "Mission 7: Automation Journey",
    title: "Which analytics tools do you use?",
    type: "choice",
    field: "analyticsTools",
    multiSelect: true,
    robotText: "Scanning your sensor arrays...",
    options: [
      { label: "Google Analytics", emoji: "📊", value: "Google Analytics" },
      { label: "Search Console", emoji: "🔍", value: "Search Console" },
      { label: "Microsoft Clarity", emoji: "🪟", value: "Microsoft Clarity" },
      { label: "Hotjar", emoji: "🔥", value: "Hotjar" },
      { label: "Looker", emoji: "👁️", value: "Looker" },
      { label: "Power BI", emoji: "📊", value: "Power BI" },
      { label: "CRM Reports", emoji: "📋", value: "CRM Reports" },
      { label: "None", emoji: "❌", value: "None" }
    ]
  },
  {
    id: "q20",
    mission: "Mission 7: Automation Journey",
    title: "Can you identify why visitors leave your website?",
    type: "choice",
    field: "knowsExitReason",
    robotText: "A leak in the hull. Can we spot it?",
    options: [
      { label: "Yes", emoji: "🎯", value: "Yes" },
      { label: "No", emoji: "🤷", value: "No" }
    ]
  },
  {
    id: "q21",
    mission: "Mission 7: Automation Journey",
    title: "Can you identify your best-performing page?",
    type: "choice",
    field: "knowsBestPage",
    robotText: "Double down on what works.",
    options: [
      { label: "Yes", emoji: "🏆", value: "Yes" },
      { label: "No", emoji: "🤷", value: "No" }
    ]
  },

  // Mission 8: Business Intelligence
  {
    id: "q22",
    mission: "Mission 8: Business Intelligence",
    title: "What keeps you awake at night?",
    type: "choice",
    field: "biggestProblem",
    robotText: "Every pilot has worries. What are yours?",
    options: [
      { label: "Money", emoji: "💸", value: "Money" },
      { label: "Sales", emoji: "📉", value: "Sales" },
      { label: "Leads", emoji: "📞", value: "Leads" },
      { label: "Operations", emoji: "⚙️", value: "Operations" },
      { label: "Hiring", emoji: "👥", value: "Hiring" },
      { label: "Growth", emoji: "📈", value: "Growth" },
      { label: "Technology", emoji: "🤖", value: "Technology" },
      { label: "Marketing", emoji: "📢", value: "Marketing" }
    ]
  },
  {
    id: "q23",
    mission: "Mission 8: Business Intelligence",
    title: "If AI could do ONE thing for your business...",
    type: "choice",
    field: "aiOneThing",
    robotText: "Imagine adding infinite intelligence to your team.",
    options: [
      { label: "Answer customers", emoji: "🤖", value: "Answer customers" },
      { label: "Book meetings", emoji: "📅", value: "Book meetings" },
      { label: "Find opportunities", emoji: "📊", value: "Find growth opportunities" },
      { label: "Improve conversion", emoji: "📈", value: "Improve conversion" },
      { label: "Write content", emoji: "💬", value: "Write content" },
      { label: "Follow up leads", emoji: "📧", value: "Follow up leads" },
      { label: "Everything", emoji: "⚡", value: "Everything" }
    ]
  },

  // Mission 9: AI Readiness
  {
    id: "q24",
    mission: "Mission 9: AI Readiness",
    title: "Do you currently use AI tools?",
    type: "choice",
    field: "aiTools",
    multiSelect: true,
    robotText: "The future is already here.",
    options: [
      { label: "ChatGPT", emoji: "🤖", value: "ChatGPT" },
      { label: "Claude", emoji: "🧠", value: "Claude" },
      { label: "Gemini", emoji: "✨", value: "Gemini" },
      { label: "Copilot", emoji: "💻", value: "Copilot" },
      { label: "Perplexity", emoji: "🔍", value: "Perplexity" },
      { label: "None", emoji: "❌", value: "None" }
    ]
  },
  {
    id: "q25",
    mission: "Mission 9: AI Readiness",
    title: "Would you trust an AI to analyze your business?",
    type: "choice",
    field: "aiTrust",
    robotText: "Trust is the foundation of acceleration.",
    options: [
      { label: "Yes, absolutely", emoji: "🤝", value: "Yes, absolutely" },
      { label: "Maybe with proof", emoji: "🤔", value: "Maybe with proof" },
      { label: "Not yet", emoji: "😐", value: "Not yet" }
    ]
  },
  {
    id: "q26",
    mission: "Mission 9: AI Readiness",
    title: "Which AI feature interests you most?",
    type: "choice",
    field: "desiredAiFeature",
    robotText: "Select your desired upgrade module.",
    options: [
      { label: "Lead qualification", emoji: "🎯", value: "Lead qualification" },
      { label: "Website analysis", emoji: "📊", value: "Website analysis" },
      { label: "Recommendations", emoji: "💡", value: "Sales recommendations" },
      { label: "Automation", emoji: "🤖", value: "Marketing automation" },
      { label: "Competitor insights", emoji: "🔍", value: "Competitor insights" },
      { label: "Revenue forecasting", emoji: "📈", value: "Revenue forecasting" }
    ]
  },

  // Mission 10: Future Vision
  {
    id: "q27",
    mission: "Mission 10: Future Vision",
    title: "Imagine it's 12 months later. Your business is thriving. Which headline would you love to read?",
    type: "choice",
    field: "futureVision",
    robotText: "Setting coordinates for your destination.",
    options: [
      { label: "Revenue Doubled", emoji: "🏆", value: "Revenue Doubled" },
      { label: "1000 New Customers", emoji: "🚀", value: "1000 New Customers" },
      { label: "Runs Automatically", emoji: "🤖", value: "Business Runs Automatically" },
      { label: "Global Expansion", emoji: "🌍", value: "Expanded Internationally" },
      { label: "Highest Profits", emoji: "💰", value: "Highest Profits Ever" },
      { label: "Customers Love Us", emoji: "❤️", value: "Customers Love Us" }
    ]
  },
  {
    id: "q28",
    mission: "Mission 10: Future Vision",
    title: "Have you ever invested in any of these?",
    type: "choice",
    field: "pastInvestments",
    multiSelect: true,
    robotText: "Reviewing your historical upgrade paths...",
    options: [
      { label: "Website", emoji: "🌐", value: "Website" },
      { label: "Landing Page", emoji: "📄", value: "Landing Page" },
      { label: "SEO", emoji: "🔍", value: "SEO" },
      { label: "CRM", emoji: "💼", value: "CRM" },
      { label: "Consultant", emoji: "🤝", value: "Consultant" },
      { label: "Agency", emoji: "🎯", value: "Marketing Agency" },
      { label: "Coach", emoji: "💡", value: "Business Coach" },
      { label: "Never", emoji: "❌", value: "Never" }
    ]
  },
  {
    id: "q29",
    mission: "Mission 10: Future Vision",
    title: "Marketing investment in the last 12 months?",
    type: "choice",
    field: "marketingSpend",
    robotText: "Fuel is required for propulsion.",
    options: [
      { label: "Under $1k", emoji: "🌱", value: "Under $1k" },
      { label: "$1k-$5k", emoji: "📈", value: "$1k-$5k" },
      { label: "$5k-$20k", emoji: "🚀", value: "$5k-$20k" },
      { label: "$20k+", emoji: "🏆", value: "$20k+" }
    ]
  },
  {
    id: "q30",
    mission: "Mission 10: Future Vision",
    title: "If an AI platform could identify hidden revenue opportunities and give you a step-by-step action plan, how valuable would that be?",
    type: "slider",
    field: "valueRating",
    robotText: "Value is subjective. Give it a score."
  },
  {
    id: "q31",
    mission: "Mission 10: Future Vision",
    title: "Would you like early access to GrowthOS™?",
    type: "choice",
    field: "wantsEarlyAccess",
    robotText: "The airlock is opening. Step inside?",
    options: [
      { label: "Yes!", emoji: "🚀", value: "Yes!" },
      { label: "Maybe", emoji: "🤔", value: "Maybe" },
      { label: "No", emoji: "❌", value: "No" }
    ]
  },
  {
    id: "q32",
    mission: "Mission 10: Future Vision",
    title: "Would you join a 20-minute discovery interview?",
    type: "choice",
    field: "openToInterview",
    robotText: "Direct comms established. Ready to talk?",
    options: [
      { label: "Yes", emoji: "🎯", value: "Yes" },
      { label: "No", emoji: "❌", value: "No" }
    ]
  },

  // Open-Text Deep Scan
  {
    id: "q33",
    mission: "Deep Scan",
    title: "What is the single biggest obstacle preventing faster growth?",
    type: "open",
    field: "biggestObstacle",
    robotText: "The most important question I'll ask you..."
  },
  {
    id: "q34",
    mission: "Deep Scan",
    title: "If you could instantly improve one area of your business, what would it be?",
    type: "open",
    field: "desiredImprovement",
    robotText: "Imagine you had a magic wand..."
  },
  {
    id: "q35",
    mission: "Deep Scan",
    title: "What information do you wish your website could tell you?",
    type: "open",
    field: "websiteWish",
    robotText: "You're almost done. One last insight..."
  },
  {
    id: "q36",
    mission: "Identity Verification",
    title: "Finalizing your scan profile...",
    type: "contact",
    field: "email",
    robotText: "Almost there! I just need to know where to send the report."
  }
];

export const calculatePersona = (answers: Partial<SurveyInput>) => {
  const pain = answers.currentPain;
  const stage = answers.revenueStage;
  const frustrations = answers.websiteFrustrations || [];

  if (pain === "I get leads but they don't convert") {
    return {
      title: "🚀 THE OPPORTUNITY HUNTER",
      desc: "You have traffic and attention, but the conversion engine needs tuning. You're sitting on a goldmine of untapped revenue.",
      tags: ["Conversion Rate Optimization", "Lead Nurturing", "Sales Pipeline"]
    };
  }
  if (pain === "Everything is manual") {
    return {
      title: "⚡ THE GROWTH ACCELERATOR",
      desc: "You've built something great, but your processes are holding you back. It's time to build a machine that works while you sleep.",
      tags: ["Marketing Automation", "CRM Integration", "AI Workflows"]
    };
  }
  if (frustrations.includes("Low conversions")) {
    return {
      title: "🎯 THE CONVERSION ARCHITECT",
      desc: "Your digital presence needs an overhaul to turn passive visitors into active buyers. Your website should be your best salesperson.",
      tags: ["Landing Page Design", "Copywriting", "A/B Testing"]
    };
  }
  if (pain === "I don't get enough leads" || stage === "Just Starting" || stage === "Growing") {
    return {
      title: "🌱 THE EMERGING LEADER",
      desc: "You have the vision, now you need the volume. Your biggest priority is building a scalable, predictable lead generation engine.",
      tags: ["Traffic Generation", "Offer Creation", "Inbound Marketing"]
    };
  }
  if (stage === "Established" || stage === "Enterprise") {
    return {
      title: "🏆 THE MARKET DOMINATOR",
      desc: "You've won your category. Now it's about expanding your territory, optimizing margins, and leveraging AI to stay untouchable.",
      tags: ["Market Expansion", "AI Intelligence", "Operational Efficiency"]
    };
  }
  
  return {
    title: "🧠 THE DIGITAL TRANSFORMER",
    desc: "You recognize the power of AI and digital leverage. You're ready to modernize your operations to leapfrog the competition.",
    tags: ["Digital Transformation", "AI Adoption", "Data Analytics"]
  };
};

export const getEstimatedValue = () => {
  // INR range: ₹5 Lakh to ₹5 Crore
  const min = 500000;       // ₹5 L
  const max = 50000000;     // ₹5 Cr
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
