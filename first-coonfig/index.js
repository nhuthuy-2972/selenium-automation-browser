// const webdriver = require('selenium-webdriver');
const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');

const search = async () => {

    // let driver = new webdriver.Builder().
    //     withCapabilities(webdriver.Capabilities.chrome()).
    //     build();
    let driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);

    // await driver.get('http://www.google.com');
    // await driver.findElement(webdriver.By.name('q')).sendKeys('Yanbi and mr.T Thu cuoi 2012', webdriver.Key.RETURN);
    // await driver.findElements({ name: 'btnK' }).then(found => found[1].click())


}

search()
