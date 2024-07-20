import React, { useRef } from 'react';
import { Navbar } from './Navbar';
import { Content } from './Content';
import { Footer } from './Footer';

export const HomePage =()=> {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const techRef = useRef(null);
    const projectsRef = useRef(null);
    const scroll =(ref)=> {
        if(ref.current){
            ref.current.scrollIntoView({behavior: 'smooth',block:'start'});
        }
    }
    return (
        <div>
            <Navbar scrollTo={scroll} homeref={homeRef} aboutref={aboutRef} techref={techRef} projectsref={projectsRef} />
            <Content homeref={homeRef} aboutref={aboutRef} techref={techRef} projectsref={projectsRef} />
            <Footer />
        </div>
    )
}