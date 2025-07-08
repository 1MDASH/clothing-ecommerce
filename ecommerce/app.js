function addToCart() {
  alert("Added to Cart! (Simulation)");
}

// Optional: Auto-scroll to section (simulate JS enhancements)
document.querySelectorAll("section").forEach(sec => {
  sec.addEventListener("mouseenter", () => {
    sec.scrollIntoView({ behavior: "smooth" });
  });
});

function viewProduct(name, price, image) {
  localStorage.setItem('productName', name);
  localStorage.setItem('productPrice', price);
  localStorage.setItem('productImage', image);
  window.location.href = 'product.html';
}

function loadProduct() {
  const name = localStorage.getItem('productName');
  const price = localStorage.getItem('productPrice');
  const image = localStorage.getItem('productImage');

  if (name && price && image) {
    document.getElementById('product-name').textContent = name;
    document.getElementById('product-price').textContent = `$${price}`;
    document.getElementById('product-image').src = image;
  }
}

function addToCart() {
  alert("Added to cart!");
}

