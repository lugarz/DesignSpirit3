let carts = document.querySelectorAll('.add-cart');

let products = [
{
	name: "AK-47 Legion of Anubis",
	tag: "akanubis",
	price: 530,
	inCart: 0
},
{
	name: "M4A4 Howl",
	tag: "m4howl",
	price: 1000,
	inCart: 0
},
{
	name: "Nomad Knife Fade",
	tag: "nomadfade",
	price: 2000,
	inCart: 0
},
{
	name: "M4A4 Tooth Fairy",
	tag: "m4toothfairy",
	price: 40,
	inCart: 0
},
{
	name: "Glock-18 Vogue",
	tag: "glockvogue",
	price: 72,
	inCart: 0
},
{
	name: "AK-47 Aquamarine",
	tag: "akaquamarine",
	price: 780,
	inCart: 0
}
];

for (let i=0; i<carts.length; i++) {
	carts[i].addEventListener('click', () => {
			cartNumbers(products[i]); // to know which product that is clicked
			totalCost(products[i]); // total Cost
	})
}

//keep the data on index page in case of refresh aka sync the data on the index file with the local storage even after refresh
function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');
	
	if(productNumbers) {
		document.querySelector('.cart span').textContent = productNumbers;
	}
}

function cartNumbers(product) {
	
	let productNumbers = localStorage.getItem('cartNumbers');
	
	productNumbers = parseInt(productNumbers);  // Change result from string to integer
	
	
	// Allow the cart to be able to increment instead of just 1
	if (productNumbers) {
			localStorage.setItem('cartNumbers', productNumbers +1);
			document.querySelector('.cart span').textContent = productNumbers +1;  //update the cart data to the cart symbol on index page
	} else {
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.cart span').textContent = 1;
	}
	
	setItems(product);
}

function setItems(product) {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	
	if(cartItems != null) {  //when cart is 0, else gonna make any click become 1
		
		if(cartItems[product.tag] == undefined) {  //allow users to click multiple items instead of error when switch to different items
			cartItems = { //when the items is undefined, update the new product
				...cartItems,
				[product.tag]: product
			}
		}
		cartItems [product.tag].inCart += 1;
	} 
	else {
		product.inCart = 1;
	
		cartItems = {
			[product.tag]: product
	}

	}
	
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));//update the items' data to the local storage
}

function totalCost(product) {
	
	let cartCost = localStorage.getItem('totalCost');
	
	if (cartCost != null) {
		cartCost = parseInt(cartCost); //convert string into number
		localStorage.setItem("totalCost", cartCost + product.price);
	} else {
	
	localStorage.setItem("totalCost", product.price);
	
	}
}
	
	function displayCart() {
		let cartItems = localStorage.getItem("productsInCart");
		cartItems = JSON.parse(cartItems);
		let productContainer = document.querySelector(".products");
	
		if(cartItems && productContainer) {
			
			productContainer.innerHTML = '';
			Object.values(cartItems).map(item => {  //avoid items to overlap
				productContainer.innerHTML += `
				<div class="product">
					<ion-icon name="close-circle"></ion-icon>
					
					<span>${item.name}</span>
				</div>
				<div class="cartPrice"> ${item.price}</div>
				<div class="quantity">
					<span> ${item.inCart}</span>
				</div>
				<div class="total">
					${item.inCart *item.price}
				</div>
				
				`
			})
			
			
		}
	}


onLoadCartNumbers();
displayCart();
