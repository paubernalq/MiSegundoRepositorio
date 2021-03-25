//Sesión 3 con javaScript

//------------------Operadores aritméticos-------
// + adición
// - sustracción
// * multiplicación
// / división
// ** exponenciación
// % modulo (Resto)
// ++ incremento
// -- decremento

//Aición y sustracción
var operandoN1 = 6;
var operandoN2 = 3;
var resultado = operandoN1 + operandoN2;

//Operador *
var operandoN3 = 12;
var operandoN4 = 2;
var resultado2 = operandoN3 * operandoN4;


//Operador /
var resultado3 = operandoN1 / operandoN2;
console.log( "el resultado de tu división es: " + resultado3 );

//Operador ++
resultado3++;
console.log( "Incrementando la variable resultado3: " + resultado3 );


//---------Operadores de asignación-------
//Operador=
operandoN1 = operandoN2;
console.log( operandoN1 );

//Operador +=

//Forma completa
//operandoN3 = operandoN3 + operandoN4;

//Forma resumida
operandoN3 += operandoN4;
console.log( operandoN3 );

//-------Operadores de Comparación----

//Igual que ==
//Igual valor e igual tipo ===
//Diferente que !=
//Diferetne valor o diferente tipo !==

var nComparacion1 = 10;
var nComparacion2 = 5;
var resultadoComparacion = ( nComparacion1 == nComparacion2 );
console.log(resultadoComparacion);



//-------Operadores lógicos----

//Se utilizan para determinar la lógica entre variables
//o valores

var oplN1 = 5;
var oplN2 = 50;
var oplN3 = 30;

//Operador && ("AND" o "Y")
//     && "y" Valor1&&Valor2
//se deben de cumplir ambas condiciones para dar true
//deben de fallar ambas condiciones para dar false
var resultadoOplY = ( oplN1 < oplN2 ) && ( oplN2 < oplN3 );
console.log( "El resultado del operador AND, es:" + resultadoOplY );

//Resultado operador &&
//true && true --> true
//false && false --> false
//false && true --> false
//true && false --> false



//Operador || ("O" o "OR") 
//     || "o" Valor 1||Valor2
//solo se debe de cumplir una condicion para dar true
//solo debe fallar una condición para dar false
var resultadoOplO = ( oplN1 < oplN2 ) || ( oplN2 < oplN3 );
console.log( "El resultado del operador OR es: " + resultadoOplO );

//Resultado operador ||
// true || true --> true
//true || false --> true
//false || true --> true
//false || false --> false


//Operador ! (Negación)
//  !(Valor)
// si es true cambia a flase
//si es false cambia a true

var resultadoOplN = !resultadoOplO;
console.log( "El resultado del operador Negación es: " + resultadoOplN );


