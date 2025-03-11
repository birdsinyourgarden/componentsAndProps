import React from 'react';

function RecuentoPalabras(props) {
  const palabras = props.texto.split(' ').filter(Boolean);
  return <p>El texto tiene {palabras.length} palabras.</p>;
}

export default RecuentoPalabras;
