import React from 'react'
import path from '../../images/backgroundVideo.mp4'
import Home from './Home'
import OptionsList from './OptionsList'


const HeroBanner = () => {
  return (
    <div class="heroBanner">
      <div >
        <img className='logo' src="../../images/loaders.png" alt="logo"  width="100px" height="100px"/>
      </div>
  <video autoPlay muted loop id="backgroundVideo">
    <source src={path} type="video/mp4" />
      Your browser does not support HTML5 video.
  </video>
  <OptionsList />
</div>
  )
}

export default HeroBanner
