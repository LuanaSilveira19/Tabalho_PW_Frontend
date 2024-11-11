import '../../App.css';

const Sobre = () => (
    <div className="sobre-container">
        <h1 className="sobre-title">Informações</h1>
        <p className="sobre-text">
            Sistema desenvolvido para a disciplina de PW. Este modelo simula uma gravadora de músicas, 
            incluindo artistas, seus álbuns e as músicas de cada álbum associadas aos respectivos artistas.
        </p>
        <img src="/Modelo-pw.png" alt="Descrição da imagem" style={{ width: '600px', height: 'auto' }} />
    </div>
);

export default Sobre;

