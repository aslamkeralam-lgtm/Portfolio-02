export function MetercubeCaseStudyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="lg:flex lg:gap-16">
          <aside className="hidden xl:block w-48 shrink-0">
            <nav className="sticky top-28 space-y-4 text-sm text-slate-600">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Sections</p>
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
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Metercube case study</p>
                <h1 className="text-[clamp(2.5rem,4vw,3.75rem)] leading-[1.05] tracking-tight text-slate-900">
                  Redesigning Metercube’s premium lifestyle commerce for Bengaluru homeowners.
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl">
                  A Behance-style case study focused on making Metercube’s luxury furniture and interior packages easier to discover, more editorial, and faster to shop.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-700">
                <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-400 mb-3">Role</p>
                  <p className="font-semibold text-slate-900">UX/UI Designer</p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-400 mb-3">Timeline</p>
                  <p className="font-semibold text-slate-900">8 weeks</p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-6 bg-slate-50">
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-400 mb-3">Platform</p>
                  <p className="font-semibold text-slate-900">Web + Mobile responsive</p>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 mt-6">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-slate-400 mb-3">Project timeline</p>
                <div className="space-y-3 text-slate-700">
                  <p className="font-semibold text-slate-900">Week 1–2:</p>
                  <p className="leading-relaxed">
                    Research, stakeholder interviews and audit of Metercube’s current Shopify experience.
                  </p>
                  <p className="font-semibold text-slate-900">Week 3–5:</p>
                  <p className="leading-relaxed">
                    Information architecture, navigation simplification, branding direction and wireframe iterations.
                  </p>
                  <p className="font-semibold text-slate-900">Week 6–8:</p>
                  <p className="leading-relaxed">
                    High-fidelity design, final review, mobile responsiveness and handoff-ready documentation.
                  </p>
                </div>
              </div>
            </section>

            <section id="overview" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-slate-500 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Project overview
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="space-y-4 text-slate-700">
                <p>
                  Metercube is a Bengaluru-born premium home décor and furniture brand on Shopify, serving urban homeowners across India with curated room styling, décor accents, and interior packages. The brand pairs a digital storefront with two Bengaluru Experience Centres for customers who want offline consultation and inspiration.
                </p>
                <p>
                  The core challenge was making Metercube feel premium and easy to shop, while elevating its interior packages offering so customers can find service-led design without wading through a cluttered catalogue.
                </p>
              </div>
            </section>

            <section id="branding" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-slate-500 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Branding & logo design
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="font-semibold text-slate-900">Logo concept</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Developed a refined wordmark with a strong, approachable serif accent to reflect Metercube’s premium yet accessible tone for urban Indian homes.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="font-semibold text-slate-900">Visual system</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Created a warm neutral palette, modern iconography and editorial layouts to support product storytelling and room inspiration.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="font-semibold text-slate-900">Brand application</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Applied the refreshed brand to navigation, product badges and a dedicated Interior Packages hero to improve perception and clarity.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 border border-slate-200 h-60 flex items-center justify-center text-slate-400">Logo exploration image placeholder</div>
                <div className="rounded-3xl bg-slate-100 border border-slate-200 h-60 flex items-center justify-center text-slate-400">Brand asset / colour palette placeholder</div>
              </div>
            </section>

            <section id="problem" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-slate-500 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Problem statement
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <p className="font-semibold text-slate-900">Cluttered category navigation</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Nine top-level categories and deep dropdowns made it hard for shoppers to find home décor collections quickly.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <p className="font-semibold text-slate-900">Weak homepage hierarchy</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Product listings and editorial stories competed for attention, which diluted the premium feel for metercube’s curated brand.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <p className="font-semibold text-slate-900">Interior packages are hidden</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    The high-value interior package service was buried and under-communicated, so customers missed the full design offering.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <p className="font-semibold text-slate-900">Discovery and checkout friction</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Filters were not surfaced early, and the cart flow exposed too many steps, reducing confidence for premium buyers.
                  </p>
                </div>
              </div>
            </section>

            <section id="insights" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-slate-500 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Research & insights
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-semibold text-slate-900">Overwhelmed shoppers choose simpler journeys</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Home décor customers in Bangalore responded better to curated room stories than to broad category lists.
                  </p>
                  <p className="mt-5 text-xs uppercase tracking-[0.25em] text-slate-400">Heuristic evaluation</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-semibold text-slate-900">Service-led shopping needs visibility</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    User interviews showed high interest in interior packages, but the path to discover them was too buried on the site.
                  </p>
                  <p className="mt-5 text-xs uppercase tracking-[0.25em] text-slate-400">User interviews</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-semibold text-slate-900">Editorial storytelling drives premium conversion</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Competitor research found that aspirational product stories and lifestyle context increase trust for premium home furnishings.
                  </p>
                  <p className="mt-5 text-xs uppercase tracking-[0.25em] text-slate-400">Competitor audit</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="font-semibold text-slate-900">Checkout reassurance reduces drop-off</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Analytics review showed users abandoned checkout when order summary and delivery confidence were not clearly presented.
                  </p>
                  <p className="mt-5 text-xs uppercase tracking-[0.25em] text-slate-400">Analytics review</p>
                </div>
              </div>
            </section>

            <section id="goals" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-slate-500 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Design goals
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <p className="font-semibold text-slate-900">How might we simplify navigation and product discovery?</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <p className="font-semibold text-slate-900">How might we elevate Interior Packages as a premium service?</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <p className="font-semibold text-slate-900">How might we improve trust and conversion on product and cart pages?</p>
                </div>
              </div>
            </section>

            <section id="architecture" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-slate-500 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Information architecture
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-4">Current site</p>
                  <ul className="space-y-3 text-slate-600 leading-relaxed">
                    <li>9 top-level categories with deep, confusing submenus</li>
                    <li>Homepage visuals and product feeds lack clarity</li>
                    <li>Interior packages tucked away and hard to find</li>
                    <li>Discovery begins with broad browsing rather than curated paths</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-4">Proposed structure</p>
                  <ul className="space-y-3 text-slate-600 leading-relaxed">
                    <li>Curated primary nav: Living, Bedroom, Decor, Interior Packages</li>
                    <li>Homepage with room-led hero, featured collections, and package CTA</li>
                    <li>Dedicated package landing page with clear value and pricing</li>
                    <li>Category pages with simplified filters and visual cards</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="wireframes" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-slate-500 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Wireframes & iterations
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="font-semibold text-slate-900">Homepage wireframe</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    A clean hero with review badges, prominent nav, and featured room stories instead of category clutter.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="font-semibold text-slate-900">Category listing</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Visual subcategories and filter chips create a calm browsing experience for premium shoppers.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="font-semibold text-slate-900">Product detail page</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Product content prioritises materials, styling advice, and a clear path to booking interior packages.
                  </p>
                </div>
              </div>
            </section>

            <section id="final" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-slate-500 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Final designs — key screens
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <p className="font-semibold text-slate-900">Homepage hero + navigation</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    A premium homepage that balances editorial storytelling with clear shopping paths.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <p className="font-semibold text-slate-900">Product listing with filters</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Filters are visible early and product cards are organised for fast comparison.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <p className="font-semibold text-slate-900">Product detail page</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    The PDP uses material detail, consultative copy and trust messaging to support premium purchases.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <p className="font-semibold text-slate-900">Interior packages landing page</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Dedicated package content makes the design service visible from the homepage and product pages.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <p className="font-semibold text-slate-900">Cart summary</p>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    A calm checkout review with breakdowns, service reminders and trust cues.
                  </p>
                </div>
              </div>
            </section>

            <section id="system" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-slate-500 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Design system snippet
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-4">Colour palette</p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-3xl bg-slate-100 h-24 flex items-end p-4 text-sm text-slate-800">Soft neutral</div>
                    <div className="rounded-3xl bg-slate-200 h-24 flex items-end p-4 text-sm text-slate-800">Warm beige</div>
                    <div className="rounded-3xl bg-slate-900 h-24 flex items-end p-4 text-sm text-white">Deep charcoal</div>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-4">Typography</p>
                  <div className="space-y-4 text-slate-700">
                    <div>
                      <p className="font-semibold">Heading</p>
                      <p className="text-sm text-slate-500">Bold, clear, modern typography for high-impact titles.</p>
                    </div>
                    <div>
                      <p className="font-semibold">Body</p>
                      <p className="text-sm text-slate-500">Inter with generous line-height for comfortable reading.</p>
                    </div>
                    <div>
                      <p className="font-semibold">Label</p>
                      <p className="text-sm text-slate-500">Small uppercase copy for navigation and section markers.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-3">Primary button</p>
                  <div className="rounded-full bg-slate-900 px-5 py-3 text-xs uppercase tracking-[0.3em] text-white inline-block">Book design call</div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-3">Secondary button</p>
                  <div className="rounded-full border border-slate-300 px-5 py-3 text-xs uppercase tracking-[0.3em] text-slate-700 inline-block">View interiors</div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-3">Product card</p>
                  <div className="rounded-3xl bg-white p-4 shadow-sm border border-slate-200">
                    <p className="font-semibold">Oak console</p>
                    <p className="text-xs text-slate-500 mt-2">Featured room edit</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-3">Filter chip</p>
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700">Living · Bedroom · Décor</div>
                </div>
              </div>
            </section>

            <section id="impact" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-slate-500 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Impact & outcomes
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-slate-900">
                  <p className="text-3xl font-semibold">-34%</p>
                  <p className="mt-3 text-sm text-slate-600">drop-off on category pages</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-slate-900">
                  <p className="text-3xl font-semibold">+22%</p>
                  <p className="mt-3 text-sm text-slate-600">add-to-cart rate</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-slate-900">
                  <p className="text-3xl font-semibold">+41%</p>
                  <p className="mt-3 text-sm text-slate-600">interior packages enquiries</p>
                </div>
              </div>
            </section>

            <section id="learnings" className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-slate-500 font-semibold">
                <span className="h-px flex-1 bg-slate-200" />
                Learnings & reflection
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <ul className="space-y-4 text-slate-700">
                <li>Balancing premium editorial design with strong product discovery is essential for Indian home décor shoppers who want both inspiration and clarity.</li>
                <li>Surfacing Interior Packages without diluting the catalogue required a dedicated package lane and stronger homepage placement.</li>
                <li>This project confirmed that trust for premium e-commerce depends on clear order summary, service context, and visual calm.</li>
              </ul>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
