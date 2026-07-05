import React, { useState } from "react";
import heroImage from "../Images/Case 4/Cover4.png";
import img01 from "../Images/Case 4/img01.png";
// ─────────────────────────────────────────────────────────────────────────────
// SHARED PRIMITIVES
// ─────────────────────────────────────────────────────────────────────────────

const SectionLabel = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-3 border border-red-200 inline-block px-2 py-0.5 rounded-sm">
    {children}
  </p>
);

const SectionHeading = ({ children }) => (
  <h2 className="text-2xl font-bold text-gray-900 mb-5">{children}</h2>
);

const BodyText = ({ children, className = "" }) => (
  <p className={`text-base leading-relaxed text-gray-700 mb-4 ${className}`}>
    {children}
  </p>
);

const PullQuote = ({ children }) => (
  <blockquote className="border-l-4 border-red-500 pl-5 my-10 italic text-2xl leading-snug text-gray-800 font-light">
    {children}
  </blockquote>
);

const Asset = ({ label, caption, ratio = "16/9", bg = "#f4f4f4", className = "" }) => (
  <figure className={`my-8 ${className}`}>
    <div
      className="w-full rounded-xl flex items-center justify-center text-sm text-gray-400 font-medium border border-gray-200"
      style={{ background: bg, aspectRatio: ratio }}
    >
      [ {label} ]
    </div>
    {caption && (
      <figcaption className="mt-2 flex gap-3 text-xs text-gray-400 uppercase tracking-widest">
        <span>Image</span>
        <span>{caption}</span>
      </figcaption>
    )}
  </figure>
);

const AssetGrid = ({ items, caption, cols = 2 }) => (
  <figure className="my-8">
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl flex items-center justify-center text-xs text-gray-400 font-medium border border-gray-200"
          style={{ background: item.bg || "#f4f4f4", aspectRatio: item.ratio || "9/16" }}
        >
          [ {item.label} ]
        </div>
      ))}
    </div>
    {caption && (
      <figcaption className="mt-2 flex gap-3 text-xs text-gray-400 uppercase tracking-widest">
        <span>Image</span>
        <span>{caption}</span>
      </figcaption>
    )}
  </figure>
);

const StatCard = ({ value, label }) => (
  <div className="bg-red-50 border border-red-100 rounded-xl p-5 text-center">
    <p className="text-3xl font-bold text-red-500 mb-1">{value}</p>
    <p className="text-xs text-gray-500 leading-snug">{label}</p>
  </div>
);

const InsightCard = ({ icon, title, children }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
    <div className="text-2xl mb-2">{icon}</div>
    <p className="text-sm font-semibold text-gray-800 mb-1">{title}</p>
    <p className="text-sm text-gray-500 leading-relaxed">{children}</p>
  </div>
);

const BulletList = ({ items }) => (
  <ul className="space-y-3 mb-6 pl-1">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3 text-base text-gray-700">
        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5" />
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
    <div className="w-full h-14 rounded-lg border border-gray-200 shadow-sm" style={{ background: hex }} />
    <p className="text-xs font-semibold text-gray-700">{name}</p>
    <p className="text-xs text-gray-400">{hex}</p>
    {role && <p className="text-xs text-gray-400 italic">{role}</p>}
  </div>
);

const TypeSpecimen = ({ name, sample, weight, size, usage }) => (
  <div className="py-4 border-b border-gray-100 last:border-0">
    <div className="flex items-baseline justify-between mb-1">
      <span className="text-xs uppercase tracking-widest text-gray-400">{name}</span>
      <span className="text-xs text-gray-300">{weight} · {size}</span>
    </div>
    <p className="text-gray-800 mb-1" style={{ fontWeight: weight, fontSize: size }}>{sample}</p>
    <p className="text-xs text-gray-400 italic">{usage}</p>
  </div>
);

