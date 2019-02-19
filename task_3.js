// Заданы два случайных числа
var a = Math.random()*200-100; 
var b = Math.random()*200-100;
// Округляю до целого
a = Math.round(a);
b = Math.round(b);
console.log("Задание 3. \nИнициализировали два числа: \na = "+ a + "\nb = " + b);
// Последовательная проверка условий
if (a >= 0 && b >= 0){
	console.log("a и b неотрицательные "+a+" - "+b+" = " + (a - b) );
}
else if (a < 0 && b < 0){
	console.log("a и b отрицательные "+a+" * ("+b+") = " + (a * b) );
}
else{
	if (b < 0)
		console.log("a и b имеют разные знаки "+a+" + ("+b+") = " + (a + b) );
	else 
		console.log("a и b имеют разные знаки "+a+" + "+b+" = " + (a + b) );
}
