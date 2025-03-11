
import HomeComponent from "./homeComponent";
import "@/index.css"
import HomeHeader from "./header";
import Mainlayout from "../main-layout";



export default function HomeMainComponent() {

    return (
       <>
           <Mainlayout>
                <HomeHeader />
                <HomeComponent />
           </Mainlayout>
       </>
    )
    
};
