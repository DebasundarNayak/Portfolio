import React from 'react'
import './Home.css'
import profile_img from '../../assets/profile_img.jpg'
const Home = () => {
  return (
    <div className='Home'>
        <img width="300px" height="300px"src={profile_img} alt="" />
        <h1>I'm Debasundar Nayak</h1>
        <p>A Computer Science Technology student.</p>
    </div>
  )
}

export default Home
