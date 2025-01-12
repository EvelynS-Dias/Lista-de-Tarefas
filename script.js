class Tarefa {

    static contador = 1;

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
        new Intl.DateTimeFormat( 'pt-BR', options);
    
        let options = {
            day: "numeric",
            month: "long",
            year: "numeric"
        }


return `Tarefa ${this.descricao} data de criação: ${this.dataCriacao} 
<button class="remove-task btn" data-id= ${this.id}>Remover</button>
<button class="concluded-task btn" data-id=${this.id}>Concluida</button>`
    }
}

const tarefas = [];

class ListaDeTarefas {
    adicionarTarefa(task) {
        const novaTarefa = new Tarefa(task);
        tarefas.push(novaTarefa);
        toString();
        return tarefas;
  
    }

    removerTarefa(index) {
    tarefas.splice(index, 1);
    }

    filtrarTarefas(filtro) { 
    switch (filtro) { 
    case "all": 
       return tarefas;
     case "concluded":
    return tarefas.filter(tarefa=> tarefa.concluida === true );
    case "pending":
    return tarefas.filter(tarefa=> !tarefa.concluida === true);
    }
}

exibirTarefas(filtro = "all") {
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
const addTask = document.getElementById("add-task btn");
const task = document.getElementById("task"); //Descrição da task adicionada no input
const concludedBtn = document.getElementById(".concludedBtn");
const removeBtn = document.querySelectorAll(".removeBtn")
const inputTask = document.getElementById("descriptionTask");

addTask.addEventListener("click", adicionarTarefa);





//O parametro vai encontrar o indice da nossa tarefa. Quando ele achar a tarefa do indice
// do botão escolhido, ele vai marcar como concluida.

addTask.addEventListener("click", () =>  {
    descriptionTask = inputTask.value.trim() ///O trim vai tirar     OS       ESPACOS      desnecessários
    listadeTarefas.adicionarTarefa(descriptionTask);
    inputTask.value = '';
    listadeTarefas.exibirTarefas();
}
)



filterPending.addEventListener("click", (event) => {
    if(event.target.classList.contains("pending")) {
     exibirTarefas("pending")}
    else if(event.target.classList.contains("concluded")) {
        exibirTarefas("concluded")}
    else {
        exibirTarefas("all")}
    }
)



filterConcluded.addEventListener("click", () => {
    listadeTarefas.exibirTarefas(filtrarTarefas(tarefa=> tarefa.concluida === true))
    
})