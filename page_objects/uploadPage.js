var uploadPage = function() {
    var path = require('path');
    var successfulUpload = element(by.id('content')).element(by.tagName('h3'));
    var fileName = element(by.id('uploaded-files'));
  
    this.get = function() {
        browser.get('http://the-internet.herokuapp.com/upload');
    };

    this.uploadFile = function(fileToUpload) {
        var absolutePath = path.resolve(__dirname, fileToUpload);
        element(by.id('file-upload')).sendKeys(absolutePath);
    };

    this.uploadFileSubmit = function() {
        element(by.id('file-submit')).click();
    };

    this.getUploadText = function() {
        return successfulUpload.getText();
    };

    this.getFileText = function() {
        return fileName.getText();
    };
  };
  module.exports = new uploadPage();
