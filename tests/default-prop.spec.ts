import { test, expect, Page } from "@playwright/test";

test.describe("default prop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  async function getMainContent(page: Page) {
    return page.$("[data-testid='default-prop']");
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
    expect(await titleContent.innerText()).toBe("Default");
  });

  test("input all word", async ({ page }) => {
    const selectContent = await getSelectContent(page);
    const valueContent = await getValueContent(page);

    await selectContent.click();
    await page.keyboard.type("01:00");
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("01:00");
  });

  test("input partial word", async ({ page }) => {
    const selectContent = await getSelectContent(page);
    const valueContent = await getValueContent(page);

    await selectContent.click();
    await page.keyboard.type("1");
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("01:00");
  });

  test("confirm with tab key", async ({ page }) => {
    const selectContent = await getSelectContent(page);
    const valueContent = await getValueContent(page);

    await selectContent.click();
    await page.keyboard.type("01:00");
    await selectContent.press("Tab");

    expect(await valueContent.innerText()).toBe("01:00");
  });

  test("select with arrow keys", async ({ page }) => {
    const selectContent = await getSelectContent(page);
    const valueContent = await getValueContent(page);

    await selectContent.click();
    await page.keyboard.type("1");
    await selectContent.press("ArrowDown");
    await selectContent.press("ArrowDown");
    await selectContent.press("ArrowDown");
    await selectContent.press("ArrowUp");
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("02:00");
  });

  test("input not exist word", async ({ page }) => {
    const selectContent = await getSelectContent(page);
    const valueContent = await getValueContent(page);

    await selectContent.click();
    await page.keyboard.type("abc");
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("00:00");
  });
});
