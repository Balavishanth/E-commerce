function addToCart(gameName, price, imageUrl) {
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    cart.push({ name: gameName, price: price, image: imageUrl });
    localStorage.setItem("cartItems", JSON.stringify(cart));
    alert(`${gameName} added to cart!`);
  }
  function goToCartPage() {
    window.location.href = "cart.html";
  }