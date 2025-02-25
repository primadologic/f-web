import FooterComponent from "../../../components/footer";
import NavbarComponent from "../../../components/navbar";
import FaqsBody from "./faqsBody";
import FaqsHeader from "./faqsHeader";



export default function FaqsMainComponent() {

    return (
        <div className="font-space">
            <header>
                <NavbarComponent />
            </header>

                <main>
                    <FaqsHeader />
                    <FaqsBody />
                </main>

            <footer className="">
                <FooterComponent />
            </footer>
       </div>
    )
    
};
