import { useState } from 'react';
import { useNavigate } from "react-router-dom";

//interface Admin {
//    name: string,
//    password: string
//}

function LoginForm() {
    const [inputName, setInputName] = useState<string>("");
    const [inputPassword, setInputPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const correctName = "Guilherme";
    const correctPassword = "teste12345";

    function CheckCredenciais(){
        if(inputName === correctName && inputPassword === correctPassword){
            navigate("/telaAdmin")
        }
        else{
            setError("Nome ou senha incorretos");
            setTimeout(() => setError(null), 3000)
        }
    }
    
    return(
        <div className='form'>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id='nome' value={inputName} onChange={(e) => setInputName(e.target.value)}></input><br />
            <label htmlFor="senha">Senha:</label>
            <input type="password" value={inputPassword} onChange={(e) => setInputPassword(e.target.value)}></input><br />
            <input type="button" value="Entrar" onClick={CheckCredenciais}/>
            <p>Esqueceu a senha?</p>

            {error && (
                <div style={{backgroundColor: "red", color: "white"}}>
                    {error}
                </div>
            )}
        </div>
    );
}

export default LoginForm;