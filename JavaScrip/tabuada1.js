function calculaTabuada(){
    let tabuada = document.querySelector("#tabuada tbody");
    //obter valor A do input
    let valorA = parseInt(document.querySelector("#valorA").value);
    //Limpar conteudo do tbody
    tabuada.innerHTML=" ";
    //criar o laço de repetiçao
    for (let valorB=0;valorB<=valorA;valorB++){
    
    let resultado= (valorA * valorB);

    let template= `
    <td>${valorA}</td>
    <td>X</td>
    <td>${valorB}</td>
    <td>=</td>
    <td>${resultado}</td>
    `;
    let tr = document.createElement('tr');

    tr.innerHTML = template;

    tabuada.append(tr);
    }
};
calculaTabuada();
document.querySelector('#valorA').addEventListener('change', calculaTabuada);