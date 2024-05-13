const { test, expect } = require("@playwright/test");
const { email, password, incorrectEmail } = require("../user.js");

test.beforeEach(async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
});

test.afterEach(async ({ browser }) => {
  await browser.close();
});

test.describe("authorization tests", () => {
  test("successful authorization", async ({ page }) => {
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill(email);
    await page.getByPlaceholder("Пароль").click();
    await page.getByPlaceholder("Пароль").fill(password);
    await page.getByTestId("login-submit-btn").click();
    await expect(page).toHaveURL("https://netology.ru/profile");
    await expect(page.getByRole("h2")).toHaveText("Моё обучение");
  });

  test("unsuccessful authorization with incorrect email", async ({ page }) => {
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill(incorrectEmail);
    await page.getByPlaceholder("Пароль").click();
    await page.getByPlaceholder("Пароль").fill(password);
    await page.getByTestId("login-submit-btn").click();
    await expect(page.getByTestId("login-error-hint")).toHaveText("Вы ввели неправильно логин или пароль");
  });
});
