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

// Object.freeze(obj) : Freezes an object, preventing new properties from being added or existing properties from being removed or modified.
const frozenObject = Object.freeze({ name: "Bob" });
frozenObject.name = "Alice"; // Does nothing, object is frozen
console.log(frozenObject.name); // Output: Bob

// Object.seal(obj) : Seals an object, preventing new properties from being added, but allows modification of existing properties.
const sealedObject = Object.seal({ name: "Charlie" });
sealedObject.name = "David"; // Allowed
sealedObject.age = 40; // Not allowed, as adding new properties is not possible
console.log(sealedObject); // Output: { name: 'David' }

// Object.hasOwnProperty(prop) : Returns `true` if the object has the specified property as its own (not inherited) property.
console.log(person.hasOwnProperty("name")); // Output: true
console.log(person.hasOwnProperty("toString")); // Output: false (inherited)

// Object.is(value1, value2) : Compares two values to determine if they are the same value. Similar to ===, but more reliable for certain edge cases (e.g., NaN).
console.log(Object.is(NaN, NaN)); // Output: true
console.log(Object.is(0, -0)); // Output: false

// Object.defineProperty(obj, prop, descriptor) : Adds a property to an object with a specific descriptor (e.g., writable, enumerable).
Object.defineProperty(person, "gender", {
    value: "female",
    writable: false,
    enumerable: true,
});
console.log(person.gender); // Output: female
person.gender = "male"; // Not allowed due to writable: false
console.log(person.gender); // Output: female

// Object.defineProperties(obj, props) : Adds multiple properties to an object, each with its descriptor.
Object.defineProperties(person, {
    birthYear: {
        value: 1990,
        writable: true,
    },
    nationality: {
        value: "American",
        writable: false,
    },
});
console.log(person.birthYear); // Output: 1990
console.log(person.nationality); // Output: American

// Object.getOwnPropertyDescriptors(obj) :
console.log(Object.getOwnPropertyDescriptors(person));
/*
Output: 
{
  name: {value: 'Alice', writable: true, enumerable: true, configurable: true},
  age: {value: 30, writable: true, enumerable: true, configurable: true},
  job: {value: 'Engineer', writable: true, enumerable: true, configurable: true}
}
*/
