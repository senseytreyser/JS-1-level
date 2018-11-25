// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation){
	switch (operation){
		case "+": return getSum(arg1, arg2);
		case "-": return getDif(arg1, arg2);
		case "*": return getMult(arg1, arg2);
		case "/": return getRatio(arg1, arg2);
		default: return "Error";		
	}
}

// Проверка работоспособности функции

var arg1 = parseInt(prompt ("Введите первое число"));
// Введёное значение должно быть числом, проверка
if (!isNaN(arg1)){
	var arg2 = parseInt(prompt ("Введите второе число"));
	// Вторая проверка
	if (!isNaN(arg2)){
		var operation = (prompt ("Введите символ математической операции (+ - * /)"));
		alert (mathOperation(arg1, arg2, operation));
	}
	else {
		alert("Error");
	}
}
else {
	alert("Error");
}