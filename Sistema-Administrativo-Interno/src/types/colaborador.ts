export const Areas_Cargo = ["RH", "Financeiro", "Logísitica", "Marketing", "operações/Produção", "TI"];

export type AreaCargo = typeof Areas_Cargo[number];

export type Colaborador = {
        id: number;
        name: string;
        areaCargo: AreaCargo;
        cargo: string;
        idade: number;
        salario: number;
    }