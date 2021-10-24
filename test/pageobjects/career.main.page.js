const elementsUtility = require('../utilities/elementsUtility');

class OverviewPage {
    
    get demographicsComponent() { return $('//h2[text()="Project Manager Demographics"]') }

    get topColleges() { return $('.college-list-container') }

    async open(){  

            await browser.url('/project-manager-jobs');
            console.log(await browser.getUrl());                 
            const starttime = new Date().getTime()
            await browser.pause(5000)
            const endtime = new Date().getTime()
            console.log(endtime - starttime)     
        }

   
    async getCareerMainPageTitle(){  
        
            const title = await browser.getTitle();            
            await expect(title).to.equal('How to Become A Project Manager: Jobs, Career, Salary and Skills - Zippia');
        }         
       

    async moveToDemographicsComponent(){
        
            // await browser.pause(7000);
            console.log(await this.demographicsComponent.isDisplayedInViewport());
            await this.demographicsComponent.scrollIntoView();
            await browser.pause(5000);
            console.log('Moving to Project Manager Demographics component');

        }
    
    async moveToTopCollegesComponent() {
       
            console.log(await this.topColleges.isDisplayedInViewport());
            await this.topColleges.scrollIntoView();
            await browser.pause(5000);
            console.log('Moving to Top Colleges for Project Managers component');
    }
}
module.exports = new OverviewPage()