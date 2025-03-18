import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Technologies from './components/technologies';
import Projects from './components/projects';
import Contact from './components/contact';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-500 selection:text-purple-900 min-h-screen">
      {/* Fixed background element */}
      <div className="fixed top-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-12 min-h-screen overflow-y-hidden">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
