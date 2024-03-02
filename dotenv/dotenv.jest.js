const path = require('path');
const dotenv = require('dotenv');

module.exports = async () => {
  dotenv.config({ path: path.resolve(__dirname, '../.jest.env') });
};
