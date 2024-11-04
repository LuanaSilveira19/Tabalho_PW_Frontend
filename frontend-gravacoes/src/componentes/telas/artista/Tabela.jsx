import { useContext } from 'react'
import ArtistaContext from './ArtistaContext';
import Alerta from '../../comuns/Alerta';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

function Tabela() {

    const { alerta, listaObjetos, remover,novoObjeto, editarObjeto  } = useContext(ArtistaContext);
    
    return (
        <div style={{ padding: '20px' }}>
            <h1>Artistas</h1>
            <Alerta alerta={alerta} />
            <Button variant="primary" onClick={() => novoObjeto()}>
              Novo <i className="bi bi-file-earmark-plus"></i>
            </Button>

            {listaObjetos.length === 0 && <h1>Nenhum artista encontrado</h1>}
            {listaObjetos.length > 0 && (

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th style={{
                                textAlign: 'center'
                            }}>Ações</th>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Genero_musical</th>
                            <th>Pais_origem</th>
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
                                <td>{objeto.nome}</td>
                                <td>{objeto.genero_musical}</td>
                                <td>{objeto.pais_origem}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    )
}

export default Tabela;