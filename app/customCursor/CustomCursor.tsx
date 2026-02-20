'use client'

import { useEffect } from 'react'

export function CustomCursor() {
    useEffect(() => {
        const cursor = document.querySelector(
            '.custom-cursor'
        ) as HTMLDivElement | null
        if (!cursor) return

        const move = (e: MouseEvent) => {
            const size = 22
            const radius = size / 2

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
