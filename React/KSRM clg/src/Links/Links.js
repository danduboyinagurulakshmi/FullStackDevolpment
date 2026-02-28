 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Departments  from "../Departments/Departments";
import Seminars from "../Seminars/Seminars";

export default function Links() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/departments" element={<Departments/>}/>
          <Route path="/Seminars" element={<Seminars/>}/>
          <Route path="/Login" element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

