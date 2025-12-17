import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Front from './components/Front';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {loading ? <Loader /> : (
        <>
          <Header />
          <main>
            <Front />
            <Projects />
            <About />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
