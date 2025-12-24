import React from 'react';
import { motion } from 'framer-motion';
import scrumIcon from '../assets/scrum.png';

const Skills = () => {
    const skills = [
        {
            category: "Languages",
            items: [
                { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
                { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
                { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
                { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
            ]
        },
        {
            category: "Frameworks & Libraries",
            items: [
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
                { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
                { name: "Blazor", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Blazor.png" }, // Fallback for Blazor
                { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
                { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" } // Fallback
            ]
        },
        {
            category: "Tools & DevOps",
            items: [
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
                { name: "gRPC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-original.svg" },
                { name: "Scrum", icon: scrumIcon }
            ]
        },
        {
            category: "Databases",
            items: [
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" }
            ]
        }
    ];

    return (
        <section id="skills" style={styles.section}>
            <style>{`
                .skill-item:hover .tooltip {
                    opacity: 1 !important;
                    transform: translateX(-50%) translateY(0) !important;
                }
                .skill-item:hover {
                    transform: translateY(-5px);
                }
            `}</style>
            <div style={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2 }}
                    style={styles.heading}
                >
                    Skills
                </motion.h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ ...styles.underline, width: '100px', transformOrigin: 'center' }}
                />
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ delay: 0.1 }}
                    style={styles.subtitle}
                >
                    From my engineering studies to work experience, here are the core technical skills and tools I have mastered along my journey.
                </motion.p>

                <div style={styles.grid}>
                    {skills.map((group, index) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.2 }}
                            transition={{ delay: index * 0.1 }}
                            style={styles.card}
                        >
                            <h3 style={styles.categoryTitle}>{group.category}</h3>
                            <div style={styles.skillList}>
                                {group.items.map(skill => (
                                    <div key={skill.name} style={styles.skillItem} className="skill-item">
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            style={{
                                                ...styles.icon,
                                                backgroundColor: skill.name === 'gRPC' ? '#111827' : 'transparent',
                                                borderRadius: skill.name === 'gRPC' ? '8px' : '0',
                                                padding: skill.name === 'gRPC' ? '4px' : '0'
                                            }}
                                        />
                                        <span style={styles.tooltip} className="tooltip">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '3rem 2rem 6rem 2rem', // Reduced top padding
        backgroundColor: 'var(--surface-color)',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '0.5rem', // Reduced to make room for underline
        textAlign: 'center',
        color: 'var(--text-primary)',
    },
    underline: {
        height: '4px',
        backgroundColor: 'var(--accent-color)',
        margin: '0 auto 1.5rem auto',
        borderRadius: '2px',
    },
    subtitle: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto 2.5rem auto', // Reduced from 3rem
        lineHeight: '1.6',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem', // Reduced from 2rem
        justifyContent: 'center',
    },
    card: {
        backgroundColor: 'var(--bg-color)',
        padding: '1.5rem', // Reduced from 2rem
        borderRadius: '1rem',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    categoryTitle: {
        color: 'var(--accent-color)',
        marginBottom: '2rem',
        fontSize: '1.2rem',
        fontWeight: '600',
        textAlign: 'center',
    },
    skillList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        justifyContent: 'center',
    },
    skillItem: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.5rem',
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
        width: '60px',
        height: '60px',
    },
    icon: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    tooltip: {
        position: 'absolute',
        bottom: '-35px',
        left: '50%',
        transform: 'translateX(-50%) translateY(10px)',
        backgroundColor: '#1f2937',
        color: '#fff',
        padding: '6px 10px',
        borderRadius: '6px',
        fontSize: '0.8rem',
        opacity: 0,
        transition: 'all 0.2s ease',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        zIndex: 10,
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    },
};

export default Skills;
