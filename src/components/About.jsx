import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import HatIcon from './HatIcon';

const About = () => {
    const [showAllExperiences, setShowAllExperiences] = useState(false);
    const [activeTab, setActiveTab] = useState('experience'); // 'experience' or 'education'
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
            <style>{`
                .timeline-container { position: relative; padding: 2rem 0 0 0; }
                .central-line {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 3px;
                    background: var(--accent-color);
                    transform: translateX(-50%);
                    opacity: 0.8;
                }
                .timeline-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    margin-bottom: 2.5rem;
                    position: relative;
                }
                .timeline-content {
                    width: 45%;
                    padding: 2rem;
                    background: var(--surface-color);
                    border-radius: 1rem;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.06);
                    border: 1px solid rgba(0,0,0,0.04);
                    position: relative;
                }
                .timeline-dot {
                    width: 40px;
                    height: 40px;
                    background: var(--accent-color);
                    border-radius: 50%;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 10;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    box-shadow: 0 0 15px rgba(22, 163, 74, 0.3);
                }
                .timeline-item.right { flex-direction: row-reverse; }
                .timeline-item:last-child { margin-bottom: 0.8rem; }
                
                @media (max-width: 850px) {
                    .central-line { left: 20px !important; transform: none !important; }
                    .timeline-item { justify-content: flex-start !important; padding-left: 50px !important; flex-direction: row !important; }
                    .timeline-content { width: 100% !important; }
                    .timeline-dot { left: 20px !important; transform: translateX(-50%) !important; }
                }
                @media (max-width: 768px) {
                    .about-text-col {
                        text-align: center !important;
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                        justify-content: center !important;
                    }
                    .about-text-col h2 {
                        text-align: center !important;
                        width: 100% !important;
                    }
                    .about-row {
                        gap: 2rem !important;
                    }
                    .about-visual-col {
                        margin-top: 2rem !important;
                    }
                    .about-underline {
                        margin: 0 auto 1.5rem auto !important;
                    }
                }
            `}</style>
            <div style={styles.container}>

                {/* Section 1: My Vision */}
                <div style={styles.row} className="about-row">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        style={styles.textCol}
                        className="about-text-col"
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content' }} className="about-header-group">
                            <h2 style={styles.heading}>My <span style={styles.highlight}>Vision</span></h2>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ amount: 0.5 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                style={{ ...styles.underline, width: '130px', transformOrigin: 'center', margin: '0 0 1.5rem 0' }}
                                className="about-underline"
                            />
                        </div>
                        <p style={styles.text}>
                            I am not just a coder who writes lines of code; I am a <span style={styles.bold}>problem-driven developer</span> who focuses on understanding the <span style={styles.bold}>foundation</span> of each challenge before implementing solutions. By combining <span style={styles.bold}>technical depth</span> with <span style={styles.bold}>design thinking</span>, I create clean, maintainable systems that deliver <span style={styles.bold}>meaningful</span> and <span style={styles.bold}>user-focused</span> results.
                        </p>
                        <p style={styles.text}>
                            I value the <span style={styles.bold}>learning process</span> as much as the outcome, using each project to <span style={styles.bold}>deepen my understanding</span> and refine my approach. This mindset allows me to build <span style={styles.bold}>reliable solutions</span> while continuously growing as a developer.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        style={styles.visualCol}
                        className="about-visual-col"
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
                <div style={{ ...styles.row, marginTop: '6rem' }} className="about-row reverse">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        style={styles.textCol}
                        className="about-text-col"
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content' }} className="about-header-group">
                            <h2 style={styles.heading}>Beyond <span style={styles.highlight}>Code</span></h2>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ amount: 0.5 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                style={{ ...styles.underline, width: '150px', transformOrigin: 'center', margin: '0 0 1.5rem 0' }}
                                className="about-underline"
                            />
                        </div>
                        <p style={styles.text}>
                            I embrace a life of <span style={styles.bold}>discipline</span> and <span style={styles.bold}>adventure</span>. My core passions lie in pushing my limits at the <span style={styles.bold}>gym</span> and immersing myself in the world of <span style={styles.bold}>anime</span>. I also enjoy playing football with friends and finding patience while <span style={styles.bold}>fishing</span>.
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
                        className="about-visual-col"
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
                                        <HatIcon style={{ width: '36px', height: '36px' }} />
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

                {/* My Journey Section with Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.1 }}
                    style={{ marginTop: '6rem' }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '0.8rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2 style={{ ...styles.heading, textAlign: 'center', marginBottom: '0.4rem', width: 'auto' }}>My <span style={styles.highlight}>Journey</span></h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ amount: 0.5 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{
                                ...styles.underline,
                                width: '180px',
                                transformOrigin: 'center',
                                margin: '0 auto 0.8rem auto'
                            }}
                        />
                        <p style={{ ...styles.text, marginBottom: '0', marginTop: 0 }}>My academic and professional experience</p>
                    </div>

                    {/* Tab Switcher */}
                    <div style={styles.tabContainer}>
                        <button
                            onClick={() => setActiveTab('experience')}
                            style={{
                                ...styles.tabButton,
                                ...(activeTab === 'experience' ? styles.activeTab : {})
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            Experience
                        </button>
                        <button
                            onClick={() => setActiveTab('education')}
                            style={{
                                ...styles.tabButton,
                                ...(activeTab === 'education' ? styles.activeTab : {})
                            }}
                        >
                            <HatIcon style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                            Education
                        </button>
                    </div>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {activeTab === 'experience' ? (
                            <>
                                <div ref={experienceRef} className="timeline-container">
                                    <div className="central-line"></div>
                                    {visibleExperiences.map((exp, index) => (
                                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                            <div className="timeline-dot">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                            </div>
                                            <div className="timeline-content">
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
                                        </div>
                                    ))}
                                </div>
                                <div style={{ textAlign: 'center', marginTop: '1.2rem' }}>
                                    <button onClick={handleExperienceToggle} className="show-more-btn">
                                        {showAllExperiences ? 'Show Less ↑' : 'Show More ↓'}
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="timeline-container">
                                <div className="central-line"></div>
                                <div className="timeline-item left">
                                    <div className="timeline-dot">
                                        <HatIcon style={{ width: '20px', height: '20px' }} />
                                    </div>
                                    <div className="timeline-content">
                                        <h4 style={styles.role}>Bachelor's in Software Technology Engineering</h4>
                                        <p style={styles.company}>VIA University College</p>
                                        <p style={styles.date}>Aug 2023 - Feb 2027</p>
                                        <p style={styles.desc}>
                                            Learning essential software <span style={styles.bold}>technology</span> <span style={styles.bold}>tools</span> and <span style={styles.bold}>methods</span> in my education to improve my ability to <span style={styles.bold}>create</span> and <span style={styles.bold}>design</span> better software <span style={styles.bold}>solutions</span>. I have specifically selected <span style={styles.bold}>Machine Learning</span> and <span style={styles.bold}>Advanced Mathematics</span> electives for my <span style={styles.bold}>6th</span> and <span style={styles.bold}>7th</span> semesters to <span style={styles.bold}>master AI concepts</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '3rem 2rem 6rem 2rem', // Reduced top padding
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
        marginBottom: '0.5rem',
        color: 'var(--text-primary)',
        width: '100%',
        textAlign: 'left',
    },
    underline: {
        height: '4px',
        backgroundColor: 'var(--accent-color)',
        marginBottom: '1.5rem',
        borderRadius: '2px',
        marginRight: 'auto', // Default left-aligned
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
        fontSize: '6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    animeWatcher: {
        position: 'relative',
        width: '150px',
        height: '150px',
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
        width: '120px',
        height: '75px',
        backgroundColor: '#1f2937',
        borderRadius: '6px',
        border: '3px solid #374151',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)',
    },
    stand: {
        width: '15px',
        height: '15px',
        backgroundColor: '#374151',
    },
    base: {
        width: '60px',
        height: '6px',
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
        width: '45px',
        height: '45px',
        backgroundColor: '#fcd34d',
        borderRadius: '50%',
        marginBottom: '-12px',
        border: '3px solid #1f2937',
    },
    shoulders: {
        width: '75px',
        height: '30px',
        backgroundColor: '#ef4444',
        borderRadius: '20px 20px 0 0',
        border: '2px solid #1f2937',
    },
    // Timeline Styles
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
    tabContainer: {
        display: 'inline-flex',
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        padding: '0.5rem',
        borderRadius: '0.75rem',
        marginBottom: '2rem',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    tabButton: {
        display: 'flex',
        alignItems: 'center',
        padding: '0.4rem 1rem', // Even smaller
        borderRadius: '0.5rem',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontSize: '0.85rem', // Even smaller
        fontWeight: '600',
        color: 'var(--text-secondary)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    activeTab: {
        backgroundColor: 'var(--accent-color)',
        color: 'white',
        boxShadow: '0 4px 12px rgba(22, 163, 74, 0.2)',
    }
};

export default About;
