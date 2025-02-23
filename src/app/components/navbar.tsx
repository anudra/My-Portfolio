"use client";

import Image from "next/image"
import {useEffect, useRef, useState} from 'react';

import logo from '../../../images/logo.png';
import arrow_icon from "../../../images/arrow-icon.png";
import navbar_bg from "../../../images/header-bg-color.png";
import moon_icon from "../../../images/moon_icon.png";
import menu_icon from "../../../images/menu-black.png";


export default function Navbar() {
    
    const [isScroll, setIsScroll] = useState(false);
    const menuRef = useRef<HTMLUListElement |null>(null);

    const openMenu = ()=> {
        if (menuRef.current) {
            menuRef.current.style.transform = "translateX(0rem)";
        }
    }

    const closeMenu = ()=> {
        if (menuRef.current) {
            menuRef.current.style.transform = "translateX(16rem)";
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(scrollY>50) { setIsScroll(true); }
            else { setIsScroll(false); }
        })
    },[])

    return (
        <div>
            
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
            <Image src={navbar_bg} alt="" className="w-full"/>
        </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50 flex justify-between items-center ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-md" : ""}`}>
            
            <a href="#top">
                <Image src={logo} alt="my logo" className="w-28 cursor-pointer mr-14"/> 
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "": " bg-white shadow-sm bg-opacity-50"}`}>
                <li> <a className="font-Ovo" href="#top">Home</a> </li>
                <li> <a className="font-Ovo" href="#about">About Me</a> </li>
                <li> <a className="font-Ovo" href="#skills">My Skills</a> </li>
                <li> <a className="font-Ovo" href="#work">Work</a> </li>
                <li> <a className="font-Ovo" href="#contact">Contact Me</a> </li>
            </ul>

            <div className="flex items-center gap-4">
                <button>
                    <Image src={moon_icon} alt="" className="w-6" />
                </button>

                <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo">Contact <Image src={arrow_icon} alt="" className="w-3"/></a>
            
                <button className="block md:hidden ml-3" onClick={openMenu}>
                    <Image src={menu_icon} alt="" className="w-6"/>
                </button>
            </div>

            <ul ref={menuRef} className="transform translate-x-72 flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 botton-0 w-64 z-50 h-screen bg-cyan-100 transition duration-500 ">
                
                <div className="absolute top-7 right-7" onClick={closeMenu}>
                    <Image src={menu_icon} alt="" className="w-5 cursor-pointer"/>
                </div>
                
                <li> <a className="font-Ovo" onClick={closeMenu} href="#top">Home</a> </li>
                <li> <a className="font-Ovo" onClick={closeMenu} href="#about">About Me</a> </li>
                <li> <a className="font-Ovo" onClick={closeMenu} href="#skills">My Skills</a> </li>
                <li> <a className="font-Ovo" onClick={closeMenu} href="#work">Work</a> </li>
                <li> <a className="font-Ovo" onClick={closeMenu} href="#contact">Contact Me</a> </li>
            </ul>
            
        </nav>
        </div>
    )
}
