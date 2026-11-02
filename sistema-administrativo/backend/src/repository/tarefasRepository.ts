import { Prisma, PrismaClient, Tarefas } from "@prisma/client";
import type { DadosCriarTarefa } from "src/types/tarefasTypes";

const prisma = new PrismaClient();

const bancoTarefas: Tarefas[] = []; //trocar por banco de dados, se não dá b.o
//e não dá erro no async

export class TarefasRepository{
    async create(dados: DadosCriarTarefa): Promise<Tarefas> {
        const tarefaCriada = await prisma.tarefas.create({
            data: dados
        })
        return tarefaCriada;
    }

    async findById(id: number){
        try{
            await prisma.tarefas.findUnique({
            where: {id},
            });
        }
        catch(erro){
            console.error("Erro ao buscar por id", erro);
        }
    }

    async findAll(){
        try {
            await prisma.tarefas.findMany()
        }
        catch(erro){
            console.error("Erro ao buscar todas as tarefas", erro);
        }

    }

    async atualizarTarefa(id: number, novaTarefa: Tarefas){
        try {
            await prisma.tarefas.update({
                where: {id},
                data: novaTarefa,
            });
        }
        catch(erro){
            console.error("Erro ao atualizar a tarefa", erro);
        }
        
    }

    async deletarTarefa(id: number){
            if(!id){
                throw new Error("Tarefa não existe, não é possível apagar sem id");
            }
            else{
                return await prisma.tarefas.delete({
                        where: {id},
                    })
            }
        
    }

}