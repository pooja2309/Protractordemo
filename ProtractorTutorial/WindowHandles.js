describe('Action demo', function(){
	it('open a website', function(){
		browser.get('paste url here...');
		element(by.model("userInputQuery")).sendKeys("river");
		browser.actions().mouseMove(element(by.model("locationQuery"))).sendKeys("London").perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			browser.sleep(6000);
			expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
			//Click on first option 
			element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
			
			element(by.css("a[ng-href*='London/River Island']")).click().then(function(){
				browser.sleep(5000);
				browser.getTitle().then(function(title){
					
					console.log(title+" of the page before switching..");
			
				});
					
				
				//switch to child window
				browser.getAllWindowHandles().then(function(handle){
					browser.switchTo().window(handle[1]);
					
					
					browser.getTitle().then(function(title){
						
						console.log(title+" of the page after switching..");
				
					});
						
				});
			});
				
		});
	});
});