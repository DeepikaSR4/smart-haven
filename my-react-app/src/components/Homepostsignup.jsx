import React from 'react';
import {Navbar} from "./Navbar";
import {Products} from "./Products"

export function Homepostsignup() {
    const currentPath = 'home';
    return (
    <>
    <Navbar currentPath={currentPath} />
    <Products heading = {"New Listings"} />
    </>
    );
}

export default Homepostsignup;