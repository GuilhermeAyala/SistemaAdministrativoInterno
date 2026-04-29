import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Colaborador } from "../types/colaborador";

type Props = {
    colaboradores: Colaborador[];
    setColaboradores: React.Dispatch<React.SetStateAction<Colaborador[]>>;

}

function EditarColaborador({colaboradores, setColaboradores }: Props){
    const {id} = useParams();
    const navigate = useNavigate();

    const colaboradorSelecionado = colaboradores.find(c => c.id === Number(id));
    const [formEditar, setFormEditar] = useState<Colaborador | null>(colaboradorSelecionado ?? null);

    if(!formEditar){
        return <p>Colaborador não encontrado</p>;
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
         setFormEditar({...formEditar, [e.target.name]: e.target.value} as Colaborador);
    }

    function salvarEdicao(){
        if(!formEditar) return;
        setColaboradores(colaboradores.map(c => c.id === formEditar.id ? formEditar: c));
        navigate("/telaAdmin");
    }

    return(
        <div>
            <h1>Editar Colaborador</h1>
            <input name="name" placeholder="Nome" value={formEditar.name} type="text" onChange={handleChange}/>
            <input name="cargo" placeholder="Cargo" value={formEditar.cargo} type="text" onChange={handleChange}/>
            <input name="idade" placeholder="Idade" value={formEditar.idade} type="number" onChange={handleChange}/>
            <input name="salario" placeholder="Salario" value={formEditar.salario} type="number" onChange={handleChange}/>
            <button onClick={salvarEdicao}>Salvar</button>
            <button onClick={() => navigate("/telaAdmin")}>Cancelar</button>
        </div>
    )
}

export default EditarColaborador;