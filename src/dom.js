import { getActiveProject, projectsArray } from "./data";
import DOMPurify from "dompurify";

/* DOM ELEMENT SELECTION
####################################################################*/
export function getContent() {
  return document.querySelector("#content .todo-container");
}
export function getNav() {
  return document.querySelector("nav");
}
export function getProjectLinks() {
  const nav = getNav();
  return nav.querySelectorAll(".project-item");
}
export function getContentHeadline() {
  return document.querySelector("h1");
}
export function getTodoItems() {
  const content = getContent();
  return content.querySelectorAll(".list-item");
}
export function getNewTaskButton() {
  return document.querySelector(".add-todo-item");
}
export function getNewProjectButton() {
  return document.querySelector(".add-project");
}

/* CONTENT UPDATE
####################################################################*/
/*
Accesses the projects array, wraps all properties in a div container and appends it to the <nav>.
The name property of all projects is wrapped in a span tag and an input field. Those are appended to the container.
*/
export function updateNav() {
  const nav = getNav();
  nav.innerHTML = "";

  projectsArray.forEach((project) => {
    let container = createProjectContainer(project);
    let span = createSpan(project);
    let input = createInputField(project);

    container.appendChild(span);
    container.appendChild(input);
    nav.appendChild(container);
  });
}

/* 
Displays all todo items associated with a project object inside the content section.
All properties are wrapped in a div container.
The individual properties are wrapped in a span tag and appended to the container
*/
export function updateContent(project) {
  const content = getContent();
  content.innerHTML = "";
  updateContentHeadline();

  if (project.array.length > 0) {
    project.array.forEach((todoItem) => {
      let todoItemContainer = createTodoItemContainer(todoItem);

      for (let key in todoItem) {
        /* 
        Checks if the key belongs to the respective item's instance (not to the prototype).
        It also checks if the key is not part of the isHiddenProperty array.
        */
        if (todoItem.hasOwnProperty(key) && !todoItem.isHiddenProperty(key)) {
          if (key !== "title") {
            let todoItemKeyWrapper = document.createElement("span");
            todoItemKeyWrapper.textContent = todoItem[key];
            todoItemContainer.appendChild(todoItemKeyWrapper);
          } else {
            let todoItemTitleWrapper = createTodoItemTitleWrapper();
            todoItemTitleWrapper.textContent = todoItem[key];
            todoItemContainer.appendChild(todoItemTitleWrapper);
          }
        }
      }

      content.appendChild(todoItemContainer);
    });
  }
}

/* DOM ELEMENT CREATION
####################################################################*/
// Streamlines the creation of span elements and set a project name as value
function createSpan(project) {
  const span = document.createElement("span");
  span.textContent = project.name;

  return span;
}

// Streamlines the creation of input fields and set a project name as value
function createInputField(project) {
  const input = document.createElement("input");
  input.type = "text";
  input.classList.add("hide");
  input.value = project.name;

  return input;
}

// Streamlines the creation of a div container for a project's properties
function createProjectContainer(project) {
  const container = document.createElement("div");
  container.classList.add("project-item");
  container.setAttribute("data-project-id", project.id);

  return container;
}

// Streamlines the creation of a div container for a todo item's properties
function createTodoItemContainer(todoItem) {
  const container = document.createElement("div");
  container.classList.add("todo-item");
  container.setAttribute("data-project-id", todoItem.projectId);
  container.id = todoItem.id;

  return container;
}

/*
Streamlines the creation of a wrapper for a todo item's title property.
Sets the conteneditable property of the wrapper to "true", so the title can be edited directly on the item.
*/
function createTodoItemTitleWrapper() {
  const titleWrapper = document.createElement("div");
  titleWrapper.classList.add("todo-item__name");
  titleWrapper.contentEditable = "true";
  titleWrapper.tabIndex = "1";

  return titleWrapper;
}

/* DOM ELEMENT MANIPULATION
####################################################################*/
// Removes all "active" classes from the links that represent the project objects
function removeAllActiveClasses() {
  const projectLinks = getProjectLinks();
  projectLinks.forEach((link) => {
    if (link.classList.contains("active")) link.classList.remove("active");
  });
}

// Adds the class "active" to a link that represents a project object
export function addActiveClass(htmlElement) {
  removeAllActiveClasses();
  htmlElement.classList.add("active");
}

// Sets the headline above the todo items to the title property of the active project object
export function updateContentHeadline() {
  const headline = getContentHeadline();
  headline.textContent = getActiveProject().name;
}

// Focuses the pointer on a specific todo element identified by it's ID and clears it's textContent
export function focusElementAndClearContent(id) {
  const newTodoItem = getTodoItemNameFieldById(id);
  newTodoItem.focus();
  newTodoItem.textContent = "";
}

/* DOM ELEMENT DATA RETRIEVAL
####################################################################*/
// Retrieves the data-project-id attribute from an element
export function getDataProjectId(htmlElement) {
  return htmlElement.getAttribute("data-project-id");
}

// Retrieves the ID from an HTML element
export function getElementId(htmlElement) {
  return htmlElement.id;
}

// Retrieves an HTML element by its ID
export function getTodoItemNameFieldById(id) {
  const todoItem = document.getElementById(id);
  return todoItem.querySelector(".todo-item__name");
}

// Checks all links that reference project objects and returns the one that has the "active" class.
export function findActiveProjectId() {
  const projectLinks = getProjectLinks();
  let activeProjectId = "";

  projectLinks.forEach((link) => {
    if (link.classList.contains("active")) {
      activeProjectId = getDataProjectId(link);
    }
  });

  return activeProjectId;
}

// Checks if an event happened on the title of a todo item
export function isTodoItemTitle(event) {
  return event.target.matches(".todo-item__name");
}

// Checks if an event happened on .project-item or a child of .project-item
export function isProjectLink(event) {
  return event.target.closest(".project-item");
}

// Checks if the textContent of an element is empty
export function isTextContentEmpty(event) {
  return event.target.textContent === "";
}

/* DATA INPUT
####################################################################*/
// Sanitizes data entered by users to prevent XSS attacks
export function sanitizeUserData(data) {
  return DOMPurify.sanitize(data);
}
