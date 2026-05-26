export function MetercubeCaseStudyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="lg:flex lg:gap-16">
          <aside className="hidden xl:block w-48 shrink-0">
            <nav className="sticky top-28 space-y-4 text-sm text-slate-600">
              <p className="text-xs uppercase tracking-[0.4em] text-amber-700">Sections</p>
              <a href="#hero" className="block hover:text-slate-900 transition-colors">Hero</a>
              <a href="#overview" className="block hover:text-slate-900 transition-colors">Overview</a>
              <a href="#problem" className="block hover:text-slate-900 transition-colors">Problem</a>
              <a href="#insights" className="block hover:text-slate-900 transition-colors">Research</a>
              <a href="#goals" className="block hover:text-slate-900 transition-colors">Goals</a>
              <a href="#architecture" className="block hover:text-slate-900 transition-colors">IA</a>
              <a href="#wireframes" className="block hover:text-slate-900 transition-colors">Wireframes</a>
              <a href="#final" className="block hover:text-slate-900 transition-colors">Final</a>
              <a href="#system" className="block hover:text-slate-900 transition-colors">Design system</a>
              <a href="#impact" className="block hover:text-slate-900 transition-colors">Impact</a>
              <a href="#learnings" className="block hover:text-slate-900 transition-colors">Reflection</a>
            </nav>
          </aside>

          <main className="flex-1 space-y-20">
            <section id="hero" className="space-y-8">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-700">Metercube case study</p>
                <h1 className="text-4xl lg:text-5xl font-serif font-semibold leading-tight tracking-tight text-slate-900">
                  Redesigning Metercube’s premium home décor experience for urban Indian homeowners.
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl">
                  Reframe Metercube’s online destination with clearer discovery, a stronger interior packages narrative, and a seamless path from product browsing to checkout.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-700">
                <div className="rounded-3xl border border-slate-200 p-6 bg-amber-50">
                  <p className="text-xxs uppercase tracking-[0.3em] text-amber-700 mb-4">Role</p>
                  <p className="font-semibold">UX/UI Designer</p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
                  <p className="text-xxs uppercase tracking-[0.3em] text-amber-700 mb-4">Timeline</p>
                  <p className="font-semibold">8 weeks</p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
                  <p className="text-xxs uppercase tracking-[0.3em] text-amber-700 mb-4">Platform</p>
                  <p className="font-semibold">Web + Mobile responsive</p>
                </div>
              </div>
            </section>

            <section id="overview" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-amber-700 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Project overview
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="space-y-4 text-slate-700">
                <p>
                  Metercube is a Bengaluru-based premium home furnishings and décor brand built on Shopify, serving urban Indian households with curated furniture, décor accents and interior styling packages. The brand combines digital shopping with two Experience Centres in Bengaluru, offering shoppers curated product stories alongside offline consultation.
                </p>
                <p>
                  The core challenge was creating a premium, editorial commerce experience that surfaces Metercube’s interior packages and makes discovery effortless for users tired of cluttered navigation and inconsistent product hierarchy.
                </p>
              </div>
            </section>

            <section id="problem" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-amber-700 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Problem statement
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8">
                  <p className="font-semibold text-slate-900">Cluttered navigation</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    The existing site overloaded shoppers with nine top-level categories and deep submenus, making it hard to reach product families quickly.
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8">
                  <p className="font-semibold text-slate-900">Weak visual hierarchy</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Home page content and product cards lacked a premium editorial structure, so customers could not distinguish featured collections from standard listings.
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8">
                  <p className="font-semibold text-slate-900">Interior packages are hidden</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    The interior packages service was buried in page footer content and failed to communicate the end-to-end styling value for a premium customer segment.
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8">
                  <p className="font-semibold text-slate-900">Discovery and checkout friction</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Product discovery relied on weak filtering and a cart flow that exposed too many steps at once, lowering purchase confidence.
                  </p>
                </div>
              </div>
            </section>

            <section id="insights" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-amber-700 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Research & insights
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm">
                  <p className="font-semibold text-slate-900">Category overload creates anxiety</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Users in India prefer clear, aspirational journeys; too many top-level categories made the experience feel like browsing a marketplace instead of a curated home brand.
                  </p>
                  <p className="mt-5 text-xs uppercase tracking-[0.25em] text-slate-400">Heuristic evaluation</p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm">
                  <p className="font-semibold text-slate-900">Interior packages need a separate destination</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Interest in packaged styling was high, but users could not find it from the homepage or product pages without dedicated navigation.
                  </p>
                  <p className="mt-5 text-xs uppercase tracking-[0.25em] text-slate-400">User interviews</p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm">
                  <p className="font-semibold text-slate-900">Premium customers expect editorial storytelling</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Research showed affluent Bangalore shoppers responded better to lifestyle imagery, room-led curation, and expert context rather than raw product rows.
                  </p>
                  <p className="mt-5 text-xs uppercase tracking-[0.25em] text-slate-400">Competitor audit</p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm">
                  <p className="font-semibold text-slate-900">Cart pages should reassure before payment</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Analytics showed a high micro-drop at checkout review, indicating users wanted clearer price summary and service reassurance before placing orders.
                  </p>
                  <p className="mt-5 text-xs uppercase tracking-[0.25em] text-slate-400">Analytics review</p>
                </div>
              </div>
            </section>

            <section id="goals" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-amber-700 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Design goals
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 p-8 bg-slate-50">
                  <p className="font-semibold text-slate-900">How might we simplify navigation and product discovery?</p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-8 bg-slate-50">
                  <p className="font-semibold text-slate-900">How might we elevate Interior Packages as a premium service, not just another product category?</p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-8 bg-slate-50">
                  <p className="font-semibold text-slate-900">How might we build trust and drive conversion through clearer product hierarchy and cart reassurance?</p>
                </div>
              </div>
            </section>

            <section id="architecture" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-amber-700 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Information architecture
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 p-8 bg-slate-50">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-4">Current site</p>
                  <ul className="space-y-3 text-slate-600 leading-relaxed">
                    <li>9 top-level categories with submenu depth</li>
                    <li>Homepage content and product cards competing for attention</li>
                    <li>Interior Packages hidden in footer and navigation</li>
                    <li>Discovery starts on category pages, not on curated journeys</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-slate-200 p-8 bg-white shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-4">Proposed structure</p>
                  <ul className="space-y-3 text-slate-600 leading-relaxed">
                    <li>Primary nav with curated sections: Living, Bedroom, Décor, Interior Packages</li>
                    <li>Homepage hero, room stories, and product escapes</li>
                    <li>Interior Packages landing page with service benefits, pricing clarity and inspiration</li>
                    <li>Category pages with simplified filters and visual cards</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="wireframes" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-amber-700 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Wireframes & iterations
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
                  <p className="font-semibold text-slate-900">Homepage concept</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Introduced a room-led hero, editorial collection cards, and a persistent package CTA to reduce bounce from the first scroll.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
                  <p className="font-semibold text-slate-900">Category listing</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Simplified filters and visual subcategory tiles help customers narrow choices without leaving the page.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
                  <p className="font-semibold text-slate-900">Product detail page</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Focused the PDP on material detail, styling recommendations and a “View interior package” callout for higher intent shoppers.
                  </p>
                </div>
              </div>
            </section>

            <section id="final" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-amber-700 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Final designs — key screens
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[2rem] bg-amber-50 border border-amber-100 p-8 shadow-sm">
                  <p className="font-semibold text-slate-900">Homepage hero + navigation</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    A minimal nav with clear category buckets and a premium hero that emphasizes curated rooms over single SKUs.
                  </p>
                </div>
                <div className="rounded-[2rem] bg-slate-50 border border-slate-200 p-8 shadow-sm">
                  <p className="font-semibold text-slate-900">Product listing with filters</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Filter chips, room-based sorting and a highlighted package badge keep users focused on premium choices.
                  </p>
                </div>
                <div className="rounded-[2rem] bg-slate-50 border border-slate-200 p-8 shadow-sm">
                  <p className="font-semibold text-slate-900">Product detail page</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    A refined PDP with materials, styling recommendations, and a prominent path to interior consulting.
                  </p>
                </div>
                <div className="rounded-[2rem] bg-slate-50 border border-slate-200 p-8 shadow-sm">
                  <p className="font-semibold text-slate-900">Interior packages landing page</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    A dedicated page with package tiers, design consultant benefits and a clear booking flow for thoughtful customers.
                  </p>
                </div>
                <div className="rounded-[2rem] bg-slate-50 border border-slate-200 p-8 shadow-sm">
                  <p className="font-semibold text-slate-900">Cart summary</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Clean order breakdown, design service callouts and a trust bar that eases checkout anxiety.
                  </p>
                </div>
              </div>
            </section>

            <section id="system" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-amber-700 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Design system snippet
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-3xl border border-slate-200 p-8 bg-slate-50">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-4">Colour palette</p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-3xl bg-amber-100 h-24 flex items-end p-4 text-sm text-amber-900">Warm amber</div>
                    <div className="rounded-3xl bg-slate-100 h-24 flex items-end p-4 text-sm text-slate-900">Soft beige</div>
                    <div className="rounded-3xl bg-slate-800 h-24 flex items-end p-4 text-sm text-white">Deep charcoal</div>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 p-8 bg-white shadow-sm">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-4">Typography</p>
                  <div className="space-y-4 text-slate-700">
                    <div>
                      <p className="font-semibold">Heading</p>
                      <p className="text-sm text-slate-500">Serif display, elegant and editorial.</p>
                    </div>
                    <div>
                      <p className="font-semibold">Body</p>
                      <p className="text-sm text-slate-500">Sans-serif with generous line-height for comfortable reading.</p>
                    </div>
                    <div>
                      <p className="font-semibold">Label</p>
                      <p className="text-sm text-slate-500">Uppercase microcopy for navigation and metadata.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-3">Primary button</p>
                  <div className="rounded-full bg-amber-700 px-5 py-3 text-xs uppercase tracking-[0.3em] text-white inline-block">Book design call</div>
                </div>
                <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-3">Secondary button</p>
                  <div className="rounded-full border border-slate-300 px-5 py-3 text-xs uppercase tracking-[0.3em] text-slate-700 inline-block">View interiors</div>
                </div>
                <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-3">Product card</p>
                  <div className="rounded-3xl bg-white p-4 shadow-sm border border-slate-200">
                    <p className="font-semibold">Oak console</p>
                    <p className="text-xs text-slate-500 mt-2">Featured room edit</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-3">Filter chip</p>
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700">Living · Bedroom · Décor</div>
                </div>
              </div>
            </section>

            <section id="impact" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-amber-700 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Impact & outcomes
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 text-slate-900">
                  <p className="text-3xl font-semibold">-34%</p>
                  <p className="mt-3 text-sm text-slate-600">drop-off on category pages</p>
                </div>
                <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 text-slate-900">
                  <p className="text-3xl font-semibold">+22%</p>
                  <p className="mt-3 text-sm text-slate-600">add-to-cart rate</p>
                </div>
                <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 text-slate-900">
                  <p className="text-3xl font-semibold">+41%</p>
                  <p className="mt-3 text-sm text-slate-600">interior packages enquiries</p>
                </div>
              </div>
            </section>

            <section id="learnings" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-amber-700 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Learnings & reflection
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <ul className="space-y-4 text-slate-700">
                <li>Balancing premium editorial design with strong product discovery is essential for Indian home décor shoppers who want both inspiration and clarity.</li>
                <li>The hardest decision was surfacing Interior Packages without diluting the product catalogue; the solution was a separate package destination supported by room stories on the homepage.</li>
                <li>This project reinforced that trust in premium e-commerce comes from transparency in pricing, curated inspiration, and clear checkout reassurance.</li>
              </ul>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
