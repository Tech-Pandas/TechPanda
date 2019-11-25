const stripe = require('stripe')('sk_test_IVI3ef7GfMssGoHjfZsfOzib007osWUkzw');

module.exports = {
    charge: async (req, res) => {
        try {
            let charge = await stripe.charges.create(req.body);

            res.status(200).send(charge);
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    createCustomer: async (req, res) => {
        try {
            let customer = await stripe.customers.create(req.body);

            res.status(200).send(customer);
        } catch (err) {
            res.status(500).send(err)
        }
    }
}