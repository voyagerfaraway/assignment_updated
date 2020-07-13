const dynamicLoadingPage = require("../page_objects/dynamicLoadingPage");
describe('dynamic loading pages', function(){
    it('open the first link, click start and confirm hello world to have appeared', function(){ 
        dynamicLoadingPage.getFirst();
        dynamicLoadingPage.clickStart();
        dynamicLoadingPage.waitToAppear();

        expect(dynamicLoadingPage.getHelloWorldText()).toEqual('Hello World!');
    });

    it('open the second link, click start and confirm hello world to have appeared', function(){       
        dynamicLoadingPage.getSecond();
        dynamicLoadingPage.clickStart();
        dynamicLoadingPage.waitToAppear();

        expect(dynamicLoadingPage.getHelloWorldText()).toEqual('Hello World!');
    });
});
