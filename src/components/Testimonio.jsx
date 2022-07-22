import React from 'react';
import '../stylesheets/Testimonio.css';

export default function Testimonio (props) {
  return (
    <div className="contenedor-testimonio">
      <img className='imagen-testimonio'
            src={props.image}
            alt='Foto random' 
      />
      <div className='contenedor-texto'>
        <div className='nombre-testimonio'>{props.name} en {props.country}</div>
        <div className='cargo-testimonio'>{props.job}</div>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>             
    </div>
  );
}