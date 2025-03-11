// Estado.jsx
import React from 'react';

function Estado(props) {
  const estilo = props.estado === 'activo' ? { color: 'green' } : { color: 'gray' };
  return <p style={estilo}>El estado es {props.estado}</p>;
}

export default Estado;
