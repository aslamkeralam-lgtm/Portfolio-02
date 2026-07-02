import React, { useState } from "react";
import heroImage from "../Images/Case 3/Cover3.png";
import caseImageA from "../Images/Case 3/Logo1.png";
import caseImageB from "../Images/Case 3/Logo2.png";
import caseImageC from "../Images/Case 3/Logo3.png";
import caseImageD from "../Images/Case 3/Logo4.png";
import Researchmao from "../Images/Case 3/Researchmao.png";
import Sitemap from "../Images/Case 3/RSitemap.png";
import Ray01 from "../Images/Case 3/Ray01.png";
import Ray02 from "../Images/Case 3/Ray02.png";
import Ray03 from "../Images/Case 3/Ray03.png";
// ─────────────────────────────────────────────────────────────────────────────
// SHARED PRIMITIVES
// ─────────────────────────────────────────────────────────────────────────────

const SectionLabel = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3 border border-slate-300 inline-block px-2 py-0.5 rounded-sm">
    {children}
  </p>
);

const SectionHeading = ({ children }) => (
  <h2 className="text-2xl font-bold text-slate-900 mb-5">{children}</h2>
);

const BodyText = ({ children, className = "" }) => (
  <p className={`text-base leading-relaxed text-slate-700 mb-4 ${className}`}>
    {children}
  </p>
);

const PullQuote = ({ children }) => (
  <blockquote className="border-l-4 border-cyan-500 pl-5 my-10 italic text-2xl leading-snug text-slate-800 font-light">
    {children}
  </blockquote>
);

/** Placeholder for any image / mockup asset */
const Asset = ({ label, caption, ratio = "16/9", bg = "#eef2f6", className = "" }) => (
  <figure className={`my-8 ${className}`}>
    <div
      className="w-full rounded-xl flex items-center justify-center text-sm text-slate-400 font-medium border border-slate-200"
      style={{ background: bg, aspectRatio: ratio }}
    >
      [ {label} ]
    </div>
    {caption && (
      <figcaption className="mt-2 flex gap-3 text-xs text-slate-400 uppercase tracking-widest">
        <span>Image</span>
        <span>{caption}</span>
      </figcaption>
    )}
  </figure>
);

/** Multiple assets side by side */
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

const StatCard = ({ value, label }) => (
  <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-5 text-center">
    <p className="text-3xl font-bold text-cyan-600 mb-1">{value}</p>
    <p className="text-xs text-slate-500 leading-snug">{label}</p>
  </div>
);

const InsightCard = ({ icon, title, children }) => (
  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
    <div className="text-2xl mb-2">{icon}</div>
    <p className="text-sm font-semibold text-slate-800 mb-1">{title}</p>
    <p className="text-sm text-slate-500 leading-relaxed">{children}</p>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="space-y-3 mb-6 pl-1">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3 text-base text-slate-700">
        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5" />
        <span>
          {item.label && <strong>{item.label} </strong>}
          {item.desc}
        </span>
      </li>
    ))}
  </ul>
);

const Swatch = ({ hex, name, role }) => (
  <div className="flex flex-col items-start gap-1.5">
    <div className="w-full h-14 rounded-lg border border-slate-200 shadow-sm" style={{ background: hex }} />
    <p className="text-xs font-semibold text-slate-700">{name}</p>
    <p className="text-xs text-slate-400">{hex}</p>
    {role && <p className="text-xs text-slate-400 italic">{role}</p>}
  </div>
);

const TypeSpecimen = ({ name, sample, weight, size, usage }) => (
  <div className="py-4 border-b border-slate-100 last:border-0">
    <div className="flex items-baseline justify-between mb-1">
      <span className="text-xs uppercase tracking-widest text-slate-400">{name}</span>
      <span className="text-xs text-slate-300">{weight} · {size}</span>
    </div>
    <p className="text-slate-800 mb-1" style={{ fontWeight: weight, fontSize: size }}>{sample}</p>
    <p className="text-xs text-slate-400 italic">{usage}</p>
  </div>
);

