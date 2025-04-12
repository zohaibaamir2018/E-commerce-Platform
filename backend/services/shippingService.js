const dhlClient = require('./dhlClient');

const getShippingRates = async (shipmentDetails) => {
  try {
    const response = await dhlClient.post('/rates', shipmentDetails);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || 'Error retrieving shipping rates');
  }
};

module.exports = { getShippingRates };
