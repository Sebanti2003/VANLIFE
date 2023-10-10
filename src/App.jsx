import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import { createServer } from "miragejs"

function App() {
  return (
    <>
      {/* React router is a different library sub of react */}
      {/* when we want to load the whole react application www.site.com/ it will request for the whole application but when we request for www.site.com/about it will load the about.html in the same very page but when we ask for www.site.com/contacts it will ask the server to give him the contacts.html file and response will come according to that */}
      {/* <h1 className='font-extrabold text-center'>Hello Bitches</h1> */}
      <BrowserRouter>
        <div className="w-[100%] min-w-md mx-auto h-fit max-h-[12vh] rounded-tl-2xl rounded-tr-2xl bg-[#f0bab3] overflow-hidden flex justify-around items-center">
          <h1 className="font-extrabold text-lg">#VANLIFE</h1>
          <div className="flex justify-evenly items-center  w-52 ">
            <Link to="/">Home</Link>
            <Link  className="p-5" to="/about">
              About
            </Link>
            <br />
            <br />
            <Link to="/contacts">Contacts</Link>
            <br />
            <br />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <div className="w-full h-[7vh] bg-black rounded-bl-2xl rounded-br-2xl flex justify-center items-center">
          <p className="text-slate-500 text-sm">&#169; 2022 #VANLIFE </p>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
