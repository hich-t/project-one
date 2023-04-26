import { useEffect, useRef, useState } from 'react';
import './App.css';

import Homepage from "./Homepage";
import Navbar from "./Navbar";
import People from "./People";

const App = () => {
  const homepageRef = useRef(null);
  const peopleRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);

  const sectionRefs = [homepageRef, peopleRef];

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const deltaY = e.deltaY;

      if (deltaY > 0 && currentSection < sectionRefs.length - 1) {
        setCurrentSection((prevSection) => {
          const nextSection = prevSection + 1;
          sectionRefs[nextSection].current.scrollIntoView({ behavior: 'smooth' });
          return nextSection;
        });
      } else if (deltaY < 0 && currentSection > 0) {
        setCurrentSection((prevSection) => {
          const prevSectionIndex = prevSection - 1;
          sectionRefs[prevSectionIndex].current.scrollIntoView({ behavior: 'smooth' });
          return prevSectionIndex;
        });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection, sectionRefs]);

  return (
    <div className="App">
      {currentSection === 0 && <Navbar className={currentSection === 0 ? 'show' : 'hide'}  />}

      <div ref={homepageRef}>
        <Homepage />
      </div>

      <div ref={peopleRef}>
        <People />
      </div>
    </div>
  );
};

export default App;
