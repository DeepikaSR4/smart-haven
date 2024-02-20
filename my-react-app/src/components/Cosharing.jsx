import React from 'react';
import {Navbar} from "./Navbar";
import {Products} from "./Productscoshare"
export function Cosharing() {
    const currentPath = 'cosharing';
    return (
    <>
    <Navbar currentPath={currentPath} />
    <Products heading = {"Your co-share matches"}/>
    </>
    );
}
export default Cosharing;