

import HomeComponent from "./homeComponent";
import "@/index.css"
import FooterComponent from "@/components/footer";
import NavbarComponent from "@/components/navbar";
import HomeHeader from "./header";
import SEO from "@/components/reactHelmet";



export default function HomeMainComponent() {

    return (
       <>
            <SEO
                title="FraudWall | Search and report fraudulent phone numbers"
                description="A crowd sourced AI powered platform for reporting and verifying fraudulent numbers, social accounts and stolen devices"
                canonical="https://fraudwall.ai"
                twitter_image="https://res.cloudinary.com/dcdwohxmw/image/upload/v1739336302/Afrilogic%20Solutions/FraudWall/twitter-image_gmmbb1.png"
                og_image="https://res.cloudinary.com/dcdwohxmw/image/upload/v1739336302/Afrilogic%20Solutions/FraudWall/opengraph-image_o7nbj4.png"
                
            />
            <header>
                <NavbarComponent />
            </header>

                <main className="">
                    <HomeHeader />
                    <HomeComponent />
                </main>

            <footer className="">
                <FooterComponent />
            </footer>
       </>
    )
    
};
