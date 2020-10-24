// const {instance} = require('./firebase');

// // console.log(instance);
// // instance.post('/orders.json', 
// // { item: "Burger", age: 24})
// // .then(response => console.log(response))
// // .catch(err => console.log(err.message));

// // instance.patch('/orders/-MK45tbLN7Dg_UYOm5A9/orders.json', { age: 33, name: "test"})
// // .then(res => console.log(res))
// // .catch(err => console.log(err.message));

// const id = instance.get('/orders.json/').then(res => {
// 	console.log(res.data);
// 	for (let key in res.data) {
// 		console.log("Key:", key, res.data[key]);
// 	}
// }).catch(err => console.log(err));


sum(10,20);
diff(10,20);
function sum(x,y) {
  return x + y;
}
let diff = function(x,y) {
  return x - y;
}