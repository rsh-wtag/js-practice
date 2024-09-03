let bookList =[];

function Book(title, author, pages, price){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.price = price;
}

function clearForm() {
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookPage").value = "";
    document.getElementById("bookPrice").value = "";
}
function loadBooks(){
    clearForm();
    let bookTable = document.querySelector('#bookTable');
    bookTable.innerHTML = '';

    for(let i = 0; i < bookList.length; i++){
        let tr = document.createElement('tr');
        let sn = document.createElement('td');
        sn.innerText = (i+1).toString();
        tr.appendChild(sn);
        for (let key in bookList[i]){
            if(bookList[i].hasOwnProperty(key)){
                let td = document.createElement('td');
                td.innerText = bookList[i][key];
                tr.appendChild(td);
            }
        }
        let dltBtn = document.createElement('td');
        dltBtn.innerHTML = `<button class="btn btn-danger btn-sm" id="dltBtn" value="${i}">Delete</button>`;
        tr.appendChild(dltBtn);
        bookTable.appendChild(tr);
    }
}

function createBook(event) {
    event.preventDefault(); // Prevent form submission
    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    let pages = document.getElementById("bookPage").value;
    let price = document.getElementById("bookPrice").value;
    let book = new Book(title, author, pages, price);
    bookList.push(book);
    loadBooks();
}

document.getElementById('submitBtn').addEventListener('click', createBook);

function deleteBook() {
    let index = document.getElementById('dltBtn').value;
    bookList.splice(value, 1);
    loadBooks();
}
