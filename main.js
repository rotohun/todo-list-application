
var taskInput = document.getElementById('new-task');
var addButton = document.getElementsByTagName("button")[0];
var incompleteTaskHandler = document.getElementById('incomplete-tasks');
var completeTaskHandler = document.getElementById('completed-tasks');

// New Task list item

var createNewTaskElement = function (taskString) {
		//Create list item.
		var listItem = document.createElement("li");
			//input checkbox
			var checkBox = document.createElement("input");
			//label
			var label = document.createElement("label");
			//input (text)
			var editInput = document.createElement("input");
			//button.edit
			var editButton = document.createElement("button");
			//button.delete
			var deleteButton = document.createElement("button");

		checkBox.type = "checkBox";
		editInput.type = "text";

		editButton.innerText = "Edit";
		editButton.className = "edit";
		deleteButton.innerText = "Delete";
		deleteButton.className = "delete";

		label.innerText = taskString;

		listItem.appendChild(checkBox);
		listItem.appendChild(label);
		listItem.appendChild(editInput);
		listItem.appendChild(editButton);
		listItem.appendChild(deleteButton);

		return listItem;

}


//Add a new task.
var addTask = function () {

	console.log("add Task");
		//Create a new list item with the text from newtask.
		var listItem = createNewTaskElement(taskInput.value);

		//Append listItem to incompleteTaskHandler
		incompleteTaskHandler.appendChild(listItem);
		bindTaskEvents(listItem, taskCompleted);

		taskInput.value = "";
}


//Edit an existing task.
var editTask = function (argument) {

	console.log("edit Task");

	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input[type=text]");
	var label = listItem.querySelector('label');

		//if the class of the parent is .editmode

		var containerClass = listItem.classList.contains('editMode');

		if (containerClass) {

			//Switch for .editmode
			//label text become the input's value
			label.innerText = editInput.value;

		}else{

			//switch to editmode
			//input value becomes the label's text
			editInput.value = label.innerText;
		}
 
		//Toggle .editmode on the parent
		listItem.classList.toggle("editmode");

}

//Delete an existing task.
var deleteTask = function (argument) {
	console.log("delete Task");
	//When the delete button is pressed
		//Remoxe the parent list item from the ul.
		var listItem = this.parentNode;
		var ul = listItem.parentNode;

		//Remove
		ul.removeChild(listItem);
}


//Mark an existing task as complete.
var taskCompleted = function (argument) {
	console.log("Completed")
	//When the checkbox is checked 
		//Appened the task list item to #completed-tasks
		var listItem = this.parentNode;
		completeTaskHandler.appendChild(listItem);
		bindTaskEvents(listItem, taskIncompleted);
}

//Mark a task as incomplete.
var taskIncompleted = function (argument) {
	console.log("Inompleted")
	//When the checkbox is unchecked
		//append the task to the incomplete.
		var listItem = this.parentNode;
		incompleteTaskHandler.appendChild(listItem);
		bindTaskEvents(listItem, taskCompleted);
}


var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
		console.log("Binded")
		//Select lits items children it's children.
		var checkBox = taskListItem.querySelector('input[type=checkbox]');
		var editButton = taskListItem.querySelector('button.edit');
		var deleteButton = taskListItem.querySelector('button.delete');

		//Bind editTask to edit button.
		editButton.onclick = editTask;
		//Bind delete task to the delete button.
		deleteButton.onclick = deleteTask;
		//Bind checkBoxEventHandler to the check box.
		checkBox.onchange = checkBoxEventHandler;
}


//set the click handler to the addTask function.
addButton.onclick = addTask;


//Cycle over incompleteTaskHandler ul list items.
for (var i = 0 ;  i < incompleteTaskHandler.children.length; i++) {
	

	bindTaskEvents(incompleteTaskHandler.children[i], taskCompleted)
}
	// For each list item.
		//Bind events to list item's children (taskcomplted)

//Cycle over completeTaskHandler ul list items.
for (var i = 0 ;  i < completeTaskHandler.children.length; i++) {

	//Bind events to list item's children (taskincomplted)

	bindTaskEvents(completeTaskHandler.children[i], taskIncompleted)
}
	

	 




