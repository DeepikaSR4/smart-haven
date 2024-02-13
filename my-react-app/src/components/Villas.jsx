import React from 'react';
import {Navbar} from "./Navbar";
import {Products} from "./Products"
export function Villas() {
    const currentPath = 'villa';
    return (
    <>
    <Navbar currentPath={currentPath} />
    <Products heading = {"Villas for you"}/>
    </>
    );
}
export default Villas;