"use client"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <img src="logo.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menu Desplegable
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Servicios 1</a></li>
                                <li><a className="dropdown-item" href="#">Servicios 2</a></li>
                                <li><a className="dropdown-item" href="#">Servicios 3</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
  