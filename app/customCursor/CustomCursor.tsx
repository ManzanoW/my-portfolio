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

        // posição alvo e posição atual (pra suavizar)
        let targetX = window.innerWidth / 2
        let targetY = window.innerHeight / 2
        let currentX = targetX
        let currentY = targetY
        let rafId: number | null = null

        const moveTarget = (e: PointerEvent) => {
            const { clientX, clientY } = e
            if (!clientX && !clientY) return
            targetX = clientX - radius
            targetY = clientY - radius

            cursor.style.opacity = '1'

            const target = e.target as HTMLElement | null
            const isClickable = !!target?.closest(
                "button, a, [role='button'], [data-clickable='true']"
            )
            cursor.classList.toggle('custom-cursor--pointer', isClickable)
        }

        const animate = () => {
            // interpolação (quanto menor o 0.2, mais lento / mais suave)
            currentX += (targetX - currentX) * 0.2
            currentY += (targetY - currentY) * 0.2

            cursor.style.left = `${currentX}px`
            cursor.style.top = `${currentY}px`

            rafId = window.requestAnimationFrame(animate)
        }

        const handlePointerMove = (e: PointerEvent) => moveTarget(e)
        const handlePointerDown = (e: PointerEvent) => moveTarget(e)
        const handlePointerUp = () => {
            if (isTouch) {
                // se quiser que suma depois do toque
                cursor.style.opacity = '0'
            }
        }

        window.addEventListener('pointermove', handlePointerMove, {
            passive: true,
        })
        window.addEventListener('pointerdown', handlePointerDown, {
            passive: true,
        })
        window.addEventListener('pointerup', handlePointerUp)

        rafId = window.requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('pointermove', handlePointerMove)
            window.removeEventListener('pointerdown', handlePointerDown)
            window.removeEventListener('pointerup', handlePointerUp)
            if (rafId) cancelAnimationFrame(rafId)
        }
    }, [])

    return <div className='custom-cursor' />
}
