function addToCart(productName, imageName, price) {
    var item = {
      productName: productName,
      imageName: imageName,
      price: price,
      quantity: 1 
    };
  
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
    updateTotal();
  }
  
  