import React from 'react';

const HatIcon = ({ style }) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={style}
        >
            {/* Hat Base */}
            <path d="M10 60 H90" stroke="#F59E0B" strokeWidth="8" strokeLinecap="round" />
            <path d="M25 60 C25 30 75 30 75 60" fill="#FCD34D" stroke="#F59E0B" strokeWidth="4" />

            {/* Red Ribbon */}
            <path d="M26 55 H74" stroke="#EF4444" strokeWidth="8" />
        </svg>
    );
};

export default HatIcon;
