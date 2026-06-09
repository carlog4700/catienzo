import { Service, Experience, Project, Testimonial } from './types';
import receptionistImage from './assets/images/receptionist_drive_replacement_1780975961811.png';
import messengerImage from './assets/images/messenger_workflow_1780973984552.png';
import jobsImage from './assets/images/jobs_optimizer_workflow_1780974002877.png';
import attachmentsImage from './assets/images/attachments_organizer_workflow_1780974017940.png';
import xeroImage from './assets/images/xero_reporting_workflow_1780974034189.png';
import repurpImage from './assets/images/repurp_workflow_1780974060698.png';
import enrichImage from './assets/images/enrich_workflow_1780974075047.png';
import carloProfile from './assets/images/carlo_profile_1780971523473.png';

export const PERSONAL_INFO = {
  name: 'Carlo Atienzo',
  logoText: 'Carlo Atienzo',
  role: 'AI Automation Specialist',
  subRole: 'Enterprise IT Operations & Workflow Automation Engineer',
  phone: '+639998078714',
  email: 'atienzo.carlo@gmail.com',
  location: 'Pampanga, Philippines',
  linkedin: 'https://linkedin.com/in/carlo-atienzo-4b3494157',
  portfolio: 'https://catienzo.dev',
  onlineJobsPh: 'https://www.onlinejobs.ph/jobseekers/info/1541233',
  upwork: 'https://www.upwork.com/freelancers/~01b06e2572d49f7128',
  github: 'https://github.com', // placeholder link to keep contact layout uniform
  profileImage: carloProfile,
  summary: `AI Automation Specialist with 8+ years of experience in enterprise IT operations, systems support, and technical problem-solving, combining enterprise IT expertise with workflow automation and AI-driven business solutions. Experienced in designing and developing automation workflows using Zapier, Make, n8n, APIs, webhooks, OpenAI, and Google Gemini to automate repetitive tasks, integrate business applications, and improve operational efficiency. Skilled in workflow design, prompt engineering, AI-powered automation, SaaS integrations, data automation, and Large Language Model (LLM) implementation.`,
};

