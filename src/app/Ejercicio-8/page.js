"use client"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function TablaResponsive() {
    return (
        <div className="container ">
            <section className="bg-light">
                <h2 className="text-center">Este es el encabezado de la seccion</h2>
                <p className="my-4 p-3">Esto es un texto de ejemplo con margenes y padding para ver como funciona bootstrap</p>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary">Este es el boton centrado</button>
                </div>
            </section>
        </div>
    );
}
