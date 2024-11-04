//import { useContext, useState } from 'react';
import { useContext } from 'react';
import Alerta from '../../comuns/Alerta';
//import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
//import Form from 'react-bootstrap/Form';
//import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
import ArtistaContext from './ArtistaContext';
import CampoEntrada from "../../comuns/CampoEntrada"
import Dialogo from '../../comuns/Dialogo';

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm } = useContext(ArtistaContext);

   // const [validated, setValidated] = useState(false);

    return (
        <Dialogo id="modalEdicao" titulo="Artistas"
            idform="formulario" acaoCadastrar={acaoCadastrar}
            exibirForm={exibirForm} setExibirForm={setExibirForm}>
            <Alerta alerta={alerta} />
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.codigo}
                    id="txtCodido" name="codigo" label="Código"
                    tipo="number" onchange={handleChange}
                    readonly={true}
                    maxCaracteres={5} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.nome}
                    id="txtNome" name="nome" label="Nome"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o nome"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.genero_musical}
                    id="txtgenero_musical" name="genero_musical" label="Gênero musical"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o genero_musical"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.pais_origem}
                    id="txtpais_origem" name="pais_origem" label="pais_origem"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o país de origem"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
        </Dialogo>
    )
}

export default Formulario;