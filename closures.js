function parent() {
    let name = "John Doe";
    let age = 42;

    function child() {
        console.log(name + " : " + age); // John Doe : 42
    }

    return child;
}

const child = parent();

child();

function counter(params) {
    let value = 0;

    function inc() {
        value += 1;
        console.log(value);
    }

    function dec() {
        value -= 1;
        console.log(value);
    }

    return [inc, dec];
}

const [inc, dec] = counter();

inc(); // 1
inc(); // 2
inc(); // 3
dec(); // 2
