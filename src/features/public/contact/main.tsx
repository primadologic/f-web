

import ContactForm from "./contactForm";
import ContactHeader from "./contactHeader";
import '@/index.css'
import FooterComponent from "@/components/footer";
import NavbarComponent from "@/components/navbar";




export default function ContactMainComponent() {

    return (
        <div className="font-space">
            <header>
                <NavbarComponent />
            </header>

                <main>
                    <ContactHeader />
                    <ContactForm />
                </main>

            <footer className="">
                <FooterComponent />
            </footer>
       </div>
    )
    
};
