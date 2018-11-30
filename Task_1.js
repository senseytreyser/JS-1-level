//С помощью цикла while вывести все простые числа в промежутке от 0 до 100

var i, j, simple=[];
for (i = 1; i<=100; i++){
	var ind = true;
	for (j=1;j < simple.length; j++){
		if (i==1){
			simple.push(1);
		}
		else if (i%simple[j]==0){
			ind = false;
			break;
		}
	}
	if (ind) simple.push(i);
}
console.log(simple);