import { removeClass } from "./utils-class";

const cart = ["1", "2", "3"];
localStorage.setItem("cart", JSON.stringify(cart));

const shoppingCart = document.getElementById("shopping-cart");

if (shoppingCart) {
  const headerCart = document.getElementById("header-cart");
  const buttons = shoppingCart.querySelectorAll("button[data-delete-item]");

  for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    const id = button.attributes["data-delete-item"].value;

    button.addEventListener("click", function () {
      shoppingCart.querySelector(`div[data-row='${id}']`).remove();

      const CART =
        localStorage.getItem("cart") &&
        JSON.parse(localStorage.getItem("cart"));

      const found = CART.indexOf(id);
      if (found > -1) {
        CART.splice(found, 1);
        localStorage.setItem("cart", JSON.stringify(CART));
      }

      if (CART.length === 0) {
        removeClass(headerCart, "cart-filled");
        removeClass(document.getElementById("cart-empty"), "hidden");
      }
    });
  }
}
