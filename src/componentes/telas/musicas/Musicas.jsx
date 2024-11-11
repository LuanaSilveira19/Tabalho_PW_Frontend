import { useState, useEffect } from 'react';
import MusicaContext from './MusicaContext';
import {getAlbunsAPI} from '../../../servicos/AlbunsServico';
import {
    getMusicasAPI, getMusicaPorCodigo,
    deleteMusicas , cadastraMusicasAPI
} from '../../../servicos/MusicaServico';
import Tabela3 from "./Tabela3";
import Formulario3 from './Formulario3';
import Carregando from '../../comuns/Carregando';


function Musicas() {

    const [listaAlbuns, setListaAlbuns] = useState([]);
    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);
    const [objeto, setObjeto] = useState({ codigo: "", titulo: "", duracao: "", albuns: "" });
    const [carregando, setCarregando] = useState(false);

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
           codigo: 0, titulo: "", duracao: "", albuns: "" 
        });
		setExibirForm(true);
    }

    const editarObjeto = async codigo => {
        setObjeto(await getMusicaPorCodigo(codigo))
        setEditar(true);
        setAlerta({ status: "", message: "" });
		setExibirForm(true);
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraMusicasAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            console.error(err.message);
        }
        recuperaMusica();
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }


 const recuperaAlbun = async () => {
    
        setCarregando(true);
        setListaAlbuns(await getAlbunsAPI());
        setCarregando(false);
    }

    const recuperaMusica = async () => {
    
        setCarregando(true);
        setListaObjetos(await getMusicasAPI());
        setCarregando(false);
    }

    const remover = async codigo => {
        if (window.confirm('Deseja remover essa música?')) {
            let retornoAPI = await deleteMusicas(codigo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message })
            recuperaMusica();
        }
    }

    useEffect(() => {
        recuperaMusica();
        recuperaAlbun();
    }, []);


    return (
        <MusicaContext.Provider value={
            {
                listaObjetos, alerta, remover, objeto, editarObjeto,
                acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm, listaAlbuns
            }
        }>
               <Carregando carregando={carregando}>
                <Tabela3/>
               </Carregando>
           <Formulario3/>
        </MusicaContext.Provider>
    );
}

export default Musicas;