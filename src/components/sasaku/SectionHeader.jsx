function SectionHeader({
  label,
  title,
  subtitle,
  light = false,
  center = true,
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <p className="text-sky-500 text-xs font-semibold uppercase tracking-[0.25em] mb-3">
        {label}
      </p>
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? "text-white" : "text-slate-800"}`}
      >
        {title}
      </h2>
      <div
        className={`w-16 h-1 bg-sky-600 mt-4 ${center ? "mx-auto" : ""}`}
      ></div>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-gray-300" : "text-gray-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
