import React from 'react';
import {Navbar} from "./Navbar";
import {Products} from "./Products"
export function Apartment() {
    const currentPath = 'apartment';
    return (
    <>
    <Navbar currentPath={currentPath} />
    <Products heading = {"Apartments for you"}/>
    </>
    );
}
export default Apartment;