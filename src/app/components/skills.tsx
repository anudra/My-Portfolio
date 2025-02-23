import React from 'react'

import web_icon from "../../../images/web-icon.png"
import prog_icon from "../../../images/mobile-icon.png"
import ui_icon from "../../../images/ui-icon.png"
import frame_icon from "../../../images/graphics-icon.png"
import Image from 'next/image'

export default function Skills() {

    const skillslist = [
        {icon:prog_icon, title:"Programming Languages", desc:"I can code in Python, Java, JavaScript and TypeScript."},
        {icon:web_icon, title:"Web Development", desc:"I can build web applications using HTML, CSS and Javascript."},
        {icon:ui_icon, title:"UI/UX Design", desc:"I can design user interfaces using Figma."},
        {icon:frame_icon, title:"Frameworks", desc:"I can work with React JS and Next JS."}
    ]

    return (
        <div id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">
                What I Offer
            </h4>

            <h2 className="text-center text-5xl font-Ovo">
                My Skills
            </h2>

            {/*<p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-lg sm:text-[18px] font-Ovo"> 
               DESCRIPTION
            </p>*/}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 ">
                {skillslist.map(({icon,title,desc},index)=> (
                    
                    <div key={index} className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0px_0px_#000000] hover:bg-lightHover hover:-translate-y-1 duration-500">
                        
                        <Image src={icon} alt="" className="w-10" />
                        <h3 className="font-Outfit font-medium text-lg my-4 text-gray-800">
                            {title}
                        </h3>
                        <p className="font-Outfit text-md text-gray-600 leading-5 font-thin">
                            {desc}
                        </p>

                    </div>
                ))}
            </div>
            


        </div>
  )
}
