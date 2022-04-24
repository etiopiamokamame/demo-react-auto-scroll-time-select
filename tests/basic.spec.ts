import { test, expect } from "@playwright/test";

test.describe("basic", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("title", async ({ page }) => {
    const title = await page.title();
    expect(title).toBe("React Auto Scroll Time Select");

    const appBarTitle = await page.innerText(".mdc-top-app-bar__title");
    expect(appBarTitle).toBe("React Auto Scroll Time Select");

    const mailTitle = await page.innerText("[data-testid='usage-title'] h2");

    expect(mailTitle).toBe("Usage");
  });
});