const TestResult = ({ task, completion, time, insight }) => (
  <div className="py-4 border-b border-gray-100 last:border-0">
    <div className="flex items-start justify-between mb-1 gap-4">
      <p className="text-sm font-semibold text-gray-800">{task}</p>
      <div className="flex gap-2 flex-shrink-0 text-xs text-gray-500">
        <span className="bg-gray-100 rounded-full px-2 py-0.5 whitespace-nowrap">{completion}</span>
        <span className="bg-gray-100 rounded-full px-2 py-0.5 whitespace-nowrap">{time}</span>
      </div>
    </div>
    <p className="text-sm text-gray-500 italic">{insight}</p>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// ONBOARDING CAROUSEL PREVIEW (live JSX — real content from screenshots)
// ─────────────────────────────────────────────────────────────────────────────

const onboardingSlides = [
  {
    bg: "#3D0A1E",
    accentBg: "#E8472A",
    word: "Trade",
    risk: "Your capital is at risk.",
    riskSub: "67% of retail investor accounts lose money when trading spread bets and CFDs with this provider.",
    body: "Choose tax-free spread betting or CFDs and access 16,000 global markets.",
    emoji: "🎯",
  },
  {
    bg: "#3D0A1E",
    accentBg: "#E8472A",
    word: "Crypto",
    risk: "Don't invest unless you're prepared to lose all the money you invest.",
    riskSub: "This is a high-risk investment, and you should not expect to be protected if something goes wrong.",
    body: "Buy, sell, store and explore crypto, with over 55 assets at your fingertips.",
    emoji: "🪙",
  },
  {
    bg: "#3D0A1E",
    accentBg: "#E8472A",
    word: "Invest",
    risk: "Your capital is at risk.",
    riskSub: "Other fees may apply.",
    body: "Explore over 12,000 stocks and ETFs. Build your portfolio, your way. Pay 0% commission. Earn 3.75% AER on uninvested cash.",
    emoji: "⏳",
  },
];

const OnboardingPreview = () => {
  const [active, setActive] = useState(0);
  const slide = onboardingSlides[active];
  return (
    <figure className="my-8">
      <div
        className="rounded-2xl overflow-hidden flex flex-col"
        style={{ background: slide.bg, maxWidth: 320, margin: "0 auto" }}
      >
        {/* Risk banner */}
        <div className="px-5 pt-5 pb-3 text-center">
          <p className="text-white text-xs font-semibold leading-snug">{slide.risk}</p>
          <p className="text-white/60 text-xs mt-1 leading-snug">{slide.riskSub}</p>
        </div>
        {/* Illustration placeholder */}
        <div className="mx-auto mt-2 mb-4 w-36 h-36 rounded-2xl bg-white/10 flex items-center justify-center text-5xl">
          {slide.emoji}
        </div>
        {/* Word */}
        <p className="text-center font-black leading-none px-6 mb-3" style={{ fontSize: "3.5rem", color: "#E8472A" }}>
          {slide.word}
        </p>
        {/* Body */}
        <p className="text-white text-base leading-relaxed px-6 mb-6">{slide.body}</p>
        {/* Dots */}
        <div className="flex justify-center gap-2 mb-4">
          {onboardingSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="h-1 rounded-full transition-all"
              style={{ width: i === active ? 24 : 8, background: i === active ? "#fff" : "rgba(255,255,255,0.3)" }}
            />
          ))}
        </div>
        {/* CTAs */}
        <div className="px-5 pb-6 space-y-2">
          <button className="w-full bg-white text-gray-900 font-semibold rounded-xl py-3 text-sm">
            Create account
          </button>
          <button className="w-full text-white font-semibold py-2 text-sm">Log in</button>
        </div>
      </div>
      <figcaption className="mt-3 flex gap-3 text-xs text-gray-400 uppercase tracking-widest justify-center">
        <span>Image</span><span>Onboarding carousel — tap dots to switch</span>
      </figcaption>
    </figure>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO SCREEN PREVIEW (live JSX — real content from screenshots)
// ─────────────────────────────────────────────────────────────────────────────

const positions = [
  { name: "Apple Inc 24 hours", type: "CFD", dir: "Buy", detail: "+15 @ 1320.4", value: "+£154.00", sub: "DFB", pos: true },
  { name: "Beta Shares",        type: "CFD", dir: "Buy", detail: "+15 @ 1320.4", value: "+£4.21",   sub: "March-26", pos: true },
  { name: "Gold",               type: "CFD", dir: "Sell",detail: "+15 @ 1320.4", value: "-£2.49",   sub: "DFB", pos: false },
  { name: "Paypal",             type: "JISA",dir: "",    detail: "2 Shares @ £237.68", value: "£672.91", sub: "+£3.82", pos: true },
  { name: "Tesla",              type: "SB",  dir: "Buy", detail: "+15 @ 1320.4", value: "+£0.99",   sub: "DFB", pos: true },
  { name: "Uber",               type: "CFD", dir: "Sell",detail: "+15 @ 1320.4", value: "-£7.22",   sub: "DFB", pos: false },
  { name: "VISA",               type: "GIA", dir: "",    detail: "2 Shares @ £237.68 avg", value: "£672.91", sub: "+£2.49", pos: true },
  { name: "UBS",                type: "SB",  dir: "Buy", detail: "+15 @ 1320.4", value: "+£1.23",   sub: "DFB", pos: true },
];

const typeColor = { CFD: "#E8472A", JISA: "#8B5CF6", SB: "#2563EB", GIA: "#059669" };

const PortfolioPreview = ({ dark = false }) => (
  <div
    className="rounded-2xl overflow-hidden"
    style={{ background: dark ? "#1a0a12" : "#ffffff", maxWidth: 360, margin: "0 auto",
      border: dark ? "none" : "1px solid #e5e7eb" }}
  >
    {/* Header */}
    <div className="px-4 pt-4 pb-3" style={{ background: "#3D0A1E" }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
          <span className="text-white text-sm">+</span>
          <div>
            <p className="text-white/60 text-xs">Available to invest</p>
            <p className="text-white text-sm font-bold">£10,000.00</p>
          </div>
        </div>
        <div className="flex gap-3 text-white/70 text-lg">
          <span>🔍</span><span>🔔</span>
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">ALL ▼</span>
        </div>
      </div>
      <p className="text-white/60 text-xs">CFD balance</p>
      <p className="text-white text-2xl font-bold">£20,000.00</p>
      <p className="text-red-400 text-xs">-£100.00 (-5.00%) Current P&amp;L</p>
    </div>
    {/* Positions list */}
    <div className="px-4 py-3" style={{ background: dark ? "#1a0a12" : "#ffffff" }}>
      <p className="font-bold text-base mb-3" style={{ color: dark ? "#ffffff" : "#111827" }}>Positions</p>
      <div className="space-y-3">
        {positions.map((p, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500 font-bold flex-shrink-0">
                {p.name[0]}
              </div>
              <div>
                <p className="text-xs font-semibold" style={{ color: dark ? "#f9fafb" : "#111827" }}>{p.name}</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-white text-xs font-bold px-1 py-0.5 rounded" style={{ background: typeColor[p.type] || "#6b7280" }}>
                    {p.type}
                  </span>
                  {p.dir && (
                    <span className="text-xs font-semibold" style={{ color: p.dir === "Buy" ? "#16a34a" : "#dc2626" }}>{p.dir}</span>
                  )}
                  <span className="text-xs" style={{ color: dark ? "#9ca3af" : "#6b7280" }}>{p.detail}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold" style={{ color: p.pos ? "#16a34a" : "#dc2626" }}>{p.value}</p>
              <p className="text-xs" style={{ color: dark ? "#6b7280" : "#9ca3af" }}>{p.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Tab bar */}
    <div className="flex border-t px-2 pb-2 pt-2" style={{ borderColor: dark ? "#2d1a24" : "#f3f4f6", background: dark ? "#1a0a12" : "#ffffff" }}>
      {[["iG", "Portfolio", true], ["☆", "Watchlist", false], ["⊟", "Discover", false], ["▭", "Wallet", false]].map(([icon, label, active]) => (
        <div key={label} className="flex-1 flex flex-col items-center">
          <span className="text-base" style={{ color: active ? "#E8472A" : "#9ca3af" }}>{icon}</span>
          <span className="text-xs" style={{ color: active ? "#E8472A" : "#9ca3af" }}>{label}</span>
          {active && <div className="h-0.5 w-6 rounded-full mt-0.5" style={{ background: "#E8472A" }} />}
        </div>
      ))}
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// STOCK DETAIL SCREEN PREVIEW
// ─────────────────────────────────────────────────────────────────────────────

const StockDetailPreview = () => (
  <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white" style={{ maxWidth: 360, margin: "0 auto" }}>
    {/* Nav */}
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
      <span className="text-gray-500 text-sm">←</span>
      <span className="text-sm font-bold text-red-500">APPL</span>
      <div className="flex gap-3 text-gray-400 text-sm"><span>☆</span><span>🔔</span></div>
    </div>
    {/* Asset info */}
    <div className="px-4 pt-3 pb-2 flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-gray-900 leading-snug">iShares Growth Portfolio<br />UCITS ETF</p>
        <p className="text-xs text-gray-400">ETF</p>
      </div>
      <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white text-xs font-bold">iS</div>
    </div>
    {/* Price */}
    <div className="px-4 pb-2">
      <p className="text-2xl font-bold text-gray-900">$270.04</p>
      <p className="text-xs text-green-500">+£0.22 (37.82%) today</p>
    </div>
    {/* Sparkline placeholder */}
    <div className="mx-4 rounded-lg bg-green-50 h-20 flex items-center justify-center text-xs text-green-400 mb-3">
      [ sparkline chart ]
    </div>
    {/* Time filters */}
    <div className="flex justify-around px-4 pb-3 text-xs text-gray-400">
      {["1D","1W","1M","3M","6M","1Y","5Y"].map(t => (
        <span key={t} className={t === "1Y" ? "font-bold text-gray-900 border-b border-gray-900 pb-0.5" : ""}>{t}</span>
      ))}
    </div>
    {/* Rows */}
    <div className="border-t border-gray-100">
      {[
        { label: "Queued orders", badge: "4" },
        { label: "Recent activity" },
      ].map((row, i) => (
        <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-800 font-semibold">{row.label}</span>
            {row.badge && <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">{row.badge}</span>}
          </div>
          <span className="text-gray-400 text-sm">›</span>
        </div>
      ))}
    </div>
    {/* Alerts section */}
    <div className="px-4 pt-3 pb-4">
      <p className="font-bold text-gray-900 mb-2 text-sm">Alerts</p>
      {[
        { icon: "iS", name: "iShares Growth Portfolio", detail: "5% increase from", time: "41 mins ago", cancel: false, bg: "bg-green-500" },
        { icon: "✈️", name: "Delta Airlines", detail: "5% increase from £175.00", cancel: true, bg: "bg-gray-100" },
        { icon: "iG", name: "IG", detail: "5% increase from £175.00", cancel: true, bg: "bg-red-500" },
        { icon: "M", name: "McDonalds", detail: "5% increase from £175.00", cancel: true, bg: "bg-yellow-500" },
      ].map((a, i) => (
        <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50">
          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full ${a.bg} flex items-center justify-center text-white text-xs font-bold`}>{a.icon}</div>
            <div>
              <p className="text-xs font-semibold text-gray-800">{a.name}</p>
              <p className="text-xs text-gray-400">{a.detail}</p>
            </div>
          </div>
          {a.cancel
            ? <button className="bg-red-50 text-red-500 text-xs font-semibold px-2 py-1 rounded-lg">Cancel</button>
            : <span className="text-xs text-gray-400">{a.time}</span>
          }
        </div>
      ))}
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// ERROR + SKELETON STATE PREVIEWS
// ─────────────────────────────────────────────────────────────────────────────

const ErrorStatePreview = () => (
  <div className="rounded-2xl overflow-hidden border border-gray-200" style={{ maxWidth: 360, margin: "0 auto" }}>
    <div className="h-16" style={{ background: "#3D0A1E" }} />
    <div className="bg-white flex flex-col items-center justify-center py-16 px-8">
      <span className="text-5xl mb-4">🔔</span>
      <p className="text-base font-bold text-gray-900 mb-1">Account unavailable</p>
      <p className="text-sm text-gray-500 text-center mb-6">We couldn't access your account</p>
      <button className="px-6 py-2.5 rounded-xl text-white text-sm font-semibold" style={{ background: "#3D0A1E" }}>
        Contact us
      </button>
    </div>
    <div className="flex border-t px-2 pb-2 pt-2 bg-white">
      {[["iG", "Portfolio", true], ["☆", "Watchlist", false], ["⊟", "Discover", false], ["▭", "Wallet", false]].map(([icon, label, active]) => (
        <div key={label} className="flex-1 flex flex-col items-center">
          <span className="text-base" style={{ color: active ? "#E8472A" : "#9ca3af" }}>{icon}</span>
          <span className="text-xs" style={{ color: active ? "#E8472A" : "#9ca3af" }}>{label}</span>
        </div>
      ))}
    </div>
  </div>
);

const SkeletonPreview = () => (
  <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white" style={{ maxWidth: 360, margin: "0 auto" }}>
    <div className="h-20" style={{ background: "#3D0A1E" }} />
    <div className="p-4 space-y-3 bg-white">
      {[100, 90, 85, 90, 80].map((w, i) => (
        <div key={i} className="h-12 rounded-xl animate-pulse" style={{ background: "#f3eef1", width: `${w}%` }} />
      ))}
    </div>
    <div className="flex border-t px-2 pb-2 pt-2 bg-white">
      {[["iG", "Portfolio", true], ["☆", "Watchlist", false], ["⊟", "Discover", false], ["▭", "Wallet", false]].map(([icon, label, active]) => (
        <div key={label} className="flex-1 flex flex-col items-center">
          <span className="text-base" style={{ color: active ? "#E8472A" : "#9ca3af" }}>{icon}</span>
          <span className="text-xs" style={{ color: active ? "#E8472A" : "#9ca3af" }}>{label}</span>
        </div>
      ))}
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function TradingAppCaseStudy() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen bg-[#fff] font-sans text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* ── HEADER ──────────────────────────────────────────────── */}
        <header className="mb-14">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xs flex items-center justify-center" style={{ background: "red" }}>
              <span className="text-white font-bold text-sm tracking-tight">iG</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900 leading-none">IG Group</p>
              <p className="text-xs text-gray-400 leading-none mt-0.5">Mobile Trading App Redesign</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-950 mb-10">
            Redesigning the IG Mobile Trading App — Onboarding, Portfolio, and Beyond
          </h1>

          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
            <div>
              <p className="text-xs text-gray-400 mb-1.5">Discipline</p>
              <ul className="space-y-0.5 text-sm text-gray-700">
                <li>Product Design</li>
                <li>UX Research</li>
                <li>Interaction Design</li>
                <li>User Testing</li>
                <li>Design System</li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1.5">Team</p>
              <ul className="space-y-0.5 text-sm text-gray-700">
                <li>Mohammed Aslam K</li>
                <li>Naveen Kumar</li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1.5">Timeline</p>
              <p className="text-sm text-gray-700">[ Jan 2026 ] – [ May 2026 ]</p>
              <p className="text-xs text-gray-400 mt-2">Platform</p>
              <p className="text-sm text-gray-700 mt-0.5">iOS · Android</p>
            </div>
          </div>
        </header>

        {/* ── SPLASH / HERO ───────────────────────────────────────── */}
       <figure className="my-8">
                 <img
                   src={heroImage}
                   alt="Banner"
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
          <p className="text-xl leading-relaxed text-gray-800">
            <strong>IG Group is the world's No. 1 provider of CFDs and spread betting</strong>, offering access to over 16,000 global markets. The mobile app is the primary trading surface for a fast-growing segment of retail investors.{" "}
            <strong className="text-gray-900">This case study covers the redesign of the mobile app experience</strong> — from first launch through onboarding, portfolio management, and key edge states — with a focus on{" "}
            <strong>clarity, trust, and speed</strong>.
          </p>
        </section>

        {/* ── PRODUCT SCOPE ───────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Context</SectionLabel>
          <SectionHeading>What the App Covers</SectionHeading>

          <BodyText>
            The IG app spans three distinct product areas, each with its own regulatory context, user intent, and design requirements:
          </BodyText>

          <div className="grid grid-cols-3 gap-4 my-8">
            <div className="rounded-xl p-5 text-white text-center" style={{ background: "#3D0A1E" }}>
              <p className="text-3xl font-black mb-2" style={{ color: "#E8472A" }}>Trade</p>
              <p className="text-xs text-white/70 leading-relaxed">Tax-free spread betting &amp; CFDs across 16,000 global markets</p>
            </div>
            <div className="rounded-xl p-5 text-white text-center" style={{ background: "#3D0A1E" }}>
              <p className="text-3xl font-black mb-2" style={{ color: "#E8472A" }}>Crypto</p>
              <p className="text-xs text-white/70 leading-relaxed">Buy, sell, store &amp; explore 55+ crypto assets</p>
            </div>
            <div className="rounded-xl p-5 text-white text-center" style={{ background: "#3D0A1E" }}>
              <p className="text-3xl font-black mb-2" style={{ color: "#E8472A" }}>Invest</p>
              <p className="text-xs text-white/70 leading-relaxed">12,000+ stocks &amp; ETFs, 0% commission, 3.75% AER on cash</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 my-6">
            <StatCard value="16,000+" label="Global markets via spread betting & CFDs" />
            <StatCard value="55+" label="Crypto assets available 24/7" />
            <StatCard value="12,000+" label="Stocks & ETFs, 0% commission" />
          </div>
        </section>

        {/* ── UX RESEARCH ─────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Research</SectionLabel>
          <SectionHeading>Discovery Phase</SectionHeading>

          <BodyText>
            We began by mapping the existing app experience across all three product verticals, identifying drop-off points, regulatory friction, and moments where the UI was adding cognitive load rather than reducing it.
          </BodyText>

          <h3 className="text-base font-semibold text-gray-800 mb-3 mt-6">Research Methods</h3>
          <BulletList items={[
            { label: "User interviews:", desc: "[ n = X ] retail traders across experience levels — new investors, active CFD traders, and crypto buyers." },
            { label: "Session recordings:", desc: "Reviewed existing in-app session recordings to identify rage taps, hesitation points, and abandoned flows." },
            { label: "Heuristic evaluation:", desc: "Applied Nielsen's 10 heuristics across onboarding, portfolio, and trade placement flows." },
            { label: "Competitor audit:", desc: "Benchmarked against Robinhood, Freetrade, eToro, and Revolut on onboarding clarity and portfolio design." },
            { label: "Regulatory review:", desc: "Worked with compliance to ensure risk warnings (FCA mandated) were prominent without dominating the experience." },
          ]} />

          {/* <Asset label="Research synthesis — affinity map / session recording highlights" caption="Research Overview" ratio="16/8" bg="#f4f4f4" /> */}

          {/* <h3 className="text-base font-semibold text-gray-800 mb-4 mt-8">Key Insights</h3>
          <div className="grid grid-cols-2 gap-4 my-6">
            <InsightCard icon="🚦" title="Risk warnings create friction">
              FCA-mandated risk disclosures were necessary but the existing placement interrupted critical decision moments. We needed them visible but not obstructive.
            </InsightCard>
            <InsightCard icon="🗂️" title="Multi-product confusion">
              Users with both CFD and Invest accounts struggled to switch context. The portfolio blended account types without clear visual separation.
            </InsightCard>
            <InsightCard icon="⚡" title="Speed is a trust signal">
              Slow price refreshes and skeleton loading states without feedback eroded trust in the live data — especially for CFD traders.
            </InsightCard>
            <InsightCard icon="🌓" title="Dark mode is table stakes">
              A significant portion of active traders preferred dark mode for extended sessions. The original app lacked a dark theme entirely.
            </InsightCard>
          </div> */}

          <PullQuote>
            "I can't tell which account I'm looking at — the CFD balance and my invest portfolio are just mixed together."
            <br />
            <span className="text-base font-normal not-italic text-gray-400 mt-2 block">— User interview participant</span>
          </PullQuote>
        </section>

        {/* ── VISUAL IDENTITY ─────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Visual Design</SectionLabel>
          <SectionHeading>Colour &amp; Typography</SectionHeading>

          <BodyText>
            The redesign retained IG's core brand red while introducing a structured dark maroon UI system — separating the marketing / onboarding palette from the in-app trading environment.
          </BodyText>

          <h3 className="text-base font-semibold text-gray-800 mb-4 mt-6">Colour System</h3>
          <div className="grid grid-cols-5 gap-3 my-6">
            <Swatch hex="#E8472A" name="IG Red" role="Brand / CTA" />
            <Swatch hex="#3D0A1E" name="Maroon" role="App chrome / header" />
            <Swatch hex="#16A34A" name="Long / Up" role="Positive P&L" />
            <Swatch hex="#DC2626" name="Short / Down" role="Negative P&L" />
            <Swatch hex="#F9F9F9" name="Surface" role="Light mode bg" />
          </div>
          <BodyText>
            Account-type tags use distinct colours to prevent cross-account confusion at a glance:{" "}
            <strong style={{ color: "#E8472A" }}>CFD</strong> (IG Red),{" "}
            <strong style={{ color: "#8B5CF6" }}>JISA</strong> (Purple),{" "}
            <strong style={{ color: "#2563EB" }}>SB</strong> (Blue),{" "}
            <strong style={{ color: "#059669" }}>GIA</strong> (Green).
          </BodyText>

          <h3 className="text-base font-semibold text-gray-800 mb-4 mt-8">Typography</h3>
          <div className="border border-gray-200 rounded-xl overflow-hidden my-6 bg-white">
            <div className="px-6 py-2 bg-gray-50 border-b border-gray-100">
              <p className="text-xs uppercase tracking-widest text-gray-400">Type Scale</p>
            </div>
            <div className="px-6">
              <TypeSpecimen name="Display / Hero word" sample="Trade" weight="900" size="3rem" usage="Onboarding hero word — bold, brand red, italic" />
              <TypeSpecimen name="Price / Balance" sample="£20,000.00" weight="700" size="1.75rem" usage="Portfolio balances, live prices — tabular figures" />
              <TypeSpecimen name="Heading" sample="Positions" weight="700" size="1rem" usage="Section labels within screens" />
              <TypeSpecimen name="Body / Row label" sample="Apple Inc 24 hours" weight="500" size="0.875rem" usage="Instrument names, position labels" />
              <TypeSpecimen name="Tag / Badge" sample="CFD · Buy" weight="700" size="0.7rem" usage="Account type tags, direction badges" />
            </div>
          </div>
        </section>

        {/* ── ONBOARDING ──────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Onboarding</SectionLabel>
          <SectionHeading>First-Launch Carousel</SectionHeading>

          <BodyText>
            The onboarding carousel introduces the app's three pillars — Trade, Crypto, Invest — using <strong>large typographic heroes, 3D illustrations, and concise value propositions</strong>. Regulatory risk warnings are placed at the top of each slide per FCA requirements, in a way that doesn't compete with the core message.
          </BodyText>
          <BulletList items={[
            { label: "Trade:", desc: '"Choose tax-free spread betting or CFDs and access 16,000 global markets." — 67% risk warning shown.' },
            { label: "Crypto:", desc: '"Buy, sell, store and explore crypto, with over 55 assets at your fingertips." — full high-risk investment warning shown.' },
            { label: "Invest:", desc: '"Explore over 12,000 stocks and ETFs. Build your portfolio, your way. Pay 0% commission. Earn 3.75% AER on uninvested cash."' },
          ]} />

          {/* Live interactive onboarding preview */}
          <figure className="my-8">
                 <img
                   src={img01}
                   alt="Banner"
                   className="w-full h-auto rounded-xl object-cover"
                   loading="lazy"
                   decoding="async"
                 />
                 <figcaption className="mt-2 flex gap-3 text-xs text-stone-400 uppercase tracking-widest">
                   <span>Image</span>
                   <span>Intro Image</span>
                 </figcaption>
               </figure>
        </section>

        {/* ── PORTFOLIO SCREEN ────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Core Screens</SectionLabel>
          <SectionHeading>Portfolio — Positions View</SectionHeading>

          <BodyText>
            The portfolio screen is the app's home — it needed to give traders an <strong>immediate P&L read at a glance</strong> while clearly separating account types (CFD, Invest, Crypto) and trade directions (Buy/Sell, Long/Short).
          </BodyText>
          <BulletList items={[
            { label: "Header:", desc: "Dark maroon with CFD balance, overall P&L, and quick access to search and notifications." },
            { label: "Account filter:", desc: '"ALL" dropdown lets users filter to a single account type — CFD, JISA, SB, GIA.' },
            { label: "Position rows:", desc: "Instrument name, colour-coded account tag, direction, and live P&L in a scannable two-line layout." },
            { label: "P&L colouring:", desc: "Green for positive, red for negative — consistent throughout the app and never ambiguous." },
          ]} />

          {/* Dark / light toggle */}
          <div className="my-8">
            <div className="flex gap-2 mb-5">
              {[["light", "☀️ Light mode"], ["dark", "🌙 Dark mode"]].map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setDarkMode(val === "dark")}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                    (darkMode ? "dark" : "light") === val
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <PortfolioPreview dark={darkMode} />
            <figcaption className="mt-3 flex gap-3 text-xs text-gray-400 uppercase tracking-widest justify-center">
              <span>Image</span><span>Portfolio screen — toggle light / dark mode</span>
            </figcaption>
          </div>
        </section>

        {/* ── STOCK DETAIL ────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Core Screens</SectionLabel>
          <SectionHeading>Asset Detail &amp; Alerts</SectionHeading>

          <BodyText>
            Tapping any position opens the asset detail screen — <strong>price chart with time-range selector, queued orders, recent activity, and price alerts</strong>. Alerts are surfaced directly on this screen, keeping the monitoring loop tight without requiring a separate notifications centre visit.
          </BodyText>

          <StockDetailPreview />
          <figcaption className="mt-3 flex gap-3 text-xs text-gray-400 uppercase tracking-widest">
            <span>Image</span><span>Asset Detail — iShares Growth Portfolio ETF</span>
          </figcaption>
        </section>

        {/* ── EDGE STATES ─────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Edge States</SectionLabel>
          <SectionHeading>Loading &amp; Error States</SectionHeading>

          <BodyText>
            Two critical non-happy-path states were designed as first-class screens, not afterthoughts — <strong>skeleton loading</strong> (data is incoming) and <strong>account unavailable</strong> (an error has occurred). Both maintain the app chrome and navigation so users always feel oriented.
          </BodyText>

          <div className="grid grid-cols-2 gap-6 my-8">
            <div>
              <SkeletonPreview />
              <p className="text-xs text-gray-400 text-center mt-2 uppercase tracking-widest">Skeleton loading state</p>
            </div>
            <div>
              <ErrorStatePreview />
              <p className="text-xs text-gray-400 text-center mt-2 uppercase tracking-widest">Account unavailable</p>
            </div>
          </div>

          <BulletList items={[
            { label: "Skeleton state:", desc: "Placeholder blocks mirror the shape and position of real content — portfolio header remains visible to orient the user during load." },
            { label: "Error state:", desc: 'Bell illustration, plain-language error ("We couldn\'t access your account"), and a direct "Contact us" CTA — no dead end.' },
          ]} />
        </section>

        {/* ── USER TESTING ────────────────────────────────────────── */}
        {/* <section className="mb-16">
          <SectionLabel>User Testing</SectionLabel>
          <SectionHeading>Usability Testing</SectionHeading>

          <BodyText>
            We ran <strong>[ n = X ] moderated sessions</strong> across two rounds — lo-fi prototype testing early in the process, and hi-fi testing before handoff — with participants spanning new retail investors and experienced CFD traders.
          </BodyText>

          <div className="grid grid-cols-3 gap-4 my-8">
            <StatCard value="[ X ]" label="Participants across 2 rounds" />
            <StatCard value="[ X ]%" label="Task completion rate — Round 2" />
            <StatCard value="[ X ]s" label="Avg. time to read current P&L" />
          </div>

          <h3 className="text-base font-semibold text-gray-800 mb-4 mt-6">Task Completion Results</h3>
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white my-6">
            <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
              <p className="text-xs uppercase tracking-widest text-gray-400">Round 2 — Hi-Fi Prototype</p>
            </div>
            <div className="px-5">
              <TestResult
                task="Identify your total CFD balance and overall P&L"
                completion="[ X/X ] completed"
                time="avg [ X ]s"
                insight="[ Placeholder — e.g. Dark maroon header with large balance text was identified instantly; P&L colour coding was universally understood ]"
              />
              <TestResult
                task="Find and open a specific position from the portfolio"
                completion="[ X/X ] completed"
                time="avg [ X ]s"
                insight="[ Placeholder — e.g. Account-type colour tags reduced mis-taps significantly vs. original app ]"
              />
              <TestResult
                task="Set a price alert on an open position"
                completion="[ X/X ] completed"
                time="avg [ X ]s"
                insight="[ Placeholder — e.g. Alerts surfaced directly on the detail screen reduced the steps from 5 to 2 vs. original ]"
              />
              <TestResult
                task="Complete onboarding and reach the Create Account screen"
                completion="[ X/X ] completed"
                time="avg [ X ]s"
                insight="[ Placeholder — e.g. Carousel dot interaction wasn't immediately obvious — added swipe affordance label ]"
              />
              <TestResult
                task="Understand what happened when the portfolio failed to load"
                completion="[ X/X ] completed"
                time="avg [ X ]s"
                insight="[ Placeholder — e.g. 'Contact us' CTA in error state had 100% comprehension — no confusion about next steps ]"
              />
            </div>
          </div>

          <Asset label="User testing session — screen recording stills" caption="User Testing" ratio="16/8" bg="#f4f4f4" />

          <h3 className="text-base font-semibold text-gray-800 mb-3 mt-8">Key Findings &amp; Iterations</h3>
          <BulletList items={[
            { label: "Finding 1:", desc: "[ Placeholder — e.g. Account-type colour tags (CFD/JISA/SB/GIA) reduced confusion about which account a position belonged to ]" },
            { label: "Finding 2:", desc: "[ Placeholder — e.g. Risk warning position at top of onboarding slides was accepted without negative UX impact ]" },
            { label: "Finding 3:", desc: "[ Placeholder — e.g. Dark mode portfolio was preferred 2:1 over light for extended sessions ]" },
            { label: "Finding 4:", desc: "[ Placeholder — e.g. Skeleton loading state tested significantly better than a spinner for maintaining trust ]" },
          ]} />

          <Asset label="Before / after — portfolio and onboarding iterations" caption="Iterations" ratio="16/7" bg="#f4f4f4" />
        </section> */}

        {/* ── RESULT ──────────────────────────────────────────────── */}
       

        {/* ── HAND-OFF ────────────────────────────────────────────── */}
        <section className="mb-20">
          <SectionLabel>Present</SectionLabel>
          <SectionHeading>Hand-Off &amp; Final Design</SectionHeading>

          {/* <h3 className="text-base font-semibold text-gray-800 mb-3">Design System</h3>
          <BodyText>
            Full component library covering dark and light mode states, all account-type tag variants, P&L colouring tokens, skeleton templates, and onboarding carousel components — handed off with annotated Figma specs.
          </BodyText> */}
          {/* <Asset label="Design system — component library (dark + light)" caption="Design System" ratio="16/8" bg="#f4f4f4" />

          <h3 className="text-base font-semibold text-gray-800 mb-3 mt-8">Developer Specifications</h3>
          <AssetGrid
            caption="Hand Off"
            items={[
              { label: "iOS specs — portfolio row measurements", bg: "#f9f9f9", ratio: "9/16" },
              { label: "iOS specs — onboarding carousel measurements", bg: "#f4f4f4", ratio: "9/16" },
              { label: "Android specs — portfolio row", bg: "#f9f9f9", ratio: "9/16" },
              { label: "Android specs — detail screen", bg: "#f4f4f4", ratio: "9/16" },
            ]}
            cols={4}
          /> */}

          <h3 className="text-base font-semibold text-gray-800 mb-3 mt-8">Final Screens</h3>
          <p>In progress...</p>
          {/* <AssetGrid
            caption="Final Hi-Fi — all key screens"
            items={[
              { label: "Splash", bg: "#E8472A", ratio: "9/16" },
              { label: "Onboarding — Trade", bg: "#3D0A1E", ratio: "9/16" },
              { label: "Onboarding — Crypto", bg: "#3D0A1E", ratio: "9/16" },
              { label: "Onboarding — Invest", bg: "#3D0A1E", ratio: "9/16" },
              { label: "Portfolio — Light", bg: "#f9f9f9", ratio: "9/16" },
              { label: "Portfolio — Dark", bg: "#1a0a12", ratio: "9/16" },
              { label: "Asset Detail", bg: "#ffffff", ratio: "9/16" },
              { label: "Error State", bg: "#fafafa", ratio: "9/16" },
            ]}
            cols={4}
          /> */}
        </section>

      </div>
    </div>
  );
}
