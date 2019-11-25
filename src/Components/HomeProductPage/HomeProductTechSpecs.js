import React from 'react';
import "./HomeProductTechSpecs.css"
import HomeProductHeaderOne from './HomeProductHeaderOne';
import HomeProductHeaderTwo from './HomeProductHeaderTwo';

const HomeProductTechSpecs = () => {
    return (
        <div className='spec-container'>
            <HomeProductHeaderOne/>
            <HomeProductHeaderTwo/>

            <div className='specimg'>
                <h2>Peek inside Pixel 4.</h2>
                <img src='https://venturebeat.com/wp-content/uploads/2019/10/google-pixel-4-specs.png?fit=2000%2C1000&strip=all' />
            </div>
            <div className='icon-container'>
                <h1>Apps to enrich your life.</h1>
                <h1>Already on your phone.</h1>
                <div className='icon'>
                    <img className='icnmap' src='https://lh3.googleusercontent.com/CItP8QkfnjEVGvQ6X04k8Rz9LkDZYwlXadAdA2avexOVMkcUS6k1UDdmYD6MmwOX9OY0dnp2qsj4sw2WPO7-=rw-w270' />
                    <img className='icnyoutube' src='https://lh3.googleusercontent.com/yqGsuyKtS1PqdiS2Gb-ciUnTbFy3Dl8XmDp5QTf7V2NriyCbzOPXYo6JBcQa1jKNeIS6IkXrHQ79T3CwPkQlZDY=rw-w270' />
                    <img className='icnmail' src='https://lh3.googleusercontent.com/MGuM-zeLzrHIOapkNrN988guME-6mRHksyhTWKeiSJPPC_3MkiuJ9_WGwPJMyGM5qJKa9go4YeZeUKj6Ty31wWI=rw-w270' />
                    <img className='icnchrome' src='https://lh3.googleusercontent.com/RR91GX4bO7Vb68SXjmz42sYfOB0ap6ECXD7-ugiAEffNsCxVeKnN0-wKI8cRdaoIDA7Is4xr28Z_0V0ePJg4gXk=rw-w270' />
                    <img className='icnphotos' src='https://lh3.googleusercontent.com/lpzcken_gkH10CjQn_bAgj3nzuyiei2me4RfZbnfH01p5_8tYlX5mlVzmo5bfBWICoL_fvfkAIeu_KhTjeyv-w=rw-w270' />
                    <img className='icnplay' src='https://lh3.googleusercontent.com/2RXo-NW6UHzyvTcjemkEU6Ng1gZdFPQf-xUjCoscEPFRW5bLiCc5sBqVaB7BVLSiBWEpncDlv-LkPUhoNRaI=rw-w270' />
                    <img className='icnmessages' src='https://lh3.googleusercontent.com/HwZJHbzN085QqEDEiEsm_5EEL7A8LptO8s7P4BvSW7uF7qL-4hgVa_e6oblB3feX9NsteSYxVsc-wmfTXKb8XQ=rw-w270' />
                    <img className='icnnews' src='https://lh3.googleusercontent.com/n_idYH1Lctw33RRwSzUv7YoHLs-m_i8iiRwViTN2VsLa8DYLJzdbYgfD5DFIAeZiHbO4T-tAikZcVDPHnqnA9A=rw-w270' />
                    <img className='icnkeep' src='https://lh3.googleusercontent.com/09HaIQpYFBaIV0nd6f-jf45BVcqslvN2b92wE2Hbp6l6_XUXFhAh6pYiEKt4bQpvDSzAntIvscfGqJeUxdpw=rw-w270' />
                    <img className='icndrive' src='https://lh3.googleusercontent.com/ozqBuhnBTQePnX1x_hkNl9FJB7NAger6NhkKsmG-43ywtIlXC8A_WsTZaJgOnXYZZSPEVNONOaNh2T-YCvZo=rw-w270' />
                </div>
            </div>
            <div className='techspecsdetails'>
                <div className='detailtitle'>
                    <h2>Tech Specs</h2>
                </div>
                </div>
                <div className='alldetailinfo'>
                <div className='detailinfo'>
                <h2>Display</h2>
                <h4>Fullscreen 5.7" (144.7 mm) display</h4>
                <h2>Dimensions & Weight²</h2>
                <h4>68.8 x 147.1 x 8.2 mm</h4>
                <h2>Battery</h2>
                <h4>2800 mAh</h4>
                <h2>Memory & Storage</h2>
                <h4>6 GB LPDDR4x • 64 or 128 GB</h4>
                <h2>Processors</h2>
                <h4>Qualcomm® Snapdragon 855™</h4>
                <h2>Rear Camera</h2>
                <h4>16 MP 1.0 μm pixel width</h4>
                <h2>Front Camera</h2>
                <h4>8 MP 1.22 μm pixel width</h4>
                <h2>Video</h2>
                <h4>1080p @ 30 FPS, 60 FPS, 120 FPS</h4>
                <h2>Sensor</h2>
                <h4>Active Edge™ Proximity / Ambient light sensor</h4>
                <h2>Charging</h2>
                <h4>USB-C™ 18 W adapter with USB-PD 2.0</h4>
                <h2>External Buttons and Ports</h2>
                <h4>USB Type-C™ 3.1 Gen 1</h4>
                </div>
                <div className='detailinfosecond'>
                <h2>SIMs</h2>
                <h4>Single Nano SIM</h4>
                <h2>Media & Audio</h2>
                <h4>Stereo speakers 3 microphones</h4>
                <h2>Wireless & Location</h2>
                <h4>Wi-Fi 2.4 GHz + 5 GHz 802.11 a/b/g/n/ac 2x2 MIMO</h4>
                <h2>Network⁹</h2>
                <h4>Up to 5xCA, LAA, DL 4x4 MIMO,</h4>
                <h4>CAT 18 up to 1.2 Gbps download</h4>
                {/* , CAT 13 150 Mbps upload */}
                <h2>Colors</h2>
                <h4>Just Black Clearly White Oh So Orange</h4>
                <h2>Hearing Aid Compatibility</h2>
                <h4>M3/T4 HAC Rating</h4>
                <h2>Security & OS Updates</h2>
                <h4>Minimum 3 years of OS and security updates¹⁰</h4>
                <h2>Materials</h2>
                <h4>Aluminum frame + matte finish hybrid coating</h4>
                <h2>AR/VR</h2>
                <h4>ARCore</h4>
                <h2>Warranty</h2>
                <h4>Lifetime PandaCare</h4>
                <img className='panda' src='https://media3.giphy.com/media/fAaBpMgGuyf96/giphy.gif' alt='gif' />
                </div>
            </div>
            <div className='inthebox'>
                <div className='inboxone'><h2>What's in the box</h2></div>
                <div className='inboxtwo'>
                    <h3>18 W USB-C™ power adapter</h3>
                    <h3>1 m USB-C to USB-C cable (USB 2.0</h3>
                    <h3>Quick Start Guide</h3>
                </div>
                <div className='inboxthree'>
                    <h3>Quick Switch Adapter</h3>
                    <h3>SIM tool</h3>
                </div>
            </div>
            <div className='specbtmimg'>
                <h2>Find the style that works for you.</h2>
                <a href="#/productconfig"><button className='specbtn'>See Options</button></a>
            </div>
        </div>
    )
}

export default HomeProductTechSpecs;