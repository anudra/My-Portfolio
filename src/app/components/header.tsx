import React from 'react'
import Image from "next/image"
import  profile_image from "../../../images/profile-img.png"
import hand_emoji from "../../../images/hand-icon.png"
import download_icon from "../../../images/download-icon.png"

export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <div>
            <Image src={profile_image} alt="" className="rounded-full w-40"/>
        </div>

        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
            Hi! I&apos;m Sai Anudra 
            <Image src={hand_emoji} alt="" className="w-6"/>
        </h3>

        <h1 className="text-3xl sm:text-6xl lg:text-[-66px] font-Ovo">
            a 2nd Year Under-graduate
        </h1>

        <p className="max-w-2xl mx-auto mt-5 text-lg sm:text-[18px] font-Ovo">
            ASPIRING CODER, QUICK LEARNER
        </p>

        <div className="items-center gap-5 mt-5 ml-5 flex">
            <a href="/My resume.pdf" download 
            className="px-10 py-3 border rounded-full border-white bg-black text-white items-center gap-2 flex">
                My resume <Image src={download_icon} alt="" className="w-4"/>
            </a>
        </div>
    </div>
  )
}