export const SERVICES: Service[] = [
  {
    id: 'ai-agents',
    title: 'AI Agent Development',
    description: 'Build AI assistants that answer questions, retrieve information, qualify leads, and perform automated actions across your business systems.',
    iconName: 'Cpu',
    tools: ['Google Gemini', 'OpenAI GPTs', 'OpenRouter', 'Vapi AI', 'n8n'],
    benefits: ['24/7 intelligent customer interactions', 'Contextual dialogue with client history tracking', '90%+ reduction in response times'],
  },
  {
    id: 'workflows',
    title: 'No-Code / Low-Code Automation',
    description: 'Automate repetitive business tasks using n8n, Zapier, and Make without the need for custom software development.',
    iconName: 'GitFork',
    tools: ['Zapier', 'Make (Integromat)', 'n8n', 'Webhooks'],
    benefits: ['Bypass API limitations with smart custom hooks', 'Synchronous CRM and ERP data flow', 'Zero manual entry of transactions or leads'],
  },
  {
    id: 'custom-apis',
    title: 'API & Webhook Integration',
    description: 'Connect your applications and automate data flow between CRMs, spreadsheets, databases, communication tools, and SaaS platforms.',
    iconName: 'Webhook',
    tools: ['REST APIs', 'JSON Parsing', 'Custom Scripts', 'Asana API', 'Xero API'],
    benefits: ['Secure authentication and data transport', 'Robust retry/error pathways', 'Custom-tailored business reporting structures'],
  },
  {
    id: 'enterprise-it',
    title: 'Enterprise IT Foundation',
    description: 'Apply proven enterprise IT practices to build reliable, secure, and maintainable automation systems.',
    iconName: 'Server',
    tools: ['Microsoft Azure', 'Microsoft Entra ID', 'NOC Systems', 'L2 Infrastructure'],
    benefits: ['Highly secure user roles & Identity Management', 'Comprehensive SOPs for zero downtime', 'Flawless server & hybrid network routing'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-freelance',
    role: 'AI Automation Specialist',
    company: 'Freelance',
    period: 'Jan 2026 – Present',
    location: 'Pampanga, Philippines',
    type: 'freelance',
    highlights: [
      'Designed and deployed advanced custom automation architectures leveraging Zapier, Make, and local/cloud n8n servers to completely run daily procedures.',
      'Created cross-functional autonomous agents leveraging Google Gemini and OpenAI to interpret scanned PDFs, raw invoices, and client service logs.',
      'Integrated webhooks and live APIs with secure auth parameters allowing real-time notification alerts, automated task planning, and customer onboarding.',
      'Engineered intelligent custom funnels starting from client inquiries up to automatic proposal drafts, scheduling, database entry, and messaging pipelines.',
    ],
  },
  {
    id: 'exp-ntt',
    role: 'Field Service Delivery Engineer L2 / Network Consultant',
    company: 'NTT DATA Philippines',
    period: 'Apr 2021 – Present',
    location: 'Manila / Pampanga, Philippines',
    type: 'corporate',
    highlights: [
      'Deliver robust level-2 engineering support for premium enterprise environments, ensuring minimal incident delay and bulletproof data continuity.',
      'Audit networks and identify major structural layout optimization vectors to automate repeatable diagnostics loops.',
      'Write exhaustive Standard Operating Procedures (SOPs), systems catalogs, and automated service scripts to standardise NOC operational efficiency.',
      'Administer secure cloud integrations and permissions schemes using Microsoft Entra ID (formerly Azure AD) and dedicated virtual gateways.',
    ],
  },
  {
    id: 'exp-trends',
    role: 'NOC Analyst L1',
    company: 'Trends Group Incorporated',
    period: 'Mar 2018 – Mar 2021',
    location: 'Manila, Philippines',
    type: 'corporate',
    highlights: [
      'Supervised enterprise telemetry dashboards for major transport and banking sectors with a 24/7 SLA focus.',
      'Diagnosed and escalated critical network interruptions, software faults, and hardware deterioration, working directly with system vendors.',
      'Crafted internal tools to log and organize telemetry status summaries automatically, raising technician efficiency.',
    ],
  },
];

export const CERTIFICATIONS = [
  { name: 'Zapier Certified Expert', issuer: 'Zapier', icon: 'Award' },
  { name: 'Make.com Certified Associate', issuer: 'Make.com', icon: 'Award' },
  { name: 'n8n Certified Workflow Engineer', issuer: 'n8n', icon: 'Award' },
  { name: 'Microsoft Certified: Azure Administrator Associate (AZ-104)', issuer: 'Microsoft', icon: 'Cloud' },
  { name: 'Prompt Engineering Graduate', issuer: 'Technical Virtual Assistants PH', icon: 'Sparkles' },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-receptionist',
    title: 'AI Voice Receptionist System',
    description: 'An voice AI receptionist that answers customer phone calls, checks real-time calendar openings, schedules, scales down manual appointment overhead, and saves booking details in Airtable.',
    longDescription: 'Leverages high-speed voice streaming (Vapi AI) tied to a serverless automation router (n8n). Calls are routed via webhooks to verify dynamic appointment criteria in Google Calendar, schedule bookings instantly, and write formatted client lead dossiers into Airtable without human assistance.',
    tools: ['n8n', 'Vapi AI', 'Webhooks', 'Google Calendar', 'Airtable'],
    category: 'Full AI Agent',
    impact: 'Replaced manual booking processes completely, boosting scheduling efficiency by 150% and capturing 100% of after-hours leads.',
    image: 'https://lh3.googleusercontent.com/d/18wTV6nxYSy-LT-gRyHTjAJzuE3gGiObt',
    steps: [
      { name: 'Inbound Call Received', type: 'trigger', description: 'User dials the dedicated virtual VoIP number powered by Vapi AI.' },
      { name: 'Voice Processing (Vapi)', type: 'ai', description: 'Fast TTS and STT processing with specialized custom system prompts for active conversation.' },
      { name: 'n8n Coordination Webhook', type: 'action', description: 'Triggers active n8n sequence with structured callers responses parsed in JSON format.' },
      { name: 'Live Availability Verification', type: 'database', description: 'Interrogates Google Calendar API dynamically to verify available slots.' },
      { name: 'Lock Session & Save Log', type: 'crm', description: 'Books the client on the calendar and writes telemetry and transcripts to any Airtable database.' }
    ]
  },
  {
    id: 'proj-messenger',
    title: 'Facebook Messenger AI Support Agent',
    description: 'A responsive Gemini-powered chat agent integrated with Facebook Messenger API using n8n and Google Docs database.',
    longDescription: 'Retrieves incoming Messenger threads natively, references a Google Doc knowledge repository for up-to-date business data, and passes conversational context to Google Gemini to formulate ultra-reliable, context-aware answers.',
    tools: ['n8n', 'Webhooks', 'Google Docs', 'Google Gemini AI', 'Facebook Pages API'],
    category: 'Full AI Agent',
    impact: 'Automated 24/7 lead inquiries on social handles, producing accurate answers about pricing, service definitions, and active booking availability.',
    image: 'https://lh3.googleusercontent.com/d/12SiMmYyYnUklimAd1hyQsMVJUVzw7ISb',
    steps: [
      { name: 'User PM Received', type: 'trigger', description: 'User sends a message to the Facebook Business Page, capturing page scope IDs.' },
      { name: 'n8n Memory Lookup', type: 'database', description: 'Retrieves past conversation threads using key index identifiers to maintain context.' },
      { name: 'Knowledge Retreival (RAG)', type: 'crm', description: 'Queries live Google Docs containing FAQs and pricing sheets.' },
      { name: 'Gemini Agent Inference', type: 'ai', description: 'Synthesizes highly structured answers optimized for conversational channels.' },
      { name: 'Direct FB Response', type: 'notification', description: 'Dispatches custom payload back via the Facebook Graph API.' }
    ]
  },
  {
    id: 'proj-jobs',
    title: 'AI Jobs Scraper & Resume Optimizer',
    description: 'An intelligent automation that harvests specialized job listings, validates profile alignment, edits resumes on Google Drive, and drafts submission drafts in Gmail.',
    longDescription: 'Combines dynamic programmatic queries with cognitive LLM alignment checking. If a scrap qualifies, n8n calls OpenRouter AI to analyze the original resume and draft customized paragraphs aligning credentials to the job statement. Delivers PDF outcomes via Slack and saves a Draft inside Gmail.',
    tools: ['n8n', 'Slack', 'RapidAPI', 'Google Docs', 'OpenRouter AI', 'Google Drive', 'Gmail'],
    category: 'Workflow Integration',
    impact: 'Accelerated job applications by 10x, enabling automated customized draft formulation within 3 minutes of a high-compatibility job post.',
    image: 'https://lh3.googleusercontent.com/d/15EVzVvLHuDOJzZR8prDA0NGVEXA143kt',
    steps: [
      { name: 'Hourly Schedule', type: 'trigger', description: 'Runs a cron scheduler via n8n to fetch newly posted roles.' },
      { name: 'Scrape RapidAPI', type: 'database', description: 'Harvests titles, company profiles, and requirements strings into raw JSON.' },
      { name: 'Relevance Grading (OpenRouter)', type: 'ai', description: 'LLM filters listings, assigning eligibility scores based on professional profile matches.' },
      { name: 'Auto-Tailor Resume GDrive', type: 'action', description: 'Clones the base master document and applies targeted corrections to fit original keywords.' },
      { name: 'Slack Alert & Gmail Draft', type: 'notification', description: 'Logs the activity on Slack and sets up a customized cold-email draft in Gmail.' }
    ]
  },
  {
    id: 'proj-attachments',
    title: 'AI Email Attachment Organizer',
    description: 'Automated high-capacity incoming business attachments parsing, dynamic directory sorting, and database records synchronization with zero manual steps.',
    longDescription: 'Triggers on incoming business notifications. Analyzes file structures (invoices, receipts, contract PDFs) using Google Gemini vision/text capabilities, extracts vital parameters (dates, totals, vendors), generates nested directory patterns in Google Drive, and logs summaries directly into Google Sheets.',
    tools: ['Make.com', 'Gmail', 'Google Gemini AI', 'Google Drive', 'Google Sheets'],
    category: 'Data Automation',
    impact: 'Eliminated typical file classification time entirely, filing over 1200 items flawlessly with complete database updates.',
    image: 'https://lh3.googleusercontent.com/d/1p6DCg5DjkgjzqaqYgDZ_OBHLPB3uEohd',
    steps: [
      { name: 'New Invoice Email', type: 'trigger', description: 'Detects new emails with PDF, image, or spreadsheet attachments matching specific keywords.' },
      { name: 'Extract Attachment Stream', type: 'action', description: 'Pulls binary attachments and forwards securely to Google Drive temporary folder.' },
      { name: 'Gemini Document Analysis', type: 'ai', description: 'Parses images and scanned text to capture metadata (e.g. invoice date, vendor name, amount).' },
      { name: 'Smart GDrive Router', type: 'action', description: 'Calculates the target directory and moves the file into a formatted folder structured by Year/Month/Vendor.' },
      { name: 'Sync Google Sheets Log', type: 'database', description: 'Appends a tracking table row containing the file redirect URL, date, and extracted totals.' }
    ]
  },
  {
    id: 'proj-xero',
    title: 'Xero Accounting Reporting Automation',
    description: 'An enterprise pipeline pulling Xero ledger registers, compiling performance metrics on Google Sheets, and assigning tasks in Asana.',
    longDescription: 'Builds secure integration with cloud accounting tools. Periodically retrieves ledger balances, aggregates invoices, updates custom spreadsheets, and opens operational follow-up cards on Asana.',
    tools: ['Make.com', 'Xero API', 'Asana API', 'Google Sheets'],
    category: 'Reporting',
    impact: 'Saved 6 hours of weekly bookkeeping coordination, bringing team leaders real-time visibility on accounts receivables.',
    image: 'https://lh3.googleusercontent.com/d/1B2F34WR7fKHqH1BZiBzI_6vJdcbM_DLj',
    steps: [
      { name: 'Weekly Trigger', type: 'trigger', description: 'Triggers every Friday at 5:00 PM to pull outstanding registers.' },
      { name: 'Extract Xero Balance', type: 'database', description: 'Contacts Xero REST API using OAuth2 to retrieve outstanding statements.' },
      { name: 'Compile Sheets Report', type: 'action', description: 'Filters raw JSON data and populates pre-structured dashboards containing live progress graphs.' },
      { name: 'Asana Project Updates', type: 'crm', description: 'Creates follow-up tasks with details of delinquent accounts assigned to collections officers.' }
    ]
  },
  {
    id: 'proj-repurp',
    title: 'Dynamic AI Content Repurposing Suite',
    description: 'Social video content delivery machine translating raw files into custom summaries, scripts, quote graphics, and automated platform scheduling.',
    longDescription: 'A custom Zapier chain triggered on new audio/video drops in Google Drive. Auto-transcribes the media, extracts soundbites using generative prompt parameters, devises custom tags, and hooks up automatic delivery channels across Facebook, LinkedIn, and Instagram Business.',
    tools: ['Zapier', 'Google Drive', 'OpenAI Whisper', 'LinkedIn API', 'Meta Pages API'],
    category: 'Workflow Integration',
    impact: 'Amplified content deployment frequency by 5x, generating 15 separate contextual clips and posts from a single weekly recording.',
    image: 'https://lh3.googleusercontent.com/d/1D9tlc64BHGUFSp6MxV4LwTU4vQXOWBNn',
    steps: [
      { name: 'Drive Video Ingest', type: 'trigger', description: 'User saves a raw session recording inside a designated folder.' },
      { name: 'Whisper Transcription API', type: 'ai', description: 'Converts media voice files to pristine, timestamped punctuation documents.' },
      { name: 'Extract Quotes & Hashtags', type: 'ai', description: 'Uses LLMs to identify high-impact nuggets, formulating SEO metadata strings.' },
      { name: 'Image Mock Drafting', type: 'action', description: 'Creates tailored promotional summary cards referencing output guidelines.' },
      { name: 'Zapier Social Publisher', type: 'notification', description: 'Pushes media packages across LinkedIn and Facebook panels according to optimal hour plans.' }
    ]
  },
  {
    id: 'proj-enrich',
    title: 'Automated Lead Enrichment Pipeline',
    description: 'Real-time sales lead qualification, contact data enrichment, and automatic routing to active sales teams.',
    longDescription: 'Instantly captures inbound leads from conversion pages. Uses secure webhooks and third-party databases to query professional parameters (employee counts, tech stack, funding, LinkedIn handles) and saves results to our primary spreadsheet lists.',
    tools: ['Zapier', 'YouForm', 'Clearbit API', 'Google Sheets', 'Webhooks'],
    category: 'Data Automation',
    impact: 'Increased qualification-to-outreach speeds by 800%, giving reps instantly enriched business dossiers on fresh candidates.',
    image: 'https://lh3.googleusercontent.com/d/12FbTBzjJ7zlVijYL9Q8hpz4yNjPVhai2',
    steps: [
      { name: 'Contact Form Submission', type: 'trigger', description: 'Visitor registers details on a YouForm lead generation portal.' },
      { name: 'REST Webhook Delivery', type: 'action', description: 'Relays captured email and name parameters to Zapier securely.' },
      { name: 'Clearbit Contact Lookup', type: 'database', description: 'Programmatically retrieves corporate statistics and LinkedIn coordinates.' },
      { name: 'Qualify & Triage Leads', type: 'ai', description: 'Applies preset scores to sort high-intent buyers into dedicated directories.' },
      { name: 'Google Sheets CRM Sync', type: 'crm', description: 'Appends data to the live spreadsheet and notifies team members on Slack.' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    role: 'Operations Director',
    company: 'Apex Media Group',
    quote: '"Carlo converted our multi-tool manual document processing into a single n8n flowchart. Invoices are parsed, categorized by Gemini, and logged in Xero and Sheets automatically. It feels like we hired an extra operational team member with zero error rates."',
    avatarSeed: 'sarah',
    metrics: '85% Hours Saved Daily',
  },
  {
    name: 'Marcus Thorne',
    role: 'Founder',
    company: 'Thorne Consulting & Co.',
    quote: '"Our appointment scheduling was a constant source of friction. The AI Voice Receptionist that Carlo established using Vapi AI and Airtable manages after-hour bookings flawlessly, saving our team hours of phone tag every single week."',
    avatarSeed: 'marcus',
    metrics: '2.5x Booking Velocity',
  },
  {
    name: 'David Vance',
    role: 'General Manager',
    company: 'NextGen Financials',
    quote: '"Carlo understands business needs as deeply as he understands API systems. His reporting automation linking Xero, Google Sheets, and Asana has given our executive suite a completely dynamic view of our balance sheet."',
    avatarSeed: 'david',
    metrics: 'No Manual Typing on 1.2k Invoices',
  }
];
