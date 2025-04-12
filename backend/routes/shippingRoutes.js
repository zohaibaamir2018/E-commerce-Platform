const express = require('express');
const { getShippingRates } = require('../services/shippingService');
const router = express.Router();

router.post('/get-shipping-rates', async (req, res) => {
  try {
    const shipmentDetails = req.body; // Get shipment details from the request body
    const rates = await getShippingRates(shipmentDetails);
    res.json(rates); // Return the shipping rates as response
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
