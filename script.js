const vardi = ["Jana Krūmiņa", "Jānis Bērziņš", "Pēteris Pētersons", "Līga Priedīte", "Maija Liepa", "Juris Pupa", "Jānis Joņins", "Imants Ziedonis", "Renārs Jankovskis", "Kaspars Fridrihsons"];
const balvas = ["Ledusskapis", "Fotoaparāts", "Kafijas automāts"];
const naudaKopa = 1000000;

let uzvaretajuSkaits = 3;
let rindas = document.querySelector(".rindas");
rindas.innerHTML = "Janis"


for (let i = 0; i < uzvaretajuSkaits; i++) {

    let rand = Math.random() * vardi.length;
    rand = Math.floor(rand);

    console.log(vardi[rand]);
}