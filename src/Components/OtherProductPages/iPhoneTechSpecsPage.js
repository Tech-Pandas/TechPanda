import React from 'react';
import HomeProductHeaderOne from '../HomeProductPage/HomeProductHeaderOne';
import IphoneHeader from './IphoneHeader';

import "./OtherProductPages.css";

function IphoneTechSpecsPage() {
    return(
        <div>
            <HomeProductHeaderOne/> 
            <IphoneHeader/>
            
            <body id='iphone-tech-specs-body'>
                <img className='iphone-heading-photo' src='https://images-na.ssl-images-amazon.com/images/G/01/appcore/phone/11pro/iPhone_11_Pro_Desktop_01._CB436769811_.jpg'/>
                <div className='iphone-heading-line'/>
                <div className='iphone-headings'>
                    <div>
                        <h1>Capacity</h1>
                        <h3>64GB</h3>
                        <h3>256GB</h3>
                        <h3>512GB</h3>
                    </div>
                    <div>
                        <h1>Display</h1>
                        <h3>Super Retina XDR display</h3>
                        <h3>6.5‑inch (diagonal) all‑screen <br/>OLED Multi‑Touch display</h3>
                        <h3>HDR display</h3>
                    </div>
                    <div>
                        <h1>Camera</h1>
                        <h3>Triple 12MP Ultra Wide, Wide, and Telephoto cameras</h3>
                        <h3>2x optical zoom in, 2x optical zoom out; digital zoom up to 10x</h3>
                        <h3>Dual optical image stabilization (Wide and Telephoto)</h3>
                        <h3>Auto Adjustments</h3>
                        <h3>Night mode</h3>
                        <h3>Next‑generation Smart HDR for photos</h3>
                    </div>
                </div>
                <div className='iphone-heading-line'/>
                <div className='iphone-headings'>
                    <div>
                        <h1>Video Recording</h1>
                        <h3>4K video recording at 24 fps, 30 fps, or 60 fps</h3>
                        <h3>1080p HD video recording at 30 fps or 60 fps</h3>
                        <h3>720p HD video recording at 30 fps</h3>
                        <h3>Extended dynamic range for video up to 60 fps</h3>
                        <h3>Optical image stabilization for video (Wide and Telephoto)</h3>
                        <h3>2x optical zoom in, 2x optical zoom out; digital zoom up to 6x</h3>
                        <h3>Audio zoom</h3>
                        <h3>Take 8MP still photos while recording 4K video</h3>
                    </div>
                    <div>
                        <h1>TrueDepth Camera</h1>
                        <h3>12MP camera</h3>
                        <h3>Portrait mode with advanced bokeh and Depth Control</h3>
                        <h3>Portrait Lighting with six effects (Natural, Studio, Contour, <br/>Stage, Stage Mono, High‑Key Mono)</h3>
                        <h3>Animoji and Memoji</h3>
                        <h3>4K video recording at 24 fps, 30 fps, or 60 fps</h3>
                        <h3>1080p HD video recording at 30 fps or 60 fps</h3>
                        <h3>Cinematic video stabilization (4K, 1080p, and 720p)</h3>
                    </div>
                </div>
                <div className='iphone-heading-line'/>
                <div className='iphone-headings'>
                    <div>
                        <h1>Chip</h1>
                        <h3>A13 Bionic chip</h3>
                        <h3>Third‑generation Neural Engine</h3>
                    </div>
                    <div>
                        <h1>Power and Battery</h1>
                        <h3>Lasts up to 4 hours longer than iPhone Xs Max</h3>
                        <h3>Video playback: Up to 20 hours</h3>
                        <h3>Video playback (streamed): Up to 12 hours</h3>
                        <h3>Video playback (streamed): Up to 12 hours</h3>
                        <h3>18W adapter included</h3>
                    </div>
                    <div>
                        <h1>In the Box</h1>
                        <h3>iPhone with iOS 13</h3>
                        <h3>EarPods with Lightning Connector</h3>
                        <h3>USB-C to Lightning Cable</h3>
                        <h3>18W USB-C Power Adapter</h3>
                        <h3>Documentation</h3>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default IphoneTechSpecsPage;