import './App.css';
import React,{useState,useEffect} from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from './Pages/Contact';
import ScrollUp from './Components/ScrollUp';
import Links from './Components/Links';
function App() {
  const [isTop, setIsTop] = useState(true);

  const checkScrollTop = () => {
    if (window.pageYOffset === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);
  return (
    <div>
      {isTop ? <></>  :<ScrollUp />}
      
      <Links />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
