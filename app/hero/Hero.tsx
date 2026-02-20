import Image from 'next/image'

export function Hero() {
    const handleScroll = (id: string) => {
        const el = document.getElementById(id)
        if (!el) return
        el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id='home' className='flex min-h-screen items-center'>
            <div className='flex w-full flex-col gap-10 md:flex-row md:items-center'>
                {/* COLUNA TEXTO */}
                <div className='flex-1 space-y-4'>
                    <p className='text-sm tracking-[0.2em] text-sky-400 uppercase'>
                        Desenvolvedor Full-Stack
                    </p>
                    <h1 className='text-4xl font-bold md:text-5xl'>
                        Olá, eu sou o {''} <br />
                        <span className='text-sky-400'>{''}João Vytor</span>
                    </h1>
                    <p className='max-w-xl text-slate-300'>
                        Construo aplicações web modernas usando React, Next.js e
                        TypeScript, focando em performance e boa experiência de
                        usuário.
                    </p>
                    <div className='mt-6 flex gap-4'>
                        <button
                            onClick={() => handleScroll('projects')}
                            className='cursor-none rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-400'
                        >
                            Ver projetos
                        </button>
                        <button
                            onClick={() => handleScroll('contact')}
                            className='cursor-none rounded-md border border-slate-600 px-4 py-2 text-sm font-medium transition hover:border-sky-400 hover:text-sky-400'
                        >
                            Fale comigo
                        </button>
                    </div>
                </div>

                {/* COLUNA IMAGEM */}
                <div className='flex flex-1 justify-center max-[768px]:hidden md:justify-end'>
                    <div className='relative h-64 w-64 md:h-80 md:w-80'>
                        <div className='absolute inset-0 rounded-full bg-linear-to-tr from-sky-500 via-purple-500 to-amber-400 opacity-70 blur-2xl' />
                        <Image
                            src='/me-nobg.png'
                            alt='Foto de João Vytor, desenvolvedor'
                            width={320}
                            height={320}
                            className='relative h-full w-full rounded-full border-4 border-slate-900 shadow-xl transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-sky-500/40 hover:brightness-110'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
