"use client"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function TablaResponsive() {
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <h2>Fruteria</h2>
            </div>
            
            <div className="row">
                <div className="col-12 col-lg-4 d-flex justify-content-center">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="manzana.jpg" className="card-img-top" alt="manzana" style={{ height: "18rem" }}/>
                        <div className="card-body">
                            <h5 className="card-title">Manzana</h5>
                            <p className="card-text">Esto es una manzana y es roja</p>
                            <a href="#" className="btn btn-primary">Mas informacion</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 d-flex justify-content-center">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="naranja.jpg" className="card-img-top" alt="naranja" style={{ height: "18rem" }}/>
                        <div className="card-body">
                            <h5 className="card-title">Naranja</h5>
                            <p className="card-text">Esto es una naranja y es naranja</p>
                            <a href="#" className="btn btn-primary">Mas informacion</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 d-flex justify-content-center">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="platano.jpg" className="card-img-top" alt="platano" style={{ height: "18rem" }}/>
                        <div className="card-body">
                            <h5 className="card-title">Platano</h5>
                            <p className="card-text">Esto es un platano y es amarillo</p>
                            <a href="#" className="btn btn-primary">Mas informacion</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
