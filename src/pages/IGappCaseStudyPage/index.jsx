import React from "react";
import PlaceholderImage from "./PlaceholderImage";
import SectionLabel from "./SectionLabel";
import PullQuote from "./PullQuote";
import ProjectTimeline from "./ProjectTimeline";
import RebateTable from "./RebateTable";
import UIPatternList from "./UIPatternList";
import FindingsList from "./FindingsList";
import UAERebateCard from "./UAERebateCard";
import caseImageB from "../../Images/Case 1/case-01-B.png";
import caseImageC from "../../Images/Case 1/case-01-C.png";
import caseImageE from "../../Images/Case 1/case-01-E.png";
import caseImageF from "../../Images/Case 1/case-01-F.png";
import caseImageG from "../../Images/Case 1/case-01-G.png";
import caseImageH from "../../Images/Case 1/case-01-H.png";
import caseImageI from "../../Images/Case 1/case-01-I.png";
import caseImageJ from "../../Images/Case 1/case-01-J.png";
import caseImageK from "../../Images/Case 1/case-01-K.png";
import caseImageL from "../../Images/Case 1/case-01-L.png";
import caseImageM from "../../Images/Case 1/case-01-M.png";
import caseImageN from "../../Images/Case 1/case-01-N.png";
import caseImageP from "../../Images/Case 1/case-01-O.png";
import caseImageO from "../../Images/Case 1/case-01-P.png";
import caseImageA from "../../Images/Case 1/case-01-A.png";

