const axios = require('axios')

const { v4: uuidv4 } = require('uuid')

class paymentController {

    // Function to get bKash headers
    bkash_headers = async () => {
        return {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: global.id_token,  // Using global object to store id_token
            'x-app-key': process.env.bkash_api_key,
        }
    }

    // Function to create a payment
    payment_create = async (req, res) => {
        const { amount, userId } = req.body

        // Store the userId in global (if you need to store it globally)
        global.userId = userId

        try {
            // Creating payment request
            const { data } = await axios.post(process.env.bkash_create_payment_url, {
                mode: '0011',
                payerReference: " ",
                callbackURL: 'http://localhost:5000/api/bkash/payment/callback',
                amount: amount,
                currency: "BDT",
                intent: 'sale',
                merchantInvoiceNumber: 'Inv' + uuidv4().substring(0, 5)  // Generate unique invoice number
            }, {
                headers: await this.bkash_headers()
            })

            // Returning the payment URL
            console.log(data)
            return res.status(200).json({ bkashURL: data.bkashURL })
        } catch (error) {
            // Error handling
            return res.status(401).json({ error: error.message })
        }
    }

    // Callback after payment
    call_back = async (req, res) => {
        const { paymentID, status } = req.query

        // Handling different status codes
        if (status === 'cancel' || status === 'failure') {
            return res.redirect(`http://localhost:5173/error?message=${status}`)
        }

        if (status === 'success') {
            try {
                // Execute payment
                const { data } = await axios.post(process.env.bkash_execute_payment_url, { paymentID }, {
                    headers: await this.bkash_headers()
                })

                // Handle successful execution
                if (data && data.statusCode === '0000') {
                    const userId = global.userId  // Get userId from global

                    // Save payment data in the database
                  

                    // Redirect on success
                    return res.redirect(`http://localhost:5173/print`)
                } else {
                    // Error message from bKash response
                    return res.redirect(`http://localhost:5173/error?message=${data.statusMessage}`)
                }
            } catch (error) {
                // Handle execution error
                console.log(error)
                return res.redirect(`http://localhost:5173/error?message=${error.message}`)
            }
        }
    }

    // Refund payment (Optional and commented out in your code)
   /* refund = async (req, res) => {
        const { trxID } = req.params

        try {
            // Find the payment from the database using the trxID
            const payment = await paymentModel.findOne({ trxID })

            // Send refund request to bKash API
            const { data } = await axios.post(process.env.bkash_refund_transaction_url, {
                paymentID: payment.paymentID,
                amount: payment.amount,
                trxID,
                sku: 'payment',
                reason: 'cashback'
            }, {
                headers: await this.bkash_headers()
            })

            // Handle refund success/failure
            if (data && data.statusCode === '0000') {
                return res.status(200).json({ message: 'Refund success' })
            } else {
                return res.status(404).json({ error: 'Refund failed' })
            }
        } catch (error) {
            // Handle refund error
            return res.status(404).json({ error: 'Refund failed' })
        }
    }*/
}

module.exports = new paymentController()
