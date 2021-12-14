describe('Alerts', function() {

	function selectItems(product) {
		// Traverse through all cards and pick a product with suitable name
		element.all(by.tagName("app-card")).each(function(item) {

			item.element(by.css("h4 a")).getText().then(function(text) {
				if (text == product) {
					// Click on Add button
					item.element(by.css("button[class*='btn-info']")).click();
				}
			});
		});
	}

	it('Open Non Angular Website Alerts', function() {

		browser.get("https://qaclickacademy.github.io/protocommerce/");
		element(by.name("name")).sendKeys("Pooja");
		element(by.css("input[name='email']")).sendKeys("abcd@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("password1");
		element(by.id("exampleCheck1")).click();
		element(
				by.cssContainingText("[id='exampleFormControlSelect1'] option",
						"Female")).click();
		// radio buttons having same name, different id and values
		element.all(by.name("inlineRadioOptions")).first().click();
		element(by.buttonText("Submit")).click().then(
				function() {
					// Confirmation Text Validation
					element(by.css("div[class*='success']")).getText().then(
							function(text) {
								console.log(text);
							});

				});

		element(by.name("name")).clear();
		element(by.name("name")).sendKeys("M").then(
				function() {
					element(by.css("[class='alert alert-danger']")).getText()
							.then(function(text) {
								console.log(text);
							});
				});

		element(by.linkText("Shop")).click();
		selectItems("Samsung Note 8");
		selectItems("iphone X");

		// Checkout
		element(by.partialLinkText("Checkout")).getText().then(function(text) {
			console.log(text);
			var res = text.split("(");
			expect(res[1].trim().charAt(0)).toBe("2");
		});

	});
});
