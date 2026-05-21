import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Colaborador, Areas_Cargo, AreaCargo, StatusColaborador } from "../types/colaborador";

type Props = {
    colaboradores: Colaborador[];
    setColaboradores: React.Dispatch<React.SetStateAction<Colaborador[]>>;

}

const status_options: StatusColaborador[] = ["Ativo", "Inativo", "Afastado", "Ferias"];

function AdicionarColaborador({colaboradores, setColaboradores}: Props){
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        areaCargo: "" as AreaCargo | "",
        cargo: "",
        idade: "",
        salario: "",
        status: "" as StatusColaborador | "",
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setForm((state) => Object.assign({}, state, { [name]:value }));
    }

    function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>){
        const { name, value } = e.target
        setForm((state) => Object.assign({}, state, { [name]:value }));
    }

    function criarColaborador(){
        const nameString = String(form.name);
        const areaCargoString = String(form.areaCargo);
        const cargoString = String(form.cargo)
        const idadeNum = Number(form.idade);
        const salarioNum = Number(form.salario);
        const statusAtual = String(form.status);

        if (!form.name || !form.areaCargo || !form.cargo || !form.idade || !form.salario || !form.status) {
            alert("Preencha todos os campos!");
            return;
        }
        if(/\d/.test(nameString) || /\d/.test(areaCargoString) || /\d/.test(cargoString) || /\d/.test(statusAtual)){
            alert("Nome, cargo, área do cargo ou status só podem ter letras")
            return;
        }
        if(idadeNum < 18 || idadeNum > 65){
            alert("Colaborador não pode ser menor de idade ou aposentado");
            return;
        }
        if(salarioNum <= 0){
            alert("Salário deve ser maior que 0");
            return;
        }

    const novoColaborador: Colaborador = {
            id: Date.now(),
            name: form.name,
            areaCargo: form.areaCargo as AreaCargo,
            cargo: form.cargo,
            idade: Number(form.idade),
            salario: Number(form.salario),
            status: form.status as StatusColaborador,
        }

        setColaboradores([...colaboradores, novoColaborador]);
        navigate("/telaAdmin");

    }

    return(
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "300px" }}>
            <h2>Cadastrar Colaborador</h2>
                <div>
                    <input name="name"   placeholder="Nome"    value={form.name}   onChange={handleChange} />
                    <select name="areaCargo" value={form.areaCargo} onChange={handleSelectChange}>
                        <option value="">Selecione a área</option>
                        {Areas_Cargo.map((area) => (
                            <option key={area} value={area}>{area}</option>
                        ))}
                    </select>
                    <input name="cargo"  placeholder="Cargo"   value={form.cargo}  onChange={handleChange} />
                    <input name="idade"  placeholder="Idade"   value={form.idade}  onChange={handleChange} type="number" />
                    <input name="salario" placeholder="Salário" value={form.salario} onChange={handleChange} type="number" /><br />
                    <select name="status" value={form.status} onChange={handleSelectChange}>
                        <option value="">Selecione o status</option>
                        {status_options.map((status) => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                    <button onClick={criarColaborador}>Adicionar</button>
                    <button onClick={() => navigate("/telaAdmin")}>Cancelar</button>
                </div>
        </div>
    )
   
}

export default AdicionarColaborador;