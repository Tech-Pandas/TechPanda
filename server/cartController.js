 
 module.exports = {
    getProductID: async (req, res) => {
        const {productSize, productColor, productStorage} = req.body
        const db = req.app.get('db')

        let product = await db.get_product({productSize, productColor, productStorage})
        
        console.log(product[0].product_id)
        res.status(200).send(product[0].product_id)
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