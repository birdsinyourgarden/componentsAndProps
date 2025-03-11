// ListaTareas.jsx
import React from 'react';

function ListaTareas(props) {
  return (
    <ul>
      {props.tareas.map((tarea, index) => (
        <li key={index}>{tarea}</li>
      ))}
    </ul>
  );
}

export default ListaTareas;
