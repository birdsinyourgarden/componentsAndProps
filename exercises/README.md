## Ejercicio 1: Componente de bienvenida
Crea un componente llamado `Bienvenida` que reciba un `nombre` a través de `props` y lo muestre dentro de un mensaje de bienvenida como: "¡Hola, [nombre]!".

**Entrada:**  
Prop `nombre = "Juan"`

**Salida:**  
"¡Hola, Juan!"

---

## Ejercicio 2: Saludo por hora
Crea un componente `Saludo` que reciba una propiedad llamada `hora`. Dependiendo de la hora (por ejemplo, si la hora es antes de las 12, el saludo debería ser "Buenos días", si es después de las 12 pero antes de las 18, "Buenas tardes", y si es después de las 18, "Buenas noches").

**Entrada:**  
Prop `hora = 14`

**Salida:**  
"Buenas tardes"

---

## Ejercicio 3: Lista de tareas
Crea un componente `ListaTareas` que reciba una lista de tareas como un array de strings a través de `props` y las muestre en un `<ul>`. Cada tarea debe estar dentro de un `<li>`.

**Entrada:**  
Prop `tareas = ["Comprar pan", "Estudiar React", "Llamar a mamá"]`

**Salida:**  
Una lista desordenada con cada tarea.

---

## Ejercicio 4: Contador de likes
Crea un componente `ContadorLikes` que reciba una propiedad llamada `likes` y la muestre dentro de un mensaje como: "Este artículo tiene [número] likes".

**Entrada:**  
Prop `likes = 56`

**Salida:**  
"Este artículo tiene 56 likes."

---

## Ejercicio 5: Componente de perfil
Crea un componente `Perfil` que reciba `nombre`, `edad` y `profesión` a través de `props` y muestre esta información en un formato similar a: "Soy [nombre], tengo [edad] años y soy [profesión]".

**Entrada:**  
Props `nombre = "Ana"`, `edad = 25`, `profesión = "desarrolladora"`

**Salida:**  
"Soy Ana, tengo 25 años y soy desarrolladora."

---

## Ejercicio 6: Mostrar imágenes
Crea un componente `Imagen` que reciba una URL de una imagen a través de `props` y la muestre en una etiqueta `<img>`.

**Entrada:**  
Prop `url = "https://example.com/imagen.jpg"`

**Salida:**  
La imagen de la URL mostrada en el navegador.

---

## Ejercicio 7: Tarjeta de producto
Crea un componente `Producto` que reciba `nombre`, `precio` y `descripcion` como props y los muestre dentro de una tarjeta con un diseño simple.

**Entrada:**  
Props `nombre = "Laptop"`, `precio = "1500 USD"`, `descripcion = "Laptop con procesador i7"`

**Salida:**  
Una tarjeta con el nombre, precio y descripción del producto.

---

## Ejercicio 8: Componente de fecha
Crea un componente `Fecha` que reciba una fecha en formato `YYYY-MM-DD` y la muestre en formato "DD/MM/YYYY".

**Entrada:**  
Prop `fecha = "2025-01-08"`

**Salida:**  
"08/01/2025"

---

## Ejercicio 9: Recuento de palabras
Crea un componente `RecuentoPalabras` que reciba un texto a través de `props` y muestre cuántas palabras tiene dicho texto.

**Entrada:**  
Prop `texto = "Hola, ¿cómo estás?"`

**Salida:**  
"El texto tiene 4 palabras."

---

## Ejercicio 10: Estilos condicionales
Crea un componente `Estado` que reciba un `estado` a través de `props` y, dependiendo del valor de `estado` ("activo", "inactivo"), cambia el color del texto (por ejemplo, verde para "activo" y gris para "inactivo").

**Entrada:**  
Prop `estado = "activo"`

**Salida:**  
Un texto que diga "El estado es activo" en color verde.

