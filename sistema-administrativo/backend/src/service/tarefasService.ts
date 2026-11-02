import type { Tarefas } from "@prisma/client";
import { TarefasRepository } from "src/repository/tarefasRepository";
import type {DadosCriarTarefa, prioridade, statusTarefa} from "src/types/tarefasTypes";
// lembrar de colocar area em types tambem, tem varias areas diferentes, rh, financeiro e etc

export class TarefasService {
    // cada tarefa fica pra um colaborador, por hora fica assim, depois conecta com prisma
    // e a classe colaborador oficial
    constructor(public tarefasRepository: TarefasRepository) {}

    validarTarefa(nome: string, area: string, statusTarefa: statusTarefa, prioridade: prioridade, dataInicio: Date, dataFinal: Date, atribuidoPara: string, criadoPor: string): statusTarefa {
        const dataAtual = new Date();

        if (!nome || !area || !statusTarefa || !prioridade || !dataInicio || !dataFinal || !atribuidoPara ||!criadoPor){
            throw new Error("Os campos precisam ser preenchidos");
        }
        if (dataFinal.getTime() < dataInicio.getTime()) {
            throw new Error("A data de entrega não pode ser anterior à data de início");
        }
        if (dataFinal.getTime() < dataAtual.getTime()) {
            return "atrasada";
        }
        if (dataFinal.toDateString() === dataAtual.toDateString()) {
            return "data limite";
        }
        return "no prazo";

    }

    async criarTarefa(dados: DadosCriarTarefa): Promise<Tarefas> {
        const statusCalculado = this.validarTarefa(
            dados.nome,
            dados.area,
            dados.statusTarefa,
            dados.prioridade,
            dados.dataInicio,
            dados.dataFinal,
            dados.atribuidoPara,
            dados.criadoPor
        );

        return this.tarefasRepository.create({
            ...dados,
            statusTarefa: statusCalculado
        });
    }

    atualizarStatus(status: statusTarefa) {
        return status;
    }
}

// regras: data de entrega não pode ser menor que data atual
// campos não podem ser vazios
// tarefa tem que ser dividida em grupos/equipes(rh, financeiro e etc) e atribuido pra uma pessoa só
// urgencia(está como prioridade no prisma) da tarefa: urgente, importante, pensar em outros depois
// status da tarefa: fazendo, planejado, aprovado e etc

// pensar se cada colaborador vai ter a sua aba especifica, onde você vê as tarefas pra você
// nesse caso, vai ter q ver se vai mexer na tarefa pra separar por pessoa ou essa regra vai direto
// em colaboradores, pensar sobre
