import React from 'react';
import { motion } from 'framer-motion';
import GymButton from './GymButton';
import profileImg from '../assets/profile.jpg';

const Front = () => {
    return (
        <section style={styles.heroSection}>
            <style>{`
                @media (max-width: 768px) {
                    .hero-container {
                        flex-direction: column-reverse !important;
                        text-align: center !important;
                        gap: 2rem !important;
                    }
                    .hero-image-wrapper {
                        max-width: 250px !important;
                        aspect-ratio: 1/1 !important;
                        border-radius: 50% !important;
                    }
                    .hero-profile-image {
                        border-radius: 50% !important;
                    }
                    .hero-button-group {
                        justify-content: center !important;
                    }
                    .hero-bio {
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    .hero-ring {
                        display: none !important;
                    }
                }
            `}</style>
            <div style={styles.container} className="hero-container">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    style={styles.textContent}
                >
                    <h2 style={styles.greeting}>Hi, I'm</h2>
                    <h1 style={styles.name}>Supendra Bogati</h1>
                    <h3 style={styles.role}>Software Engineering Student</h3>

                    <p style={styles.bio} className="hero-bio">
                        A 21-year-old developer with the discipline of a gym rat. I do have a strong foundation in backend logic and frontend design but is always willing to push past limits to learn and grow. Known for my punctuality and ability to learn fast.
                    </p>

                    <div style={styles.buttonGroup} className="hero-button-group">
                        <GymButton href="#projects">View Projects</GymButton>
                        <GymButton href="#contact" variant="secondary">Contact Me</GymButton>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={styles.imageContent}
                >
                    <div style={styles.imageWrapper} className="hero-image-wrapper">
                        <img src={profileImg} alt="Supendra Bogati" style={styles.profileImage} className="hero-profile-image" />
                        {/* Decorative Ring */}
                        <div style={styles.ring} className="hero-ring"></div>
                    </div>
                </motion.div>
            </div>

            {/* Background Blobs */}
            <div style={styles.blob1}></div>
            <div style={styles.blob2}></div>
        </section>
    );
};

const styles = {
    heroSection: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '4rem 2rem 2rem 2rem', // Reduced top padding for smaller header
    },
    container: {
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row', // Default to row for desktop
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '4rem',
        zIndex: 2,
        flexWrap: 'wrap-reverse', // Wrap on mobile, text below image if needed, or use media queries
    },
    textContent: {
        flex: 1,
        minWidth: '300px',
    },
    greeting: {
        fontSize: '1.5rem',
        color: 'var(--accent-color)',
        marginBottom: '0.5rem',
        fontWeight: '600',
    },
    name: {
        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
        lineHeight: '1.1',
        marginBottom: '1rem',
        color: 'var(--text-primary)',
    },
    role: {
        fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
        color: 'var(--text-secondary)',
        marginBottom: '2rem',
        fontWeight: '500',
    },
    bio: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        marginBottom: '2.5rem',
        maxWidth: '500px',
        lineHeight: '1.7',
    },
    buttonGroup: {
        display: 'flex',
        gap: '1rem',
    },
    imageContent: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '300px',
    },
    imageWrapper: {
        position: 'relative',
        width: '100%',
        maxWidth: '350px',
        aspectRatio: '350/450', // Maintain aspect ratio
        borderRadius: '2rem',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '2rem',
        position: 'relative',
        zIndex: 2,
    },
    ring: {
        position: 'absolute',
        top: '-20px',
        right: '-20px',
        width: '100px',
        height: '100px',
        border: '4px solid var(--accent-color)',
        borderRadius: '50%',
        zIndex: 1,
        opacity: 0.6,
    },
    blob1: {
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(22, 163, 74, 0.05) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
        pointerEvents: 'none',
    },
    blob2: {
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(22, 163, 74, 0.08) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
        pointerEvents: 'none',
    }
};

export default Front;
