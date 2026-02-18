import { projects } from '../data/projects'

export function Projects() {
    return (
        <div>
            <h2 className='mb-6 text-2xl font-semibold'>Projetos</h2>
            <div className='grid gap-6 md:grid-cols-2'>
                {projects.map((p) => (
                    <article
                        key={p.title}
                        className='rounded-lg border border-slate-800 bg-slate-900/60 p-4 transition hover:border-sky-500'
                    >
                        <h3 className='text-lg font-semibold'>{p.title}</h3>
                        <p className='mt-2 text-sm text-slate-300'>
                            {p.description}
                        </p>
                        <div className='mt-3 flex flex-wrap gap-2 text-xs text-sky-300'>
                            {p.techs.map((t) => (
                                <span
                                    key={t}
                                    className='rounded-full bg-slate-800 px-2 py-1'
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className='mt-4 flex gap-3 text-sm'>
                            {p.liveUrl && (
                                <a
                                    href={p.liveUrl}
                                    target='_blank'
                                    className='text-sky-400 hover:underline'
                                >
                                    Live
                                </a>
                            )}
                            {p.codeUrl && (
                                <a
                                    href={p.codeUrl}
                                    target='_blank'
                                    className='text-slate-300 hover:underline'
                                >
                                    Código
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
