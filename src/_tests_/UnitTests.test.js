import {HashRouter, Link} from 'react-router-dom'
import renderer from 'react-test-renderer'
import React from 'react';

import {
    pixel4,
    iphone11
} from './data'

const { 
    moveForward
} = require('./Functions')

import {
    addDeviceToCart, 
    } from '../redux/reducer'


// testing routing
test("make sure that '/' renders the home(Pixel 4) page", () => {
    const component = renderer.create(
        <HashRouter>
            <Link to='/'/>
        </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})

test("make sure that '/productconfig' renders the Pixel 4 selector page", () => {
    const component = renderer.create(
        <HashRouter>
            <Link to='/productconfig'/>
        </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})

test("make sure that '/productconfigiphone' renders the iPhone selector page", () => {
    const component = renderer.create(
        <HashRouter>
            <Link to='/productconfigiphone'/>
        </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})

test("make sure that '/techspecs' renders the Pixel 4 techspecs page", () => {
    const component = renderer.create(
        <HashRouter>
            <Link to='/techspecs'/>
        </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})

test("make sure that '/cart' renders the cart page", () => {
    const component = renderer.create(
        <HashRouter>
            <Link to='/cart'/>
        </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})
// ^^^^^^^^ Scott's five tests

test("make sure that '/stadia' renders the stadia page", () => {
    const component = renderer.create(
        <HashRouter>
            <Link to='/stadia'/>
        </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})

test("make sure that '/stadiaconfig' renders the stadia selector page", () => {
    const component = renderer.create(
        <HashRouter>
            <Link to='/stadiaconfig'/>
        </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})

test("make sure that '/stadiaspecs' renders the stadia specs page", () => {
    const component = renderer.create(
        <HashRouter>
            <Link to='/stadiaspecs'/>
        </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})

test("make sure that '/iphone' renders the iPhone page", () => {
    const component = renderer.create(
        <HashRouter>
            <Link to='/iphone'/>
        </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})

test("make sure that '/iphone-tech-specs' renders the iPhone tech specs page", () => {
    const component = renderer.create(
        <HashRouter>
            <Link to='/iphone-tech-specs'/>
        </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})
// Tavas' five test ^^^^^^^^^

test("make sure that '/mac-book-pro' renders the MacBook Pro selector page", () => {
    const component = renderer.create(
        <HashRouter>
            <Link to='/mac-book-pro'/>
        </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})

test("make sure that '/macbookpro-home' renders the MacBook Pro Home page", () => {
    const component = renderer.create(
        <HashRouter>
            <Link to='/macbookpro-home'/>
        </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})

test("make sure that '/macbookpro-tech-specs' renders the MacBook Pro tech specs page", () => {
    const component = renderer.create(
        <HashRouter>
            <Link to='/macbookpro-tech-specs'/>
        </HashRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})

// testing if the conditionals are changing the correct variables to trigger the correct toggles. 
it('should change displayProductColor to true and all others to false', () => {
    let displayProductSize = true
    let displayProductColor = false
    let displayProductStorage = false
    let displayProductReview = false
    let displayPandaCare = false

    let result = moveForward(displayProductSize, displayProductColor, displayProductStorage, displayProductReview, displayPandaCare)
    expect(result.displayProductColor).toBe(true)
})

it('should change displayProductStorage to true and all others to false', () => {
    let displayProductSize = false
    let displayProductColor = true
    let displayProductStorage = false
    let displayProductReview = false
    let displayPandaCare = false

    let result = moveForward(displayProductSize, displayProductColor, displayProductStorage, displayProductReview, displayPandaCare)
    expect(result.displayProductStorage).toBe(true)
})
// ^^^^^^^^^^^^^^^^^^^^^^Nate's tests

it('should change displayPandaCare to true and all others to false', () => {
    let displayProductSize = false
    let displayProductColor = false
    let displayProductStorage = true
    let displayProductReview = false
    let displayPandaCare = false

    let result = moveForward(displayProductSize, displayProductColor, displayProductStorage, displayProductReview, displayPandaCare)
    expect(result.displayPandaCare).toBe(true)
})

it('should change displayProductReview to true and all others to false', () => {
    let displayProductSize = false
    let displayProductColor = false
    let displayProductStorage = false
    let displayProductReview = false
    let displayPandaCare = true

    let result = moveForward(displayProductSize, displayProductColor, displayProductStorage, displayProductReview, displayPandaCare)
    expect(result.displayProductReview).toBe(true)
})

it('should change all variables but displayProductReview to false', () => {
    let displayProductSize = false
    let displayProductColor = false
    let displayProductStorage = false
    let displayProductReview = false
    let displayPandaCare = true

    let result = moveForward(displayProductSize, displayProductColor, displayProductStorage, displayProductReview, displayPandaCare)
    expect(result.displayPandaCare).toBe(false)
})



// Testing if adding right info to cart
it('should output the product info put into it', () => {
    const {productName, productPrice, productImage, productSize, productColor, productStorage, pandaCare, productType, productRam, productProcessor} = pixel4
    
    let result = addDeviceToCart(productName, productPrice, productImage, productSize, productColor, productStorage, pandaCare, productType, productRam, productProcessor)
    expect(result.payload).toStrictEqual(pixel4)
})

it('should not match the pixel4 data', () => {
    const {productName, productPrice, productImage, productSize, productColor, productStorage, pandaCare, productType, productRam, productProcessor} = iphone11

    let result = addDeviceToCart(productName, productPrice, productImage, productSize, productColor, productStorage, pandaCare, productType, productRam, productProcessor)
    expect(result.payload).not.toStrictEqual(pixel4)
})
// TJ's five tests
