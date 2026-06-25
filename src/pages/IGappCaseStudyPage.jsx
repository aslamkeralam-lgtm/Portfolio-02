import React from "react";

// ─── Placeholder image component ───────────────────────────────────────────
const PlaceholderImage = ({ label, caption, aspectRatio = "16/9", bg = "#e8edf2" }) => (
  <figure className="my-8">
    <div
      className="w-full rounded-lg flex items-center justify-center text-sm text-gray-400 font-medium"
      style={{ background: bg, aspectRatio }}
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

// ─── Section label ──────────────────────────────────────────────────────────
const SectionLabel = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 border border-gray-300 inline-block px-2 py-0.5 rounded-sm">
    {children}
  </p>
);

// ─── Blockquote / pull quote ─────────────────────────────────────────────────
const PullQuote = ({ children }) => (
  <blockquote className="border-l-4 border-orange-500 pl-5 my-8 italic text-2xl leading-snug text-gray-800 font-light">
    {children}
  </blockquote>
);

// ─── Project Timeline ────────────────────────────────────────────────────────
const timelineItems = [
  { month: 1, label: "Discovery Phase", icon: "🔍" },
  { month: 2, label: "1st Design Ideation", icon: "🎨" },
  { month: 2, label: "MVP Release in UK", icon: "🚀" },
  { month: 3, label: "2nd Phase Design Ideation", icon: "✏️" },
  { month: 3, label: "Final Hi-Fi Design", icon: "🛠️" },
  { month: 4, label: "Design for other regions", icon: "⚙️" },
  { month: 4, label: "Hand-off", icon: "📦" },
];

