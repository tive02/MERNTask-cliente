import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTarea = () => {
    const tareasProyecto=[
        {nombre:'Elegir Plataforma', estado: true},
        {nombre:'Elegir Colores', estado: false},
        {nombre:'Elegir Plataforma de pago', estado: false},
        {nombre:'Elegir Hosting', estado: true},
    ]
    
    return ( 
<Fragment>
    <h2> Proyecto: Tienda Vitual</h2>
    <ul className="listado-tareas">
        {tareasProyecto.length===0 
        ? (<li className="tarea"><p>No hay Tareas</p></li>) 
        : {tareasProyecto.map(tarea =>(
            <Tarea 
            tarea={tarea}
            />
        ))}}
    </ul>
</Fragment>
    );
}
 
export default ListadoTarea;