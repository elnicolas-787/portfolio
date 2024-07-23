import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <div className="mx-auto overflow-x-hidden">
      <Header />
      <Home />
      <About />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
