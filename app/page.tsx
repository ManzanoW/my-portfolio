'use client'

import { Header } from './header/Header'
import { Hero } from './hero/Hero'
import { About } from './about/About'
import { Skills } from './skills/Skills'
import { Projects } from './projects/Projects'
import { Contact } from './contact/Contact'
import { Education } from './education/Education'
import { DownloadCVButton } from './downloadCVButton/DownloadCVButton'
import { Experience } from './experience/Experience'

export default function Home() {
    return (
        <div>
            <Header />
            <main className='no-scrollbar mx-auto max-w-5xl px-4'>
                <section id='home' className='flex min-h-screen items-center'>
                    <Hero />
                </section>
                <DownloadCVButton />
                <section id='about' className='py-20'>
                    <About />
                </section>
                <section id='skills' className='py-20'>
                    <Skills />
                </section>
                <section id='projects' className='py-20'>
                    <Projects />
                </section>
                <section id='experience' className='py-20'>
                    <Experience />
                </section>
                <section id='education' className='py-20'>
                    <Education />
                </section>
                <section id='contact' className='py-20 pb-32'>
                    <Contact />
                </section>
            </main>
        </div>
    )
}
