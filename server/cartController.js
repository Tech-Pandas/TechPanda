 
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

    addCart: async (req, res) => {
        const {user_id, product_id, quantity} = req.body
        const db = req.app.get('db')

        let confirmCart = await db.add_cart({user_id, product_id, quantity})
        // not sure if this should be confirmCart[0]?
        if(confirmCart){
            res.status(200).send('Cart added')
        } else {
            res.status(500).send('Cart not added')
        }
    },

    getCart: async (req, res) => {
        const {userid} = req.params
        const db = req.app.get('db')

        let existingCart = await db.get_cart(userid)

        if(existingCart[2]){
            let firstProduct = await db.get_product(existingCart[0].product_id)
            let secondProduct = await db.get_product(existingCart[1].product_id)
            let thirdProduct = await db.get_product(existingCart[2].product_id)
            let products = {
                firstProduct: firstProduct[0],
                secondProduct: secondProduct[0],
                thirdProduct: thirdProduct[0] 
            }
            res.status(200).send(products)
        }
        if(existingCart[1]){
            let firstProduct = await db.get_product(existingCart[0].product_id)
            let secondProduct = await db.get_product(existingCart[1].product_id)
            let products = {
                firstProduct: firstProduct[0],
                secondProduct: secondProduct[0] 
            }
            res.status(200).send(products)
        } else if (existingCart[0]){
            let firstProduct = await db.get_product(existingCart[0].product_id)
            res.status(200).send(firstProduct)
        } else {
            res.sendStatus(500)
        }
    }
 }