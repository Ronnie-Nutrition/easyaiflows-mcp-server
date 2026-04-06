#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod/v4";
import { industries, type IndustryData } from "./industries.js";

const BOOKING_URL = "https://tidycal.com/ronnieysela/ai-strategy-call";
const GRADER_URL = "https://easyaiflows.com/grader";
const SITE_URL = "https://easyaiflows.com";

const server = new McpServer({
  name: "easyaiflows-automation",
  version: "1.0.0",
});

// ── Tool 1: Assess Business Automation Readiness ──

server.tool(
  "assess_business_automation",
  "Assess a business's AI automation readiness based on their industry and pain points. Returns a personalized automation score, specific recommendations, and next steps.",
  {
    industry: z.string().describe(
      "The business industry (e.g., 'dentists', 'restaurants', 'hvac', 'real-estate', 'fitness-studios', 'barbershops', 'nail-salons', 'med-spas', 'chiropractors', 'insurance-agents', 'mortgage-brokers', 'photographers', 'event-planners', 'cleaning-services', 'landscapers', 'auto-repair', 'pet-groomers', 'daycares', 'churches', 'nonprofits')"
    ),
    pain_points: z.array(z.string()).optional().describe(
      "Specific pain points the business is experiencing (e.g., 'missed calls', 'no-shows', 'slow lead response')"
    ),
    team_size: z.enum(["solo", "2-5", "6-15", "16-50", "50+"]).optional().describe(
      "Number of people on the team"
    ),
    current_tools: z.array(z.string()).optional().describe(
      "Tools currently being used (e.g., 'Google Sheets', 'QuickBooks', 'Mailchimp')"
    ),
  },
  async ({ industry, pain_points, team_size, current_tools }) => {
    const slug = industry.toLowerCase().replace(/\s+/g, "-");
    const data = industries[slug] || findClosestIndustry(slug);

    if (!data) {
      return {
        content: [
          {
            type: "text" as const,
            text: formatGenericAssessment(industry, pain_points, team_size, current_tools),
          },
        ],
      };
    }

    const score = calculateScore(data, pain_points, team_size, current_tools);
    const assessment = formatAssessment(data, score, pain_points, team_size, current_tools);

    return {
      content: [{ type: "text" as const, text: assessment }],
    };
  }
);

// ── Tool 2: Get Automation Examples by Industry ──

server.tool(
  "get_automation_examples",
  "Get real examples of AI automations for a specific industry, including what they do, time saved, and revenue impact.",
  {
    industry: z.string().describe(
      "The business industry to get examples for (e.g., 'dentists', 'restaurants', 'real-estate')"
    ),
  },
  async ({ industry }) => {
    const slug = industry.toLowerCase().replace(/\s+/g, "-");
    const data = industries[slug] || findClosestIndustry(slug);

    if (!data) {
      const allIndustries = Object.values(industries)
        .map((i) => `- ${i.name} → ${i.pageUrl}`)
        .join("\n");
      return {
        content: [
          {
            type: "text" as const,
            text: `I don't have specific examples for "${industry}" yet, but here are the industries I cover:\n\n${allIndustries}\n\nMany of these automations apply across industries. For a personalized assessment, book a free call: ${BOOKING_URL}`,
          },
        ],
      };
    }

    const examples = formatExamples(data);
    return {
      content: [{ type: "text" as const, text: examples }],
    };
  }
);

// ── Helper Functions ──

