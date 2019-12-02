 
 module.exports = {
    getProductID: async (req, res) => {
        // console.log(req.body)
        const {productSize, productColor, productStorage, pandaCare, productPrice, productType, productName, productRam, productProcessor} = req.body
        const db = req.app.get('db')

        // console.log(productSize, productColor, productStorage, pandaCare, productPrice, productType, productName, productRam, productProcessor)

        if(productRam){
            // for if it's a laptop
            let product = await db.get_laptop_id({})

        
            // console.log(product[0].product_id)
            res.status(200).send(`${product[0].product_id}`)
        } else {
            // for if it's a phone
            let product = await db.get_phone_id({productSize, productColor, productStorage, pandaCare, productPrice, productType, productName})
        
            // console.log('phone fetcher', product[0].product_id)
            res.status(200).send(`${product[0].product_id}`)
        }

    },

    // addCart: async (req, res) => {
    //     const {user_id, product_id, quantity} = req.body
    //     const db = req.app.get('db')

    //     let confirmCart = await db.add_cart({user_id, product_id, quantity})
    //     // not sure if this should be confirmCart[0]?
    //     if(confirmCart){
    //         res.status(200).send('Cart added')
    //     } else {
    //         res.status(500).send('Cart not added')
    //     }
    // },

    addCart: async (req, res) => {
        const {cart} = req.body
        // console.log('hit addCart', req.session)
        console.log('hit addCart', cart)
        req.session.cart = []

        if(cart){
            req.session.cart = {...req.session.cart}
            // console.log('passed conditional', req.session)

            res.status(200).send(cart)
        } else {
            res.sendStatus(500, 'nothing in cart')
        }
    },

    getCart: async (req, res) => {
        const {cart} = req.session
        // console.log('SESSION IS HERE',
        // req.session)

        if(cart){
            res.status(200).send(cart)
        } else {
            res.sendStatus(404)
        }
        
    }

    // getCart: async (req, res) => {
    //     const {userid} = req.params
    //     const db = req.app.get('db')

    //     let existingCart = await db.get_cart(userid)

    //     if(existingCart[0]){
    //         let products = []
    //         for(let i = 0; i < existingCart.length; i++){
    //             let product = await db.get_product(existingCart[i].product_id)
    //             console.log(product[0])
    //             products.push(product[0])
    //         }
    //         res.status(200).send(products)
    //         } else {
    //         res.sendStatus(500)
    //     }
    // }

 }