
const dotenv = require('dotenv');

dotenv.config();

const {
    PORT,
    DATABASE_URL
} = process.env;

module.exports = {
    port: PORT,
    urlConnection: DATABASE_URL
} 
