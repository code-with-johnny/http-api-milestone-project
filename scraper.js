const path = require("path");
const puppeteer = require("puppeteer");
const { table } = require("table");

const filePath = path.join(__dirname, "index.html");

(async () => {
  console.info("Launching browser...");

  const browser = await puppeteer.launch({ headless: "old" });
  const page = await browser.newPage();

  await page.goto(`file://${filePath}`);

  console.info("Looking for cat comparison table...");
  await page.waitForSelector("#cat-comparison");

  console.info("Table found, parsing...");
  await sleep500();

  const tableData = await page.evaluate(() => {
    const table = document.querySelector("#cat-comparison");
    const headers = Array.from(table.querySelectorAll("thead th")).map((th) =>
      th.textContent.trim()
    );
    const rows = Array.from(table.querySelectorAll("tbody tr")).map((row) =>
      Array.from(row.querySelectorAll("td")).map((td) => td.textContent.trim())
    );
    return [headers, ...rows];
  });

  console.info("Table parsed, here are the results...");
  await sleep500();
  console.log(table(tableData));

  console.info("Closing browser...");
  await browser.close();
})();

// sleeper function to make the terminal output intervals more readable
async function sleep500() {
  return new Promise((resolve) => setTimeout(resolve, 500));
}
