//С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(base,pow){
	if (pow==0) return 1; // любое число в нулевой степени - это 1, к этому и стремимся
	else if (pow > 0) return base*power(base,pow-1);// рекурсия для положительной степени
	else return 1/base*power(base,pow+1);// рекурсия для отрицательной степени
}

var base = parseInt(prompt ("Задание 8. \nВведите основание степени"));
// Введёное значение должно быть числом, проверка
if (!isNaN(base)){
	var pow = parseInt(prompt ("Задание 8. \nВведите показатель степени"));
	// Вторая проверка
	if (!isNaN(pow)){
		alert ("Задание 8. \n"+base+"^("+pow+") = "+power(base,pow));
	}
	else {
		alert("Error");
	}
}
else {
	alert("Error");
}