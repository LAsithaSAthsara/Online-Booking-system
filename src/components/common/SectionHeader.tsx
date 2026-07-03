type SectionHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
}

export function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl dark:text-slate-100">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-slate-600 md:text-lg dark:text-slate-300">{subtitle}</p>}
    </div>
  )
}
