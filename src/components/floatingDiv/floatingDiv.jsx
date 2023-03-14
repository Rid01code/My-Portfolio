import React, {useContext} from 'react';


import './floatingDiv.css';

import {themeContext} from "../../Context";


const FloatingDiv = ({img, txt1, txt2}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='floating_div'
          style={{background  : darkMode ? " #2f2d2d" :"" ,
                  boxShadow : darkMode ? "20px -20px 60px #282626 ,  -20px 20px 60px #363434" : ""}}>
        <img src={img}/>
        <span>
            {txt1}
            <br/>
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv;