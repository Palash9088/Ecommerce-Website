document.addEventListener("DOMContentLoaded", function() {
    var singleProductLink = document.querySelector(".nav-link");

    singleProductLink.addEventListener("click", function(event) {
      // Prevent the default link behavior (e.g., navigating to a new page)
      event.preventDefault();

      // Log the Amplitude event with properties
      amplitude.getInstance().logEvent("Clicked Single Product Link", {
        // Add any properties you want to log here
        page: "singleproduct.html",
        linkText: "Single Product"
      });

      // Now, navigate to the destination page
      window.location.href = singleProductLink.href;
    });
  });

