import React from "react";
import { Redirect, Route, Switch, useHistory, useParams } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Company from "../Company/Company";
import Project from "../Project/Project";
import Portfolio from "../Portfolio/Portfolio";
import ContactUs from "../ContactUs/ContactUs";
import News from "../News/News";
import Footer from "../Footer/Footer";

function App() {
  return(
    <div className="page">
      <Header></Header>
      <Main></Main>
      <AboutUs></AboutUs>
      <Services></Services>
      <Company></Company>
      <Project></Project>
      <Portfolio></Portfolio>
      <ContactUs></ContactUs>
      <News></News>
      <Footer></Footer>
    </div>
  )
}

export default App;