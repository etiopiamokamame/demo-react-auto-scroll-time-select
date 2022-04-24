import { test, expect, Page } from "@playwright/test";

test.describe("find option prop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  async function getMainContent(page: Page) {
    return page.$("[data-testid='find-option-prop']");
  }

  async function getInputContent(page: Page) {
    const mainContent = await getMainContent(page);
    return mainContent.$("[data-testid='input']");
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
    expect(await titleContent.innerText()).toBe("Find Option");
  });

  test("findOptionのoptionで選択肢の特定方法を変更できること", async ({
    page,
  }) => {
    const selectContent = await getSelectContent(page);
    const clearSelectContent = await getClearSelectContent(page);
    const valueContent = await getValueContent(page);
    const inputContent = await getInputContent(page);

    await selectContent.click();
    await page.keyboard.type("1");
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("01:00");

    await clearSelectContent.click();
    await selectContent.click();
    await page.keyboard.type("15");
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("15:00");

    await clearSelectContent.click();
    await selectContent.click();
    await page.keyboard.type("10:");
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("10:00");

    await clearSelectContent.click();
    await selectContent.click();
    await page.keyboard.type("10:3");
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("10:30");

    await clearSelectContent.click();
    await selectContent.click();
    await page.keyboard.type("12:30");
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("12:30");

    await clearSelectContent.click();
    await selectContent.click();
    await page.keyboard.type("1330");
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("13:30");

    await clearSelectContent.click();
    await inputContent.fill(`
      (({ value }) => {
        return value.indexOf("15:30") > -1;
      })
    `);

    await selectContent.click();
    await page.keyboard.type("14:30");
    await selectContent.press("Enter");

    expect(await valueContent.innerText()).toBe("15:30");
  });
});
