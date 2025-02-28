

import ContactForm from "./contactForm";
import ContactHeader from "./contactHeader";
import '@/index.css'
import FooterComponent from "@/components/footer";
import NavbarComponent from "@/components/navbar";
import SEO from "@/components/reactHelmet";




export default function ContactMainComponent() {

    return (
        <>
             <SEO
                title="FraudWall | Contact us"
                description="A crowd sourced AI powered platform for reporting and verifying fraudulent numbers, social accounts and stolen devices"
                canonical="https://fraudwall.ai"
                twitter_image="https://res.cloudinary.com/dcdwohxmw/image/upload/v1739336302/Afrilogic%20Solutions/FraudWall/twitter-image_gmmbb1.png"
                og_image="https://res.cloudinary.com/dcdwohxmw/image/upload/v1739336302/Afrilogic%20Solutions/FraudWall/opengraph-image_o7nbj4.png"
                og_url="https://fraudwall.ai/contact"
            />
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
       </>
    )
    
};
