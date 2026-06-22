import { motion } from "motion/react";
import { Compass, BarChart3, Trophy, Layers, Sparkles } from "lucide-react";
import { StickyNav } from "../components/casestudy/StickyNav";

const problemsData = [
  {
    title: "Unclear investment signals",
    description:
      "Users struggled to understand portfolio performance, risk, and next steps because insights were buried across screens.",
  },
  {
    title: "Fragmented tax visibility",
    description:
      "Tax categories, charges, and claimable returns were scattered, making financial planning feel confusing and unsafe.",
  },
  {
    title: "Slow onboarding flow",
    description:
      "High drop-off in the first week occurred when users had to manually connect accounts and verify goals in a unclear journey.",
  },
  {
    title: "Low trust in recommendations",
    description:
      "Users wanted smarter, context-aware guidance, not generic prompts or overcrowded dashboards.",
  },
];

const insightsData = [
  {
    title: "People want simple confidence",
    description:
      "70% of research participants said they would use the app more if they could immediately see what to do next.",
  },
  {
    title: "Visual clarity reduces anxiety",
    description:
      "Participants preferred fewer data points presented with clear labels, not more metrics on one screen.",
  },
  {
    title: "Personal goals drive retention",
    description:
      "Users were more likely to return when progress and milestone reminders were tied directly to their financial goals.",
  },
  {
    title: "Mobile-first habits matter",
    description:
      "Over 80% of target users expected the entire experience to feel native on mobile, including onboarding and insights.",
  },
];

const wireframes = [
  {
    title: "Discover",
    description: "Portfolio overview with growth, allocations, and action prompts.",
  },
  {
    title: "Plan",
    description: "Goal-based investing with tax-aware recommendations and progress tracking.",
  },
  {
    title: "Review",
    description: "Clear performance report with simple next-step guidance.",
  },
];

const resultMetrics = [
  { label: "Onboarding completion", value: "+28%" },
  { label: "Weekly active users", value: "+18%" },
  { label: "Trust score", value: "+14 pts" },
];

