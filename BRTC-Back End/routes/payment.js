const router= require("express").Router();
const paymentController = require("../controller/paymentController")
const middleware = require('../middleware/middleware')
router.post('/bkash/payment/create',middleware.bkash_auth, paymentController.payment_create)
router.get('/bkash/payment/callback',middleware.bkash_auth, paymentController.call_back)
module.exports=router;