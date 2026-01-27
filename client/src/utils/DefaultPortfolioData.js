// Complete Default Portfolio Data for new users
export const defaultPortfolioData = {
    name: "New User",
    email: "user@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    address: "Your Location",
    title: "Full Stack Developer",
    technologiesWorkWith: ['JavaScript (ES6+)', 'TailwindCSS', 'React', 'MongoDB', 'Express', 'Angular', 'Node.js', 'MySQL'],
    summary: "Welcome to your portfolio! Edit this content using the Custom Form to personalize your portfolio.",
    description: "I'm a passionate developer focused on creating amazing web experiences. Update this section to tell your story and showcase your skills.",
    resumeUrl : "https://example.com/resume.pdf",       
    skills: [
        {
            title: 'Frontend',
            skills: ['React', 'JavaScript', 'Angular.js', 'Tailwind CSS', 'HTML/CSS', 'Redux Toolkit', 'Bootstrap', 'MUI']
        },
        {
            title: 'Backend',
            skills: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'REST APIs', 'JWT Authentication']
        },
        {
            title: 'Programming Languages',
            skills: ['Java (Core)', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3']
        },
        {
            title: 'Tools & Others',
            skills: ['Git/GitHub', 'Docker', 'Postman', 'Figma', 'VS Code', 'Agile/Scrum']
        },
        {
            title: 'Soft Skills',
            skills: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability', 'Leadership']
        }
    ],
    experiences: [
        {
            title: 'Full Stack Development Specialist (MERN)',
            company: 'AccioJob.',
            location: 'Noida, India',
            period: '2024 - Present',
            description: 'Learned development of scalable web applications using React, Node.js, ExpressJs and MongoDB. This program is rigorous, involving over 1000+ coding problems and complex capstone projects.',
            achievements: [
                'Executing an 800+ hour technical immersion in the MERN stack (MongoDB, Express, React, Node) and Java enterprise foundations.',
                'Solved 1000+ Data Structures and Algorithms (DSA) problems focusing on time/space complexity optimization',
                'Developing production-grade applications with secure JWT-based authentication and complex REST API architectures.'
            ]
        }
    ],
    projects: {
        featured: [
            {
                title: 'Your Featured Project',
                description: 'Describe your amazing project here. What technologies did you use? What problems did it solve?',
                tech: ['React', 'Node.js', 'MongoDB'],
                github: 'https://github.com',
                live: 'https://example.com',
                image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
            }
        ],
        other: [
            {
                title: 'Side Project',
                description: 'Another project you worked on',
                tech: ['JavaScript', 'CSS'],
                image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop'
            }
        ]
    }
};

// Hero Section Data
export const defaultHeroData = {
    name: "Irfan Khan",
    title: "I build things for the web",
    description: "Full-stack developer specializing in building exceptional digital experiences. Currently focused on creating AI integrated solutions, accessible, human-centered products.",
    github: "https://github.com/ik-deep/",
    linkedin: "https://linkedin.com/in/irfan-khan173/",
    email: "er.irfan2798@gmail.com"
};

// About Section Data
export const defaultAboutData = {
    description: "Hello! I'm Irfan khan, a passionate web developer based in India. Results-oriented Full Stack Developer with 2+ years of experience across Java, MERN, and Angular ecosystems, specializing in high-availability web applications. Proven track record at Tekizma India Solutions of improving application stability by 15% through rigorous bug resolution and feature engineering. Currently deep-specializing in MERN stack architectures and advanced Data Structures (1000+ problems solved) to build scalable, secure enterprise solutions.",
    technologiesWorkWith: ['JavaScript (ES6+)', 'TailwindCSS', 'React', 'MongoDB', 'Express', 'Angular', 'Node.js', 'MySQL'],
    title: "Full Stack Developer"
};

