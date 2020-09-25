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
	price: 789,
	inCart: 0
}
];

for (let i=0; i<carts.length; i++) {
	carts[i].addEventListener('click', () => {
			cartNumbers();
	})
}

//keep the data on index page in case of refresh aka sync the data on the index file with the local storage even after refresh
function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');
	
	if(productNumbers) {
		document.querySelector('.cart span').textContent = productNumbers;
	}
}

function cartNumbers() {
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
	
	
}
onLoadCartNumbers();

