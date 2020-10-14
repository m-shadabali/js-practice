/* let shadab = {
  name: 'Shadab',
  score: 0,
  incrementScore: function(){
    shadab.score++
  },
  decrementScore: function(){
    shadab.score--
  },
  changeName: function(name){
    shadab.name = name;
    return shadab.name
  }
}
shadab.incrementScore();
console.log(shadab.score)
shadab.incrementScore();
console.log(shadab.score)
*/
/*
function createUser(name, score = 0){
let user = {};
user.name = name;
user.score = score;
user.incrementScore = function(){
 user.score++
}
user.decrementScore = function(){
  user.score--
}
return user;
}
let shadab = createUser('Shadab', 10);
let kushal = createUser('Kusal', 20);
let alisha = createUser('Alisha', 10);
let deepak = createUser('Deepak', 20);
*/

/*
function createUser(name, score = 0) {
    let user = {};
    user.name = name;
    user.score = score;

    user.__proto__ = {
        incrementScore:function () {
            user.score++
        },
        decrementScore:function () {
            user.score--
        }
    }

    return user;
}
let shadab = createUser('Shadab', 10);
let kushal = createUser('Kusal', 20);
let alisha = createUser('Alisha', 10);
let deepak = createUser('Deepak', 20);
*/

/*
let userMethod = {
    incrementScore:function () {
        console.log(this.name)
        this.score++
        return this.score
    },
    decrementScore:function () {
        this.score--
        return this.score
    },
}
function createUser(name, score = 0) {
    let user = Object.create(userMethod);
    user.name = name;
    user.score = score;
    return user;
}
let shadab = createUser('Shadab', 10);
let kushal = createUser('Kusal', 20);
let alisha = createUser('Alisha', 10);
let deepak = createUser('Deepak', 20);
*/

/*
function createUser(name, score = 0) {
   let user = Object.create(createUser.prototype);
    user.name = name;
    user.score = score;
    return user;
    
  
}
createUser.prototype = {
    incrementScore:function () {
        console.log(this.name)
        this.score++
        return this.score
    },
    decrementScore:function () {
        this.score--
        return this.score
    },
};
let shadab = createUser('Shadab', 10);
let kushal = createUser('Kusal', 20);
let alisha = createUser('Alisha', 10);
let deepak = createUser('Deepak', 20);
*/
/*
function createUser(name, score = 0) {
    //let user = Object.create(createUser.prototype);
     this.name = name;
     this.score = score;
    //  return user;
     
   
 }
 createUser.prototype = {
     incrementScore:function () {
         console.log(this.name)
         this.score++
         return this.score
     },
     decrementScore:function () {
         this.score--
         return this.score
     },
 };
 let shadab = new createUser('Shadab', 10);
 let kushal = new createUser('Kusal', 20);
 let alisha = new createUser('Alisha', 10);
 let deepak = new createUser('Deepak', 20);
*/
class user {
    constructor(name, score = 0){
        this.name  = name;
        this.score = score;
    }
     incrementScore() {
        console.log(this.name)
        this.score++
        return this.score
    }
     decrementScore(){
        this.score--
        return this.score
    }  
}

let shadab = new user('Shadab', 10);
let kushal = new user('Kusal', 20);
let alisha = new user('Alisha', 10);
let deepak = new user('Deepak', 20);