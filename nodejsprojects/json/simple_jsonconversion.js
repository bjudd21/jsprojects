var accountStr = '{"name" : "Jedi", "members" : ["Yoda", "Obi Wan"], \
					"number" : 34512, "location" : "galaxy far far away"}';
var accountObj = JSON.parse(accountStr);
console.log(accountObj.name);
console.log(accountObj.members);


var accountLOTRObj = {
	name: "Baggins",
	number: 10645,
	members: ["Frodo, Bilbo"],
	location: "Shire"
};

var accountLOTRStr = JSON.stringify(accountLOTRObj);
console.log(accountLOTRStr);
