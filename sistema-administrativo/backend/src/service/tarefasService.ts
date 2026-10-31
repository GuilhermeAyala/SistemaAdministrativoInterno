import { TarefasRepository } from "src/repository/tarefasRepository";
import type {statusTarefa, prioridade} from "src/types/tarefasTypes"
//import Tarefas
//lembrar de colocar area em types tambe, tem varias areas diferentes, rh, financeiro e etc

export class TarefasService {
    //cada tarefa fica pra um colaborador, por hora fica assim, depois conecta com prisma
    //e a classe colaborador oficial
    constructor(public tarefasRepository: TarefasRepository){
        tarefasRepository = this.tarefasRepository
    }//verificar se isso realmente funciona
    
    validarTarefa(nome: string, area: string, status: statusTarefa, prioridade: prioridade, dataInicio: Date, dataDeEntrega: Date, atribuidoPara: string, criadoPor: string){
        dataDeEntrega = new Date(); //tem que fazer uma comparação onde, a data de entrega não pode ser menor do que a data atual
        let dataAtual = Date.now();

            if (dataDeEntrega.getTime() < dataInicio.getTime()) {
                throw new Error("A data de entrega não pode ser anterior à data de início");
            }

            if(dataDeEntrega.getTime() < dataAtual){
                status = "atrasada"//decidir ainda como vai ser cada status
            }
            if(dataDeEntrega.getTime() === dataAtual){
                status = "data limite"
            }
            if(dataDeEntrega.getTime() > dataAtual){
                status = "no prazo"
            }

            if(!nome || !area || !status || !prioridade || !dataInicio || !dataDeEntrega || !atribuidoPara || !criadoPor){
                throw new Error("Os campos precisam ser preenchidos")
            }

    }

    async criarTarefa(nome: string, area: string, status: statusTarefa, prioridade: prioridade, dataInicio: Date, dataDeEntrega: Date, atribuidoPara: string, criadoPor: string){
        await this.validarTarefa(nome, area, status, prioridade, dataInicio, dataDeEntrega, atribuidoPara, criadoPor)
        const newTarefa = await this.tarefasRepository.create(novaTarefa);
        return newTarefa;
        //coisas pra resolver: ver como puxar essa nova tarefa do repository, tem que sair de lá por conta do create
    }

    atualizarStatus(status: statusTarefa){

    }

}

//regras: data de entrega não pode ser menor que data atual
//campos não podem ser vazios 
//tarefa tem que ser dividida em grupos/equipes(rh, financeiro e etc) e atribuido pra uma pessoa só 
//urgencia(está como prioridade no prisma) da tarefa: urgente, importante, pensar em outros depois 
//status da tarefa: fazendo, planejado, aprovado e etc





//pensar se cada colaborador vai ter a sua aba especifica, onde vc vê as tarefas pra voce
//nesse caso, vai ter q ver se vai mexer na tarefa pra separar por pessoa ou essa regra vai direto
//em colaboradores, pensar sobre