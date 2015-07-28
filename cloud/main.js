Parse.Cloud.define("testInfo", function(request, response) {
var Parse4J = Parse.Object.extend("parse4j");
var my4J = new Parse4J();
my4J.set("objectId", "MLiOgxncUM");
//my4J.fetch().then(function(fetched4J_object) {},function(error){});
//check the argument 'promise' in javascript
//shortly, are the callback like .then(),.first(), etc
my4J.fetch().then(function(fetched4J_object) {

// here you have the full fetched object
return response.success({"myResult":fetched4J_object});

},function(error){});
});