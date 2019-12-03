import React from 'react';
import HomeProductHeaderOne from '../HomeProductPage/HomeProductHeaderOne';
import MacBookProHeader from './MacBookProHeader';

// import "./OtherProductPages.css";

function MacBookProTechSpecs() {
    return (
        <div>
            <HomeProductHeaderOne />
            <MacBookProHeader />
            <div className='macbook-tech-specs'>
                <div className='padding-mac-techspecs'>
                    <div className='tech-specs-div'>
                        <div className='title-macbook-specs'>
                            Price
                        </div>
                        <div className='macbook-specs-content'>
                            <div className='price-macbook-specs'>
                                <div>
                                    $2399
                                </div>
                                <div>
                                    $2799
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tech-specs-div-big'>
                        <div className='title-macbook-specs'>
                            Display
                        </div>
                        <div className='macbook-specs-content'>
                            <p><strong>Retina display</strong></p>
                            <p>16‑inch (diagonal) LED‑backlit display with IPS technology; 3072‑by‑1920 native resolution at 226 pixels per inch with support for millions of colors</p>
                            <ul>Supported scaled resolutions:</ul>
                            <li>2048 x 1280</li>
                            <li>1792 x 1120</li>
                            <li>1344 x 840</li>
                            <li>1152 x 720</li>
                            <p>500 nits brightness</p>
                            <p>Wide color (P3)</p>
                            <p>True Tone technology</p>
                            <p>Refresh rates: 47.95Hz, 48.00Hz, 50.00Hz, 59.94Hz, 60.00Hz</p>

                        </div>
                    </div>
                    <div className='tech-specs-div'>
                        <div className='title-macbook-specs'>
                            Processor
                        </div>
                        <div className='macbook-specs-content-processor'>
                            <div>
                                <p>
                                    2.6GHz 6‑core Intel Core i7, Turbo Boost up to 4.5GHz, with 12MB shared L3 cache
                                </p>
                                <p>
                                    Configurable to 2.4GHz 8‑core Intel Core i9, Turbo Boost up to 5.0GHz, with 16MB shared L3 cache
                                </p>
                            </div>
                            <div>
                                <p>
                                    2.3GHz 8‑core Intel Core i9, Turbo Boost up to 4.8GHz, with 16MB shared L3 cache
                                </p>
                                <p>
                                    Configurable to 2.4GHz 8‑core Intel Core i9, Turbo Boost up to 5.0GHz, with 16MB shared L3 cache
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='tech-specs-div'>
                        <div className='title-macbook-specs'>
                            Storage
                        </div>
                        <div className='macbook-specs-content-storage'>
                            <div>
                                <p>512GB SSD</p>
                                <p>Configurable to 1TB, 2TB, 4TB, or 8TB SSD</p>
                            </div>
                            <div>
                                <p>1TB SSD</p>
                                <p>Configurable to 2TB, 4TB, or 8TB SSD</p>
                            </div>
                        </div>
                    </div>
                    <div className='tech-specs-div'>
                        <div className='title-macbook-specs'>
                            Memory
                        </div>
                        <div className='macbook-specs-content-memory'>
                            <div>
                                <p>16GB of 2666MHz DDR4 onboard memory</p>
                                <p>Configurable to 32GB or 64GB of memory</p>
                            </div>
                        </div>
                    </div>
                    <div className='tech-specs-div'>
                        <div className='title-macbook-specs'>
                            Graphics
                        </div>
                        <div className='macbook-specs-content-graphics'>
                            <div>
                                <p>
                                    AMD Radeon Pro 5300M with 4GB of GDDR6 memory and automatic graphics switching
                                </p>
                                <p>
                                    Intel UHD Graphics 630
                                </p>
                                <p>
                                    Configurable to AMD Radeon Pro 5500M with 4GB of GDDR6 memory or AMD Radeon Pro 5500M with 8GB of GDDR6 memory
                                </p>
                            </div>
                            <div>
                                <p>
                                    AMD Radeon Pro 5500M with 4GB of GDDR6 memory and automatic graphics switching
                                </p>
                                <p>
                                    Intel UHD Graphics 630
                                </p>
                                <p>
                                    Configurable to AMD Radeon Pro 5500M with 8GB of GDDR6 memory
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='tech-specs-div'>
                        <div className='title-macbook-specs'>
                            Battery and Power²
                        </div>
                        <div className='macbook-specs-content-battery'>
                            <div>
                                <p>
                                    Up to 11 hours wireless web
                                </p>
                                <p>
                                    Up to 11 hours Apple TV app movie playback
                                </p>
                                <p>
                                    Up to 30 days of standby time
                                </p>
                                <p>
                                    Built-in 100-watt-hour lithium-polymer battery²
                                </p>
                                <p>
                                    96W USB-C Power Adapter
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MacBookProTechSpecs;
