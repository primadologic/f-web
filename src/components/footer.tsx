

import { IconBrandFacebook, IconBrandX, IconBrandLinkedin, IconBrandInstagram, IconBrandTelegram } from "@tabler/icons-react"
import { Separator } from "../components/ui/separator"
import { Link } from "@tanstack/react-router"

// Images
import acfe_logo from "/assets/acfe.png"
import logo from "/assets/logo_white_wall.png"


export default function FooterComponent() {


    return (

        <div className="bg-custom-footer-bg sm:flex sm:flex-row sm:justify-center sm:items-center flex justify-center items-center py-20">
            <div className="md:w-full md:max-w-full xl:w-[84vw] xl:max-w-[84vw] lg:w-full lg:px-10 w-full space-y-5 px-2">
                <div className=""></div>
                <Separator className="bg-[#413f3f] md:w-full md:max-w-full xl:w-[80vw] xl:max-w-[90vw] lg:px-10 w-full px-5" />

                <div className="sm:flex sm:flex-row sm:justify-center sm:py-10 sm:w-full md:w-full md:max-w-full xl:w-[80vw] xl:max-w-[90vw] flex flex-col  justify-between ">
                    <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-10 w-full flex flex-col justify-between items-start gap-10">
                        <div className="flex flex-col gap-y-3 sm:max-w-max">
                           
                            <Link to="/">
                                <div className="">
                                    <img 
                                        src={logo}
                                        alt='logo'
                                        className='object-fill sm:w-[10rem] w-[9rem]'
                                    />
                                </div>      
                            </Link>
                            <div className="sm:flex sm:flex-col sm:gap-y-2 sm:items-start sm:justify-start flex flex-col items-start justify-start gap-y-2">
                                <p className="sm:w-[21rem] text-[13px] text-custom-light-gray font-semibold break-words w-full">
                                    Chat with the FraudWall Chatbot on Telegram. Click the button below.
                                </p>
                                <button
                                    onClick={() => window.open('https://t.me/fraudwall_bot', '_blank')}
                                    className="bg-custom-dark-gray px-12 py-3 text-primary-foreground rounded-xl"
                                >
                                   <div className="flex flex-row gap-3 items-center justify-center ">
                                        <span className="text-lg">Chat on Telegram</span>
                                        <IconBrandTelegram size={24} className="w-9 h-9 rounded-xl " />
                                   </div>

                                </button>
                            </div>
                        </div>

                        <div className="">
                            <a href={"https://acfe.com"} target="_blank">
                                <img 
                                    alt="Association of Certified Fraud Examiners"
                                    src={acfe_logo}
                                    className="object-fill sm:w-[17rem] w-[15rem] h-full"
                                />
                            </a>
                        </div>

                        <div className="sm:flex sm:flex-col sm:gap-3 flex flex-col gap-3">
                            <b className="capitalize font-semibold text-custom-light-gray text-lg">
                                Social Media
                            </b>
                            <div className="sm:flex sm:flex-row sm:gap-x-2  sm:gap-y-3 sm:justify-center sm:items-center flex justify-start">
                                <div className="w-full flex flex-row justify-center items-center">
                                    <button className="footer-icon-btn">
                                        <IconBrandFacebook size={24} className="footer-icon"/>
                                    </button>
                                </div>
                                <div className="">
                                    <button className="footer-icon-btn">
                                        <IconBrandX size={24} className="footer-icon" />
                                    </button>
                                </div>
                                <div className="w-full flex flex-row justify-center items-center">
                                    <button className="footer-icon-btn">
                                        <IconBrandInstagram className="footer-icon" />
                                    </button>
                                </div>
                                <div className="w-full flex flex-row justify-center items-center">
                                    <button className="footer-icon-btn">
                                        <IconBrandLinkedin size={24} className="footer-icon"/>
                                    </button>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )

}