let obj = require('./db.json');
// console.log(obj);

for (let item in obj) {
	 console.log("Item:", item, "data:", obj[item])
};

let keys = Object.keys(obj);

console.log(keys);