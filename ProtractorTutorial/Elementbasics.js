describe('Protractor Elements', function() {
	// Reusable Function - outside it block and inside describe block
	function Add(a, b) {
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}

	it('Locators', function() {
		// write your code here
		// to accept non angular websites
		// browser.waitForAngularEnabled(false);
		// browser.get("http://www.google.com");
		browser.get("https://juliemr.github.io/protractor-demo/");
		Add(2,3);
		Add(4,2);
		Add(5,2);
		Add(2,1);
		// tagname[attribute='value']
		// Jasmine takes care of promise resolve

		/*
		 * element(by.css("h2[class='ng-binding']")).getText().then(function(text){
		 * console.log(text); });
		 */

		// Chain Locators:
		element(by.repeater("result in memory")).element(
				by.css("td:nth-child(2)")).getText().then(function(text) {
			console.log(text);
		});

		// All
		element.all(by.repeater("result in memory")).count().then(
				function(counts) {
					console.log(counts);
				});

		// each element from all
		element.all(by.repeater("result in memory")).each(
				function(item) {
					item.element(by.css("td:nth-child(3)")).getText().then(
							function(texts) {
								console.log(texts);
							});
				});

		console.log("Getting First Item");
		element.all(by.repeater("result in memory")).first().element(
				by.css("td:nth-child(3")).getText().then(function(text) {
			console.log(text);
		});

		/*
		 * console.log("Getting 2nd Item"); element.all(by.repeater("result in
		 * memory")).get(1).element(by.css("td:nth-child(3")).getText().then(function(text){
		 * console.log(text); });
		 * 
		 */

	});
});