export function IGappCaseStudyPage() {
  return (
    <div className="bg-white min-h-screen text-[#1A1714]">
      <StickyNav />

      <section id="hero" className="bg-[#F8FBFF] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid gap-14 xl:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#5B7CB4] font-semibold">
                IGapp case study
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Designing a mobile-first investment experience for creators who want smarter growth.
              </h1>
              <p className="text-lg md:text-xl text-slate-700 max-w-3xl leading-relaxed">
                A product-led redesign of IGapp that made portfolio insights, tax clarity, and investment actions feel simple, trusted, and beautifully tailored for mobile-first users.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Role", value: "Product Designer" },
                  { label: "Timeline", value: "6 weeks" },
                  { label: "Platform", value: "iOS & Android" },
                  { label: "Focus", value: "Growth & trust" },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl bg-white border border-slate-200 p-5">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500 mb-2">
                      {item.label}
                    </p>
                    <p className="font-semibold text-sm text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 -top-8 h-40 w-40 rounded-full bg-gradient-to-br from-[#DDE9FF] to-transparent" />
              <div className="absolute -right-12 top-20 h-32 w-32 rounded-full bg-[#E8F0FF] opacity-80" />
              <div className="relative mx-auto max-w-md rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_40px_80px_rgba(15,23,42,0.08)]">
                <div className="rounded-[1.75rem] border border-slate-200 bg-[#F8FAFF] p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-500">IGapp preview</p>
                      <p className="text-sm font-semibold text-slate-900">Portfolio summary</p>
                    </div>
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#5B7CB4]" />
                  </div>

                  <div className="rounded-3xl bg-white p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#94A7C8]">Balance</p>
                        <p className="text-3xl font-semibold">$38,500</p>
                      </div>
                      <p className="text-sm text-emerald-600">+12.4%</p>
                    </div>
                    <div className="grid gap-4">
                      <div className="rounded-3xl bg-[#F1F5FF] p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-[#94A7C8]">Goal</p>
                        <p className="text-sm font-semibold text-slate-900">Creator growth fund</p>
                      </div>
                      <div className="rounded-3xl bg-[#F1F5FF] p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-[#94A7C8]">Next step</p>
                        <p className="text-sm font-semibold text-slate-900">Review tax-smart allocation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:flex lg:pl-56">
        <div className="flex-1 max-w-[900px] mx-auto px-6 md:px-8">
          <motion.section
            id="overview"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-20 md:py-28"
          >
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
                IGapp needed an investment experience that felt less like a banking dashboard and more like a financial coach. The redesign focused on clear goals, mobile-first trust, and a single place for portfolio actions.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { label: "Discovery", value: "Interviews, analytics, audit" },
                { label: "Design", value: "Mobile-first screens & flows" },
                { label: "Validation", value: "Prototype testing & refinements" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-4">{item.label}</p>
                  <p className="text-lg font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="problem"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-20 md:py-28"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-12">Problem statement</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {problemsData.map((problem, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-200 bg-[#FAFCFF] p-8 shadow-sm"
                >
                  <p className="text-lg font-semibold mb-3">{problem.title}</p>
                  <p className="text-slate-700 leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="research"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-20 md:py-28"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-12">Research insights</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {insightsData.map((insight, index) => (
                <div key={index} className="rounded-3xl border border-slate-200 bg-white p-8">
                  <p className="text-lg font-semibold mb-4">{insight.title}</p>
                  <p className="text-slate-700 leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="goals"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-20 md:py-28"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-12">Design goals</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Compass,
                  title: "Guide decisions",
                  description: "Surface contextual next steps and portfolio recommendations clearly.",
                },
                {
                  icon: BarChart3,
                  title: "Make data approachable",
                  description: "Turn investment metrics into meaningful, mobile-friendly insight cards.",
                },
                {
                  icon: Layers,
                  title: "Support trust",
                  description: "Build transparency into every interaction with clear labels and breakdowns.",
                },
              ].map((goal, index) => (
                <div key={index} className="rounded-3xl border border-slate-200 bg-[#F8FAFF] p-8 text-center">
                  <goal.icon className="mx-auto mb-6 h-10 w-10 text-[#5B7CB4]" />
                  <h3 className="text-xl font-semibold mb-3">{goal.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{goal.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="architecture"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-20 md:py-28"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-12">Information architecture</h2>
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-slate-700 leading-relaxed mb-8">
                We mapped the core mobile journey from onboarding to action, reducing decision points and grouping tax, goals, and portfolio signals in one place.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {wireframes.map((item, index) => (
                  <div key={index} className="rounded-3xl bg-[#F8FAFF] p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#5B7CB4] mb-3">{item.title}</p>
                    <p className="text-slate-700 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            id="final"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-20 md:py-28"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-12">Final screens</h2>
            <div className="grid gap-6 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-[2rem] border border-slate-200 bg-[#F8FAFF] p-6 shadow-sm"
                >
                  <div className="mb-6 h-[420px] rounded-[1.75rem] bg-gradient-to-b from-[#EAF1FF] via-[#F8FBFF] to-white shadow-inner" />
                  <p className="text-lg font-semibold mb-2">Screen {index + 1}</p>
                  <p className="text-slate-600 leading-relaxed">
                    High-fidelity mobile screens show the refreshed investment flow, goal tracking, and tax-aware recommendations.
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="system"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-20 md:py-28"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-12">Design system</h2>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-3xl border border-slate-200 bg-[#FFFFFF] p-8">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Primary", color: "bg-[#5B7CB4]" },
                    { label: "Accent", color: "bg-[#E4B86F]" },
                    { label: "Neutral", color: "bg-[#F1F5FF]" },
                  ].map((swatch) => (
                    <div key={swatch.label} className="space-y-3 rounded-3xl p-4 border border-slate-200">
                      <div className={`h-16 rounded-3xl ${swatch.color}`} />
                      <p className="text-sm font-semibold text-slate-900">{swatch.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-[#F8FAFF] p-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-3">Typography</p>
                    <p className="text-3xl font-serif font-semibold leading-tight">Headline / Display</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-3">Heading</p>
                    <p className="text-2xl font-semibold">Section headings and cards</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-3">Body</p>
                    <p className="text-base leading-relaxed text-slate-700">Readable paragraphs, labels, and guidance copy.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="outcomes"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-20 md:py-28"
          >
            <div className="rounded-[2rem] border border-slate-200 bg-[#F8FBFF] p-10">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Outcomes</h2>
                <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
                  The IGapp redesign turned complex financial data into clear actions, while increasing user confidence in investment decisions and tax planning.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {resultMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">{metric.label}</p>
                    <p className="text-3xl font-semibold text-slate-900">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-20 md:py-28"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
              <Sparkles className="mx-auto mb-6 h-10 w-10 text-[#5B7CB4]" />
              <h2 className="text-3xl md:text-4xl font-serif mb-4">A cleaner investment experience that feels easy and trusted.</h2>
              <p className="text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
                IGapp now delivers a mobile-first experience that helps creators grow their portfolio with confidence and clarity.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
