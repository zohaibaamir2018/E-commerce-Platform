const axios = require('axios');

const dhlClient = axios.create({
  baseURL: 'https://api.dhl.com/',
  headers: { 'DHL-API-Key': process.env.DHL_API_KEY }, // Use environment variable for your API key
});

module.exports = dhlClient;
