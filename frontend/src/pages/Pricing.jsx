import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import PricingCard from "../components/PricingCard";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "£49",
      description: "Best for small hotels starting with AI website chat.",
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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <Navbar />

      <main>
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              badge="Pricing"
              title="Simple plans for modern hotels"
              description="Start with website chat, then upgrade to WhatsApp and Voice AI as your hotel grows."
            />

            <div className="grid gap-6 lg:grid-cols-4">
              {plans.map((plan) => (
                <PricingCard key={plan.name} {...plan} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-blue-100 bg-white p-8 text-center shadow-xl shadow-blue-100 sm:p-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Not sure which plan is right?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Book a free demo and we’ll help you choose the best HospiAI setup
              for your hotel.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Book Free Demo
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}