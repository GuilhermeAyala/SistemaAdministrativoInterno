import { Prisma, PrismaClient, Tarefas } from "@prisma/client";

const prisma = new PrismaClient();

const bancoTarefas: Tarefas[]:[]; //trocar por banco de dados, se não dá b.o
//e não dá erro no async

export class TarefasRepository{
    async create(novaTarefa: Tarefas): Promise<Tarefas | undefined>{
        return new Promise((resolve, reject) => {
                return resolve(
                    await prisma.tarefas.create({
                    data: novaTarefa
            }));
        })
    }

    async findById(id: number): Promise<Tarefas | null>{
        return new Promise((resolve, reject) => {
                return resolve(
                    await prisma.tarefas.findUnique({
                    where: {id},
            }));
        })
    }

    async findAll(): Promise<Tarefas[] | null>{
        return new Promise((resolve, reject) => {
            return resolve(
                await prisma.tarefas.findMany()
            );
        });

    }

    async atualizarTarefa(id: number, novaTarefa: Tarefas){
        await prisma.tarefas.update({
            where: {id},
            data: novaTarefa,
        });
    }

    async deletarTarefa(id: number): Promise<Tarefas | null>{
        return new Promise((resolve, reject) => {
            if(!id){
                return reject(new Error("Tarefa não existe, não é possível apagar sem id"));
            }
            else{
                return resolve(
                    await prisma.tarefas.delete({
                        where: {id},
                    })
                )
            }
        })
    }

}