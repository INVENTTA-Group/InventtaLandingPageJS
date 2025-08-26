import * as React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Rocket, Users, Sparkles, Leaf, Briefcase, MapPin, Clock4, Shield, HeartHandshake } from "lucide-react";


const perks = [
  { icon: <Rocket size={22} />, title: "Hypergrowth Tracks", blurb: "Level-up frameworks, fast promotions, ownership-first culture." },
  { icon: <Shield size={22} />, title: "Total Wellbeing", blurb: "Insurance, mental health days, and flexible leave that’s real." },
  { icon: <Sparkles size={22} />, title: "Build With AI", blurb: "Tooling, credits, and time to ship 10x experiments." },
  { icon: <Leaf size={22} />, title: "Sustainability", blurb: "Green benefits and carbon-aware build practices." },
  { icon: <Users size={22} />, title: "Mentor Network", blurb: "Cross-vertical guidance from industry leaders." },
  { icon: <HeartHandshake size={22} />, title: "Giveback", blurb: "Volunteer days and matched donations, globally." },
];

const roles = [
  // { title: "Frontend Engineer", tag: "Technology", location: "Remote / Bengaluru", type: "Full-time" },
  // { title: "Healthcare Ops Lead", tag: "Healthcare", location: "Mumbai", type: "Full-time" },
  // { title: "Regulatory Affairs Specialist", tag: "Pharma", location: "Hyderabad", type: "Full-time" },
  // { title: "Growth Designer", tag: "Brand & Media", location: "Remote", type: "Contract" },
  // { title: "Supply Chain Analyst", tag: "Consumer Goods", location: "Gurugram", type: "Full-time" },
  // { title: "IoT Solutions Architect", tag: "Electronics", location: "Pune", type: "Full-time" },
  // { title: "Sustainability Program Manager", tag: "Green Energy", location: "Chennai", type: "Full-time" },
  // { title: "Hospitality Experience Lead", tag: "Hospitality", location: "Goa", type: "Full-time" },
];

