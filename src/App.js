import React from "react";
import  ReactDOM  from "react-dom/client";
import ThankYouState from "./components/ThankYouState";
import ActiveState from "./components/ActiveState";


const App =()=>{
    return(
        <>
            <ActiveState/>
            <ThankYouState/>
        </>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root")) ;
root.render(<App/>)