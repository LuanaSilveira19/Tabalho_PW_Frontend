import { useContext } from 'react';
import Alerta from '../../comuns/Alerta';
import Col from 'react-bootstrap/Col';
import CampoEntrada from "../../comuns/CampoEntrada"
import Dialogo from '../../comuns/Dialogo';
import AlbunsContext from './AlbunsContext';
import CampoSelect from '../../comuns/CampoSelect';

function Formulario2() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm, listaArtistas } = useContext(AlbunsContext);
    return (
        <Dialogo id="modalEdicao" titulo="Álbuns"
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
                <CampoEntrada value={objeto.titulo}
                    id="txttitulo" name="titulo" label="Título"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o título"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.ano_lancamento}
                    id="txtano_lancamento" name="ano_lancamento" label="Ano de lançamento"
                    tipo="number" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o ano de lançamento"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.pais_origem}
                    id="txtpais_origem" name="pais_origem" label="País de origem"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o país de origem"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={12}>
                <CampoSelect value={objeto.artistas}
                    id="txtArtistas" name="artistas" label="Artistas"
                    onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o artista"
                    requerido={true}>
                    {listaArtistas.map((cat) => (
                        <option key={cat.codigo} value={cat.codigo}>
                            {cat.nome}
                        </option>
                    ))}
                </CampoSelect>
            </Col>
        </Dialogo>
    )
}

export default Formulario2;