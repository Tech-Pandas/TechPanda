import React, { useState } from 'react';
import './Stadia.css';
import ReactPlayer from 'react-player';
import { useSpring, animated, useTransition } from 'react-spring';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import StadiaHeader from './StadiaHeader';
import HomeProductHeaderOne from '../HomeProductPage/HomeProductHeaderOne';
// import { Link } from 'react-router-dom';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const Stadia = () => {
    const [ isToggled, setToggle ] = useState(true);
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))


    if(isToggled === true) {
    return (
        <div className='stadia-container'>
            <HomeProductHeaderOne />
            <StadiaHeader />
            <animated.div className='vid'>
                <ReactPlayer
                    url="https://storage.googleapis.com/mannequin/blobs/8a632e127b874795db8b66f981e2c041.mp4" type="video/mp4" src="https://storage.googleapis.com/mannequin/blobs/8a632e127b874795db8b66f981e2c041.mp4" playing muted width='100%' height='100%' 
                />
                <h2>Introducing Stadia Premiere Edition.</h2>
                <Button className='btnui' onClick={() => setToggle(!isToggled)} color="secondary">
                Learn More
                </Button>
            </animated.div>
            <div className='belowvidcontainer'>
                    <span className='playwherewant'>
                    <h1>Play when you want, where you want</h1>
                    <h1>with Stadia Premiere Edition.</h1>
                    <h4>
                        There’s no need to overpay for expensive hardware. With Stadia, you get up to 4K 60 FPS gameplay on TVs without the hassle of time‑consuming game downloads or in‑game updates. And you can take your favorite games with you on your laptop, tablet, or phone as long as you have Wi‑Fi.
                    </h4>
                    <a href='#/productconfig'><button className='stadiabuy'>Buy</button></a>
                    </span>
                    <animated.div
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
                    style={{ transform: props.xy.interpolate(trans1) }}
                    className='animating' 
                    >
                        <animated.div class="card2" style={{ transform: props.xy.interpolate(trans4) }}><img className='stadiactrl' src='https://lh3.googleusercontent.com/qdi7ms63qrk2Hq1FkMk3EvhCqx8FLmLA2Skn9meZv7V8hVUcks4Ae5TpN5Q97Z7oz6-SuJXwEaU_FalZPNgdUQ=rw-w2010' alt='Stadia' />
                        </animated.div>
                        {/* <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
                        <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
                        <animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
                        <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} /> */}
                    </animated.div>
            </div>
            <div className='below-animation-container'>
                <div className='below-animation-container-img'>
                    <img className='below-animation-img' src='https://lh3.googleusercontent.com/IThKxE6QggBZnPh_uJSXfTAH1U7tOznqFuB0e1nrmTEgZ74V_pv8XH18kH_wZ92xwlTiMH3G7RPVV-B0SaGK3io=rw-w2010' />
                </div>
                <div className='below-animation'>
                    <h1>Introducing the Stadia Controller.</h1>
                    <h2>Pick up and play.</h2>
                    <h4>The Stadia Controller is the best way to play games on Stadia across screens. You can use it to take control of games on TVs through Wi-FI. Stadia Controller wireless support for laptops, desktops, and select tablets and phones is coming in 2020.</h4>
                </div>
            </div>
            <div className='laststadiaimg'>
                <h1>Bring Stadia into your living room</h1>
                <h1>through Google Chromecast Ultra.</h1>
                <h3>Play on your TV in up to 4K Ultra HD with HDR.</h3>
                <h3>Stunning graphics at up to 60 FPS.</h3>
                <h3>Works seamlessly with the Stadia Controller.</h3>
            </div>
        </div>
    )
    } else {
        return (
            <animated.div>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=Pwb6d2wK3Qw" width='100vw' height='100vh' 
                />
                <Button className='btnuitwo' onClick={() => setToggle(!isToggled)} color="secondary">Back</Button>
            </animated.div>
        )
    }
}

export default Stadia;