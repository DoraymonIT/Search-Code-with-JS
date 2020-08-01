students = ["Ayoub", "Mouad", "Hind", "Youssef", "Hassan", "Touria"];

salaries = [
    { id: 1, Name: "Ahmed", Salaire: 2300.0 },
    { id: 2, Name: "Anas", Salaire: 3500.0 },
    { id: 3, Name: "Hind", Salaire: 1800.0 },
    { id: 4, Name: "Ayoub", Salaire: 7100.0 },
    { id: 5, Name: "Mouad", Salaire: 9000.0 },
];

for (var i = 0; i < students.length; i++) {
    document.getElementById("test" + [i]).innerText = students[i];
}
function search() {
    let input = document.getElementById("search").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("famille");

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }
}

function searchTable1() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchId");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
                // document.getElementById("no").style.display='block';
            }
        }
    }
}
function searchTable2() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchName");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
                // document.getElementById("no").style.display='block';
            }
        }
    }
}
function searchTable3() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchSalaire");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
                // document.getElementById("no").style.display='block';
            }
        }
    }
}

function add() {
    let input = document.getElementById("add").value;
    console.log(input);
    students.push(input);
    document.getElementById("add").value = "";
    var node = document.createElement("LI");
    var textnode = document.createTextNode(input);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    node.className += "famille";
}

// Remplir la table :
function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
    thead.className += "thead-dark";
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector("table");
let data = Object.keys(salaries[0]);
generateTableHead(table, data);
generateTable(table, salaries);
function deletee() {
    document.getElementById("data").style.display = "none";
    $("#delete .close").click();
}
function addTable() {
    let input = document.getElementById("identifiant").value;
    let input1 = document.getElementById("name").value;
    let inpu2 = document.getElementById("salaire").value;
    salaries = [];
    salaries.push({
        id: parseInt(input),
        name: input1,
        salaire: parseInt(inpu2),
    });
    console.log(salaries);
    generateTable(table, salaries);
    document.getElementById("identifiant").value = "";
    document.getElementById("name").value = "";
    document.getElementById("salaire").value = "";
    $("#exampleModal .close").click();
}
