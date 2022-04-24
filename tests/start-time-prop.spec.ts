import { test, expect, Page } from "@playwright/test";

test.describe("disabled options prop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  async function getMainContent(page: Page) {
    return page.$("[data-testid='start-time-prop']");
  }

  async function getStartTimeSelectContent(page: Page) {
    const mainContent = await getMainContent(page);
    return mainContent.$("[data-testid='start-time-select']");
  }

  async function getSelectContent(page: Page) {
    const mainContent = await getMainContent(page);
    return mainContent.$("[data-testid='select']");
  }

  async function getValueContent(page: Page) {
    const mainContent = await getMainContent(page);
    return mainContent.$("[data-testid='value']");
  }

  test("title", async ({ page }) => {
    const mainContent = await getMainContent(page);
    const titleContent = await mainContent.$(
      ".mdc-layout-grid__inner:nth-child(1) h5.mdc-typography"
    );
    expect(await titleContent.innerText()).toBe("Start Time");
  });

  test("startTimeで最初の選択肢を選択できること", async ({ page }) => {
    const selectContent = await getSelectContent(page);
    const valueContent = await getValueContent(page);
    const startTimeSelectContent = await getStartTimeSelectContent(page);

    await selectContent.click();
    await selectContent.press("Enter");
    expect(await valueContent.innerText()).toBe("00:00");

    await startTimeSelectContent.click();
    await page.keyboard.type("10:00");
    await startTimeSelectContent.press("Enter");

    await selectContent.click();
    await selectContent.press("Enter");
    expect(await valueContent.innerText()).toBe("10:00");
  });
});
