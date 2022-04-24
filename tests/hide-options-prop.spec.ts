import { test, expect, Page } from "@playwright/test";

test.describe("hide options prop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  async function getMainContent(page: Page) {
    return page.$("[data-testid='hide-options-prop']");
  }

  async function getHideSelectContent(page: Page) {
    const mainContent = await getMainContent(page);
    return mainContent.$("[data-testid='hide-select']");
  }

  async function getAddHideOptionBtnContent(page: Page) {
    const mainContent = await getMainContent(page);
    return mainContent.$("[data-testid='add-hide-option-btn']");
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
    expect(await titleContent.innerText()).toBe("Hide Options");
  });

  test("hideOptionsで指定の選択肢を非表示にできること", async ({ page }) => {
    const hideSelectContent = await getHideSelectContent(page);
    const addHideOptionBtnContent = await getAddHideOptionBtnContent(page);
    const selectContent = await getSelectContent(page);
    const valueContent = await getValueContent(page);

    await hideSelectContent.click();
    await page.keyboard.type("01:30");
    await selectContent.press("Enter");
    await addHideOptionBtnContent.click();

    await hideSelectContent.click();
    await page.keyboard.type("02:00");
    await selectContent.press("Enter");
    await addHideOptionBtnContent.click();

    await selectContent.click();
    await page.keyboard.type("01:00");
    await selectContent.press("Enter");
    expect(await valueContent.innerText()).toBe("01:00");

    await selectContent.click();
    await selectContent.press("ArrowDown");
    await selectContent.press("Enter");
    expect(await valueContent.innerText()).toBe("02:30");
  });
});
