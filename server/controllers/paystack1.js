require(dotenv).config()
const { error } = require('console');
const http = require('http');

const PayStack = async (req, res) => {
    const {amount, email} = req.body
    const params = JSON.stringify({
        email: req.body.email,
        amount: req.body.amount
    })

    const options = {
        hostname: 'api.paystack.co',
        path: '/transaction/initialize',
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${process.env.PAYSTACK_API_KEY}`,
            'Content-Type': 'application/json'
        }
    }

    const reqPaystack = http.req(options, res => {
        let data = ''

        res.on(data, (chunk) => {
            data += chunk
        })

        res.on('end', () => {
            res.send(data)
        }).on('error', (err)=> {
            error(err)
        })
        reqPaystack.write(params)
        reqPaystack.end()
    })
    
}

module.exports = PayStack
