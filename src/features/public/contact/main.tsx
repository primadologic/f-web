

import ContactForm from "./contactForm";
import ContactHeader from "./contactHeader";
import '@/index.css'
import Mainlayout from "@/features/main-layout";




export default function ContactMainComponent() {

    return (
        <>
            <Mainlayout>
                <ContactHeader />
                <ContactForm /> 
            </Mainlayout>
       </>
    )
    
};
