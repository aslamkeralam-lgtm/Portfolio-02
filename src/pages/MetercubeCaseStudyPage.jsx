import React, { useState } from "react";
import caseImageA from "../Images/Case 2/Logolight.png";
import caseImageB from "../Images/Case 2/LogoDark.png";
import caseImageC from "../Images/Case 2/Tradinglogo.png";
import caseImageD from "../Images/Case 2/LogoUsage.png";
import heroImage from "../Images/Case 2/Cover.png";
import colorCodeUsage from "../Images/Case 2/ColorCodeUsage.png";
// ─────────────────────────────────────────────────────────────────────────────
// SHARED PRIMITIVES
// ─────────────────────────────────────────────────────────────────────────────

const SectionLabel = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3 border border-stone-300 inline-block px-2 py-0.5 rounded-sm">
    {children}
  </p>
);

const SectionHeading = ({ children }) => (
  <h2 className="text-2xl font-bold text-stone-900 mb-5">{children}</h2>
);

const BodyText = ({ children, className = "" }) => (
  <p className={`text-base leading-relaxed text-stone-700 mb-4 ${className}`}>
    {children}
  </p>
);

const PullQuote = ({ children }) => (
  <blockquote className="border-l-4 border-amber-500 pl-5 my-10 italic text-2xl leading-snug text-stone-800 font-light">
    {children}
  </blockquote>
);

/** Placeholder for any image / mockup asset */
const Asset = ({ label, caption, ratio = "16/9", bg = "#f0ede8", className = "" }) => (
  <figure className={`my-8 ${className}`}>
    <div
      className="w-full rounded-xl flex items-center justify-center text-sm text-stone-400 font-medium border border-stone-200"
      style={{ background: bg, aspectRatio: ratio }}
    >
      [ {label} ]
    </div>
    {caption && (
      <figcaption className="mt-2 flex gap-3 text-xs text-stone-400 uppercase tracking-widest">
        <span>Image</span>
        <span>{caption}</span>
      </figcaption>
    )}
  </figure>
);

/** Two assets side by side */
const AssetGrid = ({ items, caption, cols = 2 }) => (
  <figure className="my-8">
    <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden border border-stone-200"
          style={{ background: item.bg || "#f0ede8", aspectRatio: item.ratio || "4/3" }}
        >
          {item.src ? (
            <img
              src={item.src}
              alt={item.label}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-stone-400 font-medium">
              [ {item.label} ]
            </div>
          )}
        </div>
      ))}
    </div>
    {caption && (
      <figcaption className="mt-2 flex gap-3 text-xs text-stone-400 uppercase tracking-widest">
        <span>Image</span>
        <span>{caption}</span>
      </figcaption>
    )}
  </figure>
);

/** Inline stat card */
const StatCard = ({ value, label }) => (
  <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 text-center">
    <p className="text-3xl font-bold text-amber-600 mb-1">{value}</p>
    <p className="text-xs text-stone-500 leading-snug">{label}</p>
  </div>
);

/** Research insight card */
const InsightCard = ({ icon, title, children }) => (
  <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm">
    <div className="text-2xl mb-2">{icon}</div>
    <p className="text-sm font-semibold text-stone-800 mb-1">{title}</p>
    <p className="text-sm text-stone-500 leading-relaxed">{children}</p>
  </div>
);

/** Bullet list with bold label */
const BulletList = ({ items }) => (
  <ul className="space-y-3 mb-6 pl-1">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3 text-base text-stone-700">
        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5" />
        <span>
          {item.label && <strong>{item.label} </strong>}
          {item.desc}
        </span>
      </li>
    ))}
  </ul>
);

/** Color swatch */
const Swatch = ({ hex, name, role }) => (
  <div className="flex flex-col items-start gap-1.5">
    <div className="w-full h-14 rounded-lg border border-stone-200 shadow-sm" style={{ background: hex }} />
    <p className="text-xs font-semibold text-stone-700">{name}</p>
    <p className="text-xs text-stone-400">{hex}</p>
    {role && <p className="text-xs text-stone-400 italic">{role}</p>}
  </div>
);

