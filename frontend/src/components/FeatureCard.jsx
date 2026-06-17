export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-slate-900">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}