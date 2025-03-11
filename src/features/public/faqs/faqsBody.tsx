import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



export default function FaqsBody() {

    return (
        <section className="bg-custom-primary-400 flex justify-center items-center">
            <div className="sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-full sm:gap-10 sm:py-14 sm:px-20 flex flex-col justify-center w-full items-center px-5 py-14">

                <Accordion type="single" collapsible className="sm:w-[45rem] lg:w-[40rem] xl:w-[40vw] sm:text-white md:w-full w-full text-white">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-start sm:font-semibold sm:text-lg text-lg font-semibold">What is Fraudwall?</AccordionTrigger>
                        <AccordionContent className="sm:text-justify sm:text-base text-sm text-justify">
                            Fraudwall is an innovative platform to help you identify and report fraudulent phone 
                            numbers. By allowing you to check if a phone number is associated with scams, Fraudwall 
                            empowers you to make safer online decisions, whether through social media, messaging 
                            apps, or payment platforms.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="!text-start sm:font-semibold sm:text-lg text-lg font-semibold">How does Fraudwall help protect me from online scams?</AccordionTrigger>
                        <AccordionContent className="sm:text-justify sm:text-base text-sm text-justify">
                            Fraudwall uses Artificial Intelligence (AI) to analyze user-reported data and flag suspicious 
                            phone numbers. Fraudwall allows users to verify and/or report phone numbers as non
                            fraudulent before engaging in online transactions. This helps prevent online scams and 
                            contributes to making the internet a safer place for everyone.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-start sm:font-semibold sm:text-lg text-lg font-semibold"> How do I search for a number on Fraudwall?</AccordionTrigger>
                        <AccordionContent className="sm:text-justify sm:text-base text-sm text-justify">
                            Searching for a number on Fraudwall is simple. Visit our homepage, enter the phone 
                            number into the search bar, and click <b>&apos;verify&apos;</b>. Our system will quickly show you if the 
                            number has been reported as fraudulent, allowing you to make an informed decision.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-start sm:font-semibold sm:text-lg text-lg font-semibold">What should I do if I suspect a phone number is a scam number? </AccordionTrigger>
                        <AccordionContent className="sm:text-justify sm:text-base text-sm text-justify">
                            If you suspect a phone number is being used for fraudulent activities, you should report it 
                            on Fraudwall. Click on &apos;Report a Number,&apos; fill in the details about your interaction, and 
                            explain why you believe it&apos;s a scam. Sharing your experience helps protect others in the 
                            community from similar threats.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-start sm:font-semibold sm:text-lg text-lg font-semibold">Is my information safe when I use Fraudwall?</AccordionTrigger>
                        <AccordionContent className="sm:text-justify sm:text-base text-sm text-justify">
                        Yes, your information is safe with us. Fraudwall is committed to maintaining your privacy and security. We use advanced encryption and data protection measures to ensure that any information you provide for reporting a suspected number is kept confidential and secure.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="text-start sm:font-semibold sm:text-lg text-lg font-semibold">How does Fraudwall use the reports submitted by users?</AccordionTrigger>
                        <AccordionContent className="sm:text-justify sm:text-base text-sm text-justify">
                            The reports submitted by users are crucial to improving our system. We use this data to 
                            train our AI model, making it smarter and more effective at detecting fraudulent numbers. 
                            Your reports help enhance the accuracy of our warnings and alerts, contributing to a safer 
                            online environment for everyone. 
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="text-start sm:font-semibold sm:text-lg text-lg font-semibold">Can I access Fraudwall through other platforms? </AccordionTrigger>
                        <AccordionContent className="sm:text-justify sm:text-base text-sm text-justify">
                            Absolutely! Fraudwall is designed to be accessible wherever you are. In addition to our 
                            website, you can also verify and report numbers using our Telegram bot. We’re continually 
                            working to expand our reach, so you can expect more platform integrations in the future. 
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger className="text-start sm:font-semibold sm:text-lg text-lg font-semibold">What should I do if I have already fallen victim to a scam?</AccordionTrigger>
                        <AccordionContent className="sm:text-justify sm:text-base text-sm text-justify">
                            If you&apos;ve unfortunately fallen victim to a scam, reporting the fraudulent number on 
                            Fraudwall can help prevent others from experiencing the same ordeal. Additionally, we 
                            recommend contacting your bank or relevant authorities to take further action and protect 
                            your financial information. 
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger className="text-start sm:font-semibold sm:text-lg text-lg font-semibold">How does Fraudwall contribute to a safer online community?</AccordionTrigger>
                        <AccordionContent className="sm:text-justify sm:text-base text-sm text-justify">
                        Fraudwall thrives on community engagement. Every report you make helps prevent scams. By using our platform to check numbers before engaging in transactions, you&apos;re playing a vital role in building a safer financial community. 
                        Together, we can outsmart fraudsters and create a secure online space for everyone.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                        <AccordionTrigger className="text-start sm:font-semibold sm:text-lg text-lg font-semibold">How can I get involved with Fraudwall?</AccordionTrigger>
                        <AccordionContent className="sm:text-justify sm:text-base text-sm text-justify">
                            Joining the Fraudwall community is easy! Start by using our platform to check and report 
                            suspicious numbers. You can also spread the word to friends and family, encouraging 
                            them to stay vigilant online. Every bit of participation helps in our mission to make the 
                            internet a safer place.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>

            </div>
        </section>
    )
    
};
