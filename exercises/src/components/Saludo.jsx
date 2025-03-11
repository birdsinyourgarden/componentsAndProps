import React from 'react';

function Saludo(props) {
  let saludo;
  if (props.hora < 12) {
    saludo = 'Buenos días';
  } else if (props.hora < 18) {
    saludo = 'Buenas tardes';
  } else {
    saludo = 'Buenas noches';
  }

  return <h1>{saludo}</h1>;
}

export default Saludo;
