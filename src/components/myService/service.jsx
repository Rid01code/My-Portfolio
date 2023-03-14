import React, {useContext} from 'react';

import "./service.css";
import "../button/button.css"

import Card from "../card/card";

import glasses from "../../img/glasses.png";
import heartEmoji from "../../img/heartEmoji.png";
import humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import MyResume from "./My Resume.pdf";



const Service = () => {
  const transition = { duration: 2, type:"spring"};
  const theme = useContext(themeContext);
  return (
    <div className='service'>
             <div 
                className="blur" 
                style={{
                position: "absolute",
                width: "22rem",
                height: "14rem",
                borderRadius: "50%",
                background: "#aa9fe0",
                zIndex: "-9",
                top: "124%",
                left: "-4%",
                filter: "blur(102px)" }}>
            </div>

        <div className='service_left_part'>
            <span style={{color:"#FCA61F"}}>My Awesome</span>

            <span>Services</span>

            <span>Here is some awesome services you can get from here :) </span>

            <span>
                <a href={MyResume} download>
                    <button className='button'>Download CV</button>
                </a>    
            </span>
        </div>

        <div className='service_right_part'>
            <motion.div
                    initial={{ right: '100%' }}
                    whileInView={{ right: '85%' }}
                    transition={transition}>
                        <Card emoji={glasses}
                            heading={"Developer"}
                            detail={"HTML, CSS, JavaScript, ReactJS, NodeJS, GIT"}
                            btnTxt={'Learn More'} />
            </motion.div>
                    

            <motion.div
                initial={{ right: '3%' }}
                whileInView={{ right: '3%' }}
                transition={transition}>
                    <Card emoji={heartEmoji}
                        heading={"Design"}
                        detail={"HTML, CSS, JavaScript, ReactJS, NodeJS, GIT"}
                        btnTxt={'Learn More'} />
            </motion.div>        
                    

                <motion.div
                    initial={{ right: '100%' }}
                    whileInView={{ right: '85%' }}
                    transition={transition}>
                        <Card emoji={humble}
                        heading={"UI/UX"}
                        detail={"HTML, CSS, JavaScript, ReactJS, NodeJS, GIT"}
                        btnTxt={'Learn More'} />
                </motion.div>
                    
        </div>
    </div>
  )
}

export default Service;