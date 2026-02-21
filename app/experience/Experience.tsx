import { experience } from '../data/experience'

export function Experience() {
    return (
        <section id='experience' className='mt-16'>
            <h2 className='mb-4 text-2xl font-semibold'>Experiência</h2>

            <div className='space-y-4'>
                {experience.map((job) => (
                    <div
                        key={`${job.role}-${job.company}`}
                        className='rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition-colors hover:border-sky-500 hover:bg-slate-900/80 sm:p-5'
                    >
                        <div className='flex flex-wrap items-baseline justify-between gap-2'>
                            <h3 className='text-sm font-semibold text-slate-100'>
                                {job.role} · {job.company}
                            </h3>
                            <span className='text-xs text-slate-400'>
                                {job.period}
                            </span>
                        </div>

                        <ul className='mt-3 space-y-1 text-sm text-slate-300'>
                            {job.details.map((d) => (
                                <li key={d}>• {d}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
