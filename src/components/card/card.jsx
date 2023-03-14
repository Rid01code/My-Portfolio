import React, {useContext} from 'react';

import "./card.css";

import{ themeContext } from "../../Context";

const Card = ({emoji , heading , detail, btnTxt}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='card'
          style={{background  : darkMode ? " #2f2d2d" :"" , boxShadow : darkMode ? "20px -20px 60px #0f0e0e , -20px 20px 60px #151414" : "" , borderColor : darkMode ? "black" :""}}>
        <img src={emoji}/>
        <h3>{heading}</h3>
        <p>{detail}</p>
        <button>{btnTxt}</button>
        
    </div>
  )
}

export default Card