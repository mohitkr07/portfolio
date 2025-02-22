'use client'
import React, { useEffect } from 'react'

const Navbar = () => {

    const [isScrolled, setisScrolled] = React.useState(false)

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 10){
                setisScrolled(true)
            }
            else{
                setisScrolled(false)
            }
        })
    }, [])
    
    const tabs = ['Home', 'My Work', 'Contact Me', 'Blog']
    return (
        <div className={`px-10 w-full flex h-16 items-center sticky top-0 bg-white ${isScrolled ? 'shadow-md' : ''} transition-shadow duration-500 ease-in-out z-20`}>
            <div className='flex w-[50%] gap-2'>
                {tabs.map((tab, index) => <button key={index} className='py-1 px-4 rounded duration-200 ease-in-out'>
                    {tab}
                </button>)}
            </div>
        </div>
    )
}

export default Navbar
