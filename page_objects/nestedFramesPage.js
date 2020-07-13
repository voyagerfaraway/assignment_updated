var nestedFramesPage = function() {
    var frame = element(by.tagName('body'));
  
    this.get = function() {
        browser.get('http://the-internet.herokuapp.com/nested_frames');
    };
  
    this.switchFrame = function(frameName) {
        browser.switchTo().frame(element(by.name(frameName)).getWebElement());
    };

    this.switchDefault = function() {
        browser.switchTo().defaultContent();
    };
  
    this.getFrameText = function() {
        return frame.getText();
    };
  };
  module.exports = new nestedFramesPage();
  