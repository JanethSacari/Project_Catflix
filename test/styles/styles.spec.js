const puppeteer = require('puppeteer');

test('O background da página deve ser preto', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('file:///C:/projeto/index.html');  // Caminho do arquivo

    const backgroundColor = await page.evaluate(() => {
        return window.getComputedStyle(document.body).backgroundColor;
    });

    expect(backgroundColor).toBe('rgb(20, 20, 20)'); // Cor convertida de #141414
    await browser.close();
});