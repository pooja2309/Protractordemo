describe('Alerts', function(){
    it('Open Non Angular Website Alerts', function(){
    	
    	
    	browser.waitForAngularEnabled(false);
    	
    	browser.get("http://qaclickacademy.com/practice.php");
    	element(by.id("confirmbtn")).click();
    	//To accept alert 
    	browser.switchTo().alert().accept();
    	//To cancel alert
    	//browser.switchTo().alert().dismiss();
    	
    	
    	
    });

 
  
});
