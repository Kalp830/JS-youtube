let inputs = document.getElementById("input-box");
let text = document.querySelector(".text")

function Add(){
    if(inputs.value == ""){
            alert("Please Enter Task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa fa-trash"></i>` ;
        text.appendChild(newEle);
        newEle.querySelector("i").addEventListener("click", remove);
        function remove() {
           newEle.remove();
         }  
      }
      inputs.value="";
   }





//    let inputs = document.getElementById("input-box");
//    let text = document.querySelector(".text");

// document.addEventListener("DOMContentLoaded", loadTasks); // Load tasks on page load

// function Add() {
//     if (inputs.value == "") {
//         alert("Please Enter Task");
//     } else {
//         addTask(inputs.value);
//         saveTask(inputs.value); // Save the task in local storage
//         inputs.value = "";
//     }
// }

// function addTask(task) {
//     let newEle = document.createElement("ul");
//     newEle.innerHTML = `${task} <i class="fa fa-trash"></i>`;
//     text.appendChild(newEle);
//     newEle.querySelector("i").addEventListener("click", function () {
//         removeTask(newEle, task);
//     });
// }

// function saveTask(task) {
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks.push(task);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function loadTasks() {
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks.forEach(function (task) {
//         addTask(task);
//     });
// }

// function removeTask(element, task) {
//     element.remove();
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks = tasks.filter(t => t !== task);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

