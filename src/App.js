import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "../src/home/home";
import Header from "./home/header";
import Footer from "./home/footer";
function App() {
  return (
    <div>
    <Header />
    <Home />
    <Footer/>
    </div>
  );
}

export default App;
