describe('Protractor Elements', function() {
	// Reusable Function - outside it block and inside describe block
	function Add(a, b) {
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}
	
	function Calculate(a, b, c)
	{
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element.all(by.tagName("option")).each(function(item){
			item.getAttribute("value").then(function(values){
				if(values==c){
					item.click();
				}
			});
		});
		
		element(by.id("gobutton")).click();
	}

	it('Locators', function() {
		
		browser.get("https://juliemr.github.io/protractor-demo/");
		
		
		Calculate(3, 5, "MULTIPLICATION");
		Calculate(4, 5, "ADDITION");
		Calculate(20, 5, "MODULO");
		
		element.all(by.repeater("result in memory")).each(function(item){
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			});
		});
		
	});
});
