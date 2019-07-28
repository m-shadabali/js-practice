function F(nums){
    let arr = [];
    for(var i = 0; i < nums.length; i++){
         if(nums[i]%2 == 0){
            arr.push(nums[i]*2);
        }
        else{
            arr.push(nums[i]*3);
        }

    }
 return arr
    
}
 console.log(F([5, 6, 5,7]));
 

 console.log(modifyArray([5, 8, 9, 4, 16]))