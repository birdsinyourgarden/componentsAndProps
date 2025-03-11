import React from 'react';

function Fecha(props) {
  const [year, month, day] = props.fecha.split('-');
  return <p>{`${day}/${month}/${year}`}</p>;
}

export default Fecha;

