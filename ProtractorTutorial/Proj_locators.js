function Locators()
{
	//Radio buttons
	this.radiobutton = element(by.css("[class='radioButton']"));
	this.autodropdown = element(by.id("autocomplete"));
	this.dd = element(by.id("dropdown-class-example"));
	this.check2 = element(by.id("checkBoxOption2"));
	this.check3 = element(by.id("checkBoxOption3"));
	this.name = element(by.id("name"));
	this.confirm = element(by.buttonText('Confirm'));
	this.opentab = element(by.id("opentab"))
	this.getUrl = function()
	{
		browser.waitForAngularEnabled(false);
		browser.get("https://rahulshettyacademy.com/AutomationPractice/");
		console.log("opening browser");
	}
};

module.exports = new Locators();