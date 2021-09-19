//PREGUNTA 1:
//Hay dos equipos de gimnasia, Ricks y Mortys. Compiten entre ellos 3 veces. ¡El
//ganador con la puntuación promedio más alta gana un pase de aventura!
//Tus tareas:
//1. Calcule el puntaje promedio de cada equipo, utilizando los datos de prueba
//proporcionados al final del enunciado.

//2. Compare los puntajes promedio del equipo para determinar el ganador de la
//competencia, e imprimirlo en la consola. No olvides que puede haber un
//empate, así que toma en cuenta ese caso también.

//3. Incluya el requisito de una puntuación mínima de 100. Con esta regla el equipo
//solo gana si tiene una puntuación más alta que el otro equipo, y además tiene
//una puntuación de al menos 100 puntos.

//4. ¡La puntuación mínima también se aplica a un empate! Entonces, un empate
//solo ocurre cuando ambos equipos tienen la misma puntuación y ambos tienen
//una puntuación mayor o igual a 100 puntos. De lo contrario, ningún equipo
//gana el premio.

//5. Cree una arrow function 'calcAverage' para calcular el promedio de 3
//puntuaciones


    // const calcAverage = (P1, P2, P3) => {
    // return (P1 + P2 + P3) /3;
    // const total = calcAverage (P1 + P2, P3);
    //     return calcAverage;
    // };
    // console.log(calcAverage(96, 108, 89));


//6. Usa la función para calcular el promedio de ambos equipos.

const calcAverage = (P1, P2, P3) => {
    return (P1 + P2 + P3) /3;
   
    };
    console.log(`El promedio del equipo los Ricks es: ${calcAverage(96, 108, 89)}`);
    console.log(`El promedio del equipo los Mortys es: ${calcAverage(88, 91, 110)}`);

   
//7. Cree una función 'checkWinner' que tome la puntuación media de cada equipo.
//como parámetros ('avgRIcks' y 'avgMortys'), y luego muestre el ganador, junto
//con los puntajes, de acuerdo con la regla anterior. Ejemplo: "Los koalas ganan
//(30 contra 13)"
//8. Utilice la función 'checkWinner' para determinar el ganador para los datos 1 y
//Datos 2

//DATOS DE PRUEBA
//DATOS 1
// const avgRIcks = calcAverage(96,108,89);
// const avgMortys = calcAverage(88,91,110);

// //DATOS 2
// const avgRIcks = calcAverage(97,112,101);
// const avgMortys = calcAverage(109,95,123);

// //DATOS 3
const avgRIcks = calcAverage(97,112,101);
const avgMortys = calcAverage(109,95,106);


 if (avgRIcks === 100 && avgMortys === 100) {
        console.log(`Ambos equipos tienen un empate con los puntajes mínimo de 100 contra 100`);
 }
    else if (avgRIcks > avgMortys && avgRIcks >= 100) {
        console.log(`Los RIcks ganan  ${avgRIcks} contra ${avgMortys}`);
     }      else if (avgMortys > avgRIcks && avgMortys >= 100 ) {
                console.log(`Los Mortys ganan ${avgMortys} contra ${avgRIcks}`);
    } else if (avgRIcks > 100 && avgMortys > 100 && avgRIcks === avgMortys){
        console.log(`Los RIcks y los Mortys tienen un empate de ${avgRIcks} igual a ${avgMortys}`);
    }
    else{
        console.log(`Ninguno de los equipos puede llevarse el premio porque tienen puntajes menores a 100, los RIcks tienen ${avgRIcks} y los Mortys tienen ${avgMortys}`);
    }


