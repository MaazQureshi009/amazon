const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response, request } = require("express");
const stripe = require("stripe")('sk_test_51MCOdySGgdhuP7yK1RGyFVIQHDZBz7l2c27GJ8dRwppE9FdXTnDI9UvUtl7wHM8bxNokDDr8Q3JLPuUKAoUww2Xu00F0xG0Za6')

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // subunits of the currency
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })    // OK - Created

})

// Listen command
exports.api = functions.https.onRequest(app)

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