export default function Career() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-x-clip">

      {/* HERO — diagonal, with subtle grid + glow */}
      <header className="relative isolate">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_60%_-10%,rgba(34,197,94,0.25),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_60%,rgba(2,6,23,1)_100%)]" />
        <section className="relative min-h-[82vh] flex items-center">
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
              >
                <span className="text-white">Build India’s</span>{" "}
                <span className="text-inventta-green">Next Horizon</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-5 max-w-3xl text-lg md:text-2xl text-white/80"
              >
                We’re scaling across healthcare, pharmaceuticals, tech, energy, media, and more.
                Join high-ownership teams building products and platforms that move the needle.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                <a
                  href="#open-roles"
                  className="inline-flex items-center gap-2 rounded-xl bg-inventta-green px-5 py-3 font-semibold text-gray-950 hover:brightness-110 transition"
                >
                  <Briefcase size={18} /> View Open Roles
                </a>
                <a
                  href="#life-at-inventta"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/5 transition"
                >
                  <Users size={18} /> Life at Inventta
                </a>
              </motion.div>
            </div>
          </div>

          {/* sticky chevron */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70">
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ChevronDown size={28} />
            </motion.div>
          </div>
        </section>

        {/* angled divider */}
        <div className="diagonal-divider -mb-16" />
      </header>

      {/* FLOATING PERKS CARDS — straddle hero & next section */}
      <div className="relative z-10 -mt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {perks.slice(0, 3).map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24, rotate: i === 1 ? 0.4 : i === 2 ? -0.6 : 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="floating-card group"
              >
                <div className="flex items-center gap-3 text-inventta-green">
                  {p.icon}
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                </div>
                <p className="mt-2 text-white/80">{p.blurb}</p>
                <span className="card-glow" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* LIFE @ INVENTTA — sticky timeline + background grid */}
      <section id="life-at-inventta" className="relative py-28">
        <div className="bg-grid pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-20">
            <div className="sticky top-28 self-start">
              <h2 className="gradient-text text-4xl md:text-5xl font-extrabold">Life @ Inventta</h2>
              <p className="mt-4 text-white/75 text-lg">
                Cross-functional squads, shipping culture, and mentorship across our expanding verticals.
                Work with autonomy, learn by doing, and move markets.
              </p>

              <div className="mt-8 space-y-4">
                {perks.slice(3).map((p) => (
                  <div key={p.title} className="flex items-start gap-3">
                    <div className="shrink-0 mt-1 text-inventta-green">{p.icon}</div>
                    <div>
                      <div className="font-semibold">{p.title}</div>
                      <div className="text-white/70">{p.blurb}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ul className="relative space-y-10">
              {[
                { k: "01", h: "Own Outcomes", d: "We ship value, not tickets. Autonomy paired with measurable impact." },
                { k: "02", h: "Compound Learning", d: "Guilds, tech talks, and rotations across products and verticals." },
                { k: "03", h: "Human-Centered", d: "Wellbeing first. Flexible work that respects real-life rhythms." },
                { k: "04", h: "Mission > Ego", d: "Bias to action, feedback loops, and radical candor." },
              ].map((t, i) => (
                <motion.li
                  key={t.k}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 lg:p-7 hover:bg-white/[0.07] transition"
                >
                  <div className="absolute -left-10 top-6 hidden sm:block text-inventta-green font-bold">{t.k}</div>
                  <div className="text-xl font-semibold">{t.h}</div>
                  <div className="text-white/75 mt-2">{t.d}</div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CROSS-SECTION FLOATERS — more “hovering” cards that bleed into Open Roles */}
      <div className="relative -mt-10 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-6">
          {[
            { t: "Multi-Sector Impact", d: "Healthcare to media—ship where your craft meets real-world scale." },
            { t: "Design For India", d: "Build accessible, resilient systems for billions." },
            { t: "Green By Default", d: "Sustainability embedded across products and ops." },
          ].map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 28, rotate: i === 1 ? 0.6 : -0.4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="floating-card small group"
            >
              <div className="text-lg font-semibold">{c.t}</div>
              <p className="text-white/80 mt-1.5">{c.d}</p>
              <span className="card-glow" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* OPEN ROLES — waterfall grid + chips */}
      <section id="open-roles" className="relative pt-24 pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">Open Roles</h2>
              <p className="text-white/70 mt-2">
                Don’t see a perfect match? Write to us — we hire for potential.
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["All", "Technology", "Healthcare", "Pharma", "Energy", "Media"].map((f) => (
                <button
                  key={f}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/5 transition"
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6 [--stagger:0.06]">
            {roles.map((r, i) => (
              <motion.article
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] backdrop-blur-xl p-6 transition relative overflow-hidden"
              >
                <div className="absolute inset-px pointer-events-none rounded-[calc(theme(borderRadius.2xl)-1px)] glow-border" />
                <div className="text-sm text-inventta-green font-semibold">{r.tag}</div>
                <h3 className="mt-1.5 text-xl font-bold">{r.title}</h3>
                <div className="mt-2 flex items-center gap-4 text-white/70 text-sm">
                  <span className="inline-flex items-center gap-1"><MapPin size={16} /> {r.location}</span>
                  <span className="inline-flex items-center gap-1"><Clock4 size={16} /> {r.type}</span>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href="/apply"
                    className="rounded-lg bg-inventta-green text-gray-900 font-semibold px-4 py-2 hover:brightness-110 transition"
                  >
                    Apply
                  </a>
                  <a href="/roles" className="text-white/70 hover:text-white transition">Details</a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — big, simple, bold */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_450px_at_20%_10%,rgba(34,197,94,0.18),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold">
            Ready to build across{" "}
            <span className="text-inventta-green">multiple verticals</span> with compound impact?
          </h3>
          <p className="text-white/70 mt-3 max-w-3xl mx-auto">
            Send your portfolio, repo, or a short note about a product you’re proud of.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a
              href="/apply"
              className="rounded-xl bg-inventta-green px-6 py-3 font-semibold text-gray-900 hover:brightness-110 transition"
            >
              Share Your Story
            </a>
            <a
              href="mailto:careers@inventta.group"
              className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition"
            >
              careers@inventta.group
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
