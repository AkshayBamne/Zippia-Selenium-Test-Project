
describe("Verifying the browser is launching for the first time", function (){

    it("First test to launch chrome browser", async () => {

        browser.url('/project-manager-jobs');
        browser.pause(2000);        
        // console.log('Verifying title of page:' +browser.getTitle());

        const titleText = await $('.title.text-break');
        console.log('Verifying title of page:' +await titleText.getText());
        assert.equal(await titleText.getText(),'PROJECT MANAGER');
                
    });
});