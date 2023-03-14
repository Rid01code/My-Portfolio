import React, { useContext, useRef, useState } from "react";

import './contact.css';

import emailjs from "@emailjs/browser";


import mail from  "../../img/mail.png";
import whatsapp from "../../img/whatsapp.png"



const Contact = () =>{
  const form = useRef();
  const [done, setDone] = useState(false);
  // let setDone=()=>{
  //   alert('Message Send')
  // };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5kbnsmg',
      'template_41umkyq',
      form.current,
      'DsCnmsNLoHdwLOt6R')

      .then((result) => {
          console.log(result.text);
          setDone(true);
          document.getElementById('form').reset()
      }, 
      (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='contact'>
      <div>
          <h1 style={{color:"#FCA61F"}}>Contact Me</h1>
          <h1>Let's Chat</h1>
      </div>

        <div>
            <a href="https://mail.google.com/mail/u/0/#sent?compose=new" className='mail'>
                <img src={mail} alt=""/>
                <p>rahamanridwan5@gmail.com</p>
            </a>

            <a href="https://wa.me/918695341268" className='mobile'>
              <img src={whatsapp} alt=""/>
              <p>+91-8695341268</p>
            </a>
        </div>

        <div className='contact_inputs'>
          <form ref={form} onSubmit={sendEmail} id="form">     
              <input type="text" name="to_name" placeholder="Name"/>

              <input type="email" name="from_name" placeholder="Email"/>

              <textarea name="message" placeholder="Message"/>
              <input type="submit" value="Send Message" className="button"/>
          </form>
      
        </div>

    </div>
  )
}

export default Contact