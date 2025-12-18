import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import GymButton from './GymButton';

const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const projectsRef = useRef(null);

    const allProjects = [
        {
            title: "Pokedex App",
            desc: "A responsive Pokédex built with React, fetching data from PokéAPI. Features pagination and detailed views.",
            tech: ["React", "HTML/CSS", "PokéAPI"],
            link: "https://github.com/SupennD/Pokedex-app"
        },
        {
            title: "SEP4 Backend",
            desc: "Cloud-hosted IoT greenhouse system with backend services and machine learning for predictive monitoring and automation.",
            tech: ["Python", "FastAPI", "MongoDB", "Docker", "Machine Learning", "AWS"],
            link: "https://github.com/SupennD/SEP4-backend"
        },
        {
            title: "Shared Calendar",
            desc: "Personal project with a Group-based event management system. Responsive UI with Blazor and a .NET Web API backend.",
            tech: ["Blazor", "C#", ".NET Web API", "SQL Lite"],
            link: "https://github.com/SupennD/Shared_Calendar"
        },
        {
            title: "Personal Portfolio",
            desc: "This website! A personal portfolio built with React and Vite, featuring custom components and animations.",
            tech: ["React", "Vite", "Framer Motion"],
            link: "https://github.com/SupennD/website"
        },
        {
            title: "Semester 2 Bingo Game",
            desc: "Favorite one!! as Interactive bingo board game where 4 players compete to make the combination and make bingo developed as a semester project.",
            tech: ["Java", "JavaFX", "Design Patterns"],
            link: "https://github.com/SupennD/Semester2_BingoGame"
        },
        {
            title: "Job Platform",
            desc: "3-tier distributed system helping students find jobs. Features a Java Spring Boot data tier and .NET Blazor client.",
            tech: ["Java Spring Boot", ".NET Blazor", "Distributed Systems", "PostgreSQL"],
            link: "https://github.com/SupennD/Sem3-JobPlatform"
        }
    ];

    const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

    const handleToggle = () => {
        const isShowingMore = !showAll;
        setShowAll(isShowingMore);

        if (isShowingMore) {
            setTimeout(() => {
                window.scrollBy({ top: 300, behavior: 'smooth' });
            }, 100);
        } else {
            projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="projects" style={styles.section}>
            <div style={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2 }}
                    style={styles.heading}
                >
                    Projects
                </motion.h2>

                <div ref={projectsRef} style={styles.grid}>
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.2 }}
                            transition={{ delay: index * 0.1 }}
                            style={styles.card}
                        >
                            <div style={styles.content}>
                                <h3 style={styles.title}>{project.title}</h3>
                                <p style={styles.desc}>{project.desc}</p>
                                <div style={styles.techStack}>
                                    {project.tech.map(t => <span key={t} style={styles.tag}>{t}</span>)}
                                </div>
                                <div style={{ marginTop: 'auto' }}>
                                    <GymButton href={project.link} style={{ width: '100%', fontSize: '0.9rem' }}>View Code</GymButton>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={styles.showMoreContainer}>
                    <button onClick={handleToggle} className="show-more-btn">
                        {showAll ? "Show Less ↑" : "Show More ↓"}
                    </button>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '6rem 2rem',
        backgroundColor: 'var(--surface-color)',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '3rem',
        textAlign: 'center',
        color: 'var(--text-primary)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
    },
    card: {
        backgroundColor: 'var(--surface-color)',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
    },
    content: {
        padding: '2rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: '1.4rem',
        marginBottom: '1rem',
        color: 'var(--text-primary)',
    },
    desc: {
        color: 'var(--text-secondary)',
        marginBottom: '1.5rem',
        fontSize: '0.95rem',
        lineHeight: '1.6',
        flex: 1,
    },
    techStack: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '2rem',
    },
    tag: {
        fontSize: '0.8rem',
        color: 'var(--accent-color)',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        padding: '0.3rem 0.6rem',
        borderRadius: '4px',
    },
    showMoreContainer: {
        textAlign: 'center',
        marginTop: '3rem',
    },
    showMoreBtn: {
        background: 'none',
        border: '2px solid var(--accent-color)',
        borderRadius: '2rem',
        color: 'var(--accent-color)',
        fontSize: '1rem',
        cursor: 'pointer',
        fontWeight: '600',
        padding: '0.5rem 1.5rem',
        transition: 'opacity 0.2s',
    }
};

export default Projects;
