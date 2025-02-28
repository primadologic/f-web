
import NavbarComponent from "@/components/navbar";
import ReportComponent from "./reportComponent";
import FooterComponent from "@/components/footer";
import ReportHeader from "./header";
import SEO from "@/components/reactHelmet";





export default function ReportMainComponent() {

    return (
       <>
            
            <SEO
                title="FraudWall | Report"
                description="A crowd sourced AI powered platform for reporting and verifying fraudulent numbers, social accounts and stolen devices"
                canonical="https://fraudwall.ai"
                twitter_image="https://res.cloudinary.com/dcdwohxmw/image/upload/v1739336302/Afrilogic%20Solutions/FraudWall/twitter-image_gmmbb1.png"
                og_image="https://res.cloudinary.com/dcdwohxmw/image/upload/v1739336302/Afrilogic%20Solutions/FraudWall/opengraph-image_o7nbj4.png"
                
            />
            <header>
                <NavbarComponent />
            </header>

                <main>
                    <ReportHeader />
                    <ReportComponent />
                </main>

            <footer className="">
                <FooterComponent />
            </footer>
       </>
    )
    
};
