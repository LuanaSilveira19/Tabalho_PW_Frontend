import { useState, useEffect } from 'react';
import AlbunsContext from './AlbunsContext';
import {getArtistasAPI} from '../../../servicos/ArtistaServico';
import {
    getAlbunsAPI, getAlbunsPorCodigo,
    deleteAlbuns , cadastraAlbunAPI
} from '../../../servicos/AlbunsServico';
import Tabela2 from "./Tabela2";
import Formulario2 from './Formulario2';
import Carregando from '../../comuns/Carregando';
import WithAuth from '../../../seguranca/WithAuth';
import { useNavigate } from 'react-router-dom';
function Albuns() {

    let navigate= useNavigate();

    const [listaArtistas, setListaArtistas] = useState([]);
    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);
    const [objeto, setObjeto] = useState({ codigo: "", titulo: "", ano_lancamento: "", pais_origem: "" , artistas: "" });
    const [carregando, setCarregando] = useState(false);

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
           codigo: 0, titulo: "", ano_lancamento: 0, pais_origem: "" , artistas: ""
        });
		setExibirForm(true);
    }

    const editarObjeto = async codigo => {
        try{
        setObjeto(await getAlbunsPorCodigo(codigo))
        setEditar(true);
        setAlerta({ status: "", message: "" });
		setExibirForm(true);
        }catch (err){
            navigate("/login", { replace: true });
        }
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastraAlbunAPI(objeto, metodo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            console.error(err.message);
            navigate("/login", { replace: true });
        }
        recuperaAlbun();
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const recuperaArtista= async () => {
    try{
        setCarregando(true);
        setListaArtistas(await getArtistasAPI());
       setCarregando(false);
    }catch  (err){
        navigate("/login", { replace: true });
    }
    }


    const recuperaAlbun = async () => {
    try{
        setCarregando(true);
        setListaObjetos(await getAlbunsAPI());
        setCarregando(false);
    }catch  (err){
        navigate("/login", { replace: true });
    }
    }

    const remover = async codigo => {
        if (window.confirm('Deseja remover este álbum?')) {
            try{
            let retornoAPI = await deleteAlbuns(codigo);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message })
            recuperaAlbun();
            }catch (err){
                navigate("/login", { replace: true });
            }
        }
    }

    useEffect(() => {
        recuperaArtista();
        recuperaAlbun();
    }, []);


    return (
        <AlbunsContext.Provider value={
            {
                listaObjetos, alerta, remover, objeto, editarObjeto,
                acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm, listaArtistas
            }
        }>
               <Carregando carregando={carregando}>
                <Tabela2/>
               </Carregando>
           <Formulario2/>
        </AlbunsContext.Provider>
    );
}

export default WithAuth (Albuns);