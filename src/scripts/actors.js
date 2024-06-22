import { fromCallback } from "xstate";
import { App } from "./App";

export const loadFirstStep = fromCallback(({ sendBack }) => {
  const wrapper = App.mainWrapper();
  const clone = App.personalInfoForm().content.cloneNode(true);
  wrapper.replaceChildren(clone);

  const handler = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const formDataObj = {};

    for (const [key, value] of formData) {
      formDataObj[key] = value;
    }

    sendBack({
      type: "info.submitted",
      name: formDataObj.name,
      email: formDataObj.email,
      phone: formDataObj.phone,
    });
  };

  const form = wrapper.querySelector("form");
  form.addEventListener("submit", handler);

  return () => {
    form.removeEventListener("submit", handler);
  };
});

export const loadSecondStep = fromCallback(({ sendBack }) => {
  const wrapper = App.mainWrapper();
  const clone = App.selectPlanForm().content.cloneNode(true);
  wrapper.replaceChildren(clone);

  const handler = (e) => {
    e.preventDefault();
    // const formData = new FormData(form);
    // const formDataObj = {};

    // for (const [key, value] of formData) {
    //   formDataObj[key] = value;
    // }

    sendBack({
      type: "plan.submitted",
    });
  };

  const form = wrapper.querySelector("form");
  form.addEventListener("submit", handler);

  return () => {
    form.removeEventListener("submit", handler);
  };
});

export const loadThirdStep = fromCallback(({ sendBack }) => {
  const wrapper = App.mainWrapper();
  const clone = App.pickAddonsForm().content.cloneNode(true);
  wrapper.replaceChildren(clone);

  const handler = (e) => {
    e.preventDefault();
    // const formData = new FormData(form);
    // const formDataObj = {};

    // for (const [key, value] of formData) {
    //   formDataObj[key] = value;
    // }

    sendBack({
      type: "addons.submitted",
    });
  };

  const form = wrapper.querySelector("form");
  form.addEventListener("submit", handler);

  return () => {
    form.removeEventListener("submit", handler);
  };
});

export const loadForthStep = fromCallback(({ sendBack }) => {
  const wrapper = App.mainWrapper();
  const clone = App.finishingUpPage().content.cloneNode(true);
  wrapper.replaceChildren(clone);

  const handler = (e) => {
    sendBack({
      type: "finish.submitted",
    });
  };
});
