import Image from 'next/image'

export function Hero() {
    const handleScroll = (id: string) => {
        const el = document.getElementById(id)
        if (!el) return
        el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id='home' className='flex pt-20 md:items-center md:pt-12'>
            <div className='flex w-full flex-col gap-10 md:flex-row md:items-center'>
                {/* COLUNA TEXTO */}
                <div className='z-1 flex-1 space-y-4'>
                    <p className='text-center text-xs tracking-[0.25em] text-sky-400 uppercase md:text-left'>
                        Desenvolvedor Full-Stack
                    </p>
                    <h1 className='text-center text-4xl leading-tight font-bold md:text-left md:text-5xl'>
                        Olá, eu sou o {''} <br />
                        <span className='text-sky-400'>{''}João Vytor</span>
                    </h1>
                    <p className='max-w-xl text-center text-sm text-slate-300 md:text-left md:text-base'>
                        Construo aplicações web modernas usando React.js, Next.js e
                        TypeScript, focando em performance e boa experiência de
                        usuário.
                    </p>
                    <div className='mt-6 flex justify-center gap-4 md:justify-start'>
                        <button
                            onClick={() => handleScroll('projects')}
                            className='w-full cursor-none rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-400 sm:w-auto'
                        >
                            Ver projetos
                        </button>
                        <button
                            onClick={() => handleScroll('contact')}
                            className='w-full cursor-none rounded-md border border-slate-600 px-4 py-2 text-sm font-medium transition hover:border-sky-400 hover:text-sky-400 sm:w-auto'
                        >
                            Fale comigo
                        </button>
                        <a
                            href='/Joao_Vytor_Dev_FullStack_Jr.pdf'
                            download
                            className='w-full cursor-none rounded-md border border-slate-600 px-5 py-2.5 text-center text-sm font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-400 sm:w-auto md:hidden'
                        >
                            Baixar currículo
                        </a>
                    </div>
                </div>

                {/* COLUNA IMAGEM */}
                <div className='flex flex-2 justify-center md:flex-1 md:justify-end'>
                    <div className='relative h-52 w-52 select-none md:h-80 md:w-80'>
                        <div className='absolute inset-0 rounded-full bg-linear-to-tr from-sky-500 via-purple-500 to-amber-400 opacity-60 blur-2xl' />
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
