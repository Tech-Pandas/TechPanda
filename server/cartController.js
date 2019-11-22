 
 module.exports = {
    getProductID: async (req, res) => {
        console.log(req.body)
        const {productSize, productColor, productStorage, pandaCare, productPrice, productType, productName, productRam, productProcessor} = req.body
        const db = req.app.get('db')

        console.log(productSize, productColor, productStorage, pandaCare, productPrice, productType, productName, productRam, productProcessor)

        if(productRam){
            // for if it's a laptop
            let product = await db.get_laptop_id({})

        
            console.log(product[0].product_id)
            res.status(200).send(`${product[0].product_id}`)
        } else {
            // for if it's a phone
            let product = await db.get_phone_id({productSize, productColor, productStorage, pandaCare, productPrice, productType, productName})
            console.log(product)
        
            console.log('phone fetcher', product[0].product_id)
            res.status(200).send(`${product[0].product_id}`)
        }

    },

     addCart: async (req, res) => {
        const {user_id, product_id, quantity} = req.body
        const db = req.app.get('db')

        let confirmCart = await db.add_cart({user_id, product_id, quantity})
        if(confirmCart){
            res.status(200).send('Cart added')
        } else {
            res.status(500).send('Cart not added')
        }
     }
 }