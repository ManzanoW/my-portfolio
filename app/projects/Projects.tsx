import Image from 'next/image'
import { projects } from '../data/projects'

export function Projects() {
    return (
        <section id='projects'>
            <h2 className='mb-6 text-2xl font-semibold'>Projetos</h2>

            <div className='grid gap-6 md:grid-cols-2'>
                {projects.map((p) => (
                    <article
                        key={p.title}
                        className={`overflow-hidden rounded-xl border bg-slate-900/60 transition hover:border-sky-500 hover:bg-slate-900`}
                    >
                        {p.image && (
                            <div className='relative h-40 w-full md:h-44'>
                                <Image
                                    src={p.image}
                                    alt={`Screenshot do projeto ${p.title}`}
                                    fill
                                    className='object-cover transition-transform duration-500 ease-out hover:scale-105'
                                />
                            </div>
                        )}

                        <div className='p-4 md:p-5'>
                            <h3 className='text-lg font-semibold text-slate-50'>
                                {p.title}
                            </h3>

                            <p className='mt-2 text-sm text-slate-300'>
                                {p.description}
                            </p>

                            {p.highlights && (
                                <ul className='mt-2 space-y-1 text-xs text-slate-400'>
                                    {p.highlights.map((h) => (
                                        <li key={h}>• {h}</li>
                                    ))}
                                </ul>
                            )}

                            <div className='mt-3 flex flex-wrap gap-2 text-xs text-sky-300'>
                                {p.techs.map((t) => (
                                    <span
                                        key={t}
                                        className='rounded-full bg-slate-800/80 px-2 py-1'
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className='mt-4 flex flex-wrap gap-3 text-sm'>
                                {p.liveUrl && (
                                    <a
                                        href={p.liveUrl}
                                        target='_blank'
                                        className='cursor-none rounded-md bg-sky-500 px-3 py-1.5 text-xs font-medium text-slate-950 transition hover:bg-sky-400'
                                    >
                                        Ver projeto
                                    </a>
                                )}
                                {p.codeUrl && (
                                    <a
                                        href={p.codeUrl}
                                        target='_blank'
                                        className='cursor-none py-1.5 text-xs font-medium text-slate-300 underline-offset-4 hover:text-sky-400 hover:underline'
                                    >
                                        Ver código
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
