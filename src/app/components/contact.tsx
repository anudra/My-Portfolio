import React from 'react';
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 text-center">
            <h4 className="text-lg font-Ovo mb-2">
                Contact Me
            </h4>
            <h2 className="text-5xl font-Ovo mb-8">
                Get in Touch
            </h2>
            <div className="flex items-center justify-center gap-10">
                <a href="https://github.com/anudra" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="w-10 text-cyan-400"/>
                </a>

                <a href="https://www.instagram.com/anu_8807_/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} className="w-10 text-cyan-400"/>
                </a>

                <a href="https://linkedin.com/in/yourusername" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="w-10 text-cyan-400"/>
                </a>

                <a href="https://x.com/anu_8807_" target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} className="w-10 text-cyan-400"/>
                </a>
            </div>
        </div>
    );
}
