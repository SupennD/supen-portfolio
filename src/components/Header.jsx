
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HatIcon from './HatIcon';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = ['Projects', 'About', 'Skills', 'Contact'];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header style={styles.header}>
            <style>{`
                .nav-link {
                    padding: 0.5rem 1rem;
                    border-radius: 2rem;
                    transition: all 0.2s ease;
                }
                .nav-link:hover {
                    background-color: var(--accent-color) !important;
                    color: white !important;
                }
            `}</style>
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={styles.logo}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <span style={{ marginRight: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <HatIcon style={{ width: '60px', height: '60px' }} />
                </span>
                <span style={{ fontSize: '1.5rem', fontWeight: 'italic' }}>SDB</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
                <ul style={styles.navList}>
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            whileHover={{ y: -2 }}
                            style={styles.navItem}
                        >
                            <a href={`#${item.toLowerCase()}`} className="nav-link" style={styles.link}>{item}</a>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="mobile-nav-toggle" onClick={toggleMenu} style={styles.hamburger}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {isMenuOpen ? (
                        <path d="M18 6L6 18M6 6l12 12" />
                    ) : (
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    )}
                </svg>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={styles.mobileMenu}
                    >
                        <ul style={styles.mobileNavList}>
                            {navItems.map((item) => (
                                <li key={item} onClick={() => setIsMenuOpen(false)} style={{ width: '100%', textAlign: 'center' }}>
                                    <a href={`#${item.toLowerCase()}`} style={styles.mobileNavLink}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2rem', // Reduced padding for better fit on smaller screens
        backgroundColor: 'rgba(248, 250, 252, 0.95)',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        flexWrap: 'wrap', // Allow wrapping for mobile menu
    },
    logo: {
        fontSize: '1.2rem',
        fontWeight: '700',
        color: 'var(--text-primary)',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex: 1001, // Keep logo above menu if needed
    },
    navList: {
        display: 'flex',
        listStyle: 'none',
        gap: '2rem',
    },
    navItem: {
        cursor: 'pointer',
    },
    link: {
        color: 'var(--text-secondary)',
        fontSize: '0.95rem',
        fontWeight: '500',
        transition: 'color 0.2s ease',
    },
    hamburger: {
        cursor: 'pointer',
        color: 'var(--text-primary)',
        zIndex: 1001,
        padding: '0.5rem',
    },
    mobileMenu: {
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(248, 250, 252, 0.98)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        overflow: 'hidden',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
    mobileNavList: {
        listStyle: 'none',
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
    },
    mobileNavLink: {
        color: 'var(--text-primary)',
        fontSize: '1.1rem',
        fontWeight: '600',
        display: 'block',
        padding: '0.5rem 2rem',
        width: '100%',
    }
};

export default Header;
