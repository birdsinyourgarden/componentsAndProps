import React from 'react';

function Producto(props) {
  return (
    <div className="producto-card">
      <h2>{props.nombre}</h2>
      <p>{props.precio}</p>
      <p>{props.descripcion}</p>
    </div>
  );
}

export default Producto;
