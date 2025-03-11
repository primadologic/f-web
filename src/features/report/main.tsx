
import ReportComponent from "./reportComponent";
import ReportHeader from "./header";
import Mainlayout from "../main-layout";





export default function ReportMainComponent() {

    return (
       <>
            <Mainlayout>
                <ReportHeader />
                <ReportComponent />             
            </Mainlayout>
       </>
    )
    
};
