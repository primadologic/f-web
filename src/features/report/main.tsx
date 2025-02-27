
import NavbarComponent from "@/components/navbar";
import ReportComponent from "./reportComponent";
import FooterComponent from "@/components/footer";
import ReportHeader from "./header";





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
