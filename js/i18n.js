const translations = {
    es: {
        skip: 'Saltar al contenido',
        'nav.about': 'Sobre mí',
        'nav.skills': 'Skills',
        'nav.projects': 'Proyectos',
        'nav.academic': 'Académico',
        'nav.contact': 'Contacto',

        'hero.eyebrow': 'iniciando presentación',
        'hero.greeting': 'Hola, soy',
        'hero.typing': '> resolviendo problemas con precisión orbital...',
        'hero.subtitle': 'Programador con foco en algoritmos y resolución de problemas. Bienvenido a mi rincón del cosmos.',
        'hero.cta.projects': 'Ver proyectos',
        'hero.cta.github': 'GitHub',

        'about.title': 'Sobre mí',
        'about.p1': 'Soy estudiante de Ingeniería en Sistemas de Información y tengo la mala costumbre de preguntarme cómo funciona todo. Si algo se puede automatizar, optimizar o programar, probablemente ya se me ocurrió intentarlo (aunque a veces rompa un par de cosas en el proceso). Mi hobby favorito es abrir un proyecto pensando “esto es una boludez” y, tres horas después, tener 27 pestañas abiertas de Stack Overflow... digo, documentación oficial.',
        'about.p2': 'Trabajo principalmente con C, Python y un poco de SQL, además de estar aprendiendo HTML, CSS y JavaScript mientras construyo este hermoso portafolio. Actualmente estoy metiéndome cada vez más en sistemas operativos, backend y proyectos un poco más interesantes... porque programarlos es bastante más entretenido que escribir la documentación.',
        'about.stats.languages': 'Lenguajes trabajados',
        'about.stats.courses': 'Materias de programación',
        'about.stats.years': 'Años programando',

        'skills.title': 'Skills',
        'skills.languages': 'Lenguajes de programación',
        'skills.tools': 'Herramientas y tecnologías',
        'skills.algorithms': 'Algoritmos y estructuras de datos',
        'skills.list.python': 'Python',
        'skills.list.c': 'C',
        'skills.list.sql': 'SQL',
        'skills.list.html': 'HTML',
        'skills.list.css': 'CSS',
        'skills.list.js': 'JavaScript',
        'skills.list.haskell': 'Haskell',
        'skills.list.prolog': 'Prolog',
        'skills.list.git': 'Git',
        'skills.list.github': 'GitHub',
        'skills.list.linux': 'Linux',
        'skills.list.vscode': 'VS Code',
        'skills.list.photoshop': 'Photoshop',
        'skills.list.sqlserver': 'Microsoft SQL Server',
        'skills.list.office': 'Microsoft Office',
        'skills.list.sorting': 'Algoritmos de ordenamiento',
        'skills.list.searching': 'Algoritmos de búsqueda',
        'skills.list.graphs': 'Grafos y algoritmos de grafos',
        'skills.list.dp': 'Programación dinámica',
        'skills.list.trees': 'Árboles y estructuras jerárquicas',
        'skills.list.hashing': 'Tablas hash y hashing',

        'projects.title': 'Proyectos',
        'projects.filter.all': 'Todos',
        'projects.filter.python': 'Python',
        'projects.filter.c': 'C',
        'projects.filter.web': 'Web',
        'projects.list.project1.title': 'Reconocedor de dígitos manuscritos',
        'projects.list.project1.description': 'Un modelo de aprendizaje automático que reconoce dígitos manuscritos del 0 al 9 utilizando la base de datos MNIST.',
        'projects.viewgithub': 'Ver en GitHub',
        'projects.p2.desc': 'Gestor de inventario para una tienda utilizando Python y Flet.',
        'projects.badge.example': 'EJEMPLO',
        'projects.ex1.title': 'AlgoVisualizer',
        'projects.ex1.desc': 'Visualizador interactivo de algoritmos de ordenamiento, paso a paso.',
        'projects.ex2.title': 'Mini Shell',
        'projects.ex2.desc': 'Implementación de una shell básica en C: parseo de comandos, pipes y procesos.',
        'projects.ex3.title': 'PyGraphs',
        'projects.ex3.desc': 'Librería de grafos con BFS, DFS, Dijkstra y detección de ciclos.',
        'projects.ex4.title': 'Pathfinder A*',
        'projects.ex4.desc': 'Visualizador del algoritmo A* encontrando rutas óptimas sobre grillas.',


        'academic.title': 'Académico',
        'academic.intro': 'Mi recorrido por Ingeniería en Sistemas me fue llevando de los fundamentos de la programación a entender qué pasa detrás del código. Entre trabajos prácticos, proyectos grupales y bastante debugging, fui descubriendo que disfruto especialmente la parte más técnica de los sistemas.',
        'academic.subject.algorithms': 'Algoritmos y Estructuras de Datos',
        'academic.subject.algorithms.desc': 'Resolución de problemas y manejo de datos mediante estructuras, archivos y algoritmos de ordenamiento.',
        'academic.subject.sysl': 'Sintaxis y Semántica de los Lenguajes',
        'academic.subject.sysl.desc': 'Análisis de lenguajes, gramáticas y conceptos relacionados con el funcionamiento de compiladores.',
        'academic.subject.os': 'Sistemas Operativos',
        'academic.subject.os.desc': 'Desarrollo de un sistema distribuido en C, trabajando con procesos, hilos, memoria, planificación y comunicación mediante sockets.',
        'academic.subject.paradigms': 'Paradigmas de la Programación',
        'academic.subject.paradigms.desc': 'Estudio y aplicación de los paradigmas funcional, lógico y orientado a objetos, utilizando Haskell, Prolog y Wollok.',

        'goals.title': 'Hacia dónde voy',
        'goals.intro': 'Quiero seguir construyendo cosas que me obliguen a entender cómo funcionan por dentro, mientras convierto lo que aprendo en proyectos cada vez más completos.',
        'goals.learn': 'Competencias que aspiro',
        'goals.item.algorithms': 'Mejorar mi resolución de problemas y estructuras de datos mediante práctica constante.',
        'goals.item.backend': 'Profundizar en desarrollo backend, APIs, bases de datos y arquitectura de aplicaciones.',
        'goals.item.systems': 'Seguir aprendiendo sobre sistemas operativos, concurrencia y programación de bajo nivel.',
        'goals.build': 'Proyectos que quiero construir',
        'goals.item.blog': 'Seguir mejorando este portafolio, sumando proyectos nuevos a medida que los voy terminando.',
        'goals.item.entrenados': 'entrenadOS — proyecto grupal (la-soneta), en construcción.',
        'goals.item.game': 'Buffet Albert Einstein - juego de automatización de procesos, en construcción.',

        'contact.title': 'Contacto',
        'contact.intro': '¿Querés charlar sobre un proyecto, una oportunidad o tenés alguna sugerencia para mejorar este sitio web? Escribime.',
        'contact.submit': 'Enviar',

        'footer.made': 'hecho a mano, sin frameworks',
    },

    en: {
        skip: 'Skip to content',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.academic': 'Academic',
        'nav.contact': 'Contact',

        'hero.eyebrow': 'loading presentation',
        'hero.greeting': "Hi, I'm",
        'hero.subtitle': 'Programmer focused on algorithms and problem solving. Welcome to my corner of the cosmos.',
        'hero.typing': '> solving problems with orbital precision...',
        'hero.cta.projects': 'View projects',
        'hero.cta.github': 'GitHub',

        'about.title': 'About me',
        'about.p1': "I'm a Information Systems Engineering student with a bad habit of wondering how everything works. If something can be automated, optimized or programmed, I probably already tried it (even if I break a few things in the process). My favorite hobby is opening a project thinking \"this is going to be easy\" and, three hours later, having 27 Stack Overflow tabs open... I mean, official documentation.",
        'about.p2': "I mainly work with C, Python and some SQL, while learning HTML, CSS and JavaScript as I build this portfolio. I'm currently getting more into operating systems, backend and more interesting projects... because programming them is way more fun than writing the documentation.",
        'about.stats.languages': 'Languages worked with',
        'about.stats.courses': 'Programming courses',
        'about.stats.years': 'Years programming',

        'skills.title': 'Skills',
        'skills.languages': 'Programming languages',
        'skills.tools': 'Tools and technologies',
        'skills.algorithms': 'Algorithms and data structures',
        'skills.list.python': 'Python',
        'skills.list.c': 'C',
        'skills.list.sql': 'SQL',
        'skills.list.html': 'HTML',
        'skills.list.css': 'CSS',
        'skills.list.js': 'JavaScript',
        'skills.list.haskell': 'Haskell',
        'skills.list.prolog': 'Prolog',
        'skills.list.git': 'Git',
        'skills.list.github': 'GitHub',
        'skills.list.linux': 'Linux',
        'skills.list.vscode': 'VS Code',
        'skills.list.photoshop': 'Photoshop',
        'skills.list.sqlserver': 'Microsoft SQL Server',
        'skills.list.office': 'Microsoft Office',
        'skills.list.sorting': 'Sorting algorithms',
        'skills.list.searching': 'Search algorithms',
        'skills.list.graphs': 'Graphs and graph algorithms',
        'skills.list.dp': 'Dynamic programming',
        'skills.list.trees': 'Trees and hierarchical structures',
        'skills.list.hashing': 'Hash tables and hashing',

        'projects.title': 'Projects',
        'projects.filter.all': 'All',
        'projects.filter.python': 'Python',
        'projects.filter.c': 'C',
        'projects.filter.web': 'Web',
        'projects.list.project1.title': 'Handwritten digit recognizer',
        'projects.list.project1.description': 'A machine learning model that recognizes handwritten digits from 0 to 9 using the MNIST dataset.',
        'projects.viewgithub': 'View on GitHub',
        'projects.p2.desc': 'Inventory manager for a store using Python and Flet.',
        'projects.badge.example': 'EXAMPLE',
        'projects.ex1.title': 'AlgoVisualizer',
        'projects.ex1.desc': 'Interactive visualizer of sorting algorithms, step by step.',
        'projects.ex2.title': 'Mini Shell',
        'projects.ex2.desc': 'Basic shell implementation in C: command parsing, pipes and processes.',
        'projects.ex3.title': 'PyGraphs',
        'projects.ex3.desc': 'Graph library with BFS, DFS, Dijkstra and cycle detection.',
        'projects.ex4.title': 'Pathfinder A*',
        'projects.ex4.desc': 'Visualizer of the A* algorithm finding optimal routes on grids.',

        'academic.title': 'Academic',
        'academic.intro': 'My journey through Information Systems Engineering took me from programming fundamentals to understanding what happens behind the code. Between assignments, group projects and lots of debugging, I discovered I especially enjoy the more technical side of systems.',
        'academic.subject.algorithms': 'Algorithms and Data Structures',
        'academic.subject.algorithms.desc': 'Problem solving and data management through structures, files and sorting algorithms.',
        'academic.subject.sysl': 'Syntax and Semantics of Languages',
        'academic.subject.sysl.desc': 'Analysis of languages, grammars and concepts related to compiler operation.',
        'academic.subject.os': 'Operating Systems',
        'academic.subject.os.desc': 'Development of a distributed system in C, working with processes, threads, memory, scheduling and socket communication.',
        'academic.subject.paradigms': 'Programming Paradigms',
        'academic.subject.paradigms.desc': 'Study and application of functional, logic and object-oriented paradigms using Haskell, Prolog and Wollok.',

        'goals.title': "Where I'm headed",
        'goals.intro': 'I want to keep building things that force me to understand how they work from the inside, while turning what I learn into increasingly complete projects.',
        'goals.learn': 'Skills I aspire to',
        'goals.item.algorithms': 'Improve my problem solving and data structures through consistent practice.',
        'goals.item.backend': 'Deepen backend development, APIs, databases and application architecture.',
        'goals.item.systems': 'Keep learning about operating systems, concurrency and low-level programming.',
        'goals.build': 'Projects I want to build',
        'goals.item.blog': 'Keep improving this portfolio, adding new projects as I finish them.',
        'goals.item.entrenados': 'entrenadOS — group project (la-soneta), under construction.',
        'goals.item.game': 'Buffet Albert Einstein - process automation game, under construction.',

        'contact.title': 'Contact',
        'contact.intro': "Want to chat about a project, an opportunity, or have any suggestions to improve this website? Drop me a message.",
        'contact.submit': 'Send',

        'footer.made': 'handmade, no frameworks',
    }
};

function translatePage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key])
            el.textContent = translations[lang][key];
    });
    document.documentElement.lang = lang;

    const toggle = document.getElementById('lang-toggle');
    const isEnglish = lang === 'en';
    toggle.textContent = isEnglish ? 'ES' : 'EN';
    toggle.setAttribute('aria-pressed', isEnglish);
    toggle.setAttribute('aria-label', isEnglish ? 'Cambiar a español' : 'Cambiar a inglés');
}

let currentLang = localStorage.getItem('lang') || 'es';
const langtoggle = document.getElementById('lang-toggle');

langtoggle.addEventListener('click', () => {
    const next = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('lang', next);
    translatePage(next);
    currentLang = next;
});

translatePage(currentLang);
