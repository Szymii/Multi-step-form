import { assign, createActor, setup } from "xstate";
import { App, Plans } from "./App";
import {
  loadFirstStep,
  loadSecondStep,
  loadThirdStep,
  loadForthStep,
} from "./actors";
import { loadSection } from "./helpers";

export const formMachine = setup({
  actors: {
    loadFirstStep,
    loadSecondStep,
    loadThirdStep,
    loadForthStep,
  },
}).createMachine({
  id: "form-state",
  // initial: "personalInfo",
  initial: "plan",
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
        src: "loadFirstStep",
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
      invoke: {
        id: "secondStep",
        src: "loadSecondStep",
      },
      on: {
        back: {
          target: "personalInfo",
        },
        "plan.submitted": {
          target: "addons",
          // actions: assign({
          //   plan: ({ event }) => event.plan,
          //   monthly: ({ event }) => event.monthly,
          // }),
        },
      },
    },
    addons: {
      invoke: {
        id: "secondThird",
        src: "loadThirdStep",
      },
      on: {
        back: {
          target: "plan",
        },
        "addons.submitted": {
          target: "finish",
          // actions: assign({
          //   addons: ({ event }) => event.addons,
          // }),
        },
      },
    },
    finish: {
      invoke: {
        id: "secondForth",
        src: "loadForthStep",
      },
      on: {
        back: {
          target: "addons",
        },
        "finish.submitted": {
          target: "thanks",
          actions: () => {
            loadSection(App.thankYouPage(), "step-four");
          },
        },
      },
    },
    thanks: {
      type: "final",
    },
  },
});

export const formActor = createActor(formMachine);
