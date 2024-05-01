
import "./app.css";

import NavBar from "./components/navBar/navBar";
import Intro from "./components/intro/intro";
import Service from "./components/myService/service";
import Skill from "./components/skill/skill";
import Project from "./components/myProjects/project";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer"
import { useContext } from "react";
import { themeContext } from "./Context";
let App=()=>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div   className="app"
        style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
        }}>
            <NavBar/>
            <Intro/>
            <Service/>
            <Skill/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    )
};

export default App;