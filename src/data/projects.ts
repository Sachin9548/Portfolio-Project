import type { Accent } from "./skills";

export type DiagramIconKey =
  | "api"
  | "source"
  | "ingest"
  | "validate"
  | "queue"
  | "worker"
  | "transform"
  | "db"
  | "analytics-api"
  | "dashboard"
  | "user"
  | "config"
  | "process"
  | "cloud"
  | "s3"
  | "ec2"
  | "image"
  | "webhook"
  | "rules"
  | "message"
  | "response"
  | "question"
  | "vector"
  | "context"
  | "llm"
  | "event"
  | "collect"
  | "report"
  | "preview";

export interface DiagramStage {
  label: string;
  sub?: string;
  detail: string;
  icon: DiagramIconKey;
}

export interface DiagramSpec {
  title: string;
  description: string;
  stages: DiagramStage[];
}

export interface ProjectDecision {
  title: string;
  detail: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectResult {
  value: string;
  label: string;
  note: string;
}

export interface ExternalLink {
  label: string;
  url: string;
}

export interface FeaturedProject {
  id: string;
  slug: string;
  name: string;
  kind: string;
  tagline: string;
  positioning: string;
  accent: Accent;
  links: ExternalLink[];
  // Media slots stay empty until real product screenshots are supplied.
  media: { alt: string; caption: string; src?: string };
  context: string;
  problem: string;
  myRole: string;
  contributions: string[];
  architectures: DiagramSpec[];
  journeys?: DiagramSpec[];
  narrative?: { title: string; paragraphs: string[] };
  decisions: ProjectDecision[];
  stack: string[];
  challenges: ProjectChallenge[];
  results: ProjectResult[];
  relatedCapabilities: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "profit-first",
    slug: "/projects/profit-first",
    name: "Profit First",
    kind: "AI Business Intelligence SaaS",
    tagline: "One platform for your real net profit — across every channel.",
    positioning:
      "A multi-platform AI-powered business intelligence SaaS that connects Shopify, WordPress, Meta, Google, and shipping partners to give business owners their true net profit, with an AI chatbot and calling agent grounded in their own financial data.",
    accent: "blue",
    links: [
      { label: "Visit product", url: "https://profitfirstanalytics.co.in/" },
      { label: "Shopify App Store listing", url: "https://apps.shopify.com/profit-first-v1" },
    ],
    media: {
      alt: "Profit First product screenshot — replace with a real product screenshot",
      caption: "Media slot — replace with a real product screenshot before publishing.",
    },
    context:
      "Business owners sell across Shopify, WordPress, and advertise on Meta and Google — but their real net profit (after COGS, GST, shipping costs, returns, ad spend, and expenses) is scattered across 6-7 platforms that don't talk to each other.",
    problem:
      "Business owners needed one single source of truth for their actual net profit, assembled automatically from all connected platforms, with an AI advisor and calling agent grounded in their own numbers — not generic financial advice.",
    myRole:
      "I designed and developed the full event-driven SaaS architecture on AWS — the data ingestion, synchronization, analytics, AI chatbot, and calling agent layers of the platform.",
    contributions: [
      "Architected an event-driven SaaS backend using AWS ECS, SQS, and DynamoDB, with independent processing components and background workers for ingestion, synchronization, transformation, and analytics workloads.",
      "Built integrations with Shopify, WordPress, Meta (ads + conversions), Google Ads, and shipping partners — syncing orders, products, ad performance, shipping records, product costs, expenses, and RTO data into a unified data layer.",
      "Designed a single-table DynamoDB architecture using partition keys, sort keys, and Global Secondary Indexes — access-pattern-driven data modeling for profit, COGS, GST, shipping, and RTO analytics.",
      "Developed a RAG-based AI business advisor using AWS Bedrock and Pinecone — retrieval-grounded responses over merchant financial data, not free-floating generation.",
      "Built an AI calling agent that proactively reaches out to business owners with business performance summaries and alerts grounded in their real data.",
      "Developed a React Native mobile executive application (Android + iOS) giving business owners secure access to real-time business performance and revenue summaries.",
    ],
    architectures: [
      {
        title: "Event-driven ingestion pipeline",
        description:
          "How connected platform data becomes reliable, queryable merchant state.",
        stages: [
          {
            label: "Shopify API · Meta API",
            sub: "Connected sources",
            icon: "source",
            detail:
              "Merchant commerce and advertising platforms push and serve data: orders, catalog and events from Shopify, campaign performance from Meta.",
          },
          {
            label: "Data Ingestion Layer",
            icon: "ingest",
            detail:
              "A dedicated ingestion service receives everything the platforms emit, normalizes payloads at the boundary.",
          },
          {
            label: "Webhook Validation",
            icon: "validate",
            detail:
              "Inbound webhooks are verified and made idempotent, so replays and forged requests can't corrupt merchant state.",
          },
          {
            label: "AWS SQS Queue",
            sub: "Buffer",
            icon: "queue",
            detail:
              "Validated events are buffered in SQS, absorbing traffic spikes from sales events without overwhelming workers.",
          },
          {
            label: "Background Workers",
            icon: "worker",
            detail:
              "ECS worker services consume the queue and maintain data consistency during high-traffic events.",
          },
          {
            label: "Data Transformation",
            icon: "transform",
            detail:
              "Raw events are transformed into structured merchant metrics: profit, COGS, GST, RTO.",
          },
          {
            label: "DynamoDB",
            sub: "Single-table design",
            icon: "db",
            detail:
              "A single-table DynamoDB schema with Global Secondary Indexes designed around the platform's analytical access patterns.",
          },
          {
            label: "Analytics API",
            icon: "analytics-api",
            detail:
              "The API layer serves computed metrics to the product surface.",
          },
          {
            label: "Business Intelligence Dashboard",
            icon: "dashboard",
            detail:
              "Merchants see profit, COGS, GST and RTO analytics in one place.",
          },
        ],
      },
      {
        title: "RAG-based AI consultation",
        description:
          "AI answers grounded in the merchant's own financial data, not free-floating generation.",
        stages: [
          {
            label: "Merchant Question",
            icon: "question",
            detail:
              "The merchant asks a business question in natural language.",
          },
          {
            label: "Context Retrieval",
            icon: "vector",
            detail:
              "The question is embedded and matched against merchant context in Pinecone.",
          },
          {
            label: "Pinecone Vector Search",
            icon: "context",
            detail:
              "Vector search retrieves the financial context relevant to the question.",
          },
          {
            label: "Merchant Financial Context",
            icon: "db",
            detail:
              "Retrieved context is assembled into a prompt the model can reason over.",
          },
          {
            label: "AWS Bedrock / LLM",
            icon: "llm",
            detail:
              "The LLM generates a response constrained to the retrieved merchant data.",
          },
          {
            label: "Grounded AI Response",
            icon: "report",
            detail:
              "The merchant receives advice anchored in their actual numbers.",
          },
        ],
      },
      {
        title: "Single-table DynamoDB design (conceptual)",
        description:
          "One table, modeled around how the product actually queries data — not around habit.",
        stages: [
          {
            label: "Merchant Data Writes",
            sub: "Orders · costs · shipping · ads",
            icon: "ingest",
            detail:
              "Synchronized commerce data lands as items in a single DynamoDB table, whatever its type.",
          },
          {
            label: "Partition Key (PK)",
            icon: "db",
            detail:
              "Items are grouped so a merchant's related data lives together, keeping hot queries on one partition.",
          },
          {
            label: "Sort Key (SK)",
            icon: "rules",
            detail:
              "Sort keys order items inside a partition, letting ranges like time-windowed analytics be fetched efficiently.",
          },
          {
            label: "Global Secondary Indexes",
            icon: "collect",
            detail:
              "GSIs expose alternate query shapes, so analytical reads don't fight the table's primary layout.",
          },
          {
            label: "Profit · COGS · GST queries",
            icon: "report",
            detail:
              "Access patterns for profitability analytics are served directly from the modeled keys and indexes.",
          },
          {
            label: "RTO & shipping analytics",
            icon: "analytics-api",
            detail:
              "Return-to-origin and shipping views use the same access-pattern-driven design — no ad-hoc scans.",
          },
        ],
      },
    ],
    journeys: [
      {
        title: "Merchant journey",
        description:
          "From installing the app to asking the AI advisor for grounded recommendations.",
        stages: [
          {
            label: "Installs the Shopify app",
            icon: "user",
            detail: "The merchant installs Profit First from the Shopify App Store.",
          },
          {
            label: "Connects integrations",
            icon: "api",
            detail: "Shopify, Meta and shipping partner accounts are connected to the platform.",
          },
          {
            label: "Historical sync begins",
            icon: "source",
            detail:
              "The system synchronizes historical and new business data automatically.",
          },
          {
            label: "Background processing",
            icon: "worker",
            detail:
              "Workers process and transform incoming records into business metrics.",
          },
          {
            label: "Unified dashboard",
            icon: "dashboard",
            detail: "The merchant opens one analytics dashboard instead of fragmented spreadsheets.",
          },
          {
            label: "Explores insights",
            icon: "report",
            detail:
              "Profitability, expenses, RTO, shipping and advertising insights are explored in one place.",
          },
          {
            label: "Asks the AI advisor",
            icon: "question",
            detail:
              "The merchant asks for contextual business recommendations grounded in their own data.",
          },
        ],
      },
    ],
    narrative: {
      title: "One Platform for Real Net Profit — Across Every Channel",
      paragraphs: [
        "A business owner's day produces hundreds of financial events across completely separate systems: an order on Shopify, a sale on WordPress, a Meta ad click, a Google campaign cost, a shipment returned by a courier, a COGS update. None of those facts individually tells you whether the business is profitable — and no platform tells you the combined picture.",
        "Profit First solves exactly that. Every connected platform — Shopify, WordPress, Meta, Google, shipping partners — feeds into a single event-driven pipeline that normalizes, validates, and transforms raw events into one unified financial view: real net profit after ad spend, COGS, GST, returns, shipping costs, and expenses.",
        "The AI layer follows the same principle. When a business owner asks a financial question, the system retrieves their actual data through vector search and constrains the model to answer only from it. There's also an AI calling agent that proactively reaches out with performance summaries — not because AI is trendy, but because business owners don't always open dashboards.",
        "The mobile app brings the same data to Android and iOS, so a business owner can check their real net profit from anywhere — without opening a laptop.",
      ],
    },
    decisions: [
      {
        title: "Single-table DynamoDB with GSIs",
        detail:
          "Modeling the whole dataset in one table with Global Secondary Indexes lets each analytical query pattern be served efficiently, instead of fighting a relational model in a key-value store.",
      },
      {
        title: "Webhook verification + idempotency",
        detail:
          "External webhooks are verified at the boundary and every handler is idempotent, so replays and duplicates can never double-count a merchant's revenue or costs.",
      },
      {
        title: "Queued background workers",
        detail:
          "Ingestion is decoupled from processing via SQS so high-traffic events produce backpressure in a queue rather than lost or corrupted data.",
      },
      {
        title: "RAG over raw generation",
        detail:
          "AI consultation is grounded through Pinecone retrieval of merchant financial context, because an ungrounded model has no place in a financial product.",
      },
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "AWS ECS",
      "SQS",
      "DynamoDB",
      "Pinecone",
      "AWS Bedrock",
      "Shopify API",
      "WordPress",
      "Meta API",
      "Google Ads API",
      "React Native",
      "React.js",
    ],
    challenges: [
      {
        challenge: "Commerce traffic arrives in violent bursts around sales events.",
        solution:
          "Event ingestion is buffered in SQS and processed by background workers, keeping the system consistent through peak load instead of processing everything inline.",
      },
      {
        challenge: "Duplicate or forged webhooks could silently corrupt financial metrics.",
        solution:
          "Webhook verification and idempotent processing at the ingestion boundary make replays harmless by design.",
      },
      {
        challenge: "A financial AI assistant is only useful if it can't make numbers up.",
        solution:
          "RAG with Pinecone vector search and AWS Bedrock grounds every answer in the merchant's retrieved financial context.",
      },
    ],
    results: [
      {
        value: "Millions",
        label: "of historical e-commerce records processed",
        note: "Platform capacity claim — the volume of historical records the platform processes for its merchants.",
      },
      {
        value: "3k–10k+",
        label: "orders per day supported per business",
        note: "Approximate order volumes the platform supports for businesses, as stated by the product.",
      },
      {
        value: "<2s",
        label: "reported latency for 1-year analytical reports",
        note: "Stated performance benchmark for complex analytical reports over one year of historical data — a reported figure, not an independently benchmarked measurement.",
      },
    ],
    relatedCapabilities: [
      "Event-Driven Architecture",
      "Database Engineering",
      "AI & RAG Architecture",
    ],
  },
  {
    id: "ads-manager",
    slug: "/projects/ads-manager",
    name: "Ads Manager",
    kind: "Advertising Analytics Platform",
    tagline: "Launch campaigns in one click, measure what actually converted.",
    positioning:
      "A platform for launching and monitoring advertising campaigns, with integrated performance dashboards and server-side conversion tracking through the Meta Conversions API.",
    accent: "violet",
    links: [{ label: "Visit product", url: "https://ads.profitfirstanalytics.com/" }],
    media: {
      alt: "Ads Manager product screenshot — replace with a real product screenshot",
      caption: "Media slot — replace with a real product screenshot before publishing.",
    },
    context:
      "Advertising teams juggle campaign configuration, launch and performance analysis across separate tools — and browser-based conversion tracking keeps losing sight of what actually converted.",
    problem:
      "Business users needed one place to launch and monitor campaigns, and conversion measurement that doesn't depend entirely on browser-side tracking being allowed to run.",
    myRole:
      "I built the dashboard experience, the distributed background processing behind campaign workflows, and the server-side conversion tracking integration.",
    contributions: [
      "Implemented Meta Marketing API integrations covering campaign creation, editing, publishing, ad set configuration, budget management, creative management, performance reporting, and advertising analytics — campaigns managed directly from the dashboard.",
      "Built a Meta Conversions API (CAPI) engine for server-side conversion tracking: server-side event collection, click ID capture, customer identity matching, event deduplication with unique event identifiers, Event Match Quality considerations, conversion-event validation, and seven-day event-window handling.",
      "Integrated Shopify webhooks and shipping information to distinguish qualified purchases from potentially fake or RTO-prone orders, improving the quality of conversion signals sent to Meta.",
      "Developed profit and margin analytics workflows covering product costs, shipping costs, platform fees, packaging expenses, breakeven ROAS, breakeven CPA, and expected profit.",
      "Implemented campaign automation and safety workflows: pre-publish validation, budget allocation checks, creative similarity checks, UTM mapping, ad-level tracking, API rate-limit handling, and error handling through background processing.",
    ],
    architectures: [
      {
        title: "Ad campaign lifecycle",
        description: "From a business user's configuration to live performance data.",
        stages: [
          {
            label: "Business User",
            icon: "user",
            detail:
              "A business user — not necessarily an ads specialist — decides a campaign is needed.",
          },
          {
            label: "Campaign Configuration",
            icon: "config",
            detail:
              "Audience, budget, creative and objectives are configured in the dashboard.",
          },
          {
            label: "Ad Launch Workflow",
            icon: "process",
            detail:
              "One click kicks off a launch workflow instead of a manual sequence across ad platforms.",
          },
          {
            label: "Background Processing",
            icon: "worker",
            detail:
              "Distributed background workers execute the launch steps reliably and monitor progress.",
          },
          {
            label: "Meta Ads API",
            icon: "cloud",
            detail:
              "The workflow creates and manages campaigns through Meta's advertising API.",
          },
          {
            label: "Performance Data",
            icon: "collect",
            detail:
              "Campaign performance is collected continuously as it accrues.",
          },
          {
            label: "Analytics Dashboard",
            icon: "dashboard",
            detail:
              "Real-time dashboards surface performance without leaving the platform.",
          },
        ],
      },
      {
        title: "Meta Conversions API (CAPI)",
        description:
          "Server-side conversion events, independent of browser-based tracking.",
        stages: [
          {
            label: "Storefront Event",
            icon: "event",
            detail:
              "A shopper action happens on the storefront — a view, an add-to-cart, a purchase.",
          },
          {
            label: "Server-side Event Collection",
            icon: "collect",
            detail:
              "The event is captured on the server, independent of browser-based tracking restrictions.",
          },
          {
            label: "Event Validation",
            icon: "validate",
            detail:
              "Events are validated before being forwarded, so the ad platform receives clean signals.",
          },
          {
            label: "Meta Conversions API",
            icon: "api",
            detail:
              "Validated events are sent to Meta server-to-server, alongside — not instead of — browser pixels.",
          },
          {
            label: "Conversion Reporting",
            icon: "report",
            detail:
              "Conversions are attributed and reported in campaign performance.",
          },
        ],
      },
      {
        title: "Qualified purchase workflow",
        description:
          "Shopify orders become qualified conversion signals — not every order is a real sale.",
        stages: [
          {
            label: "Shopify Order",
            icon: "event",
            detail: "An order comes in through the merchant's Shopify store.",
          },
          {
            label: "Order Webhook",
            icon: "webhook",
            detail: "The order webhook is received and verified at the platform boundary.",
          },
          {
            label: "Shipping / Fulfillment Data",
            icon: "source",
            detail:
              "Shipping and fulfillment information is joined to the order to see how it actually behaves.",
          },
          {
            label: "Order Qualification Logic",
            icon: "validate",
            detail:
              "Orders are evaluated to distinguish qualified purchases from potentially fake or RTO-prone ones.",
          },
          {
            label: "Profit Calculation",
            icon: "report",
            detail:
              "Costs, fees and margins are applied so the signal reflects actual business value.",
          },
          {
            label: "Qualified Purchase Event",
            icon: "event",
            detail:
              "Qualified purchases become higher-quality conversion signals for the ad platform.",
          },
          {
            label: "Meta Conversion Signal",
            icon: "api",
            detail:
              "The qualified event is sent to Meta, feeding better campaign optimization.",
          },
        ],
      },
    ],
    journeys: [
      {
        title: "Advertiser journey",
        description:
          "From connecting an ad account to profit-aware performance insights.",
        stages: [
          {
            label: "Connects the ad account",
            icon: "user",
            detail: "The business owner connects their Meta advertising account.",
          },
          {
            label: "Configures a campaign",
            icon: "config",
            detail: "Audience, budget, creative and objectives are set up in the dashboard.",
          },
          {
            label: "Backend validation",
            icon: "validate",
            detail:
              "Campaign details and budgets are validated and guarded before anything is submitted.",
          },
          {
            label: "Submitted via Meta Marketing API",
            icon: "api",
            detail: "The validated campaign is published through Meta's Marketing API.",
          },
          {
            label: "Performance data collected",
            icon: "collect",
            detail: "Campaign performance information accrues and is collected continuously.",
          },
          {
            label: "Purchase information joined",
            icon: "event",
            detail:
              "Shopify and shipping integrations provide qualified purchase information.",
          },
          {
            label: "Server-side conversion events",
            icon: "api",
            detail: "Eligible conversion events are sent through the Conversions API.",
          },
          {
            label: "Profit-aware dashboard",
            icon: "dashboard",
            detail:
              "The dashboard shows advertising performance alongside profitability insights.",
          },
        ],
      },
    ],
    narrative: {
      title: "Why server-side conversion events matter",
      paragraphs: [
        "Browser-based tracking has become an unreliable narrator: consent choices, ad blockers and tracking restrictions mean the browser may never report a conversion that genuinely happened. The Meta Conversions API approaches the same problem from the other side — the server observes the event itself and reports it directly to Meta.",
        "Server-side collection improves tracking coverage because it does not depend on the browser's environment. It does not promise perfect measurement — no tracking stack is complete on its own — but it recovers conversion signals that browser-only setups lose, which feeds better optimization for every campaign that follows.",
      ],
    },
    decisions: [
      {
        title: "Background processing for campaign workflows",
        detail:
          "Campaign launches run through distributed background workers rather than a synchronous request, so a launch can't fail because a web request timed out.",
      },
      {
        title: "Server-side conversion capture",
        detail:
          "Conversions are collected on the server and validated before forwarding, independent of browser-based tracking restrictions.",
      },
      {
        title: "One-click launch UX on top of API orchestration",
        detail:
          "The dashboard hides multi-step advertising workflows behind a single launch action for business users.",
      },
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "React.js",
      "Meta Ads API",
      "Meta Conversions API",
      "Background Workers",
      "Real-time dashboards",
    ],
    challenges: [
      {
        challenge: "Browser-based conversion tracking under-reports real conversions.",
        solution:
          "Meta Conversions API integration captures conversion events server-side, improving tracking coverage without promising 100% accuracy.",
      },
      {
        challenge: "Campaign launches span multiple steps that shouldn't run in a web request.",
        solution:
          "Distributed background processing executes and monitors launch workflows reliably.",
      },
    ],
    results: [],
    relatedCapabilities: ["Backend Architecture", "Event-Driven Architecture", "AWS Infrastructure"],
  },
  {
    id: "see-before-buy",
    slug: "/projects/see-before-buy",
    name: "See Before Buy",
    kind: "AI-Powered Virtual Try-On (Shopify App)",
    tagline: "Let shoppers visualize products on themselves before they commit.",
    positioning:
      "A standalone Shopify app that gives shoppers AI-generated product previews — reducing purchase hesitation and returns without a heavyweight AR implementation.",
    accent: "cyan",
    links: [{ label: "Shopify App Store listing", url: "https://apps.shopify.com/see-before-buy-ai-full" }],
    media: {
      alt: "See Before Buy product screenshot — replace with a real product screenshot",
      caption: "Media slot — replace with a real product screenshot before publishing.",
    },
    context:
      "E-commerce shoppers buy products they can't physically try — clothing, accessories, home decor — which results in hesitation at checkout and high return rates after delivery.",
    problem:
      "Merchants needed a way to let shoppers visualize products on themselves before purchasing, without building a full camera-based AR system.",
    myRole:
      "I built the product visualization functionality and the scalable AWS image-processing pipelines behind it.",
    contributions: [
      "Built product visualization functionality.",
      "Developed scalable AWS image-processing pipelines.",
      "Worked with S3, EC2, and SQS.",
      "Used asynchronous processing for image workflows.",
      "Worked on the product preview experience for e-commerce merchants.",
    ],
    architectures: [
      {
        title: "Image-processing pipeline",
        description:
          "Every preview image travels the same reliable asynchronous path.",
        stages: [
          {
            label: "Customer Upload · Product Selection",
            icon: "image",
            detail:
              "A customer uploads a photo or selects a product to visualize.",
          },
          {
            label: "Image Request",
            icon: "config",
            detail:
              "A preview request is created and handed to the processing pipeline.",
          },
          {
            label: "AWS S3",
            sub: "Object storage",
            icon: "s3",
            detail:
              "Source and generated images are stored durably in S3.",
          },
          {
            label: "SQS Queue",
            sub: "Buffer",
            icon: "queue",
            detail:
              "Requests are queued so bursts of shopper activity never overload processing.",
          },
          {
            label: "Image Processing Worker · EC2",
            icon: "ec2",
            detail:
              "EC2 workers pull requests and run the AI visualization stages asynchronously.",
          },
          {
            label: "Processed Image",
            icon: "image",
            detail:
              "The generated preview image is written back to storage.",
          },
          {
            label: "Product Preview Experience",
            icon: "preview",
            detail:
              "The shopper sees the product preview in the storefront experience.",
          },
        ],
      },
    ],
    journeys: [
      {
        title: "Shopper journey",
        description:
          "From a product page visit to a confident purchase decision.",
        stages: [
          {
            label: "Opens the product page",
            icon: "preview",
            detail: "A shopper browses the merchant's Shopify storefront.",
          },
          {
            label: "Selects a product",
            icon: "image",
            detail: "The shopper picks a product they're considering.",
          },
          {
            label: "Clicks Virtual Try-On",
            icon: "event",
            detail: "The React-based storefront widget opens the try-on experience.",
          },
          {
            label: "Uploads a photo",
            icon: "image",
            detail: "The shopper uploads their photograph for the visualization.",
          },
          {
            label: "Submits the request",
            icon: "config",
            detail: "The backend receives the image-processing request.",
          },
          {
            label: "Processing state",
            icon: "worker",
            detail:
              "The request moves through the queue-based AWS infrastructure — the shopper sees progress, not a hang.",
          },
          {
            label: "Views the generated preview",
            icon: "image",
            detail: "The AI-generated product preview is delivered to the shopper.",
          },
          {
            label: "Continues shopping",
            icon: "user",
            detail: "With more confidence in the product, the shopper continues the journey.",
          },
        ],
      },
      {
        title: "Merchant setup journey",
        description: "What a merchant does to bring the widget into their storefront.",
        stages: [
          {
            label: "Installs the app",
            icon: "user",
            detail: "The merchant installs See Before Buy from the Shopify App Store.",
          },
          {
            label: "Configures the widget",
            icon: "config",
            detail: "The product visualization experience is configured for their catalog.",
          },
          {
            label: "Customizes appearance",
            icon: "process",
            detail: "The widget's look and feel is adjusted to match the storefront.",
          },
          {
            label: "Enables on the storefront",
            icon: "event",
            detail: "The React-based widget goes live inside the Shopify storefront.",
          },
          {
            label: "Monitors usage",
            icon: "report",
            detail: "Application usage is monitored from the merchant side.",
          },
        ],
      },
    ],
    decisions: [
      {
        title: "Asynchronous image workflows",
        detail:
          "Image generation is queued and processed by workers on EC2, because a shopper should never wait on a synchronous HTTP call for a GPU-bound task.",
      },
      {
        title: "S3 as the pipeline's spine",
        detail:
          "Every stage reads and writes through S3, so the pipeline is restartable and artifacts are durable.",
      },
      {
        title: "AI-generated previews, honestly framed",
        detail:
          "The product is based on AI-generated visual previews — not camera-based AR — and is presented as exactly that.",
      },
    ],
    stack: ["AWS S3", "AWS EC2", "AWS SQS", "AI image processing", "Shopify", "React.js"],
    challenges: [
      {
        challenge: "Image generation is slow enough that shoppers can't wait synchronously.",
        solution:
          "Requests are queued through SQS and processed asynchronously by EC2 workers, with the storefront showing the preview as soon as it lands.",
      },
      {
        challenge: "Bursts of shopper activity could overwhelm a fixed processing capacity.",
        solution:
          "The queue decouples demand from processing capacity and smooths traffic through the pipeline.",
      },
    ],
    results: [
      {
        value: "8%",
        label: "reported increase in merchant conversion rates",
        note: "Reported project outcome, alongside reduced returns. Presented as a reported figure — the underlying measurement is not available to me to verify here.",
      },
      {
        value: "↓ returns",
        label: "reported reduction in returns",
        note: "Reported alongside the conversion lift; the reduction is a reported outcome, not a benchmark I measured.",
      },
    ],
    relatedCapabilities: ["AWS Infrastructure", "Event-Driven Architecture", "Product & Full Stack Development"],
  },
  {
    id: "whatsapp-automation",
    slug: "/projects/whatsapp-automation",
    name: "WAutomation",
    kind: "Revenue-Oriented WhatsApp Automation",
    tagline: "Turn Shopify events into revenue — through WhatsApp conversations.",
    positioning:
      "A revenue-oriented WhatsApp automation platform that integrates deeply with Shopify — automated abandoned cart recovery, order communication, customer retargeting, and AI-powered support, all triggered by real storefront events.",
    accent: "warm",
    links: [{ label: "Visit product", url: "https://www.wautomation.shop/" }],
    media: {
      alt: "WhatsApp Automation product screenshot — replace with a real product screenshot",
      caption: "Media slot — replace with a real product screenshot before publishing.",
    },
    context:
      "Abandoned carts, order questions and follow-ups demand personal, timely communication that no support team can scale by hand.",
    problem:
      "Merchants needed customer communication that responds to storefront events automatically — recovery flows, retargeting and support — without manual effort.",
    myRole:
      "I built the automated messaging pipelines, the Shopify integration layer, and the customer recovery and retargeting workflows.",
    contributions: [
      "Built automated messaging pipelines triggered by real Shopify events — abandoned carts, order confirmations, shipping updates, and post-purchase follow-ups.",
      "Integrated deeply with Shopify APIs and webhooks to capture customer context (cart contents, order history, customer tier) so messages are relevant, not generic.",
      "Developed revenue-focused automation workflows: abandoned cart recovery sequences, retargeting flows, and upsell/cross-sell triggers based on purchase behavior.",
      "Built AI-powered support flows that resolve common customer queries automatically — order status, return requests, product questions — without manual agent involvement.",
      "Implemented rule-based campaign builder allowing merchants to define trigger conditions, message timing, and follow-up sequences without writing code.",
    ],
    architectures: [
      {
        title: "Trigger-to-recovery messaging workflow",
        description:
          "How a storefront event becomes a well-timed customer conversation.",
        stages: [
          {
            label: "Shopify Event",
            icon: "event",
            detail:
              "A storefront event occurs — an abandoned checkout, an order, a status change.",
          },
          {
            label: "Webhook Receiver",
            icon: "webhook",
            detail:
              "Shopify webhooks are received and verified at the platform boundary.",
          },
          {
            label: "Event Processing",
            icon: "process",
            detail:
              "Events are processed and matched to the automation rules that apply.",
          },
          {
            label: "Customer Context",
            icon: "context",
            detail:
              "Order, cart and customer history are assembled so messages are relevant, not generic.",
          },
          {
            label: "Automation Rules",
            icon: "rules",
            detail:
              "Rule-based workflows decide whether, when and what to send.",
          },
          {
            label: "WhatsApp Messaging",
            icon: "message",
            detail:
              "Messages are delivered through the WhatsApp messaging pipeline.",
          },
          {
            label: "Customer Response",
            icon: "response",
            detail:
              "Customer replies are captured and can drive the next step of the flow.",
          },
          {
            label: "Recovery / Follow-up Workflow",
            icon: "rules",
            detail:
              "Responses feed recovery and follow-up workflows — reminders, answers, retargeting.",
          },
        ],
      },
    ],
    decisions: [
      {
        title: "Event-driven messaging, not scheduled blasts",
        detail:
          "Messages are triggered by verified Shopify webhooks and assembled with real customer context, so communication lands when it is actually relevant.",
      },
      {
        title: "Customer context before content",
        detail:
          "Every workflow stage has access to order, cart and history context — recovery flows reference what the customer actually did.",
      },
      {
        title: "Recovery as a workflow, not a single message",
        detail:
          "Customer responses feed follow-up stages, so a conversation can continue instead of ending at one notification.",
      },
    ],
    stack: ["Node.js", "Shopify APIs", "Webhooks", "WhatsApp messaging", "Automation workflows", "Background processing"],
    challenges: [
      {
        challenge: "Manual customer follow-up doesn't scale and is inconsistent.",
        solution:
          "Automated, trigger-based messaging pipelines with customer context handle recovery and retargeting without manual effort.",
      },
      {
        challenge: "Generic blasts train customers to ignore messages.",
        solution:
          "Context-aware rules built from real customer activity keep messages relevant to what the customer actually did.",
      },
    ],
    results: [
      {
        value: "80%",
        label: "of support queries resolved",
        note: "Reported product figure, referring to the share of support queries handled through automated resolution — not an overall satisfaction score.",
      },
    ],
    relatedCapabilities: ["Backend Architecture", "Event-Driven Architecture", "AI & Automation"],
  },
];

export interface OtherProject {
  name: string;
  url?: string;
  description: string;
  category: "E-commerce" | "Web App" | "Mobile App" | "Experiment";
  stack: string[];
  contribution: string;
  media?: { src: string; alt: string };
}

// Populated only from real, supplied projects — never seeded with invented entries.
export const otherProjects: OtherProject[] = [
  {
    name: "Profit First Mobile App",
    url: "#", // Play Store & App Store links coming soon
    description:
      "A React Native executive app for Profit First — giving business owners real-time access to net profit, revenue summaries, and business performance on Android and iOS. The same financial data from the SaaS platform, in your pocket.",
    category: "Mobile App",
    stack: ["React Native", "Node.js", "AWS", "TypeScript"],
    contribution:
      "Built the full mobile application from scratch — React Native frontend, Node.js backend APIs, and AWS infrastructure. Supports both Android and iOS.",
  },
];

export const otherProjectCategories = [
  "All",
  "E-commerce",
  "Web App",
  "Mobile App",
  "Experiment",
] as const;

export function getProject(slug: string): FeaturedProject | undefined {
  return featuredProjects.find((p) => p.slug === slug);
}
