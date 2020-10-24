const dotenv = require('dotenv');
const result = dotenv.config();
const axios = require('axios');


 
if (result.error) {
  throw result.error
}
 
console.log(result.parsed);
console.log(process.env.FB_REALTIME_DB);

const instance = axios.create({ 
  baseURL: result.parsed.FB_REALTIME_DB
});


exports.instance = instance;

