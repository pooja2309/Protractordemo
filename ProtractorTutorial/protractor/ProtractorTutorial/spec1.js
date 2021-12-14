describe('Protractor Basics', function(){
    it('Testcase Open browser', function(){
        //write your code here
        browser.get("https://angularjs.org").then(function(){
            console.log("Opened Browser");
        });
    });

   /* it('Testcasse Close browser', function(){
        //write your code here

    });
    */
});
