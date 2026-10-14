//esse componente provavelmente será o futuro de uma lista de colaboradores
//ou algo assim 

import React from "react";

function Colaboradores(){

    interface Colaboradores {
        id: number,
        nome: string,
        idade: number, 
        cargo: string
    }

    let colaboradores: Colaboradores[] = [
        {id: 0, nome: "Pedro", idade: 18, cargo: "Estagiário"},
        {id: 1, nome: "Larissa", idade: 23, cargo: "Desenvolvedora"}
    ]
        
    let listaColaboradores = colaboradores.map((colaboradores: Colaboradores) => (
        <div key={colaboradores.id} style={{display: "flex", gap: "1rem"}}>
            <p>Nome: {colaboradores.nome}</p>
            <br />
            <p>Idade: {colaboradores.idade}</p>
            <br />
            <p>Cargo: {colaboradores.cargo}</p>
        </div>
    ))
        
    return(
        <div>
            <h1>Teste de navigation</h1>
            <h2>Lista de colaboradores: {listaColaboradores}</h2>
        </div>
    )
}

export default Colaboradores;