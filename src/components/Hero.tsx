import React from 'react'
import profileBg from '../assets/yellow-bg.svg'
import Image from 'next/image'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LeetCodeIcon from '../assets/leetcode.svg'
const Hero = () => {
    return (
        <div className="grow flex flex-col sm:flex-row w-full">
            <div className="sm:w-[50%] relative">
                {/* <img src="/favicon.ico" alt="logo" className="h-12 w-12" /> */}
                {/* <img src="../assets/test2.png" alt="" className="" /> */}
                {/* <Image src={profileBg} style={{ transform: 'scaleX(-1)', position: 'absolute', top: "-2rem" }} alt="profile" /> */}
            </div>

            <div className="h-full flex sm:w-[50%] items-center">
                <div className='w-fit flex flex-col gap-4'>
                    <div className='flex flex-col gap-2 w-fit'>
                        <p className='text-7xl font-bold'>I'm Mohit</p>
                        <p className='text-2xl font-bold'>Software Developer</p>
                        <p className='text-xl font-semibold'>I build Websites</p>
                        {/* <p className='text-xl font-semibold'>I build Mobile Applications</p>
                        <p className='text-xl font-semibold'>I integrate AI chatbots</p> */}
                    </div>

                    <div className="flex gap-2 w-fit">
                        <LinkedInIcon />
                        <GitHubIcon />
                        <Image src={LeetCodeIcon} alt="LeetCode" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
