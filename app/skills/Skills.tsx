const skillGroups = {
    Frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    Backend: ['Node.js', 'REST APIs', 'Express', 'MongoDB'],
    Ferramentas: [
        'Git',
        'VS Code',
        'Postman',
        'Docker',
        'Vercel',
        'Trello',
        'Figma',
        'Notion',
    ],
}

export function Skills() {
    return (
        <section>
            <h2 className='mb-6 text-2xl font-semibold'>Skills</h2>

            <div className='grid gap-4 md:grid-cols-3 md:items-start'>
                {Object.entries(skillGroups).map(([group, list]) => (
                    <div
                        key={group}
                        className='rounded-lg border border-slate-800/60 bg-slate-900/40 px-4 py-3 shadow-sm transition hover:border-sky-500'
                    >
                        <h3 className='mb-3 text-sm font-medium tracking-widest text-slate-400 uppercase'>
                            {group}
                        </h3>
                        <div className='flex flex-wrap gap-2'>
                            {list.map((skill) => (
                                <span
                                    key={skill}
                                    className='rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-200 transition hover:border-sky-500 hover:bg-slate-900 hover:text-sky-400'
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <p className='mt-3 text-sm text-slate-400 italic md:col-span-3'>
                Tecnologias que uso no dia a dia para construir interfaces e
                APIs simples.
            </p>
        </section>
    )
}
