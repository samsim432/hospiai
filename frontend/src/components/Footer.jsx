import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Demo", path: "/demo" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white">
                H
              </div>

              <div>
                <p className="text-lg font-bold text-slate-900">HospiAI</p>
                <p className="text-sm text-slate-500">
                  Never Miss a Booking Again
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
              HospiAI helps hotels reply to guests 24/7 through Website Chat,
              WhatsApp, and Voice Calls using AI.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:justify-items-end">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HospiAI. All rights reserved.</p>
          <p>AI Receptionist SaaS for modern hotels.</p>
        </div>
      </div>
    </footer>
  );
}