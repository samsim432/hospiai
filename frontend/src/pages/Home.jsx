import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeader({ badge, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <span className="inline-flex rounded-full border border-violet-200 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-violet-700 shadow-sm backdrop-blur-xl">
        {badge}
      </span>

      <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -6 }}
      className={`rounded-[2rem] border border-white/70 bg-white/70 shadow-xl shadow-violet-100/50 backdrop-blur-2xl transition ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const trustBadges = [
    "Website Chat",
    "WhatsApp AI",
    "Voice Calls",
    "Lead Capture",
    "Human Handover",
  ];

  const problems = [
    {
      icon: "https://img.icons8.com/fluency/96/moon-symbol.png",
      title: "After Hours",
      description: "Guests often send booking questions when reception is closed.",
    },
    {
      icon: "https://img.icons8.com/fluency/96/time-machine.png",
      title: "Slow Replies",
      description: "Long response times cause guests to book with competitors.",
    },
    {
      icon: "https://img.icons8.com/fluency/96/phone.png",
      title: "Busy Reception",
      description: "Staff spend hours answering repetitive guest questions.",
    },
    {
      icon: "https://img.icons8.com/fluency/96/chat.png",
      title: "Many Channels",
      description: "Website, WhatsApp, Facebook and calls become hard to manage.",
    },
  ];

  const features = [
    {
      icon: "https://img.icons8.com/fluency/96/chatbot.png",
      title: "Website Chat AI",
      description: "Answer guest questions directly on your hotel website 24/7.",
    },
    {
      icon: "https://img.icons8.com/fluency/96/whatsapp.png",
      title: "WhatsApp AI",
      description: "Reply to guests where they already message your hotel.",
    },
    {
      icon: "https://img.icons8.com/fluency/96/voice-recognition-scan.png",
      title: "Voice AI Receptionist",
      description: "Handle common phone enquiries with AI voice support.",
    },
    {
      icon: "https://img.icons8.com/fluency/96/magnet.png",
      title: "Lead Collection",
      description: "Capture name, phone, email, and booking intent.",
    },
    {
      icon: "https://img.icons8.com/fluency/96/handshake.png",
      title: "Human Handover",
      description: "Escalate important conversations to real hotel staff.",
    },
    {
      icon: "https://img.icons8.com/fluency/96/combo-chart.png",
      title: "Analytics",
      description: "Track questions, leads, and booking opportunities.",
    },
  ];

  const steps = [
    {
      step: "01",
      icon: "https://img.icons8.com/fluency/96/customer-insight.png",
      title: "Guest asks a question",
      description: "A guest asks about rooms, pricing, breakfast, parking, or availability.",
    },
    {
      step: "02",
      icon: "https://img.icons8.com/fluency/96/artificial-intelligence.png",
      title: "HospiAI replies instantly",
      description: "The AI uses your hotel FAQs, policies, rooms, and facilities.",
    },
    {
      step: "03",
      icon: "https://img.icons8.com/fluency/96/goal.png",
      title: "Lead is captured",
      description: "HospiAI collects guest details and alerts your hotel team.",
    },
    {
      step: "04",
      icon: "https://img.icons8.com/fluency/96/conference-call.png",
      title: "Staff can take over",
      description: "Important conversations can be handed over to real staff.",
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "£49",
      features: ["Website Chat AI", "Lead Collection", "Basic Analytics"],
    },
    {
      name: "Growth",
      price: "£99",
      popular: true,
      features: ["Website Chat AI", "WhatsApp AI", "Lead Collection", "Analytics"],
    },
    {
      name: "Premium",
      price: "£199",
      features: ["Website Chat AI", "WhatsApp AI", "Voice AI", "Advanced Analytics"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Multi-Hotel Setup", "Custom Integrations", "Dedicated Support"],
    },
  ];

  const faqs = [
    {
      q: "Can HospiAI replace my reception team?",
      a: "No. HospiAI supports your team by answering common questions and collecting leads. Staff can take over important conversations.",
    },
    {
      q: "Does it work on WhatsApp?",
      a: "Yes. WhatsApp AI is part of the HospiAI platform roadmap and premium plans.",
    },
    {
      q: "Can it answer questions about my hotel?",
      a: "Yes. HospiAI uses your hotel FAQs, facilities, room information, and policies.",
    },
    {
      q: "Can it collect guest details?",
      a: "Yes. HospiAI can collect guest name, email, phone number, and booking intent.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8F7FF] text-slate-900">
      <Navbar />

      <main className="relative">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-300/40 blur-3xl" />
          <div className="absolute -left-44 top-80 h-[430px] w-[430px] rounded-full bg-blue-300/35 blur-3xl" />
          <div className="absolute -right-44 top-[720px] h-[430px] w-[430px] rounded-full bg-fuchsia-300/30 blur-3xl" />
        </div>

        {/* Hero */}
        <section className="px-4 pb-12 pt-24 sm:px-6 lg:px-8 lg:pb-20 lg:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-black text-violet-700 shadow-sm backdrop-blur-2xl sm:text-sm">
                <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                24/7 AI Receptionist For Hotels
              </div>

              <h1 className="mx-auto mt-6 max-w-sm text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:max-w-2xl sm:text-6xl lg:mx-0 lg:text-7xl">
                Never Miss a{" "}
                <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Booking Again
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-slate-600 sm:max-w-xl sm:text-lg lg:mx-0">
                Reply to hotel guests 24/7 through Website Chat, WhatsApp, and Voice Calls using AI.
              </p>

              <div className="mx-auto mt-7 grid max-w-sm grid-cols-2 gap-3 sm:max-w-none sm:flex sm:justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="rounded-2xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 px-5 py-4 text-center text-xs font-black text-white shadow-xl shadow-violet-300/40 transition hover:-translate-y-1 sm:rounded-full sm:px-8 sm:text-sm"
                >
                  Book Demo
                </Link>

                <Link
                  to="/pricing"
                  className="rounded-2xl border border-white/70 bg-white/80 px-5 py-4 text-center text-xs font-black text-slate-800 shadow-md backdrop-blur-xl transition hover:-translate-y-1 hover:text-violet-600 sm:rounded-full sm:px-8 sm:text-sm"
                >
                  View Pricing
                </Link>
              </div>

              <div className="mx-auto mt-6 grid max-w-sm grid-cols-2 gap-2 sm:max-w-none sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-xl border border-white/70 bg-white/70 px-3 py-2 text-center text-[11px] font-black text-slate-600 shadow-sm backdrop-blur-xl sm:rounded-2xl sm:px-4 sm:py-3 sm:text-xs"
                  >
                    ✓ {badge}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-sm lg:max-w-none"
            >
              <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/60 p-3 shadow-2xl shadow-violet-200/60 backdrop-blur-2xl sm:rounded-[2.5rem] sm:p-4">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern hotel reception"
                  className="h-56 w-full rounded-[1.3rem] object-cover sm:h-72 lg:h-96"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-5 left-4 max-w-[250px] rounded-3xl border border-white/70 bg-white/90 p-4 shadow-2xl shadow-violet-200/60 backdrop-blur-2xl sm:left-8"
              >
                <p className="text-xs font-black text-violet-700">AI Reply Sent</p>
                <p className="mt-1 text-sm font-bold text-slate-900">
                  Yes, we have family rooms available tonight.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Problems */}
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              badge="Problems Hotels Face"
              title="Every missed message can become a missed booking"
              description="Modern guests expect instant replies. When hotels respond late, potential guests often book somewhere else."
            />

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
              {problems.map((problem) => (
                <GlassCard key={problem.title} className="p-4 sm:p-5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50 shadow-sm">
                    <img src={problem.icon} alt={problem.title} className="h-8 w-8" />
                  </div>

                  <h3 className="text-base font-black leading-tight text-slate-950 sm:text-lg">
                    {problem.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-slate-600 sm:text-sm">
                    {problem.description}
                  </p>
                </GlassCard>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                ["24/7", "Guest Support"],
                ["0", "Missed Leads"],
                ["3x", "Faster Replies"],
                ["100%", "AI Powered"],
              ].map(([number, label]) => (
                <GlassCard key={label} className="p-4 text-center">
                  <p className="text-2xl font-black text-violet-600">{number}</p>
                  <p className="mt-1 text-xs font-medium text-slate-600">{label}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[2rem] border border-white/30 bg-gradient-to-br from-violet-700 via-blue-600 to-cyan-500 p-5 text-white shadow-2xl shadow-violet-300/40 sm:rounded-[2.5rem] sm:p-10 lg:p-12"
            >
              <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-violet-100 sm:text-sm">
                    HospiAI Solution
                  </p>

                  <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight tracking-tight sm:mt-4 sm:text-5xl">
                    One AI receptionist for every guest channel
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-blue-50 sm:mt-5 sm:text-base">
                    Answer repetitive questions, capture booking leads, and hand over important conversations to real staff when needed.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {["Instant replies", "Booking intent", "Lead collection", "Human handover"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/25 bg-white/15 p-4 text-sm font-black backdrop-blur-xl sm:rounded-3xl sm:p-5 sm:text-base"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              badge="Features"
              title="Everything your hotel needs to reply faster"
              description="HospiAI combines guest messaging, lead collection, human handover, and hotel-specific AI in one modern SaaS platform."
            />

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
              {features.map((feature) => (
                <GlassCard key={feature.title} className="p-4 sm:p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50">
                    <img src={feature.icon} alt={feature.title} className="h-8 w-8" />
                  </div>

                  <h3 className="text-sm font-black text-slate-950 sm:text-lg">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                    {feature.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              badge="How It Works"
              title="From guest question to booking lead"
              description="HospiAI turns guest conversations into booking opportunities automatically."
            />

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
              {steps.map((item) => (
                <GlassCard key={item.step} className="p-4 sm:p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 text-sm font-black text-white shadow-lg">
                      {item.step}
                    </div>
                    <img src={item.icon} alt={item.title} className="h-9 w-9" />
                  </div>

                  <h3 className="text-base font-black leading-tight text-slate-950 sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-slate-600 sm:text-sm">
                    {item.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Chat Demo */}
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm font-black uppercase tracking-[0.25em] text-violet-600">
                  Website Chat AI
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  Turn your hotel website into a 24/7 booking assistant
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  Guests can ask questions directly on your website. HospiAI can answer common questions, detect booking intent, and collect lead details before your team replies.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {["Instant answers", "Intent detection", "Guest details", "Staff handover"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/70 bg-white/70 p-4 text-sm font-black text-slate-700 shadow-sm backdrop-blur-xl"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <GlassCard className="p-4 sm:p-5">
                <div className="rounded-[2rem] bg-slate-50/90 p-4">
                  <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-4">
                    <div>
                      <p className="font-black text-slate-950">Everest Hotel Kathmandu</p>
                      <p className="text-xs text-slate-500">AI Receptionist Online</p>
                    </div>

                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">
                      Active
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="max-w-[85%] rounded-3xl bg-white p-4 text-sm text-slate-700 shadow-sm">
                      Do you have airport pickup?
                    </div>

                    <div className="ml-auto max-w-[90%] rounded-3xl bg-gradient-to-r from-violet-600 to-blue-600 p-4 text-sm leading-6 text-white">
                      Yes, airport pickup is available. Please share your arrival date and flight time.
                    </div>

                    <div className="max-w-[80%] rounded-3xl bg-white p-4 text-sm text-slate-700 shadow-sm">
                      Great. I also need a family room.
                    </div>
                  </div>

                  <div className="mt-5 rounded-3xl border border-violet-100 bg-violet-50 p-4">
                    <p className="text-sm font-black text-violet-700">
                      Lead detected: Family room enquiry
                    </p>
                    <p className="mt-1 text-xs text-violet-600">
                      Guest is ready for staff follow-up.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              badge="Pricing"
              title="Simple pricing for every hotel"
              description="Choose the plan that fits your hotel size and guest communication needs."
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {pricing.map((plan) => (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  whileHover={{ y: -8 }}
                  className={`rounded-[2rem] border p-6 shadow-xl transition ${
                    plan.popular
                      ? "border-violet-600 bg-gradient-to-br from-violet-700 via-blue-600 to-cyan-500 text-white shadow-violet-300/40"
                      : "border-white/70 bg-white/70 text-slate-950 shadow-violet-100/40 backdrop-blur-2xl"
                  }`}
                >
                  {plan.popular && (
                    <span className="mb-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-black text-violet-600">
                      Most Popular
                    </span>
                  )}

                  <h3 className="text-xl font-black">{plan.name}</h3>

                  <div className="mt-4">
                    <span className="text-4xl font-black">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-sm opacity-80"> /month</span>}
                  </div>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="text-sm font-semibold">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/pricing"
                    className={`mt-8 block rounded-2xl px-5 py-3 text-center text-sm font-black transition ${
                      plan.popular
                        ? "bg-white text-violet-600 hover:bg-violet-50"
                        : "bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:opacity-90"
                    }`}
                  >
                    View Plan
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              badge="FAQ"
              title="Frequently asked questions"
              description="Everything hotels usually ask before getting started."
            />

            <div className="space-y-4">
              {faqs.map((faq) => (
                <GlassCard key={faq.q} className="p-6">
                  <h3 className="font-black text-slate-950">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{faq.a}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-24 pt-10 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-500 p-8 text-center text-white shadow-2xl shadow-violet-300/40 sm:p-10"
          >
            <p className="text-sm font-black uppercase tracking-[0.25em] text-violet-100">
              Ready To Grow?
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Never Miss a Booking Again
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-50 sm:text-lg">
              Let HospiAI answer guests 24/7, collect booking leads, and help your hotel grow faster.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-full bg-white px-8 py-4 font-black text-violet-600 transition hover:-translate-y-1"
              >
                Book Free Demo
              </Link>

              <Link
                to="/pricing"
                className="rounded-full border border-white/40 px-8 py-4 font-black text-white transition hover:bg-white/10"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}