'use client'

import { useEffect } from 'react'

export function CustomCursor() {
    useEffect(() => {
        // roda só no client
        const canHover =
            window.matchMedia &&
            window.matchMedia('(hover: hover) and (pointer: fine)').matches

        if (!canHover) return // em mobile/tablet não faz nada

        const cursor = document.querySelector(
            '.custom-cursor'
        ) as HTMLDivElement | null
        if (!cursor) return

        const size = 22
        const radius = size / 2

        const move = (e: PointerEvent) => {
            cursor.style.left = `${e.clientX - radius}px`
            cursor.style.top = `${e.clientY - radius}px`
        }

        window.addEventListener('pointermove', move)
        return () => window.removeEventListener('pointermove', move)
    }, [])

    // o elemento existe sempre, mas só é usado no desktop
    return <div className='custom-cursor' />
}
