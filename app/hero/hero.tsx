export function Hero() {
    const handleScroll = (id: string) => {
        const el = document.getElementById(id)
        if (!el) return
        el.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className='flex flex-col gap-6 md:flex-row md:items-center'>
            <div className='flex-1'>

                <p className='text-sm tracking-[0.2em] text-sky-400 uppercase'>
                    Desenvolvedor Web
                </p>
                <h1 className='mt-3 text-3xl font-bold md:text-5xl'>
                    Olá, eu sou o{' '}
                    <span className='text-sky-400'>João Vytor</span>
                </h1>
                <p className='mt-4 text-slate-300'>
                    Construo aplicações web modernas usando React, Next.js e
                    TypeScript, focando em performance e boa experiência de
                    usuário.
                </p>
                <div className='mt-6 flex gap-4'>
                    <button
                        onClick={() => handleScroll('projects')}
                        className='rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-400'
                    >
                        Ver projetos
                    </button>
                    <button
                        onClick={() => handleScroll('contact')}
                        className='rounded-md border border-slate-600 px-4 py-2 text-sm font-medium transition hover:border-sky-400 hover:text-sky-400'
                    >
                        Fale comigo
                    </button>
                </div>
            </div>
        </div>
    )
}
