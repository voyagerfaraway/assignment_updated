const uploadPage = require("./uploadPage");

describe('file uploader', function(){

    beforeEach(function() {
        uploadPage.disableAngular();

        uploadPage.get();
      }); 

    it('confirm to have successfully uploaded the file', function(){

        uploadPage.uploadFile('upload_test.rtf');

        uploadPage.uploadFileSubmit();

        expect(uploadPage.getUploadText()).toEqual('File Uploaded!');
    });

    it('confirm the uploaded file to match the correct name', function(){

        uploadPage.uploadFile('upload_test.rtf');

        uploadPage.uploadFileSubmit();

        expect(uploadPage.getFileText()).toEqual('upload_test.rtf');
    });
});
