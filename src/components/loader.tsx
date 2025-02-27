import { Oval } from "react-loader-spinner";


export default function Loader() {

    return (
        <Oval 
            visible={true}
            height="30"
            width="30"
            strokeWidth={7}
            color="#ffffff"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />  
    )
    
};
