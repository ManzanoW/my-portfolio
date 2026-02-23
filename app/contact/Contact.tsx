'use client'

import { SubmitEvent, useState } from 'react'

export function Contact() {
    const [isSending, setIsSending] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSending(true)
        setIsSent(false)
        setError(null)

        const form = e.currentTarget
        const formData = new FormData(form)
        formData.append('access_key', process.env.NEXT_PUBLIC_W3F_KEY ?? '')

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            })

            const data = await res.json()

            if (data.success) {
                setIsSent(true)
                setError(null) // garante que não fica erro antigo
                form.reset()
            } else {
                setIsSent(false)
                setError(
                    data.message || 'Não foi possível enviar. Tente novamente.'
                )
            }
        } catch {
            setIsSent(false)
            setError('Erro de conexão. Tente novamente.')
        } finally {
            setIsSending(false)
        }
    }

    return (
        <div className='max-w-xl rounded-md border border-slate-700 bg-slate-900/60 p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-sky-500/50'>
            <h2 className='mb-2 text-2xl font-semibold'>Contato</h2>
            <p className='mb-6 text-sm text-slate-300'>
                Quer conversar sobre vagas, freelas ou projetos? Me manda uma
                mensagem.
            </p>

            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label
                        className='mb-1 block cursor-none text-sm text-slate-300'
                        htmlFor='name'
                    >
                        Nome
                    </label>
                    <input
                        id='name'
                        name='name'
                        required
                        className='z-1 w-full cursor-none rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 transition hover:border-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
                    />
                </div>

                <div>
                    <label
                        className='mb-1 block cursor-none text-sm text-slate-300'
                        htmlFor='email'
                    >
                        E-mail
                    </label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        required
                        className='w-full cursor-none rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 transition hover:border-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
                    />
                </div>

                <div>
                    <label
                        className='mb-1 block cursor-none text-sm text-slate-300'
                        htmlFor='message'
                    >
                        Mensagem
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        rows={4}
                        required
                        className='w-full cursor-none rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 transition hover:border-slate-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none'
                    />
                </div>

                {error && <p className='text-sm text-red-400'>{error}</p>}
                {isSent && (
                    <p className='text-sm text-emerald-400'>
                        Mensagem enviada com sucesso! Vou te responder em breve.
                    </p>
                )}

                <button
                    type='submit'
                    disabled={isSending}
                    className='cursor-none rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60'
                >
                    {isSending ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </div>
    )
}
