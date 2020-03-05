// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
// })

let numOfBooks;

function startApp() {
    numOfBooks = document.getElementById('numberOfBooks').value;
    void document.querySelector('.background').offsetWidth;
    document.querySelector(".background").classList.add('hide');
    void document.querySelector('#theForm').offsetWidth;
    document.querySelector("#theForm").classList.remove('hide');

    console.log(numOfBooks);

}

class Book {
    constructor(number, name, price, pubDate, author) {
        this.number = number;
        this.name = name;
        this.price = price;
        this.pubDate = pubDate;
        this.author = author;
    }
}

class Author {
    constructor(name, email) {
        this.name = name;
        this.email = email;

    }
}

let iter = 0;
var arrOfBooks = [];
document.getElementById('bookNumberIn').value = iter + 1;

function addBook() {

    if (iter < numOfBooks) {

        if (!document.querySelector('form').reportValidity()) {
            document.querySelector('form').classList.add('was-validated');
        } else {
            let author = new Author(document.querySelector('#authorNameIn').value, document.querySelector('#authorEmailIn').value);
            let book = new Book(iter++, document.querySelector('#bookNameIn').value, document.querySelector('#priceIn').value, document.querySelector('#pubDateIn').value, author);
            // book.name = document.querySelector('#bookName').value;
            // book.price = document.querySelector('#price').value;
            // book.pubDate = document.querySelector('#pubDate').value;
            // author.name = document.querySelector('#authorName').value;
            // author.email = document.querySelector('#authorEmail').value;
            arrOfBooks.push(book);
            console.log(book);
            console.log(iter);
            console.log(arrOfBooks);
            document.getElementById("myForm").reset();
            document.getElementById('bookNumberIn').value = iter + 1;
            document.querySelector('form').classList.remove('was-validated');
            if (iter == numOfBooks) {
                showTable();
            }
        }
    } else {
        showTable();
    }


}

function resetForm() {
    document.getElementById("myForm").reset();
    document.getElementById('bookNumberIn').value = iter + 1;

}

function showTable() {
    void document.querySelector('#theForm').offsetWidth;
    document.getElementById('theForm').classList.add('hide');
    void document.querySelector('#tableData').offsetWidth;
    document.getElementById('tableData').classList.remove('hide');

    let html = '<tr><th scope="row" id="id">%id%</th> <td id="bookName" > %bookName% </td> <td id="price"> %price% </td> <td id="date"> %date% </td> <td id="authorName" > %authorName% </td> <td id="authorEmail" > %authorMail% </td> <td><div class="btn btn-info edi" id = "%ied%" > Edit </div> <div class = "btn btn-danger del" id="%idel%"> delete </> </td></tr>';
    for (let index = 0; index < numOfBooks; index++) {
        // var replaceChars = {
        //     "%id%": arrOfBooks[index].number,
        //     "%bookName%": arrOfBooks[index].name,
        //     "%price%": arrOfBooks[index].price,
        //     "%date%": arrOfBooks[index].pubDate,
        //     "%authorName%": arrOfBooks[index].author.name,
        //     "%authorMail%": arrOfBooks[index].author.email
        // };
        // html.replace(/%id%|%bookName%|%price%|%date%|%authorName%|%authorMail%/g, function (match) {
        //     return replaceChars[match];
        // })

        let result = html.replace("%id%", arrOfBooks[index].number).replace("%bookName%", arrOfBooks[index].name).replace("%price%", arrOfBooks[index].price).replace("%date%", arrOfBooks[index].pubDate).replace("%authorName%", arrOfBooks[index].author.name, ).replace("%authorMail%", arrOfBooks[index].author.email).replace("%idel%", arrOfBooks[index].number).replace("%ied%", arrOfBooks[index].number);
        // let result = html.replace("%bookName%", arrOfBooks[index].name);
        console.log(result);
        document.querySelector('tbody').insertAdjacentHTML('beforeend', result);

    }
}

document.querySelector("table").addEventListener('click', function (e) {
    // console.log(e.target);
    console.log(arrOfBooks);

    if (e.target.classList.contains("del") && e.target.textContent == "Delete") {
        arrOfBooks.splice(e.target.id, 1);
        console.log(arrOfBooks);

        var el = e.target.parentNode.parentNode;
        el.parentNode.removeChild(el);
    } else if (e.target.classList.contains("del") && e.target.textContent == "Cancel") {
        console,
        log(e.target.id);
        let result = html.replace("%id%", arrOfBooks[e.target.id].number).replace("%bookName%", arrOfBooks[e.target.id].name).replace("%price%", arrOfBooks[e.target.id].price).replace("%date%", arrOfBooks[e.target.id].pubDate).replace("%authorName%", arrOfBooks[e.target.id].author.name, ).replace("%authorMail%", arrOfBooks[e.target.id].author.email).replace("%idel%", arrOfBooks[e.target.id].number).replace("%ied%", arrOfBooks[index].number);


    }
    else if (e.target.classList.contains("edi") && e.target.textContent == " Edit ") {
        e.target.textContent = "Save";
        e.target.parentNode.lastChild.innerHTML = "Cancel";
        // console.log(e.target.nextSibling);
        var nodes = e.target.parentNode.parentNode.childNodes;
        console.log(nodes);
        for (var i = 0; i < nodes.length; i += 2) {
            if (nodes[i].id != 'id') {
                console.log(nodes[i]);
                nodes[i].setAttribute("contenteditable", "true");
            }
        }

    } else if (e.target.classList.contains("edi") && e.target.textContent == "Save") {
        e.target.textContent = " Edit ";
        e.target.parentNode.lastChild.innerHTML = "Delete";
        var nodes = e.target.parentNode.parentNode.childNodes;
        console.log(nodes);
        for (var i = 0; i < nodes.length; i += 2) {
            if (nodes[i].id != 'id') {
                console.log(nodes[i]);
                nodes[i].setAttribute("contenteditable", "false");
            }
        }
    }
    // else {
    //     e.target.setAttribute("contenteditable", "true");
    //     e.target.parentNode.lastChild.innerHTML = "Cancel";
    //     // console.log(e.target.lastChild(odd).innerHTML);
    //     console.log(e.target.lastChild.before.innerHTML);
    // }

    // console.log(e.srcElement);



    // if (e.target == td) {

    // }
    // if (e.target.classList.contains("edi")) {
    //     var par = $(this).parent().parent(); //tr
    //     var tdName = par.children("td:nth-child(1)");
    //     var tdPhone = par.children("td:nth-child(2)");
    //     var tdEmail = par.children("td:nth-child(3)");
    //     var tdButtons = par.children("td:nth-child(4)");
    //     console.log(par, tdName, tdPhone, tdEmail, tdButtons);
    //     tdName.html("<input type='text' id='txtName' value='" + tdName.html() + "'/>");
    //     tdPhone.html("<input type='text' id='txtPhone' value='" + tdPhone.html() + "'/>");
    //     tdEmail.html("<input type='text' id='txtEmail' value='" + tdEmail.html() + "'/>");
    //     tdButtons.html("<img src='images/disk.png' class='btnSave'/>");

    // $(".btnSave").bind("click", Save);
    // $(".btnEdit").bind("click", Edit);
    // $(".del").bind("click", Delete);

})