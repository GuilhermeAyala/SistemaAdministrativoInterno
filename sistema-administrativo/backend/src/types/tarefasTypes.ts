export type statusTarefa = "atrasada" | "data limite" | "no prazo";
export type prioridade = "urgente" | "alta" | "média" | "baixa";
export type DadosCriarTarefa = {
  nome: string;
  area: string;
  statusTarefa: statusTarefa;
  prioridade: prioridade;
  dataInicio: Date;
  dataFinal: Date;
  atribuidoPara: string;
  criadoPor: string;
};