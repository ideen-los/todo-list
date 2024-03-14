import { TodoItem } from "./todoItemClass";
import { TodoProjectItem } from "./todoProjectClass";
import {
  getProjectLinks,
  refreshContent,
  getDataProjectId,
  findActiveProjectId,
  getElementId,
  sanitizeUserData,
} from "./dom";

/* DEFAULT DATA CREATION
####################################################################*/
// Creates default project1 + todo item
function createDefaultElements() {
  const defaultProject = new TodoProjectItem("Default Project");
  const defaultItem = new TodoItem("1", "Default Task", "2024-09-12");
  defaultProject.array.push(defaultItem);

  return defaultProject;
}

// Creates default project2 + todo item
function createDefaultElements2() {
  const defaultProject2 = new TodoProjectItem("Default Project2");
  const defaultItem2 = new TodoItem("2", "Default Task2", "2024-05-09");
  defaultProject2.array.push(defaultItem2);

  return defaultProject2;
}

// Default project variables
export const defaultProject = createDefaultElements();
export const defaultProject2 = createDefaultElements2();

/* PROJECT DATA MANAGEMENT
####################################################################*/
// Array that holds all project items
export const projectsArray = [];

// Adds new project to projectsArrray[]
export function storeProjects(...newProjects) {
  newProjects.forEach((project) => {
    projectsArray.push(project);
  });
}

/*
Finds and returns a project in projectsArray[] by it's ID.
Same ID is added as attribute to project button and todo item
*/
export function findProjectById(projectId) {
  return projectsArray.find((project) => project.id === projectId);
}

// Creates new project from name string and stores it in projectsArray[]
export function createAndStoreNewProject(projectName) {
  const newProject = new TodoProjectItem(projectName);
  storeProjects(newProject);

  return newProject.id;
}

// Finds the active project in the DOM and returns it as project object
export function getActiveProject() {
  const activeProjectId = findActiveProjectId();

  return findProjectById(activeProjectId);
}

// Sanitizes input value and stores it as new name for the project
export function storeProjectName(event) {
  const sanitizedValue = sanitizeUserData(event.target.value);
  const activeProject = getActiveProject();
  activeProject.name = sanitizedValue;
}

/* TODO ITEM DATA MANAGEMENT
####################################################################*/
export function getActiveTodoItemObjects() {
  const activeProject = getActiveProject();

  return activeProject.array;
}

// Creates new todo item with default name and adds it to the active project
export function createAndStoreNewTodoItem() {
  const activeProject = getActiveProject();
  const newTodoItem = new TodoItem(activeProject.id, "New Task");
  activeProject.array.push(newTodoItem);

  return newTodoItem.id;
}

// Changes the title of a todo item object
export function storeTodoItemTitle(event) {
  const sanitizedValue = sanitizeUserData(event.target.textContent);
  const activeTodoItemId = getElementId(event.target.parentNode);
  const activeTodoItem = findTodoItemById(activeTodoItemId);
  activeTodoItem.title = sanitizedValue;
}

// Finds a todo item by it's ID within an active project
export function findTodoItemById(itemId) {
  const activeProject = getActiveProject();
  return activeProject.array.find((item) => item.id === itemId);
}

// Removes a todo item by it's ID from an active project
export function removeTodoItemById(itemId) {
  const activeProject = getActiveProject();
  const itemIndex = activeProject.array.findIndex((item) => item.id === itemId);
  activeProject.array.splice(itemIndex, 1);
}

// Saves a date selected via datepicker in the todo item object
export function saveTodoItemDate(todoItemId, date) {
  const todoItem = findTodoItemById(todoItemId);
  todoItem.dueDate = date;
}
