import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { PageGlow } from './pageGlow/PageGlow'
import { CustomCursor } from './customCursor/CustomCursor'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'João Vytor | Portfólio',
    description: 'Portfólio de desenvolvedor web (React, Next.js, TypeScript).',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='pt-BR'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
            >
                <CustomCursor />
                <PageGlow />
                <div className='relative z-10'>{children}</div>
            </body>
        </html>
    )
}
