import React from 'react';
import Bienvenida from './components/Bienvenida';
import Saludo from './components/Saludo';
import ListaTareas from './components/ListaTareas';
import ContadorLikes from './components/ContadorLikes';
import Perfil from './components/Perfil';
import Imagen from './components/Imagen';
import Producto from './components/Producto';
import Fecha from './components/Fecha';
import RecuentoPalabras from './components/RecuentoPalabras';
import Estado from './components/Estado';

function App() {
  return (
    <div>
      <Bienvenida nombre="Juan" />
      <Saludo hora={14} />
      <ListaTareas tareas={["Comprar pan", "Estudiar React", "Llamar a mamá"]} />
      <ContadorLikes likes={56} />
      <Perfil nombre="Ana" edad={25} profesion="desarrolladora" />
      <Imagen url="https://example.com/imagen.jpg" />
      <Producto nombre="Portatil" precio="1500 euros" descripcion="Portátil con procesador i7" />
      <Fecha fecha="2025-01-08" />
      <RecuentoPalabras texto="Hola, ¿cómo estás?" />
      <Estado estado="activo" />
    </div>
  );
}

export default App;

