import { useEffect, useRef, useState } from 'react';
import './App.css';

import Homepage from "./HomeComponents/Homepage";
import Navbar from "./HomeComponents/Navbar";
import People from "./HomeComponents/People";
import Culture from "./HomeComponents/Culture";
import Food from "./HomeComponents/Food";

const App = () => {
  const homepageRef = useRef(null);
  const peopleRef = useRef(null);
  const cultureRef = useRef(null);
  const foodRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const sectionRefs = [homepageRef, peopleRef, cultureRef, foodRef];

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const deltaY = e.deltaY;

      if (!isScrolling) {
        setIsScrolling(true);

        if (deltaY > 0 && currentSection < sectionRefs.length - 1) {
          const nextRect = sectionRefs[currentSection + 1].current.getBoundingClientRect();
          window.scrollTo({
            top: window.pageYOffset + nextRect.top,
            behavior: 'smooth'
          });
          setCurrentSection(currentSection + 1);
        } else if (deltaY < 0 && currentSection > 0) {
          const prevRect = sectionRefs[currentSection - 1].current.getBoundingClientRect();
          window.scrollTo({
            top: window.pageYOffset + prevRect.top,
            behavior: 'smooth'
          });
          setCurrentSection(currentSection - 1);
        }

        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection, sectionRefs, isScrolling]);

  return (
    <div className="App">
      {currentSection === 0 && <Navbar className={currentSection === 0 ? 'show' : 'hide'}  />}

      <div ref={homepageRef}>
        <Homepage />
      </div>

      <div ref={peopleRef}>
        <People />
      </div>

      <div ref={cultureRef}>
        <Culture />
      </div>

      <div ref={foodRef}>
        <Food />
      </div>

    </div>
  );
};

export default App;
