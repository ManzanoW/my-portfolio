export const projects = [
    {
        title: 'Líder Celulares',
        description:
            'Landing page profissional desenvolvida para uma assistência técnica autorizada em Santos/SP com mais de 414 avaliações no Google. Foco em conversão via WhatsApp com SEO local completo.',
        techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
        liveUrl: 'https://lider-celulares.vercel.app',
        codeUrl: 'https://github.com/ManzanoW/lider-celulares',
        image: '/lider-celulares.png',
        highlights: [
            'Cards de serviços clicáveis que abrem o WhatsApp com mensagem pré-preenchida por serviço.',
            'SEO local completo com schema.org LocalBusiness, Open Graph e meta tags otimizadas.',
            'Botão flutuante de WhatsApp com reposicionamento automático via IntersectionObserver ao chegar no footer.',
        ],
    },
    {
        title: 'FinTrack',
        description:
            'Aplicação full stack de controle financeiro pessoal para registrar entradas e saídas, visualizar saldo e acompanhar gastos por categoria ao longo do tempo.',
        techs: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS'],
        liveUrl: 'https://fintrack-rho-one.vercel.app/',
        codeUrl: 'https://github.com/ManzanoW/fintrack',
        image: '/fintrack1.png',
        highlights: [
            'Dashboard com resumo de entradas, saídas e saldo, com filtros por período.',
            'CRUD de transações com validação, categorização e busca.',
            'Gráficos de gastos por categoria e evolução mensal usando dados agregados do banco.',
        ],
    },
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
        title: 'Portfólio de Enfermagem – Anna Clara',
        description:
            'Site profissional desenvolvido para estudante de Enfermagem na Unisantos e estagiária na Santa Casa de Santos. Foco em destacar trajetória, experiência prática e competências humanas na área da saúde.',
        techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Hook Form'],
        liveUrl: 'https://anna-portfolio-tawny.vercel.app/', // ajuste para a URL real
        codeUrl: 'https://github.com/ManzanoW/anna-portfolio', // ajuste para o repo real
        image: '/anna-enfermagem.png',
        highlights: [
            'Layout single page com navegação por âncoras, otimizando a leitura de recrutadores e profissionais de RH.',
            'Seções dedicadas à formação, estágio na Santa Casa de Santos e histórico em atendimento ao cliente, evidenciando habilidades transferíveis.',
            'Design limpo em branco e verde, com foco em acessibilidade e leitura em dispositivos móveis.',
        ],
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
