import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {addDeviceToCart} from '../../redux/reducer';
import './ProductSelectorPage.css';

function ProductSelectorPage(props){
    const [productSize, setProductSize] = useState('product size')
    const [productColor, setProductColor] = useState('product color')
    const [productStorage, setProductStorage] = useState('product storage')
    const [pandaCare, setPandaCare] = useState(false)
    const [productReview, setProductReview] = useState({productSize: '', productColor: '', productStorage: '', pandaCare: false, productPrice: 0, type: 'phone', name: 'Pixel 4'})
    const [XL, setXL] = useState(false)
    const [extraStorage, setExtraStorage] = useState(false)
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

    const increaseProductSize = () => {
        setProductSize('Pixel 4 XL 6.3 display')
        setXL(true)
    }

    const decreaseProductSize = () => {
        setProductSize('Pixel 4 5.7 display')
        setXL(false)
    }

    const changeStorage = () => {
        setExtraStorage(true)
        setProductStorage('64GB')
    }

    const productPrice = () => {
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

    let price = productPrice()
    const addToCart = (productSize, productColor, productStorage, pandaCare, price) => {
        setProductReview({
            productSize,
            productColor, 
            productStorage, 
            pandaCare,
            productPrice: price,
        })
        props.addDeviceToCart(productSize, productColor, productStorage, pandaCare)
        props.history.push('/cart')
    }
    
    console.log(productReview)
    console.log(props)
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
                                <button onClick={() => decreaseProductSize()}>Select</button>
                            </div>
                            <div className='product-option'>
                                {/* picture of the size will go here */}
                                <h3>Google Pixel 4 XL</h3><br/>
                                <p>Fullscreen 6.3" display</p><br/>
                                <p>From $899</p>
                                <button onClick={() => increaseProductSize()}>Select</button>
                            </div>
                    </div>
                      </div>
                ) : null}

                {displayProductColor ? (
                   <div>
                        <h1>Choose a color</h1>
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
                                {XL ? (
                                    <p>$899</p>
                                ) : (
                                    <p>$799</p>
                                )}<br/>
                                <button onClick={() => setExtraStorage(false), () => setProductStorage('64GB')}>Select</button>
                            </div>

                            <div className='product-storage-option'>
                                <p>128GB</p><br/>
                                {XL ? (
                                    <p>$999</p>
                                ) : (
                                    <p>$899</p>
                                )}<br/>
                                <button onClick={() => changeStorage()}>Select</button>
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
                            <button onClick={() => setPandaCare(true)}>Get PandaCare!</button>
                            <button onClick={() => setPandaCare(false)}>No thanks</button>
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
                        {pandaCare ? (
                            <div>PandaCare</div>
                        ) : null}
                        {productPrice()}<br/>
                        <button onClick={() => addToCart(productSize, productColor, productStorage, pandaCare)}>Add to cart</button>
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

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    addDeviceToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSelectorPage)