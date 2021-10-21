

let userName = document.getElementById("name");
let password = document.getElementById("password");
loadInfo();


async function loadInfo() {
    let submit = document.getElementById("submitButton");
    submit.addEventListener('click', (x) => {
        console.log(x)
    });
    let cancel = document.getElementById("cancelButton");
    cancel.addEventListener('click', (x) => {
        console.log(x)
        userName.value = '';
        password.value = '';
    });
    /*await fetch('http://54.145.7.165:8080/mintic/tiendagenerica/users')
        .then(response => response.json())
        .then(rsp => { loadTable(rsp, table) });*/
}

function loadTable(data, table) {
    if (!document.getElementsByTagName) return;
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key] == null ? "" : key == "password" ? coverPassword(element[key].length) : element[key]);
            cell.appendChild(text);
        }
    }
}

function coverPassword(number) {
    let text = "";
    while (number > 0) {
        text += "*";
        number--;
    }
    return text;
}