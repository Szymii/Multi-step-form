/**
 * @namespace App
 * @property {Function} nav
 * @property {Function} mainWrapper
 * @property {Function} goBackBtn
 * @property {Function} goNextBtn
 * @property {Function} confirmBtn
 * @property {Function} personalInfoForm
 * @property {Function} selectPlanForm
 * @property {Function} pickAddonsForm
 * @property {Function} finishingUpForm
 * @property {Function} thankYouPage
 */
export const App = {
  /**
   * @returns {HTMLElement}
   */
  nav: () => document.querySelector("nav"),

  /**
   * @returns {HTMLElement}
   */
  mainWrapper: () => document.querySelector(".main-wrapper"),

  /**
   * @returns {HTMLButtonElement}
   */
  goBackBtn: () => document.querySelector(".go-back-btn"),

  /**
   * @returns {HTMLButtonElement}
   */
  goNextBtn: () => document.querySelector(".go-next-btn"),

  /**
   * @returns {HTMLButtonElement}
   */
  confirmBtn: () => document.querySelector(".confirm-btn"),

  /**
   * @returns {HTMLFormElement}
   */
  personalInfoForm: () => document.querySelector("#personal-info-form"),

  /**
   * @returns {HTMLFormElement}
   */
  selectPlanForm: () => document.querySelector("#select-plan-form"),

  /**
   * @returns {HTMLFormElement}
   */
  pickAddonsForm: () => document.querySelector("#pick-addons-form"),

  /**
   * @returns {HTMLFormElement}
   */
  finishingUpPage: () => document.querySelector("#finishing-up"),

  /**
   * @returns {HTMLFormElement}
   */
  thankYouPage: () => document.querySelector("#thank-you"),
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
