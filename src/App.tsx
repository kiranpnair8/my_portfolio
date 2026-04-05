import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Publications } from './components/sections/Publications';
import { Research } from './components/sections/Research';
import { Experience } from './components/sections/Experience';
import { Awards } from './components/sections/Awards';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Publications />
      <Research />
      <Experience />
      <Awards />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
