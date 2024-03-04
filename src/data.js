import { TodoListItem } from "./todoListItemClass";
import { TodoProjectItem } from "./todoProjectClass";
import {
  getProjectLinks,
  populateContent,
  getDataProjectId,
  getActiveProjectId,
  getItemId,
} from "./dom";
import DOMPurify from "dompurify";

/* DEFAULT DATA CREATION
####################################################################*/
/* Function to create a default project and todo item */
function createDefaultElements() {
  const defaultProject = new TodoProjectItem("Default Project");
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
  const defaultProject2 = new TodoProjectItem("Default Project2");
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
export const defaultProject = createDefaultElements();
export const defaultProject2 = createDefaultElements2();

/* PROJECT DATA MANAGEMENT
####################################################################*/
/* Create an array that stores all the projects */
export const projects = [];

/* Function to add a new projects to the projects array */
export function storeProjects(...newProjects) {
  newProjects.forEach((project) => {
    projects.push(project);
  });
}

/* Function to find a project by it's ID in the projects array */
export function findProjectById(projectId) {
  return projects.find((project) => project.id === projectId);
}

/* Function to create a new project from a string and store it in the projects array */
export function createAndStoreNewProject(projectName) {
  const newProject = new TodoProjectItem(projectName);
  storeProjects(newProject);
}

/* Function to find the project object that is currently active in the DOM */
export function getActiveProject() {
  const projectId = getActiveProjectId();

  return findProjectById(projectId);
}

/* LIST ITEM DATA MANAGEMENT
####################################################################*/
export function createAndStoreNewListItem() {
  const project = getActiveProject();
  const newListItem = new TodoListItem(project.id, "New Task");
  project.array.push(newListItem);
  populateContent(project);

  return newListItem.id;
}

/* Function to change the  title of a list item if it is edited by the user */
export function storeListItemName(event) {
  let value = event.target.textContent;
  const sanitizedValue = DOMPurify.sanitize(value);
  const activeListItemId = getItemId(event.target.parentNode);
  const activeListItem = findListItemById(activeListItemId);
  activeListItem.title = sanitizedValue;
}

/* Function to find a listItem by it's ID in the array of the current active project */
export function findListItemById(itemId) {
  const project = getActiveProject();
  return project.array.find((item) => item.id === itemId);
}
