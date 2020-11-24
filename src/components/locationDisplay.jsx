import React from "react";
import {useLocation} from "react-router-dom";

function LocationDisplay(){
    let location = useLocation();
    return(
        <>
            {location.pathname}
        </>
    );
}

export default LocationDisplay;