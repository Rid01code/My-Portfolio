import React from 'react';
import FloatingDiv from '../floating-div/floatingDiv';
import './intro.css';
import "../button/button.css";
import github from '../../img/github.png';
import linkedIN from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';
import MyPic from '../../img/MyPic.png';
import crown from "../../img/crown.png";
import thumbUp from "../../img/thumbUp.png";
import coolEmoji from "../../img/coolEmoji.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
    const transition = { duration: 2, type:"spring"};

    return (
    <div className='intro'>
        <div className="right_part_intro">
            <div>
                <span style={{color:"#FCA61F"}}>Hii! I am</span>
                <span>Ridwan Rahaman</span>
                <span>"Web developer with a keen eye for design and a strong understanding of the user experience, passionate about creating websites that are both beautiful and user-friendly."</span>
                <button className='button'> <Link to="contact" spy={true} smooth={true}>
                                Hire Me
                            </Link></button>
            </div>

            <div>
                <a href="https://github.com/Rid01code" target="_blank" rel='noopener noreferrer'><img src={github} alt="Github logo"/></a> 

                <a href='https://www.linkedin.com/in/ridwan-rahaman-2094b5241/' target="_blank" rel='noopener noreferrer'><img src={linkedIN} alt="LinkedIN Logo" /></a> 

                <a href='https://www.instagram.com/rid_x_x/' target="_blank" rel='noopener noreferrer'><img src={instagram} alt="Instagram" /></a> 
            </div>

        </div>

        <div className='left_part_intro'>
            <motion.img
                initial={{ width: '10vmax' , height: "10vmax"}}
                whileInView={{ width: '28vmax' , height: "30vmax"}}
                transition={transition}
                src={MyPic} alt="My Pic"/>

            <motion.img
                initial={{ right: "5%" }}
                whileInView={{ right: "33%" }}
                transition={transition}
                src={coolEmoji} alt="Emoji"/>

            <motion.div
                initial={{ right: "1%" }}
                whileInView={{ right: "20%" }}
                transition={transition}>
                    <FloatingDiv 
                        img={crown}    
                        txt1="Web" 
                        txt2="Developer"/>
                    </motion.div>

            <motion.div 
                initial={{ right: "58%" }}
                whileInView={{ right: "48%" }}
                transition={transition}>
                    <FloatingDiv 
                        img={thumbUp}
                        txt1="Best Design"
                        txt2="Award"/>
            </motion.div>

            <div 
                className="blur" 
                style={{
                position: "absolute",
                width: "22rem",
                height: "14rem",
                borderRadius: "50%",
                background: "#edd0ff",
                zIndex: "-9",
                top: "-18%",
                left: "56%",
                filter: "blur(72px)" }}>
            </div>

            <div
                className="blur"
                style={{
                background: "#4ad98f",
                top: "17rem",
                width: "21rem",
                height: "11rem",
                left: "23rem",
                position: "absolute",
                borderRadius: "50%",
                filter: "blur(100px)",
                zIndex: "8",
            }}
        ></div>
            
        </div>
    </div>
  )
}

export default Intro;