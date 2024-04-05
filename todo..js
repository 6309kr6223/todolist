function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = taskText;
        
        li.addEventListener("click", function() {
            this.classList.toggle("completed");
        });
        
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a valid task!");
    }
}
