import { useState, useEffect } from 'react';
import ArtistaContext from './ArtistaContext';
import {
    getArtistasAPI, getArtistaPorCodigo,
    deleteArtistas, cadastraArtistaAPI
} from '../../../servicos/ArtistaServico';
import Tabela from "./Tabela";
import Formulario from './Formulario';
import Carregando from '../../comuns/Carregando';
import WithAuth from '../../../seguranca/WithAuth';
import { useNavigate } from 'react-router-dom';

function Artista() {
    let navigate= useNavigate();
    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);
    const [objeto, setObjeto] = useState({ codigo: "", nome: "", genero_musical: "", pais_origem: ""  });
    const [carregando, setCarregando] = useState(false);

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
            codigo: 0,
            nome: "",
            genero_musical: "",
            pais_origem: ""
        });
		setExibirForm(true);
    }

    const editarObjeto = async codigo => {
        try{
        setObjeto(await getArtistaPorCodigo(codigo))
        setEditar(true);
        setAlerta({ status: "", message: "" });
		setExibirForm(true);
    }catch  (err){
        navigate("/login", { replace: true });
    }
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraArtistaAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            console.error(err.message);
            navigate("/login", { replace: true });
        }
        recuperaArtistas();
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }


    const recuperaArtistas = async () => {
    try{
        setCarregando(true);
        setListaObjetos(await getArtistasAPI());
        setCarregando(false);
    }catch  (err){
        navigate("/login", { replace: true });
    }
    }

    const remover = async codigo => {
        if (window.confirm('Deseja remover este artista?')) {
            try{
            let retornoAPI = await deleteArtistas(codigo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message })
            recuperaArtistas();
        }catch  (err){
            navigate("/login", { replace: true });
        }
        }
    }

    useEffect(() => {
        recuperaArtistas();
    }, []);


    return (
        <ArtistaContext.Provider value={
            {
                listaObjetos, alerta, remover, objeto, editarObjeto,
                acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm
            }
        }>
             <Carregando carregando={carregando}>
             <Tabela/>
             </Carregando>
            <Formulario/>
        </ArtistaContext.Provider>
    );
}

export default WithAuth (Artista);