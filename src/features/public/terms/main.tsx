import FooterComponent from "../../../components/footer";
import NavbarComponent from "../../../components/navbar";
import TermsBody from "./termsBody";
import TermsHeader from "./termsHeader";



export default function TermsMainComponent() {

    return (
        <div className="font-space">
            <header>
                <NavbarComponent />
            </header>

                <main>
                    <TermsHeader />
                   <TermsBody />
                </main>

            <footer className="">
                <FooterComponent />
            </footer>
       </div>
    )
    
};
