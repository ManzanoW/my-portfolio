'use client'

import { useEffect } from 'react'

export function PageGlow() {
    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            const x = e.clientX
            const y = e.clientY

            document.documentElement.style.setProperty('--glow-x', `${x}px`)
            document.documentElement.style.setProperty('--glow-y', `${y}px`)
        }

        window.addEventListener('pointermove', handleMove)
        return () => window.removeEventListener('pointermove', handleMove)
    }, [])

    return <div className='page-glow page-glow--active hidden sm:block' />
}
