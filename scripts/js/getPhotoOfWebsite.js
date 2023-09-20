import puppeteer from "puppeteer";

async function getScreenShot(link) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(link);

  await page.screenshot({
    path: "/Users/michaelbernardrouimi/code/Ethanol48/personal_website/pruebas/screenshot.png",
    type: "png",
    fullPage: true,
    captureBeyondViewport: true,
  });

  await browser.close();
}

getScreenShot("https://fund-me-frontend-ten.vercel.app");
