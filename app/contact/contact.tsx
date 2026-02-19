export function Contact() {
    return (
        <div className='max-w-xl'>
            <h2 className='mb-4 text-2xl font-semibold'>Contato</h2>
            <p className='mb-6 text-slate-300'>
                Quer conversar sobre vagas, freelas ou projetos? Me manda uma
                mensagem.
            </p>
            <form className='space-y-4'>
                <div>
                    <label
                        className='mb-1 block text-sm text-slate-300'
                        htmlFor='name'
                    >
                        Nome
                    </label>
                    <input
                        id='name'
                        type='text'
                        className='w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none'
                    />
                </div>
                <div>
                    <label
                        className='mb-1 block text-sm text-slate-300'
                        htmlFor='email'
                    >
                        E-mail
                    </label>
                    <input
                        id='email'
                        type='email'
                        className='w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none'
                    />
                </div>
                <div>
                    <label
                        className='mb-1 block text-sm text-slate-300'
                        htmlFor='message'
                    >
                        Mensagem
                    </label>
                    <textarea
                        id='message'
                        rows={4}
                        className='w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none'
                    />
                </div>
                <button
                    type='submit'
                    className='cursor-pointer rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-400'
                >
                    Enviar
                </button>
            </form>
        </div>
    )
}
