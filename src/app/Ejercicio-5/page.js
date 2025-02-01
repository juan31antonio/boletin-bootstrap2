"use client"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function TablaResponsive() {
    return (
        <div className="table-responsive-sm">
            <table className="table table-striped"> 
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo Electrónico</th>
                        <th>Fecha de Registro</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Juan Pérez</td>
                        <td>juan@example.com</td>
                        <td>2024-01-10</td>
                        <td>Activo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Ana Gómez</td>
                        <td>ana@example.com</td>
                        <td>2024-02-15</td>
                        <td>Inactivo</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Carlos López</td>
                        <td>carlos@example.com</td>
                        <td>2023-12-05</td>
                        <td>Activo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
