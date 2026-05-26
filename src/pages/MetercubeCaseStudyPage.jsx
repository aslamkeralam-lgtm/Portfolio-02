import { motion } from "motion/react";
import { Compass, Home, ShieldCheck } from "lucide-react";
import { CaseStudyHero } from "../components/casestudy/CaseStudyHero";
import { StickyNav } from "../components/casestudy/StickyNav";
import { ProblemCard } from "../components/casestudy/ProblemCard";
import { InsightCard } from "../components/casestudy/InsightCard";
import { ScreenshotGrid } from "../components/casestudy/ScreenshotGrid";
import { BeforeAfterIA } from "../components/casestudy/BeforeAfterIA";
import { MetricCard } from "../components/casestudy/MetricCard";
import { DesignSystemSnippet } from "../components/casestudy/DesignSystemSnippet";
import { LearningCard } from "../components/casestudy/LearningCard";

export function MetercubeCaseStudyPage() {
  const problemsData = [
    {
      tag: "Navigation",
      title: "Scattered Menu Structure",
      description: "Users struggled to find products due to unclear categorization and deeply nested menus.",
    },
    {
      tag: "Hierarchy",
      title: "No Visual Priority",
      description: "All products appeared equally important, making it hard to discover premium interior packages.",
    },
    {
      tag: "Discoverability",
      title: "Hidden Curated Collections",
      description: "Handpicked interior packages were buried, reducing cross-selling opportunities.",
    },
    {
      tag: "Checkout",
      title: "High Abandonment Rate",
      description: "4-step checkout process with unclear trust signals caused 68% cart abandonment.",
    },
  ];

  const insightsData = [
    {
      title: "Homeowners prioritize editorial content",
      description: "80% of users scrolled through lifestyle imagery before exploring products, indicating strong editorial influence.",
      source: "User research interviews (n=12)",
    },
    {
      title: "Premium positioning requires trust",
      description: "87% wanted to see craftsman stories and material sourcing before purchase decisions.",
      source: "Competitive analysis & surveys",
    },
    {
      title: "Mobile-first shopping behavior",
      description: "64% of traffic came from mobile, but only 32% completed purchases on mobile vs 56% on desktop.",
      source: "Analytics review (3-month data)",
    },
    {
      title: "Curated packages increase AOV",
      description: "Users shown bundled packages had 2.3x higher average order value than individual product browsers.",
      source: "A/B testing results",
    },
  ];

  const screenshotsData = [
    {
      image: "https://via.placeholder.com/600x400?text=Homepage+Redesign",
      title: "Homepage Redesign",
      badge: "Editorial Focus",
    },
    {
      image: "https://via.placeholder.com/600x400?text=Interior+Packages",
      title: "Interior Packages",
      badge: "Curated Collection",
    },
    {
      image: "https://via.placeholder.com/600x400?text=Product+Detail",
      title: "Product Detail Page",
      badge: "Trust Signals",
    },
    {
      image: "https://via.placeholder.com/600x400?text=Checkout+Flow",
      title: "Checkout Experience",
      badge: "Simplified Flow",
    },
  ];

  const learningsData = [
    {
      title: "Editorial design builds premium perception",
      description: "Investing in high-quality lifestyle imagery and storytelling elevated brand perception from 5.2 to 7.8/10 in post-launch surveys.",
    },
    {
      title: "Constraints drive innovation",
      description: "Working within brand guidelines forced more intentional design decisions, resulting in a cohesive system that was 40% faster to maintain.",
    },
    {
      title: "Trust requires transparency",
      description: "Adding craftsman bios and sourcing details reduced support inquiries by 45% and increased purchase confidence metrics.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <StickyNav />

      {/* Hero Section */}
      <CaseStudyHero />

      {/* Main Content */}
      <div className="lg:flex lg:pl-56">
        <div className="flex-1 max-w-[900px] mx-auto px-6 md:px-8">
          {/* Overview Section */}
          <motion.section
            id="overview"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-20 md:py-28"
          >
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#1A1714] mb-6">The Challenge</h2>
              <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mb-8">
                Metercube, a premium e-commerce platform for designer furniture, was losing 68% of checkout initiations. The existing design lacked clear navigation, failed to communicate premium positioning, and had insufficient trust signals for high-value purchases.
              </p>
            </div>

            {/* Timeline */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { week: "Week 1-2", label: "Discovery & Research" },
                { week: "Week 3-4", label: "Design & Iteration" },
                { week: "Week 5-8", label: "Implementation & Testing" },
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-2 border-[#C8A96E] rounded-2xl p-6 text-center"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-[#C8A96E] font-semibold mb-2">{phase.week}</p>
                  <p className="text-slate-700">{phase.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Problem Statement */}
          <motion.section
            id="problem"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-20 md:py-28"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1714] mb-12">Problem Statement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problemsData.map((problem, index) => (
                <ProblemCard key={index} {...problem} index={index} />
              ))}
            </div>
          </motion.section>

          {/* Research & Insights */}
          <motion.section
            id="research"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-20 md:py-28"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1714] mb-12">Research & Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insightsData.map((insight, index) => (
                <InsightCard key={index} {...insight} index={index} />
              ))}
            </div>
          </motion.section>

          {/* Design Goals */}
          <motion.section
            id="goals"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-20 md:py-28"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1714] mb-12">Design Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="text-center"
              >
                <div className="bg-[#FAF8F5] rounded-2xl p-8 mb-4 inline-flex">
                  <Compass className="w-8 h-8 text-[#C8A96E]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1714] mb-3">Clear Navigation</h3>
                <p className="text-slate-600">Simplify product discovery through logical information architecture and intuitive categorization.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-center"
              >
                <div className="bg-[#FAF8F5] rounded-2xl p-8 mb-4 inline-flex">
                  <Home className="w-8 h-8 text-[#C8A96E]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1714] mb-3">Premium Experience</h3>
                <p className="text-slate-600">Establish brand authority through editorial design, lifestyle imagery, and curated collections.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.16 }}
                className="text-center"
              >
                <div className="bg-[#FAF8F5] rounded-2xl p-8 mb-4 inline-flex">
                  <ShieldCheck className="w-8 h-8 text-[#C8A96E]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1714] mb-3">Build Trust</h3>
                <p className="text-slate-600">Reduce checkout abandonment with clear trust signals, transparent sourcing, and craftsman stories.</p>
              </motion.div>
            </div>
          </motion.section>

          {/* Information Architecture */}
          <motion.section
            id="architecture"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-20 md:py-28"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1714] mb-12">Information Architecture</h2>
            <BeforeAfterIA />
          </motion.section>

          {/* Final Screens */}
          <motion.section
            id="final"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-20 md:py-28"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1714] mb-12">Final Designs</h2>
            <ScreenshotGrid screenshots={screenshotsData} />
          </motion.section>

          {/* Design System */}
          <motion.section
            id="system"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-20 md:py-28"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#1A1714] mb-12">Design System</h2>
            <DesignSystemSnippet />
          </motion.section>

          {/* Outcomes */}
          <motion.section
            id="outcomes"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-20 md:py-28 bg-[#1A1714] rounded-3xl px-8 md:px-12 text-[#FAF8F5]"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-12">Results & Impact</h2>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              <MetricCard number={68} label="Reduction in cart abandonment" index={0} />
              <MetricCard number={45} label="Decrease in support inquiries" index={1} />
              <MetricCard number={230} label="Increase in average order value" index={2} />
            </div>

            {/* Learnings */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">Key Learnings</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {learningsData.map((learning, index) => (
                  <LearningCard key={index} {...learning} index={index} />
                ))}
              </div>
            </div>
          </motion.section>

          {/* Footer Spacing */}
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
}
