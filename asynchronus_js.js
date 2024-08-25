/* 
1. Callbacks
A callback is a function passed as an argument to another function and executed after some operation is completed. 
Callbacks can lead to "callback hell" when nested deeply.
*/

function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched");
    }, 2000);
}

function processData(data) {
    console.log(data);
}

fetchData(processData); // Logs "Data fetched" after 2 seconds

/*
2. Promises
A Promise represents a value that may be available now, in the future, or never. 
Promises have three states: pending, fulfilled, and rejected. 
Promises provide a cleaner way to handle asynchronous operations compared to callbacks.
*/

const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
        resolve();
    } else {
        reject();
    }
});

myPromise.then(() => console.log("Success"));