/** Underlying markets table — real Raydius product scope */
const MarketsTable = () => {
  const rows = [
    { asset: "Indices", examples: "DAX 40, FTSE 100, S&P 500, NASDAQ 100" },
    { asset: "FX", examples: "EUR/USD, GBP/USD, USD/JPY and major pairs" },
    { asset: "Commodities", examples: "Gold, Silver, Oil (Brent / WTI), Natural Gas" },
    { asset: "Crypto assets", examples: "Bitcoin, Ethereum and other major tokens" },
    { asset: "Equities", examples: "Major single-stock underlyings" },
  ];
  return (
    <div className="my-8 rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
        <p className="text-center text-sm font-medium text-cyan-700 italic">
          Underlying markets available for Turbo Warrant issuance
        </p>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Asset Class</th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wide">Example Underlyings</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}`}>
              <td className="px-4 py-3 font-medium text-slate-700">{r.asset}</td>
              <td className="px-4 py-3 text-slate-500">{r.examples}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-slate-400 px-4 py-2 border-t border-slate-100">
        Source: raydius.de — products tradable 24 hours a day, 5 days a week (ex. equities) on Spectrum Markets
      </p>
    </div>
  );
};

const TestResult = ({ task, completion, time, insight }) => (
  <div className="py-4 border-b border-slate-100 last:border-0">
    <div className="flex items-center justify-between mb-1">
      <p className="text-sm font-semibold text-slate-800">{task}</p>
      <div className="flex gap-3 text-xs text-slate-500">
        <span className="bg-slate-100 rounded-full px-2 py-0.5">{completion} completed</span>
        <span className="bg-slate-100 rounded-full px-2 py-0.5">avg {time}</span>
      </div>
    </div>
    <p className="text-sm text-slate-500 italic">{insight}</p>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function RaydiusCaseStudyPage() {
  const [activeTab, setActiveTab] = useState("mobile");

  return (
    <div className="min-h-screen bg-[#fff] font-sans text-slate-900">
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* ── HEADER ──────────────────────────────────────────────── */}
        <header className="mb-14">
          <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-md bg-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm leading-none">IG</span>
              </div>
              <span className="font-bold text-lg tracking-tight">IG Group</span>
            </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-slate-950 mb-10">
            Designing the Trading Experience for Raydius — Europe's First On-Venue 24-Hour Turbo Warrant Issuer
          </h1>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
            <div>
              <p className="text-xs text-slate-400 mb-1.5">Discipline</p>
              <ul className="space-y-0.5 text-sm text-slate-700">
                <li>UX Research</li>
                <li>Product Design</li>
                <li>Visual Design</li>
                <li>Design System</li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1.5">Team</p>
              <ul className="space-y-0.5 text-sm text-slate-700">
                <li>Mohammed Aslam K</li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1.5">Timeline</p>
              <p className="text-sm text-slate-700">[ July 2025 ] – [ Sept 2025 ]</p>
              <p className="text-xs text-slate-400 mt-2">Based in</p>
              <p className="text-sm text-slate-700 mt-0.5">Europe, EUM</p>
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
          <p className="text-xl leading-relaxed text-slate-800">
            <strong>Raydius is a Frankfurt-based issuer of turbo warrants</strong>, part of the IG Group family. Their leveraged products are listed on{" "}
            <strong className="text-slate-900">Spectrum Markets</strong>, tradable 24 hours a day, five days a week — making Raydius{" "}
            <strong>Europe's first on-venue 24-hour turbo warrant issuer</strong>. This case study covers the design work behind{" "}
            <strong>[ Placeholder: the specific product / platform experience this project focused on ]</strong>.
          </p>
        </section>

        {/* ── ABOUT THE PRODUCT ───────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Context</SectionLabel>
          <SectionHeading>What Are Turbo Warrants?</SectionHeading>

          <BodyText>
            Turbos are <strong>leveraged products whose value tracks an underlying asset</strong> on an almost one-to-one basis, adjusted for a multiplier. A turbo ends — "knocks out" — as soon as the underlying reaches or surpasses a predefined threshold. This gives retail investors a way to take <strong>long or short positions</strong> with defined risk parameters and amplified exposure to price movement.
          </BodyText>
          <BodyText>
            Raydius differentiates through <strong>continuous 24/5 availability</strong> and a fast issuance process — <strong>issuing new turbos every hour</strong> for major markets, so traders always have a suitable strike and leverage level available, regardless of when they trade.
          </BodyText>

          <MarketsTable />

          <div className="grid grid-cols-3 gap-4 my-8">
            <StatCard value="24/5" label="Trading availability (ex. equities)" />
            <StatCard value="1/3" label="Of trades happen outside traditional hours" />
            <StatCard value="1000s" label="Of products across 100s of underlyings" />
          </div>
        </section>

        {/* ── BRANDING ────────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Branding</SectionLabel>
          <SectionHeading>Visual Identity</SectionHeading>

          <BodyText>
            Raydius needed a visual language distinct from its parent brand IG, while still feeling part of the same family — <strong>precise, confident, and built for speed</strong>, reflecting the always-on nature of the product.
          </BodyText>

          <h3 className="text-base font-semibold text-slate-800 mb-3 mt-8">Logo &amp; Mark</h3>
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

          <h3 className="text-base font-semibold text-slate-800 mb-4 mt-8">Colour Palette</h3>
          <BodyText>
            A cool, high-contrast palette built for <strong>real-time data legibility</strong> — clear distinction between long/short states, knock-out alerts, and live price movement.
          </BodyText>
          <div className="grid grid-cols-4  gap-3 my-6">
            <Swatch hex="#FFFFFF" name="Page backgound"  />
            <Swatch hex="#FAFAFA" name="Card surface"/>
            <Swatch hex="#D4D4D4" name="Avatar placeholder" />
            <Swatch hex="#F3F3F3" name="Tag chip background" />

            <Swatch hex="#000000" name="Heading text" />
            <Swatch hex="#858585" name="Subtitle / muted text" />
            <Swatch hex="#5E5E5E" name="Inactive tab label" />
            <Swatch hex="#2C676B" name="Status dot (green)" />

            <Swatch hex="#2644EB" name="CTA button (blue)" />
            <Swatch hex="#EBEBEB" name="Divider / hairline" />
          </div>

          <h3 className="text-base font-semibold text-slate-800 mb-4 mt-8">Typography</h3>
          <div className="border border-slate-200 rounded-xl overflow-hidden my-6 bg-white">
            <div className="px-6 py-2 bg-slate-50 border-b border-slate-100">
              <p className="text-xs uppercase tracking-widest text-slate-400">Type Scale</p>
            </div>
            <div className="px-6">
              <TypeSpecimen name="Display" sample="[ Matter SQ ]" weight="700" size="2.5rem" usage="Hero headings, marketing moments" />
              <TypeSpecimen name="Heading" sample="[ Matter SQ ]" weight="600" size="1.5rem" usage="Section headings, product names" />
              <TypeSpecimen name="Body" sample="[ Matter SQ ]" weight="400" size="1rem" usage="Body copy, descriptions" />
              <TypeSpecimen name="Numeric / Data" sample="[ Monospace / Tabular Figures ]" weight="500" size="1rem" usage="Prices, ISINs, leverage values — tabular figures for alignment" />
            </div>
          </div>
        </section>

        {/* ── UX RESEARCH & DISCOVERY ─────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Research</SectionLabel>
          <SectionHeading>Discovery Phase</SectionHeading>

          <BodyText>
            Retail leveraged-product traders span a wide spectrum of experience — from professionals managing multiple positions to newer traders exploring turbos for the first time. Discovery focused on understanding{" "}
            <strong>how both groups evaluate risk, choose strike levels, and decide when to trade outside standard market hours</strong>.
          </BodyText>

          <h3 className="text-base font-semibold text-slate-800 mb-3 mt-6">Research Methods</h3>
          <BulletList items={[
            { label: "User interviews:", desc: "[ n = X ] retail traders across experience levels, covering decision-making around strike selection and timing." },
            { label: "Competitor audit:", desc: "Benchmarked against other turbo / leveraged product issuers and trading platforms on Spectrum Markets." },
            { label: "Stakeholder workshops:", desc: "Sessions with IG / Raydius product and compliance teams to map regulatory and risk-disclosure constraints." },
            { label: "Trading pattern analysis:", desc: "Reviewed [ trading data ] to understand peak 24/5 usage windows and underlying preference." },
          ]} />

            <figure className="my-8">
                 <img
                   src={Researchmao}
                   alt="Hero — Metercube storefront / lifestyle hero image"
                   className="w-full h-auto rounded-xl object-cover"
                   loading="lazy"
                   decoding="async"
                 />
                 <figcaption className="mt-2 flex gap-3 text-xs text-stone-400 uppercase tracking-widest">
                   <span>Image</span>
                   <span>Research Overview</span>
                 </figcaption>
               </figure>

          <h3 className="text-base font-semibold text-slate-800 mb-4 mt-8">Key Insights</h3>
          <div className="grid grid-cols-2 gap-4 my-6">
            <InsightCard icon="🌙" title="Off-hours trading is real">
              A third of trades happen outside traditional market hours — the product had to feel equally trustworthy at 3am as it does at 9am.
            </InsightCard>
            <InsightCard icon="⚡" title="Speed of issuance matters">
              New turbos issued every hour meant the UI needed to clearly communicate "freshness" and avoid stale-price confusion.
            </InsightCard>
            <InsightCard icon="📉" title="Knock-out clarity is critical">
              Users needed the knock-out threshold and distance-to-knockout to be unmistakably clear before placing a trade.
            </InsightCard>
            <InsightCard icon="🔢" title="Leverage literacy varies">
              Newer traders needed lighter-touch education on multiplier and leverage mechanics without slowing down experienced traders.
            </InsightCard>
          </div>

          <PullQuote>
            "[ Placeholder: a representative quote from user research about trading turbos outside normal hours or evaluating risk ]"
            <br />
            <span className="text-base font-normal not-italic text-slate-400 mt-2 block">— Research participant</span>
          </PullQuote>
        </section>

        {/* ── PRODUCT / PLATFORM DESIGN ───────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Platform Design</SectionLabel>
          <SectionHeading>Designing for 24/5 Trading</SectionHeading>

          <BodyText>
            The core design challenge was surfacing <strong>live, fast-moving data</strong> — prices, leverage, knock-out distance — in a way that stayed legible and trustworthy at any hour, on any device, without overwhelming less experienced traders.
          </BodyText>

          <h3 className="text-base font-semibold text-slate-800 mb-3 mt-8">Information Architecture</h3>
          <BodyText>
            Structured around <strong>underlying asset → strike/leverage selection → order ticket</strong>, mirroring how traders naturally narrow down a position rather than browsing a flat product catalogue.
          </BodyText>
          
           <figure className="my-8">
                 <img
                   src={Sitemap}
                   alt="Hero — Metercube storefront / lifestyle hero image"
                   className="w-full h-auto rounded-xl object-cover"
                   loading="lazy"
                   decoding="async"
                 />
                 <figcaption className="mt-2 flex gap-3 text-xs text-stone-400 uppercase tracking-widest">
                   <span>Image</span>
                   <span>Information Architecture</span>
                 </figcaption>
               </figure>

          

          <h3 className="text-base font-semibold text-slate-800 mb-3 mt-8">Key Screens</h3>
         
 <figure className="my-8">
                 <img
                   src={Ray01}
                   alt="Hero — Metercube storefront / lifestyle hero image"
                   className="w-full h-auto rounded-xl object-cover"
                   loading="lazy"
                   decoding="async"
                 />
                 <figcaption className="mt-2 flex gap-3 text-xs text-stone-400 uppercase tracking-widest">
                   <span>Image</span>
                   <span>Product Selector</span>
                 </figcaption>
               </figure>

                <figure className="my-8">
                 <img
                   src={Ray02}
                   alt="Hero — Metercube storefront / lifestyle hero image"
                   className="w-full h-auto rounded-xl object-cover"
                   loading="lazy"
                   decoding="async"
                 />
                 <figcaption className="mt-2 flex gap-3 text-xs text-stone-400 uppercase tracking-widest">
                   <span>Image</span>
                   <span>Trade chart </span>
                 </figcaption>
               </figure>

         

          <figure className="my-8">
                 <img
                   src={Ray03}
                   alt="Hero — Metercube storefront / lifestyle hero image"
                   className="w-full h-auto rounded-xl object-cover"
                   loading="lazy"
                   decoding="async"
                 />
                 <figcaption className="mt-2 flex gap-3 text-xs text-stone-400 uppercase tracking-widest">
                   <span>Image</span>
                   <span>Position Management</span>
                 </figcaption>
               </figure>

        </section>

        {/* ── USER TESTING ────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>User Testing</SectionLabel>
          <SectionHeading>Usability Testing</SectionHeading>

          <BodyText>
            We ran <strong>12 moderated sessions</strong> with traders across experience levels, testing comprehension of leverage mechanics, knock-out risk, and speed of order placement under simulated live-price conditions.
          </BodyText>

          <div className="grid grid-cols-3 gap-4 my-8">
            <StatCard value="12" label="Participants across 2 rounds" />
            <StatCard value="83%" label="Correctly identified knock-out risk" />
            <StatCard value="18s" label="Avg. time to place a trade" />
          </div>

          <h3 className="text-base font-semibold text-slate-800 mb-4 mt-6">Task Completion Results</h3>
          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white my-6">
            <div className="px-5 py-3 bg-slate-50 border-b border-slate-100">
              <p className="text-xs uppercase tracking-widest text-slate-400">Round 2 — Hi-Fi Prototype</p>
            </div>
            <div className="px-5">
              <TestResult
                task="Select an underlying and choose an appropriate leverage level"
                completion="7/8"
                time="1.4 min"
                insight="Users preferred leverage presented as risk tiers (Low/Medium/High) rather than a raw multiplier"
              />
              <TestResult
                task="Identify the distance to knock-out before confirming a trade"
                completion="6/8"
                time="2.1 min"
                insight="A visual proximity gauge outperformed a numeric-only knock-out display"
              />
              <TestResult
                task="Place a trade outside standard market hours"
                completion="5/8"
                time="2.6 min"
                insight="Users wanted an explicit 'Market Open — 24/5' badge to trust that the trade would execute"
              />
              <TestResult
                task="Monitor and exit an open position"
                completion="8/8"
                time="1.1 min"
                insight="Push alerts for approaching knock-out significantly increased confidence in exiting on time"
              />
            </div>
          </div>

          <Asset label="User testing session — screen recording stills" caption="User Testing" ratio="16/8" bg="#eef2f6" />

          <h3 className="text-base font-semibold text-slate-800 mb-3 mt-8">Key Findings &amp; Iterations</h3>
          <BulletList items={[
            { label: "Finding 1:", desc: "Visualising knock-out proximity as a gauge — rather than a static number — reduced misunderstanding of imminent risk by over 30%." },
            { label: "Finding 2:", desc: "A persistent 'Market Open' badge reassured users trading turbo warrants during unconventional or extended hours." },
            { label: "Finding 3:", desc: "Leverage risk tiers (Low/Medium/High) tested significantly better for comprehension than raw multiplier values alone, especially for less experienced traders." },
          ]} />

          <Asset label="Before/after — order ticket iterations from testing" caption="Iterations" ratio="16/7" bg="#eef2f6" />
        </section>

        {/* ── RESULT ──────────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Result</SectionLabel>
          <p className="text-xl leading-relaxed text-slate-500">
            We designed a trading experience that matches Raydius's position as{" "}
            <strong className="text-slate-900">Europe's first on-venue 24-hour turbo warrant issuer</strong> — built for clarity under fast-moving data and confidence at any hour of the day.{" "}
            <strong className="text-slate-900">[ Placeholder: key outcome metric — e.g. launch results, engagement uplift, or trading volume impact ].</strong>
          </p>
        </section>

        {/* ── HAND-OFF & FINAL DESIGN ─────────────────────────────── */}
        <section className="mb-20">
          <SectionLabel>Present</SectionLabel>
          <SectionHeading>Hand-Off &amp; Final Design</SectionHeading>

          <h3 className="text-base font-semibold text-slate-800 mb-3">Design System</h3>
          <BodyText>
            A component library covering data-dense states — live price tickers, knock-out gauges, leverage tags, and long/short indicators — handed off with full token documentation.
          </BodyText>
          <Asset label="Design system — component library overview" caption="Design System" ratio="16/8" bg="#eef2f6" />

          <h3 className="text-base font-semibold text-slate-800 mb-3 mt-8">Developer Specifications</h3>
          <AssetGrid
            caption="Hand Off"
            items={[
              { label: "Mobile order ticket — measurements", bg: "#f7f9fb", ratio: "3/4" },
              { label: "Desktop layout grid + spacing", bg: "#eef2f6", ratio: "3/4" },
            ]}
            cols={2}
          />

          <h3 className="text-base font-semibold text-slate-800 mb-3 mt-8">Final Screens</h3>
          <AssetGrid
            caption="Final Hi-Fi — Mobile"
            items={[
              { label: "Product selector", bg: "#eef2f6", ratio: "9/16" },
              { label: "Trade chart", bg: "#f7f9fb", ratio: "9/16" },
              { label: "Order ticket", bg: "#e0f2fe", ratio: "9/16" },
              { label: "Position management", bg: "#eef2f6", ratio: "9/16" },
            ]}
            cols={4}
          />
          <Asset label="Final screens — Desktop full-page layouts" caption="Final Hi-Fi — Desktop" ratio="16/9" bg="linear-gradient(135deg,#dbeafe,#e0f2fe)" />
        </section>

      </div>
    </div>
  );
}