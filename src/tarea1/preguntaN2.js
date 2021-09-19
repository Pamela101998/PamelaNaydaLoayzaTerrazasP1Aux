// PREGUNTA 2:
// Se desea construir una calculadora de propinas muy simple para cada vez que vaya a
// comer en un restaurante. Supongamos que, en su país, es habitual dar una propina
// del 15% si el valor de la factura está entre 50 y 300. Si el valor es diferente, la propina
// es del 20%.
// Sus tareas:
// Parte 1
// 1. Calcule la propina, dependiendo del valor de la factura. Cree una variable
// llamada ‘tip' para esto. No está permitido usar una declaración if / else
       
           //SOLUCIÓN

const fac = 275;
    if (fac >= 50 && fac <= 300) {
        const tip = fac * 0.15;
        console.log(tip);
    }
    else{ console.log(tip);
        const tip = fac * 0.2;
        console.log(tip);
    }
 

// 2. Imprima una cadena en la consola que contenga el valor de la fac, la
// propina y el valor final. (fac + propina). Ejemplo: "La fac fue 275, la
// propina fue 41,25 y el valor total 316.25 "

          //SOLUCIÓN

if (fac >= 50 && fac <= 300) {
    const tip = fac * 0.15;
    console.log (`LA FACTURA FUE DE ${fac}, LA PROPINA FUE DE ${tip} Y EL VALOR TOTAL ES DE ${fac + tip}`);
}
else{ console.log(tip);
    const tip = fac * 0.2;
    console.log (`LA FACTURA FUE DE ${fac}, LA PROPINA FUE DE ${tip} Y EL VALOR TOTAL ES DE ${fac + tip}`);
}

// 3. Escriba una arrow function 'calcTip' que tome un valor de factura como entrada
// y devuelva la propina correspondiente, calculada según las reglas anteriores.

          //SOLUCIÓN
 
const calcTip = (factura) => {
    if (factura >= 50 && factura <= 300) {
        const tip = factura * 0.15;
        console.log(`LA PROPINA QUE CORRESPONDE A ESTA FACTURA ES DE ${tip}, ES DECIR QUE LA PROPINA FUE DEL 15%`);
    }
    else{ 
        const tip = factura * 0.2;
        console.log(`LA PROPINA QUE CORRESPONDE A ESTA FACTURA ES DE ${tip}, ES DECIR QUE LA PROPINA FUE DEL 20%`);
    }
  };

  calcTip(200);
  
// Datos de prueba para la parte 1:
// Factura 1: 120
// Factura 2: 200
// Factura 3: 275

// Parte 2 
// 4. Cree un array de facturas ‘bills’ que contenga los datos de prueba.

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 5. Cree arrays vacíos para las propinas y los totales (‘tips' y 'totals')

const tips = [ ];
const totals = [ ];

// 6. Utilice la función 'calcTip' que escribimos antes para calcular propinas y valores
// totales (factura + propina) para cada valor de factura en la matriz de facturas y
// almacénelos en los arrays correspondientes.

// for (let i = 0; i < bills.length; i++) {
//     tips = calcTip(bills[i]);  
   
//   }
//   console.log(tips);

// 7. Cree una función para calcular el promedio de cualquier array que se le pase
// como argumento y úselo para calcular el promedio de los tres arrays que tiene
// (‘bills’, ‘tips’ y ‘totals’)




// Datos de prueba para la parte 2:
// bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]