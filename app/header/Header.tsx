'use client'

import Link from 'next/link'

const sections = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projetos' },
    { id: 'education', label: 'Educação' },
    { id: 'contact', label: 'Contato' },
]

export function Header() {
    const handleScroll = (id: string) => {
        const el = document.getElementById(id)
        if (!el) return
        el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className='sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur'>
            <nav className='mx-auto flex max-w-5xl items-center justify-between px-4 py-3'>
                <Link href='#home' className='text-lg font-semibold'>
                    JV.dev
                </Link>
                <ul className='flex gap-4 text-sm'>
                    {sections.map((s) => (
                        <li key={s.id}>
                            <button
                                onClick={() => handleScroll(s.id)}
                                className='cursor-pointer text-slate-300 transition hover:text-sky-400'
                            >
                                {s.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
