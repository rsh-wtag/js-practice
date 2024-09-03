self.onmessage = function (message) {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
        sum += 1;
    }

    // Post the result back to the main thread
    self.postMessage(sum);
};
