import React, { useRef } from 'react';
import { Navbar } from './Navbar';
import { Content } from './Content';
import { Footer } from './Footer';

export const HomePage =()=> {
    const homeRef = useRef(null);
    const servicesRef = useRef(null);
    const projectsRef = useRef(null);
    const techRef = useRef(null);
    const aboutRef = useRef(null);

    const scroll =(ref)=> {
        if(ref.current){
            ref.current.scrollIntoView({behavior: 'smooth',block:'start'});
        }
    }
    return (
        <div>
            <Navbar scrollTo={scroll} homeref={homeRef} servicesref={servicesRef} aboutref={aboutRef} techref={techRef} projectsref={projectsRef} />
            <Content homeref={homeRef} servicesref={servicesRef} aboutref={aboutRef} techref={techRef} projectsref={projectsRef} />
            <Footer />
        </div>
    )
}