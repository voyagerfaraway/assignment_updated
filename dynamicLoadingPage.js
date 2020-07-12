var dynamicLoadingPage = function() {

    var startButton = element(by.id('start')).element(by.tagName('button'));

    var finalText = element(by.id('finish')).element(by.tagName('h4'));

    var EC = browser.ExpectedConditions;

    this.disableAngular = function () {
        browser.waitForAngularEnabled(false);
    };
  
    this.getFirst = function() {
        browser.get('http://the-internet.herokuapp.com/dynamic_loading/1');
    };

    this.getSecond = function() {
        browser.get('http://the-internet.herokuapp.com/dynamic_loading/2');
    };

    this.clickStart = function() {
        startButton.click();
    };

    this.waitToAppear = function() {
        browser.wait(EC.visibilityOf(finalText), 6000);
    };

    this.getHelloWorldText = function() {
        return finalText.getText();
      };
  };
  module.exports = new dynamicLoadingPage();
  