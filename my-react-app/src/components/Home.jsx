import React from 'react';
import {Navbarsignup} from "./Navbarsignup";
import {Products} from "./Products"

export function Home() {
    const currentPath = 'home';
    return (
    <>
    <Navbarsignup currentPath={currentPath} />
    <Products heading = {"New Listings"} />
    </>
    );
}

export default Home;