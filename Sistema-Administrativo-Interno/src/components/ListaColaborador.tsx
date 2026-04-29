import { Colaborador } from "../types/colaborador";
import { useNavigate } from "react-router-dom";

type Props = {
    colaboradores?: Colaborador[];
}

function ListaColaborador({colaboradores = []}: Props){
    const navigate = useNavigate();

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
                    <button onClick={() => navigate("/editarColaborador/" + colaborador.id)}>Editar</button>
                    <button>Excluir</button>
                    <hr />
                </div>
            ))}

        </div>
    );
}

export default ListaColaborador;