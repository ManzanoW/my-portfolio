'use client'

import { useEffect } from 'react'

export function CustomCursor() {
    useEffect(() => {
        // só ativa em devices com mouse/hover
        const canHover =
            window.matchMedia &&
            window.matchMedia('(hover: hover) and (pointer: fine)').matches

        if (!canHover) return

        const cursor = document.querySelector(
            '.custom-cursor'
        ) as HTMLDivElement | null
        if (!cursor) return

        const size = 22
        const radius = size / 2

        const move = (e: PointerEvent) => {
            cursor.style.left = `${e.clientX - radius}px`
            cursor.style.top = `${e.clientY - radius}px`

            const target = e.target as HTMLElement | null
            const isClickable = !!target?.closest(
                "button, a, [role='button'], [data-clickable='true']"
            )

            cursor.classList.toggle('custom-cursor--pointer', isClickable)
        }

        window.addEventListener('pointermove', move)
        return () => window.removeEventListener('pointermove', move)
    }, [])

    return <div className='custom-cursor' />
}
