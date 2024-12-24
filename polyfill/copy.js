const base = {
  name: "Dhamesh",
  address: {
    city: {
      name: "Narnaul",
      pincode: 123001,
    }
  },
  data: function() {
    return this.name
  }
}

// this just copies the references, 
// object stays the same in both variable base and obj1
const obj1 = base;

// obj1.name = "DJ"

// console.log(base) // name : 'DJ'
// console.log(obj1) // name : 'DJ'


// this is shallow copy,
// By spread operator only the top level keys are copied to the new object, other are still referenced to base object
const obj2 = { ...base };

// obj2.name = "Tplink"
// obj2.address.city.name = "Jaipur"
//
// console.log(base) // name : 'Dharmesh',address.city.name :  "Jaipur"
// console.log(obj2) // name : 'Tplink', address.city.name :  "Jaipur"


// this id deep copy,
// all the keys from the deepest level are copied to new object
const obj3 = deep_copy(base);

obj3.name = "Tplink"
obj3.address.city.name = "Jaipur"

console.log(base) // name : 'Dharmesh',address.city.name :  "Narnaul"
console.log(obj3) // name : 'Tplink', address.city.name :  "Jaipur"


function deep_copy(base) {
  if (base === null || typeof base !== "object") {
    return base
  }

  if (Array.isArray(base)) {
    return base.map(deep_copy)
  }

  let result = {};
  for ([key, value] of Object.entries(base)) {
    result[key] = deep_copy(value)
  }

  return result;

  // you will lose the function in the base object as JSON doesn't support functions
  // return JSON.parse(JSON.stringify(base))
}
