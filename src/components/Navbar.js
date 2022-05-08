import React, { useState } from 'react';
import "./navbar.css"

import logo from "../image/logo.png";
import {MdSportsHandball} from "react-icons/md";
import {SiYourtraveldottv} from "react-icons/si";
import {SiWorldhealthorganization} from "react-icons/si";
import {TiWeatherPartlySunny} from "react-icons/ti";
import {BiWorld} from "react-icons/bi";
import {RiExchangeFundsLine} from "react-icons/ri";
import {FaBusinessTime} from "react-icons/fa";
import {AiOutlineRocket} from "react-icons/ai";
import {GiMaterialsScience} from "react-icons/gi";


const Navbar = () => {
  const [responsive, setResponsive ] = useState(false);



  return (
    <div class="navbar">
    <h3 class="logo">
   
     <img src={logo} alt='logo image'  height={70} width={70}/>
    </h3>
    <nav>
      <ul class={responsive ? "nav-links-mobile": "nav-links"}
      onClick={()=> setResponsive(false)}
      >
        <li className='nav-li'>
          <a href="/"><BiWorld className='icon'/>News</a>
        </li>
        <li className='nav-li'>
          <a href="/TravelNewsList" alt="link to travel"><SiYourtraveldottv className='icon' />Travel</a>
        </li>
        <li className='nav-li'>
          <a href="/SportNewsList"><MdSportsHandball className='icon' />Sport</a>
        </li>
        <li className='nav-li'>
          <a href="/HealthNewsList"><SiWorldhealthorganization className='icon' />Health</a>
        </li>
        <li className='nav-li'>
          <a href="/WeatherNewsList"><TiWeatherPartlySunny className='icon' />Weather</a>
        </li>
        <li className='nav-li'>
          <a href="/EntertainmentNewsList"><RiExchangeFundsLine className='icon' />Entertainment</a>
        </li>
        <li className='nav-li'>
          <a href="/BusinessNewsList"><FaBusinessTime className='icon' />Business</a>
        </li>
        <li className='nav-li'>
          <a href="/TechnologyNewsList"><AiOutlineRocket className='icon' />Technology</a>
        </li>
        <li className='nav-li'>
          <a href="/ScienceNewsList"><GiMaterialsScience className='icon' />Science</a>
        </li>
         
        
      </ul>
      <button className='mobile-menue-icon'
      onClick={() => setResponsive(!responsive)}
      >
        {responsive ? (<i className='fas fa-times'></i>
        ) : (
          <i className='fas fa-bars'></i>
        )}
      </button>
      
    </nav>
  </div>
           
     )
}

export default Navbar
