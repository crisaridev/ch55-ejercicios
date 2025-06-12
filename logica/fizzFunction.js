//Firma de la funcion

const fizzBuzz = (limitNumber) => {
  let counter = 1;
  do {
    if (counter % 3 === 0 && counter % 5 === 0) {
      console.log(`El numero ${counter} es FizzBuzz`);
    }
    else if (counter % 3 === 0) {
      console.log(`El numero ${counter} es Fizz`);
    }
    else if (counter % 5 === 0) {
      console.log(`El numero ${counter} es Buzz`);
    } else {
      console.log(counter);
    }
    counter++
  } while (counter <= limitNumber)
}

fizzBuzz(50);
fizzBuzz(200);