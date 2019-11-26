import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {addDeviceToCart} from '../../redux/reducer';
import './ProductSelectorPage.css';

import HomeProductHeaderOne from '../HomeProductPage/HomeProductHeaderOne';



function ProductSelectorPage(props){
    const [productSize, setProductSize] = useState('product size')
    const [productColor, setProductColor] = useState('product color')
    const [productStorage, setProductStorage] = useState('product storage')
    const [pandaCare, setPandaCare] = useState(false)
    const [productName, setProductName] = useState('Pixel 4')
    const [productType] = useState('phone')
    const [productReview, setProductReview] = useState({productSize: '', productColor: '', productStorage: '', pandaCare: false, productPrice: 0, productType: 'phone', productName: 'Pixel 4'})
    const [XL, setXL] = useState(false)
    const [extraStorage, setExtraStorage] = useState(false)
    const [displayProductSize, setDisplayProductSize] = useState(true)
    const [displayProductColor, setDisplayProductColor] = useState(false)
    const [displayProductStorage, setDisplayProductStorage] = useState(false)
    const [displayPandaCare, setDisplayPandaCare] = useState(false)
    const [displayProductReview, setDisplayProductReview] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, [])

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

    const moveToSize = () => {
        setDisplayProductSize(true)
        setDisplayProductColor(false)
        setDisplayProductStorage(false)
        setDisplayPandaCare(false)
        setDisplayProductReview(false)
    }

    const moveToColor = () => {
        setDisplayProductSize(false)
        setDisplayProductColor(true)
        setDisplayProductStorage(false)
        setDisplayPandaCare(false)
        setDisplayProductReview(false)
    }

    const moveToStorage = () => {
        setDisplayProductSize(false)
        setDisplayProductColor(false)
        setDisplayProductStorage(true)
        setDisplayPandaCare(false)
        setDisplayProductReview(false)
    }

    const moveToPandaCare = () => {
        setDisplayProductSize(false)
        setDisplayProductColor(false)
        setDisplayProductStorage(false)
        setDisplayPandaCare(true)
        setDisplayProductReview(false)
    }

    const increaseProductSize = () => {
        setProductSize('6.3')
        setProductName('Pixel 4 XL')
        setXL(true)
        moveForward()
    }

    const decreaseProductSize = () => {
        setProductName('Pixel 4')
        setProductSize('5.7')
        setXL(false)
        moveForward()
    }

    const increaseStorage = () => {
        setExtraStorage(true)
        setProductStorage('128GB')
        moveForward()
    }

    const decreaseStorage = () => {
        setExtraStorage(false)
        setProductStorage('64GB')
        moveForward()
    }

    const chooseOrange = () => {
        setProductColor('Oh So Orange')
        moveForward()
    }

    const chooseWhite = () => {
        setProductColor('Clearly White')
        moveForward()

    }

    const chooseBlack = () => {
        setProductColor('Just Black')
        moveForward()

    }

    const yesIFreakingWantPandaCare = () => {
        setPandaCare(true)
        moveForward()
    }

    const noIDontWantPandaCare = () => {
        setPandaCare(false)
        moveForward()
    }

    const determineProductPrice = () => {
        let price = 799
        if(XL){
            price += 100
        }
        if(extraStorage){
            price += 100
        }
        if(pandaCare){
            price += 100
        }
        return price
    }

    let productPrice = determineProductPrice()
    const addToCart = (productSize, productColor, productStorage, pandaCare, productPrice, productName, productType) => {
        setProductReview({
            productSize,
            productColor, 
            productStorage, 
            pandaCare,
            productPrice,
            productName,
            productType
        })
        props.addDeviceToCart(productSize, productColor, productStorage, pandaCare, productPrice, productName, productType)
        props.history.push('/cart')
    }
    
    // console.log(productReview)
    // console.log(props)
    // console.log(determineProductPrice())
    return(
        <nav>
            <HomeProductHeaderOne/>
        <body className='product-config-body'>
            <div className='config-toggles'>
                {displayProductSize ? (
                    <div>
                        <h1 className='product-selector-heading'>Choose your Google Pixel 4</h1>
                        <div className='product-options'>
                            <div className='product-option'>
                                <img className='product-selector-images' src='https://lh3.googleusercontent.com/46-MkrqjTXZLED0XeoizNwB29A34Cen5M-Dvre15NOgyH8bq0A1UL-Dqa2VFRe700HK9=rw-w1440' alt='pic' />
                                <p className='product-selector-heading-2'>Google Pixel 4</p>
                                <p className='product-selector-heading-3'>Fullscreen 5.7" display</p>
                                <p className='product-selector-heading-3'>From $799</p>
                                <button className='product-selector-button' onClick={() => decreaseProductSize()}>Select</button>
                            </div>
                            <div className='product-option'>
                                <img className='product-selector-images' src='https://lh3.googleusercontent.com/46-MkrqjTXZLED0XeoizNwB29A34Cen5M-Dvre15NOgyH8bq0A1UL-Dqa2VFRe700HK9=rw-w1440' alt='pic' />                             
                                <p className='product-selector-heading-2'>Google Pixel 4 XL</p>
                                <p className='product-selector-heading-3'>Fullscreen 6.3" display</p>
                                <p className='product-selector-heading-3'>From $899</p>
                                <button className='product-selector-button' onClick={() => increaseProductSize()}>Select</button>
                            </div>
                        </div>
                      </div>
                ) : null}

                {displayProductColor ? (
                   <div>
                        <h1 className='product-selector-heading'>Choose a color</h1>
                        <div className='product-options'>
                            <div className='product-option'>
                                <img className='product-selector-images-2' src='https://lh3.googleusercontent.com/iFTsXZZ6XJeWsBkczmU7tNZjipAbAx9WT8VpuAP2ADNwnvZ0uO5hrD-X7MFAGmsSFqBi=rw-w1144' alt='pic' />                             
                                <p className='product-selector-heading-random'>Just Black</p>
                                <button className='product-selector-button' onClick={() => chooseBlack()}>Select</button>
                            </div>
                            <div className='product-option'>
                                <img className='product-selector-images-2' src='https://lh3.googleusercontent.com/8SX9vrX4at1Q3jOwkywP8TnjGvECUDB7LVKtc2g6D9cR1dOH_3UuFfI0awcwUYGpTw=rw-w1144' alt='pic' />
                                <p className='product-selector-heading-random'>Clearly White</p>
                                <button className='product-selector-button' onClick={() => chooseWhite()}>Select</button>
                            </div>
                            <div className='product-option'>
                                <img className='product-selector-images-2' src='https://lh3.googleusercontent.com/5mfu9wvv04QIsSUbKz_6Uqlsjl9w7n_G260CHlux1U_dbVcxpkwWhUrQXyC2fQt3AkE=rw-w1144' alt='pic' />
                                <p className='product-selector-heading-2'>Oh So Orange</p>
                                <p className='product-selector-heading-3'>Limited Edition</p><br/>
                                <button className='product-selector-button' onClick={() => chooseOrange()}>Select</button>
                            </div>
                        </div>
                   </div>
                ) : null}

                {displayProductStorage ? (
                    <div>
                        <h1 className='product-selector-heading'>How much storage?</h1>
                        <div className='product-options'>
                            <div className='product-storage-option' onClick={() => decreaseStorage()}>
                                <p className='product-storage-option-text'>64GB</p>
                                {XL ? (
                                    <p className='product-storage-option-text-2'>$899</p>
                                ) : (
                                    <p className='product-storage-option-text-2'>$799</p>
                                )}  
                            </div>

                            <div className='product-storage-option' onClick={() => increaseStorage()}>
                                <p className='product-storage-option-text'>128GB</p>
                                {XL ? (
                                    <p className='product-storage-option-text-2'>$999</p>
                                ) : (
                                    <p className='product-storage-option-text-2'>$899</p>
                                )}
                            </div>
                        </div>
                    </div>
                ) : null}

                {displayPandaCare ? (
                   <div>
                        <h1 className='product-selector-heading'>Let Po protect your device!</h1>
                        <div className='product-options'>
                        <div id='panda-care'>
                            <img id='po-image' src='https://vignette.wikia.nocookie.net/kungfupanda/images/7/73/KFP3-promo-po4.jpg/revision/latest/scale-to-width-down/350?cb=20150726165358' alt='pic' />
                            <p className='product-storage-option-text-3'>$100</p>
                            <button className='product-selector-button-2' onClick={() => yesIFreakingWantPandaCare()}>Get PandaCare!</button>
                            <button className='product-selector-button-2' onClick={() => noIDontWantPandaCare()}>No thanks</button>
                        </div>
                    </div>
                   </div>
                ) : null}

                {displayProductReview ? (
                    <div>
                        <h1 className='product-selector-heading'>Review your choice</h1>

                        <div id='review-info-box'>
                            <img className='product-selector-images' src='https://lh3.googleusercontent.com/46-MkrqjTXZLED0XeoizNwB29A34Cen5M-Dvre15NOgyH8bq0A1UL-Dqa2VFRe700HK9=rw-w1440' alt='pic' />
                            <div id='review-info-box-text'>
                                <p className='product-storage-option-text-3'>{productReview.name} {productSize}" display</p>
                                <p className='product-storage-option-text-4'>{productColor}</p>
                                <p className='product-storage-option-text-4'>{productStorage}</p>
                                <p className='product-storage-option-text-4'>{pandaCare ? (
                                    <div>PandaCare</div>
                                ) : null}</p>
                                <p className='product-storage-option-text-4'>{`$${determineProductPrice()}`}</p>
                            </div>
                        </div>
                        
                        <button className='product-selector-button-2' onClick={() => addToCart(productSize, productColor, productStorage, pandaCare, productPrice, productName, productType)}>Add to cart</button>
                    </div>
                ) : null}
            </div>
            
        </body>
        <footer>
            <nav className='product-config-footer'>
                {!displayProductSize ? (
                    <button className='product-selector-bottom-button-1' onClick={() => moveBack()}>Back</button>
                ) : <button className='blank-white-button'></button>
            }
                <div className='product-selector-dots'>
                    {displayProductSize ? (
                        <div className='product-selector-dots'>
                            <button className='progress-buttons-1' onClick={() => moveToSize()}></button>
                            <div className='product-selector-button-lines-2'/>
                        </div>
                    ) : (
                        <div className='product-selector-dots'>
                            <button className='progress-buttons-2' onClick={() => moveToSize()}></button>
                            <div className='product-selector-button-lines'/>
                        </div>
                    )}
                    {displayProductColor ? (
                        <div className='product-selector-dots'>
                            <button className='progress-buttons-1' onClick={() => moveToColor()}></button>
                            <div className='product-selector-button-lines-2'/>
                        </div>
                    ) : (
                        <div className='product-selector-dots'>
                            <button className='progress-buttons-2' onClick={() => moveToColor()}></button>
                            <div className='product-selector-button-lines'/>
                        </div>
                    )}
                    {displayProductStorage ? (
                        <div className='product-selector-dots'>
                            <button className='progress-buttons-1' onClick={() => moveToStorage()}></button>
                            <div className='product-selector-button-lines-2'/>
                        </div>
                    ) : (
                        <div className='product-selector-dots'>
                            <button className='progress-buttons-2' onClick={() => moveToStorage()}></button>
                            <div className='product-selector-button-lines'/>
                        </div>
                    )}
                    {displayPandaCare ? (
                        <button className='progress-buttons-1' onClick={() => moveToPandaCare()}></button>
                    ): (
                        <button className='progress-buttons-2' onClick={() => moveToPandaCare()}></button>
                    )}
                </div>

                {!displayProductReview ? (
                    <button className='product-selector-bottom-button-2' onClick={() => moveForward()}>Next</button>
                ) : <button className='blank-white-button'></button>}
            </nav>
        </footer>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    addDeviceToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSelectorPage)