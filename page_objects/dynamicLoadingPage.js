var dynamicLoadingPage = function() {
    var startButton = element(by.id('start')).element(by.tagName('button'));
    var finalText = element(by.id('finish')).element(by.tagName('h4'));
    var loadingText = element(by.id('loading'));
    var loadingPic = element(by.id('content')).element(by.tagName('img'));
    var EC = browser.ExpectedConditions;
  
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

    this.getLoadingText = function() {
        return loadingText.getText();
      };

    this.getImage = function() {
        return loadingPic;
      };
  };
  module.exports = new dynamicLoadingPage();
  
