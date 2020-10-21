import * as puppeteer from 'puppeteer';


(async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.emulate(puppeteer.devices['iPhone 6']);
    await page.goto('https://www.tokopedia.com/');
    await page.screenshot({ path: 'output/tokopedia.png'});
    await browser.close();
  })();