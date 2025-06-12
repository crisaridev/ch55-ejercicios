let counter = 0;
const username = prompt("Hello, please enter your username: ");
const age = prompt("Enter your age:");
const favoriteMovies = [];

//Vamos a pedir 5 peliculas primero
alert("A continuacion te vamos a pedir tus 5 peliculas favoritas");
for (let i = 0; i < 5; i++) {
  //Los String dentro de `` se conocen como String Literal,
  //Concatenar variables y texto de una forma mas sencilla y legible.
  favoriteMovies.push(prompt(`Enter your favorite movie number ${i}`));
  //equivalente a "Ingresa la pelicula numnero" + i + ":"
}

console.log(`Hola soy ${username} tengo ${age} años y mis peliculas favoritas son: `);

while (counter < favoriteMovies.length) {
  console.log(`Mi pelicula favorita numero ${counter + 1} es ${favoriteMovies[counter]}`);
  counter++;
}