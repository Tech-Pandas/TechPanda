import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import ReactPlayer from 'react-player';
import './Iphone.css';
import HomeProductHeaderOne from '../HomeProductPage/HomeProductHeaderOne';
import IphoneHeader from './IphoneHeader';
import Button from '@material-ui/core/Button';

class IphonePage extends Component {
  render() { 
    return (
      <div className='iphonepage'>
      <Parallax ref={ref => (this.parallax = ref)} pages={3} className='containpro'>
      <HomeProductHeaderOne />
      <IphoneHeader />
      <div className='iphoneplayer'>
        <ReactPlayer
        url="https://www.apple.com/105/media/us/iphone-11-pro/2019/3bd902e4-0752-4ac1-95f8-6225c32aec6d/anim/hero/small_2x.mp4" type="video/mp4" src="https://www.apple.com/105/media/us/iphone-11-pro/2019/3bd902e4-0752-4ac1-95f8-6225c32aec6d/anim/hero/small_2x.mp4" alt='vid' playing muted width='100%' height='100%' 
        />
      </div>
        <ParallaxLayer offset={1} speed={0.45} className='therewasprocontainerwhite' style={{ backgroundColor: 'rgba(0,0,0,1)' }}>
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
        <div className='cameraphoto'>
          <img className='camerabottom' src='https://www.apple.com/v/iphone-11-pro/c/images/overview/hero/triptych_left_landscape__eczd4p0wyv6u_medium_2x.jpg' alt='pic' />
          <img className='camerabottom' src='https://www.apple.com/v/iphone-11-pro/c/images/overview/hero/triptych_middle_landscape__c14zbto4v402_medium_2x.jpg' alt='pic' />
          <img className='camerabottom' src='https://www.apple.com/v/iphone-11-pro/c/images/overview/hero/triptych_right_landscape__ik46z8u34ki2_medium.jpg' alt='pic' />
        </div>
        </div>
      </Parallax>
        <div className='threecam'>
        </div>
        <div className='mountain-container'>
          <h1 className='ultrawide'>Ultra Wide</h1>
          <h1 className='allin'>Take it alllllll in.</h1>
          <h3>When you just can’t squeeze everything into the frame, zoom out. Because the new Ultra Wide camera captures four times more scene than ever. It’s like stepping back — way back — without taking a step. Bring on those mountain ranges, soaring cathedrals, and iconic skylines.</h3>
          <img className='mountain' src='https://www.apple.com/v/iphone-11-pro/c/images/overview/galleries/ultra-wide-gallery/hero__egkp929h78sy_medium_2x.jpg' alt='pic' />
        </div> 
        <div className='long-phone'>
          <section className='info-section'>
            <img id='phonewave' src='https://www.apple.com/v/iphone-11-pro/c/images/overview/display/pro_display_hero_1_dark__bs3bzy9s1seq_medium_2x.jpg' alt=''/>
            <h2>The Super Retina XDR display boasts not one but two new record levels of brightness and understands when to use them. It hits up to 800 nits when you’re out in the sun — great for shooting and making selects on the go — and up to 1200 nits when you’re viewing extreme dynamic range content. It’s like having a Pro Display XDR on your iPhone.</h2>
            <h3>The brightest, sharpest iPhone display ever</h3>
            <h4>Up to</h4>
            <h2>800 nits <img src='https://www.apple.com/v/iphone-11-pro/c/images/overview/display/icon_nits__nmuk9gi20fmq_medium.jpg' alt=''/> </h2>
            <h4>for better viewing in sunlight</h4>
            <h4>Up to</h4>
            <h2>1200 nits <img src='https://www.apple.com/v/iphone-11-pro/c/images/overview/display/icon_nits__nmuk9gi20fmq_medium.jpg' alt=''/> </h2>
            <h4>for HDR photos & movies</h4>
            <h2>2,000,000:1 <img src='https://www.apple.com/v/iphone-11-pro/c/images/overview/display/icon_contrast_ratio__cc8mn3g34xo2_medium.jpg' alt=''/> </h2>
            <h4>contrast ratio</h4>
            <h2>458 pixels <img src='https://www.apple.com/v/iphone-11-pro/c/images/overview/display/icon_pixels__bzb4io3rav7m_medium.jpg' alt=''/> </h2>
            <h4>per inch</h4>
            <section className='icon-section'>
            <img src='https://www.apple.com/v/iphone-11-pro/c/images/overview/display/icon_oled_color__cuswu62nmpiu_medium.jpg' alt=''/>
            <h3>Custom OLED</h3>
            <img src='https://www.apple.com/v/iphone-11-pro/c/images/overview/display/icon_color_accuracy__fvdk87ak466a_medium.jpg' alt=''/>
            <h3>Wide color gamut</h3>
            <img src='https://www.apple.com/v/iphone-11-pro/c/images/overview/display/icon_true_tone__elbdqyt346eu_medium.jpg' alt=''/>
            <h3>True Tone</h3>
            <img src='https://www.apple.com/v/iphone-11-pro/c/images/overview/display/icon_haptic_touch__j65rzqfw5iyy_medium.jpg' alt=''/>
            <h3>Haptic Touch</h3>
            <img src='https://www.apple.com/v/iphone-11-pro/c/images/overview/display/icon_tap_wake__bvok0gw7uhau_medium.jpg' alt=''/>
            <h3>Tap or raise to wake</h3>
            <img src='https://www.apple.com/v/iphone-11-pro/c/images/overview/display/icon_night_shift__b6vabdyecoeu_medium.jpg' alt=''/>
            <h3>Night Shift</h3>
            <img src='https://www.apple.com/v/iphone-11-pro/c/images/overview/display/icon_efficient__bjd5gzjbdwpe_medium.jpg' alt=''/>
            <h3>More efficient</h3>
            <img src='https://www.apple.com/v/iphone-11-pro/c/images/overview/display/icon_true_blacks__bwwkqt6yyjle_medium.jpg' alt=''/>
            <h3>True blacks</h3>
            </section>
          </section>
          <img src='https://www.apple.com/v/iphone-11-pro/c/images/overview/display/pro_display_hero_2_dark__bihff5tm6vg2_medium_2x.jpg' alt=''/>
        </div>
        <div className='splash-container'>
          <h1>Splashes? Pffft.</h1>
          <h3>Our most water-resistant iPhone ever.</h3>
          <img className='splash' src='https://www.apple.com/v/iphone-11-pro/c/images/overview/water-resistance/splashes__d3a02nzl9p4y_medium_2x.jpg' alt=''/>
        </div>
        <a href='#/productconfigiphone'><Button color='primary'>See Options</Button></a>
      </div>
    )
  }
}

export default IphonePage;
