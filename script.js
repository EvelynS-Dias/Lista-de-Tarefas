class Tarefa {

    static contador = 1;

    constructor(descricao) {
this.descricao = descricao;
this.id = Tarefa.contador++
this.concluida = false;
this.dataCriacao = new Date();
    }

    marcarConcluida() {
        this.concluida === true;
    }
    
    toString() {
        new Intl.DateTimeFormat( 'pt-BR', options);
    
        let options = {
            day: "numeric",
            month: "long",
            year: "numeric"
        }


return `Tarefa ${this.descricao} data de criação: ${this.dataCriacao}`
    }
}

const tarefas = [];

class ListaDeTarefas {
    adicionarTarefa() {
        const novaTarefa = new Tarefa(descricao);
        tarefas.push(novaTarefa);

    }

    removerTarefa() {
      const idTarefa =  tarefas.find(tarefa => tarefa.id === id).
      parseInt(idTarefa);
     idTarefa === undefined ? console.log("arquivo não encontrado")  : console.log("arquivo encontrado");
    tarefas.splice(idTarefa);

    }

    filtrarTarefas() {
       const todas = tarefas;
       const pendentes =  tarefas.filter(tarefa=> !tarefa.concluida === true);
       const concluidas = tarefas.filter(tarefa=> tarefa.concluida === true );

}

exibirTarefas() {

    tarefas.map( tarefa => {
        return tarefa.toString();
    } )

    }
}