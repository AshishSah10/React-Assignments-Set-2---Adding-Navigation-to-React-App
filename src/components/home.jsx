import React from "react";
import LocationDisplay from "./locationDisplay";

function Home(props){
    return(
        <>
            <h1>You are home</h1>
            <LocationDisplay data-testid="location-display" {...props}/>
        </>
    );
}


export default Home;