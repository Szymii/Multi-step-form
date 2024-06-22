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

/**
 * @param {HTMLElement} template
 * @param {string} navId
 */
export const loadSection = (template, navId) => {
  const wrapper = App.mainWrapper();
  const clone = template.content.cloneNode(true);
  wrapper.replaceChildren(clone);
  setActiveNavItem(navId);
};

/**
 * @param {HTMLFormElement} form
 */
export const getFormData = (form) => {
  const formData = new FormData(form);
  const formDataObj = {};

  for (const [key, value] of formData) {
    formDataObj[key] = value;
  }

  return formDataObj;
};
