import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";


import "./project.css";

import project1 from "../../img/project1.jpeg";
import project2 from "../../img/project2.jpeg";
import project3 from "../../img/project3.jpeg";
import project4 from "../../img/project4.jpeg";

const Project = () => {
  const [onHover , setOnHover] = useState(false);
  return (
    <div className='project'>

        <h1 style={{color:"#FCA61F"}}>My Projects</h1>

        <Swiper className='project-slider'
         spaceBetween={30}
         slidesPerView={3}
         grabCursor={true}>
              <SwiperSlide>
              <span id= {onHover ? "hover_span" : "span"}>Go to site</span><a href='https://rids-css-project.netlify.app/' target="_blank" rel='noopener noreferrer'><img src={project1} alt="" onMouseOver={()=>{setOnHover(!onHover)}}
              onMouseOut={()=>{
                setOnHover(false)
              }}/></a>
              </SwiperSlide>

            <SwiperSlide>
              <span id= {onHover ? "hover_span" : "span"}>Go to site</span><a href='https://rid-s-music.netlify.app/' target="_blank" rel='noopener noreferrer'><img src={project2} alt="" onMouseOver={()=>{setOnHover(!onHover)}}
              onMouseOut={()=>{
                setOnHover(false)
              }}/></a>
            </SwiperSlide>

            <SwiperSlide>
              <span id= {onHover ? "hover_span" : "span"}>Go to site</span><a href='https://rid-snake-game.netlify.app/' target="_blank" rel='noopener noreferrer'><img src={project3} alt="" onMouseOver={()=>{setOnHover(!onHover)}}
              onMouseOut={()=>{
                setOnHover(false)
              }}/></a>
            </SwiperSlide>

            <SwiperSlide>
              <span id= {onHover ? "hover_span" : "span"}>Go to site</span><a href='https://rid-add-expence.netlify.app/' target="_blank" rel='noopener noreferrer'><img src={project4} alt="" onMouseOver={()=>{setOnHover(!onHover)}}
              onMouseOut={()=>{
                setOnHover(false)
              }}/></a>
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Project