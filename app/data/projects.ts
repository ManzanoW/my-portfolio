export const projects = [
    {
        title: 'Portfolio Next.js',
        description:
            'Este próprio portfólio, construído com Next.js, TypeScript e Tailwind CSS.',
        techs: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        liveUrl: 'https://my-portfolio-beta-flax-uo1wwytg9x.vercel.app/',
        codeUrl: 'https://github.com/ManzanoW/my-portfolio',
        highlights: [
            'Layout responsivo com foco em legibilidade e experiência de recrutadores.',
            'Formulário de contato integrado a serviço externo de envio de e-mails.',
            'Animações sutis, custom cursor e efeitos de glow sem comprometer performance.',
        ],
        image: '/portfolio.png',
    },
    {
        title: 'VitaWave',
        description:
            'Aplicação web para gestão de consultas de saúde, com login, dashboard e agendamento.',
        techs: ['React', 'React Router', 'localStorage'],
        liveUrl: 'https://vita-wave.vercel.app/',
        codeUrl: 'https://github.com/ManzanoW/VitaWave',
        highlights: [
            'Fluxo completo de autenticação com proteção de rotas usando React Router.',
            'Persistência de dados no localStorage para manter sessões e agendamentos.',
            'Interface pensada para o uso diário em clínicas, com navegação muito simples e direta.',
        ],
        image: '/vitawave1.png',
    },
]
