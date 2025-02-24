
import { useState } from 'react';
import { Link } from '@tanstack/react-router';

// Images
import logo from '/assets/fraudwall-logo2.png'
import { MenuIcon, XIcon } from "lucide-react";




export default function NavbarComponent() {

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    // useEffect(() => {
    //     setSidebarOpen(false)
    // }, [pathname])


    return (

        <div className="sm:w-full md:w-full sm:flex sm:flex-row sm:justify-center sm:items-center w-full flex flex-row justify-between items-center">
            <nav className="bg-white sm:w-[80vw] sm:flex sm:justify-between sm:items-center lg:w-full lg:px-10 xl:w-[84vw] md:w-full  flex flex-row justify-between items-center py-5  px-5">

                <Link to="/">
                    <div className="">
                        <img 
                             src={logo}
                             alt='logo'
                             className='object-fill sm:w-[10rem] w-[9rem]'
                        />
                    </div>      
                </Link>
               
                <div className="text-black text-xl hidden sm:hidden  md-767:hidden lg:block">
                    <ul className="flex gap-10 items-center xl:gap-10 sm:gap-5">
                        <Link to="/" activeProps={{ className: " font-bold text-custom-primary-500" }} className="focus:text-cos-brown-500 text-lg font-semibold px-2 py-2 hover:bg-custom-active-gray hover:bg-opacity-50 hover:rounded-md">
                            <li className="">Home</li> 
                        </Link>
                        <Link to="/about" activeProps={{ className: " font-bold text-lg text-custom-primary-500" }} className="focus:text-custom-primary-500 text-lg font-semibold px-2 py-2 hover:bg-custom-active-gray hover:bg-opacity-50 hover:rounded-md">
                            <li className="">About us</li>
                        </Link>
                        <button  className="text-lg font-semibold px-2 py-2 focus:text-custom-primary-500   hover:bg-custom-active-gray hover:bg-opacity-50 hover:rounded-md">
                            <li>Notify me</li>
                        </button>
                        <Link to="/faqs" activeProps={{ className: " font-bold text-custom-primary-500" }} className=" focus:text-custom-primary-500  text-lg font-semibold px-2 py-2 hover:bg-custom-active-gray hover:bg-opacity-50 hover:rounded-md">
                            <li className="">FAQs</li>
                        </Link>
                        <Link to="/contact" activeProps={{ className: " font-bold text-custom-primary-500" }} className=" focus:text-custom-primary-500 text-lg font-semibold px-2 py-2 hover:bg-custom-active-gray hover:bg-opacity-50 hover:rounded-md">
                            <li className="">Contact us</li>
                        </Link>
                    </ul>
                  
                </div>  
            </nav>
            
          

            <div className="flex pr-5">
                <div className="">
                    <button onClick={toggleSidebar} aria-label="menu button" className="sm:block lg:hidden md-767:!block top-4 right-4 z-20 p-1 bg-gray-200 rounded-md focus:outline-none outline-none border-none text-2xl border-2 border-black">
                        <MenuIcon size={30} color={"#A55313"} strokeWidth={3}  className=""/>
                    </button>
                    {sidebarOpen && 
                        <div onClick={toggleSidebar} className="fixed sm:block lg:hidden md-767:!block inset-0 bg-black bg-opacity-50 z-30 "></div>
                    }
                </div>

                <nav  className={`fixed sm:block md-767:!block lg:hidden top-0 left-0 bottom-0 z-40 w-72 bg-gray-100 p-4 transition-all duration-500 ease-in-out transform ${sidebarOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} overflow-y-auto sm:translate-x-0`}>
                   {sidebarOpen && (
                        <div className="w-full flex justify-between items-center p-2">
                             <Link to="/">
                                <div className="">
                                    <img 
                                         src={logo}
                                         alt='logo'
                                         className='object-fill sm:w-[10rem] w-[9rem]'
                                    />
                             </div>      
                            </Link>
                            <button onClick={toggleSidebar} className="bg-gray-200  rounded-md">
                                <XIcon size={30} color={"#A55313"} strokeWidth={3}  />
                            </button>
                        </div>
                    )}
                  
                    <ul className="flex flex-col gap-3 justify-start text-start items-start xl:gap-10 sm:gap-5 mt-10">
                        <Link to="/" activeProps={{ className: " font-bold text-custom-primary-500" }} className="focus:text-cos-brown-500 text-lg font-semibold px-2 py-2 hover:bg-custom-active-gray hover:bg-opacity-50 hover:rounded-md">
                            <li className="">Home</li> 
                        </Link>
                        <Link to="/about" activeProps={{ className: " font-bold text-custom-primary-500" }} className="focus:text-cos-brown-500 text-lg font-semibold px-2 py-2 hover:bg-custom-active-gray hover:bg-opacity-50 hover:rounded-md">
                            <li className="">About us</li>
                        </Link>
                        <button  className="text-lg font-medium px-2 py-2 focus:text-custom-primary-500   hover:bg-custom-active-gray hover:bg-opacity-50 hover:rounded-md">
                            <li>Notify me</li>
                        </button>
                        <Link to="/faqs" activeProps={{ className: " font-bold text-custom-primary-500" }} className="focus:text-cos-brown-500 text-lg font-semibold px-2 py-2 hover:bg-custom-active-gray hover:bg-opacity-50 hover:rounded-md">
                            <li className="">FAQs</li>
                        </Link>
                        <Link to="/contact" activeProps={{ className: " font-bold text-custom-primary-500" }} className="focus:text-cos-brown-500 text-lg font-semibold px-2 py-2 hover:bg-custom-active-gray hover:bg-opacity-50 hover:rounded-md">
                            <li className="">Contact us</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

