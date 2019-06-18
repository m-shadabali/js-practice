var createWorker = function(){
    var workCount = 0;
    var task1 = function(){
        workCount+ =1;
        console.log("task1"+workCount);
    };
        return{
            job1: task1,
            job2:task2
        };
    
};