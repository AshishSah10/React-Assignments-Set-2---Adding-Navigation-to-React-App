import React from "react";
import LocationDisplay from "./locationDisplay";

function NoMatch(props){
    return(
        <>
            <h1>No Match</h1>
            <LocationDisplay data-testid="location-display" {...props} />
        </>
    );
}


export default NoMatch;