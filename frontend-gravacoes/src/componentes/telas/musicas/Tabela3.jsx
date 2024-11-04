import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import MusicaContext from './MusicaContext';

function Tabela3() {

    const { alerta, listaObjetos, remover,novoObjeto, editarObjeto  } = useContext(MusicaContext);
    
    return (
        <div style={{ padding: '20px' }}>
            <h1>Álbuns</h1>
            <Alerta alerta={alerta} />
            <Button variant="primary" onClick={() => novoObjeto()}>
              Novo <i className="bi bi-file-earmark-plus"></i>
            </Button>

            {listaObjetos.length === 0 && <h1>Nenhuma música encontrado</h1>}
            {listaObjetos.length > 0 && (

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th style={{
                                textAlign: 'center'
                            }}>Ações</th>
                            <th>Código</th>
                            <th>Titulo</th>
                            <th>Duração</th>
                            <th>Álbum</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaObjetos.map((objeto) => (
                            <tr key={objeto.codigo}>
                                <td align="center">

                                   <Button variant="info" onClick={() => editarObjeto(objeto.codigo)}>
    	                            <i className="bi bi-pencil-square"></i>
                                      </Button>
                                    <Button variant="danger" onClick={() => { remover(objeto.codigo); }}>
                                        <i className="bi bi-trash"></i>
                                    </Button>
                                </td>
                                <td>{objeto.codigo}</td>
                                <td>{objeto.titulo}</td>
                                <td>{objeto.duracao}</td>
                                <td>{objeto.albuns}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    )
}

export default Tabela3;