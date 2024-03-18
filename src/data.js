import { TodoItem } from "./todoItemClass";
import { TodoProjectItem } from "./todoProjectClass";
import {
  getProjectLinks,
  populateContent,
  getDataProjectId,
  findActiveProjectId,
  getElementId,
  sanitizeUserData,
  getElementByDataProjectId,
  addActiveClassToElement,
} from "./dom";
import {
  isLocalStorageAvailable,
  saveProjectsToLocalStorage,
  storageAvailable,
} from "./localStorage";

/* DEFAULT DATA CREATION
####################################################################*/
// Creates default project1 + todo item
function createDefaultElements() {
  const defaultProject = new TodoProjectItem("Default Project", true);
  const defaultItem = new TodoItem("1", "Default Task");
  defaultProject.array.push(defaultItem);

  return defaultProject;
}

// Default project variables
export const defaultProject = createDefaultElements();

/* PROJECT DATA MANAGEMENT
####################################################################*/
// Array that holds all project items
export const projectsArray = [];

// Returns true if the projectsArray[] is NOT empty
export function isProjectsArrayNotEmpty() {
  return projectsArray.length > 0;
}

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

// Finds the active project and returns it
export function getActiveProject() {
  let activeProject = null;

  projectsArray.forEach((project) => {
    if (project.active === true) {
      activeProject = project;
    }
  });

  return activeProject;
}

export function setActiveProject(project) {
  if (isProjectsArrayNotEmpty) {
    projectsArray.forEach((item) => {
      if (item.id !== project.id) {
        item.active = false;
      } else {
        item.active = true;
      }
    });
  }
}

export function getIndexOfProjectInProjectsArray(project) {
  return projectsArray.findIndex((item) => item === project);
}

// Sanitizes input value and stores it as new name for the project
export function storeProjectName(event) {
  const sanitizedValue = sanitizeUserData(event.target.value);
  const activeProject = getActiveProject();
  activeProject.name = sanitizedValue;
}

// Get all projects from local storage and reconstruct them with the ProjectItem class to reestablish inheritance, methods, etc.
export function reconstructAllProjectObjects(storedProjectsArray) {
  const newProjectsArray = [];

  storedProjectsArray.forEach((storedProject) => {
    let newProject = new TodoProjectItem(
      storedProject.name,
      storedProject.active
    );
    newProject.array = reconstructAllTodoItems(storedProject.array);

    newProjectsArray.push(newProject);
  });

  return newProjectsArray;
}

// Takes the current projects array, empties it and pushes all items from a new array onto it
export function emptyOldArrayAndPopulateWithNewItems(newArray) {
  projectsArray.splice(0, projectsArray.length);
  projectsArray.push(...newArray);
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

export function projectHasTodoItems(project) {
  return project.array.length > 0;
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
  const activeProject = getActiveProject();
  const todoItem = findTodoItemById(todoItemId);

  todoItem.dueDate = date;
  saveProjectsToLocalStorage();
  populateContent(activeProject);
}

export function reconstructAllTodoItems(projectArray) {
  const newProjectArray = [];

  projectArray.forEach((storedTodoItem) => {
    let newTodoItem = new TodoItem(
      storedTodoItem.projectId,
      storedTodoItem.title,
      storedTodoItem.dueDate,
      storedTodoItem.checked,
      storedTodoItem.id
    );

    newProjectArray.push(newTodoItem);
  });

  return newProjectArray;
}
