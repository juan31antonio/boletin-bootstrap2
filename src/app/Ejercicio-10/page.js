"use client"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function TablaResponsive() {
    return (
        <div className="container d-flex justify-content-center -align-items-center">
            <form>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Contrasenia</label>
                    <input type="password" className="form-control" id="password" required/>
                </div>
                <div className="d-flex justify-content-center my-4">
                    <button className="btn btn-primary">Iniciar Sesion</button>
                </div>
                <a href="#" className="form-link d-flex justify-content-center">¿Olvidaste tu contraseña?</a>
            </form>
        </div>
    );
}
