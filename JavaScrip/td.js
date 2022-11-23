const inputTarefa= document.querySelector('.input-tarefa');
const btnTarefa= document.querySelector('.btn-tarefa');
const tarefas= document.querySelector('.tarefas');

function criaLi(){
    const li= document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e){
    if (e.keycode===13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
    //console.log(e);

});

function limpaInput(){
    inputTarefa.value="";
    inputTarefa.focus();
}
function criaBotaoApagar(li){
    li.innerText+="";
    const BotaoApagar= document.createElement('button');
    BotaoApagar.innerText='apagar';
    BotaoApagar.setAttribute('class', 'apagar')
    BotaoApagar.setAttribute('title', 'apagar esta tarefa')
    li.appendChild(BotaoApagar);
}

function criaTarefa(textoInput){
    const li= croaLi();
    li.innerText=textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
}