var container = document.createElement("div");
container.setAttribute("class", "container");

var row = document.createElement("div");
row.setAttribute("class", "row");

var col1 = document.createElement("div");
col1.setAttribute("class", "col");

var col2 = document.createElement("div");
col2.setAttribute("class", "col");

var p = document.createElement("p");
p.setAttribute("class", "para");
p.innerHTML = "List of books avaiable";


var ol = document.createElement("ol");
ol.setAttribute("class", " list");
ol.innerHTML = `<li>The Rogue Prince</li>
<li>The Princess and the Queen</li>
<li>A Dance with Dragons</li>
<li>The Mystery Knight</li>
<li>The Sworn Sword</li>
<li>A Feast for Crows</li>
<li>The Hedge Knight</li>
<li>A Storm of Swords</li>
<li>A Game of Thrones</li>`;

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "book");
input.setAttribute("placeholder", "Copy book from list");

var button = document.createElement("button");
button.innerHTML = `search`;
button.addEventListener("click", foo);
// formgroup.append(input, button);

var book = document.createElement("div");
book.setAttribute("id", "book");

var bname = document.createElement("div");
var isbn = document.createElement("div");
var numberofpages = document.createElement("div");

var authors = document.createElement("div");
var pub = document.createElement("div");
var released = document.createElement("div");

col2.append(input, button, book, bname, isbn, numberofpages, authors, pub, released);
col1.append(p, ol);
row.append(col1, col2);
container.append(row);
document.body.append(container);

async function foo() {
    let listofbook = document.getElementById("book").value;
    console.log(listofbook);
    let res = await fetch(`https://www.anapioficeandfire.com/api/books/`);
    let res1 = await res.json();
    console.log(res1);
    for (var i = 0; i < res1.length; i++) {
        console.log(res1[i].name);

        if (listofbook == (res1[i].name)) {
            console.log(res1[i].authors)
            bname.innerHTML = `NAME: ${res1[i].bname}`;
            isbn.innerHTML = `ISBN: ${res1[i].isbn}`;
            numberofpages.innerHTML = `NUMBEROFPAGES: ${res1[i].numberofpages}`;
            authors.innerHTML = `AUTHORS: ${res1[i].authors}`;
            pub.innerHTML = `PUBLISHER: ${res1[i].publisher}`;
            released.innerHTML = `RELEASED: ${res1[i].released}`;

        }
    }
}
