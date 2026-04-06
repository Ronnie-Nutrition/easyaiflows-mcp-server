export interface IndustryData {
  name: string;
  slug: string;
  painPoints: string[];
  automations: { name: string; description: string; timesSaved: string }[];
  avgTimeSaved: string;
  avgRevenuImpact: string;
  pageUrl: string;
}

export const industries: Record<string, IndustryData> = {
  dentists: {
    name: "Dental Practices",
    slug: "dentists",
    painPoints: [
      "No-shows costing $150K+/year — manual reminder calls don't scale",
      "Front desk overwhelmed juggling phones, check-ins, and insurance verification",
      "Patient follow-ups fall through — revenue walks out the door"
    ],
    automations: [
      { name: "Smart Appointment Reminders", description: "AI sends text/email reminders 48hrs, 24hrs, and 2hrs before appointments with one-tap confirm/reschedule. No-shows drop 60%+.", timesSaved: "5 hrs/week" },
      { name: "AI Front Desk Assistant", description: "24/7 chatbot on website and Google listing answers FAQs, books appointments, handles insurance questions — no hold times.", timesSaved: "8 hrs/week" },
      { name: "Automated Recall & Reactivation", description: "AI identifies patients overdue for cleanings or treatment and sends personalized reactivation sequences.", timesSaved: "3 hrs/week" }
    ],
    avgTimeSaved: "15+ hours/week",
    avgRevenuImpact: "$8K+/month recovered revenue",
    pageUrl: "https://easyaiflows.com/ai-for/dentists"
  },
  restaurants: {
    name: "Restaurants",
    slug: "restaurants",
    painPoints: [
      "Phone won't stop ringing — staff pulled between orders, questions, and reservations",
      "Online reviews going unanswered for weeks, hurting reputation",
      "Marketing is an afterthought — no time for social media or promos"
    ],
    automations: [
      { name: "AI Order Taking", description: "AI assistant takes phone and online orders 24/7, integrates with POS. No missed calls, no miscommunication.", timesSaved: "10 hrs/week" },
      { name: "Review Auto-Response", description: "AI monitors Google/Yelp/Facebook and responds to reviews within minutes — positive ones thanked, negative ones addressed.", timesSaved: "4 hrs/week" },
      { name: "Automated Marketing Campaigns", description: "AI sends weekly specials, birthday promos, and re-engagement texts to past customers on autopilot.", timesSaved: "6 hrs/week" }
    ],
    avgTimeSaved: "20+ hours/week",
    avgRevenuImpact: "40% more online orders captured",
    pageUrl: "https://easyaiflows.com/ai-for/restaurants"
  },
  hvac: {
    name: "HVAC Companies",
    slug: "hvac",
    painPoints: [
      "Missed calls while on jobs — customers hire whoever answers first",
      "Scheduling chaos with double-bookings and last-minute cancellations",
      "Seasonal feast-or-famine — slammed in summer/winter, dead in spring/fall"
    ],
    automations: [
      { name: "24/7 AI Call Answering", description: "AI answers every call, qualifies the lead, books the appointment, and dispatches the nearest tech — even at 2 AM.", timesSaved: "8 hrs/week" },
      { name: "Smart Dispatch & Scheduling", description: "AI optimizes schedule based on location, job type, and tech availability. Reduces drive time, fits more jobs per day.", timesSaved: "5 hrs/week" },
      { name: "Seasonal Campaign Automation", description: "AI runs pre-season tune-up campaigns, maintenance reminders, and referral programs automatically year-round.", timesSaved: "4 hrs/week" }
    ],
    avgTimeSaved: "15+ hours/week",
    avgRevenuImpact: "$12K+/month from automations",
    pageUrl: "https://easyaiflows.com/ai-for/hvac"
  },
  "real-estate": {
    name: "Real Estate Agents",
    slug: "real-estate",
    painPoints: [
      "Online leads expect response in under 5 minutes — lose them if you're showing a house",
      "200+ contacts need regular touches — birthday texts, market updates, listing alerts",
      "Creating social posts and email blasts for every listing eats hours"
    ],
    automations: [
      { name: "Instant Lead Response", description: "AI responds to every new lead within 60 seconds via text, email, or DM. Qualifies them, answers questions, books showings.", timesSaved: "8 hrs/week" },
      { name: "Smart CRM Nurture Sequences", description: "AI sends personalized market updates, home anniversary texts, and check-ins to your entire database on autopilot.", timesSaved: "5 hrs/week" },
      { name: "One-Click Listing Marketing", description: "AI generates social posts, email campaigns, and ad copy for every new listing. Approve and publish in minutes.", timesSaved: "4 hrs/week" }
    ],
    avgTimeSaved: "10+ hours/week",
    avgRevenuImpact: "30% more deals closed",
    pageUrl: "https://easyaiflows.com/ai-for/real-estate"
  },
  "fitness-studios": {
    name: "Fitness Studios & Gyms",
    slug: "fitness-studios",
    painPoints: [
      "Trial members don't convert — 70%+ disappear without systematic follow-up",
      "Members cancel silently — by the time you notice, they've mentally quit",
      "DMs and inquiries pile up unanswered for hours"
    ],
    automations: [
      { name: "Trial-to-Member Conversion Sequence", description: "AI follows up with trial members: thank-you text after class, check-in at 48 hours, special offer at 7 days. Conversion jumps 40%+.", timesSaved: "5 hrs/week" },
      { name: "Proactive Retention Alerts", description: "AI tracks attendance and flags at-risk members before they cancel. Sends personalized re-engagement messages.", timesSaved: "3 hrs/week" },
      { name: "24/7 Lead Response Bot", description: "AI responds to every DM, form fill, and inquiry instantly — shares schedules, answers pricing questions, books trials.", timesSaved: "6 hrs/week" }
    ],
    avgTimeSaved: "14+ hours/week",
    avgRevenuImpact: "40% higher trial-to-member conversion",
    pageUrl: "https://easyaiflows.com/ai-for/fitness-studios"
  },
  barbershops: {
    name: "Barbershops",
    slug: "barbershops",
    painPoints: [
      "Every booking call interrupts a haircut",
      "No-shows waste prime appointment slots",
      "Clients don't rebook — they forget until they need a cut and call whoever's available"
    ],
    automations: [
      { name: "Online Booking + AI Chat", description: "Clients book through website, IG, or Google 24/7. AI chatbot answers questions and suggests open slots.", timesSaved: "3 hrs/week" },
      { name: "Smart Reminders & Waitlist", description: "AI sends reminders before appointments and fills cancelled slots from waitlist automatically.", timesSaved: "2 hrs/week" },
      { name: "Auto-Rebook Sequences", description: "AI texts clients 2-3 weeks after their last cut with a booking link. Calendar stays full.", timesSaved: "2 hrs/week" }
    ],
    avgTimeSaved: "5+ hours/week",
    avgRevenuImpact: "70% fewer no-shows, 2x more rebookings",
    pageUrl: "https://easyaiflows.com/ai-for/barbershops"
  },
  "nail-salons": {
    name: "Nail Salons",
    slug: "nail-salons",
    painPoints: [
      "Can't answer phone during services — new clients book elsewhere",
      "Late cancellations leave expensive gaps",
      "Clients forget to rebook at the right interval"
    ],
    automations: [
      { name: "24/7 Online Booking", description: "Clients book anytime from website, Instagram, or Google. AI suggests times and upsells add-ons.", timesSaved: "5 hrs/week" },
      { name: "Smart Cancellation Recovery", description: "When someone cancels, AI instantly texts your waitlist to fill the gap.", timesSaved: "3 hrs/week" },
      { name: "Loyalty & Rebook Automation", description: "AI tracks visit frequency, sends rebook reminders, and manages loyalty rewards automatically.", timesSaved: "3 hrs/week" }
    ],
    avgTimeSaved: "10+ hours/week",
    avgRevenuImpact: "85% cancellation slots refilled",
    pageUrl: "https://easyaiflows.com/ai-for/nail-salons"
  },
  "med-spas": {
    name: "Med Spas",
    slug: "med-spas",
    painPoints: [
      "High-value leads slip away — someone inquires about Botox and doesn't hear back for hours",
      "Post-treatment follow-ups are inconsistent",
      "Membership revenue leaks as members forget to use credits and cancel"
    ],
    automations: [
      { name: "Instant Consultation Booking", description: "AI responds to every inquiry within 60 seconds, answers treatment questions, shares pricing, books consultations.", timesSaved: "6 hrs/week" },
      { name: "Post-Treatment Automation", description: "AI sends aftercare instructions, check-ins at 24hrs and 7 days, requests before/after photos, books next session.", timesSaved: "4 hrs/week" },
      { name: "Membership Engagement Engine", description: "AI tracks member credit usage, sends reminders to book, re-engages members showing churn signs.", timesSaved: "3 hrs/week" }
    ],
    avgTimeSaved: "13+ hours/week",
    avgRevenuImpact: "$15K+ saved in membership churn/year",
    pageUrl: "https://easyaiflows.com/ai-for/med-spas"
  },
  chiropractors: {
    name: "Chiropractic Practices",
    slug: "chiropractors",
    painPoints: [
      "Patients drop off mid-treatment plan — come for 4 of 12 visits, feel better, disappear",
      "Staff buried in phone calls for scheduling and insurance questions",
      "Hundreds of inactive patients never get reactivation outreach"
    ],
    automations: [
      { name: "Treatment Plan Adherence", description: "AI sends reminders for upcoming visits, motivational messages between appointments, alerts when patients miss sessions.", timesSaved: "4 hrs/week" },
      { name: "AI Receptionist", description: "Handles scheduling, rescheduling, insurance questions, and new patient intake by phone, text, or chat.", timesSaved: "6 hrs/week" },
      { name: "Patient Reactivation Campaigns", description: "AI identifies patients who haven't visited in 90+ days and sends personalized reactivation sequences.", timesSaved: "3 hrs/week" }
    ],
    avgTimeSaved: "12+ hours/week",
    avgRevenuImpact: "45% better treatment plan completion",
    pageUrl: "https://easyaiflows.com/ai-for/chiropractors"
  },
  "insurance-agents": {
    name: "Insurance Agents",
    slug: "insurance-agents",
    painPoints: [
      "Paying $15-$50 per lead from quote sites — if you don't call in 5 minutes, they've talked to 3 others",
      "Tracking policy expirations across hundreds of clients is a spreadsheet nightmare",
      "Cross-sell opportunities missed — auto-only clients need homeowners, life clients need umbrella"
    ],
    automations: [
      { name: "Speed-to-Lead Automation", description: "AI contacts every new lead within 60 seconds via text and email. Qualifies them, collects info, books a call.", timesSaved: "6 hrs/week" },
      { name: "Automated Renewal Campaigns", description: "AI tracks every policy expiration and sends renewal sequences starting 60 days out.", timesSaved: "5 hrs/week" },
      { name: "Smart Cross-Sell Engine", description: "AI analyzes your book, identifies cross-sell opportunities, sends targeted campaigns. More policies per household.", timesSaved: "4 hrs/week" }
    ],
    avgTimeSaved: "15+ hours/week",
    avgRevenuImpact: "95% renewal retention, 2x policies per household",
    pageUrl: "https://easyaiflows.com/ai-for/insurance-agents"
  },
  "mortgage-brokers": {
    name: "Mortgage Brokers",
    slug: "mortgage-brokers",
    painPoints: [
      "30-90 day sales cycles — leads go cold without consistent nurture",
      "Collecting W-2s, pay stubs, and bank statements is like pulling teeth",
      "Rate changes require instant action but you can't manually text 500 people"
    ],
    automations: [
      { name: "Long-Term Lead Nurture", description: "AI keeps in touch with pre-qualified borrowers over weeks/months — market updates, rate info, check-ins until they're ready.", timesSaved: "8 hrs/week" },
      { name: "Automated Document Collection", description: "AI sends secure upload links, follows up on missing items, notifies you when the file is complete.", timesSaved: "6 hrs/week" },
      { name: "Rate Drop Alert Campaigns", description: "When rates move, AI instantly notifies relevant contacts — past leads, refi-eligible clients, pre-approved borrowers.", timesSaved: "4 hrs/week" }
    ],
    avgTimeSaved: "20+ hours/week",
    avgRevenuImpact: "3x more loans closed from aged leads",
    pageUrl: "https://easyaiflows.com/ai-for/mortgage-brokers"
  },
  photographers: {
    name: "Photography Businesses",
    slug: "photographers",
    painPoints: [
      "Inquiries go unanswered while shooting — prospects book someone else",
      "Contracts, invoices, questionnaires, timelines eat 15+ hours/week",
      "Past clients (engagement → wedding, family → annual) never get follow-up"
    ],
    automations: [
      { name: "Instant Inquiry Response", description: "AI responds to every inquiry within minutes — shares pricing, checks date availability, books a consultation.", timesSaved: "6 hrs/week" },
      { name: "Automated Booking Workflow", description: "Once booked, AI sends contracts, invoices, questionnaires, and timeline docs automatically.", timesSaved: "8 hrs/week" },
      { name: "Client Lifecycle Automation", description: "AI follows up at key intervals — anniversary shoots, family updates, holiday mini-sessions.", timesSaved: "3 hrs/week" }
    ],
    avgTimeSaved: "15+ hours/week",
    avgRevenuImpact: "2x inquiry conversion, 40% more repeat bookings",
    pageUrl: "https://easyaiflows.com/ai-for/photographers"
  },
  "event-planners": {
    name: "Event Planners",
    slug: "event-planners",
    painPoints: [
      "Emailing 15 vendors per event — keeping everyone aligned is a full-time job",
      "Clients text at all hours wanting status updates",
      "Day-of timelines change constantly, requiring dozens of update messages"
    ],
    automations: [
      { name: "Automated Vendor Communication", description: "AI sends confirmation requests, timeline updates, and logistics to all vendors on schedule.", timesSaved: "5 hrs/event" },
      { name: "Client Update Portal", description: "AI-powered portal with real-time status, task tracking, and chat — reducing 'where are we?' texts 80%.", timesSaved: "4 hrs/event" },
      { name: "Dynamic Timeline Management", description: "AI generates day-of timelines and notifies all stakeholders when changes happen.", timesSaved: "3 hrs/event" }
    ],
    avgTimeSaved: "10+ hours/event",
    avgRevenuImpact: "3x more events managed simultaneously",
    pageUrl: "https://easyaiflows.com/ai-for/event-planners"
  },
  "cleaning-services": {
    name: "Cleaning Services",
    slug: "cleaning-services",
    painPoints: [
      "Can't answer phone while cleaning — missed calls mean missed jobs",
      "Scheduling recurring, deep-clean, and move-out jobs is a juggling act",
      "One-time clients never rebook without follow-up"
    ],
    automations: [
      { name: "AI Booking Assistant", description: "Clients book 24/7 — selecting service type, home size, preferred time. AI confirms and schedules.", timesSaved: "4 hrs/week" },
      { name: "Smart Scheduling & Routing", description: "AI optimizes daily routes by location, handles recurring schedules, reschedules, and cancellations.", timesSaved: "3 hrs/week" },
      { name: "Rebook & Review Automation", description: "AI follows up after every clean — asks for review and offers recurring discount.", timesSaved: "2 hrs/week" }
    ],
    avgTimeSaved: "8+ hours/week",
    avgRevenuImpact: "50% more recurring clients",
    pageUrl: "https://easyaiflows.com/ai-for/cleaning-services"
  },
  landscapers: {
    name: "Landscaping Companies",
    slug: "landscapers",
    painPoints: [
      "On a mower all day — by the time you call leads back, they hired someone else",
      "Driving to every property for a quote eats hours, half don't convert",
      "Seasonal marketing for cleanup, aeration, holiday lighting never gets done"
    ],
    automations: [
      { name: "AI Lead Capture & Response", description: "AI answers calls/texts 24/7, collects property details, provides instant ballpark estimates.", timesSaved: "6 hrs/week" },
      { name: "Crew Scheduling & Route Optimization", description: "AI schedules crews by zone, optimizes routes, handles weather reschedules.", timesSaved: "5 hrs/week" },
      { name: "Seasonal Campaign Automation", description: "AI runs seasonal campaigns to customer list — spring cleanup, fall aeration, holiday lighting.", timesSaved: "4 hrs/week" }
    ],
    avgTimeSaved: "15+ hours/week",
    avgRevenuImpact: "25% more seasonal upsells",
    pageUrl: "https://easyaiflows.com/ai-for/landscapers"
  },
  "auto-repair": {
    name: "Auto Repair Shops",
    slug: "auto-repair",
    painPoints: [
      "Service advisors spend half the day on phone instead of writing up jobs",
      "'Is my car ready yet?' calls interrupt workflow constantly",
      "Maintenance customers leave and don't return for 8 months"
    ],
    automations: [
      { name: "Online Appointment Booking", description: "Customers book service appointments online — selecting service, vehicle info, preferred time.", timesSaved: "4 hrs/week" },
      { name: "Automated Vehicle Status Updates", description: "AI texts customers when vehicle enters service, parts ordered, and ready for pickup.", timesSaved: "5 hrs/week" },
      { name: "Service Reminder Sequences", description: "AI tracks mileage intervals and sends oil change, tire rotation, inspection reminders.", timesSaved: "3 hrs/week" }
    ],
    avgTimeSaved: "10+ hours/week",
    avgRevenuImpact: "40% higher service return rate",
    pageUrl: "https://easyaiflows.com/ai-for/auto-repair"
  },
  "pet-groomers": {
    name: "Pet Groomers",
    slug: "pet-groomers",
    painPoints: [
      "Can't answer phone with a squirmy dog in your hands",
      "No-shows waste 1-2 hour grooming slots",
      "Pet parents don't book regular visits — rely on them remembering"
    ],
    automations: [
      { name: "24/7 Online Booking", description: "Pet parents book anytime — selecting breed, service, preferred time. AI confirms and calendars.", timesSaved: "3 hrs/week" },
      { name: "No-Show Prevention", description: "AI sends reminders at 48hrs, 24hrs, and 2hrs. Requires deposits for premium services.", timesSaved: "2 hrs/week" },
      { name: "Auto-Rebook at Right Interval", description: "AI knows each pet's grooming schedule and sends rebook reminders with one-tap booking.", timesSaved: "2 hrs/week" }
    ],
    avgTimeSaved: "5+ hours/week",
    avgRevenuImpact: "70% fewer no-shows, 2x recurring bookings",
    pageUrl: "https://easyaiflows.com/ai-for/pet-groomers"
  },
  daycares: {
    name: "Daycare Centers",
    slug: "daycares",
    painPoints: [
      "Enrollment inquiries come during business hours when staff is with children",
      "Waitlist is a spreadsheet — when a spot opens, scrambling to contact families",
      "Daily updates, sick policy reminders, billing alerts for 40+ families"
    ],
    automations: [
      { name: "AI Enrollment Assistant", description: "Answers enrollment inquiries 24/7 — sharing availability, pricing, tour scheduling, required documents.", timesSaved: "5 hrs/week" },
      { name: "Smart Waitlist Management", description: "AI contacts families when spots open in priority order. If no response in 24hrs, moves to next.", timesSaved: "3 hrs/week" },
      { name: "Automated Parent Communication", description: "AI sends daily updates, reminders, event notices, billing alerts consistently.", timesSaved: "5 hrs/week" }
    ],
    avgTimeSaved: "10+ hours/week",
    avgRevenuImpact: "90% waitlist fill rate",
    pageUrl: "https://easyaiflows.com/ai-for/daycares"
  },
  churches: {
    name: "Churches",
    slug: "churches",
    painPoints: [
      "First-time visitors fill out a card and never hear back — find another church",
      "Event announcements scattered across email, bulletin, social, text",
      "Volunteer recruiting, scheduling, and reminding is manual and eats staff hours"
    ],
    automations: [
      { name: "Visitor Follow-Up Sequence", description: "AI sends welcome text within hours, personal email on Monday, small group invitation on Wednesday.", timesSaved: "4 hrs/week" },
      { name: "Multi-Channel Event Promotion", description: "AI distributes event announcements across email, text, social, and app notifications with one setup.", timesSaved: "3 hrs/week" },
      { name: "Volunteer Scheduling Automation", description: "AI manages sign-ups, reminders, swap requests, and fills gaps when someone cancels.", timesSaved: "3 hrs/week" }
    ],
    avgTimeSaved: "8+ hours/week",
    avgRevenuImpact: "2x visitor return rate",
    pageUrl: "https://easyaiflows.com/ai-for/churches"
  },
  nonprofits: {
    name: "Nonprofits",
    slug: "nonprofits",
    painPoints: [
      "Donors give once and never hear again until the annual appeal",
      "Grant deadlines, requirements, and reporting schedules get missed",
      "Volunteer management eats staff hours that should go to programs"
    ],
    automations: [
      { name: "Donor Stewardship Automation", description: "AI sends thank-yous within 24hrs, quarterly impact updates, personalized renewal appeals year-round.", timesSaved: "5 hrs/week" },
      { name: "Grant Deadline & Task Tracking", description: "AI tracks every deadline, sends reminders to staff, flags when reports or applications are due.", timesSaved: "4 hrs/week" },
      { name: "Volunteer Lifecycle Automation", description: "AI handles applications, onboarding, scheduling, and post-event thank-you messages.", timesSaved: "5 hrs/week" }
    ],
    avgTimeSaved: "15+ hours/week",
    avgRevenuImpact: "35% higher donor retention",
    pageUrl: "https://easyaiflows.com/ai-for/nonprofits"
  }
};
