import React from "react";
import LocationDisplay from "./locationDisplay";


function About(props){
    return(
        <>
            <h1>You are on the about page.</h1>
            <LocationDisplay data-testid="location-display" {...props} />
        </>
    );
}

export default About;