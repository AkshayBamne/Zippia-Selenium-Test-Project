const elementsUtility = require('../utilities/elementsUtility');

class SalaryPage {
    
    get avgProjectManagerSalary() { return $('.salary-designer-body.no-salary-call-out') }

    async open(){  

            await browser.url('/project-manager-jobs/salary/');
            console.log(await browser.getUrl());                 
            const starttime = new Date().getTime()
            await browser.pause(5000)
            const endtime = new Date().getTime()
            console.log(endtime - starttime)     
        }

   
    async getSalaryPageTitle(){  
        
            const title = await browser.getTitle();            
            await expect(title).to.equal('Average Project Manager Salary 2021: by State & Field - Zippia');
        }         
       

    async moveToAvgProjectManagerSalary(){
        
            // await browser.pause(7000);
            console.log(await this.avgProjectManagerSalary.isDisplayedInViewport());
            await this.avgProjectManagerSalary.scrollIntoView();
            await browser.pause(5000);
            console.log('Moving to Average Project Manager Salary');
            console.log("Component displayed in viewport:", await this.avgProjectManagerSalary.isDisplayedInViewport());

        }
}
module.exports = new SalaryPage()