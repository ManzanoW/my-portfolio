const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Node.js',
    'Git',
    'REST APIs',
]

export function Skills() {
    return (
        <div>
            <h2 className='mb-6 text-2xl font-semibold'>Skills</h2>
            <div className='flex flex-wrap gap-3'>
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className='rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-sm text-slate-200 transition hover:scale-[1.02] hover:border-sky-500 hover:bg-slate-900/80 hover:text-sky-400'
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}
