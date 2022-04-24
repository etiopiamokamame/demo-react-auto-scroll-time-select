import { test, expect, Page } from "@playwright/test";

test.describe("hour limit prop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  async function getMainContent(page: Page) {
    return page.$("[data-testid='hour-limit-prop']");
  }

  async function getInputContent(page: Page) {
    const mainContent = await getMainContent(page);
    return mainContent.$("[data-testid='input']");
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
    expect(await titleContent.innerText()).toBe("Hour Limit");
  });

  test("hourLimitのoptionで時間の最大値を変更できること", async ({ page }) => {
    const selectContent = await getSelectContent(page);
    const valueContent = await getValueContent(page);

    await selectContent.click();
    await page.keyboard.type("24:00");
    await selectContent.press("ArrowDown");
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("24:00");

    const inputContent = await getInputContent(page);
    await inputContent.fill("25");

    await selectContent.click();
    await selectContent.press("ArrowDown");
    await selectContent.press("ArrowDown");
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("25:00");

    await inputContent.fill("24");

    expect(await valueContent.innerText()).toBe("25:00");

    await selectContent.click();
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("00:00");
  });
});
