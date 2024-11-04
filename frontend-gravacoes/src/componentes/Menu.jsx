import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Outlet } from 'react-router-dom';

function Menu() {
    return (
        <div>
            <Navbar expand="lg" bg="primary" variant="dark"> {/* Azul escuro */}
                <Container>
                    <NavLink className="navbar-brand" aria-current="page" exact="true" to="/">Gravações</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link" aria-current="page" exact="true" to="/">Home</NavLink>
                            <NavDropdown title="Tabelas" id="basic-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="artistas">Artistas</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="albuns">Álbuns</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="musicas">Músicas</NavDropdown.Item>
                            </NavDropdown>
                            <NavLink className="nav-link" aria-current="page" exact="true" to="/sobre">Sobre...</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="mt-3">
                <Outlet />
            </Container>
        </div>
    );
}

export default Menu;
