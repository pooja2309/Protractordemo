var obj = require("./Proj_locators.js");
var using = require("jasmine-data-provider");
beforeEach(function() {
	obj.getUrl();
});

it('Radio Button Test case', function() {

	console.log("Selecting radio button");
	element.all(by.css("[class='radioButton']")).each(function(item) {
		item.getAttribute("value").then(function(value) {
			console.log(value);
			if (value == "radio3") {
				item.click();
				item.isSelected().then(function(val) {
					console.log("Radio button 3 selected...");
				});
			}
			;
		});
	});
});

it("Auto Drop down box", function() {
	console.log("Auto Drop Down");
	obj.autodropdown.sendKeys("IND");
	obj.autodropdown.sendKeys(protractor.Key.ARROW_DOWN);
	obj.autodropdown.sendKeys(protractor.Key.ARROW_DOWN);
	obj.autodropdown.sendKeys(protractor.Key.ENTER);
	
});

it("Drop Down Box Example", function() {
	console.log("Dropdown Example");
	obj.dd.click();
	obj.dd.sendKeys(protractor.Key.ARROW_DOWN);
	obj.dd.sendKeys(protractor.Key.ARROW_DOWN);
	obj.dd.sendKeys(protractor.Key.ENTER);
});

it("CheckBox", function() {
	console.log("Checkbox");
	obj.check2.click();
	obj.check3.click();

});

it("Alert", function() {
	console.log("Alert - Accept or Reject");
	obj.name.sendKeys("Pooja");
	obj.confirm.click();
	browser.switchTo().alert().accept();
});

it("Window Handles", function() {
	console.log("Switching through windows");
	obj.opentab.click();
	browser.getTitle().then(function(title){
		console.log(title + " before switching");
		expect(title == "Practice Page").toBe(true);
	});
	browser.getAllWindowHandles().then(function(handle){
		browser.switchTo().window(handle[1]);
		browser.getTitle().then(function(title){
			console.log(title + " after switching");
			expect(title == "Rahul Shetty Academy").toBe(true);
		});
		
	});
});
