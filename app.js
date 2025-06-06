function addTask() {
    const groupName = document.getElementById("groupName").value.trim();
    const taskText = document.getElementById("taskInput").value.trim();
    const taskPriority = document.getElementById("taskPriority").value;
    const taskDate = document.getElementById("taskDate").value;
  
    if (!groupName || !taskText) return;
  
    // Create or find group container
    let groupDiv = document.querySelector(`[data-group="${groupName}"]`);
  
    if (!groupDiv) {
      groupDiv = document.createElement("div");
      groupDiv.className = "group";
      groupDiv.setAttribute("data-group", groupName);
  
      const title = document.createElement("h2");
      title.textContent = groupName;
      groupDiv.appendChild(title);
  
      const taskList = document.createElement("ul");
      taskList.id = `list-${groupName}`;
      groupDiv.appendChild(taskList);
  
      document.getElementById("groupsContainer").appendChild(groupDiv);
    }
  
    const taskList = groupDiv.querySelector("ul");
  
    // Create list item
    const li = document.createElement("li");
  
    // Add priority class
    li.classList.add(`priority-${taskPriority}`);
  
    // Task text span
    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;
  
    // Info div for date and priority
    const infoDiv = document.createElement("div");
    infoDiv.className = "task-info";
  
    const prioritySpan = document.createElement("span");
    prioritySpan.textContent = `Priority: ${capitalizeFirstLetter(taskPriority)} | `;
  
    const dateSpan = document.createElement("span");
    dateSpan.textContent = taskDate ? `Due: ${taskDate}` : "";
  
    infoDiv.appendChild(prioritySpan);
    infoDiv.appendChild(dateSpan);
  
    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.onclick = function () {
      li.classList.toggle("completed");
    };
  
    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.onclick = function () {
      taskList.removeChild(li);
    };
  
    // Group buttons
    const taskButtons = document.createElement("div");
    taskButtons.className = "task-buttons";
    taskButtons.appendChild(completeBtn);
    taskButtons.appendChild(deleteBtn);
  
    li.appendChild(taskTextSpan);
    li.appendChild(document.createElement("br"));
    li.appendChild(infoDiv);
    li.appendChild(taskButtons);
  
    taskList.appendChild(li);
  
    // Clear inputs
    document.getElementById("groupName").value = "";
    document.getElementById("taskInput").value = "";
    document.getElementById("taskDate").value = "";
  }
  
  function deleteAllTasks() {
    const groupsContainer = document.getElementById("groupsContainer");
    groupsContainer.innerHTML = "";
  }
  
  // Helper function
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }