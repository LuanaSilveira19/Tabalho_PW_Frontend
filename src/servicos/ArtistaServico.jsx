import { getToken } from '../seguranca/Autenticacao';

export const getArtistasAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/artistas`,
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

export const getArtistaPorCodigo = async codigo => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/artistas/${codigo}`,
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

export const deleteArtistas = async codigo => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/artistas/${codigo}`,
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

export const cadastraArtistaAPI = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/artistas`, {
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