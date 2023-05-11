

import { useEffect, useRef, useState } from 'react';
import "../Styles/Tokyo.css";
import "../../src/App.css"
import TokyoIntro from "./TokyoIntro";
import TokyoMap from "./TokyoMap";
import TokyoMetro from "./TokyoMetro";
import Navbar from '../HomeComponents/Navbar';
import TokyoHomepage from './TokyoHomepage';

const Tokyo = () => {
    const tokyoHomePageRef = useRef(null);
    const tokyoIntroRef = useRef(null);
    const tokyoMapRef = useRef(null);
    const tokyoMetroRef = useRef(null);
    const [currentSection, setCurrentSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    
    const sectionRefs = [tokyoHomePageRef, tokyoIntroRef, tokyoMapRef, tokyoMetroRef];


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
        <div className="Tokyo">
        {currentSection === 0 && <Navbar className={currentSection === 0 ? 'show' : 'hide'}  />}

        <div ref={tokyoHomePageRef}>
          <TokyoHomepage /> 
        </div>
  
        <div ref={tokyoIntroRef}>
          <TokyoIntro />
        </div>
  
        <div ref={tokyoMapRef}>
          <TokyoMap />
        </div>
  
        <div ref={tokyoMetroRef}>
          <TokyoMetro />
        </div>
  
    
  
      </div>
    );
    }


    export default Tokyo;