export default function SectionHeader({ label, title, subtitle, center = true, light = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {label && (
        <p className={`text-xs font-semibold uppercase tracking-[0.25em] mb-3 ${light ? 'text-gold' : 'text-gold'}`}>
          {label}
        </p>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {center
        ? <div className="w-16 h-1 bg-gold mx-auto mt-4"></div>
        : <div className="w-16 h-1 bg-gold mt-4"></div>
      }
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
