'use client'

import { useEffect } from 'react'

export function CustomCursor() {
    useEffect(() => {
        const cursor = document.querySelector(
            '.custom-cursor'
        ) as HTMLDivElement | null
        if (!cursor) return

        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0

        const size = 22
        const radius = size / 2

        const move = (e: PointerEvent) => {
            const { clientX, clientY } = e
            if (!clientX && !clientY) return

            cursor.style.left = `${clientX - radius}px`
            cursor.style.top = `${clientY - radius}px`
            cursor.style.opacity = '1'

            const target = e.target as HTMLElement | null
            const isClickable = !!target?.closest(
                "button, a, [role='button'], [data-clickable='true']"
            )

            cursor.classList.toggle('custom-cursor--pointer', isClickable)
        }

        const handlePointerMove = (e: PointerEvent) => move(e)
        const handlePointerDown = (e: PointerEvent) => move(e)
        const handlePointerUp = () => {
            if (isTouch) {
                // em touch some depois do toque
                cursor.style.opacity = '0'
            }
        }

        window.addEventListener('pointermove', handlePointerMove)
        window.addEventListener('pointerdown', handlePointerDown)
        window.addEventListener('pointerup', handlePointerUp)

        return () => {
            window.removeEventListener('pointermove', handlePointerMove)
            window.removeEventListener('pointerdown', handlePointerDown)
            window.removeEventListener('pointerup', handlePointerUp)
        }
    }, [])

    return <div className='custom-cursor' />
}
