const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51POTm9AHL2I3D6culmYuZMq0de2TmCbzEVhXKshfL7cVwADoygs1RO9hEnyeiakBLE9BP1HKBz9MCw7gPAXc2jdc00ReOk6IlA');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Donación',
        },
        unit_amount: req.body.amount,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: '../public/modalSuccess.html',
    cancel_url: '../public/modalCancel.html',
  });

  res.json({ id: session.id });
});

app.listen(3000, () => console.log('Server running on port 3000'));
