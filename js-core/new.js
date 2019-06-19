var task = function (name) {
	  this.name  = name;
	  this.completed = false;

	};

task.prototype.complete= function() {
	console.log('complete task: ' + this.name);
	this.completed = true;
};
task.prototype.save = function(){
	console.log('saving task:' + this.name);
};

var Mytasknode = new task("shadab");
Mytask.complete();
Mytask.save();