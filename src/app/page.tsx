import Link from 'next/link';
import { ArrowRight, BarChart3, BrainCircuit, CircleDollarSign, Newspaper, Package, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import Reveal from '@/components/Reveal';

const features = [
  { icon: Sparkles, title: 'AI-powered recommendations', text: 'Get prioritised actions with reasoning chains, news references, and estimated impact in MYR.' },
  { icon: TrendingUp, title: 'Sales & stock visibility', text: 'See inventory health, sales velocity, revenue trends, and at-risk products in one place.' },
  { icon: CircleDollarSign, title: 'Currency-aware planning', text: 'Track USD, EUR, and CNY movements against MYR before overseas supplier purchases.' },
  { icon: BarChart3, title: 'Strategy simulation', text: 'Compare cash flow, supply-chain resilience, and exchange-rate risk before ordering.' },
];

const steps = [
  ['01', 'Bring signals together', 'Stock, products, suppliers, sales velocity, exchange rates, and market news form one decision-ready view.'],
  ['02', 'Spot what needs attention', 'Track critical, low, healthy, and out-of-stock items alongside revenue and inventory-value KPIs.'],
  ['03', 'Generate AI guidance', 'AI analyses multiple factors and prioritises actions such as reorder, reduce exposure, or monitor.'],
  ['04', 'Test the strategy', 'Compare conservative, balanced, and aggressive scenarios before committing cash to a purchase.'],
  ['05', 'Act with context', 'Review transparent reasoning and financial impact, then make a faster, better informed call.'],
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_12%_10%,#ead4ff_0,transparent_24%),radial-gradient(circle_at_90%_87%,#9f69f9_0,transparent_30%),linear-gradient(135deg,#c9c2ed_0%,#8c68cf_45%,#402576_100%)] px-3 py-3 text-[#f8f5ff] sm:px-7 sm:py-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[25px] border border-white/20 bg-[radial-gradient(circle_at_56%_4%,rgba(142,87,255,.84),transparent_32%),radial-gradient(circle_at_20%_22%,rgba(213,160,255,.35),transparent_32%),linear-gradient(125deg,#1b1142_0%,#17123a_42%,#070812_77%)] shadow-[0_30px_55px_rgba(29,11,75,.35)]">
        <nav className="flex items-center gap-6 px-6 py-6 sm:px-10">
          <a href="#top" className="flex items-center gap-2 text-sm font-extrabold tracking-tight"><span className="grid h-7 w-7 place-items-center rounded-md bg-[#e6dcff] font-mono text-[9px] text-[#1b123c]">SW</span>STOCKWISE</a>
          <div className="ml-auto hidden gap-7 text-xs text-white/75 md:flex"><a href="#problem">The problem</a><a href="#how">How it works</a><a href="#value">Business value</a></div>
          <Link href="/demo" className="rounded-full border border-violet-200/50 bg-black/25 px-4 py-2 text-xs font-bold shadow-[0_0_18px_rgba(161,111,255,.35)]">Open demo ↗</Link>
        </nav>

        <section id="top" className="grid min-h-[570px] items-center gap-10 px-6 pb-20 pt-12 sm:px-10 lg:grid-cols-[.85fr_1.15fr] lg:pb-28 lg:pt-14">
          <Reveal>
            <p className="mb-5 font-mono text-[11px] tracking-[.17em] text-violet-200"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_0_5px_rgba(196,168,255,.16)]" />AI-POWERED INVENTORY INTELLIGENCE</p>
            <h1 className="max-w-xl text-5xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-6xl"><span className="block whitespace-nowrap">Know what to stock—</span><span className="block text-white">and why.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 tracking-wide text-violet-100/80">StockWise helps Malaysian importers and distributors turn inventory data, demand signals, exchange rates, and market news into clear, prioritised next steps.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/demo" className="inline-flex items-center gap-8 rounded-full bg-[#f8f5ff] px-5 py-3 text-sm font-bold text-[#1b123d]">Explore the live demo <ArrowRight size={16} /></Link><a href="#how" className="rounded-full border border-white/20 bg-black/20 px-5 py-3 text-sm font-bold">See how it works ↓</a></div>
            <p className="mt-4 text-xs tracking-wide text-violet-200/65">Built for UMHackathon 2026 · Demo environment</p>
          </Reveal>
          <Reveal delay={150} className="relative mx-auto grid h-[390px] w-full max-w-[580px] place-items-center sm:h-[460px]">
            <div className="absolute h-[220px] w-[95%] rotate-[-28deg] rounded-[50%] border border-violet-100/20" /><div className="absolute h-[340px] w-[70%] rotate-[-28deg] rounded-[50%] border border-violet-100/20" /><div className="absolute h-[235px] w-[48%] rounded-full border border-violet-100/25" />
            <div className="z-10 grid h-32 w-32 place-content-center rounded-full border border-violet-100/60 bg-[radial-gradient(circle_at_35%_30%,#cdbaff,#6846d6_48%,#1b123d_76%)] text-center shadow-[0_0_45px_rgba(159,110,255,.65)]"><strong className="text-4xl tracking-tighter">AI</strong><span className="mt-1 font-mono text-[8px] tracking-widest">DECISION ENGINE</span></div>
            <OrbitNode className="left-[18%] top-8" icon={<Package size={16} />} label="Inventory" /><OrbitNode className="bottom-8 left-[25%]" icon={<TrendingUp size={16} />} label="Sales" /><OrbitNode className="right-[10%] top-24" icon={<span className="text-[9px] font-bold">MYR</span>} label="Rates" /><OrbitNode className="bottom-10 right-[18%]" icon={<Newspaper size={16} />} label="Market news" />
          </Reveal>
        </section>

        <Reveal><section id="problem" className="bg-black/25 px-6 py-20 sm:px-10 lg:py-24">
          <SectionHeading eyebrow="THE DECISION GAP" title={<>Inventory decisions do not happen <span className="block">in a spreadsheet alone.</span></>} />
          <div className="mt-11 grid gap-4 md:grid-cols-3">{[['01','Signals are scattered','Stock levels, sales velocity, supplier lead times, currency exposure, and market news live in different places.'],['02','Alerts lack context','A simple reorder threshold cannot explain whether to buy now, wait, or change the order strategy when conditions shift.'],['03','Timing mistakes are expensive','Overstock ties up cash. Stockouts lose sales. Foreign-currency purchases can become costlier before the next order arrives.']].map(([number,title,text]) => <article key={number} className="min-h-52 rounded-2xl border border-white/15 bg-white/[.055] p-7"><span className="font-mono text-xs tracking-widest text-violet-200">{number}</span><h3 className="mt-7 text-xl font-semibold tracking-tight">{title}</h3><p className="mt-3 leading-7 text-violet-100/70">{text}</p></article>)}</div>
          <p className="mx-auto mt-10 max-w-3xl border-l border-violet-200 pl-5 text-xl leading-8 tracking-tight text-violet-50">StockWise connects the operating picture with the external signals that influence it—then makes the trade-offs understandable.</p>
        </section></Reveal>

        <Reveal><section id="how" className="bg-[#ded6f3] px-6 py-20 text-[#1a1237] sm:px-10 lg:py-24">
          <SectionHeading light eyebrow="HOW STOCKWISE WORKS" title={<>From fragmented data to <span className="block">a decision you can defend.</span></>} description="AI supports the decision; the team remains in control. Every recommendation includes reasoning, relevant news, and an estimated financial impact." />
          <div className="mt-12 grid border-t border-[#1a1237]/20 sm:grid-cols-2 lg:grid-cols-5">{steps.map(([number,title,text]) => <article key={number} className="min-h-64 border-b border-l border-[#1a1237]/20 p-6 last:border-r"><span className="font-mono text-xs tracking-widest text-[#7159a4]">{number}</span><BrainCircuit className="my-10 text-[#6148a1]" size={24} /><h3 className="text-lg font-bold tracking-tight">{title}</h3><p className="mt-2 text-sm leading-6 text-[#5c507c]">{text}</p></article>)}</div>
        </section></Reveal>

        <Reveal><section className="px-6 py-20 sm:px-10 lg:py-24">
          <SectionHeading eyebrow="WHAT USERS CAN DO" title={<>One workspace for <span className="block">everyday inventory decisions.</span></>} />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_.95fr]"> <div className="border-t border-white/15">{features.map(({icon: Icon,title,text}) => <article key={title} className="flex gap-4 border-b border-white/15 py-5"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-violet-950"><Icon size={16} /></span><div><h3 className="text-lg font-bold tracking-tight">{title}</h3><p className="mt-1 leading-7 text-violet-100/70">{text}</p></div></article>)}</div><aside className="rounded-3xl border border-violet-100/25 bg-[radial-gradient(circle_at_15%_14%,rgba(169,122,255,.43),transparent_29%),linear-gradient(145deg,#2b1b5c,#080914)] p-8 shadow-xl"><p className="font-mono text-[10px] tracking-[.18em] text-violet-200">A RECOMMENDATION IS MORE THAN AN ALERT</p><h3 className="mt-6 text-3xl font-semibold leading-tight tracking-tight">“Reorder this product—here is the evidence behind it.”</h3>{[['Inventory','Low stock vs. reorder point'],['Demand','Sales velocity rising'],['Market','Supply-chain signal detected'],['Impact','Estimated MYR savings']].map(([label,value]) => <div key={label} className="mt-5 flex justify-between gap-3 border-t border-white/15 pt-4 text-sm"><span className="font-mono text-[10px] tracking-widest text-violet-200">{label}</span><strong className="text-right">{value}</strong></div>)}</aside></div>
        </section></Reveal>

        <Reveal><section id="value" className="px-6 pb-20 sm:px-10 lg:pb-24"><SectionHeading eyebrow="BUSINESS VALUE" title={<>Make inventory a source of confidence—<span className="block">not constant firefighting.</span></>} /><div className="mt-12 grid overflow-hidden rounded-2xl border border-white/15 md:grid-cols-3">{[['Respond earlier','Surface risks before a product becomes unavailable or excess stock turns into locked-up capital.'],['Protect working capital','Compare strategy trade-offs so purchase decisions balance service levels, cash flow, and risk.'],['Make decisions explainable','Give teams visible reasoning and evidence, so decisions can be reviewed and communicated with confidence.']].map(([title,text]) => <article key={title} className="border-b border-white/15 bg-white/[.04] p-8 md:border-b-0 md:border-r last:border-r-0"><ShieldCheck className="text-violet-200" /><h3 className="mt-9 text-xl font-semibold tracking-tight">{title}</h3><p className="mt-3 leading-7 text-violet-100/70">{text}</p></article>)}</div></section></Reveal>

        <Reveal><section className="mx-6 mb-10 overflow-hidden rounded-3xl border border-violet-100/25 bg-[radial-gradient(circle_at_85%_4%,rgba(165,113,255,.6),transparent_27%),linear-gradient(130deg,#2a195d,#0b0a1c_69%)] p-8 sm:mx-10 sm:p-12"><p className="font-mono text-xs tracking-[.17em] text-violet-200">● INTERACTIVE PRODUCT DEMO</p><h2 className="mt-7 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">See what smarter inventory decisions look like.</h2><p className="mt-5 max-w-xl leading-7 text-violet-100/75">Explore the dashboard, inventory records, market news, AI recommendations, and strategy simulation in a safe demo environment.</p><div className="mt-8 grid justify-items-start gap-3"><Link href="/demo" className="inline-flex items-center gap-8 rounded-full bg-[#f8f5ff] px-5 py-3 text-sm font-bold text-[#1b123d]">Open StockWise demo <ArrowRight size={16} /></Link><p className="text-xs text-violet-200/65">Free hosting may take a moment to wake up.</p></div></section></Reveal>

        <footer className="flex flex-wrap items-center gap-4 border-t border-white/15 px-6 py-8 text-xs text-violet-100/65 sm:px-10"><span className="font-bold text-white">STOCKWISE</span><span>AI inventory intelligence for Malaysian SMEs.</span><a className="ml-auto" href="#top">Back to top ↑</a></footer>
      </div>
    </main>
  );
}

function OrbitNode({ className, icon, label }: { className: string; icon: React.ReactNode; label: string }) {
  return <div className={`absolute z-20 grid justify-items-center gap-1.5 text-[9px] tracking-wide text-violet-100 ${className}`}><span className="grid h-10 w-10 place-items-center rounded-xl border border-violet-100/40 bg-gradient-to-br from-[#1c1240] to-[#080914] shadow-[0_8px_20px_rgba(2,0,15,.5)]">{icon}</span>{label}</div>;
}

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: React.ReactNode; description?: string; light?: boolean }) {
  return <div className="max-w-5xl"><p className={`font-mono text-xs tracking-[.17em] ${light ? 'text-[#6c599e]' : 'text-violet-200'}`}>{eyebrow}</p><h2 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-[-.04em] sm:text-5xl lg:text-6xl">{title}</h2>{description && <p className={`mt-6 max-w-3xl leading-7 ${light ? 'text-[#5c507c]' : 'text-violet-100/70'}`}>{description}</p>}</div>;
}
