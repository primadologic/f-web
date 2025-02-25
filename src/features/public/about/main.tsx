import FooterComponent from "../../../components/footer";
import NavbarComponent from "../../../components/navbar";
import AboutComponent from "./aboutBody";
import AboutHeader from "./header";
import "../../../index.css"

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
