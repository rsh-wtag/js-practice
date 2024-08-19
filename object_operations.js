const person = { name: "Alice", age: 30, job: "Engineer" };

// Object.keys(obj) : Returns an array of the object's own enumerable property names (keys).
console.log(Object.keys(person)); // Output: ['name', 'age', 'job']

// Object.values(obj) : Returns an array of the object's own enumerable property values.
console.log(Object.values(person)); // Output: ['Alice', 30, 'Engineer']

// Object.entries(obj) : Returns an array of key-value pairs for each property.
console.log(Object.entries(person)); // Output: [['name', 'Alice'], ['age', 30], ['job', 'Engineer']]

// Object.assign(target, ...sources) : Copies all enumerable properties from one or more source objects to a target object. It returns the modified target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const result = Object.assign(target, source);
console.log(result); // Output: { a: 1, b: 4, c: 5 }
// Explanation: The b property in the target object was initially set to 2. However, when Object.assign is called, it copies the properties from the source object to the target object.
