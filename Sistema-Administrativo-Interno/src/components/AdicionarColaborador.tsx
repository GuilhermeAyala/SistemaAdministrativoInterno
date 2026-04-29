import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Colaborador } from "../types/colaborador";

type Props = {
    colaboradores: Colaborador[];
    setColaboradores: React.Dispatch<React.SetStateAction<Colaborador[]>>;

}

function AdicionarColaborador({colaboradores, setColaboradores}: Props){
    console.log("Renderizou");
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        cargo: "",
        idade: "",
        salario: "",
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function criarColaborador(){
        const idadeNum = Number(form.idade);
        const salarioNum = Number(form.salario);

        if (!form.name || !form.cargo || !form.idade || !form.salario) {
            alert("Preencha todos os campos!");
            return;
        }
        if(idadeNum < 18){
            alert("Colaborador não pode ser menor de idade")
            return;
        }
        if(salarioNum <= 0){
            alert("Salário deve ser maior que 0");
            return;
        }

    const novoColaborador: Colaborador = {
            id: colaboradores.length + 1,
            name: form.name,
            cargo: form.cargo,
            idade: Number(form.idade),
            salario: Number(form.salario),
        }

        setColaboradores([...colaboradores, novoColaborador]);
        navigate("/telaAdmin");

    }

    return(
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "300px" }}>
            <h2>Cadastrar Colaborador</h2>
                <div>
                    <input name="name"   placeholder="Nome"    value={form.name}   onChange={handleChange} />
                    <input name="cargo"  placeholder="Cargo"   value={form.cargo}  onChange={handleChange} />
                    <input name="idade"  placeholder="Idade"   value={form.idade}  onChange={handleChange} type="number" />
                    <input name="salario" placeholder="Salário" value={form.salario} onChange={handleChange} type="number" /><br />
                    <button onClick={criarColaborador}>Adicionar</button>
                    <button onClick={() => navigate("/telaAdmin")}>Cancelar</button>
                </div>
        </div>
    )

    
}

export default AdicionarColaborador;