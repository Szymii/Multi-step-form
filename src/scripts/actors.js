import { fromCallback } from "xstate";
import { App } from "./App";
import { loadSection } from "./helpers";

export const loadFirstStep = fromCallback(({ sendBack }) => {
  loadSection(App.personalInfoForm(), "step-one");

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

  const form = App.mainWrapper().querySelector("form");
  form.addEventListener("submit", handler);

  return () => {
    form.removeEventListener("submit", handler);
  };
});

export const loadSecondStep = fromCallback(({ sendBack }) => {
  loadSection(App.selectPlanForm(), "step-two");

  const submitForm = (e) => {
    e.preventDefault();

    sendBack({
      type: "plan.submitted",
    });
  };

  const goBack = (e) => {
    sendBack({
      type: "back",
    });
  };

  const form = App.mainWrapper().querySelector("form");
  form.addEventListener("submit", submitForm);

  const goBackBtn = App.goBackBtn();
  goBackBtn.addEventListener("click", goBack);

  return () => {
    form.removeEventListener("submit", submitForm);
    goBackBtn.removeEventListener("click", goBack);
  };
});

export const loadThirdStep = fromCallback(({ sendBack }) => {
  loadSection(App.pickAddonsForm(), "step-three");

  const submitForm = (e) => {
    e.preventDefault();

    sendBack({
      type: "addons.submitted",
    });
  };

  const goBack = (e) => {
    sendBack({
      type: "back",
    });
  };

  const form = App.mainWrapper().querySelector("form");
  form.addEventListener("submit", submitForm);

  const goBackBtn = App.goBackBtn();
  goBackBtn.addEventListener("click", goBack);

  return () => {
    form.removeEventListener("submit", submitForm);
    goBackBtn.removeEventListener("click", goBack);
  };
});

export const loadForthStep = fromCallback(({ sendBack }) => {
  loadSection(App.finishingUpPage(), "step-four");

  const handler = (e) => {
    sendBack({
      type: "finish.submitted",
    });
  };

  const goBack = (e) => {
    sendBack({
      type: "back",
    });
  };

  const confirm = App.confirmBtn();
  confirm.addEventListener("click", handler);

  const goBackBtn = App.goBackBtn();
  goBackBtn.addEventListener("click", goBack);

  return () => {
    confirm.removeEventListener("click", handler);
    goBackBtn.removeEventListener("click", goBack);
  };
});
