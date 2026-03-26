'use client'

import Link from 'next/link'
import { useState } from 'react'

const sections = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projetos' },
    { id: 'education', label: 'Educação' },
    { id: 'contact', label: 'Contato' },
]

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleScroll = (id: string) => {
        setMenuOpen(false)
        const el = document.getElementById(id)
        if (!el) return
        el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header className='sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur'>
            <nav className='mx-auto flex max-w-5xl items-center justify-between px-4 py-2 sm:px-6 sm:py-3'>
                <Link
                    href='#home'
                    className='cursor-none text-base font-semibold sm:text-lg'
                >
                    JV.dev
                </Link>

                <ul className='hidden flex-nowrap gap-4 text-sm sm:flex'>
                    {sections.map(function (s) {
                        return (
                            <li key={s.id}>
                                <button
                                    onClick={function () {
                                        handleScroll(s.id)
                                    }}
                                    className='cursor-none text-slate-300 transition hover:text-sky-400'
                                >
                                    {s.label}
                                </button>
                            </li>
                        )
                    })}
                </ul>

                <button
                    onClick={function () {
                        setMenuOpen(!menuOpen)
                    }}
                    className='flex cursor-none flex-col justify-center gap-1.5 p-2 sm:hidden'
                    aria-label='Abrir menu'
                >
                    <span
                        className={`block h-0.5 w-5 origin-center bg-slate-300 transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
                    />
                    <span
                        className={`block h-0.5 w-5 bg-slate-300 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
                    />
                    <span
                        className={`block h-0.5 w-5 origin-center bg-slate-300 transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
                    />
                </button>
            </nav>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${menuOpen ? 'max-h-96 border-t border-slate-800' : 'max-h-0'}`}
            >
                <ul className='flex flex-col gap-1 bg-slate-950/95 px-4 py-3'>
                    {sections.map(function (s) {
                        return (
                            <li key={s.id}>
                                <button
                                    onClick={function () {
                                        handleScroll(s.id)
                                    }}
                                    className='w-full cursor-none rounded-lg px-3 py-2.5 text-left text-sm text-slate-300 transition-all duration-200 hover:bg-slate-800/60 hover:text-sky-400'
                                >
                                    {s.label}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
    )
}
