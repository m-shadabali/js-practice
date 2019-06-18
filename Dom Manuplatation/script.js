/*var john = {
    name: 'John',
    birthYear:1998,
    Job:'teacher'
};
var person = function(name,birthYear,Job){
    this.name = name;
    this.birthYear = birthYear;
    this.Job = Job;
    
}
person.prototype.lastName = "ali";
person.prototype.calculateAge=
	function(){
        console.log(2018-this.birthYear);
    };
var john = new person("John", "1999", "teacher");
var mark = new person("mark", "1995", "coder");
var jack = new person("jack", "1992", "doctor")
john.calculateAge();
mark.calculateAge();
jack.calculateAge();
console.log(john.lastName);
console.log(mark.lastName);
*/
function Question(question,answers,correct){
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}
Question.prototype.displayQuestion()=
	function(){
	console.log(this.question);
	for(var i = 0; i <this.answers.length;i++){
		console.log(i + ':'+)this.answers[i]);
	}
}
var q1 = new Question('Is JavaScript the Coolest progarming language in the world ?',['Yes','No'],0);
'var q2 = new Question('What is the name of this course/'s teacher?)