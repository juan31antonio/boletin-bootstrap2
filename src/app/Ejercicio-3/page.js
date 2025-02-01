"use client"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="naranja.jpg" className="d-block w-50 mx-auto" alt="Naranja"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 style={{color: 'black'}}>Naranja</h5>
                        <p style={{color: 'black'}}>Esto es una naranja</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="manzana.jpg" className="d-block w-50 mx-auto" alt="Manzana"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 style={{color: 'black'}}>Manzana</h5>
                        <p style={{color: 'black'}}>Esto es una manzana</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="platano.jpg" className="d-block w-50 mx-auto" alt="Plátano"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 style={{color: 'black'}}>Platano</h5>
                        <p style={{color: 'black'}}>Esto es un platano</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
