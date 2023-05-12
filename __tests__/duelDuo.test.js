const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});
//#draw is button class 

describe("testing the Draw button displays the div with id=choices", () => {
  test("draw button working", async () => {
    await driver.get("http://localhost:8000")
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.id('choices'))
    let choicesDiv = await driver.wait(until.elementLocated(By.id('choices')))
    expect(await choicesDiv.isDisplayed())
  })
})

describe("Check that clicking an “Add to Duo” button displays the div with id = player-duo", () => {
  test("checking add to duo button", async () => {
    await driver.get("http://localhost:8000")
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.id('choices'))
    await driver.wait(until.elementLocated(By.id('choices')))
    await driver.findElement(By.className('bot-btn')).click()
    await driver.wait(until.elementLocated(By.className('bot-btn')))
    let duoDiv = await driver.wait(until.elementLocated(By.id('player-duo')))
    expect(await duoDiv.isDisplayed())
  })
})
