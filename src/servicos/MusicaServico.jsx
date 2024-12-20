import { getToken } from '../seguranca/Autenticacao';

export const getMusicasAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/musicas`,
        {
            method: "GET",
            headers : {
                "Content-Type" : "application/json",
                "authorization": getToken()
            }
        })
    const data = await response.json()
    return data;
}

export const getMusicaPorCodigo = async codigo => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/musicas/${codigo}`,
        {
            method: "GET",
            headers : {
                "Content-Type" : "application/json",
                "authorization": getToken()
            }
        });
    const data = await response.json();
    return data;
}

export const deleteMusicas = async codigo => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/musicas/${codigo}`,
        {
            method: "DELETE",
            headers : {
                "Content-Type" : "application/json",
                "authorization": getToken()
            }
        });
    const data = await response.json();
    return data;
}

export const cadastraMusicasAPI = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/musicas`, {
        method: metodo,
        headers : {
            "Content-Type" : "application/json",
            "authorization": getToken()
        },
        body: JSON.stringify(objeto),
    })
    const data = await response.json();
    return data;
}