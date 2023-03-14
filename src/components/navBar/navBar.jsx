
import React, { useContext } from 'react';

import './navBar.css';

import '../button/button.css'
import Toggle from '../toggle/toggle';
import { useState } from 'react';
import { themeContext } from '../../Context';
import { Link } from "react-scroll";

const NavBar =()=>{
    const theme = useContext(themeContext);
    const [showMenu , setShowMenu] = useState(false);

    return(
        <div className="nav_bar">
            <div className='right_nav_bar'>
                <h3>Ridwan</h3>
                <span><Toggle/></span>
            </div>

            <div className='left_nav_bar'>


            <div className='menu_bar' onClick={()=>{setShowMenu(!showMenu)}}>
                <i class={showMenu ? "fa-solid fa-xmark": "fa-solid fa-bars"}></i> 
            </div>

                <div className={showMenu ? "nav_list_ul_mobile" : "nav_list_ul"}>

                    <ul>

                        <li>
                            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                                Home
                            </Link>
                        </li>
                    
                        <li>
                            <Link to="service" spy={true} smooth={true}>
                                Service
                            </Link>
                        </li>
                    
                        <li>
                            <Link to="skill" spy={true} smooth={true}>
                                Skill
                            </Link>
                        </li>

                        <li>
                            <Link to="project" spy={true} smooth={true}>
                                Project
                            </Link>
                        </li>
                    
                        <li>
                            <Link to="contact" spy={true} smooth={true}>
                                Contact
                            </Link>
                        </li>

                    <div className='nav_button'>
                        <button className='button'><Link to="contact" spy={true} smooth={true}>
                                Contct Me
                            </Link></button>
                    </div>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default NavBar;