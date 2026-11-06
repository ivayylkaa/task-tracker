const input=document.getElementById("task");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");



addBtn.addEventListener("click",()=>{
    const userInput = input.value.trim();
    if(userInput=== "") return;

    let task=document.createElement("li");
    task.textContent=userInput;
    taskList.append(task);

    input.value=" ";
})
