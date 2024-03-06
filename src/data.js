import { TodoListItem } from "./todoListItemClass";
import { TodoProjectItem } from "./todoProjectClass";
import {
  getProjectLinks,
  updateContent,
  getDataProjectId,
  findActiveProjectId,
  getElementId,
  sanitizeUserData,
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
export const projectsArray = [];

/* Function to add a new projects to the projects array */
export function storeProject(...newProjects) {
  newProjects.forEach((project) => {
    projectsArray.push(project);
  });
}

/* Function to find a project by it's ID in the projects array */
export function findProjectById(projectId) {
  return projectsArray.find((project) => project.id === projectId);
}

/* Function to create a new project from a string and store it in the projects array */
export function createAndStoreNewProject(projectName) {
  const newProject = new TodoProjectItem(projectName);
  storeProject(newProject);
}

/* Function to find the project object that is currently active in the DOM */
export function getActiveProject() {
  const activeProjectId = findActiveProjectId();

  return findProjectById(activeProjectId);
}

/* LIST ITEM DATA MANAGEMENT
####################################################################*/
export function createAndStoreNewListItem() {
  const activeProject = getActiveProject();
  const newListItem = new TodoListItem(activeProject.id, "New Task");
  activeProject.array.push(newListItem);

  return newListItem.id;
}

/* Function to change the  title of a list item if it is edited by the user */
export function storeListItemTitle(event) {
  const sanitizedValue = sanitizeUserData(event.target.textContent);
  const activeListItemId = getElementId(event.target.parentNode);
  updateOrRemoveListItem(activeListItemId, sanitizedValue, event);
}

export function updateOrRemoveListItem(itemId, itemTitle, event) {
  const listItem = findListItemById(itemId);
  if (itemTitle !== "") {
    listItem.title = itemTitle;
  } else if (event.key === "Escape") {
    listItem.resetTitle();
  } else if (
    event.inputType !== "deleteContentBackward" &&
    event.inputType !== "deleteContentForward"
  ) {
    removeListItemById(itemId);
  }
}

/* Function to find a listItem by it's ID in the array of the active project */
export function findListItemById(itemId) {
  const activeProject = getActiveProject();
  return activeProject.array.find((item) => item.id === itemId);
}

/* Function to remove a list item by it's ID from the array of the active project */
export function removeListItemById(itemId) {
  const activeProject = getActiveProject();
  const itemIndex = activeProject.array.findIndex((item) => item.id === itemId);
  activeProject.array.splice(itemIndex, 1);
  updateContent(activeProject);
}
