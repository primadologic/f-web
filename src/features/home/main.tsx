

import HomeComponent from "./homeComponent";
import "@/index.css"
import FooterComponent from "@/components/footer";
import NavbarComponent from "@/components/navbar";
import HomeHeader from "./header";



export default function HomeMainComponent() {

    return (
        <div className="font-space">
            <header>
                <NavbarComponent />
            </header>

                <main>
                    <HomeHeader />
                    <HomeComponent />
                </main>

            <footer className="">
                <FooterComponent />
            </footer>
       </div>
    )
    
};
