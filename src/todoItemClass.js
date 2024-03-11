export class TodoItem {
  static hiddenProperties = ["projectId", "id"]; // Define property, that should not be visible to the public
  static globalId = 0;

  constructor(projectId, title = "New Task", dueDate = "", priority = "") {
    this.projectId = projectId;
    this.title = title;
    /* this.description = description; */
    this.dueDate = dueDate;
    this.priority = priority;
    TodoItem.globalId += 1;
    this.id = TodoItem.globalId.toString();
  }

  isHiddenProperty(property) {
    return TodoItem.hiddenProperties.includes(property);
  }
}

TodoItem.prototype.resetTitle = function () {
  this.title = "New Task";
};
