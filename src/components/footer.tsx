

import { IconBrandFacebook, IconBrandX, IconBrandLinkedin, IconBrandInstagram, IconBrandTelegram } from "@tabler/icons-react"
import { Separator } from "../components/ui/separator"
import { Link } from "@tanstack/react-router"

// Images
import acfe_logo from "/assets/acfe.png"
import logo from "/assets/logo_white_wall.png"


export default function FooterComponent() {


    return (

        <div className="bg-custom-footer-bg flex sm:flex-row justify-center items-center px-5 py-20">
            <div className="md:w-full md:max-w-full xl:w-[84vw] xl:max-w-[84vw] lg:w-full lg:px-10 w-full space-y-5 px-2">
                <div className=""></div>
                <Separator className="bg-[#413f3f] md:w-full md:max-w-full xl:w-[80vw] xl:max-w-[90vw] lg:px-10 w-full px-5" />

                <div className="sm:flex sm:flex-row sm:justify-center sm:py-10 sm:w-full md:w-full md:max-w-full xl:w-[80vw] xl:max-w-[90vw] flex flex-col  justify-between ">
                    <div className="sm:flex sm:flex-row sm:justify-between sm:items-center lg:flex lg:flex-row md:grid md:grid-cols-2 sm:gap-10 w-full flex flex-col justify-between items-start gap-10">
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
                                    className="bg-custom-dark-gray sm:px-6 sm:py-3 text-primary-foreground rounded-xl px-3 py-3 hover:bg-custom-dark-gray-active transition-colors duration-300 hover:delay-150"
                                >
                                   <div className="flex flex-row gap-3 items-center justify-center ">
                                        <span className="sm:text-lg text-base">Chat on Telegram</span>
                                        <IconBrandTelegram size={24} className="sm:w-9 sm:h-9 w-5 h-5 rounded-xl " />
                                   </div>

                                </button>
                            </div>
                        </div>

                        <div className="">
                            <a href={"https://acfe.com"} target="_blank">
                                <img 
                                    alt="Association of Certified Fraud Examiners"
                                    src={acfe_logo}
                                    className="object-fill sm:w-[20rem] w-[60vw] max-h-min h-full"
                                />
                            </a>
                        </div>

                        <div className="flex sm:flex-col flex-col gap-3">
                            <b className="capitalize font-semibold text-custom-light-gray text-lg">
                                Social Media
                            </b>
                            <div className="flex sm:flex-row sm:gap-x-2  sm:gap-y-3 sm:justify-center sm:items-center md:max-w-max justify-start gap-x-2">
                                <div className="w-full flex flex-row justify-center items-center">
                                    <button onClick={() => window.open('https://www.facebook.com/fraudwallai', '_blank') } className="footer-icon-btn hover:bg-custom-dark-gray-active transition-colors duration-300 hover:delay-150">
                                        <IconBrandFacebook size={24} className="footer-icon"/>
                                    </button>
                                </div>
                                <div className="">
                                    <button onClick={() => window.open('https://x.com/fraudwallgh', '_blank')}  className="footer-icon-btn hover:bg-custom-dark-gray-active transition-colors duration-300 hover:delay-150">
                                        <IconBrandX size={24} className="footer-icon" />
                                    </button>
                                </div>
                                <div className="w-full flex flex-row justify-center items-center">
                                    <button onClick={() => window.open('https://instagram.com/fraudwallgh', '_blank')} className="footer-icon-btn hover:bg-custom-dark-gray-active transition-colors duration-300 hover:delay-150 ">
                                        <IconBrandInstagram className="footer-icon" />
                                    </button>
                                </div>
                                <div className="w-full flex flex-row justify-center items-center">
                                    <button onClick={() => window.open('https://linkedin.com/company/fraudwall-ai', '_blank')} className="footer-icon-btn hover:bg-custom-dark-gray-active transition-colors duration-300 hover:delay-150">
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