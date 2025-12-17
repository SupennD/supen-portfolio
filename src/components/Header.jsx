
import React from 'react';
import { motion } from 'framer-motion';
import HatIcon from './HatIcon';

const Header = () => {
    const navItems = ['Projects', 'About', 'Skills', 'Contact'];

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
                    <HatIcon />
                </span>
                Supendra Bogati
            </motion.div>
            <nav>
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
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 4rem',
        backgroundColor: 'rgba(248, 250, 252, 0.9)', // Matches var(--bg-color) with opacity
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
    },
    logo: {
        fontSize: '1.2rem',
        fontWeight: '700',
        color: 'var(--text-primary)',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    navList: {
        display: 'flex',
        listStyle: 'none',
        gap: '2.5rem',
    },
    navItem: {
        cursor: 'pointer',
    },
    link: {
        color: 'var(--text-secondary)',
        fontSize: '0.95rem',
        fontWeight: '500',
        transition: 'color 0.2s ease',
    }
};

export default Header;
