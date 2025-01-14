class Tarefa {

    static contador = 1;
    static options = {
        day: "numeric",
        month: "long",
        year: "numeric"
    }

    constructor(descricao) {
this.descricao = descricao;
this.id = Tarefa.contador++
this.concluida = false;
this.dataCriacao = new Date();
    }

    marcarConcluida() {
        this.concluida = true;
}

    
    toString() {
    const dataFormatada = new Intl.DateTimeFormat( 'pt-BR', Tarefa.options).format(this.dataCriacao);

    const status = this.concluida === false ? "pendente" : "concluida"

return `<strong>Tarefa:</strong> ${this.descricao} | <strong>data de criação:</strong> ${dataFormatada} <strong>Status:</strong> ${status}
<button class="remove-task btn" data-id= ${this.id}>Remover</button>
<button class="concluded-task btn" data-id=${this.id}>Concluida</button>`
    }
}

const tarefas = [];

class ListaDeTarefas {
    adicionarTarefa(task) {
        const novaTarefa = new Tarefa(task);
        tarefas.push(novaTarefa);
        return tarefas;
  
    }

    removerTarefa(id) {
    const index = tarefas.findIndex(tarefa => tarefa.id === id);
    if(index === -1) {
        console.log("Arquivo não encontrado")
    }
    else {
    tarefas.splice(index, 1);
    }
}

    filtrarTarefas(filtro){ 
    switch (filtro) { 
    case "all": 
       return tarefas;
     case "concluded":
    return tarefas.filter(tarefa=> tarefa.concluida === true );
    case "pending":
    return tarefas.filter(tarefa=> !tarefa.concluida);
    }
}

    exibirTarefas(filtro = "all")  {
    list.innerHTML = ''; // Limpa a lista antes de exibir
    const tarefasParaExibir = this.filtrarTarefas(filtro); // Aplica o filtro
    tarefasParaExibir.forEach(tarefa => {
        const li = document.createElement('li');
        li.innerHTML = tarefa.toString(); // Exibe a tarefa
        list.appendChild(li);
    });
}
}
    
const listadeTarefas = new ListaDeTarefas();

const list = document.getElementById("list");
const filterAll = document.getElementById('filter-all');
const filterPending = document.getElementById("filter-pending");
const filterConcluded = document.getElementById("filter-concluded")
const addTask = document.getElementById("add-task");
const task = document.getElementById("task"); //Descrição da task adicionada no input
const concludedBtn = document.getElementById(".concludedBtn");
const inputTask = document.getElementById("descriptionTask");
const removeBtn = document.getElementById("remove-task");



//O parametro vai encontrar o indice da nossa tarefa. Quando ele achar a tarefa do indice
// do botão escolhido, ele vai marcar como concluida.

addTask.addEventListener("click", () =>  {
    if(inputTask.value === '') {
        console.log("Por favor, insira uma descrição");
    }
    else{
    descriptionTask = inputTask.value.trim() ///O trim vai tirar     OS       ESPACOS      desnecessários
    listadeTarefas.adicionarTarefa(descriptionTask);
    inputTask.value = '';
    listadeTarefas.exibirTarefas();
}
}
)

list.addEventListener("click", (event) => {
    if(event.target.classList.contains("remove-task")) {
   let idButton = parseInt(event.target.getAttribute("data-id"));
   console.log(idButton)
        listadeTarefas.removerTarefa(idButton);
        listadeTarefas.exibirTarefas();
    }
    else if(event.target.classList.contains("concluded-task")) {
        let idButton = parseInt(event.target.getAttribute("data-id"));
        let tarefa = tarefas.find(tarefa => tarefa.id === idButton);
        tarefa.marcarConcluida();
        listadeTarefas.exibirTarefas();
    }
})


filterAll.addEventListener("click", () => listadeTarefas.exibirTarefas("all"));
filterPending.addEventListener("click", () => listadeTarefas.exibirTarefas("pending"));
filterConcluded.addEventListener("click", () => listadeTarefas.exibirTarefas("concluded"));