import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import HatIcon from './HatIcon';

const About = () => {
    const [showAllExperiences, setShowAllExperiences] = useState(false);
    const experienceRef = useRef(null);

    const experiences = [
        {
            role: "Full-stack Developer",
            company: "PPCD | greenStruct · Internship",
            date: "Aug 2025 - Present",
            desc: "As an intern, I contribute to building advanced calculation tools for civil engineers/structural engineers, supporting the creation of smarter and more sustainable infrastructure solutions.",
            reference: {
                name: "Benjamin Fester Henningsen (Senior Engineer)",
                email: "bfh@ppcd.dk"
            }
        },
        {
            role: "Java Tutor",
            company: "VIA University College · Part-time",
            date: "Feb 2025 - May 2025",
            desc: "Taught and helped my fellow second-semester students with their Java course and also semester projects, focusing on class diagrams, object-oriented design, and applying design patterns.",
            reference: {
                name: "Steffen Vissing Andersen (Supervisor)",
                email: "SVA@via.dk",
                phone: "+4587554223"
            }
        },
        {
            role: "Kitchen Assistant",
            company: "Café 22 · Part-time",
            date: "Mar 2023 - Aug 2023",
            desc: "Developed strong work ethic and teamwork skills in a fast-paced environment."
        }
    ];

    const visibleExperiences = showAllExperiences ? experiences : experiences.slice(0, 2);

    const handleExperienceToggle = () => {
        const isShowingMore = !showAllExperiences;
        setShowAllExperiences(isShowingMore);

        if (isShowingMore) {
            setTimeout(() => {
                window.scrollBy({ top: 300, behavior: 'smooth' });
            }, 100);
        } else {
            experienceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="about" style={styles.section}>
            <div style={styles.container}>

                {/* Section 1: My Vision */}
                <div style={styles.row}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        style={styles.textCol}
                    >
                        <h2 style={styles.heading}>My <span style={styles.highlight}>Vision</span></h2>
                        <p style={styles.text}>
                            I am not just a coder who writes lines of code; I am a problem solver who <span style={styles.bold}>analyzes, visualizes, and understands</span> the fundamental base of every challenge.
                        </p>
                        <p style={styles.text}>
                            My goal is to merge <span style={styles.bold}>technical depth</span> with <span style={styles.bold}>design thinking</span> to create software that truly makes a difference. I believe in writing <span style={styles.bold}>clean, maintainable code</span> that stands the test of time while delivering a <span style={styles.bold}>seamless experience</span> for the user.
                        </p>
                        <p style={styles.text}>
                            As an eager individual, I focus on understanding the <span style={styles.bold}>process</span> rather than just finding the solution. This approach helps me develop a <span style={styles.bold}>deeper knowledge</span> of the concepts I learn, ensuring that every challenge is an opportunity for <span style={styles.bold}>true mastery</span>.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        style={styles.visualCol}
                    >
                        {/* Abstract Tech Animation */}
                        <div style={styles.techVisual}>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                style={styles.circleOuter}
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                style={styles.circleInner}
                            />
                            <div style={styles.codeIcon}>&lt;/&gt;</div>
                        </div>
                    </motion.div>
                </div>

                {/* Section 2: Beyond Code (Hobbies) */}
                <div style={{ ...styles.row, flexDirection: 'row-reverse', marginTop: '6rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        style={styles.textCol}
                    >
                        <h2 style={styles.heading}>Beyond <span style={styles.highlight}>Code</span></h2>
                        <p style={styles.text}>
                            I embrace a life of <span style={styles.bold}>discipline</span> and <span style={styles.bold}>adventure</span>. My core passions lie in pushing my limits at the <span style={styles.bold}>gym</span> and immersing myself in the storytelling of <span style={styles.bold}>anime</span>. I also enjoy playing football with friends and finding patience while <span style={styles.bold}>fishing</span>.
                        </p>
                        <p style={styles.text}>
                            This duality of active <span style={styles.bold}>discipline</span> and <span style={styles.bold}>creative</span> imagination shapes my <span style={styles.bold}>approach</span> to engineering, <span style={styles.bold}>relentless</span> in execution, yet <span style={styles.bold}>calm</span> and strategic in <span style={styles.bold}>design</span>.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        style={styles.visualCol}
                    >
                        <div style={styles.hobbyVisual}>
                            {/* Gym Animation */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                style={styles.iconWrapper}
                                title="Gym"
                            >
                                🏋️‍♂️
                            </motion.div>

                            {/* Guy Watching Anime Animation */}
                            <motion.div
                                style={styles.animeWatcher}
                                title="Watching Anime"
                            >
                                <div style={styles.monitor}>
                                    <motion.div
                                        animate={{ opacity: [0.8, 1, 0.8] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        style={styles.screen}
                                    >
                                        <HatIcon style={{ width: '24px', height: '24px' }} />
                                    </motion.div>
                                    <div style={styles.stand}></div>
                                    <div style={styles.base}></div>
                                </div>
                                <motion.div
                                    animate={{ y: [0, 3, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    style={styles.personBack}
                                >
                                    <div style={styles.head}></div>
                                    <div style={styles.shoulders}></div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Experience Section (Full Width) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2 }}
                    style={{ marginTop: '6rem' }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        style={{ ...styles.heading, textAlign: 'center' }}
                    >
                        Experience
                    </motion.h2>
                    <div ref={experienceRef} style={styles.timeline}>
                        {visibleExperiences.map((exp, index) => (
                            <div key={index} style={{ ...styles.item, marginBottom: '3rem' }}>
                                <h4 style={styles.role}>{exp.role}</h4>
                                <p style={styles.company}>{exp.company}</p>
                                <p style={styles.date}>{exp.date}</p>
                                <p style={styles.desc}>{exp.desc}</p>
                                {exp.reference && (
                                    <div style={styles.reference}>
                                        <span style={styles.refLabel}>Reference:</span>
                                        <span style={styles.refName}>{exp.reference.name}</span>
                                        <div style={styles.refIcons}>
                                            {exp.reference.email && (
                                                <a href={`mailto:${exp.reference.email}`} title={exp.reference.email} style={styles.refLink}>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                                                </a>
                                            )}
                                            {exp.reference.phone && (
                                                <a href={`tel:${exp.reference.phone}`} title={exp.reference.phone} style={styles.refLink}>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Show More / Show Less Button */}
                    <div style={{ textAlign: 'center', marginTop: '-1rem' }}>
                        <button
                            onClick={handleExperienceToggle}
                            className="show-more-btn"
                        >
                            {showAllExperiences ? 'Show Less ↑' : 'Show More ↓'}
                        </button>
                    </div>
                </motion.div>

                {/* Education Section (Full Width) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2 }}
                    style={{ marginTop: '6rem' }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        style={{ ...styles.heading, textAlign: 'center' }}
                    >
                        Education
                    </motion.h2>
                    <div style={styles.timeline}>
                        <div style={styles.item}>
                            <h4 style={styles.role}>Bachelor's in Software Technology Engineering</h4>
                            <p style={styles.company}>VIA University College</p>
                            <p style={styles.date}>Aug 2023 - Feb 2027</p>
                            <p style={styles.desc}>
                                Learning essential software <span style={styles.bold}>technology</span> <span style={styles.bold}>tools</span> and <span style={styles.bold}>methods</span> in my education to improve my ability to <span style={styles.bold}>create</span> and <span style={styles.bold}>design</span> better software <span style={styles.bold}>solutions</span>. I have specifically selected <span style={styles.bold}>Machine Learning</span> and <span style={styles.bold}>Advanced Mathematics</span> electives for my <span style={styles.bold}>6th</span> and <span style={styles.bold}>7th</span> semesters to <span style={styles.bold}>master AI concepts</span>.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '6rem 2rem',
        backgroundColor: 'var(--bg-color)',
        overflow: 'hidden',
    },
    container: {
        maxWidth: '1100px',
        margin: '0 auto',
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        gap: '4rem',
        flexWrap: 'wrap',
    },
    textCol: {
        flex: 1,
        minWidth: '300px',
    },
    visualCol: {
        flex: 1,
        minWidth: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '1.5rem',
        color: 'var(--text-primary)',
    },
    highlight: {
        color: 'var(--accent-color)',
    },
    text: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.8',
        marginBottom: '1.5rem',
    },
    bold: {
        fontWeight: '600',
        color: 'var(--text-primary)',
    },
    // Visual Styles
    techVisual: {
        position: 'relative',
        width: '300px',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleOuter: {
        position: 'absolute',
        width: '280px',
        height: '280px',
        border: '2px dashed var(--accent-color)',
        borderRadius: '50%',
        opacity: 0.3,
    },
    circleInner: {
        position: 'absolute',
        width: '200px',
        height: '200px',
        border: '2px solid var(--accent-color)',
        borderRadius: '50%',
        opacity: 0.5,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
    },
    codeIcon: {
        fontSize: '3rem',
        color: 'var(--accent-color)',
        fontWeight: 'bold',
    },
    hobbyVisual: {
        position: 'relative',
        width: '300px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
    },
    iconWrapper: {
        fontSize: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    animeWatcher: {
        position: 'relative',
        width: '100px',
        height: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    monitor: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '-15px',
        zIndex: 1,
    },
    screen: {
        width: '80px',
        height: '50px',
        backgroundColor: '#1f2937',
        borderRadius: '4px',
        border: '2px solid #374151',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)',
    },
    stand: {
        width: '10px',
        height: '10px',
        backgroundColor: '#374151',
    },
    base: {
        width: '40px',
        height: '4px',
        backgroundColor: '#374151',
        borderRadius: '2px',
    },
    personBack: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 2,
        marginTop: '-10px',
    },
    head: {
        width: '30px',
        height: '30px',
        backgroundColor: '#fcd34d',
        borderRadius: '50%',
        marginBottom: '-8px',
        border: '2px solid #1f2937',
    },
    shoulders: {
        width: '50px',
        height: '20px',
        backgroundColor: '#ef4444',
        borderRadius: '20px 20px 0 0',
        border: '2px solid #1f2937',
    },
    // Timeline Styles
    timeline: {
        borderLeft: '3px solid var(--accent-color)',
        paddingLeft: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
    },
    item: {
        position: 'relative',
    },
    role: {
        fontSize: '1.3rem',
        color: 'var(--text-primary)',
        marginBottom: '0.5rem',
    },
    company: {
        fontSize: '1.1rem',
        color: 'var(--accent-color)',
        marginBottom: '0.2rem',
        fontWeight: '500',
    },
    date: {
        fontSize: '0.9rem',
        color: '#6b7280',
        marginBottom: '1rem',
        fontStyle: 'italic',
    },
    desc: {
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
    },
    reference: {
        marginTop: '0.8rem',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem',
        fontSize: '0.9rem',
        color: '#6b7280',
        borderTop: '1px solid #374151',
        paddingTop: '0.5rem',
    },
    refLabel: {
        fontWeight: '600',
        color: 'var(--text-primary)',
    },
    refName: {
        fontStyle: 'italic',
    },
    refIcons: {
        display: 'flex',
        gap: '0.5rem',
    },
    refLink: {
        color: 'var(--accent-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s',
        padding: '2px',
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
    },
};

export default About;
