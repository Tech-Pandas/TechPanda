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
    const [productName, setProductName] = useState('iPhone 11 Pro')
    const [productType] = useState('phone')
    const [productImage, setProductImage] = useState('https://cdn.macrumors.com/article-new/2019/09/iphone11prolineup.jpg')
    const [productReview, setProductReview] = useState({productSize: '', productColor: '', productStorage: '', pandaCare: false, productPrice: 0, productType: 'phone', productName: 'iPhone 11 Pro'})
    const [Max, setMax] = useState(false)
    const [extraStorage, setExtraStorage] = useState(false)
    const [doubleExtraStorage, setDoubleExtraStorage] = useState(false)
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
        setProductSize('6.5')
        setProductName('iPhone 11 Pro Max')
        setMax(true)
        moveForward()
    }

    const decreaseProductSize = () => {
        setProductName('iPhone 11 Pro')
        setProductSize('5.8')
        setMax(false)
        moveForward()
    }

    const doubleIncreaseStorage = () => {
        setExtraStorage(false)
        setDoubleExtraStorage(true)
        setProductStorage('516GB')
        moveForward()
    }

    const increaseStorage = () => {
        setExtraStorage(true)
        setProductStorage('256GB')
        moveForward()
    }

    const decreaseStorage = () => {
        setExtraStorage(false)
        setProductStorage('64GB')
        moveForward()
    }

    const chooseSpaceGray = () => {
        setProductColor('Space Gray')
        setProductImage('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-space-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954989577')
        moveForward()
    }

    const chooseSilver = () => {
        setProductColor('Silver')
        setProductImage('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-silver-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954989256')
        moveForward()

    }

    const chooseMidnightGreen = () => {
        setProductColor('Midnight Green')
        setProductImage('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073')
        moveForward()

    }

    const chooseGold = () => {
        setProductColor('Gold')
        setProductImage('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-gold-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990120')
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
        let price = 999
        if(Max){
            price += 100
        }
        if(extraStorage){
            price += 149
        }
        if(doubleExtraStorage){
            price += 100
        }
        if(pandaCare){
            price += 100
        }
        return price
    }

    let productPrice = determineProductPrice()
    const addToCart = (productSize, productColor, productStorage, pandaCare, productPrice, productName, productType, productImage) => {
        console.log(productImage)
        setProductReview({
            productSize,
            productColor, 
            productStorage, 
            pandaCare,
            productPrice,
            productName,
            productType,
            productImage
        })
        console.log(productImage)
        props.addDeviceToCart(productSize, productColor, productStorage, pandaCare, productPrice, productName, productType, productImage)
        props.history.push('/cart')
    }
    
    // console.log(productReview)
    // console.log(props)
    console.log(determineProductPrice())
    return(
        <div>
            <HomeProductHeaderOne/>
        <body className='product-config-body'>
            <div className='config-toggles'>
                {displayProductSize ? (
                    <div>
                        <h1 className='product-selector-heading'>Choose your iPhone 11 Pro</h1>
                        <div className='product-options'>
                            <div className='product-option'>

                                <img className='product-selector-images' src='https://cdn.macrumors.com/article-new/2019/09/iphone11prolineup.jpg' alt='pic' />
                                <p className='product-selector-heading-2'>iPhone 11 Pro</p>
                                <p className='product-selector-heading-3'>5.8" display</p>
                                <p className='product-selector-heading-3'>From $999</p>
                                <button className='product-selector-button' onClick={() => decreaseProductSize()}>Select</button>
                            </div>
                            <div className='product-option'>
                                <img className='product-selector-images' src='https://cdn.macrumors.com/article-new/2019/09/iphone11prolineup.jpg' alt='pic' />                             
                                <p className='product-selector-heading-2'>iPhone 11 Pro Max</p>
                                <p className='product-selector-heading-3'>6.5" display</p>
                                <p className='product-selector-heading-3'>From $1099</p>
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
                                <img className='product-selector-images-2' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-space-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954989577' alt='pic' />                             
                                <p className='product-selector-heading-random'>Space Gray</p>
                                <button className='product-selector-button' onClick={() => chooseSpaceGray()}>Select</button>
                            </div>
                            <div className='product-option'>
                                <img className='product-selector-images-2' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-silver-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954989256' alt='pic' />
                                <p className='product-selector-heading-random'>Silver</p>
                                <button className='product-selector-button' onClick={() => chooseSilver()}>Select</button>
                            </div>
                            <div className='product-option'>
                                <img className='product-selector-images-2' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073' alt='pic' />
                                <p className='product-selector-heading-2'>Midnight Green</p>
                                <button className='product-selector-button' onClick={() => chooseMidnightGreen()}>Select</button>
                            </div>
                            <div className='product-option'>
                                <img className='product-selector-images-2' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-gold-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990120' alt='pic' />
                                <p className='product-selector-heading-2'>Gold</p>
                                <button className='product-selector-button' onClick={() => chooseGold()}>Select</button>
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
                                {!Max ? (
                                    <p className='product-storage-option-text-2'>$999</p>
                                ) : (
                                    <p className='product-storage-option-text-2'>$1099</p>
                                )}  
                            </div>

                            <div className='product-storage-option' onClick={() => increaseStorage()}>
                                <p className='product-storage-option-text'>256GB</p>
                                {!Max ? (
                                    <p className='product-storage-option-text-2'>$1149</p>
                                ) : (
                                    <p className='product-storage-option-text-2'>$1249</p>
                                )}
                            </div>

                            <div className='product-storage-option' onClick={() => doubleIncreaseStorage()}>
                                <p className='product-storage-option-text'>512GB</p>
                                {!Max ? (
                                    <p className='product-storage-option-text-2'>$1349</p>
                                ) : (
                                    <p className='product-storage-option-text-2'>$1449</p>
                                )}
                            </div>
                        </div>
                    </div>
                ) : null}

                {displayPandaCare ? (
                   <div>
                        <h1>Let Po protect your device!</h1>
                        <div className='product-options'>
                        <div id='panda-care'>
                            <img id='po-image' src='https://vignette.wikia.nocookie.net/kungfupanda/images/7/73/KFP3-promo-po4.jpg/revision/latest/scale-to-width-down/350?cb=20150726165358' alt='pic' />
                            <button onClick={() => yesIFreakingWantPandaCare()}>Get PandaCare!</button>
                            <button onClick={() => noIDontWantPandaCare()}>No thanks</button>
                            <p>$100</p>
                        </div>
                    </div>
                   </div>
                ) : null}

                {displayProductReview ? (
                    <div>
                        {/* pic of chosen product */}
                <p>{productReview.name} {productSize}" display</p><br/>
                        {productColor}<br/>
                        {productStorage}<br/>
                        {pandaCare ? (
                            <div>PandaCare</div>
                        ) : null}
                        {determineProductPrice()}<br/>
                        <button onClick={() => addToCart(productSize, productColor, productStorage, pandaCare, productPrice, productName, productType, productImage)}>Add to cart</button>
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
                
                <div>
                    <button onClick={() => moveToSize()}>Size</button>
                    <button onClick={() => moveToColor()}>Color</button>
                    <button onClick={() => moveToStorage()}>Storage</button>
                    <button onClick={() => moveToPandaCare()}>PandaCare</button>
                </div>

                {!displayProductReview ? (
                    <button className='product-selector-bottom-button-2' onClick={() => moveForward()}>Next</button>
                ) : <button className='blank-white-button'></button>}
            </nav>
        </footer>
        </div>
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