const uploadPage = require("../page_objects/uploadPage");
describe('file uploader', function(){
    beforeEach(function() {
        uploadPage.get();
      }); 

    it('confirm to have successfully uploaded the file', function(){
        uploadPage.uploadFile('../testing_resources/upload_test.rtf');
        uploadPage.uploadFileSubmit();

        expect(uploadPage.getUploadText()).toEqual('File Uploaded!');
    });

    it('confirm the uploaded file to match the correct name', function(){
        uploadPage.uploadFile('../testing_resources/upload_test.rtf');
        uploadPage.uploadFileSubmit();

        expect(uploadPage.getFileText()).toEqual('upload_test.rtf');
    });
});
