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
 


function vowelsAndConsonants(s) {
    var ar = [];
    for (i = 0; i < s.length; i++){
        ar.push(s[i]);
    }
    console.log(ar)
    
    for (i = 0; i < ar.length; i++){
         console.log(ar[i]);
    }
}
vowelsAndConsonants("shadabali");


function vowelsAndConsonants(s) {
    let vowels = ["a", "e", "i", "o", "u"];

    for(let v of s) {
        if(vowels.includes(v))
            console.log(v);
    }
    
    for(let v of s) {
        if(!vowels.includes(v))
            console.log(v);
    }
}
vowelsAndConsonants("monish");