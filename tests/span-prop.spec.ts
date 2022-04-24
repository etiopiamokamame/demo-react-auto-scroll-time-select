import { test, expect, Page } from "@playwright/test";

test.describe("span prop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  async function getMainContent(page: Page) {
    return page.$("[data-testid='span-prop']");
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
    expect(await titleContent.innerText()).toBe("Span");
  });

  test("spanのoptionで時間の間隔を変更できること", async ({ page }) => {
    const selectContent = await getSelectContent(page);
    const valueContent = await getValueContent(page);

    await selectContent.click();
    await selectContent.press("ArrowDown");
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("00:30");

    const inputContent = await getInputContent(page);
    await inputContent.fill("15");

    await selectContent.click();
    await selectContent.press("ArrowDown");
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("00:45");

    await inputContent.fill("1");

    await selectContent.click();
    await selectContent.press("ArrowDown");
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("00:46");
  });
});
