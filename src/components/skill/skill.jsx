import React, {useContext} from 'react'

import "./skill.css";

import html from "../../img/html-logo.png";
import css from "../../img/css-logo.png";
import javaScript from "../../img/javaScript.png";
import reactJS from "../../img/React logo.png";
import git from "../../img/git.png";
import { themeContext } from '../../Context';
import { motion } from "framer-motion";
import {Link} from "react-scroll";

const Skill = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='skill'>
        <div className='skill_left_part'>
            <span style={{color:"#FCA61F"}}>I am a</span>

            <span>Web Developer</span>

            <span> Who can make visually appealing and functional websites, passionate about <br/> staying up-to-date with the latest industry trends. I have a strong foundation<br/> in HTML , CSS , JAVASCRIPT , GIT and REACT.</span>

            <span><button className='button'> <Link to="contact" spy={true} smooth={true}>
                                Hire Me
                            </Link></button></span>
        </div>

        <div className="skill_right_part">

        <div 
                className="blur" 
                style={{
                position: "absolute",
                width: "13rem",
                height: "14rem",
                borderRadius: "50%",
                background: "#88cea6",
                zIndex: "-9",
                top: "203%",
                left: "27%",
                filter: "blur(102px)" }}>
            </div>
            
                <motion.div 
                      initial={{ rotate: 90 }}
                      whileInView={{ rotate: 0 }}
                      viewport={{ margin: "-20px" }}
                      transition={{ duration: 3.5, type: "spring" }}
                      style={{background : darkMode ? "#121111":"" , boxShadow : darkMode ? "20px -20px 60px #0f0e0e ,  -20px 20px 60px #151414":""}}
                      className="work_main_circle">

                    
                        <img src={html} alt="HTML" style={{boxShadow : darkMode ? "none":""}}/>

                        <img src={css} alt="CSS" style={{boxShadow : darkMode ? "none":""}}/>
                
                        <img src={javaScript} alt="JavascriptJS" style={{boxShadow : darkMode ? "none":""}}/>
                        
                        <img src={reactJS} alt="ReactJS" style={{boxShadow : darkMode ? "none":""}}/>
                    
                        <img src={git} alt="git" style={{boxShadow : darkMode ? "none":""}}/>
                    
        </motion.div>

            {/* <div>
                <img src={skillDesign} alt=""/>
            </div> */}
        </div>
    </div>
  )
}

export default Skill