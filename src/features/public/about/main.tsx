
import AboutComponent from "./aboutBody";
import "../../../index.css"
import NavbarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";
import AboutHeader from "./header";



export default function AboutMainComponent() {

    return (
        <div className="font-space">
            <header>
                <NavbarComponent />
            </header>

                <main>
                    <AboutHeader />
                    <AboutComponent />
                </main>

            <footer className="">
                <FooterComponent />
            </footer>
       </div>
    )
    
};
