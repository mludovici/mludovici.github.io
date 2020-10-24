const axios = require('axios');
const dotenv = require('dotenv');
const result = dotenv.config();
 
if (result.error) {
  throw result.error
}
 
// console.log(result.parsed);
// console.log(process.env.FIREBASE_RTDB);

const instance = axios.create({
	baseURL: process.env.FIREBASE_RTDB
})

exports.instance = instance;