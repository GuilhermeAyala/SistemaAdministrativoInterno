import { useState } from "react";
import { Colaborador } from "../types/colaborador";
import { useNavigate } from "react-router-dom";

type Props = {
    colaboradores: Colaborador[];
    onExcluir: (id: number) => void;
}

function ListaColaborador({colaboradores = [], onExcluir}: Props){
    const navigate = useNavigate();

    const [filtroNome, setFiltroNome] = useState("");
    const [filtroCargo, setFiltroCargo] = useState("");
    const [filtroAreaCargo, setFiltroAreaCargo] = useState("");
    const [salarioMin, setSalarioMin] = useState("");
    const [salarioMax, setSalarioMax] = useState("");

    function excluirColaborador(id: number) {
        const confirmar = window.confirm("Tem certeza que deseja excluir este colaborador?");
        if(!confirmar){
            return ;
        }
        onExcluir(id);
    }

    const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
        const nome = colaborador.name.toLocaleLowerCase().includes(filtroNome.toLowerCase());
        const cargo = colaborador.cargo.toLowerCase().includes(filtroCargo.toLowerCase());
        const areaCargo = colaborador.areaCargo.toLowerCase().includes(filtroAreaCargo.toLowerCase());
        const min = salarioMin === "" || colaborador.salario >= Number(salarioMin);
        const max = salarioMax === "" || colaborador.salario <= Number(salarioMax);
        return nome && cargo && areaCargo && min && max;
    })

    return(
        <div>

            <h2>Lista Colaboradores</h2>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                <input
                    type="text"
                    placeholder="Filtrar por nome"
                    value={filtroNome}
                    onChange={(e) => setFiltroNome(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Filtrar por cargo"
                    value={filtroCargo}
                    onChange={(e) => setFiltroCargo(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Filtrar por área do cargo"
                    value={filtroAreaCargo}
                    onChange={(e) => setFiltroAreaCargo(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Salário mínimo"
                    value={salarioMin}
                    onChange={(e) => setSalarioMin(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Salário máximo"
                    value={salarioMax}
                    onChange={(e) => setSalarioMax(e.target.value)}
                />
            </div>

            {colaboradores.length === 0 && <p>Nenhum colaborador cadastrado</p>}

            {colaboradoresFiltrados.map((colaborador) => (
                <div key={colaborador.id} style={{display: "flex", gap: "1rem"}}>
                    <p><strong>Nome:</strong> {colaborador.name}</p>
                    <p><strong>Cargo:</strong> {colaborador.cargo}</p>
                    <p><strong>Área Cargo:</strong> {colaborador.areaCargo}</p>
                    <p><strong>Idade:</strong> {colaborador.idade}</p>
                    <p><strong>Salário:</strong> R$ {colaborador.salario}</p>
                    <button onClick={() => navigate("/editarColaborador/" + colaborador.id)}>Editar</button>
                    <button onClick={() => excluirColaborador(colaborador.id)}>Excluir</button>
                    <hr />
                </div>
            ))}

        </div>
    );
}

export default ListaColaborador;