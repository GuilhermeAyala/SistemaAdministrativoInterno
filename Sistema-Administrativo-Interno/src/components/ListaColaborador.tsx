import { Colaborador } from "../types/colaborador";

type Props = {
    colaboradores?: Colaborador[];
}

function ListaColaborador({colaboradores = []}: Props){

    return(
        <div>

            <h2>Lista Colaboradores</h2>
            {colaboradores.length === 0 && <p>Nenhum colaborador cadastrado</p>}
            {colaboradores.map((colaborador) => (
                <div key={colaborador.id} style={{display: "flex", gap: "1rem"}}>
                    <p><strong>Nome:</strong> {colaborador.name}</p>
                    <p><strong>Cargo:</strong> {colaborador.cargo}</p>
                    <p><strong>Idade:</strong> {colaborador.idade}</p>
                    <p><strong>Salário:</strong> R$ {colaborador.salario}</p>
                    <hr />
                </div>
            ))}

        </div>
    );
}

export default ListaColaborador;