var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Proj_demo.js'],
    capabilities: {
    	'browserName': 'chrome'
    },
    onPrepare : function()
    {
    	browser.driver.manage().window().maximize();
    	jasmine.getEnv().addReporter(
    	        new Jasmine2HtmlReporter({
    	          savePath: 'target/screenshots'
    	        })
    	      );
    	
    	
    },
    
    /*
    suite:
    	{
    	Smoke : ['Dropdown.js', 'Alerts.js'],
    	Regression: 'Elementbasics.js'
    	},
    	*/
    	
    jasmineNodeOpts: {
		showColors: true
	}
};