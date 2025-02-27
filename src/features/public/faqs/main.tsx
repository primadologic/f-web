
import FooterComponent from "@/components/footer";
import FaqsBody from "./faqsBody";
import FaqsHeader from "./faqsHeader";
import NavbarComponent from "@/components/navbar";



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
