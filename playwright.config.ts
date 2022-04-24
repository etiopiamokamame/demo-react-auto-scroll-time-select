import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    // launchOptions: {
    //   slowMo: 1000,
    // },
  },
  projects: [
    {
      name: "Chromium",
      use: { browserName: "chromium" },
    },
    // {
    //   name: "Firefox",
    //   use: { browserName: "firefox" },
    // },
    {
      name: "WebKit",
      use: { browserName: "webkit" },
    },
    {
      name: "Mobile Chrome",
      use: devices["Pixel 5"],
    },
    {
      name: "Mobile Safari",
      use: devices["iPhone 12"],
    },
  ],
};

export default config;
