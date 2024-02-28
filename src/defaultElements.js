import { TodoListItem } from "./todoListItem";
import { ProjectItem } from "./projectItem";

// Create default project and todo item
export function createDefaultElements() {
  const defaultProject = new ProjectItem("1", "Default Project");
  const defaultItem = new TodoListItem(
    "1",
    "Default Task",
    "This is the default task",
    "2024-09-13",
    "medium"
  );
  defaultProject.array.push(defaultItem);

  return defaultProject;
}

// Create default project and todo item
export function createDefaultElements2() {
  const defaultProject2 = new ProjectItem("2", "Default Project2");
  const defaultItem2 = new TodoListItem(
    "2",
    "Default Task",
    "This is the default task",
    "2024-09-13",
    "medium"
  );
  defaultProject2.array.push(defaultItem2);

  return defaultProject2;
}
