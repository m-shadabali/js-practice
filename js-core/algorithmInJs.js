function p(a){   
    var sum =0;
    for(i =0; i < a.length; i++){
        sum += a[i];
    }
    console.log(sum);
   }
   p([5,555,5,25]);
   
   function simpleArraySum(ar) {
       let sum = 0;
       for (var i = 0; i < ar.length; i++) {
           sum += ar[i];
       }
       console.log(sum);
   }
   simpleArraySum([1, 2, 3, 4, 10, 11]);
    
   function grade(num){
       if(num > 25 && num <= 30){
           return "A"
       }
       else if(num > 20 && num  <= 25){
           return "B"
       }
       else if(num > 15 && num <= 20){
           return "C"
       }
       else if(num > 10 && num <= 15){
           return "D"
       }
       else if(num > 5 && num <= 10 ){
           return "E"
       }
       else if(num => 0 && num <= 5){
           return "F"
       }
   }
   console.log(grade());


