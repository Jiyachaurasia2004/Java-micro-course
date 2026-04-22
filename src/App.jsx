import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Course from './component/Course';
import Projects from './component/Projects';
import Module from './component/Module';
import Companies from './component/Companies';
import Plans from './component/Plans';
import Footer from './component/Footer';


function App() {
  return (
    <div className="min-h-screen  selection:bg-indigo-100 selection:text-indigo-900">
     <Navbar/>
      <main>
        <Hero/>
        <Course/>
        <Projects/>
        <Module/>
        <Companies/>
        <Plans/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
