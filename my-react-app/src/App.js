import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/Home";
import Rentals from "./components/Rentals"
import Cosharing from "./components/Cosharing";
import SignUp from "./components/SignUp";
import Homepostsignup from "./components/Homepostsignup";
import Login from "./components/Login";

 
function App() {
    return (
        <Router>
          
            <Routes>
                <Route exact path="/signup" element={<SignUp />} />
                <Route path="/rentals" element={<Rentals />} />
                <Route path="/cosharing" element={<Cosharing />} />
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/homepostsignup" element={<Homepostsignup />}/>
                

            </Routes>
        </Router>
    );
  }
 
export default App;