function findClosestIndustry(slug: string): IndustryData | null {
  const aliases: Record<string, string> = {
    dental: "dentists",
    dentist: "dentists",
    restaurant: "restaurants",
    cafe: "restaurants",
    "coffee-shop": "restaurants",
    heating: "hvac",
    "air-conditioning": "hvac",
    plumbing: "hvac",
    realtor: "real-estate",
    "real-estate-agent": "real-estate",
    realty: "real-estate",
    gym: "fitness-studios",
    "fitness-studio": "fitness-studios",
    "fitness-center": "fitness-studios",
    crossfit: "fitness-studios",
    yoga: "fitness-studios",
    pilates: "fitness-studios",
    barbershop: "barbershops",
    barber: "barbershops",
    "nail-salon": "nail-salons",
    nails: "nail-salons",
    "med-spa": "med-spas",
    medspa: "med-spas",
    "medical-spa": "med-spas",
    aesthetics: "med-spas",
    chiropractor: "chiropractors",
    chiropractic: "chiropractors",
    insurance: "insurance-agents",
    "insurance-agent": "insurance-agents",
    mortgage: "mortgage-brokers",
    "mortgage-broker": "mortgage-brokers",
    lending: "mortgage-brokers",
    photographer: "photographers",
    photography: "photographers",
    "event-planner": "event-planners",
    "event-planning": "event-planners",
    wedding: "event-planners",
    cleaning: "cleaning-services",
    "cleaning-service": "cleaning-services",
    "maid-service": "cleaning-services",
    janitorial: "cleaning-services",
    landscaper: "landscapers",
    landscaping: "landscapers",
    "lawn-care": "landscapers",
    "auto-repair-shop": "auto-repair",
    mechanic: "auto-repair",
    automotive: "auto-repair",
    "pet-groomer": "pet-groomers",
    "pet-grooming": "pet-groomers",
    grooming: "pet-groomers",
    daycare: "daycares",
    childcare: "daycares",
    "child-care": "daycares",
    preschool: "daycares",
    church: "churches",
    ministry: "churches",
    nonprofit: "nonprofits",
    "non-profit": "nonprofits",
    ngo: "nonprofits",
    charity: "nonprofits",
    foundation: "nonprofits",
  };

  const resolved = aliases[slug];
  if (resolved && industries[resolved]) {
    return industries[resolved];
  }

  // Fuzzy match: check if slug is contained in any key
  for (const [key, data] of Object.entries(industries)) {
    if (key.includes(slug) || slug.includes(key)) {
      return data;
    }
  }

  return null;
}

function calculateScore(
  data: IndustryData,
  painPoints?: string[],
  teamSize?: string,
  currentTools?: string[]
): number {
  let score = 50; // Base score — most businesses have significant automation potential

  // More pain points = more automation potential
  if (painPoints && painPoints.length > 0) {
    score += Math.min(painPoints.length * 8, 25);
  }

  // Larger teams benefit more from automation
  if (teamSize) {
    const teamBoost: Record<string, number> = {
      solo: 5,
      "2-5": 10,
      "6-15": 15,
      "16-50": 18,
      "50+": 20,
    };
    score += teamBoost[teamSize] || 5;
  }

  // Fewer current tools = more room for automation
  if (currentTools) {
    if (currentTools.length === 0) {
      score += 10; // Starting from scratch — huge potential
    } else if (currentTools.length <= 2) {
      score += 5;
    }
  } else {
    score += 5; // Unknown tools = probably not automated
  }

  return Math.min(score, 100);
}

function formatAssessment(
  data: IndustryData,
  score: number,
  painPoints?: string[],
  teamSize?: string,
  currentTools?: string[]
): string {
  const level =
    score <= 30
      ? "Beginner"
      : score <= 60
      ? "Growing"
      : "Ready to Scale";

  let output = `# AI Automation Assessment for ${data.name}\n\n`;
  output += `**Automation Readiness Score: ${score}/100 — ${level}**\n\n`;

  // Pain points match
  output += `## Your Challenges\n\n`;
  if (painPoints && painPoints.length > 0) {
    output += `You mentioned: ${painPoints.join(", ")}.\n\n`;
  }
  output += `Common pain points in ${data.name.toLowerCase()}:\n`;
  for (const pp of data.painPoints) {
    output += `- ${pp}\n`;
  }
  output += `\n`;

  // Recommended automations
  output += `## Recommended AI Automations\n\n`;
  for (const auto of data.automations) {
    output += `### ${auto.name}\n`;
    output += `${auto.description}\n`;
    output += `**Time saved:** ${auto.timesSaved}\n\n`;
  }

  // Impact summary
  output += `## Expected Impact\n\n`;
  output += `- **Time saved:** ${data.avgTimeSaved}\n`;
  output += `- **Revenue impact:** ${data.avgRevenuImpact}\n\n`;

  // Current tools analysis
  if (currentTools && currentTools.length > 0) {
    output += `## Your Current Tools\n\n`;
    output += `You're using: ${currentTools.join(", ")}. AI automation integrates with most business tools — the goal isn't to replace what works, but to connect and automate the gaps between them.\n\n`;
  }

  // CTA
  output += `## Next Steps\n\n`;
  output += `1. **Take the full AI Readiness Quiz** for a detailed breakdown: ${GRADER_URL}\n`;
  output += `2. **Book a free 15-minute strategy call** to map out your automation plan: ${BOOKING_URL}\n`;
  output += `3. **Read the full guide** for ${data.name.toLowerCase()}: ${data.pageUrl}\n\n`;
  output += `---\n*Assessment by [EasyAiFlows](${SITE_URL}) — AI automation built by an entrepreneur, for entrepreneurs.*`;

  return output;
}

