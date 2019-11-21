 
 module.exports = {
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