import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/swiper-bundle.min.css";


import "./project.css";

import project1 from "../../video/project1.mp4";
import project2 from "../../video/project2.mp4";
import project3 from "../../video/project3.mp4";
import project4 from "../../video/project4.mp4";
import project5 from "../../video/project5.mp4";
import project6 from "../../video/project6.mp4";
import project7 from "../../video/project7.mp4";

const Project = () => {

  return (
    <div className='project'>

        <h1 style={{color:"#FCA61F"}}>My Projects</h1>

        <Swiper className='project-slider'
        modules={[Navigation , Pagination ,  Scrollbar, A11y ]}
          spaceBetween={5}
          slidesPerView={3}
          grabCursor={true}
          navigation
          pagination={{ clickable: true }}>

              <SwiperSlide className='swiper-slide'>
                <div className='projectDiv'>
                  <video className='projectimg' autoPlay muted>
                    <source src={project1} type='video/mp4'/>
                  </video>

                  <a href='https://github.com/Rid01code/WeatherForecast' target="_blank" rel='noopener noreferrer'><i className="fa-logo fa-brands fa-github"></i></a>

                  <a href='https://weather-forecast-roan-three.vercel.app/' target="_blank" rel='noopener noreferrer' className='logo'><i className="fa-logo fa-solid fa-globe"></i></a>
                </div>

                <div className='project_name'>WEATHER FORECAST APP</div>
              </SwiperSlide>

              <SwiperSlide className='swiper-slide'>
                <div className='projectDiv'>
                  <video className='projectimg'  autoPlay muted>
                    <source src={project2} type='video/mp4'/>
                  </video>

                  <a href='https://github.com/Rid01code/Snake-Game-by-javaScript' target="_blank" rel='noopener noreferrer'><i className="fa-logo fa-solid fa-brands fa-github"></i></a>

                  <a href='https://rid-snake-game.netlify.app/' target="_blank" rel='noopener noreferrer' className='logo'><i className="fa-logo fa-solid fa-globe"></i></a>
                </div>

                <div className='project_name'>SNAKE GAME</div>
              </SwiperSlide>

              <SwiperSlide className='swiper-slide'>
                <div className='projectDiv'>
                  <video className='projectimg'  autoPlay muted>
                    <source src={project3} type='video/mp4'/>
                  </video>

                  <a href='https://github.com/Rid01code/Calculator' target="_blank" rel='noopener noreferrer'><i className="fa-logo fa-solid fa-brands fa-github"></i></a>

                  <a href='https://calculator-ten-kappa-66.vercel.app/' target="_blank" rel='noopener noreferrer' className='logo'><i className="fa-logo fa-solid fa-globe"></i></a>
                </div>

                <div className='project_name'>CALCULATOR</div>
              </SwiperSlide>

              <SwiperSlide className='swiper-slide'>
                <div className='projectDiv'>
                  <video className='projectimg'  autoPlay muted>
                    <source src={project4} type='video/mp4'/>
                  </video>

                  <a href='https://github.com/Rid01code/ToDo-App' target="_blank" rel='noopener noreferrer'><i className="fa-logo fa-solid fa-brands fa-github"></i></a>

                  <a href='https://to-do-app-three-khaki.vercel.app/' target="_blank" rel='noopener noreferrer' className='logo'><i className="fa-logo fa-solid fa-globe"></i></a>
                </div>

                <div className='project_name'>TO DO APP</div>
              </SwiperSlide>

              <SwiperSlide className='swiper-slide'>
                <div className='projectDiv'>
                  <video className='projectimg'  autoPlay muted>
                    <source src={project5} type='video/mp4'/>
                  </video>

                  <a href='https://github.com/Rid01code/Contact-App' target="_blank" rel='noopener noreferrer'><i className="fa-logo fa-solid fa-brands fa-github"></i></a>

                  <a href='https://contact-app-kappa-green.vercel.app/' target="_blank" rel='noopener noreferrer' className='logo'><i className="fa-logo fa-solid fa-globe"></i></a>
                </div>

                <div className='project_name'>CONTACT APP</div>
              </SwiperSlide>
              
              <SwiperSlide className='swiper-slide'>
                <div className='projectDiv'>
                  <video className='projectimg'  autoPlay muted>
                    <source src={project6} type='video/mp4'/>
                  </video>

                  <a href='https://github.com/Rid01code/simple-Calculator' target="_blank" rel='noopener noreferrer'><i className="fa-logo fa-solid fa-brands fa-github"></i></a>

                  <a href='https://simple-calculator-one-psi.vercel.app/' target="_blank" rel='noopener noreferrer' className='logo'><i className="fa-logo fa-solid fa-globe"></i></a>
                </div>

                <div className='project_name'>SIMPLE CALCULATOR</div>
              </SwiperSlide>              

              <SwiperSlide className='swiper-slide'>
                <div className='projectDiv'>
                  <video className='projectimg'  autoPlay muted>
                    <source src={project7} type='video/mp4'/>
                  </video>

                  <a href='https://github.com/Rid01code/Music-PLayer-By-JavaScript' target="_blank" rel='noopener noreferrer'><i className="fa-logo fa-solid fa-brands fa-github"></i></a>

                  <a href='https://rid-s-music.netlify.app/' target="_blank" rel='noopener noreferrer' className='logo'><i className="fa-logo fa-solid fa-globe"></i></a>
                </div>

                <div className='project_name'>MUSIC PLAYER</div>
              </SwiperSlide>        
          </Swiper>


    </div>
  )
}

export default Project