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

export const fillThirdSection = (input) => {
  const form = App.mainWrapper().querySelector("form");
  const checkboxes = form.querySelectorAll("input[type=checkbox]");

  checkboxes.forEach((checkbox) => {
    if (input.addons.map(({ id }) => id).includes(checkbox.value)) {
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

export const fillSummary = (input) => {
  const summaryWrapper = document.querySelector(".summary-wrapper");
  const summaryPlan = document.querySelector("#summary-plan");
  const summaryPlanPeriod = document.querySelector("#summary-plan-period");
  const summaryPlanPrice = document.querySelector("#summary-plan-price");
  const totalPeriod = document.querySelector("#total-period");
  const totalPrice = document.querySelector("#total-price");

  summaryPlan.innerText = input.plan.name;
  summaryPlanPeriod.innerText = input.yearly ? "Yearly" : "Monthly";
  summaryPlanPrice.innerText = `$${input.plan.value}/${
    input.yearly ? "yr" : "mo"
  }`;

  const summaryPositions = input.addons.map(
    // prettier-ignore
    ({ name, value }) =>`<span>${name}</span><span class="additional-price">+$${input.yearly ? value * 10 : value}/${input.yearly ? "yr" : "mo"}</span>`
  );

  summaryPositions.forEach((summaryPosition) => {
    const element = document.createElement("div");
    element.classList.add("summary-position");
    element.innerHTML = summaryPosition;

    summaryWrapper.append(element);
  });

  const total =
    input.plan.value +
    input.addons.reduce((acc, { value }) => (acc += value), 0);

  totalPeriod.innerText = input.yearly ? "per year" : "per month";
  totalPrice.innerText = `$${input.yearly ? total * 10 : total}/${
    input.yearly ? "yr" : "mo"
  }`;
};
