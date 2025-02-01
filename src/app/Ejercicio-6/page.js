"use client"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function TablaResponsive() {
    return (
        <div className="container">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalRegistro">
                Registrate
            </button>
            <div className="modal" id="modalRegistro">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Registro</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="name" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="form-label">Contrasenia</label>
                                    <input type="password" className="form-control" id="password" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirm-password" className="form-label">Confirmar Contrasenia</label>
                                    <input type="password" className="form-control" id="confirm-password" required/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Registrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
