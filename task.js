//Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

function createChessBoard() {
	
	var back = document.createElement("div");
	back.id = "back";
	back.style.width = "600px";
	back.style.height = "600px";
	back.style.background = "red";
	back.style.margin = "0 auto";
	document.body.appendChild(back); 

	var cell = document.createElement("div");
	cell.style.display = "inline-block";
	cell.style.background = "white";
	cell.style.width = "60px";
	cell.style.height = "60px";
	cell.style.margin = "0 auto";
	cell.style.verticalAlign = "middle";
	cell.style.textAlign = "center";

	for (var i = 0; i < 10; i++) {
		
		for (var j = 0; j < 10; j++) {
			
			var thisCell = cell.cloneNode(true);
			
			// Чёрные ячейки
			if ( i != 0 && i != 9 && j != 0 && j != 9 ){
				
				if ( (i+j)%2 == 1  )
				thisCell.style.background = "gray";
				
				thisCell.className = "cell cell_"+j+"_"+(9-i);
				
			}
			
			// Буквы первой строки
			if ( i == 0 && j != 0 && j != 9 ){
				
				thisCell.innerHTML = "<p> &#"+(64+j)+"; </p>"; 
				thisCell.style.transform = "rotate(180deg)";
				
			}
			
			// Буквы последней строки
			if ( i == 9 && j != 0 && j != 9 ){
				
				thisCell.innerHTML = "<p> &#"+(64+j)+"; </p>"; 
				
			}
			
			// Числа слева
			if ( j == 0 && i != 0 && i != 9 ){
				
				thisCell.innerHTML = "<p> "+ (9-i)+" </p>"; 
				
			}
			
			// Числа справа
			if ( j == 9 && i != 0 && i != 9 ){
				
				thisCell.innerHTML = "<p> "+ (9-i)+" </p>"; 
				thisCell.style.transform = "rotate(180deg)";
				
			}
				
			back.appendChild(thisCell); 
			
		}
		
	}
}

function installFigures() {
	
	var needCell;
	
	for (var i = 8; i > 0; i-- ){
		
		for (var j = 1; j < 9; j++ ){
			
			needCell = back.querySelector( ".cell_"+j+"_"+i);
			needCell.style.fontSize = "40px";
			
			if ( i == 1){
				
				switch (j) {
					
					case 1: 
						needCell.innerHTML = "<p> &#9820; </p>";
						break;
					case 2: 
						needCell.innerHTML = "<p> &#9822; </p>";
						break;
					case 3: 
						needCell.innerHTML = "<p> &#9821; </p>";
						break;
					case 4: 
						needCell.innerHTML = "<p> &#9819; </p>";
						break;
					case 5: 
						needCell.innerHTML = "<p> &#9818; </p>";
						break;
					case 6:
						needCell.innerHTML = "<p> &#9821; </p>";
						break;
					case 7: 
						needCell.innerHTML = "<p> &#9822; </p>";
						break;
					case 8: 
						needCell.innerHTML = "<p> &#9820; </p>";
						break;
					
				}
				
			}
			
			if ( i == 2 ){
				
				needCell.innerHTML = "<p> &#9823; </p>";
				
			}
			
			if ( i == 7 ){
				
				needCell.innerHTML = "<p> &#9817; </p>";
				
			}
			
			if ( i == 8){
				
				switch (j) {
					
					case 1: 
						needCell.innerHTML = "<p> &#9814; </p>";
						break;
					case 2: 
						needCell.innerHTML = "<p> &#9816; </p>";
						break;
					case 3: 
						needCell.innerHTML = "<p> &#9815; </p>";
						break;
					case 4: 
						needCell.innerHTML = "<p> &#9813; </p>";
						break;
					case 5: 
						needCell.innerHTML = "<p> &#9812; </p>";
						break;
					case 6:
						needCell.innerHTML = "<p> &#9815; </p>";
						break;
					case 7: 
						needCell.innerHTML = "<p> &#9816; </p>";
						break;
					case 8: 
						needCell.innerHTML = "<p> &#9814; </p>";
						break;
					
				}
			
			}
			
		}
		
	}
	
}

createChessBoard();
installFigures() 