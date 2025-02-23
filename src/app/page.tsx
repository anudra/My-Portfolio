import Image from "next/image";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Navbar from "./components/navbar";
import Header from "./components/header";
import AboutMe from "./components/aboutme";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}
