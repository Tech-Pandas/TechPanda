import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addDeviceToCart } from '../../redux/reducer';
import './MacBookPro.css';

import HomeProductHeaderOne from '../HomeProductPage/HomeProductHeaderOne';



function MacBookPro(props) {
    const [productSize, setProductSize] = useState('product size')
    const [productColor, setProductColor] = useState('product color')
    const [productStorage, setProductStorage] = useState('product storage')
    const [pandaCare, setPandaCare] = useState(false)
    const [productImage, setProductImage] = useState('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-silver-select-201807?wid=904&hei=840&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1529520056377')
    const [productName, setProductName] = useState('MacBook Pro 16-inch model')
    const [productType] = useState('phone')
    const [productReview, setProductReview] = useState({ productSize: '', productColor: '', productStorage: '', pandaCare: false, productPrice: 0, productType: 'phone', productName: 'MacBook Pro 16-inch model' })
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
        if (displayProductSize === true) {
            setDisplayProductSize(false)
            setDisplayProductColor(true)
            setDisplayProductStorage(false)
            setDisplayPandaCare(false)
            setDisplayProductReview(false)
        }

        if (displayProductColor === true) {
            setDisplayProductSize(false)
            setDisplayProductColor(false)
            setDisplayProductStorage(true)
            setDisplayPandaCare(false)
            setDisplayProductReview(false)
        }

        if (displayProductStorage === true) {
            setDisplayProductSize(false)
            setDisplayProductColor(false)
            setDisplayProductStorage(false)
            setDisplayPandaCare(true)
            setDisplayProductReview(false)

        }

        if (displayPandaCare === true) {
            setDisplayProductSize(false)
            setDisplayProductColor(false)
            setDisplayProductStorage(false)
            setDisplayPandaCare(false)
            setDisplayProductReview(true)


        }
    }

    const moveBack = () => {
        if (displayProductColor === true) {
            setDisplayProductSize(true)
            setDisplayProductColor(false)
            setDisplayProductStorage(false)
            setDisplayPandaCare(false)
            setDisplayProductReview(false)
        }

        if (displayProductStorage === true) {
            setDisplayProductSize(false)
            setDisplayProductColor(true)
            setDisplayProductStorage(false)
            setDisplayPandaCare(false)
            setDisplayProductReview(false)
        }

        if (displayPandaCare === true) {
            setDisplayProductSize(false)
            setDisplayProductColor(false)
            setDisplayProductStorage(true)
            setDisplayPandaCare(false)
            setDisplayProductReview(false)
        }

        if (displayProductReview === true) {
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
        setProductSize('16')
        setProductName('16')
        setMax(true)
        moveForward()
    }

    const decreaseProductSize = () => {
        setProductName('13')
        setProductSize('13')
        setMax(false)
        moveForward()
    }

    const doubleIncreaseStorage = () => {
        setExtraStorage(false)
        setDoubleExtraStorage(true)
        setProductStorage('2TB')
        moveForward()
    }

    const increaseStorage = () => {
        setExtraStorage(true)
        setProductStorage('1TB')
        moveForward()
    }

    const decreaseStorage = () => {
        setExtraStorage(false)
        setProductStorage('512GB')
        moveForward()
    }

    const chooseSpaceGray = () => {
        setProductColor('Space Gray')
        moveForward()
    }

    const chooseSilver = () => {
        setProductColor('Silver')
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

    console.log(Max)
    console.log(extraStorage)
    console.log(doubleExtraStorage)
    console.log(pandaCare)
    const determineProductPrice = () => {
        let price = 1699
        if (Max) {
            price += 700
        }
        if (extraStorage) {
            price += 200
        }
        if (doubleExtraStorage) {
            price += 600
        }
        if (pandaCare) {
            price += 100
        }
        return price
    }

    let productPrice = determineProductPrice()
    const addToCart = (productName, productPrice, productImage, productSize, productColor, productStorage, pandaCare, productType) => {
        setProductReview({
            productSize,
            productColor,
            productStorage,
            pandaCare,
            productPrice,
            productName,
            productType
        })
        props.addDeviceToCart(productName, productPrice, productImage, productSize, productColor, productStorage, pandaCare, productType)
        props.history.push('/cart')
    }

    // console.log(productReview)
    // console.log(props)
    console.log(determineProductPrice())
    return (
        <div>
            <HomeProductHeaderOne />
            <body className='product-config-body'>
                <div className='mac-config-toggles'>
                    {displayProductSize ? (
                        <div>
                            <h1 className='product-selector-heading'>Choose your MacBook Pro 16-inch model</h1>
                            <div className='mac-product-options'>
                                <div className='product-option'>

                                    <img className='product-selector-images' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-silver-select-201807?wid=904&hei=840&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1529520056377' alt='pic' />
                                    <p className='product-selector-heading-2'>MacBook Pro 13-inch model</p>
                                    <p className='product-selector-heading-3'>1.4GHz Quad-Core Processor with<br />Turbo Boost up to 3.9GHz</p>
                                    <p className='product-selector-heading-3'>512GB Storage</p>
                                    <p className='product-selector-heading-3'>From $1699</p>
                                    <button className='product-selector-button' onClick={() => decreaseProductSize()}>Select</button>
                                </div>
                                <div className='product-option'>
                                    <img className='product-selector-images' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-201807?wid=904&hei=840&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1529520060550' alt='pic' />
                                    <p className='product-selector-heading-2'>MacBook Pro 16-inch model</p>
                                    <p className='product-selector-heading-3'>2.6GHz 6-Core Processor</p>
                                    <p className='product-selector-heading-3'>512GB Storage</p>
                                    <p className='product-selector-heading-3'>From $2399</p>
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
                                    <img className='product-selector-images-2' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-201807?wid=904&hei=840&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1529520060550' alt='pic' />
                                    <p className='product-selector-heading-random'>Space Gray</p>
                                    <button className='product-selector-button' onClick={() => chooseSpaceGray()}>Select</button>
                                </div>
                                <div className='product-option'>
                                    <img className='product-selector-images-2' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-silver-select-201807?wid=904&hei=840&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1529520056377' alt='pic' />
                                    <p className='product-selector-heading-random'>Silver</p>
                                    <button className='product-selector-button' onClick={() => chooseSilver()}>Select</button>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {displayProductStorage ? (
                        <div>
                            <h1 className='product-selector-heading'>How much storage?</h1>
                            <div className='product-options'>
                                <div className='product-storage-option' onClick={() => decreaseStorage()}>
                                    <p className='product-storage-option-text'>512GB SSD</p>
                                    {!Max ? (
                                        <p className='product-storage-option-text-2'>$1699</p>
                                    ) : (
                                            <p className='product-storage-option-text-2'>$2399</p>
                                        )}
                                </div>

                                <div className='product-storage-option' onClick={() => increaseStorage()}>
                                    <p className='product-storage-option-text'>1TB SSD</p>
                                    {!Max ? (
                                        <p className='product-storage-option-text-2'>$1899</p>
                                    ) : (
                                            <p className='product-storage-option-text-2'>$2599</p>
                                        )}
                                </div>

                                <div className='product-storage-option' onClick={() => doubleIncreaseStorage()}>
                                    <p className='product-storage-option-text'>2TB SSD</p>
                                    {!Max ? (
                                        <p className='product-storage-option-text-2'>$2299</p>
                                    ) : (
                                            <p className='product-storage-option-text-2'>$2999</p>
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
                            <img className='product-selector-images' src={productImage} alt='pic' />
                            <div id='review-info-box-text'>
                                <p className='product-storage-option-text-3'>{productReview.name} {productSize}" display</p>
                                <p className='product-storage-option-text-4'>{productColor}</p>
                                <p className='product-storage-option-text-4'>{productStorage}</p>
                                <p className='product-storage-option-text-4'>{pandaCare ? (
                                    <p>PandaCare</p>
                                ) : null}</p>
                                <p className='product-storage-option-text-4'>{`$${determineProductPrice()}`}</p>
                            </div>
                        </div>
                        
                        <button className='product-selector-button-2' onClick={() => addToCart(productSize, productColor, productStorage, pandaCare, productPrice, productName, productType, productImage)}>Add to cart</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(MacBookPro)