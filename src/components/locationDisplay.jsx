import React from "react";

function LocationDisplay(props){
    return(
        <>
            {props.match.path}
        </>
    );
}

export default LocationDisplay;