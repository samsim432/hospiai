import { Link } from "react-router-dom";

export default function PricingCard({
  name,
  price,
  description,
  features,
  highlighted,
}) {
  return (
    <div
      className={`relative rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        highlighted
          ? "border-blue-300 bg-blue-600 text-white shadow-xl shadow-blue-200"
          : "border-slate-200 bg-white text-slate-900 shadow-sm hover:shadow-blue-100"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-6 rounded-full bg-white px-4 py-1 text-xs font-bold text-blue-600 shadow">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-bold">{name}</h3>

      <p
        className={`mt-3 text-sm leading-6 ${
          highlighted ? "text-blue-50" : "text-slate-600"
        }`}
      >
        {description}
      </p>

      <div className="mt-6">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Custom" && (
          <span
            className={`text-sm ${
              highlighted ? "text-blue-100" : "text-slate-500"
            }`}
          >
            /month
          </span>
        )}
      </div>

      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li
            key={feature}
            className={`flex gap-3 text-sm ${
              highlighted ? "text-blue-50" : "text-slate-600"
            }`}
          >
            <span className={highlighted ? "text-white" : "text-green-500"}>
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`mt-8 block rounded-2xl px-5 py-3 text-center text-sm font-bold transition ${
          highlighted
            ? "bg-white text-blue-600 hover:bg-blue-50"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Book Free Demo
      </Link>
    </div>
  );
}