  document.addEventListener("DOMContentLoaded", function() {
    var addToCartButton = document.getElementById("addToCartButton");

    addToCartButton.addEventListener("click", function() {
      // Log the Amplitude event with properties
      amplitude.logEvent("Clicked on Add to Cart button", {
        productName: "PREMIUM OFFICE ARMCHAIR",
        price: 200.00,
        quantity: 4
      });
    });
  },
  function redirectToCart() {
    window.location.href = "store.html";
}
  );
