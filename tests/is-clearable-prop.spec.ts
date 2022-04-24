import { test, expect, Page } from "@playwright/test";

test.describe("is clearable prop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  async function getMainContent(page: Page) {
    return page.$("[data-testid='is-clearable-prop']");
  }

  async function getUnclearableContent(page: Page) {
    const mainContent = await getMainContent(page);
    return mainContent.$("[data-testid='unclearable']");
  }

  async function getSelectContent(page: Page) {
    const mainContent = await getMainContent(page);
    return mainContent.$("[data-testid='select']");
  }

  async function getClearSelectContent(page: Page) {
    const mainContent = await getMainContent(page);
    return mainContent.$(
      "[data-testid='select'] > div > div > div:nth-child(2)"
    );
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
    expect(await titleContent.innerText()).toBe("Is Clearable");
  });

  test("isClearableのoptionで値クリア機能のon/offができること", async ({
    page,
  }) => {
    const selectContent = await getSelectContent(page);
    const valueContent = await getValueContent(page);
    const unclearableContent = await getUnclearableContent(page);
    const clearSelectContent = await getClearSelectContent(page);

    expect(await (await getClearSelectContent(page)).innerText()).toBe("×");

    await selectContent.click();
    await page.keyboard.type("01:00");
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("01:00");

    await clearSelectContent.click();
    await selectContent.press("Tab");

    expect(await valueContent.innerText()).toBe("");

    await unclearableContent.check();

    expect(await (await getClearSelectContent(page)).innerText()).toBe("");
  });
});
