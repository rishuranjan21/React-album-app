import React from 'react';
import { Link } from 'react-router-dom'
import { SiYoutubemusic } from "react-icons/si";

//get button name and path for evaery component
const Navbar = (props) => {

  return (
    <div className='header text-center'>
      <h2 onClick={() => props.handleClick(false)}>
        <h3><SiYoutubemusic style={{fontSize:'2rem'}} /> Album List </h3>
      </h2>
      <Link to={props.path} ><button className='btn btn-primary mt-2' >{props.page}</button></Link>
    </div>
  )
}

export default Navbar
