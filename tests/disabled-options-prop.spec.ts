import { test, expect, Page } from "@playwright/test";

test.describe("disabled options prop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  async function getMainContent(page: Page) {
    return page.$("[data-testid='disabled-options-prop']");
  }

  async function getDisableSelectContent(page: Page) {
    const mainContent = await getMainContent(page);
    return mainContent.$("[data-testid='disable-select']");
  }

  async function getAddDisableOptionBtnContent(page: Page) {
    const mainContent = await getMainContent(page);
    return mainContent.$("[data-testid='add-disable-option-btn']");
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
    expect(await titleContent.innerText()).toBe("Disabled Options");
  });

  test("disabledOptionsで指定の選択肢を非表示にできること", async ({
    page,
  }) => {
    const disableSelectContent = await getDisableSelectContent(page);
    const addDisableOptionBtnContent = await getAddDisableOptionBtnContent(
      page
    );
    const selectContent = await getSelectContent(page);
    const valueContent = await getValueContent(page);

    await disableSelectContent.click();
    await page.keyboard.type("01:30");
    await selectContent.press("Enter");
    await addDisableOptionBtnContent.click();

    await disableSelectContent.click();
    await page.keyboard.type("02:00");
    await selectContent.press("Enter");
    await addDisableOptionBtnContent.click();

    await selectContent.click();
    await page.keyboard.type("01:00");
    await selectContent.press("Enter");
    expect(await valueContent.innerText()).toBe("01:00");

    await selectContent.click();
    await selectContent.press("ArrowDown");
    await selectContent.press("Tab");
    expect(await valueContent.innerText()).toBe("01:00");

    await selectContent.click();
    await selectContent.press("ArrowDown");
    await selectContent.press("ArrowDown");
    await selectContent.press("ArrowDown");
    await selectContent.press("Enter");
    expect(await valueContent.innerText()).toBe("02:30");
  });
});
