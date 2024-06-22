import { fromCallback } from "xstate";
import { App, Plans } from "./App";
import { getFormData, loadSection } from "./helpers";

export const loadFirstStep = fromCallback(({ sendBack }) => {
  loadSection(App.personalInfoForm(), "step-one");
  const form = App.mainWrapper().querySelector("form");

  const handler = (e) => {
    e.preventDefault();
    const formData = getFormData(form);

    sendBack({
      type: "info.submitted",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    });
  };

  form.addEventListener("submit", handler);

  return () => {
    form.removeEventListener("submit", handler);
  };
});

export const loadSecondStep = fromCallback(({ sendBack }) => {
  loadSection(App.selectPlanForm(), "step-two");
  const form = App.mainWrapper().querySelector("form");

  const submitForm = (e) => {
    e.preventDefault();
    const formData = getFormData(form);

    sendBack({
      type: "plan.submitted",
      plan: Plans[formData.plan],
      monthly: !formData?.monthly,
    });
  };

  const goBack = (e) => {
    sendBack({
      type: "back",
    });
  };

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
