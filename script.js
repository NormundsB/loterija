const vardi = ["Jana Krūmiņa", "Jānis Bērziņš", "Pēteris Pētersons", "Līga Priedīte", "Maija Liepa", "Juris Pupa", "Jānis Joņins", "Imants Ziedonis", "Renārs Jankovskis", "Kaspars Fridrihsons"];
const balvas = ["Ledusskapis", "Fotoaparāts", "Kafijas automāts"];
const naudaKopa = 1000000;

let uzvaretajuSkaits = 3;
let rindas = document.querySelector(".rindas");
//rindas.innerHTML = "Janis"
//random funkcija param maxCipars
function randFunc(maxCipars) {
    let random1 = Math.floor(Math.random() * maxCipars)
    return random1
}

for (let i = 0; i < uzvaretajuSkaits; i++) {

    let rand = randFunc(vardi.length);

    let uzvaretajs = vardi[rand];
    rindas.innerHTML += `
    <tr>
    <td>${i + 1}</td>
    <td>${uzvaretajs}</td>
    </tr>
    `;
}