// Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать общую сумму заказа.

var basket = {
	units: 0,
	products: []
};

var buttons = document.body.querySelectorAll(".button");

for (var i in buttons) {
	
	buttons[i].onclick = dropInBasket;
	
}

function dropInBasket (event) {
	
	var target = event.target;
	
	//Определение имени товара

	while (target != this.parentNode) {
		
		if (target.className == 'product') {
			break;
		}
		
		target = target.parentNode;
		
	}
	
	var productName = target.querySelector(".productName").innerText;
	
	//Добавление товара в объект-корзину
	basket.products[basket.units] = productName;
	basket.units++;

	//Теперь в саму корзину
	var basketInDocument = document.body.querySelector(".basket");
	
	var par = document.createElement('p');
	par.innerText = basket.units + ". " + basket.products[basket.units-1];
	basketInDocument.appendChild(par);
	
	basketInDocument.querySelector("h6").innerText = "Корзина содержит " + basket.units + " товаров:";
	
}