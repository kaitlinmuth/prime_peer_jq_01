//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

//determine a random sex
function randomSex(){
	var num = randomNumber(0,1);
	if (num == 0){
		return "female";
	}
	return "male";
}

//constructor to create a person
function Person(age, sex, weight){
	this.age = age;
	this.sex = sex;
	this.weight = weight;
	this.name = randomName(this.sex);
}

var ladyNames = ['Clare', 'Rom', 'Mary', 'Kaitlin', 'Tracey', 'Michelle', 'Chelsea', 'Kelly', 'Casie', 'Alicia', 'Jeanne'];
var dudeNames = ['Aaron', 'Vince', 'Michael', 'Terry', 'Cody', 'Brian', 'Steve', 'Eric', 'Luke', 'Scott'];
var lastNames = ['Flowerchild', 'The Destroyer', 'Goblin', 'LlamaBreath', 'Laserbrain'];

function randomName(sex) {
	var name = '';
	if (sex == 'female'){
		var num = randomNumber(0, ladyNames.length-1);
		name += ladyNames[num];
	} else {
		var num = randomNumber(0, dudeNames.length-1);
		name += dudeNames[num];
	} 
	num = randomNumber(0, lastNames.length-1);
	return name + ' ' + lastNames[num]; 
}

$(document).ready(function(){
	$("#btn").on('click', function(){
		var person = new Person(randomNumber(1,100),randomSex(),randomNumber(1,200));
		// We don't like our headers at the bottom of the table, so we're using append instead of prepend. Sorry, Scott.
		$("table").append("<tr><td>" + person.name + "</td><td>" + person.age + "</td><td>" + person.sex + "</td><td>" + person.weight + "</td></tr>");
	});
});
//
