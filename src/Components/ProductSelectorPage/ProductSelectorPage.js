import React, {useState, useEffect} from 'react';
import './ProductSelectorPage.css'

function ProductSelectorPage(){
    const [productSize, setProductSize] = useState('product size')
    const [productColor, setProductColor] = useState('product color')
    const [productStorage, setProductStorage] = useState('product storage')
    const [pandaCare, setPandaCare] = useState(false)
    const [productReview, setProductReview] = useState({productSize: '', productColor: '', productStorage: '', pandaCare: false})
    const [displayProductSize, setDisplayProductSize] = useState(true)
    const [displayProductColor, setDisplayProductColor] = useState(false)
    const [displayProductStorage, setDisplayProductStorage] = useState(false)
    const [displayPandaCare, setDisplayPandaCare] = useState(false)
    const [displayProductReview, setDisplayProductReview] = useState(false)

    const moveForward = () => {
        if(displayProductSize === true){
            setDisplayProductSize(false)
            setDisplayProductColor(true)
            setDisplayProductStorage(false)
            setDisplayPandaCare(false)
            setDisplayProductReview(false)
        }

        if(displayProductColor === true){
            setDisplayProductSize(false)
            setDisplayProductColor(false)
            setDisplayProductStorage(true)
            setDisplayPandaCare(false)
            setDisplayProductReview(false)
        }

        if(displayProductStorage === true){
            setDisplayProductSize(false)
            setDisplayProductColor(false)
            setDisplayProductStorage(false)
            setDisplayPandaCare(true)
            setDisplayProductReview(false)            

        }

        if(displayPandaCare === true){
            setDisplayProductSize(false)
            setDisplayProductColor(false)
            setDisplayProductStorage(false)
            setDisplayPandaCare(false)
            setDisplayProductReview(true)
            

        }
    }

    const moveBack = () => {
        if(displayProductColor === true){
            setDisplayProductSize(true)
            setDisplayProductColor(false)
            setDisplayProductStorage(false)
            setDisplayPandaCare(false)
            setDisplayProductReview(false)
        }

        if(displayProductStorage === true){
            setDisplayProductSize(false)
            setDisplayProductColor(true)
            setDisplayProductStorage(false)
            setDisplayPandaCare(false)
            setDisplayProductReview(false)
        }

        if(displayPandaCare === true){
            setDisplayProductSize(false)
            setDisplayProductColor(false)
            setDisplayProductStorage(true)
            setDisplayPandaCare(false)
            setDisplayProductReview(false)
        }

        if(displayProductReview === true){
            setDisplayProductSize(false)
            setDisplayProductColor(false)
            setDisplayProductStorage(false)
            setDisplayPandaCare(true)
            setDisplayProductReview(false)

        }
    }
    

    return(
        <body className='product-config-body'>
            <div className='config-toggles'>
                {displayProductSize ? (
                    <div>
                        <h1>Choose your Google Pixel 4</h1>
                        <div className='product-options'>
                            <div className='product-option'>
                                 {/* picture of the size will go here */}
                                <h3>Google Pixel 4</h3><br/>
                                <p>Fullscreen 5.7" display</p><br/>
                                <p>From $799</p>
                                <button onClick={() => setProductSize('5.7')}>Select</button>
                            </div>
                            <div className='product-option'>
                                {/* picture of the size will go here */}
                                <h3>Google Pixel 4</h3><br/>
                                <p>Fullscreen 6.3" display</p><br/>
                                <p>From $799</p>
                                <button onClick={() => setProductSize('6.3')}>Select</button>
                            </div>
                    </div>
                      </div>
                ) : null}

                {displayProductColor ? (
                   <div>
                        <h1>Choose your Color</h1>
                        <div className='product-options'>
                            <div className='product-option'>
                                {/* picture of the color will go here */}
                                <h3>Just Black</h3><br/>
                                <button onClick={() => setProductColor('Just Black')}>Select</button>
                            </div>
                            <div className='product-option'>
                                {/* picture of the color will go here */}
                                <h3>Clearly White</h3><br/>
                                <button onClick={() => setProductColor('Clearly White')}>Select</button>
                            </div>
                            <div className='product-option'>
                                {/* picture of the color will go here */}
                                <h3>Oh So Orange</h3><br/>
                                <p>Limited Edition</p><br/>
                                <button onClick={() => setProductColor('Oh So Orange')}>Select</button>
                            </div>
                        </div>
                   </div>
                ) : null}

                {displayProductStorage ? (
                    <div>
                        <h1>How much storage?</h1>
                        <div className='product-options'>
                            <div className='product-storage-option'>
                                <p>64GB</p><br/>
                                <p>$799</p>
                            </div>

                            <div className='product-storage-option'>
                                <p>128GB</p><br/>
                                <p>$899</p>
                            </div>
                        </div>
                    </div>
                ) : null}

                {displayPandaCare ? (
                   <div>
                        <h1>Let Po protect your device!</h1>
                        <div className='product-options'>
                        <div id='panda-care'>
                            <img id='po-image' src='https://vignette.wikia.nocookie.net/kungfupanda/images/7/73/KFP3-promo-po4.jpg/revision/latest/scale-to-width-down/350?cb=20150726165358' />
                            <button>Get PandaCare!</button>
                            <p>$100</p>
                        </div>
                    </div>
                   </div>
                ) : null}

                {displayProductReview ? (
                    <div>
                        {/* pic of chosen product */}
                        {productSize}<br/>
                        {productColor}<br/>
                        {productStorage}<br/>
                        {pandaCare}<br/>
                        <button>Add to cart</button>
                    </div>
                ) : null}
            </div>
            <nav className='product-config-footer'>
                <button onClick={() => moveBack()}>Back</button>
                <button onClick={() => moveForward()}>Next</button>
            </nav>
        </body>
    )
}

export default ProductSelectorPage