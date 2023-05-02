import React from "react";
import  ReactDOM  from "react-dom/client";
import ActiveState from "./components/ActiveState";


const App =()=>{
    return(
        <>
            <ActiveState/>
        </>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root")) ;
root.render(<App/>)