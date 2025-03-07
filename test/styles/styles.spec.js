const puppeteer = require('puppeteer');

test('O background da página deve ser preto', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('file:///C:/Users/janem/Projects/Coding/SpecialProjects/Project_Catflix/styles/main.css');

    const backgroundColor = await page.evaluate(() => {
        return window.getComputedStyle(document.body).backgroundColor;
    });

    expect(backgroundColor).toBe('rgb(20, 20, 20)');
    await browser.close();
});