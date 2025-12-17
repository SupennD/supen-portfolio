import React from 'react';
import { motion } from 'framer-motion';

const GymButton = ({ children, href, onClick, variant = 'primary', style = {} }) => {
    const isPrimary = variant === 'primary';

    const baseStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.8rem 2rem',
        borderRadius: '50px', // Pill shape
        fontWeight: '600',
        fontSize: '1rem',
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        border: 'none',
        outline: 'none',
        position: 'relative',
        overflow: 'hidden',
        ...style
    };

    const primaryStyle = {
        backgroundColor: 'var(--accent-color)',
        color: '#fff',
        boxShadow: '0 4px 0 #1d4ed8', // 3D "Weight" effect
    };

    const secondaryStyle = {
        backgroundColor: 'var(--gym-plate-color)',
        color: 'var(--gym-plate-text)',
        boxShadow: '0 4px 0 #d1d5db', // Light grey shadow
    };

    const combinedStyle = { ...baseStyle, ...(isPrimary ? primaryStyle : secondaryStyle) };

    const Component = href ? motion.a : motion.button;
    const props = href ? { href } : { onClick };

    return (
        <Component
            {...props}
            style={combinedStyle}
            whileHover={{ y: 2, boxShadow: isPrimary ? '0 2px 0 #1d4ed8' : '0 2px 0 #1f2937' }}
            whileTap={{ y: 4, boxShadow: 'none' }}
        >
            {/* "Weight Plate" Ring Detail */}
            <span style={{
                position: 'absolute',
                top: '2px', left: '2px', right: '2px', bottom: '2px',
                border: '2px solid rgba(255,255,255,0.1)',
                borderRadius: '48px',
                pointerEvents: 'none'
            }}></span>

            {children}
        </Component>
    );
};

export default GymButton;
