export class TodoListItem {
  static hiddenProperties = ["projectId", "id"]; // Define property, that should not be visible to the public
  static globalId = 0;

  constructor(
    projectId,
    title = "New Task",
    description = "",
    dueDate = "",
    priority = ""
  ) {
    this.projectId = projectId;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    TodoListItem.globalId += 1;
    this.id = TodoListItem.globalId.toString();
  }

  isHiddenProperty(property) {
    return TodoListItem.hiddenProperties.includes(property);
  }
}

TodoListItem.prototype.resetTitle = function () {
  this.title = "New Task";
};
