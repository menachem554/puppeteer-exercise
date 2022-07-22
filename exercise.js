const puppeteer = require("puppeteer");

// Register to the Argentina's website
const argentinaForm = async () => {
  // Launch the browser on UI mode
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Fill out the form
  await page.goto("http://contractorsinsurancereview.com/ExampleForm/");

  await page.type("#name", "name", { delay: 50 });
  await page.type("#email", "name@gmail.com", { delay: 50 });
  await page.type("#phone", "0505055050", { delay: 50 });
  await page.type("#company", "Argentina", { delay: 50 });
  await page.select("#employees", "51-500");

  // Take a screenshot of the page
  await page.screenshot({ path: "form.png" });

  await page.click(".primary.button");

  // Wait for the Thank you page
  await page.waitForSelector("h1").then(async () => {
    const thankYou = await page.$eval("h1", (el) => el.innerText);
    console.log(thankYou);
  });

  await browser.close();
};

argentinaForm();
