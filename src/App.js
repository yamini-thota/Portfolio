import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Header } from './Files/Header';
import { Footer } from './Files/Footer';
import { Home } from './Files/Home';
import { Education } from './Files/Education';
import { Skills } from './Files/Skills';
import { Projects } from './Files/Projects';
import { Contact } from './Files/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
       <Header />
       <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </main>
       <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;