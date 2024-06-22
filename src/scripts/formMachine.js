import { assign, createActor, fromCallback, setup } from "xstate";
import { App, Plans } from "./App";

export const formMachine = setup({
  actors: {
    loadStep: fromCallback(({ input, self }) => {
      const clone = input.template.content.cloneNode(true);
      input.loadTo.replaceChildren(clone);

      const handler = (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        for (const [key, value] of formData) {
          console.log({ key, value });
        }
      };

      const form = input.loadTo.querySelector("form");
      form.addEventListener("submit", handler);

      return () => {
        form.removeEventListener("submit", handler);
      };
    }),
  },
}).createMachine({
  id: "form-state",
  initial: "personalInfo",
  context: {
    name: "",
    email: "",
    phone: "",
    plan: Plans.arcade,
    monthly: true,
    addons: [],
  },
  states: {
    personalInfo: {
      invoke: {
        id: "firstStep",
        src: "loadStep",
        input: {
          template: App.personalInfoForm,
          loadTo: App.mainWrapper,
        },
      },
      on: {
        "info.submitted": {
          target: "plan",
          actions: assign({
            name: ({ event }) => event.name,
            email: ({ event }) => event.email,
            phone: ({ event }) => event.phone,
          }),
        },
      },
    },
    plan: {
      on: {
        "plan.submitted": {
          target: "addons",
          actions: assign({
            plan: ({ event }) => event.plan,
            monthly: ({ event }) => event.monthly,
          }),
        },
      },
    },
    addons: {
      on: {
        "addons.submitted": {
          target: "finish",
          actions: assign({
            addons: ({ event }) => event.addons,
          }),
        },
      },
    },
    finish: {
      on: {
        "finish.submitted": {
          target: "thanks",
        },
      },
    },
    thanks: {
      type: "final",
    },
  },
});

export const formActor = createActor(formMachine);
