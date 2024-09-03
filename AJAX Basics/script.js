function loadData() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Define what to do when the response arrives
    xhr.onload = function () {
        const container = document.getElementById("demo");
        container.innerHTML = xhr.responseText;
    };

    // Prepare the request with the method and URL
    xhr.open("GET", "./data/data.txt");

    // Send the request
    xhr.send();
}
