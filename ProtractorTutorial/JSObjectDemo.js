function Car()
{
	this.color = "red";
	this.engine = "turbo";
	this.brand = "bmw";
	
	
	this.fn = element(by.model("first"));
	this.sn = element(by.model("second"));
	this.go = element(by.id("gobutton"));
	this.res = element(by.css("[class='ng-binding']"));
	this.getUrl = function()
	{
		browser.get("https://juliemr.github.io/protractor-demo/");
		console.log("opening browser");
	}
};

/*var a = new Car();
a.getModel();
console.log(a.engine);
*/
module.exports = new Car();  // any other file will be able to access this class