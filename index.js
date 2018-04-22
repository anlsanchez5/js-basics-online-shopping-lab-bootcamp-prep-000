var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function Prices() {
  return Math.floor(Math.random() * 100) + 1 
}
function addToCart(item) {
   var items = {itemName: `${item}`,
    itemPrice: Prices()};
    cart.push(items)
    return `${item}` + " has been added to your cart."
}

function viewCart() {
  var element = [];
  if (cart.length === 0) { 
    return "Your shopping cart is empty."}
  else if (cart.length === 1){
      for (var i = 0; i < cart.length; i++) {
        element.push(cart[i].itemName + " at $" + cart[i].itemPrice)
      }
    return "In your cart, you have " + element + '.'
    }
     else { 
      for (i = 0; i < cart.length; i++) {
        element.push(cart[i].itemName + " at $" + cart[i].itemPrice)
        
      }
      var last = element.pop();
    return "In your cart, you have " + element.join(", ") + ", and " + last + "."
  }
}


function total() {
  var element = [];
  var result = 0 ;
 for (var i=0; i< cart.length; i++) {
   element.push(cart[i].itemPrice);
   result += element[i]
 }
 return result
}

function removeFromCart(item) { 
  if(Array.iscart(item)) {
  for (var i = 0; i < cart.length; i++) {
    cart.splice(i,1);
      }}

  else {
  return "That item is not in your cart.";
  }
  
}

function placeOrder(cardNumber) {
  // write your code here
}
