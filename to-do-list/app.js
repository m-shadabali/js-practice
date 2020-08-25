 //selector
 let userData = document.getElementById('userInput');
 let addBtn = document.getElementById('add');
 let parentContainer = document.getElementById('todo-list');
 let todoList  = document.querySelector('#todo-list');

 //Eventlisner
  
 addBtn.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);

 //function

 function addToDo(){
     event.preventDefault();
     //todo DiV
     const todoDiv = document.createElement("div");
     todoDiv.classList.add("todo");
     //create li
     const newTodo = document.createElement('li');
     newTodo.innerText = userData.value;
     todoDiv.appendChild(newTodo);
     //check mark button 
     const completeButton = document.createElement('button');
     completeButton.innerHTML =  '<i class = "fas fa-check"></i>';
     completeButton.classList.add("complete-btn");
     todoDiv.appendChild(completeButton);
     //delete button
     const deleteButton = document.createElement('button');
     deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
     deleteButton.classList.add('delete-btn');
     todoDiv.appendChild(deleteButton);
     parentContainer.appendChild(todoDiv);
     userData.value = "";
 };
 function deleteCheck(e){

      const item = e.target;
      //Delete Todo
      if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        todo.classList.add("fall");
        
        todo.addEventListener('transitioned', function(){
        todo.remove();
        })
      }
     //check Mark

     if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
     }
 }