import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
return ( <div className="min-h-screen bg-[#F8FAFC] text-slate-900"> <Navbar />

```
  <main className="px-4 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-5xl">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl sm:p-12">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Legal
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-4 text-slate-600">
            Last Updated: June 2026
          </p>
        </div>

        <div className="space-y-10 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              1. Acceptance of Terms
            </h2>

            <p className="mt-4 leading-7">
              By accessing or using HospiAI, you agree to comply with and be
              bound by these Terms & Conditions. If you do not agree with
              any part of these terms, you should discontinue use of the
              platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              2. About HospiAI
            </h2>

            <p className="mt-4 leading-7">
              HospiAI is a Software-as-a-Service (SaaS) platform that helps
              hotels automate guest communication through AI-powered Website
              Chat, WhatsApp messaging, Voice AI, lead collection, and
              analytics tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              3. User Responsibilities
            </h2>

            <p className="mt-4 leading-7">
              Customers are responsible for maintaining accurate hotel
              information, policies, room details, and business content
              provided to the platform. Users agree not to misuse the
              service or attempt unauthorized access to any part of the
              system.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              4. Subscription & Billing
            </h2>

            <p className="mt-4 leading-7">
              Certain HospiAI features may require a paid subscription.
              Pricing, plan limits, and available features may change from
              time to time. Customers will be notified of significant
              billing changes where required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              5. AI Responses
            </h2>

            <p className="mt-4 leading-7">
              HospiAI uses artificial intelligence to generate responses.
              While we strive for accuracy, AI-generated content may contain
              errors or omissions. Hotels remain responsible for verifying
              important information provided to guests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              6. Limitation of Liability
            </h2>

            <p className="mt-4 leading-7">
              HospiAI is provided on an "as available" and "as is" basis.
              To the maximum extent permitted by law, HospiAI shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising from use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              7. Service Availability
            </h2>

            <p className="mt-4 leading-7">
              We aim to provide reliable service but do not guarantee
              uninterrupted availability. Maintenance, updates, or external
              service interruptions may occasionally affect platform
              performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              8. Changes to Terms
            </h2>

            <p className="mt-4 leading-7">
              HospiAI may update these Terms & Conditions from time to time.
              Continued use of the platform after updates constitutes
              acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">
              9. Contact Information
            </h2>

            <p className="mt-4 leading-7">
              If you have questions regarding these Terms & Conditions,
              please contact the HospiAI team through our Contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  </main>

  <Footer />
</div>
);
}