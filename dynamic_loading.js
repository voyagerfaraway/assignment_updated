const dynamicLoadingPage = require("./dynamicLoadingPage");

describe('dynamic loading pages', function(){

    it('open the first link, click start and confirm hello world to have appeared', function(){
        
        dynamicLoadingPage.disableAngular();

        dynamicLoadingPage.getFirst();

        dynamicLoadingPage.clickStart();

        dynamicLoadingPage.waitToAppear();

        expect(dynamicLoadingPage.getHelloWorldText()).toEqual('Hello World!');
    });

    it('open the second link, click start and confirm hello world to have appeared', function(){
        
        dynamicLoadingPage.disableAngular();

        dynamicLoadingPage.getSecond();

        dynamicLoadingPage.clickStart();

        dynamicLoadingPage.waitToAppear();

        expect(dynamicLoadingPage.getHelloWorldText()).toEqual('Hello World!');
    });
});
