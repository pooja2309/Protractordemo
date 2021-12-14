//Accessing the object of class in JSONObjectDemo
var obj = require("./JSObjectDemo.js");
//Jasmine data driven
var using = require("jasmine-data-provider");

var d = require("./data.js");
//obj.getModel();
//console.log(obj.search);
	
	beforeEach(function() {
		obj.getUrl();
	});
	
	//Executes 3x since there are 3 sets of data in data.js
	using(d.Datadriven, function(data, description){
		it('Testing calculator method '+description, function(){
			console.log("Sending keys to object");
			obj.fn.sendKeys(data.firstInput);
			obj.sn.sendKeys(data.secondInput);
			obj.go.click();
			//expect(obj.res.getText().(d.Datadriven.result));
		});
	});
	

	afterEach(function(){
		
		console.log("Test is completed");
	});
