import React from 'react';
import Header    from './components/Header';
import Home      from './pages/Home';
import Projects  from './pages/Projects';
import Contact   from './pages/Contact';
import Footer    from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />       
        <Projects />   
        <Contact />    
      </main>
      <Footer />
     <BackToTop />
    </>
  );
}
