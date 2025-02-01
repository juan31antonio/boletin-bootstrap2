"use client"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function NavBar() {
    return (
        <div className="container">
            <h2 className="text-center">Fruteria</h2>
            <div className="row">
                <div className="col-6 col-md-6 col-lg-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="manzana.jpg" className="card-img-top" alt="manzana" style={{ height: "18rem" }}/>
                        <div className="card-body">
                            <h5 className="card-title">Manzana</h5>
                            <a href="#" className="btn btn-primary">Comprar Ahora</a>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="naranja.jpg" className="card-img-top" alt="naranja" style={{ height: "18rem" }}/>
                        <div className="card-body">
                            <h5 className="card-title">Naranja</h5>
                            <a href="#" className="btn btn-primary">Comprar Ahora</a>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="platano.jpg" className="card-img-top" alt="platano" style={{ height: "18rem" }}/>
                        <div className="card-body">
                            <h5 className="card-title">Platano</h5>
                            <a href="#" className="btn btn-primary">Comprar Ahora</a>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="arandano.jpg" className="card-img-top" alt="arandano" style={{ height: "18rem" }}/>
                        <div className="card-body">
                            <h5 className="card-title">Arandanos</h5>
                            <a href="#" className="btn btn-primary">Comprar Ahora</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  