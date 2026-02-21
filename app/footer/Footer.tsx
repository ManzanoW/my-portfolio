import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const footerLinks = [
    {
        label: 'GitHub',
        href: 'https://github.com/ManzanoW',
        icon: FaGithub,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/joaovytormanzano',
        icon: FaLinkedin,
    },
    {
        label: 'E-mail',
        href: 'mailto:joaovytormanzano@gmail.com',
        icon: FaEnvelope,
    },
]

export function Footer() {
    return (
        <footer className='mt-16 border-t border-slate-800 bg-slate-950/80'>
            <div className='mx-auto flex max-w-5xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between'>
                <div>
                    <p className='text-sm text-slate-400'>
                        Aberto a oportunidades como desenvolvedor front-end /
                        full stack júnior.
                    </p>
                    <p className='mt-1 text-xs text-slate-500'>
                        © {new Date().getFullYear()} João Vytor. Todos os
                        direitos reservados.
                    </p>
                </div>

                <div className='flex flex-wrap gap-3 text-sm'>
                    {footerLinks.map(({ label, href, icon: Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={
                                href.startsWith('http') ? '_blank' : undefined
                            }
                            className='inline-flex cursor-none items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-slate-200 transition hover:border-sky-500 hover:bg-slate-900 hover:text-sky-400'
                        >
                            <Icon className='h-4 w-4' />
                            <span>{label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
