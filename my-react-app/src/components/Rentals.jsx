import React from 'react';
import {Navbar} from "./Navbar";
import {Products} from "./Products"
export function Rentals() {
    const currentPath = 'rentals';
    return (
    <>
    <Navbar currentPath={currentPath} />
    <Products heading = {"Rentals for you"}/>
    </>
    );
}
export default Rentals;