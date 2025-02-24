
// import { Link } from "@tanstack/react-router";
// import { useEffect, useState } from "react";


export default function AboutComponent() {
    // const [animationTriggered, setAnimationTriggered] = useState(false);
    
    // useEffect(() => {
    //     setAnimationTriggered(true);
    // }, []);

    return (

        <div className="bg-custom-primary-400 text-primary-foreground sm:w-full sm:flex sm:justify-center sm:items-center w-full justify-center items-center">
            <div className="sm:w-[50vw] w-full px-5 py-10 space-y-10">
                <div className="">
                    <h2 className="font-semibold text-[24px]">About Fraudwall</h2>
                    <p className="sm:text-justify sm:text-base font-medium text-sm text-justify">
                        At Fraudwall, our mission is to make the internet a safer place for everyone. In an age 
                        where online interactions and transactions have become an integral part of our daily lives, 
                        the risk of encountering fraudulent activities has increased significantly. Fraudwall was 
                        born out of a desire to protect individuals and businesses from the growing threat of 
                        internet fraud. 
                    </p>
                </div>
                <div className="">
                   
                    <div className="leading-[24.38px] flex flex-col gap-y-8 gap-x-5 break-words ">
                        <div className="flex flex-col justify-start gap-2">
                            <h2 className="font-semibold text-[24px]">What We Do</h2>
                            <p className="sm:text-justify sm:text-base font-medium text-sm text-justify">
                                Fraudwall is an innovative platform that empowers users to report, detect, and avoid 
                                internet fraud. We provide a comprehensive solution for identifying potential fraud cases 
                                by allowing users to check if a phone number or contact is associated with fraudulent 
                                activities before engaging in any transactions. Whether it is through social media, 
                                messaging apps, or payment platforms, Fraudwall gives you the confidence to interact 
                                online safely. 
                            </p>
                        </div>
                        <div className="flex flex-col justify-start gap-2">
                            <h2 className="font-semibold text-[24px]">How It Works</h2>
                            <p className="sm:text-justify sm:text-base font-medium text-sm text-justify">
                                Our platform harnesses the power of Artificial Intelligence (AI) to detect and flag potential 
                                fraud cases. We collect data from user reports and use this information to train our AI 
                                model, making it smarter and more efficient over time. This enables Fraudwall to provide 
                                accurate, fair, and timely alerts on suspicious numbers, helping you avoid swindles before 
                                they happen. 
                            </p>
                        </div>
                        <div className="flex flex-col justify-start gap-2">
                            <h2 className="font-semibold text-[24px]">Reporting and Awareness</h2>
                            <p className="sm:text-justify sm:text-base font-medium text-sm text-justify">
                                If you have encountered a fraudulent number or, unfortunately, fallen victim to a fraud, 
                                Fraudwall is here to help. Our platform allows you to report such incidents easily, ensuring 
                                that the information is stored securely for future reference. By reporting fraud cases, you 
                                contribute to a safer online community, helping others avoid similar pitfalls. 
                            </p>
                        </div>
                        <div className="flex flex-col justify-start gap-2">
                            <h2 className="font-semibold text-[24px]">Integration and Accessibility</h2>
                            <p className="sm:text-justify sm:text-base font-medium text-sm text-justify">
                                We believe that safety should be accessible to everyone, everywhere. That is why we have 
                                designed Fraudwall to integrate seamlessly with various platforms, including payment 
                                gateways and social media networks. Our <a className="font-medium text-base underline p-2" href={'https://t.me/fraudwall_bot'} target="_blank">Telegram bot</a>  offers an easy and convenient way to check and report numbers, 
                                with plans to expand to other platforms soon.
                            </p>
                        </div>
                        <div className="flex flex-col justify-start gap-2">
                            <h2 className="font-semibold text-[24px]">Our Vision</h2>
                            <p className="sm:text-justify sm:text-base font-medium text-sm text-justify">
                                Fraudwall aims to be the go-to resource for online safety. We envision a world where 
                                internet users can interact and transact with confidence, knowing they are protected from 
                                fraudulent activities. Through continuous innovation and community engagement, we 
                                strive to create a secure digital environment where everyone can thrive.
                            </p>
                        </div>
                        <div className="flex flex-col justify-start gap-2">
                            <h2 className="font-semibold text-[24px]">Join Us</h2>
                            <p className="sm:text-justify sm:text-base font-medium text-sm text-justify">
                                Join the Fraudwall community today and help us build a safer internet. Together, we can 
                                outsmart the fraudsters and make the online world a better place for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}