const nestedFramesPage = require('./nestedFramesPage');

describe('nested frames page', function() {
    
    beforeEach(function() {
        nestedFramesPage.disableAngular();

        nestedFramesPage.get();
      });  

    it('confirm that the middle frame has the correct word inside', function() {

        nestedFramesPage.switchFrame('frame-top');

        nestedFramesPage.switchFrame('frame-middle');

        expect(nestedFramesPage.getFrameText()).toEqual('MIDDLE');
    });

    it('confirm that the left frame has the correct word inside', function() {

        nestedFramesPage.switchFrame('frame-top');

        nestedFramesPage.switchFrame('frame-left');

        expect(nestedFramesPage.getFrameText()).toEqual('LEFT');
    });

    it('confirm that the right frame has the correct word inside', function() {

        nestedFramesPage.switchFrame('frame-top');

        nestedFramesPage.switchFrame('frame-right');

        expect(nestedFramesPage.getFrameText()).toEqual('RIGHT');
    });

    it('confirm that the bottom frame has the correct word inside', function() {

        nestedFramesPage.switchFrame('frame-bottom');

        expect(nestedFramesPage.getFrameText()).toEqual('BOTTOM');
    });
});
