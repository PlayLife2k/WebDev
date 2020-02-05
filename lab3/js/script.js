var id = 1;
var tasksBlock = document.getElementById("tasksBlock");
function createTask(){
  var input = document.getElementById("inputLabel").value;
  if(input == ""){
    alert("Input is empty, enter some text");
    return;
  }
  var task = document.createElement("li");
    task.id = id;
    var checkBoxBlock = document.createElement("span");
      checkBoxBlock.className = "checkBox";
      var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
      checkBoxBlock.appendChild(checkBox);
    task.appendChild(checkBoxBlock);
    var textBlock = document.createElement("span");
      textBlock.className = "textBlock";
      var text = document.createElement("p");
        text.textContent = input;
      textBlock.appendChild(text);
    task.appendChild(textBlock);
    var trashBlock = document.createElement("span");
      trashBlock.className = "trashBlock";
      var trash = document.createElement("i");
        trash.className = "fas far fa-trash-alt fa-lg";
      trashBlock.onclick = deleteTask(id);
      trashBlock.appendChild(trash);
    task.appendChild(trashBlock);
  tasksBlock.appendChild(task);
  id++;
  document.getElementById("inputLabel").value = "";
  
} 
function deleteTask(id){
  
}