/** Typography specimen row */
const TypeSpecimen = ({ name, sample, weight, size, usage }) => (
  <div className="py-4 border-b border-stone-100 last:border-0">
    <div className="flex items-baseline justify-between mb-1">
      <span className="text-xs uppercase tracking-widest text-stone-400">{name}</span>
      <span className="text-xs text-stone-300">{weight} · {size}</span>
    </div>
    <p className="text-stone-800 mb-1" style={{ fontWeight: weight, fontSize: size }}>{sample}</p>
    <p className="text-xs text-stone-400 italic">{usage}</p>
  </div>
);

/** Platform comparison table */
const PlatformTable = () => {
  const platforms = ["Shopify", "WooCommerce", "Magento", "Custom Build"];
  const criteria = [
    { label: "Setup speed", scores: ["✅ Fast", "⚠️ Medium", "❌ Slow", "❌ Slowest"] },
    { label: "Design flexibility", scores: ["⚠️ Limited", "✅ High", "✅ High", "✅ Full"] },
    { label: "Scale / performance", scores: ["✅ Managed", "⚠️ Self-host", "✅ Enterprise", "⚠️ Variable"] },
    { label: "Lifestyle brand fit", scores: ["✅ Good", "⚠️ Medium", "⚠️ Medium", "✅ Best"] },
    { label: "Dev overhead", scores: ["✅ Low", "⚠️ Medium", "❌ High", "❌ Highest"] },
    { label: "Cost (Year 1)", scores: ["₹₹", "₹₹", "₹₹₹₹", "₹₹₹₹₹"] },
  ];
  return (
    <div className="my-8 rounded-xl border border-stone-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-200">
              <th className="px-4 py-3 text-left text-xs font-semibold text-stone-500 uppercase tracking-wide">Criteria</th>
              {platforms.map(p => (
                <th key={p} className="px-4 py-3 text-center text-xs font-semibold text-stone-700">{p}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteria.map((row, i) => (
              <tr key={i} className={`border-b border-stone-100 ${i % 2 === 0 ? "bg-white" : "bg-stone-50/40"}`}>
                <td className="px-4 py-3 text-stone-600 font-medium text-sm">{row.label}</td>
                {row.scores.map((s, j) => (
                  <td key={j} className="px-4 py-3 text-center text-sm text-stone-600">{s}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-stone-400 px-4 py-2 border-t border-stone-100">
        Final recommendation: Shopify with custom Liquid theme + headless consideration for Phase 2
      </p>
    </div>
  );
};

/** User testing result row */
const TestResult = ({ task, completion, time, insight }) => (
  <div className="py-4 border-b border-stone-100 last:border-0">
    <div className="flex items-center justify-between mb-1">
      <p className="text-sm font-semibold text-stone-800">{task}</p>
      <div className="flex gap-3 text-xs text-stone-500">
        <span className="bg-stone-100 rounded-full px-2 py-0.5">{completion} completed</span>
        <span className="bg-stone-100 rounded-full px-2 py-0.5">avg {time}</span>
      </div>
    </div>
    <p className="text-sm text-stone-500 italic">{insight}</p>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function MetercubeCaseStudyPage() {
  const [activeTab, setActiveTab] = useState("mobile");

  return (
    <div className="min-h-screen bg-[#fff] font-sans text-stone-900">
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* ── HEADER ──────────────────────────────────────────────── */}
        <header className="mb-14">

          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-auto p-3 h-10 rounded-lg bg-stone-900 flex items-center justify-center">
              <span className="text-white font-light text-xs tracking-widest">SOBHA</span>
            </div>
            <div>
              <p className="font-semibold text-stone-900 leading-none tracking-wide">Metercube</p>
              <p className="text-xs text-stone-400 leading-none mt-0.5">Premium Lifestyle Commerce</p>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-stone-950 mb-10">
            Designing a Premium Lifestyle eCommerce Experience for Bengaluru Homeowners
          </h1>

          {/* Meta */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-stone-200">
            <div>
              <p className="text-xs text-stone-400 mb-1.5">Discipline</p>
              <ul className="space-y-0.5 text-sm text-stone-700">
                <li>Brand Identity Design</li>
                <li>UX Research</li>
                <li>eCommerce Design</li>
                <li>User Testing</li>
                <li>Print & Packaging</li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-stone-400 mb-1.5">Team</p>
              <ul className="space-y-0.5 text-sm text-stone-700">
                <li>Mohammed Aslam K</li>
                <li>Jasind PV</li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-stone-400 mb-1.5">Timeline</p>
              <p className="text-sm text-stone-700">  Aug 2020 – [ Jun 2021 ]</p>
              <p className="text-xs text-stone-400 mt-2">Platform</p>
              <p className="text-sm text-stone-700 mt-0.5">Wordpress + Custom Theme</p>
            </div>
          </div>
        </header>

        {/* ── HERO IMAGE ──────────────────────────────────────────── */}
        <figure className="my-8">
          <img
            src={heroImage}
            alt="Hero — Metercube storefront / lifestyle hero image"
            className="w-full h-auto rounded-xl object-cover"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-2 flex gap-3 text-xs text-stone-400 uppercase tracking-widest">
            <span>Image</span>
            <span>Intro Image</span>
          </figcaption>
        </figure>

        {/* ── INTRODUCTION ────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Introduction</SectionLabel>
          <p className="text-xl leading-relaxed text-stone-800">
            <strong>Metercube is a Bengaluru-based premium furniture and home décor brand</strong> curating quality lifestyle products for discerning urban homeowners.{" "}
            <strong className="text-stone-900">
              The brief was to build an end-to-end brand identity and eCommerce platform
            </strong>{" "}
            that would translate the tactile, premium feel of physical spaces into{" "}
            <strong>a seamless digital shopping experience.</strong>
          </p>
        </section>

        {/* ── BRANDING ────────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Branding</SectionLabel>
          <SectionHeading>Brand Identity</SectionHeading>

          <BodyText>
            Before a single screen was designed, we needed a brand language that felt <strong>considered, warm, and aspirational</strong>—qualities that resonate with Bengaluru's growing community of design-conscious homeowners.
          </BodyText>

          {/* Logo section */}
          <h3 className="text-base font-semibold text-stone-800 mb-3 mt-8">Logo & Mark</h3>
          <BodyText>
            The wordmark draws from geometric precision—<strong>clean strokes, generous spacing</strong>—evoking the measured, curated approach behind every Metercube product. The square mark ("M³") references both the brand name and the literal unit of space homeowners invest in.
          </BodyText>
          <AssetGrid
            caption="Logo Exploration"
            items={[
              { src: caseImageA, label: "Primary wordmark — dark", ratio: "1/1" },
              { src: caseImageB, label: "Primary wordmark — light on dark", ratio: "1/1" },
              { src: caseImageC, label: "Square mark / favicon", ratio: "1/1" },
              { src: caseImageD, label: "Logo clearspace rules", ratio: "1/1" },
            ]}
            cols={2}
          />

          {/* Color palette */}
          <h3 className="text-base font-semibold text-stone-800 mb-4 mt-8">Colour Palette</h3>
          <BodyText>
            A palette rooted in <strong>warm neutrals and earthy accents</strong>, referencing natural materials — stone, linen, walnut — that appear across the product catalogue.
          </BodyText>
          <div className="grid grid-cols-5 gap-3 my-6">
            <Swatch hex="#7B3B3B" name="Maroon" role="CTA / Badge" />
            <Swatch hex="#F7F5F3" name="Parchment" role="Background" />
            <Swatch hex="#1A1A1A" name="Onyx" role="Primary Text" />
            <Swatch hex="#E8D5D5" name="Blush" role="Badge Background" />
            <Swatch hex="#888888" name="Stone" role="Secondary text" />
          </div>
           <figure className="my-8">
          <img
            src={colorCodeUsage}
            alt="Hero — Metercube storefront / lifestyle hero image"
            className="w-full h-auto rounded-xl object-cover"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-2 flex gap-3 text-xs text-stone-400 uppercase tracking-widest">
            <span>Image</span>
            <span>Intro Image</span>
          </figcaption>
        </figure>
          {/* Typography */}
          <h3 className="text-base font-semibold text-stone-800 mb-4 mt-8">Typography</h3>
          <BodyText>
            Two typefaces working together: a <strong>humanist serif for display</strong> to bring warmth, and a <strong>geometric sans for UI</strong> to ensure digital legibility and precision.
          </BodyText>
          <div className="border border-stone-200 rounded-xl overflow-hidden my-6 bg-white">
            <div className="px-6 py-2 bg-stone-50 border-b border-stone-100">
              <p className="text-xs uppercase tracking-widest text-stone-400">Type Scale</p>
            </div>
            <div className="px-6">
              <TypeSpecimen name="Display" sample="[ Serif Typeface Name ]" weight="300" size="2.5rem" usage="Hero headings, pull quotes, editorial moments" />
              <TypeSpecimen name="Heading" sample="[ Serif Typeface Name ]" weight="600" size="1.5rem" usage="Section headings, product titles" />
              <TypeSpecimen name="Body" sample="[ Sans Typeface Name ]" weight="400" size="1rem" usage="Body copy, descriptions, UI labels" />
              <TypeSpecimen name="Caption / Label" sample="[ SANS TYPEFACE NAME ]" weight="500" size="0.75rem" usage="Image captions, tags, navigation" />
            </div>
          </div>
          <Asset label="Typography specimen sheet — print + digital" caption="Type System" ratio="16/7" bg="#faf9f7" />

          {/* Brand guidelines */}
          <h3 className="text-base font-semibold text-stone-800 mb-3 mt-8">Brand Guidelines</h3>
          <BodyText>
            A comprehensive brand book was delivered covering logo usage, colour application, photography direction, tone of voice, and print specifications.
          </BodyText>
          <AssetGrid
            caption="Brand Guidelines Spreads"
            items={[
              { label: "Brand book — cover", bg: "#1c1917", ratio: "3/4" },
              { label: "Brand book — logo rules", bg: "#f0ede8", ratio: "3/4" },
              { label: "Brand book — colour & type", bg: "#faf9f7", ratio: "3/4" },
              { label: "Brand book — photography direction", bg: "#e8e0d4", ratio: "3/4" },
            ]}
            cols={4}
          />
        </section>

        {/* ── ASSEMBLY MANUAL, LABELS & STICKERS ─────────────────── */}
        <section className="mb-16">
          <SectionLabel>Print & Packaging</SectionLabel>
          <SectionHeading>Assembly Manual, Labels &amp; Stickers</SectionHeading>

          <BodyText>
            The brand extended beyond the screen. Every product ships with <strong>thoughtfully designed physical touchpoints</strong>—assembly manuals, product labels, and stickers—each reinforcing the premium feel of the Metercube experience.
          </BodyText>

          {/* Assembly manual */}
          <h3 className="text-base font-semibold text-stone-800 mb-3 mt-8">Assembly Manual</h3>
          <BodyText>
            Clarity over complexity. The manual uses a <strong>step-by-step visual language</strong> with minimal copy—icon-driven instructions that work across language barriers, printed on <strong>uncoated FSC-certified stock</strong> to align with sustainability values.
          </BodyText>
          <BulletList items={[
            { label: "Format:", desc: "[ e.g. A5 saddle-stitched, 16pp ]" },
            { label: "Paper:", desc: "[ e.g. 120gsm uncoated, FSC certified ]" },
            { label: "Colour:", desc: "1-colour + brand accent / full-colour cover" },
            { label: "Illustration style:", desc: "Line-art technical drawings with numbered callouts" },
          ]} />
          <AssetGrid
            caption="Assembly Manual"
            items={[
              { label: "Manual cover", bg: "#f0ede8", ratio: "3/4" },
              { label: "Manual spread — step 1–4", bg: "#faf9f7", ratio: "3/4" },
              { label: "Manual spread — step 5–8", bg: "#faf9f7", ratio: "3/4" },
              { label: "Manual back / warranty card", bg: "#f0ede8", ratio: "3/4" },
            ]}
            cols={4}
          />

          {/* Labels */}
          <h3 className="text-base font-semibold text-stone-800 mb-3 mt-8">Product Labels</h3>
          <BodyText>
            Labels carry <strong>material information, care instructions, and QR codes</strong> linking to digital assembly guides and product pages. Typography and white space mirror the web experience for brand cohesion.
          </BodyText>
          <AssetGrid
            caption="Product Labels"
            items={[
              { label: "Hang tag — front", bg: "#e8e0d4", ratio: "2/3" },
              { label: "Hang tag — back / QR", bg: "#f0ede8", ratio: "2/3" },
              { label: "Box label — full spec", bg: "#faf9f7", ratio: "2/3" },
              { label: "Care label — fabric", bg: "#e8e0d4", ratio: "2/3" },
              { label: "Warranty card", bg: "#f5f0e8", ratio: "2/3" },
              { label: "Label die-line / print-ready", bg: "#faf9f7", ratio: "2/3" },
            ]}
            cols={3}
          />

          {/* Stickers */}
          <h3 className="text-base font-semibold text-stone-800 mb-3 mt-8">Stickers &amp; Packaging Inserts</h3>
          <BodyText>
            A suite of branded stickers and box-seal labels that delight customers at unboxing, turning the delivery moment into a <strong>brand touchpoint worth sharing</strong>.
          </BodyText>
          <AssetGrid
            caption="Stickers & Inserts"
            items={[
              { label: "Sticker sheet", bg: "#faf9f7", ratio: "4/3" },
              { label: "Box seal / thank-you card", bg: "#e8e0d4", ratio: "4/3" },
              { label: "Tissue wrap pattern", bg: "#f0ede8", ratio: "4/3" },
            ]}
            cols={3}
          />
        </section>

        {/* ── UX RESEARCH & DISCOVERY ─────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Research</SectionLabel>
          <SectionHeading>Discovery Phase</SectionHeading>

          <BodyText>
            Before defining the platform, we conducted a <strong>structured discovery phase</strong> to understand the Bengaluru premium homeowner's shopping mindset—their habits, frustrations, and unmet expectations when buying furniture and décor online.
          </BodyText>

          {/* Research methods */}
          <h3 className="text-base font-semibold text-stone-800 mb-3 mt-6">Research Methods</h3>
          <BulletList items={[
            { label: "In-depth user interviews:", desc: "[ n = X ] homeowners in Bengaluru, 45-minute sessions covering purchase journeys, trust signals, and pain points with existing platforms." },
            { label: "Competitor audit:", desc: "Benchmarked against [ Platform A ], [ Platform B ], and [ Platform C ] across UX, brand positioning, and checkout flow." },
            { label: "Heuristic evaluation:", desc: "Applied Nielsen's 10 heuristics to competitors to identify common failure patterns in premium furniture eCommerce." },
            { label: "Analytics review:", desc: "Analysed existing [ traffic / social data ] to understand which products and categories drove organic interest." },
          ]} />

          <Asset label="Research plan — methods overview / affinity map" caption="Research Overview" ratio="16/8" bg="#f0ede8" />

          {/* Key insights */}
          <h3 className="text-base font-semibold text-stone-800 mb-4 mt-8">Key Insights</h3>
          <div className="grid grid-cols-2 gap-4 my-6">
            <InsightCard icon="🛋️" title="Touch before buy">
              Users wanted to visualise scale and material in their own space before committing—room context photos mattered more than isolated product shots.
            </InsightCard>
            <InsightCard icon="📦" title="Delivery anxiety">
              Long lead times and uncertain assembly were the top reasons for cart abandonment on competitor sites.
            </InsightCard>
            <InsightCard icon="💬" title="Trust through detail">
              Detailed material callouts, care instructions, and origin stories built more trust than price alone.
            </InsightCard>
            <InsightCard icon="📱" title="Browse mobile, buy desktop">
              Users discovered products on Instagram and mobile, but most purchases happened on desktop after revisiting the site.
            </InsightCard>
          </div>

          <Asset label="Interview synthesis — affinity diagram / insight clusters" caption="2.1 Research Synthesis" ratio="4/3" bg="#f5f0e8" />

          <PullQuote>
            "I want to feel confident it'll look right in my flat — I need to see it in a real room, not on a white background."
            <br />
            <span className="text-base font-normal not-italic text-stone-400 mt-2 block">— User interview participant</span>
          </PullQuote>
        </section>

        {/* ── ECOMMERCE PLATFORM ──────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>eCommerce Platform</SectionLabel>
          <SectionHeading>Platform Research &amp; Selection</SectionHeading>

          <BodyText>
            Choosing the right platform was a strategic decision, not just a technical one. We evaluated four options against Metercube's brand, scale ambitions, and design flexibility requirements.
          </BodyText>

          <PlatformTable />

          <BodyText>
            <strong>Shopify with a fully custom Liquid theme</strong> was selected for Phase 1, with a headless architecture (Shopify Storefront API + React frontend) scoped for Phase 2 as catalogue and traffic scale.
          </BodyText>

          {/* IA */}
          <h3 className="text-base font-semibold text-stone-800 mb-3 mt-8">Information Architecture</h3>
          <BodyText>
            We restructured the product catalogue around how users <strong>think about rooms and materials</strong> rather than flat product categories—making discovery more intuitive for homeowners starting from inspiration rather than a specific product search.
          </BodyText>
          <Asset label="Site map / IA diagram" caption="Information Architecture" ratio="16/8" bg="#f0ede8" />

          {/* Design exploration */}
          <h3 className="text-base font-semibold text-stone-800 mb-3 mt-8">Design Exploration</h3>
          <BodyText>
            We explored multiple directions for the homepage, PDP (Product Detail Page), and cart — testing layout density, image-to-text ratios, and navigation patterns before converging on a final direction.
          </BodyText>
          <BulletList items={[
            { label: "Direction A — Editorial:", desc: "Full-bleed photography, minimal UI, magazine-style grid. Felt premium but sacrificed scannability." },
            { label: "Direction B — Catalogue:", desc: "Dense product grid, filter-heavy. Efficient but lost the lifestyle feel." },
            { label: "Direction C — Hybrid (selected):", desc: "Editorial hero + structured catalogue below. Balanced aspiration with usability." },
          ]} />
          <AssetGrid
            caption="Design Exploration"
            items={[
              { label: "Direction A — Editorial", bg: "#e8e0d4", ratio: "3/4" },
              { label: "Direction B — Catalogue", bg: "#f0ede8", ratio: "3/4" },
              { label: "Direction C — Hybrid (selected)", bg: "#faf9f7", ratio: "3/4" },
            ]}
            cols={3}
          />

          {/* Key screens */}
          <h3 className="text-base font-semibold text-stone-800 mb-3 mt-8">Key Screens</h3>
          <Asset label="Homepage — Hero + Featured Collections" caption="Homepage" ratio="16/9" bg="linear-gradient(135deg,#e8e0d4,#f5f0e8)" />
          <Asset label="PLP — Product Listing Page with filters" caption="Product Listing" ratio="16/9" bg="#f5f0e8" />

          {/* PDP toggle */}
          <div className="my-8">
            <div className="flex gap-2 mb-4">
              {["mobile", "desktop"].map(t => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                    activeTab === t
                      ? "bg-stone-900 text-white"
                      : "bg-stone-100 text-stone-500 hover:bg-stone-200"
                  }`}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
            <Asset
              label={`PDP — Product Detail Page (${activeTab})`}
              caption="Product Detail Page"
              ratio={activeTab === "mobile" ? "9/16" : "16/9"}
              bg="#f0ede8"
            />
          </div>

          <Asset label="Cart + Checkout flow" caption="Cart & Checkout" ratio="16/9" bg="#f5f0e8" />
          <Asset label="Order confirmation + delivery tracker" caption="Post-Purchase" ratio="16/8" bg="#f0ede8" />
        </section>

        {/* ── USER TESTING ────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>User Testing</SectionLabel>
          <SectionHeading>Usability Testing</SectionHeading>

          <BodyText>
            We ran <strong>[ n = X ] moderated usability sessions</strong> with Bengaluru homeowners across two rounds—once on lo-fi prototypes and once on the hi-fi Figma prototype before development handoff.
          </BodyText>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 my-8">
            <StatCard value="[ X ]" label="Participants across 2 rounds" />
            <StatCard value="[ X ]%" label="Task completion rate (Round 2)" />
            <StatCard value="[ X ]" label="Critical issues resolved pre-build" />
          </div>

          {/* Test tasks */}
          <h3 className="text-base font-semibold text-stone-800 mb-4 mt-6">Task Completion Results</h3>
          <div className="border border-stone-200 rounded-xl overflow-hidden bg-white my-6">
            <div className="px-5 py-3 bg-stone-50 border-b border-stone-100">
              <p className="text-xs uppercase tracking-widest text-stone-400">Round 2 — Hi-Fi Prototype</p>
            </div>
            <div className="px-5">
              <TestResult
                task="Find a sofa for a 2BHK living room"
                completion="[ X/X ]"
                time="[ X min ]"
                insight="[ Placeholder: e.g. Users relied on room-filter more than category nav ]"
              />
              <TestResult
                task="Check material details & care instructions on PDP"
                completion="[ X/X ]"
                time="[ X min ]"
                insight="[ Placeholder: e.g. Material section wasn't visible above fold on mobile ]"
              />
              <TestResult
                task="Add item to cart and complete checkout"
                completion="[ X/X ]"
                time="[ X min ]"
                insight="[ Placeholder: e.g. Delivery date estimate reduced drop-off at checkout ]"
              />
              <TestResult
                task="Find assembly guide for a purchased product"
                completion="[ X/X ]"
                time="[ X min ]"
                insight="[ Placeholder: e.g. QR on hang tag was preferred over searching the site ]"
              />
            </div>
          </div>

          <Asset label="User testing session — screen recording stills" caption="User Testing" ratio="16/8" bg="#f0ede8" />

          {/* Findings & iterations */}
          <h3 className="text-base font-semibold text-stone-800 mb-3 mt-8">Key Findings &amp; Iterations</h3>
          <BulletList items={[
            { label: "Finding 1:", desc: "[ Placeholder — e.g. Room-context filter reduced time-to-product by X% ]" },
            { label: "Finding 2:", desc: "[ Placeholder — e.g. Material callout section moved above fold on mobile after Round 1 ]" },
            { label: "Finding 3:", desc: "[ Placeholder — e.g. Delivery date on PDP increased add-to-cart rate ]" },
            { label: "Finding 4:", desc: "[ Placeholder — e.g. Guest checkout option reduced abandonment ]" },
          ]} />

          <Asset label="Before/after — PDP iterations from testing" caption="Iterations" ratio="16/7" bg="#f5f0e8" />
        </section>

        {/* ── RESULT ──────────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Result</SectionLabel>
          <p className="text-xl leading-relaxed text-stone-500">
            We delivered a <strong className="text-stone-900">complete brand-to-screen system</strong> for Metercube—from logo and print assets to a live Shopify storefront.{" "}
            <strong className="text-stone-900">[ Placeholder: key outcome metric — e.g. The platform launched to X users in Month Y, with a Z% add-to-cart rate in the first 30 days ].</strong>{" "}
            <span className="text-stone-400">The brand identity and physical packaging have since been extended across [ channels / regions ].</span>
          </p>
        </section>

        {/* ── HAND-OFF & FINAL DESIGN ─────────────────────────────── */}
        <section className="mb-20">
          <SectionLabel>Present</SectionLabel>
          <SectionHeading>Hand-Off &amp; Final Design</SectionHeading>

          {/* Design system */}
          <h3 className="text-base font-semibold text-stone-800 mb-3">Design System</h3>
          <BodyText>
            A Figma component library was handed off alongside Shopify Liquid templates, covering the full token set — colour, spacing, typography, shadows — with annotated component states.
          </BodyText>
          <Asset label="Design system — component library overview" caption="Design System" ratio="16/8" bg="#f0ede8" />

          {/* Dev specs */}
          <h3 className="text-base font-semibold text-stone-800 mb-3 mt-8">Developer Specifications</h3>
          <AssetGrid
            caption="Hand Off"
            items={[
              { label: "Mobile card specs with measurements", bg: "#faf9f7", ratio: "3/4" },
              { label: "Desktop layout grid + spacing", bg: "#f5f0e8", ratio: "3/4" },
            ]}
            cols={2}
          />

          {/* Final screens */}
          <h3 className="text-base font-semibold text-stone-800 mb-3 mt-8">Final Screens</h3>
          <AssetGrid
            caption="Final Hi-Fi — Mobile"
            items={[
              { label: "Homepage", bg: "#f0ede8", ratio: "9/16" },
              { label: "PLP", bg: "#faf9f7", ratio: "9/16" },
              { label: "PDP", bg: "#f5f0e8", ratio: "9/16" },
              { label: "Cart", bg: "#f0ede8", ratio: "9/16" },
            ]}
            cols={4}
          />
          <Asset label="Final screens — Desktop full-page layouts" caption="Final Hi-Fi — Desktop" ratio="16/9" bg="linear-gradient(135deg,#e8e0d4,#f5f0e8)" />

          {/* Print final */}
          <h3 className="text-base font-semibold text-stone-800 mb-3 mt-8">Print-Ready Files</h3>
          <AssetGrid
            caption="Print Hand-Off"
            items={[
              { label: "Assembly manual — print-ready PDF", bg: "#faf9f7", ratio: "3/4" },
              { label: "Label artwork — die-line + bleed", bg: "#f0ede8", ratio: "3/4" },
              { label: "Sticker sheet — print-ready", bg: "#faf9f7", ratio: "3/4" },
            ]}
            cols={3}
          />
        </section>

      </div>
    </div>
  );
}