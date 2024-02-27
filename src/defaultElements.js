import { TodoListItem } from "./todoListItem";
import { ProjectItem } from "./projectItem";

// Create default project and todo item
export function createDefaultElements() {
  const defaultProject = new ProjectItem("Default Project");
  const defaultItem = new TodoListItem(
    "Default Task",
    "This is the default task",
    "2024-09-13",
    "medium"
  );
  defaultProject.array.push(defaultItem);

  return defaultProject;
}
