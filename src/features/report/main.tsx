import FooterComponent from "../../components/footer";
import NavbarComponent from "../../components/navbar";
import ReportHeader from "./header";
import ReportComponent from "./reportComponent";





export default function ReportMainComponent() {

    return (
        <div className="font-space">
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
       </div>
    )
    
};
