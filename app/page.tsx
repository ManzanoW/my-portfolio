'use client'

import { Header } from './header/header'
import { Hero } from './hero/hero'
import { About } from './about/about'
import { Skills } from './skills/skills'
import { Projects } from './projects/projects'
import { Contact } from './contact/contact'

export default function Home() {
    return (
        <div className='bg-slate-950 text-slate-300 no'>
            <Header />
            <main className='no-scrollbar mx-auto max-w-5xl px-4'>
                <section id='home' className='flex min-h-screen items-center'>
                    <Hero />
                </section>
                <section id='about' className='py-20'>
                    <About />
                </section>
                <section id='skills' className='py-20'>
                    <Skills />
                </section>
                <section id='projects' className='py-20'>
                    <Projects />
                </section>
                <section id='contact' className='py-20 pb-32'>
                    <Contact />
                </section>
            </main>
        </div>
    )
}
