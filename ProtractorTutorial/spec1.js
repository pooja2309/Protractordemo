describe('Protractor Basics', function(){
    it('Testcase Open browser', function(){
        //write your code here
    	//to accept non angular websites
    	browser.waitForAngularEnabled(false);
    	browser.get("http://www.google.com");
        browser.get("https://angularjs.org").then(function(){
            console.log("Opened Browser");
        });
    });

   /* it('Testcase Close browser', function(){
        //write your code here

    });
    */
  
});
