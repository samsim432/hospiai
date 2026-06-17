import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SectionHeader({ badge, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-blue-100 bg-white/60 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-700 shadow-sm backdrop-blur-xl">
        {badge}
      </span>

      <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
        {description}
      </p>
    </div>
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
      icon: "🌙",
      title: "Guests message after hours",
      description:
        "Hotels miss booking questions at night, during busy reception hours, or when staff are unavailable.",
    },
    {
      icon: "⏱️",
      title: "Slow replies lose bookings",
      description:
        "When guests wait too long for room, price, or availability answers, they book with another hotel.",
    },
    {
      icon: "📞",
      title: "Reception gets overloaded",
      description:
        "Staff answer the same repeated questions about check-in, breakfast, parking, policies, and rooms.",
    },
  ];

  const features = [
    {
      icon: "💬",
      title: "Website Chat AI",
      description: "Answer guest questions directly on your hotel website 24/7.",
    },
    {
      icon: "📱",
      title: "WhatsApp AI",
      description: "Reply to guests where they already message your hotel.",
    },
    {
      icon: "☎️",
      title: "Voice AI Receptionist",
      description: "Handle common phone enquiries with AI voice support.",
    },
    {
      icon: "🧲",
      title: "Lead Collection",
      description: "Capture name, phone, email, and booking intent.",
    },
    {
      icon: "🤝",
      title: "Human Handover",
      description: "Escalate important conversations to real hotel staff.",
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Track questions, leads, and booking opportunities.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Guest asks a question",
      description:
        "A guest asks about rooms, pricing, breakfast, check-in, parking, or availability.",
    },
    {
      step: "02",
      title: "HospiAI replies instantly",
      description:
        "The AI uses your hotel information, FAQs, policies, and room details to answer clearly.",
    },
    {
      step: "03",
      title: "Lead is captured",
      description:
        "If the guest is interested, HospiAI collects details and alerts your hotel team.",
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
    <div className="min-h-screen overflow-hidden bg-[#F6FBFF] text-slate-900">
      <Navbar />

      <main className="relative">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/50 blur-3xl" />
          <div className="absolute -left-40 top-80 h-[420px] w-[420px] rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="absolute -right-40 top-[700px] h-[420px] w-[420px] rounded-full bg-indigo-200/40 blur-3xl" />
        </div>

        <section className="px-4 pb-16 pt-36 sm:px-6 lg:px-8 lg:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm font-black text-blue-700 shadow-sm backdrop-blur-2xl">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500" />
                24/7 AI Receptionist for Hotels
              </div>

              <h1 className="mt-8 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Never Miss a Booking Again
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
                HospiAI helps hotels reply to guests 24/7 through Website Chat,
                WhatsApp, and Voice Calls using AI.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-center text-sm font-black text-white shadow-2xl shadow-blue-300/40 transition hover:-translate-y-1"
                >
                  Book Free Demo
                </Link>

                <Link
                  to="/pricing"
                  className="rounded-full border border-white/70 bg-white/65 px-8 py-4 text-center text-sm font-black text-slate-800 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:text-blue-600"
                >
                  View Pricing
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-2xl border border-white/70 bg-white/60 px-4 py-3 text-center text-xs font-black text-slate-600 shadow-sm backdrop-blur-xl"
                  >
                    ✓ {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2.5rem] border border-white/70 bg-white/55 p-4 shadow-2xl shadow-blue-200/50 backdrop-blur-2xl">
                <div className="rounded-[2rem] border border-white/70 bg-slate-50/80 p-4">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="font-black text-slate-950">
                        HospiAI Receptionist
                      </p>
                      <p className="text-xs font-medium text-slate-500">
                        Live guest conversation
                      </p>
                    </div>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                      Online
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="max-w-[85%] rounded-3xl bg-white p-4 text-sm text-slate-700 shadow-sm">
                      Hi, do you have a deluxe room available this weekend?
                    </div>

                    <div className="ml-auto max-w-[90%] rounded-3xl bg-blue-600 p-4 text-sm leading-6 text-white shadow-lg shadow-blue-200">
                      Yes, we have deluxe rooms available. Would you like me to
                      collect your details for the booking team?
                    </div>

                    <div className="max-w-[80%] rounded-3xl bg-white p-4 text-sm text-slate-700 shadow-sm">
                      Yes please. My name is Alex.
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {["Lead saved", "Intent detected", "Staff notified"].map(
                      (item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/70 bg-white/70 p-3 text-center"
                        >
                          <p className="text-[11px] font-black text-blue-700">
                            {item}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              badge="Problems Hotels Face"
              title="Every missed message can become a missed booking"
              description="Modern guests expect quick replies. HospiAI helps hotels stay responsive even when reception is busy."
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((problem) => (
                <div
                  key={problem.title}
                  className="rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-xl shadow-blue-100/30 backdrop-blur-2xl transition hover:-translate-y-1"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-2xl">
                    {problem.icon}
                  </div>

                  <h3 className="text-lg font-black text-slate-950">
                    {problem.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/30 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-8 text-white shadow-2xl shadow-blue-300/40 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-100">
                  HospiAI Solution
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                  One AI receptionist for every guest channel
                </h2>

                <p className="mt-5 text-base leading-7 text-blue-50">
                  Answer repetitive questions, capture booking leads, and hand
                  over important conversations to real staff when needed.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "Instant guest replies",
                  "Booking intent detection",
                  "Lead detail collection",
                  "Human handover",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/25 bg-white/15 p-5 font-black backdrop-blur-xl"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              badge="Features"
              title="Everything your hotel needs to reply faster"
              description="HospiAI combines guest messaging, lead collection, human handover, and hotel-specific AI in one modern SaaS platform."
            />

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-[1.7rem] border border-white/70 bg-white/60 p-4 shadow-xl shadow-blue-100/30 backdrop-blur-2xl transition hover:-translate-y-1 sm:p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-xl sm:h-12 sm:w-12 sm:text-2xl">
                    {feature.icon}
                  </div>

                  <h3 className="text-sm font-black text-slate-950 sm:text-lg">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              badge="How It Works"
              title="From guest question to booking lead in minutes"
              description="HospiAI is designed to make guest communication simple, fast, and useful for hotel teams."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-xl shadow-blue-100/30 backdrop-blur-2xl"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
                    {item.step}
                  </div>

                  <h3 className="text-lg font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-600">
                  Website Chat AI
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  Turn your hotel website into a 24/7 booking assistant
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  Guests can ask questions directly on your website. HospiAI can
                  answer common questions, detect booking intent, and collect
                  lead details before your team replies.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    "Instant answers",
                    "Intent detection",
                    "Guest details",
                    "Staff handover",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/70 bg-white/60 p-4 text-sm font-black text-slate-700 shadow-sm backdrop-blur-xl"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-white/70 bg-white/60 p-5 shadow-2xl shadow-blue-200/40 backdrop-blur-2xl">
                <div className="rounded-[2rem] bg-slate-50/80 p-4">
                  <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-4">
                    <div>
                      <p className="font-black text-slate-950">
                        Everest Hotel Kathmandu
                      </p>
                      <p className="text-xs text-slate-500">
                        AI Receptionist Online
                      </p>
                    </div>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-black text-green-700">
                      Active
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="max-w-[85%] rounded-3xl bg-white p-4 text-sm text-slate-700 shadow-sm">
                      Do you have airport pickup?
                    </div>

                    <div className="ml-auto max-w-[90%] rounded-3xl bg-blue-600 p-4 text-sm leading-6 text-white">
                      Yes, airport pickup is available. Please share your
                      arrival date and flight time.
                    </div>

                    <div className="max-w-[80%] rounded-3xl bg-white p-4 text-sm text-slate-700 shadow-sm">
                      Great. I also need a family room.
                    </div>
                  </div>

                  <div className="mt-5 rounded-3xl border border-blue-100 bg-blue-50 p-4">
                    <p className="text-sm font-black text-blue-700">
                      Lead detected: Family room enquiry
                    </p>
                    <p className="mt-1 text-xs text-blue-600">
                      Guest is ready for staff follow-up.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              badge="Pricing"
              title="Simple pricing for every hotel"
              description="Choose the plan that fits your hotel size and guest communication needs."
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-[2rem] border p-6 shadow-xl transition hover:-translate-y-1 ${
                    plan.popular
                      ? "border-blue-600 bg-blue-600 text-white shadow-blue-300/40"
                      : "border-white/70 bg-white/60 text-slate-950 shadow-blue-100/30 backdrop-blur-2xl"
                  }`}
                >
                  {plan.popular && (
                    <span className="mb-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-black text-blue-600">
                      Most Popular
                    </span>
                  )}

                  <h3 className="text-xl font-black">{plan.name}</h3>

                  <div className="mt-4">
                    <span className="text-4xl font-black">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-sm opacity-80"> /month</span>
                    )}
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
                        ? "bg-white text-blue-600 hover:bg-blue-50"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    View Plan
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              badge="FAQ"
              title="Frequently asked questions"
              description="Everything hotels usually ask before getting started."
            />

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-xl shadow-blue-100/30 backdrop-blur-2xl"
                >
                  <h3 className="font-black text-slate-950">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 pt-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-10 text-center text-white shadow-2xl shadow-blue-300/40">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-100">
              Ready To Grow?
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Never Miss a Booking Again
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-50">
              Let HospiAI answer guests 24/7, collect booking leads, and help
              your hotel grow faster.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-full bg-white px-8 py-4 font-black text-blue-600 transition hover:-translate-y-1"
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}