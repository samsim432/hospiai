import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";

export default function Demo() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Product Demo
            </div>

            <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
              See HospiAI in Action
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Discover how HospiAI helps hotels answer guests 24/7, collect
              booking leads, and reduce reception workload.
            </p>
          </div>
        </section>

        {/* Website Chat */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              badge="Website Chat AI"
              title="Instant answers on your website"
              description="Turn your hotel website into a booking assistant."
            />

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
              <div className="space-y-4">
                <div className="max-w-[80%] rounded-2xl bg-slate-100 p-4">
                  Hi, do you have family rooms available this weekend?
                </div>

                <div className="ml-auto max-w-[85%] rounded-2xl bg-blue-600 p-4 text-white">
                  Yes. Family rooms are available. Would you like me to collect
                  your details for our booking team?
                </div>

                <div className="max-w-[80%] rounded-2xl bg-slate-100 p-4">
                  Yes please.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp + Voice */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                📱
              </div>

              <h3 className="text-2xl font-bold">
                WhatsApp AI
              </h3>

              <p className="mt-4 text-slate-600">
                Guests can ask questions through WhatsApp and receive instant
                hotel-specific answers.
              </p>

              <div className="mt-6 rounded-3xl bg-slate-50 p-4">
                <div className="max-w-[80%] rounded-2xl bg-white p-3 shadow-sm">
                  Is breakfast included?
                </div>

                <div className="ml-auto mt-3 max-w-[85%] rounded-2xl bg-green-500 p-3 text-white">
                  Yes. Breakfast is included with selected room plans.
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                ☎️
              </div>

              <h3 className="text-2xl font-bold">
                Voice AI Receptionist
              </h3>

              <p className="mt-4 text-slate-600">
                Let AI answer common phone enquiries and capture booking intent.
              </p>

              <div className="mt-6 rounded-3xl bg-slate-50 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                    AI
                  </div>

                  <div>
                    <p className="font-semibold">
                      Incoming Call
                    </p>

                    <p className="text-sm text-slate-500">
                      Guest asking about room availability
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-2 rounded-full bg-purple-100">
                  <div className="h-2 w-2/3 rounded-full bg-purple-600" />
                </div>

                <p className="mt-3 text-sm font-semibold text-purple-700">
                  AI collecting guest information...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Collection */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              badge="Lead Collection"
              title="Never lose a booking enquiry"
              description="HospiAI captures guest details automatically."
            />

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Guest Name</p>
                  <p className="mt-2 font-bold">Alex Johnson</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="mt-2 font-bold">+44 7700 000000</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Interest</p>
                  <p className="mt-2 font-bold">Family Room</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Status</p>
                  <p className="mt-2 font-bold text-green-600">
                    Qualified Lead
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              badge="Hotel Dashboard"
              title="Manage everything in one place"
              description="View conversations, leads, analytics, and AI settings."
            />

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl">
              <div className="grid gap-6 md:grid-cols-4">
                {[
                  "Today's Leads",
                  "Active Conversations",
                  "Guest Messages",
                  "AI Response Rate",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl bg-slate-50 p-6 text-center"
                  >
                    <p className="text-sm text-slate-500">{item}</p>

                    <p className="mt-3 text-3xl font-bold text-blue-600">
                      24
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-center text-white shadow-2xl shadow-blue-200">
            <h2 className="text-4xl font-bold">
              Ready to See HospiAI Live?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
              Book a free demo and discover how HospiAI can help your hotel get
              more bookings.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-bold text-blue-600 transition hover:-translate-y-1 hover:shadow-xl"
            >
              Book a Free Demo
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}