const puppeteer = require('puppeteer');




exports.test = async (req, res, next) => {
    const url = req.body.url;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [elements] = await page.$x('/html/body/div[1]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[3]/div/div/span');
    const price = await elements.getProperty('textContent');
    const realPrice = await price.jsonValue();

    browser.close();
    res.json({realPrice})
};
