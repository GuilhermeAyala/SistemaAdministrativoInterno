import { useNavigate } from "react-router-dom";
import { Colaborador } from "../types/colaborador";
import ListaColaborador from './ListaColaborador';

type Props = {
    colaboradores: Colaborador[];
    setColaboradores: React.Dispatch<React.SetStateAction<Colaborador[]>>;
    onExcluir: (id: number) => void;
}

function TelaAdmin({colaboradores, onExcluir}: Props){
    const navigate = useNavigate();

    return(
        <div>
            <h1>Seja bem vindo!</h1>
            <button onClick={() => navigate("/adicionarColaborador")}>Adicionar Colaborador</button>
            <ListaColaborador colaboradores={colaboradores} onExcluir={onExcluir}/>
            <button onClick={() => navigate("/")}>Sair</button>
        </div>
    )

}

export default TelaAdmin;