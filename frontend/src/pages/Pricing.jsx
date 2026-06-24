import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";

function SectionTitle({ badge, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-violet-200 bg-white/70 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-violet-700 shadow-sm backdrop-blur-xl">
        {badge}
      </span>

      <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
        {title}
      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "Starter",
      price: "£49",
      description: "Best for small hotels starting with AI website chat.",
      icon: "https://img.icons8.com/fluency/96/chatbot.png",
      features: [
        "Website Chat AI",
        "Basic lead collection",
        "FAQ-based answers",
        "Conversation history",
        "Email support",
      ],
    },
    {
      name: "Growth",
      price: "£99",
      description: "Best for growing hotels that want more guest channels.",
      icon: "https://img.icons8.com/fluency/96/artificial-intelligence.png",
      highlighted: true,
      features: [
        "Everything in Starter",
        "WhatsApp AI preview",
        "Advanced lead collection",
        "Human handover",
        "Basic analytics",
      ],
    },
    {
      name: "Premium",
      price: "£199",
      description: "Best for hotels that want full AI receptionist power.",
      icon: "https://img.icons8.com/fluency/96/voice-recognition-scan.png",
      features: [
        "Everything in Growth",
        "Voice AI Receptionist",
        "Advanced analytics",
        "Priority support",
        "Custom hotel setup",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Best for hotel groups and multi-property businesses.",
      icon: "https://img.icons8.com/fluency/96/organization.png",
      features: [
        "Multi-hotel setup",
        "Custom integrations",
        "Dedicated onboarding",
        "Custom AI workflows",
        "Dedicated support",
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8F7FF] text-slate-900">
      <Navbar />

      <main className="relative">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-300/40 blur-3xl" />
          <div className="absolute -left-44 top-80 h-[430px] w-[430px] rounded-full bg-blue-300/35 blur-3xl" />
          <div className="absolute -right-44 top-[700px] h-[430px] w-[430px] rounded-full bg-fuchsia-300/30 blur-3xl" />
        </div>

        <section className="px-4 pb-12 pt-24 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              badge="Pricing"
              title="Simple plans for modern hotels"
              description="Start with website chat, then upgrade to WhatsApp and Voice AI as your hotel grows."
            />

            <div className="grid grid-cols-2 gap-3 lg:hidden">
              {plans.map((plan) => (
                <button
                  key={plan.name}
                  onClick={() => setSelectedPlan(plan)}
                  className={`relative aspect-square rounded-[2rem] border p-4 text-left shadow-xl transition active:scale-95 ${
                    plan.highlighted
                      ? "border-violet-500 bg-gradient-to-br from-violet-700 via-blue-600 to-cyan-500 text-white shadow-violet-300/50"
                      : "border-white/70 bg-white/80 text-slate-950 shadow-violet-100/50 backdrop-blur-2xl"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute right-3 top-3 rounded-full bg-white px-2 py-1 text-[8px] font-black uppercase text-violet-700">
                      Popular
                    </span>
                  )}

                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${
                      plan.highlighted ? "bg-white/20" : "bg-violet-50"
                    }`}
                  >
                    <img src={plan.icon} alt={plan.name} className="h-8 w-8" />
                  </div>

                  <h3 className="text-lg font-black">{plan.name}</h3>

                  <div className="mt-3">
                    <span className="text-3xl font-black">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span
                        className={`text-[10px] font-bold ${
                          plan.highlighted ? "text-blue-50" : "text-slate-500"
                        }`}
                      >
                        {" "}
                        /month
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-3 text-[10px] font-bold ${
                      plan.highlighted ? "text-blue-50" : "text-violet-600"
                    }`}
                  >
                    Tap to view details
                  </p>
                </button>
              ))}
            </div>

            <div className="hidden gap-6 lg:grid lg:grid-cols-4">
              {plans.map((plan) => (
                <PricingCard key={plan.name} {...plan} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/70 p-6 text-center shadow-2xl shadow-violet-100/60 backdrop-blur-2xl sm:p-12">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-100 to-blue-100">
              <img
                src="https://img.icons8.com/fluency/96/customer-support.png"
                alt="Support"
                className="h-10 w-10"
              />
            </div>

            <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Not sure which plan is right?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Book a free demo and we’ll help you choose the best HospiAI setup
              for your hotel.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 px-8 py-4 text-sm font-black text-white shadow-xl shadow-violet-300/40 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              Book Free Demo
            </a>
          </div>
        </section>
      </main>

      {selectedPlan && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/50 px-4 pb-4 backdrop-blur-sm lg:hidden">
          <div className="w-full max-w-md rounded-[2rem] border border-white/70 bg-white p-5 shadow-2xl">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50">
                  <img
                    src={selectedPlan.icon}
                    alt={selectedPlan.name}
                    className="h-8 w-8"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-950">
                    {selectedPlan.name}
                  </h3>
                  <p className="text-sm font-bold text-violet-600">
                    {selectedPlan.price}
                    {selectedPlan.price !== "Custom" && " /month"}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedPlan(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl font-black text-slate-700"
              >
                ×
              </button>
            </div>

            <p className="text-sm leading-6 text-slate-600">
              {selectedPlan.description}
            </p>

            <ul className="mt-5 space-y-3">
              {selectedPlan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-sm font-bold text-slate-700"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs text-violet-700">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className="mt-6 block rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-4 text-center text-sm font-black text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}