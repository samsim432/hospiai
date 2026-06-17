export default function SectionTitle({ badge, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {badge && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
          {badge}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}