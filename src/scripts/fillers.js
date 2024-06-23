import { Addons, App, Plans } from "./App";

export const fillFirstSection = (input) => {
  const form = App.mainWrapper().querySelector("form");

  Object.entries(input).forEach(([key]) => {
    form.querySelector(`input[name=${key}]`).value = input[key];
  });
};

export const fillSecondSection = (input) => {
  const form = App.mainWrapper().querySelector("form");

  // set form values
  Object.entries(input).forEach(([key]) => {
    const formField = form.querySelectorAll(`input[name=${key}]`);

    if (formField[0].type === "radio") {
      formField.forEach((radio) => {
        radio.checked = radio.value === input[key];
      });

      return;
    }

    if (formField[0].type === "checkbox") {
      formField[0].checked = input[key];

      return;
    }
  });

  const handler = (e) => {
    Object.entries(Plans).forEach(([name, plan]) => {
      const pricingElement = document.querySelector(`#price-${name}`);
      if (yearly.checked) {
        pricingElement.innerText = `$${plan.value * 10}/yr`;
      } else {
        pricingElement.innerText = `$${plan.value}/mo`;
      }
    });
  };

  const yearly = form.querySelector("input[type=checkbox]");
  yearly.addEventListener("change", handler);

  handler(); // set initial data
};

export const fillThirdPlan = (input) => {
  const form = App.mainWrapper().querySelector("form");
  const checkboxes = form.querySelectorAll("input[type=checkbox]");

  checkboxes.forEach((checkbox) => {
    if (input.addons.map(({ name }) => name).includes(checkbox.value)) {
      checkbox.checked = true;
    }
    const priceElement = checkbox.parentElement.querySelector(".price");

    if (input.yearly) {
      priceElement.innerText = `+$${Addons[checkbox.value].value * 10}/yr`;
    } else {
      priceElement.innerText = `+$${Addons[checkbox.value].value}/mo`;
    }
  });
};
