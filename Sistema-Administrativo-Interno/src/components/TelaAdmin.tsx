import { useNavigate } from "react-router-dom";
import { Colaborador } from "../types/colaborador";
import ListaColaborador from './ListaColaborador';

type Props = {
    colaboradores: Colaborador[];
}

function TelaAdmin({colaboradores}: Props){
    const navigate = useNavigate();

    return(
        <div>
            <h1>Seja bem vindo!</h1>
            <button onClick={() => navigate("/adicionarColaborador")}>Adicionar Colaborador</button>
            <ListaColaborador colaboradores={colaboradores}/>
            <button onClick={() => navigate("/")}>Sair</button>
        </div>
    )

}

export default TelaAdmin;