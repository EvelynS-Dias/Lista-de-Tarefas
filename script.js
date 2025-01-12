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
<button class="concluded-task btn" data-id=${this.id}>Remover</button>`
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

    filtrarTarefas() {
       const todas = tarefas;
       const pendentes =  tarefas.filter(tarefa=> !tarefa.concluida === true);
       const concluidas = tarefas.filter(tarefa=> tarefa.concluida === true );
}

exibirTarefas(filtro) {
    list.innerHTML = '';
    const tarefasParaExibir = filtro ? this.filtrarTarefas(filtro) : tarefas; // Aplica filtro, se necessário
    tarefasParaExibir.forEach(tarefa => {
    let descricaoTarefa =  tarefa.toString(); 
    li.innerHTML =  descricaoTarefa; 
    list.append(li);
    })

concludedBtn.addEventListener("click", (event) =>  {
    
    let id = parseInt(event.target.getAttribute("data-id"));
    const tarefaConcluida = tarefas.find(tarefa => tarefa.id === id);
    if(tarefaConcluida !== undefined) {
        tarefaConcluida.marcarConcluida();
        this.exibirTarefas()
    }})
    
    removeBtn.addEventListener("click", (event) =>  {
    let id = parseInt(event.target.getAttribute("data-id"));
    const tarefaIndex = tarefas.findIndex(tarefa => tarefa.id === id);
     if(tarefaIndex !== -1) {
         listadeTarefas.removerTarefa(tarefaIndex);
         this.exibirTarefas();
        } 
        else{
            console.log("tarefa não encontrada!")
        }
    }
    
    )

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



filterPending.addEventListener("click", () => {
    listadeTarefas.exibirTarefas(filtrarTarefas(tarefa=> !tarefa.concluida === true))
    
})

filterConcluded.addEventListener("click", () => {
    listadeTarefas.exibirTarefas(filtrarTarefas(tarefa=> tarefa.concluida === true))
    
})

