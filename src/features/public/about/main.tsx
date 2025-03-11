
import AboutComponent from "./aboutBody";
import AboutHeader from "./header";
import Mainlayout from "@/features/main-layout";



export default function AboutMainComponent() {

    return (
        <>
          
            <Mainlayout>
                <AboutHeader />
                <AboutComponent />
            </Mainlayout>
       </>
    )
    
};
