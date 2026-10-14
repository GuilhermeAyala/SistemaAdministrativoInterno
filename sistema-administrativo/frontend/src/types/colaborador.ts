export const Areas_Cargo = ["RH", "Financeiro", "Logísitica", "Marketing", "Operações/Produção", "TI"];
export type StatusColaborador = "Afastado" | "Ferias" | "Ativo" | "Inativo";

export type AreaCargo = typeof Areas_Cargo[number];

export type Colaborador = {
        id: number;
        name: string;
        areaCargo: AreaCargo;
        cargo: string;
        idade: number;
        salario: number;
        status: StatusColaborador;
    }