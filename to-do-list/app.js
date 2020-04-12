 //selector
 let userData = document.getElementById('userInput');
 let addBtn = document.getElementById('add');
 let parentContainer = document.getElementById('todo-list');
 let todoList  = document.querySelector('#todo-list');

 //Eventlisner
 todoList.addEventListener('click', function(e){
    const item = e.target;
    if(item.classList[0] === "delete-btn") {
        todoInput.remove();
    }
 });
 addBtn.addEventListener('click', addToDo);
  

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