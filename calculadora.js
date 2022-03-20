function calculadora(nun1,nun2)
{
	alert('la suma es ' + (parseInt(nun1) + parseInt(nun2)));
	alert('la resta es ' + (nun1 - nun2));
	alert('la mutiplicacion es ' + (nun1 * nun2));
	alert('la division es ' + (nun1 / nun2));
	alert('la residuo es ' + (nun1 % nun2));
}

let nun1 = prompt("Escoge el primer numero");
let nun2 = prompt("Escoge el segundo numero");
const resultado = calculadora(nun1,nun2);
alert("Hasta luego pesadooo");