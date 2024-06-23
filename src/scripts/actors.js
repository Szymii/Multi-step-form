import { fromCallback } from "xstate";
import { Addons, App, Plans } from "./App";
import { getFormData, loadSection } from "./helpers";
import {
  fillFirstSection,
  fillSecondSection,
  fillSummary,
  fillThirdSection,
} from "./fillers";

export const loadFirstStep = fromCallback(({ sendBack, input }) => {
  loadSection(App.personalInfoForm(), "step-one");
  const form = App.mainWrapper().querySelector("form");

  fillFirstSection(input);

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

export const loadSecondStep = fromCallback(({ sendBack, input }) => {
  loadSection(App.selectPlanForm(), "step-two");
  const form = App.mainWrapper().querySelector("form");

  fillSecondSection(input);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = getFormData(form);

    sendBack({
      type: "plan.submitted",
      plan: Plans[formData.plan],
      yearly: !!formData?.yearly,
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

export const loadThirdStep = fromCallback(({ sendBack, input }) => {
  loadSection(App.pickAddonsForm(), "step-three");
  fillThirdSection(input);

  const submitForm = (e) => {
    e.preventDefault();
    const formData = getFormData(form);

    sendBack({
      type: "addons.submitted",
      addons: formData.addons?.map((name) => Addons[name]) || [],
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

export const loadForthStep = fromCallback(({ sendBack, input }) => {
  loadSection(App.finishingUpPage(), "step-four");
  fillSummary(input);

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
