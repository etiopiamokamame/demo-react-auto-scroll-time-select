import { test, expect, Page } from "@playwright/test";

test.describe("default scroll option value prop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  async function getMainContent(page: Page) {
    return page.$("[data-testid='default-scroll-option-value-prop']");
  }

  async function getDefaultSelectContent(page: Page) {
    const mainContent = await getMainContent(page);
    return mainContent.$("[data-testid='default-select']");
  }

  async function getSelectContent(page: Page) {
    const mainContent = await getMainContent(page);
    return mainContent.$("[data-testid='select']");
  }

  async function getClearSelectContent(page: Page) {
    const selectContent = await getSelectContent(page);
    return selectContent.$(".react-auto-scroll-time-select__clear-value");
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
    expect(await titleContent.innerText()).toBe("Default Scroll Option Value");
  });

  test("defaultScrollOptionValueでデフォルトの候補値を選択できること", async ({
    page,
  }) => {
    const selectContent = await getSelectContent(page);
    const clearSelectContent = await getClearSelectContent(page);
    const valueContent = await getValueContent(page);
    const defaultSelectContent = await getDefaultSelectContent(page);

    await selectContent.click();
    await selectContent.press("Enter");
    expect(await valueContent.innerText()).toBe("");

    await clearSelectContent.click();
    await defaultSelectContent.click();
    await page.keyboard.type("15:30");
    await defaultSelectContent.press("Enter");

    await selectContent.click();
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("15:30");

    await clearSelectContent.click();
    await page.keyboard.type("aaa");
    await selectContent.press("Tab");

    expect(await valueContent.innerText()).toBe("");
  });
});
