const learningNow = [
    'Melhorando arquitetura de projetos com Next.js e padrões de organização.',
    'Praticando consumo de APIs REST com boas práticas de erro e loading.',
]

const nextSteps = [
    'Estudar padrões de projeto e boas práticas de back-end com Node.js.',
    'Explorar fundamentos de cloud (AWS / serviços básicos para aplicações web).',
    'Aprofundar uso de Docker para criar ambientes de desenvolvimento.',
    'Aprender mais sobre deploy e CI/CD (GitHub Actions, pipelines básicos).',
]

export function LearningRoadmap() {
    return (
        <section className='mt-16'>
            <h2 className='mb-4 text-2xl font-semibold'>
                Roadmap de aprendizado
            </h2>

            <p className='mb-6 text-sm text-slate-300'>
                Estou sempre estudando para evoluir como desenvolvedor. Aqui
                está no que estou focando agora e quais são os próximos passos.
            </p>

            <div className='grid gap-6 md:grid-cols-2'>
                <div className='rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-sky-500/50 sm:p-5'>
                    <h3 className='mb-3 text-xs font-semibold tracking-[0.18em] text-sky-400 uppercase'>
                        Estudando agora
                    </h3>
                    <ul className='space-y-2 text-sm text-slate-300'>
                        {learningNow.map((item) => (
                            <li key={item}>• {item}</li>
                        ))}
                    </ul>
                </div>

                <div className='rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-sky-500/50 sm:p-5'>
                    <h3 className='mb-3 text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase'>
                        Próximos passos
                    </h3>
                    <ul className='space-y-2 text-sm text-slate-300'>
                        {nextSteps.map((item) => (
                            <li key={item}>• {item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
