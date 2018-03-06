var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
  var shopCart=new Object()
  var itemPrice=Math.floor(Math.random()*Math.floor(100))
  shopCart[itemName]=itemPrice
  cart.push(shopCart)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  // write your code here
  var shopCart={}
  var cartHold=[]
  var len=cart.length
  var middle
  //var message

  if (len===0){
    console.log("Your shopping cart is empty.")
  }

  else {
    //cartHold.push("In your cart, you have")
    for (let n=0;n<len;n++){
      shopCart=cart[n]

      //1 item cart
      if (len===1){
        cartHold.push(`${Object.keys(shopCart)} at $${Object.values(shopCart)}`)
      }

      //2 item cart
      else if (len===2){
        cartHold.push(`${Object.keys(shopCart)} at $${Object.values(shopCart)}`)
        if (n===0){
          cartHold.push("and")
        }
      }

      //3+ item cart
      else if (len>2){
        if (n<len-1){
          cartHold.push(`${Object.keys(shopCart)} at $${Object.values(shopCart)},`)
        }
        else if (n===len-1){
          cartHold.push(`and ${Object.keys(shopCart)} at $${Object.values(shopCart)}`)
        }
      }

/*    //Alternative method that didn't work
      cartHold.push(`${Object.keys(shopCart)} at $${Object.values(shopCart)}`)

      //3 items in cart
      if (len>2&&n<len-1){
        cartHold.push(",")

      if (n===len-2){
        cartHold.push("and")
      }

      //2 item cart
      if (len===2&&n===0){
        cartHold.push("and")
      }
*/
    }
  }
  console.log("In your cart, you have "+cartHold.join(" ")+".")
  //return "In your cart, you have "+cartHold
}

function total() {
  // write your code here
  var shopCart={}
  var totalPrice=0

  for (var n=0;n<cart.length;n++){
    shopCart=cart[n]
    totalPrice+=parseInt(Object.values(shopCart),10)
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  var shopCart={}

  
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber===null){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
