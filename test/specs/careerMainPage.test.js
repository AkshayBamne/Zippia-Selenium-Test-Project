const elementsUtility = require('../utilities/elementsUtility');
const careerMainPage = require ('../pageobjects/career.main.page');


describe("Career Main Page", function () {

    beforeEach( async () => {
        // runs before each test in this block
        await careerMainPage.open();  
      });

    it("Getting Career Main page Title", async () => {

        // browser.url('/project-manager-jobs');
        // await careermainpage.open();         
        await careerMainPage.getCareerMainPageTitle();       
                
    });


    it("Moving to Project Manager Demographics component", async () => {
    
        // browser.url('/project-manager-jobs');
        // await careermainpage.open();        
        await careerMainPage.moveToDemographicsComponent();    
                
    });

    it("Moving to Top Colleges for Project Managers component", async () => {
    
        // browser.url('/project-manager-jobs');
        // await careermainpage.open();  
        await careerMainPage.moveToTopCollegesComponent();   
                
    });

});
