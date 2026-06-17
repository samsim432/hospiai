import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hotelName: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      hotelName: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <Navbar />

      <main className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Book Free Demo
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
              See how HospiAI can help your hotel
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Request a free demo and discover how an AI receptionist can answer
              guests 24/7, collect leads, and help your hotel get more bookings.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Website Chat AI",
                "WhatsApp AI",
                "Voice AI Receptionist",
                "Lead Collection",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-blue-100 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Request Demo
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Fill in your details and our team will contact you.
            </p>

            {success && (
              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                Demo request received successfully. We will contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Name
                </label>
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition hover:border-blue-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition hover:border-blue-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44 7700 000000"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition hover:border-blue-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Hotel Name
                </label>
                <input
                  name="hotelName"
                  required
                  value={formData.hotelName}
                  onChange={handleChange}
                  placeholder="Your hotel name"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition hover:border-blue-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your hotel..."
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition hover:border-blue-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-blue-600 px-5 py-4 font-bold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              >
                Request Demo
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}