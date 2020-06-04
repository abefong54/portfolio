import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "../containers/greeting/Greeting";
import Skills from "./skills/Skills";
import SkillProgress from "./skillProgress/SkillProgress";
import Achievement from "./achievement/Achievement";
import StartupProject from "./StartupProjects/StartupProject";
import Profile from "./profile/Profile";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top.js";



export default class Main extends Component {
  render() {
    return (
        <div>
            <Header />  
            <Greeting />
            <Skills />
            <SkillProgress />
            <StartupProject />
            <Achievement />
            <Profile />
            <Footer />
            <Top />
        </div>
    );
  }
}