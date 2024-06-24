import { test, expect } from "@playwright/test";

test("Go through all steps", async ({ page }) => {
  await page.goto("https://szymii.github.io/Multi-step-form/");

  // first step
  await expect(page.getByRole("heading", { name: "Personal info" })).toBeVisible();

  // should have active nav tab
  expect(await page.locator("#step-one").getAttribute("class")).toContain("active");

  // fill form
  await page.getByLabel("Name").fill("Szymon");
  await page.getByLabel("Email Address").fill("szymon@example.com");
  await page.getByLabel("Phone Number").fill("111 111 111");

  // go to next step
  await page.getByRole("button", { name: "Next step" }).click();

  // second step
  await expect(page.getByRole("heading", { name: "Select your plan" })).toBeVisible();
  expect(await page.locator("#step-two").getAttribute("class")).toContain("active");
  await page.getByRole("button", { name: "Next step" }).click();

  // third step
  await expect(page.getByRole("heading", { name: "Pick add-ons" })).toBeVisible();
  expect(await page.locator("#step-three").getAttribute("class")).toContain("active");
  await page.getByRole("button", { name: "Next step" }).click();

  // forth step
  await expect(page.getByRole("heading", { name: "Finishing up" })).toBeVisible();
  expect(await page.locator("#step-four").getAttribute("class")).toContain("active");
  await page.getByRole("button", { name: "Confirm" }).click();

  //thank you page
  await expect(page.getByRole("heading", { name: "Thank you!" })).toBeVisible();
  expect(await page.locator("#step-four").getAttribute("class")).toContain("active");
});
