import Image from 'next/image'
import React from 'react'

import my_image from "../../../images/user-image.png"
import code_icon from  "../../../images/code-icon.png"
import edu_icon from "../../../images/edu-icon.png"
import proj_icon from "../../../images/project-icon.png"

import vscode_icon from "../../../images/vscode.png"
import figma_icon from "../../../images/figma.png"
import git_icon from "../../../images/git.png"

export default function AboutMe() {
    const infolist = [
        { icon:code_icon, title:"Languages", description:"Python, Java, HTML, CSS, React JS,Next JS"},
        { icon:edu_icon, title:"Education", description:"B.Tech in Computer Science Engineering"},
        { icon:proj_icon, title:"Projects", description:"Built 3 simple projects"}
    ]

    const toolslist = [vscode_icon, figma_icon, git_icon]

    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">
                Introduction
            </h4>

            <h2 className="text-center text-5xl font-Ovo">
                About Me
            </h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="w-64 sm:w-80 rounded-3xl max-w-none">
                    <Image src={my_image} alt="Anudra" className="w-full rounded-3xl"/>
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">
                        I am a passionate 2nd-year B. Tech student, interested in coding and problem-solving and technology. 
                        I want to develop myself in the software development and programming field to learn most of the things I have not come across this far. 
                        I enjoy collaborating with like-minded peers and contributing to innovative projects
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {infolist.map(({icon,title,description},index)=> (
                            <li key={index} 
                            className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0px_0px_#000000]">
                                
                                <Image src={icon} alt="" className="w-7 mt-3" />
                                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                                <p className="text-gray-600 text-sm">{description}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className="my-6 text-gray-700 font-Ovo">
                        Tools I Use
                    </h4>
                    <ul className="flex items-center gap-3 sm:gap-5">
                        {toolslist.map((tool,index) => (
                            <li key={index} 
                            className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 rounded-lg  hover:bg-cyan-50 hover:-translate-y-1 duration-500 ">
                                <Image src={tool} alt="" className="w-5 sm:w-7"/>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    )
}
