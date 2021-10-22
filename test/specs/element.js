describe("Verifying the browser is launching for the first time", function (){

    it("First test to launch chrome browser", function (){

        browser.url('/project-manager-jobs');
        browser.pause(5000);
    });
});