export class TodoListItem {
  static globalID = 0;

  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    // Increment the static globalID for TodoObject to ensure a unique instanceID for each new instance
    TodoObject.globalID += 1;
    // Assign the newly incremented globalID to this instance's instanceID
    this.instanceID = TodoObject.globalID;
  }
}
