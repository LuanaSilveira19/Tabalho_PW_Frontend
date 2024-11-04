import { useState, useEffect } from 'react';
import ArtistaContext from './ArtistaContext';
import {
    getArtistasAPI, getArtistaPorCodigo,
    deleteArtistas, cadastraArtistaAPI
} from '../../../servicos/ArtistaServico';
import Tabela from "./Tabela";
import Formulario from './Formulario';
import Carregando from '../../comuns/Carregando';


function Artista() {

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
        setObjeto(await getArtistaPorCodigo(codigo))
        setEditar(true);
        setAlerta({ status: "", message: "" });
		setExibirForm(true);
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
        }
        recuperaArtistas();
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }


    const recuperaArtistas = async () => {
    
        setCarregando(true);
        setListaObjetos(await getArtistasAPI());
        setCarregando(false);
    }

    const remover = async codigo => {
        if (window.confirm('Deseja remover este artista?')) {
            let retornoAPI = await deleteArtistas(codigo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message })
            recuperaArtistas();
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

export default Artista;