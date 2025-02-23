import Image from 'next/image'
import React from 'react'

import goto_icon from "../../../images/send-icon.png"
import rightarrow_icon from "../../../images/right-arrow-bold.png" 

import proj1 from "../../../public/proj-1.png"
import proj2 from "../../../public/proj-2.png"
import proj3 from "../../../public/proj-3.png"
import proj4 from "../../../public/proj-4.jpg"

export default function Projects() {

    const projectslist = [
        {title: "Simple Quiz App",  description: "A simple quiz app built using Python and Trivia API", bgimage:proj1, link:"https://github.com/anudra/simple-login-signup-.git"},
        {title: "Simple Login-Signup Webpage", description: "A simple login-signup webpage built using React JS", bgimage:proj2, link:"https://github.com/anudra/simple-Quiz-App-Tkinter-.git"},
        {title: "MY portfolio website", description: "My portfolio website built using Next JS", bgimage:proj3, link:"https://github.com/anudra/simple-Quiz-App-Tkinter-.git"},
        {title: "VisionVoice Assist", description: "A object detection with voice feedback built using Python", bgimage:proj4, link:"https://github.com/anudra/simple-Quiz-App-Tkinter-.git"}
    ]

    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">
                My Portfolio
            </h4>

            <h2 className="text-center text-5xl font-Ovo">
                My Project Works
            </h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-lg sm:text-[18px] font-Ovo"> 
                Welcome! Explore my project works showcasing my skills and exposure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
                
                {projectslist.map(({title,description,bgimage,link},index)=> (

                    <a href={link} target="_blank" key={index} style={{backgroundImage: `url(${bgimage.src})`}}
                    className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group opacity-90 z-0">
                        
                        <div className="shadow-2xl shadow-slate-600 bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 group-hover:bg-cyan-200 group-hover:shadow-[4px_4px_65px_-15px_rgba(0,_0,_0,_0.8)]">
                            <div>
                                {/*<h2>
                                    {title}
                                </h2>*/}
                                <p className="font-Outfit text-sm text-gray-800 font-light">
                                    {description}
                                </p>
                            </div>

                            <div className="border rounded-full border-black w-12 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <Image src={goto_icon} alt="Go To" className="w-3" /> 
                            </div> 
                        </div>
                    </a>
                ))}
            </div>

            <a href="" className="w-max flex items-center justify-center gap-2 text-gray-800 border-[0.6px] border-gray-600 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 hover:shadow-[4px_4px_0px_0px_#000000]">
                View More <Image src={rightarrow_icon} alt="" className="w-5" />
            </a>

        </div>
    )
}
