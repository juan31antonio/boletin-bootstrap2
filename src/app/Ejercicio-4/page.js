"use client"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Formulario() {
    return (
        <form className="was-validated">
            <div className="form-group">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" required/>
                <div className="invalid-feedback">
                    Por favor ingresa tu nombre
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="email" className="form-label">Correo electronico</label>
                <input type="email" className="form-control" id="email" required/>
                <div className="invalid-feedback">
                    Por favor ingresa un correo valido
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea className="form-control" id="message" rows="3" required></textarea>
                <div className="invalid-feedback">
                    Por favor escribe un mensaje
                </div>
            </div>
            <button type="submit" className="btn btn-primary d-none d-sm-block d-md-none d-lg-block">Enviar</button>
        </form>
    );
}
