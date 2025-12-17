
import React from 'react';
import { motion } from 'framer-motion';
import HatIcon from './HatIcon';

const Loader = () => {
    return (
        <div style={styles.container}>
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={styles.icon}
            >
                <HatIcon />
            </motion.div>
            <motion.div style={styles.barContainer}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={styles.bar}
                />
            </motion.div>
            <p style={styles.text}>Initializing...</p>
        </div>
    );
};

const styles = {
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'var(--bg-color)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
    },
    icon: {
        fontSize: '4rem',
        marginBottom: '0.2rem',
    },
    barContainer: {
        width: '200px',
        height: '6px',
        backgroundColor: 'var(--surface-color)',
        borderRadius: '3px',
        overflow: 'hidden',
        marginBottom: '1rem',
    },
    bar: {
        height: '100%',
        backgroundColor: 'var(--accent-color)',
    },
    text: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        letterSpacing: '1px',
        textTransform: 'uppercase',
    }
};

export default Loader;
