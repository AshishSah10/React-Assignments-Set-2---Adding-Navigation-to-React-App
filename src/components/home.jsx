import React from "react";
import LocationDisplay from "./locationDisplay";

function Home(){
    return(
        <>
            <h1>You are home</h1>
            <LocationDisplay data-testid="location-display"/>
        </>
    );
}


export default Home;