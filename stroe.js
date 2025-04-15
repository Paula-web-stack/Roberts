// store.js

// Pagaidām tikai poga klikšķa efekti un ziņa
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".donate-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Paldies par vēlmi ziedot! Maksājumu sistēma tiks pievienota drīzumā.");
      
      // Šeit nākotnē var pievienot Stripe vai citu maksājumu funkciju
      // piemēram:
      // redirectToStripe(tierId);
    });
  });
});
