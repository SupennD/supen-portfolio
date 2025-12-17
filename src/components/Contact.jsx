import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, success, error

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate sending
        try {
            const subject = `Portfolio Contact from ${formData.name}`;
            const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
            window.location.href = `mailto:supendradbogati@gmail.com?subject=${subject}&body=${body}`;

            // Show success message
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Reset status after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch {
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" style={styles.section}>
            <div style={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2 }}
                    style={styles.card}
                >
                    <div style={styles.header}>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.5 }}
                            style={styles.heading}
                        >
                            Get in <span style={styles.highlight}>Touch</span>
                        </motion.h2>
                        <p style={styles.subtext}>
                            Have a project in mind or just want to say hi? My inbox is always open.
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                style={styles.successMessage}
                            >
                                <div style={styles.checkIcon}>✓</div>
                                <h3>Message Sent!</h3>
                                <p>Thanks for reaching out. I'll get back to you soon.</p>
                                <button onClick={() => setStatus('idle')} style={styles.resetBtn}>Send another</button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                style={styles.form}
                                onSubmit={handleSubmit}
                            >
                                <div style={styles.inputGroup}>
                                    <label style={styles.label}>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        style={styles.input}
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div style={styles.inputGroup}>
                                    <label style={styles.label}>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        style={styles.input}
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div style={styles.inputGroup}>
                                    <label style={styles.label}>Message</label>
                                    <textarea
                                        name="message"
                                        placeholder="What's on your mind?"
                                        rows="4"
                                        style={styles.textarea}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={styles.submitBtn}
                                    type="submit"
                                >
                                    Send Message
                                </motion.button>

                                {status === 'error' && (
                                    <p style={{ color: '#ef4444', textAlign: 'center', marginTop: '1rem' }}>
                                        Could not send. Please email me directly.
                                    </p>
                                )}
                            </motion.form>
                        )}
                    </AnimatePresence>

                    <div style={styles.footer}>
                        <p style={styles.emailLink}>
                            Or email me directly at <a href="mailto:supendradbogati@gmail.com" style={{ color: 'var(--accent-color)' }}>supendradbogati@gmail.com</a>
                        </p>

                        <div style={styles.socials}>
                            <a href="https://github.com/SupennD" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/supen/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '4rem 2rem 6rem 2rem',
        backgroundColor: 'var(--bg-color)',
        display: 'flex',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        maxWidth: '600px',
    },
    card: {
        backgroundColor: '#1f2937',
        borderRadius: '1.5rem',
        padding: '3rem',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        color: '#fff',
        minHeight: '500px', // Prevent layout shift
    },
    header: {
        textAlign: 'center',
        marginBottom: '2.5rem',
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '0.5rem',
        color: '#fff',
    },
    highlight: {
        color: 'var(--accent-color)',
    },
    subtext: {
        color: '#9ca3af',
        fontSize: '1rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    label: {
        fontSize: '0.9rem',
        fontWeight: '500',
        color: '#d1d5db',
        marginLeft: '0.5rem',
    },
    input: {
        padding: '1rem',
        borderRadius: '0.8rem',
        border: '2px solid #374151',
        backgroundColor: '#111827',
        color: '#fff',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.2s',
    },
    textarea: {
        padding: '1rem',
        borderRadius: '0.8rem',
        border: '2px solid #374151',
        backgroundColor: '#111827',
        color: '#fff',
        fontSize: '1rem',
        outline: 'none',
        resize: 'vertical',
        fontFamily: 'inherit',
        transition: 'border-color 0.2s',
    },
    submitBtn: {
        padding: '1rem',
        borderRadius: '0.8rem',
        backgroundColor: 'var(--accent-color)',
        color: '#fff',
        border: 'none',
        fontSize: '1.1rem',
        fontWeight: '600',
        cursor: 'pointer',
        marginTop: '1rem',
        boxShadow: '0 4px 0 #15803d',
    },
    successMessage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        padding: '2rem 0',
    },
    checkIcon: {
        fontSize: '4rem',
        color: 'var(--accent-color)',
        marginBottom: '1rem',
    },
    resetBtn: {
        marginTop: '2rem',
        background: 'transparent',
        border: '1px solid #4b5563',
        color: '#9ca3af',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        cursor: 'pointer',
    },
    footer: {
        marginTop: '2rem',
        textAlign: 'center',
        borderTop: '1px solid #374151',
        paddingTop: '1.5rem',
    },
    emailLink: {
        color: '#9ca3af',
        fontSize: '0.95rem',
        marginBottom: '1.5rem',
    },
    socials: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
    },
    socialLink: {
        color: '#9ca3af',
        transition: 'color 0.2s, transform 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
};

export default Contact;
