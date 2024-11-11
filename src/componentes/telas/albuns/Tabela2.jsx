import { useContext } from 'react'
import AlbunsContext from './AlbunsContext';
import Alerta from '../../comuns/Alerta';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

function Tabela2() {

    const { alerta, listaObjetos, remover,novoObjeto, editarObjeto  } = useContext(AlbunsContext);
    
    return (
        <div style={{ padding: '20px' }}>
            <h1>Álbuns</h1>
            <Alerta alerta={alerta} />
            <Button variant="primary" onClick={() => novoObjeto()}>
              Novo <i className="bi bi-file-earmark-plus"></i>
            </Button>

            {listaObjetos.length === 0 && <h1>Nenhum álbum encontrado</h1>}
            {listaObjetos.length > 0 && (

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th style={{
                                textAlign: 'center'
                            }}>Ações</th>
                            <th>Código</th>
                            <th>Titulo</th>
                            <th>Ano de lançamento</th>
                            <th>País de origem</th>
                            <th>Artistas</th>
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
                                <td>{objeto.ano_lancamento}</td>
                                <td>{objeto.pais_origem}</td>
                                <td>{objeto.artistas}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    )
}

export default Tabela2;