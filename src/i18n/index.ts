import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  "pt-BR": {
    translation: {
      // Header
      "nav.home": "/início",
      "nav.projects": "/projetos",
      "nav.contact": "/contato",

      // About
      "about.title": "Otavio Zanon",
      "about.description1":
        "Desenvolvedor Front-End com mais de 7 anos de experiência em Desenvolvimento Web e Otimização de Processos. Domínio em diversas tecnologias e um conjunto de habilidades versátil e adaptável.",
      "about.description2":
        "Profissional colaborativo, focado em resultados, responsável e proativo. Sempre buscando expandir conhecimentos, explorar novas tecnologias e evoluir continuamente. Comprometido em contribuir de forma significativa para o sucesso da equipe.",
      "about.links.text": "Confira minha experiência no",
      "about.links.linkedin": "LinkedIn",
      "about.links.and": "e meu código no",
      "about.links.github": "GitHub",
      "about.cta.text": "Vamos conversar?",
      "about.cta.link": "Entre em contato",

      // Projects
      "projects.title": "Projetos",
      "projects.viewLive": "Ver ao Vivo →",
      "projects.code": "Código →",

      // Project Categories
      "projects.category.sites": "sites",
      "projects.category.utils": "utilitários",
      "projects.category.desktop-utils": "utilitários-desktop",
      "projects.category.games": "jogos",

      // Project Descriptions
      "projects.ranalli.name": "Ranalli Advocacia",
      "projects.ranalli.description":
        "Site corporativo para escritório de advocacia com ferramentas logísticas",

      "projects.escola.name": "Escola 123",
      "projects.escola.description":
        "Site de creche e centro de educação infantil",

      "projects.glampro.name": "GlamPro",
      "projects.glampro.description":
        "Agendamento de serviços para profissionais de beleza",

      "projects.settfile.name": "SettFile",
      "projects.settfile.description":
        "Upload de arquivos multi-provedor com rastreamento de progresso",

      "projects.esportcalendar.name": "EsportCalendar",
      "projects.esportcalendar.description":
        "Gerador automático de calendário de esports em formato .ics. Rastreia partidas de CS2, Valorant, LOL e Rocket League de times brasileiros",

      "projects.livewatch.name": "LiveWatch",
      "projects.livewatch.description":
        "Playlist IPTV automatizada - tudo controlado por um dashboard estilo terminal",

      "projects.settpaste.name": "SettPaste",
      "projects.settpaste.description":
        "Bloco de notas online para criar e compartilhar código ou o que você quiser",

      "projects.settutility.name": "SettUtility",
      "projects.settutility.description":
        "Kit de ferramentas de otimização do Windows e performance para jogos",

      "projects.settmemorycleaner.name": "SETTMemoryCleaner",
      "projects.settmemorycleaner.description":
        "Otimizador de RAM portátil. Usa APIs nativas do Windows para limpar memória com segurança. UI dark, executável único, sem instalação",

      "projects.otto.name": "Otto",
      "projects.otto.description": "Uno (Multiplayer)",

      "projects.noway.name": "NoWay",
      "projects.noway.description":
        "Um jogo de blefe e curiosidades (Multiplayer)",

      "projects.worstfriend.name": "WorstFriend",
      "projects.worstfriend.description":
        "Um verdadeiro validador para o amigo mais m* (Multiplayer)",

      "projects.blackjack.name": "Blackjack",
      "projects.blackjack.description": "Blackjack PRO (Solo)",

      // Technologies
      "technologies.title": "Tecnologias",

      // Tech Categories
      "tech.category.languages": "linguagens",
      "tech.category.frontend": "frontend",
      "tech.category.styling": "estilizacao",
      "tech.category.backend": "backend",
      "tech.category.databases": "bancos-de-dados",
      "tech.category.cloud": "nuvem",
      "tech.category.tools": "ferramentas",

      // Contact
      "contact.title": "Entre em Contato",
      "contact.subtitle": "Vamos conversar sobre oportunidades e colaborações.",
      "contact.form.name": "Nome",
      "contact.form.email": "Email",
      "contact.form.message": "Mensagem",
      "contact.form.submit": "Enviar Mensagem",
      "contact.form.sending": "Enviando...",
      "contact.form.sent": "Mensagem Enviada!",
      "contact.form.error": "Erro ao enviar mensagem. Tente novamente.",
      "contact.form.errors.nameMin": "Nome deve ter no mínimo 3 caracteres",
      "contact.form.errors.emailInvalid": "Email inválido",
      "contact.form.errors.messageMin":
        "Mensagem deve ter no mínimo 10 caracteres",
      "contact.direct.title": "Contato Direto",
    },
  },
  "en-US": {
    translation: {
      // Header
      "nav.home": "/home",
      "nav.projects": "/projects",
      "nav.contact": "/contact",

      // About
      "about.title": "Otavio Zanon",
      "about.description1":
        "Front-End Developer with over 7 years of experience in Web Development and Process Optimization. Proficient in various technologies and equipped with a versatile, adaptable skill set.",
      "about.description2":
        "Collaborative professional, results-driven, responsible and proactive. Always seeking to expand knowledge, explore new technologies and continuously evolve. Committed to contributing significantly to team success.",
      "about.links.text": "Check my experience on",
      "about.links.linkedin": "LinkedIn",
      "about.links.and": "and my code on",
      "about.links.github": "GitHub",
      "about.cta.text": "Let's talk?",
      "about.cta.link": "Get in touch",

      // Projects
      "projects.title": "Projects",
      "projects.viewLive": "View Live →",
      "projects.code": "Code →",

      // Project Categories
      "projects.category.sites": "sites",
      "projects.category.utils": "utils",
      "projects.category.desktop-utils": "desktop-utils",
      "projects.category.games": "games",

      // Project Descriptions
      "projects.ranalli.name": "Ranalli Advocacia",
      "projects.ranalli.description":
        "Corporate website for a law firm with logistics tools",

      "projects.escola.name": "Escola 123",
      "projects.escola.description":
        "Nursery and early childhood center website",

      "projects.glampro.name": "GlamPro",
      "projects.glampro.description":
        "Service scheduling for beauty professionals",

      "projects.settfile.name": "SettFile",
      "projects.settfile.description":
        "Multi-provider file uploader with progress tracking",

      "projects.esportcalendar.name": "EsportCalendar",
      "projects.esportcalendar.description":
        "Automatic esport calendar generator in .ics format. Tracks matches from CS2, Valorant, LOL and Rocket League from Brazilian teams",

      "projects.livewatch.name": "LiveWatch",
      "projects.livewatch.description":
        "Automated IPTV playlist - all triggered from a terminal-style web dashboard",

      "projects.settpaste.name": "SettPaste",
      "projects.settpaste.description":
        "Online notepad to create and share code or what you want",

      "projects.settutility.name": "SettUtility",
      "projects.settutility.description":
        "Windows optimization and gaming performance toolkit and extension",

      "projects.settmemorycleaner.name": "SETTMemoryCleaner",
      "projects.settmemorycleaner.description":
        "Portable RAM optimizer. Uses native Windows APIs to safely clear memory. Dark UI, single executable, no installation required",

      "projects.otto.name": "Otto",
      "projects.otto.description": "Uno (Multiplayer)",

      "projects.noway.name": "NoWay",
      "projects.noway.description": "A bluffing and trivia game (Multiplayer)",

      "projects.worstfriend.name": "WorstFriend",
      "projects.worstfriend.description":
        "A true validator for the worst friend (Multiplayer)",

      "projects.blackjack.name": "Blackjack",
      "projects.blackjack.description": "Blackjack PRO (Solo)",

      // Technologies
      "technologies.title": "Technologies",

      // Tech Categories
      "tech.category.languages": "languages",
      "tech.category.frontend": "frontend",
      "tech.category.styling": "styling",
      "tech.category.backend": "backend",
      "tech.category.databases": "databases",
      "tech.category.cloud": "cloud",
      "tech.category.tools": "tools",

      // Contact
      "contact.title": "Get in Touch",
      "contact.subtitle": "Let's talk about opportunities and collaborations.",
      "contact.form.name": "Name",
      "contact.form.email": "Email",
      "contact.form.message": "Message",
      "contact.form.submit": "Send Message",
      "contact.form.sending": "Sending...",
      "contact.form.sent": "Message Sent!",
      "contact.form.error": "Error sending message. Please try again.",
      "contact.form.errors.nameMin": "Name must be at least 3 characters",
      "contact.form.errors.emailInvalid": "Invalid email",
      "contact.form.errors.messageMin":
        "Message must be at least 10 characters",
      "contact.direct.title": "Direct Contact",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt-BR",
  fallbackLng: "pt-BR",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
