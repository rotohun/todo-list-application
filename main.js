
var taskInput = document.getElementById('new-task');
var addButton = document.getElementsByTagName("button")[0];
var incompleteTaskHandler = document.getElementById('incomplete-tasks');
var completeTaskHandler = document.getElementById('completed-tasks');

//Add a new task.
var addTask = function () {

	console.log("add Task");
	//When the button is pressed.
		//Create a new list item with the text from newtask.
			//input textbox
			//label
			//input (text)
			//button.edit
			//button.delete
}


//Edit an existing task.
var editTask = function (argument) {

	console.log("edit Task");
	// When the button is pressed
		//if the class of the parent is .editmode
			//Switch for .editmode
			//label text become the input's value
		//else
			//switch to editmode
			//input value becomes the label's text 
		//Toggle .editmode on the parent
}

//Delete an existing task.
var deleteTask = function (argument) {
	console.log("delete Task");
	//When the delete button is pressed
		//Remoxe the parent list item from the ul.
}


//Mark an existing task as complete.
var taskComplted = function (argument) {
	console.log("Completed")
	//When the checkbox is checked 
		//Appened the task list item to #completed-tasks
}

//Mark a task as incomplete.
var taskIncomplted = function (argument) {
	console.log("Inompleted")
	//When the checkbox is unchecked
		//append the task to the incomplete.	
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
	

	bindTaskEvents(incompleteTaskHandler.children[i], taskComplted)
}
	// For each list item.
		//Bind events to list item's children (taskcomplted)

//Cycle over completeTaskHandler ul list items.
for (var i = 0 ;  i < completeTaskHandler.children.length; i++) {

	//Bind events to list item's children (taskincomplted)

	bindTaskEvents(completeTaskHandler.children[i], taskIncomplted)
}
	

	 




