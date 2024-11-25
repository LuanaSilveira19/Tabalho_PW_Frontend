import { getToken } from '../seguranca/Autenticacao';

export const getAlbunsAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/albuns`,
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

export const getAlbunsPorCodigo = async codigo => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/albuns/${codigo}`,
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

export const deleteAlbuns = async codigo => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/albuns/${codigo}`,
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

export const cadastraAlbunAPI = async (objeto, metodo) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/albuns`, {
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