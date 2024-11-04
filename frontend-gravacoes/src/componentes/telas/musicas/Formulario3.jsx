import { useContext} from 'react';
import Alerta from '../../comuns/Alerta';
import Col from 'react-bootstrap/Col';
import CampoEntrada from "../../comuns/CampoEntrada"
import Dialogo from '../../comuns/Dialogo';
import MusicaContext from './MusicaContext';
import CampoSelect from '../../comuns/CampoSelect';

function Formulario3() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm, listaAlbuns } = useContext(MusicaContext);

    return (
        <Dialogo id="modalEdicao" titulo="Músicas"
            idform="formulario" acaoCadastrar={acaoCadastrar}
            exibirForm={exibirForm} setExibirForm={setExibirForm}>
            <Alerta alerta={alerta} />
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.codigo}
                    id="txtCodigo" name="codigo" label="Código"
                    tipo="number" onchange={handleChange}
                    readonly={true}
                    maxCaracteres={5} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.titulo}
                    id="txttitulo" name="titulo" label="titulo"
                    tipo="text" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o titulo"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.duracao}
                    id="txtduracao" name="duracao" label="Duracao"
                    tipo="number" onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe a duração da música"
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={12}>
                <CampoSelect value={objeto.albuns}
                    id="txtAlbuns" name="albuns" label="Álbuns"
                    onchange={handleChange}
                    msgvalido="OK certo" msginvalido="Informe o álbum"
                    requerido={true}>
                    {listaAlbuns.map((cat) => (
                        <option key={cat.codigo} value={cat.codigo}>
                            {cat.titulo}
                        </option>
                    ))}
                </CampoSelect>
            </Col>
        </Dialogo>
    )
}

export default Formulario3;