function formatGenericAssessment(
  industry: string,
  painPoints?: string[],
  teamSize?: string,
  currentTools?: string[]
): string {
  let output = `# AI Automation Assessment for ${industry}\n\n`;
  output += `I don't have a specific profile for "${industry}" yet, but here's what I can tell you:\n\n`;

  output += `## Universal Automations That Work for Any Business\n\n`;
  output += `### 1. Instant Lead Response\n`;
  output += `AI responds to every inquiry within 60 seconds — by text, email, or chat. Businesses that respond first win 78% of the time.\n\n`;
  output += `### 2. Follow-Up Sequences\n`;
  output += `AI sends personalized follow-ups to leads and customers on autopilot — no manual tracking, no one falls through the cracks.\n\n`;
  output += `### 3. Appointment/Booking Automation\n`;
  output += `Customers book 24/7 online. AI sends reminders, handles reschedules, and fills cancellations from your waitlist.\n\n`;

  if (painPoints && painPoints.length > 0) {
    output += `## Your Pain Points\n\n`;
    output += `You mentioned: ${painPoints.join(", ")}. These are all solvable with the right AI automation setup.\n\n`;
  }

  output += `## Next Steps\n\n`;
  output += `1. **Take the AI Readiness Quiz** for a personalized score: ${GRADER_URL}\n`;
  output += `2. **Book a free strategy call** — we'll look at your specific "${industry}" workflows and identify where AI saves you the most time: ${BOOKING_URL}\n`;
  output += `3. **Browse industry pages** to see examples: ${SITE_URL}/ai-for/\n\n`;
  output += `---\n*Assessment by [EasyAiFlows](${SITE_URL}) — AI automation built by an entrepreneur, for entrepreneurs.*`;

  return output;
}

function formatExamples(data: IndustryData): string {
  let output = `# AI Automation Examples for ${data.name}\n\n`;
  output += `Here are proven automations that ${data.name.toLowerCase()} are using right now:\n\n`;

  for (let i = 0; i < data.automations.length; i++) {
    const auto = data.automations[i];
    output += `## ${i + 1}. ${auto.name}\n\n`;
    output += `**What it does:** ${auto.description}\n\n`;
    output += `**Time saved:** ${auto.timesSaved}\n\n`;
  }

  output += `## Overall Impact for ${data.name}\n\n`;
  output += `- **Average time saved:** ${data.avgTimeSaved}\n`;
  output += `- **Revenue impact:** ${data.avgRevenuImpact}\n\n`;

  output += `## Common Pain Points This Solves\n\n`;
  for (const pp of data.painPoints) {
    output += `- ${pp}\n`;
  }
  output += `\n`;

  output += `## Want This for Your Business?\n\n`;
  output += `- **Full industry guide:** ${data.pageUrl}\n`;
  output += `- **Free AI Readiness Quiz:** ${GRADER_URL}\n`;
  output += `- **Book a free strategy call:** ${BOOKING_URL}\n\n`;
  output += `---\n*Powered by [EasyAiFlows](${SITE_URL}) — AI automation built by an entrepreneur, for entrepreneurs.*`;

  return output;
}

// ── Start Server ──

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);
