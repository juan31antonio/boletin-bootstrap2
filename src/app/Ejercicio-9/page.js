"use client"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function TablaResponsive() {
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <h2>Planes de Precios</h2>
            </div>
            
            <div className="row">
                <div className="col-12 col-lg-4 d-flex justify-content-center">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-header">
                            Basico
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">6,99 € al mes</h5>
                            <ul className="list-group my-4">
                                <li className="list-group-item">Acceso limitado a funcionalidades o servicios básicos.</li>
                                <li className="list-group-item">Acceso limitado a funcionalidades o servicios básicos.</li>
                                <li className="list-group-item">Acceso limitado a funcionalidades o servicios básicos.</li>
                            </ul>
                            <a href="#" className="btn btn-primary">Seleccionar Plan</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 d-flex justify-content-center">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-header">
                            Pro
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">9,99 € al mes</h5>
                            <ul className="list-group my-4">
                                <li className="list-group-item">Acceso a funcionalidades avanzadas o herramientas adicionales.</li>
                                <li className="list-group-item">Acceso a funcionalidades avanzadas o herramientas adicionales.</li>
                                <li className="list-group-item">Acceso a funcionalidades avanzadas o herramientas adicionales.</li>
                            </ul>
                            <a href="#" className="btn btn-primary">Seleccionar Plan</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 d-flex justify-content-center">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-header">
                            Premium
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">14,99 € al mes</h5>
                            <ul className="list-group my-4">
                                <li className="list-group-item">Acceso completo a todas las funcionalidades, incluyendo opciones exclusivas.</li>
                                <li className="list-group-item">Acceso completo a todas las funcionalidades, incluyendo opciones exclusivas.</li>
                                <li className="list-group-item">Soporte 24/7 con atención personalizada y asistencia exclusiva.</li>
                            </ul>
                            <a href="#" className="btn btn-primary">Seleccionar Plan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