export default function IGappCaseStudyPage() {
  return (
    <div className="min-h-screen bg-[#fff] font-sans text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-12">
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
              </ul>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1.5">Timeline</p>
              <p className="text-sm text-gray-700">Sep 2024– Dec 2024</p>
            </div>
          </div>
        </header>

        <figure className="my-8">
          <img
            src={caseImageB}
            alt="App screenshot — hand holding phone"
            className="mx-auto block max-w-full h-auto rounded-lg object-contain"
            style={{ aspectRatio: "16/9" }}
            loading="lazy"
            decoding="async"
            quality={95}
          />
          <figcaption className="mt-2 flex gap-3 text-xs text-gray-400 uppercase tracking-widest">
            <span>Image</span>
            <span>INTRO IMAGE</span>
          </figcaption>
        </figure>

        <section className="mb-16">
          <SectionLabel>Introduction</SectionLabel>
          <p className="text-xl leading-relaxed text-gray-800">
            <strong>IG Group is the No. 1 CFD provider</strong>, offering instruments like indices, FX, gold, and commodities. While indices and FX dominated trading activity,{' '}
            <strong className="text-gray-900">internal data revealed low engagement across other instruments. This case study outlines how we addressed that gap through</strong>{' '}
            <strong>an incentive-driven design solution.</strong>
          </p>
        </section>

        <section className="mb-16">
          <ProjectTimeline />
          <figcaption className="flex gap-3 text-xs text-gray-400 uppercase tracking-widest mt-1">
            <span>Image</span>
            <span>1.1 Project Timeline</span>
          </figcaption>
        </section>

        <section className="mb-16">
          <SectionLabel>The Design Goal</SectionLabel>
          <p className="text-xl leading-relaxed text-gray-500 mb-2">
            This lack of diversification in instrument usage posed a strategic concern. From a risk and revenue standpoint, IG wanted to encourage broader adoption across its product range.{' '}
            <strong className="text-gray-900">
              The goal was to increase platform engagement, promote the discovery of alternative instruments, and reduce the company's reliance on just a few high-volume products.
            </strong>
          </p>
        </section>

        <section className="mb-16">
          <SectionLabel>Research</SectionLabel>
          <h2 className="text-2xl font-bold mb-5">Discovery Phase</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            The initial insight came from <strong>product and analytics data</strong>, which showed that{' '}
            <strong>most trading activity centered around Indices and FX</strong>. In contrast,{' '}
            <strong>crypto, gold, other metals, energies and commodities saw low engagement</strong>, despite being core offerings.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            To validate this, our <strong>UX research team interviewed professional users and talked to Premium Account Executives (PAE) and Premium Client Managers (PCM)</strong>. We discovered that{' '}
            <strong>trading behavior was driven by perceived popularity</strong>—users simply followed what others were trading. There was also a{' '}
            <strong>lack of awareness about the full range of instruments</strong> and <strong>no strong incentive to explore beyond the usual choices</strong>.
          </p>

          <figure className="my-8">
            <img
              src={caseImageC}
              alt="Sticky notes — Interview questions"
              className="mx-auto block max-w-full h-auto rounded-lg object-contain"
              style={{ aspectRatio: "4/3" }}
              loading="lazy"
              decoding="async"
              quality={95}
            />
            <figcaption className="mt-2 flex gap-3 text-xs text-gray-400 uppercase tracking-widest">
              <span>Image</span>
              <span>2.1 Interview Questions</span>
            </figcaption>
          </figure>
        </section>

        <section className="mb-16">
          <p className="text-base leading-relaxed text-gray-700 mb-6">
            While IG had a <strong>volume-based rebate program</strong> in place to promote diversification, it was{' '}
            <strong>poorly surfaced and misunderstood</strong>. It existed <strong>only on the public website</strong>, disconnected from the core trading experience, which <strong>limited its reach and impact</strong>.
          </p>

          <PullQuote>
            Most users stuck to Indices and FX. Research showed this was driven by popularity bias, perceived lower risk, and limited awareness of existing incentives
          </PullQuote>
        </section>

        <section className="mb-16">
          <SectionLabel>Business Initiative and Product Goal</SectionLabel>
          <h2 className="text-2xl font-bold mb-5">A Strategic Push to Diversify Trading Behavior</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-6">
            To boost engagement with underused instruments, <strong>business stakeholders proposed adding IG's existing rebate model directly in Mobile and Web App for better visibility and transparency</strong>. The plan was to offer tiered cashback—higher rewards for trading crypto, indices, and commodities, and lower for FX and Indices. Our design goal was clear: make the program highly visible, transparent, and easy to track across both web and mobile platforms, helping users optimize their trading in real time.
          </p>

          <RebateTable />
        </section>

        <section className="mb-16">
          <SectionLabel>Design Process</SectionLabel>
          <h2 className="text-2xl font-bold mb-5">How do we achieve our goals?</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            We began by identifying <strong>key touchpoints</strong> in the user journey where the rebate program could surface <strong>contextually</strong>—places where it would feel <strong>helpful, not intrusive</strong>. Our exploration included the <strong>homepage, portfolio view</strong>, and <strong>settings page</strong>, aiming to meet users <strong>where they already manage their trading</strong>.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-5">
            Next, we tested multiple <strong>UI patterns</strong> to determine the most effective way to deliver the rebate experience:
          </p>

          <UIPatternList />

          <figure className="my-8">
            <img
              src={caseImageE}
              alt="Chat / UI exploration grid"
              className="mx-auto block max-w-full h-auto rounded-lg object-contain"
              style={{ aspectRatio: "4/3" }}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 flex gap-3 text-xs text-gray-400 uppercase tracking-widest">
              <span>Image</span>
              <span>Chat Exploration</span>
            </figcaption>
          </figure>
        </section>

        <section className="mb-16">
          <h3 className="text-lg font-semibold mb-2">Tier Status, Progress, and Rebate Visibility</h3>
          <FindingsList />

          <figure className="my-8">
            <img
              src={caseImageF}
              alt="Annotated wireframe — Card variant F"
              className="mx-auto block max-w-full h-auto rounded-lg object-contain"
              style={{ aspectRatio: "16/7" }}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 flex gap-3 text-xs text-gray-400 uppercase tracking-widest">
              <span>Image</span>
              <span>Annotated wireframe — Card variant F</span>
            </figcaption>
          </figure>
          <figure className="my-8">
            <img
              src={caseImageG}
              alt="Annotated wireframe — Card variant G"
              className="mx-auto block max-w-full h-auto rounded-lg object-contain"
              style={{ aspectRatio: "16/7" }}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 flex gap-3 text-xs text-gray-400 uppercase tracking-widest">
              <span>Image</span>
              <span>Annotated wireframe — Card variant G</span>
            </figcaption>
          </figure>
          <figure className="my-8">
            <img
              src={caseImageH}
              alt="Annotated wireframe — Card variant H"
              className="mx-auto block max-w-full h-auto rounded-lg object-contain"
              style={{ aspectRatio: "16/7" }}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 flex gap-3 text-xs text-gray-400 uppercase tracking-widest">
              <span>Image</span>
              <span>Annotated wireframe — Card variant H</span>
            </figcaption>
          </figure>
          <figure className="my-8">
            <img
              src={caseImageI}
              alt="Annotated wireframe — Tier 2 reached"
              className="mx-auto block max-w-full h-auto rounded-lg object-contain"
              style={{ aspectRatio: "16/7" }}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 flex gap-3 text-xs text-gray-400 uppercase tracking-widest">
              <span>Image</span>
              <span>Annotated wireframe — Tier 2 reached</span>
            </figcaption>
          </figure>
          <figure className="my-8">
            <img
              src={caseImageJ}
              alt="Dashboard — Cash Rebate Breakdown"
              className="mx-auto block max-w-full h-auto rounded-lg object-contain"
              Archive
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 flex gap-3 text-xs text-gray-400 uppercase tracking-widest">
              <span>Image</span>
              <span>Dashboard — Cash Rebate Breakdown</span>
            </figcaption>
          </figure>

          <p className="text-base leading-relaxed text-gray-700 mt-6">
            <strong>Web Design</strong>
            <br />
            We added the rebate scheme button to the navigation bar for better visibility, leveraging the additional real estate available on web.
          </p>

         <figure className="my-8">
            <img
              src={caseImageK}
              alt="Dashboard — Cash Rebate Breakdown"
              className="mx-auto block max-w-full h-auto rounded-lg object-contain"
              Archive
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 flex gap-3 text-xs text-gray-400 uppercase tracking-widest">
              <span>Image</span>
              <span>Dashboard — Cash Rebate Breakdown</span>
            </figcaption>
          </figure>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-5">Launch &amp; Iteration</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            We launched the MVP to professional users in the UK to test interest. Within weeks,{' '}
            <strong>65% engaged</strong> with the feature—confirming strong user interest. User interviews showed the card helped{' '}
            <strong>new traders understand how IG rewards volume</strong>, while some high-volume traders found it less relevant.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-8">
            To address this, we added a <strong>collapsible version on mobile</strong>, giving users control without sacrificing visibility.
          </p>

        <figure className="my-8">
            <img
              src={caseImageL}
              alt="Dashboard — Cash Rebate Breakdown"
              className="mx-auto block max-w-full h-auto rounded-lg object-contain"
              Archive
              loading="lazy"
              decoding="async"
            />
            <figcaption className="flex gap-3 text-xs text-gray-400 uppercase tracking-widest mb-10">
            <span>Image</span>
            <span>Settings Page</span>
          </figcaption>
          </figure>

          
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-5">Business Results &amp; Expansion</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            The feature led to a <strong>notable increase in trading volume across underused instruments</strong>, improving platform balance and reducing reliance on CFDs and shares.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-8">
            Following its success, we <strong>localized and launched</strong> the feature in the{' '}
            <strong>Middle East</strong> (for all users) and are now rolling it out across{' '}
            <strong>APAC markets</strong> with region-specific tweaks.
          </p>

          <UAERebateCard />
          <figcaption className="flex gap-3 text-xs text-gray-400 uppercase tracking-widest mb-10">
            <span>Image</span>
            <span>UAE Version</span>
          </figcaption>
        </section>

        <section className="mb-16">
          <SectionLabel>Result</SectionLabel>
          <p className="text-xl leading-relaxed text-gray-500">
            We turned a hidden rebate into a visible, user-first feature.{' '}
            <strong className="text-gray-900">
              In just one month, 65% of users engaged, driving diversification and a major increase in trading across instruments
            </strong>{' '}
            <span className="text-gray-400">beyond FX and Indices.</span>{' '}
            <strong className="text-gray-900">
              The success led to a global rollout across APAC, the Middle East, and EU markets.
            </strong>
          </p>
        </section>

        <section className="mb-20">
          <SectionLabel>Present</SectionLabel>
          <h2 className="text-2xl font-bold mb-8">Hand-Off &amp; Final Design</h2>

          <figure className="my-8">
            <img
              src={caseImageM}
              alt="Dashboard — Cash Rebate Breakdown"
              className="mx-auto block max-w-full h-auto rounded-lg object-contain"
              
              loading="lazy"
              decoding="async"
            />
            <figcaption className="flex gap-3 text-xs text-gray-400 uppercase tracking-widest mb-10">
            <span>Image</span>
            <span>Settings Page</span>
          </figcaption>
          </figure>

          <div className="mb-2">
            <p className="text-center text-sm font-bold tracking-wide text-gray-800 mb-1">Android</p>
            <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-4">Phase 1</p>
           <figure className="my-8">
            <img
              src={caseImageP}
              alt="Dashboard — Cash Rebate Breakdown"
              className="mx-auto block max-w-full h-auto rounded-lg object-contain"
              
              loading="lazy"
              decoding="async"
            />
             <figcaption className="flex gap-3 text-xs text-gray-400 uppercase tracking-widest mb-10">
            <span>Image</span>
            <span>Hand Off – Android</span>
          </figcaption>
          </figure>
          </div>
         

          <div className="mb-2">
            <p className="text-center text-sm font-bold tracking-wide text-blue-600 mb-1">iOS</p>
            <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-4">Phase 1</p>
            <figure className="my-8">
            <img
              src={caseImageO}
              alt="Dashboard — Cash Rebate Breakdown"
              className="mx-auto block  h-auto rounded-lg object-contain"
        
              loading="lazy"
              decoding="async"
            />
             <figcaption className="flex gap-3 text-xs text-gray-400 uppercase tracking-widest">
            <span>Image</span>
            <span>Hand Off – iOS</span>
          </figcaption>
          </figure>
          </div>
         
        </section>
      </div>
    </div>
  );
}
