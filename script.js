var li = document.getElementsByTagName("li");
var ul = document.getElementById("ul");
var input = document.getElementById("input");
var bt = document.getElementById("bt");






let local = JSON.parse(localStorage.getItem("tarefas")) || []

for (i = 0; i < local.length; i++) {

    ul.innerHTML += `<li><span>${local[i].conteudo}</span><button onclick="deleteList(${local[i].id})">X</button></li>`;
}




function createListElement() {
    var node = document.createElement("li")
    if (eventLength() < 2) {
        node.appendChild(document.createTextNode(alert.conteudo))
        ul.appendChild(node)
        node.classList.add("alert")


        setInterval(deleteList, 1000)
        return alert

    } else {
        let li_atual = { id: Math.random() * 500, conteudo: input.value };  
        ul.innerHTML += `<li><span>${li_atual.conteudo}</span><button onclick="deleteList(${li_atual.id})">X</button></li>`;  
        local.push(li_atual);
        localStorage.setItem("tarefas", JSON.stringify(local));
        input.value = " "  
    }

}

function deleteList(id) {
    let new_list = []

    for (let i = 0; i < local.length; i++) {
        if (local[i].id != id) {
            new_list.push(local[i])
        }
    }


    localStorage.setItem("tarefas", JSON.stringify(new_list))
    location.reload()
}






function eventLength() {
    return input.value.length
}


