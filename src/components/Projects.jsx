import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import GymButton from './GymButton';
import pokedexImg from '../assets/pokedex_full.png';
import greenhouseImg from '../assets/greenhouse_mockup.png';
import calendarImg from '../assets/calendar_mockup.png';
import bingoImg from '../assets/bingo_mockup.png';
import portfolioImg from '../assets/portfolio_mockup.png';

const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const projectsRef = useRef(null);

    const allProjects = [
        {
            title: "Pokedex App",
            desc: "A responsive Pokédex built with React, fetching data from PokéAPI. Features pagination and detailed views.",
            tech: ["React", "HTML/CSS", "PokéAPI"],
            link: "https://supennd.github.io/Pokedex-app/",
            image: pokedexImg
        },
        {
            title: "Greenhouse System",
            desc: "Cloud-hosted IoT greenhouse system with backend services and machine learning for predictive monitoring and automation.",
            tech: ["Python", "FastAPI", "MongoDB", "Docker", "Machine Learning", "AWS"],
            link: "https://github.com/SupennD/SEP4-backend",
            image: greenhouseImg
        },
        {
            title: "Shared Calendar",
            desc: "Personal project with a Group-based event management system. Responsive UI with Blazor and a .NET Web API backend.",
            tech: ["Blazor", "C#", ".NET Web API", "SQL Lite"],
            link: "https://github.com/SupennD/Shared_Calendar",
            image: calendarImg
        },
        {
            title: "Personal Portfolio",
            desc: "This website! A personal portfolio built with React and Vite, featuring custom components and animations.",
            tech: ["React", "Vite", "Framer Motion"],
            link: "https://github.com/SupennD/website",
            image: portfolioImg
        },
        {
            title: "Semester 2 Bingo Game",
            desc: "Favorite one!! as Interactive bingo board game where 4 players compete to make the combinations and click bingo to win. Developed as a semester project.",
            tech: ["Java", "JavaFX", "Design Patterns"],
            link: "https://github.com/SupennD/Semester2_BingoGame",
            image: bingoImg
        },
        {
            title: "Job Platform",
            desc: "3-tier distributed system helping students find jobs. Features a Java Spring Boot data tier and .NET Blazor client.",
            tech: ["Java Spring Boot", ".NET Blazor", "Distributed Systems", "PostgreSQL"],
            link: "https://github.com/SupennD/Sem3-JobPlatform"
        }
    ];

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % allProjects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + allProjects.length) % allProjects.length);
    };

    const handleToggle = () => {
        const isShowingMore = !showAll;
        setShowAll(isShowingMore);

        // Always scroll to the top of the section when toggling to ensure user starts from the top
        setTimeout(() => {
            if (projectsRef.current) {
                const navHeight = 80; // Approximate height of the fixed navbar
                const elementPosition = projectsRef.current.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 150);
    };

    return (
        <section id="projects" ref={projectsRef} style={styles.section}>
            <style>{`
                .project-card.active {
                    border-color: rgba(0, 255, 128, 0.4) !important;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
                }
                .project-card:hover {
                    border-color: var(--accent-color) !important;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
                }
                .project-card:hover .project-image {
                    transform: scale(1.05);
                }
                .carousel-nav-btn:hover { background: var(--accent-color) !important; color: white !important; scale: 1.1; }
                .carousel-card.side:hover { opacity: 0.6 !important; }
                
                /* Premium Grid Styling */
                .grid-card {
                    background: rgba(255, 255, 255, 0.7) !important;
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.3) !important;
                    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07) !important;
                }
                
                @media (max-width: 850px) {
                    .carousel-card.side { display: none !important; }
                    .carousel-wrapper { min-height: 500px !important; }
                }
            `}</style>
            <div style={styles.container}>
                <motion.div style={{ marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.2 }}
                        style={styles.heading}
                    >
                        Projects
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{ ...styles.underline, width: '120px', transformOrigin: 'center' }}
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ delay: 0.1 }}
                        style={styles.subtitle}
                    >
                        A curated collection of my technical work, from full-stack systems to Machine Learning implementations and interactive software.
                    </motion.p>
                </motion.div>

                {!showAll ? (
                    <div style={styles.carouselWrapper}>
                        <div style={styles.carouselTrack}>
                            {[-1, 0, 1].map((offset) => {
                                const index = (currentIndex + offset + allProjects.length) % allProjects.length;
                                const project = allProjects[index];
                                const isActive = offset === 0;

                                return (
                                    <motion.div
                                        key={`${index}-${offset}`}
                                        initial={false}
                                        animate={{
                                            scale: isActive ? 1.2 : 0.75,
                                            opacity: isActive ? 1 : 0.4,
                                            x: offset * 320, // Wider spread for desktop
                                            zIndex: isActive ? 10 : 5,
                                            rotateY: offset * 35, // Stronger 3D Perspective
                                            filter: isActive ? 'none' : 'blur(2px) grayscale(80%)'
                                        }}
                                        transition={{ duration: 0.6, cubicBezier: [0.4, 0, 0.2, 1] }}
                                        style={{
                                            ...styles.card,
                                            position: isActive ? 'relative' : 'absolute',
                                            width: '350px',
                                            margin: '0 auto',
                                            cursor: isActive ? 'default' : 'pointer',
                                            boxShadow: isActive ? '0 20px 40px rgba(0, 0, 0, 0.08)' : '0 10px 20px rgba(0,0,0,0.05)',
                                            border: isActive ? `1px solid rgba(0, 255, 128, 0.4)` : '1px solid rgba(0,0,0,0.08)',
                                            overflow: 'hidden', // Keep it clean at the top
                                            pointerEvents: isActive ? 'auto' : 'all'
                                        }}
                                        className={`project-card ${isActive ? 'active' : 'side'}`}
                                        onClick={() => !isActive && (offset === 1 ? handleNext() : handlePrev())}
                                    >
                                        {project.image && (
                                            <div style={styles.imageContainer}>
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    style={styles.image}
                                                    className="project-image"
                                                />
                                            </div>
                                        )}
                                        <div style={styles.content}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                                <h3 style={{ ...styles.title, margin: 0 }}>{project.title}</h3>
                                                {isActive && (
                                                    <motion.span
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        style={{
                                                            backgroundColor: 'rgba(0, 255, 128, 0.05)',
                                                            color: 'var(--accent-color)',
                                                            padding: '2px 8px',
                                                            borderRadius: '20px',
                                                            fontSize: '0.6rem',
                                                            fontWeight: 600,
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            border: '1px solid rgba(0, 255, 128, 0.15)'
                                                        }}>Featured</motion.span>
                                                )}
                                            </div>
                                            <div style={styles.techStack}>
                                                {project.tech.map(t => <span key={t} style={styles.tag}>{t}</span>)}
                                            </div>
                                            <p style={styles.desc}>{project.desc}</p>
                                            <div style={{ marginTop: 'auto' }}>
                                                <GymButton href={project.link} style={{ width: '100%', fontSize: '0.85rem', pointerEvents: isActive ? 'auto' : 'none' }}>
                                                    {project.link?.includes('github.io') ? 'Visit Site' : 'View Code'}
                                                </GymButton>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <button onClick={handlePrev} style={{ ...styles.navBtn, left: '-40px' }} className="carousel-nav-btn" aria-label="Previous">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>
                        <button onClick={handleNext} style={{ ...styles.navBtn, right: '-40px' }} className="carousel-nav-btn" aria-label="Next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>

                        <div style={styles.dotsContainer}>
                            {allProjects.map((_, i) => (
                                <motion.div
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    whileHover={{ scale: 1.2 }}
                                    style={{
                                        ...styles.dot,
                                        backgroundColor: i === currentIndex ? 'var(--accent-color)' : 'rgba(0,0,0,0.1)',
                                        width: i === currentIndex ? '32px' : '8px',
                                        height: '8px'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div ref={projectsRef} style={styles.grid}>
                        {allProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
                                viewport={{ amount: 0.1 }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                style={{ ...styles.card, background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)' }}
                                className="project-card grid-card"
                            >
                                {project.image && (
                                    <div style={styles.imageContainer}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            style={styles.image}
                                            className="project-image"
                                        />
                                    </div>
                                )}
                                <div style={styles.content}>
                                    <h3 style={styles.title}>{project.title}</h3>
                                    <div style={styles.techStack}>
                                        {project.tech.map(t => <span key={t} style={styles.tag}>{t}</span>)}
                                    </div>
                                    <p style={styles.desc}>{project.desc}</p>
                                    <div style={{ marginTop: 'auto' }}>
                                        <GymButton href={project.link} style={{ width: '100%', fontSize: '0.9rem' }}>
                                            {project.link?.includes('github.io') ? 'Visit Site' : 'View Code'}
                                        </GymButton>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                <div style={styles.showMoreContainer}>
                    {showAll && (
                        <p style={styles.githubCta}>
                            Discover more projects on my <a href="https://github.com/SupennD" target="_blank" rel="noopener noreferrer" style={styles.githubLink}>GitHub repository</a>
                        </p>
                    )}
                    <button onClick={handleToggle} style={styles.showMoreBtn} className="show-more-btn">
                        {showAll ? "Show Less ↑" : "Show More ↓"}
                    </button>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '3rem 2rem 6rem 2rem', // Reduced top padding to 3rem
        backgroundColor: 'var(--surface-color)',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '0.5rem', // Reduced to accommodate underline
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
        margin: '0 auto 2.5rem auto', // Reduced bottom margin
        lineHeight: '1.6',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: '1.25rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        height: '100%',
        position: 'relative',
    },
    imageContainer: {
        width: '100%',
        height: '180px', // Fixed height for consistency
        overflow: 'hidden',
        backgroundColor: '#f8fafc',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover', // Ensures image fills container uniformly
        transition: 'transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)',
    },
    content: {
        padding: '1.5rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: '1.3rem',
        fontWeight: '700',
        marginBottom: '0.75rem',
        color: 'var(--text-primary)',
        lineHeight: '1.3',
    },
    desc: {
        color: 'var(--text-secondary)',
        marginBottom: '1.5rem',
        fontSize: '0.95rem',
        lineHeight: '1.6',
        flex: 1,
        display: 'block', // Ensure it's not a flexbox that might truncate
        overflow: 'visible', // Explicitly show all text
    },
    techStack: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.4rem',
        marginBottom: '1.5rem',
    },
    tag: {
        fontSize: '0.7rem',
        color: 'var(--accent-color)',
        backgroundColor: 'var(--accent-light)',
        padding: '0.3rem 0.6rem',
        borderRadius: '2rem',
        fontWeight: '600',
    },
    showMoreContainer: {
        textAlign: 'center',
        marginTop: '4rem',
    },
    githubCta: {
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        marginBottom: '1.5rem',
    },
    githubLink: {
        color: 'var(--accent-color)',
        fontWeight: '600',
        textDecoration: 'none',
        borderBottom: '1px solid transparent',
        transition: 'all 0.3s',
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
        transition: 'all 0.2s',
    },
    carouselWrapper: {
        position: 'relative',
        width: '100%', // Increased width to fit 3 cards
        margin: '2rem auto',
        padding: '0 2rem',
        minHeight: '550px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    carouselTrack: {
        position: 'relative',
        width: '100%',
        height: '480px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        perspective: '1200px',
    },
    navBtn: {
        position: 'absolute',
        top: '40%',
        backgroundColor: 'var(--surface-color)',
        border: '1px solid rgba(0,0,0,0.1)',
        color: 'var(--accent-color)',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 10,
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        transition: 'all 0.3s',
    },
    dotsContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        marginTop: '2rem',
    },
    dot: {
        height: '8px',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    }
};

export default Projects;
