import { TodoListItem } from "./todoListItemClass";
import { TodoProjectItem } from "./todoProjectClass";

/* Function to create a default project and todo item */
function createDefaultElements() {
  const defaultProject = new TodoProjectItem("1", "Default Project");
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

/* Function to create a default project and todo item */
function createDefaultElements2() {
  const defaultProject2 = new TodoProjectItem("2", "Default Project2");
  const defaultItem2 = new TodoListItem(
    "2",
    "Default Task2",
    "This is the default task2",
    "2024-05-09",
    "high"
  );
  defaultProject2.array.push(defaultItem2);

  return defaultProject2;
}

/* Save the default data into two variables */
const defaultProject = createDefaultElements();
const defaultProject2 = createDefaultElements2();

/* Create an array for the projects that store the list items */
export const projects = [];

/* Function to add a new project to the projects array */
export function addNewProjectsToArray(...newProjects) {
  newProjects.forEach((project) => {
    projects.push(project);
  });
}

/* Push default data onto project array */
addNewProjectsToArray(defaultProject, defaultProject2);

/* Function to find a project by it's ID in the projects array */
export function findProjectById(projectId) {
  return projects.find((project) => project.id === projectId);
}
