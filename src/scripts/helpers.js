import { App } from "./App";

/**
 * @param {string} itemId
 */
export const setActiveNavItem = (itemId) => {
  const nav = App.nav();
  const navItems = nav.querySelectorAll(".nav-item");
  const navItemForActivation = nav.querySelector(`#${itemId}`);

  navItems.forEach((item) => {
    item.classList.remove("active");
  });

  navItemForActivation?.classList.add("active");
};
