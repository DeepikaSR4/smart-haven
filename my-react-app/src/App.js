import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/Home";
import Apartment from "./components/Apartment";
import Villas from "./components/Villas";
import Cosharing from "./components/Cosharing";
import SignUp from "./components/SignUp";

 
function App() {
    return (
        <Router>
          
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route path="/apartment" element={<Apartment />} />
                <Route path="/villa" element={<Villas />} />
                <Route path="/cosharing" element={<Cosharing />} />
                <Route path="/" element={<SignUp />}/>
                

            </Routes>
        </Router>
    );
  }
 
export default App;