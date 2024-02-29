export class TodoListItem {
  static hiddenProperties = ["projectId"]; // Define property, that should not be visible to the public

  constructor(projectId, title, description, dueDate, priority) {
    this.projectId = projectId;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  isHiddenProperty(property) {
    return TodoListItem.hiddenProperties.includes(property);
  }
}