// Skills Section Data
export const defaultSkillsData = [
    {
        title: 'Frontend',
        skills: ['React', 'JavaScript', 'Angular.js', 'Tailwind CSS', 'HTML/CSS', 'Redux Toolkit', 'Bootstrap', 'MUI']
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'REST APIs', 'JWT Authentication']
    },
    {
        title: 'Programming Languages',
        skills: ['Java (Core)', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3']
    },
    {
        title: 'Tools & Others',
        skills: ['Git/GitHub', 'Docker', 'Postman', 'Figma', 'VS Code', 'Agile/Scrum']
    },
    {
        title: 'Soft Skills',
        skills: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability', 'Leadership']
    }
];

// Experience Section Data
export const defaultExperienceData = [
    {
        title: 'Full Stack Development Specialist (MERN)',
        company: 'AccioJob.',
        location: 'Noida, India',
        period: 'MARCH 2023 - DEC 2024',
        description: 'Learned development of scalable web applications using React, Node.js, ExpressJs and MongoDB. This program is rigorous, involving over 1000+ coding problems and complex capstone projects.',
        achievements: [
            'Executing an 800+ hour technical immersion in the MERN stack (MongoDB, Express, React, Node) and Java enterprise foundations.',
            'Solved 1000+ Data Structures and Algorithms (DSA) problems focusing on time/space complexity optimization',
            'Developing production-grade applications with secure JWT-based authentication and complex REST API architectures.'
        ]
    },
    {
        title: 'Product Engineer',
        company: 'Tekizma India Solutions Private Limited.',
        location: 'Bengaluru, India',
        period: 'Apr 2022 - Feb 2023',
        description: 'Developed and maintained multiple client-facing applications. Collaborated with design and product teams to deliver high-quality features.',
        achievements: [
            'Architected modular web interfaces using Angular and TypeScript for enterprise healthcare data reconciliation products.',
            'Engineered 50+ mission-critical features, reducing technical debt and improving system stability by 18% through refactoring.',
            'Resolved 50+ high-priority production bugs, maintaining 99.9% application availability during critical client audits.'
        ]
    }
];

// Projects Section Data
export const defaultProjectsData = {
    featured: [
        {
            title: 'DeoFolio-CMS',
            description: 'Developed a full-stack application that allows users to register and manage their own portfolio content through a dynamic dashboard.',
            tech: ['React', 'Node.js', 'mongoDB', 'Express'],
            github: 'https://github.com/ik-deep/dynamic-portfolio-backend',
            live: 'https://devfolio-cms.vercel.app/',
            image: '../src/assets/portfolio.png'
        },
        {
            title: 'this is project two',
            description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
            tech: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
            github: 'https://github.com/ik-deep/podcast-plateform',
            live: 'https://podcast-plateform-tau.vercel.app/',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop'
        },
        {
            title: 'Airbnb Clone',
            description: 'It aims to replicate the core functionality of Airbnb, allowing users to search for accommodations, view details, make bookings, and manage their listings.',
            tech: ['HTML', 'CSS', 'Javascript', 'API'],
            github: 'https://github.com/ik-deep/airbnb-clone-f3',
            live: 'https://ik-deep.github.io/airbnb-clone-f3/',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
        }
    ],
    other: [
        { title: 'TO-DO App', description: 'Real-time weather app with forecasting', tech: ['React', 'API'], image: '../src/assets/todo.png' },
        { title: 'Tic-Tac-Toe game', description: 'Interactive Tic-Tac-Toe Web Application: Built a responsive, browser-based Tic-Tac-Toe game using React.', tech: ['React', 'CSS'], image: '../src/assets/tic-tac-toe.png' },
        { title: 'Excel Clone', description: 'This is excel cloned project.ser can edit and save there data and also change text configuration.', tech: ['HTML', 'Css', 'Javascript'], image: '../src/assets/excel.png' },
        { title: 'Expense Tracker', description: 'Personal finance management app', tech: ['Vue.js', 'Firebase'], image: '../src/assets/excel.png' },
        { title: 'Recipe Finder', description: 'Search and save recipes from around the world', tech: ['React', 'API'], image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop' },
        { title: 'Markdown Editor', description: 'Live preview markdown editor with export', tech: ['TypeScript', 'React'], image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop' }
    ]
};

// Contact Section Data
export const defaultContactData = {
    email: "er.irfan2798@gmail.com",
    address: "Noida Sector-12, India",
    message: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
};