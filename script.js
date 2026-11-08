const input=document.getElementById("task");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");

let tasks=[];

addBtn.addEventListener("click",()=>{
    const userInput = input.value.trim();
    if(userInput=== "") return;

    const taskObject={
        id:Date.now(),
        title:userInput,
        completed:false
    }

    let task=document.createElement("li");
    task.textContent=userInput;
    taskList.append(task);
    tasks.push(taskObject)
    input.value="";

    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";
    task.appendChild(deleteBtn);

    deleteBtn.addEventListener("click",()=>{
        task.remove();
        tasks=tasks.filter(x=>x.id!==taskObject.id);
    })

    console.log(tasks);
}) 