const ProjectTimeline = () => (
  <div className="w-full overflow-x-auto my-8">
    <div className="min-w-[600px]">
      {/* Month headers */}
      <div className="grid grid-cols-4 border-b border-dashed border-gray-300 pb-2 mb-4">
        {["Month 1", "Month 2", "Month 3", "Month 4"].map((m) => (
          <div key={m} className="text-xs font-semibold uppercase tracking-widest text-gray-400 text-center">
            {m}
          </div>
        ))}
      </div>
      {/* Items */}
      <div className="relative space-y-3">
        {timelineItems.map((item, i) => {
          const colStart = item.month;
          const colSpanMap = { 1: "col-start-1", 2: "col-start-2", 3: "col-start-3", 4: "col-start-4" };
          return (
            <div key={i} className="grid grid-cols-4">
              <div className={`${colSpanMap[colStart]} flex items-center gap-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-md px-3 py-1.5 shadow-sm w-fit`}>
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

// ─── Rebate Table ────────────────────────────────────────────────────────────
const rebateRows = [
  { tier: 1, trade: 10, index: 1, fx: 1, bonds: 5, gold: 5, energies: 10, metals: 20, crypto: 20, softComm: 20 },
  { tier: 2, trade: 25, index: 2, fx: 2, bonds: 7, gold: 7, energies: 14, metals: 40, crypto: 40, softComm: 40 },
  { tier: 3, trade: 50, index: 2, fx: 5, bonds: 10, gold: 10, energies: 18, metals: 60, crypto: 60, softComm: 60 },
  { tier: 4, trade: 100, index: 5, fx: 7, bonds: 12, gold: 12, energies: 22, metals: 70, crypto: 70, softComm: 70 },
  { tier: 5, trade: 200, index: 7, fx: 10, bonds: 15, gold: 15, energies: 25, metals: 75, crypto: 75, softComm: 75 },
];

const RebateTable = () => (
  <div className="my-8 rounded-xl border border-gray-200 overflow-hidden shadow-sm">
    <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
      <p className="text-center text-sm font-medium text-blue-600 italic">
        Volume Based Rebates for different instruments
      </p>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-center">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            {["Tier", "Trade Above (Notional £m)", "Index", "FX", "Bonds", "Gold", "Energies", "Metals", "Crypto", "Soft Commodities"].map((h) => (
              <th key={h} className="px-3 py-2.5 font-semibold text-gray-600 text-xs">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rebateRows.map((row, i) => (
            <tr key={i} className={`border-b border-gray-100 ${i % 2 === 1 ? "bg-gray-50/50" : "bg-white"}`}>
              <td className="px-3 py-2.5 font-medium text-gray-700">{row.tier}</td>
              <td className="px-3 py-2.5 text-gray-600">{row.trade}</td>
              <td className="px-3 py-2.5 text-gray-600">{row.index}</td>
              <td className="px-3 py-2.5 text-gray-600">{row.fx}</td>
              <td className="px-3 py-2.5 text-gray-600">{row.bonds}</td>
              <td className="px-3 py-2.5 text-gray-600">{row.gold}</td>
              <td className="px-3 py-2.5 text-gray-600">{row.energies}</td>
              <td className="px-3 py-2.5 text-gray-600">{row.metals}</td>
              <td className="px-3 py-2.5 text-gray-600">{row.crypto}</td>
              <td className="px-3 py-2.5 text-gray-600">{row.softComm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="text-center text-xs text-gray-400 py-2 border-t border-gray-100">
      Payment amounts are £/m traded
    </p>
  </div>
);

// ─── UI Pattern bullets ──────────────────────────────────────────────────────
const uiPatterns = [
  { label: "Pop-ups", desc: "Great for ", bold: "grabbing attention", rest: ", but risked feeling ", bold2: "interruptive", rest2: "." },
  { label: "Modals", desc: "Allowed for ", bold: "guided walkthroughs", rest: ", but didn't suit ", bold2: "frequent interactions", rest2: "." },
  { label: "Full dashboards", desc: "Provided ", bold: "depth", rest: " but lacked ", bold2: "daily visibility", rest2: "." },
  { label: "Inline cards", desc: "Lightweight and persistent, offering ", bold: "at-a-glance updates", rest: " without disrupting flow.", bold2: "", rest2: "" },
  { label: "Chart View", desc: "Explored as a ", bold: "visual breakdown", rest: " of instrument-level contributions. While ", bold2: "engaging", rest2: ", it worked better as a secondary element in the detailed view rather than a primary layout." },
];

// ─── Design Findings bullets ─────────────────────────────────────────────────
const findings = [
  { label: "Current Tier Display:", desc: "Shows the user's current rebate tier (e.g., Tier 1, Tier 2), giving a sense of status and progression." },
  { label: "Next Tier Goal:", desc: "Clearly indicates how much more trading volume is needed to reach the next tier, adding a gamified goal-oriented element." },
  { label: "Real-Time Progress Bar:", desc: "A dynamic visual tracker updates instantly as users trade, offering immediate feedback and enhancing motivation." },
  { label: "Rebate Amount Earned:", desc: 'Displays the total cashback earned so far (in currency or percentage), reinforcing the value of the program and driving continued engagement.' },
  { label: "User Impact:", desc: 'Users described this combination as giving them "a sense of control and clarity," turning the rebate from a passive benefit into an active motivator.' },
  { label: "Rebate Calculation:", desc: 'Users described this combination as giving them "a sense of control and clarity," turning the rebate into an active motivator.' },
];

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function IGappCaseStudyPage() {
  return (
    <div className="min-h-screen bg-[#fff] font-sans text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* ── Header / Logo ─────────────────────────────────────────── */}
        <header className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-md bg-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm leading-none">IG</span>
              </div>
              <span className="font-bold text-lg tracking-tight">IG Group</span>
            </div>
            <button
              type="button"
              onClick={() => {
                window.history.pushState(null, "", "/");
                window.dispatchEvent(new PopStateEvent("popstate"));
              }}
              className="inline-flex w-max items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              ← 
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-950 mb-10">
            Introducing a Volume-Based Rebate Program at IG to Boost Adoption of Underused Instruments Across UK, APAC & EM (Europe)
          </h1>

          {/* Meta grid */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
            <div>
              <p className="text-xs text-gray-400 mb-1.5">Discipline</p>
              <ul className="space-y-0.5 text-sm text-gray-700">
                <li>Material Design Guidelines</li>
                <li>Human Interface Guidelines</li>
                <li>User Experience Design</li>
                <li>Visual Design</li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1.5">Team</p>
              <ul className="space-y-0.5 text-sm text-gray-700">
                <li>Mohammed Aslam K</li>
                <li>Naveen Kumar</li>
                <li>Avinash Thakur</li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1.5">Timeline</p>
              <p className="text-sm text-gray-700">Sep 2024– Dec 2024</p>
            </div>
          </div>
        </header>

        {/* ── Hero image ────────────────────────────────────────────── */}
        <PlaceholderImage
          label="App screenshot — hand holding phone"
          caption="INTRO IMAGE"
          aspectRatio="16/9"
          bg="linear-gradient(135deg,#dbeafe 0%,#eff6ff 100%)"
        />

        {/* ── Introduction ──────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Introduction</SectionLabel>
          <p className="text-xl leading-relaxed text-gray-800">
            <strong>IG Group is the No. 1 CFD provider</strong>, offering instruments like indices, FX, gold, and commodities. While indices and FX dominated trading activity,{" "}
            <strong className="text-gray-900">internal data revealed low engagement across other instruments. This case study outlines how we addressed that gap through</strong>{" "}
            <strong>an incentive-driven design solution.</strong>
          </p>
        </section>

        {/* ── Project Timeline ──────────────────────────────────────── */}
        <section className="mb-16">
          <ProjectTimeline />
          <figcaption className="flex gap-3 text-xs text-gray-400 uppercase tracking-widest mt-1">
            <span>Image</span><span>1.1 Project Timeline</span>
          </figcaption>
        </section>

        {/* ── The Design Goal ───────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>The Design Goal</SectionLabel>
          <p className="text-xl leading-relaxed text-gray-500 mb-2">
            This lack of diversification in instrument usage posed a strategic concern. From a risk and revenue standpoint, IG wanted to encourage broader adoption across its product range.{" "}
            <strong className="text-gray-900">
              The goal was to increase platform engagement, promote the discovery of alternative instruments, and reduce the company's reliance on just a few high-volume products.
            </strong>
          </p>
        </section>

        {/* ── Research / Discovery ──────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Research</SectionLabel>
          <h2 className="text-2xl font-bold mb-5">Discovery Phase</h2>

          <p className="text-base leading-relaxed text-gray-700 mb-4">
            The initial insight came from <strong>product and analytics data</strong>, which showed that{" "}
            <strong>most trading activity centered around Indices and FX</strong>. In contrast,{" "}
            <strong>crypto, gold, other metals, energies and commodities saw low engagement</strong>, despite being core offerings.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            To validate this, our <strong>UX research team interviewed professional users and talked to Premium Account Executives (PAE) and Premium Client Managers (PCM)</strong>. We discovered that{" "}
            <strong>trading behavior was driven by perceived popularity</strong>—users simply followed what others were trading. There was also a{" "}
            <strong>lack of awareness about the full range of instruments</strong> and <strong>no strong incentive to explore beyond the usual choices</strong>.
          </p>

          <PlaceholderImage
            label="Sticky notes — Interview questions"
            caption="2.1 Interview Questions"
            aspectRatio="4/3"
            bg="#f0f0ec"
          />
        </section>

        {/* ── Existing program / pull quote ────────────────────────── */}
        <section className="mb-16">
          <p className="text-base leading-relaxed text-gray-700 mb-6">
            While IG had a <strong>volume-based rebate program</strong> in place to promote diversification, it was{" "}
            <strong>poorly surfaced and misunderstood</strong>. It existed <strong>only on the public website</strong>, disconnected from the core trading experience, which <strong>limited its reach and impact</strong>.
          </p>

          <PullQuote>
            Most users stuck to Indices and FX. Research showed this was driven by popularity bias, perceived lower risk, and limited awareness of existing incentives
          </PullQuote>
        </section>

        {/* ── Business Initiative ───────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Business Initiative and Product Goal</SectionLabel>
          <h2 className="text-2xl font-bold mb-5">A Strategic Push to Diversify Trading Behavior</h2>

          <p className="text-base leading-relaxed text-gray-700 mb-6">
            To boost engagement with underused instruments, <strong>business stakeholders proposed adding IG's existing rebate model directly in Mobile and Web App for better visibility and transparency</strong>. The plan was to offer tiered cashback—higher rewards for trading crypto, indices, and commodities, and lower for FX and Indices. Our design goal was clear: make the program highly visible, transparent, and easy to track across both web and mobile platforms, helping users optimize their trading in real time.
          </p>

          <RebateTable />
        </section>

        {/* ── Design Process ────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Design Process</SectionLabel>
          <h2 className="text-2xl font-bold mb-5">How do we achieve our goals?</h2>

          <p className="text-base leading-relaxed text-gray-700 mb-4">
            We began by identifying <strong>key touchpoints</strong> in the user journey where the rebate program could surface <strong>contextually</strong>—places where it would feel <strong>helpful, not intrusive</strong>. Our exploration included the <strong>homepage, portfolio view</strong>, and <strong>settings page</strong>, aiming to meet users <strong>where they already manage their trading</strong>.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-5">
            Next, we tested multiple <strong>UI patterns</strong> to determine the most effective way to deliver the rebate experience:
          </p>

          <ul className="space-y-3 mb-8 pl-1">
            {uiPatterns.map((p, i) => (
              <li key={i} className="flex gap-2 text-base text-gray-700">
                <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5" />
                <span>
                  <strong>{p.label}</strong> – {p.desc}
                  {p.bold && <strong>{p.bold}</strong>}
                  {p.rest}
                  {p.bold2 && <strong>{p.bold2}</strong>}
                  {p.rest2}
                </span>
              </li>
            ))}
          </ul>

          <PlaceholderImage
            label="Chat / UI exploration grid"
            caption="Chat Exploration"
            aspectRatio="4/3"
            bg="#eef0f3"
          />
        </section>

        {/* ── Design Findings / Tier Status ────────────────────────── */}
        <section className="mb-16">
          <h3 className="text-lg font-semibold mb-2">Tier Status, Progress, and Rebate Visibility</h3>

          <ul className="space-y-3 mb-8 pl-1">
            {findings.map((f, i) => (
              <li key={i} className="flex gap-2 text-base text-gray-700">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5" />
                <span><strong>{f.label}</strong> {f.desc}</span>
              </li>
            ))}
          </ul>

          {/* Annotated wireframe screenshots */}
          <PlaceholderImage label="Annotated wireframe — Card variant A" caption="Wire" aspectRatio="16/7" bg="#eef1f5" />
          <PlaceholderImage label="Annotated wireframe — Card variant B" caption="Wire" aspectRatio="16/7" bg="#eef1f5" />
          <PlaceholderImage label="Annotated wireframe — Card variant C" caption="Wire" aspectRatio="16/7" bg="#eef1f5" />
          <PlaceholderImage label="Annotated wireframe — Tier 2 reached" caption="Wire" aspectRatio="16/7" bg="#eef1f5" />

          {/* Detailed breakdown screen */}
          <PlaceholderImage
            label="Dashboard — Cash Rebate Breakdown"
            caption="Dashboard"
            aspectRatio="9/16"
            bg="linear-gradient(180deg,#f5f7fa 0%,#e8ecf1 100%)"
          />

          <p className="text-base leading-relaxed text-gray-700 mt-6">
            <strong>Web Design</strong><br />
            We added the rebate scheme button to the navigation bar for better visibility, leveraging the additional real estate available on web.
          </p>

          <PlaceholderImage label="Web navigation — rebate button" caption="Web Design" aspectRatio="16/6" bg="#eef1f5" />
        </section>

        {/* ── Launch & Iteration ────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-5">Launch &amp; Iteration</h2>

          <p className="text-base leading-relaxed text-gray-700 mb-4">
            We launched the MVP to professional users in the UK to test interest. Within weeks,{" "}
            <strong>65% engaged</strong> with the feature—confirming strong user interest. User interviews showed the card helped{" "}
            <strong>new traders understand how IG rewards volume</strong>, while some high-volume traders found it less relevant.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-8">
            To address this, we added a <strong>collapsible version on mobile</strong>, giving users control without sacrificing visibility.
          </p>

          {/* Side-by-side collapsed / expanded mockup */}
          <div className="rounded-xl bg-gray-100 p-6 mb-2">
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-lg bg-white border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-medium"
                style={{ aspectRatio: "9/16" }}
              >
                [ Collapsed card ]
              </div>
              <div
                className="rounded-lg bg-white border border-gray-200 flex items-center justify-center text-xs text-gray-400 font-medium"
                style={{ aspectRatio: "9/16" }}
              >
                [ Expanded card ]
              </div>
            </div>
            <p className="text-center mt-4 text-xs italic text-blue-500">
              Made the card collapsible based on user feedback to reduce visual overload.
            </p>
          </div>
          <figcaption className="flex gap-3 text-xs text-gray-400 uppercase tracking-widest mb-10">
            <span>Image</span><span>Settings Page</span>
          </figcaption>
        </section>

        {/* ── Business Results & Expansion ─────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-5">Business Results &amp; Expansion</h2>

          <p className="text-base leading-relaxed text-gray-700 mb-4">
            The feature led to a <strong>notable increase in trading volume across underused instruments</strong>, improving platform balance and reducing reliance on CFDs and shares.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-8">
            Following its success, we <strong>localized and launched</strong> the feature in the{" "}
            <strong>Middle East</strong> (for all users) and are now rolling it out across{" "}
            <strong>APAC markets</strong> with region-specific tweaks.
          </p>

          {/* UAE version card */}
          <div className="rounded-xl bg-gray-100 p-6 mb-2">
            <p className="text-xs text-gray-400 uppercase tracking-widest text-center mb-4">UAE Version</p>
            <div className="max-w-xs mx-auto bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Card header */}
              <div className="flex items-center justify-between px-4 pt-4 pb-2">
                <div>
                  <p className="text-sm font-semibold text-gray-900">Cash Rebate July</p>
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 rounded-full px-2 py-0.5">10 days to go</span>
              </div>
              {/* Tabs */}
              <div className="flex border-b border-gray-200 px-4">
                <button className="text-xs font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 mr-4">Main rebate</button>
                <button className="text-xs text-gray-400 pb-2">Shares rebate</button>
              </div>
              {/* Body */}
              <div className="px-4 py-3 space-y-1">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-gray-400">Notional Amount Traded</p>
                    <p className="text-base font-bold text-gray-900">$88,456,997</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Cash Rebate (estimated)</p>
                    <p className="text-base font-bold text-gray-900">$8,456,997 <span className="text-gray-400 font-normal text-xs">ⓘ</span></p>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Tier 3</span>
                  <span>Target: $100M</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: "85%" }} />
                </div>
                <p className="text-xs text-gray-400 pt-1">Trade an additional $11,554,003 notional to access tier 4 rebates.</p>
              </div>
              {/* CTA */}
              <div className="border-t border-gray-100 px-4 py-2 flex items-center justify-between">
                <span className="text-xs text-gray-700">View our cash rebate scheme</span>
                <span className="text-gray-400 text-xs">›</span>
              </div>
            </div>
            <p className="text-center mt-4 text-xs italic text-blue-500">
              As UAE Rebate program is different for Shares and other instruments so we added a tab switch to see the details.
            </p>
          </div>
          <figcaption className="flex gap-3 text-xs text-gray-400 uppercase tracking-widest mb-10">
            <span>Image</span><span>UAE Version</span>
          </figcaption>
        </section>

        {/* ── Result callout ────────────────────────────────────────── */}
        <section className="mb-16">
          <SectionLabel>Result</SectionLabel>
          <p className="text-xl leading-relaxed text-gray-500">
            We turned a hidden rebate into a visible, user-first feature.{" "}
            <strong className="text-gray-900">
              In just one month, 65% of users engaged, driving diversification and a major increase in trading across instruments
            </strong>{" "}
            <span className="text-gray-400">beyond FX and Indices.</span>{" "}
            <strong className="text-gray-900">
              The success led to a global rollout across APAC, the Middle East, and EU markets.
            </strong>
          </p>
        </section>

        {/* ── Hand-Off & Final Design ───────────────────────────────── */}
        <section className="mb-20">
          <SectionLabel>Present</SectionLabel>
          <h2 className="text-2xl font-bold mb-8">Hand-Off &amp; Final Design</h2>

          {/* Figma flow diagram */}
          <PlaceholderImage
            label="Figma hand-off — Android states flow diagram"
            caption="Hand Off"
            aspectRatio="16/9"
            bg="#f5f7fa"
          />

          {/* iOS / Web app card specs */}
          <PlaceholderImage
            label="Hand-off specs — iOS Card & Web App Card with measurements"
            caption="Hand Off"
            aspectRatio="16/7"
            bg="#f5f7fa"
          />

          {/* Android phase sheets */}
          <div className="mb-2">
            <p className="text-center text-sm font-bold tracking-wide text-gray-800 mb-1">Android</p>
            <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-4">Phase 1</p>
            <PlaceholderImage
              label="Hand-off Android — Phase 1 tier states (No Tier → My Tier → Tier 1–5 → Tier 5+)"
              caption={null}
              aspectRatio="16/5"
              bg="#f0f2f5"
            />
            <p className="text-center text-xs uppercase tracking-widest text-gray-400 mt-4 mb-4">Phase 2 (Addition of 'Cash Rebate')</p>
            <PlaceholderImage
              label="Hand-off Android — Phase 2 with cash rebate amounts"
              caption={null}
              aspectRatio="16/5"
              bg="#f0f2f5"
            />
          </div>
          <figcaption className="flex gap-3 text-xs text-gray-400 uppercase tracking-widest mb-10">
            <span>Image</span><span>Hand Off – Android</span>
          </figcaption>

          {/* iOS phase sheets */}
          <div className="mb-2">
            <p className="text-center text-sm font-bold tracking-wide text-blue-600 mb-1">iOS</p>
            <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-4">Phase 1</p>
            <PlaceholderImage
              label="Hand-off iOS — Phase 1 tier states"
              caption={null}
              aspectRatio="16/5"
              bg="#eef3fb"
            />
            <p className="text-center text-xs uppercase tracking-widest text-gray-400 mt-4 mb-4">Phase 2 (Addition of 'Cash Rebate')</p>
            <PlaceholderImage
              label="Hand-off iOS — Phase 2 with cash rebate amounts"
              caption={null}
              aspectRatio="16/5"
              bg="#eef3fb"
            />
          </div>
          <figcaption className="flex gap-3 text-xs text-gray-400 uppercase tracking-widest">
            <span>Image</span><span>Hand Off – iOS</span>
          </figcaption>
        </section>

      </div>
    </div>
  );
}