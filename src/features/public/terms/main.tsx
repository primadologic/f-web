import SEO from "@/components/reactHelmet";
import FooterComponent from "../../../components/footer";
import NavbarComponent from "../../../components/navbar";
import TermsBody from "./termsBody";
import TermsHeader from "./termsHeader";



export default function TermsMainComponent() {

    return (
       <>
            <SEO
                title="FraudWall | About"
                description="A crowd sourced AI powered platform for reporting and verifying fraudulent numbers, social accounts and stolen devices"
                canonical="https://fraudwall.ai"
                twitter_image="https://res.cloudinary.com/dcdwohxmw/image/upload/v1739336302/Afrilogic%20Solutions/FraudWall/twitter-image_gmmbb1.png"
                og_image="https://res.cloudinary.com/dcdwohxmw/image/upload/v1739336302/Afrilogic%20Solutions/FraudWall/opengraph-image_o7nbj4.png"
                 og_url="https://fraudwall.ai/terms"
            />
          
                <NavbarComponent />
        
                <main>
                    <TermsHeader />
                   <TermsBody />
                </main>

            <footer className="">
                <FooterComponent />
            </footer>
       </>
    )
    
};
