// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function createObjeckFromString(str) {
	
	var partsNumber = { };
	
	if ( str === String( parseInt(str) ) ) {
		
		switch (str.length){
			
			case 1:
				partsNumber.units = str[0];
				break;
			case 2:
				partsNumber.tens = str[0];
				partsNumber.units = str[1];
				break;
			case 3:
				partsNumber.hundreds = str[0];
				partsNumber.tens = str[1];
				partsNumber.units = str[2];
				break;

		}
		
		return partsNumber;
	
	}
	else {
		
		return partsNumber;
	
	}
}


var strNumber = prompt("Введите любое число от 0 до 999");

console.log( createObjeckFromString( strNumber ) );