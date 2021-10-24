const elementsUtility = require('../utilities/elementsUtility');
const salaryPage = require ('../pageobjects/salary.page');


describe("Salary Page", function () {

    beforeEach( async () => {
        // runs before each test in this block
        await salaryPage.open();  
      });

    it("Getting Salary Page Title", async () => {

        // browser.url('/project-manager-jobs');
        // await careermainpage.open();         
        await salaryPage.getSalaryPageTitle();       
                
    });


    it("Moving to Average Project Manager Salary", async () => {
    
        // browser.url('/project-manager-jobs');
        // await careermainpage.open();        
        await salaryPage.moveToAvgProjectManagerSalary();    
                
    });

});
