let PayStack = require('paystack-node')

let APIKEY = process.env.PAYSTACK_API_KEY
const environment = process.env.NODE_ENV

const paystack = new PayStack(APIKEY, environment)

const feesCalculator = new PayStack.Fees();
const feeCharge = feesCalculator.calculateFor(250000) // 2,500 Naira

/* 
  NOTE: All fields/params that require dates should be set to
  instances of the `Date()` constructor as they will
  eventually be turned into the ISO 8601 format (String)
  using `toJSON()` method for date instances/objects
*/

const promise_0 = paystack.getSettlements({
    from:new Date("2017-02-09"), 
    to:new Date()
  })
  
  promise_0.then(function(response){
    var data = response.body.data;
  }).catch(function (error){
    // deal with error
  })
  
  // listBanks

try {
    let { body: { status, message, data } } =  await paystack.listBanks({
      currency: 'NGN'
    });
  
    if(status === false){
      throw new Error(message);
    }
  }catch(ex){
    console.error(ex.message);
  }
  
  // addPageProduct
  
  const promise1 = paystack.addPageProduct({
    id: '0826739',
    products: [473, 292]
  })

  promise1.then(function(response){
    // Error Handling
    if(response.body.status === false){
      console.error(response.body.message);
    }
    var data = response.body.data;
 }).catch(function (error) {
   // deal with error
 })
 
 // getCustomer
 
 const promise2 = paystack.getCustomer({
   customer_id:'CUS_e24m6SqA6g3Jk889o21'
 })

 promise2.then(function(response){
    var data = response.body
    
  }).catch(function(error){
    // deal with error
  })
  const promise3 = paystack.createCustomer({
    email:'malik.onyemah@gmail.com',
    first_name:'Malik',
    last_name:'Onyemah',
    phone:'+2347135548369'
  })
  
  promise3.then(function(response){
    return response.body
  }).then( body => {
    return res.status(200).json({id:body.data.id})
  })
  
  // setRiskActionOnCustomer
  
  const promise4 = paystack.setRiskActionOnCustomer({
    risk_action:'deny',
    customer_id:'CUS_e24m6SqA6g3Jk889o21'
  })

  promise4.then(function (response){
    const result = response.body
 }).catch(function (error){
   // deal with error
 })
// createPage

const promise5 = paystack.createPage({
    name:'DoorPost Pay',
    description:'This is payment for every ',
    amount:300000, // Amount in kobo
    slug:'5nApBwZkvR',
    redirect_url:'https://www.localhoster.com/pay/callback',
    custom_fields: ['phone_number', 'age']
  })
  
  promise5.then(function (response){
   console.log(response.body);
  }).catch(function (error){
    // deal with error
  })
  
  // initializeTransaction

const promise6 = paystack.initializeTransaction({
    reference: "7PVGX8MEk85tgeEpVDtD",
    amount: 500000, // 5,000 Naira (remember you have to pass amount in kobo)
    email: "seun045olayinka@gmail.com",
    subaccount: "ACCT_8f4s1eq7ml6rlzj"
  })
  
  promise6.then(function (response){
    console.log(response.body);
  }).catch(function (error){
    // deal with error
  })
  
  // verifyTransaction

  const promise7 = paystack.verifyTransaction({
    reference: "7PVGX8MEk85tgeEpVDtD"
  })
  
  promise7.then(function (response){
   console.log(response.body);
  }).catch(function (error){
    // deal with error
  })

  // listInvoices

const promise8 = paystack.listInvoices({
    customer: "CUS_je02lbimlqixzax",
    status: "pending",
    paid: false,
    currency: "NGN"
  })
  
  promise8.then(function (response){
   console.log(response.body);
  }).catch(function (error){
    // deal with error
  })

  app.use(async function verifications(req, res, next){
    let responseBVN = await paystack.resolveBVN({
      bvn:req.body.bvn //'22283643840404'
    })

    let responseAcctNum = await paystack.resolveAccountNumber({
      account_number:req.body.acc_num, // '0004644649'
      bank_code:req.body.bank_code // '075'
    })

    next()
})