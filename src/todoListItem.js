export class TodoListItem {
  static globalID = 0;

  constructor(projectID, title, description, dueDate, priority) {
    this.projectID = projectID;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    // Increment the static globalID for TodoObject when the class
    // is called to ensure a unique instanceID for each new instance
    TodoListItem.globalID += 1;
    // Assign the incremented globalID to the new instance
    this.instanceID = TodoListItem.globalID;
  }
}
