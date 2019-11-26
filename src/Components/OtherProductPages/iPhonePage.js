import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import ReactPlayer from 'react-player';
import './Iphone.css';
import HomeProductHeaderOne from '../HomeProductPage/HomeProductHeaderOne';
import IphoneHeader from './IphoneHeader';

// const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
// const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
// const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
// const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
// const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
// const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
// const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

class IphonePage extends Component {
  render() { 
    return (
      
      <Parallax ref={ref => (this.parallax = ref)} pages={3} className='containpro'>
      <HomeProductHeaderOne />
      <IphoneHeader />
      <div className='iphoneplayer'>
        <ReactPlayer
        url="https://www.apple.com/105/media/us/iphone-11-pro/2019/3bd902e4-0752-4ac1-95f8-6225c32aec6d/anim/hero/small_2x.mp4" type="video/mp4" src="https://www.apple.com/105/media/us/iphone-11-pro/2019/3bd902e4-0752-4ac1-95f8-6225c32aec6d/anim/hero/small_2x.mp4" alt='vid' playing muted width='100%' height='100%' 
        />
      </div>
      {/* <div className='thisone' > */}
        <ParallaxLayer offset={1} speed={0.3} className='therewasprocontainerwhite' style={{ backgroundColor: 'rgba(0,0,0,1)' }}>
          <div className='whitephonediv'>
          <h1 className='whitephonetext'>Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.</h1>
          </div>
          <div className='whitephotodiv'>
            <img src='https://www.apple.com/v/iphone-11-pro/c/images/overview/camera/camera_three_lens_system_phone__cokiuc6tixw2_large.jpg' alt='pic' />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={-2.5} className='therewasprocontainer' style={{ backgroundColor: 'rgba(0,0,0,1)', backgroundImage: 'https://www.apple.com/v/iphone-11-pro/c/images/overview/camera/camera_three_lens_system_phone__cokiuc6tixw2_large.jpg', backgroundSize: 'cover', height: '50', color: 'white'}}>
          <h1 className='therewaspro'>And then there was Pro.</h1>
          <h3 className='therewaspro1'>A transformative triple‑camera system that adds tons of capability without complexity.
          </h3>
          <h3 className='therewaspro1'>An unprecedented leap in battery life. And a mind‑blowing chip</h3>
          <h3 className='therewaspro1'>that doubles down on machine learning</h3>
          <h3 className='therewaspro1'>and pushes the boundaries of what a smartphone can do.</h3>
          <h3 className='therewaspro1'>
          Welcome to the first iPhone powerful enough to be called Pro.
          </h3>
        </ParallaxLayer>
        <div className='black'>
          {/* <img className='cameraphoto' src='https://www.apple.com/v/iphone-11-pro/c/images/overview/camera/camera_hero_static__bkn3b0mlxrjm_large.jpg' /> */}
        </div>
        {/* <div className='cameraphoto'>
          <img src='https://www.apple.com/v/iphone-11-pro/c/images/overview/camera/camera_three_lens_system_lens_bottom_static__bgt0lgmyg3bm_large_2x.jpg' alt='pic' />
        </div>
         */}
        {/* <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: 'gray' }} /> */}
      {/* </div>   */}

        {/* <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: ('https://www.apple.com/v/iphone-11-pro/c/images/overview/hero/triptych_left_landscape__eczd4p0wyv6u_small_2x.jpg', true), backgroundSize: 'cover' }} /> */}
      </Parallax>
    )
  }
}

export default IphonePage;