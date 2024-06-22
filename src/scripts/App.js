/**
 * @namespace App
 * @property {HTMLElement} nav
 * @property {HTMLElement} mainWrapper
 * @property {HTMLElement} goBackBtn
 * @property {HTMLElement} goNextBtn
 * @property {HTMLElement} confirmBtn
 * @property {HTMLFormElement} personalInfoForm
 * @property {HTMLFormElement} selectPlanForm
 * @property {HTMLFormElement} pickAddonsForm
 * @property {HTMLFormElement} finishingUpForm
 */
export const App = {
  nav: document.querySelector("nav"),
  mainWrapper: document.querySelector(".main-wrapper"),
  goBackBtn: document.querySelector(".go-back-btn"),
  goNextBtn: document.querySelector(".go-next-btn"),
  confirmBtn: document.querySelector(".confirm-btn"),
  personalInfoForm: document.querySelector("#personal-info-form"),
  selectPlanForm: document.querySelector("#select-plan-form"),
  pickAddonsForm: document.querySelector("#pick-addons-form"),
  finishingUpForm: document.querySelector("#finishing-up-form"),
};

/**
 * @namespace Plans
 * @property {Object} arcade
 * @property {string} arcade.name
 * @property {number} arcade.value
 * @property {Object} advanced
 * @property {string} advanced.name
 * @property {number} advanced.value
 * @property {Object} pro
 * @property {string} pro.name
 * @property {number} pro.value
 */
export const Plans = {
  arcade: {
    name: "arcade",
    value: 9,
  },
  advanced: {
    name: "advanced",
    value: 12,
  },
  pro: {
    name: "pro",
    value: 15,
  },
};

/**
 * @namespace Addons
 * @property {Object} service
 * @property {string} service.name
 * @property {number} service.value
 * @property {Object} storage
 * @property {string} storage.name
 * @property {number} storage.value
 * @property {Object} profile
 * @property {string} profile.name
 * @property {number} profile.value
 */
export const Addons = {
  service: {
    name: "service",
    value: 1,
  },
  storage: {
    name: "storage",
    value: 2,
  },
  profile: {
    name: "profile",
    value: 2,
  },
};
