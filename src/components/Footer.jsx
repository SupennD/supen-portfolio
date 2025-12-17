
import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.copy}>
                &copy; {new Date().getFullYear()} <span style={{ color: 'var(--accent-color)' }}>SDB</span>. All rights reserved.
            </p>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '2rem',
        backgroundColor: '#050505',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    },
    socials: {
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginBottom: '1.5rem',
    },
    link: {
        color: '#aaa',
        fontSize: '1rem',
        transition: 'color 0.3s ease',
    },
    copy: {
        color: '#555',
        fontSize: '0.9rem',
    }
};

export default Footer;
