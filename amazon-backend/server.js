const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("YOUR_SECRET_STRIPE_KEY");
const uuid = require("uuid/v4");

const app = express();
const PORT = process.env.PORT || 5000; // Step 1

app.use(express.json());
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
