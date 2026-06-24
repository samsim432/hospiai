import { Link } from "react-router-dom";

export default function PricingCard({
  name,
  price,
  description,
  features,
  highlighted,
  icon,
}) {
  return (
    <div
      className={`group relative flex min-h-[430px] flex-col overflow-hidden rounded-[2rem] border p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 ${
        highlighted
          ? "border-violet-500 bg-gradient-to-br from-violet-700 via-blue-600 to-cyan-500 text-white shadow-violet-300/50"
          : "border-white/70 bg-white/75 text-slate-950 shadow-violet-100/50 backdrop-blur-2xl"
      }`}
    >
      {highlighted && (
        <div className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-wide text-violet-700">
          Popular
        </div>
      )}

      <div
        className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${
          highlighted
            ? "bg-white/20"
            : "bg-gradient-to-br from-violet-50 to-blue-50"
        }`}
      >
        <img src={icon} alt={name} className="h-9 w-9" />
      </div>

      <h3 className="text-2xl font-black tracking-tight">{name}</h3>

      <p
        className={`mt-2 line-clamp-3 text-sm leading-6 ${
          highlighted ? "text-blue-50" : "text-slate-600"
        }`}
      >
        {description}
      </p>

      <div className="mt-6">
        <span className="text-5xl font-black">{price}</span>
        {price !== "Custom" && (
          <span
            className={`text-sm font-semibold ${
              highlighted ? "text-blue-50" : "text-slate-500"
            }`}
          >
            {" "}
            /month
          </span>
        )}
      </div>

      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className={`flex gap-2 text-sm font-bold leading-5 ${
              highlighted ? "text-white" : "text-slate-700"
            }`}
          >
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] ${
                highlighted
                  ? "bg-white/20 text-white"
                  : "bg-violet-100 text-violet-700"
              }`}
            >
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`mt-auto rounded-full px-4 py-3 text-center text-sm font-black transition ${
          highlighted
            ? "bg-white text-violet-700 hover:bg-violet-50"
            : "bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:opacity-90"
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}