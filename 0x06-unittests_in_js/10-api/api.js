const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const {id} = req.params;

  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(paymentMethods);
});

app.post('/login', (req, res) => {
  // Get the value of userName from the request body
  const { userName } = req.body;

  // Return the "Welcome :username" message
  const welcomeMessage = `Welcome ${userName}`;

  // Send the message as a response
  res.send(welcomeMessage);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
