import { getActiveProject, projectsArray } from "./data";
import DOMPurify from "dompurify";

/* DOM ELEMENT SELECTION
####################################################################*/
export function getContent() {
  return document.querySelector("#content .tasks-container");
}
export function getNav() {
  return document.querySelector("nav");
}
export function getProjectLinks() {
  const nav = getNav();
  return nav.querySelectorAll("a");
}
export function getContentHeadline() {
  return document.querySelector("h1");
}
export function getTodoItems() {
  const content = getContent();
  return content.querySelectorAll(".list-item");
}

/* CONTENT UPDATE
####################################################################*/
/* Function to red the projects array, wrap all project
names in an <a> tag and list them in the <nav> section */
export function updateNav() {
  const nav = getNav();
  nav.innerHTML = "";

  projectsArray.forEach((project) => {
    let projectLink = createHyperlink(project);
    nav.appendChild(projectLink);
  });
}

/* Function to display all todo items associated with a project inside the content section.
The items are all wrapped in a <div>, while the items properties are wrapped in a <span> */
export function updateContent(project) {
  const content = getContent();
  content.innerHTML = "";
  updateContentHeadline();

  if (project.array.length > 0) {
    project.array.forEach((todoItem) => {
      let todoItemWrapper = createTodoItemContainer(todoItem);

      for (let key in todoItem) {
        /* Check if the key belongs to the list item and not to the prototype
        and if the key is not part of the isHiddenProperty array */
        if (todoItem.hasOwnProperty(key) && !todoItem.isHiddenProperty(key)) {
          if (key !== "title") {
            /* Wrap all property values of list items in a HTML <span> tag */
            let todoItemKeyWrapper = document.createElement("span");
            todoItemKeyWrapper.textContent = todoItem[key];
            todoItemWrapper.appendChild(todoItemKeyWrapper);
          } else {
            /* Wrap the title value in a special editable <div> */
            let todoItemTitleWrapper = createTodoItemTitleWrapper();
            todoItemTitleWrapper.textContent = todoItem[key];
            todoItemWrapper.appendChild(todoItemTitleWrapper);
          }
        }
      }

      content.appendChild(todoItemWrapper);
    });
  }
}

/* DOM ELEMENT CREATION
####################################################################*/
/* Function to streamline the creation of hyperlinks */
function createHyperlink(project) {
  let link = document.createElement("a");
  link.href = "#";
  link.textContent = project.name;
  link.setAttribute("data-project-id", project.id);

  return link;
}

/* Function to streamline the creation divs that wrap the list items */
function createTodoItemContainer(todoItem) {
  let wrapper = document.createElement("div");
  wrapper.classList.add("todo-item");
  wrapper.setAttribute("data-project-id", todoItem.projectId);
  wrapper.id = todoItem.id;

  return wrapper;
}

function createTodoItemTitleWrapper() {
  const titleWrapper = document.createElement("div");
  titleWrapper.classList.add("todo-item__name");
  titleWrapper.contentEditable = "true";
  titleWrapper.tabIndex = "1";

  return titleWrapper;
}

/* DOM ELEMENT MANIPULATION
####################################################################*/
/* Function to remove all "active" classes from the project links */
function removeAllActiveClasses() {
  const projectLinks = getProjectLinks();
  projectLinks.forEach((link) => {
    if (link.classList.contains("active")) link.classList.remove("active");
  });
}

/* Function to add the class "active" to an html element */
export function addActiveClass(htmlElement) {
  removeAllActiveClasses();
  htmlElement.classList.add("active");
}

/* Function to set the headline above the task
items to the title of the active project */
export function updateContentHeadline() {
  const headline = getContentHeadline();
  headline.textContent = getActiveProject().name;
}

export function focusElementAndClearContent(id) {
  const newTodoItem = getTodoItemNameFieldById(id);
  newTodoItem.focus();
  newTodoItem.textContent = "";
}

/* DOM ELEMENT DATA RETRIEVAL
####################################################################*/
/* Function to retrieve the data-project-id from a project */
export function getDataProjectId(htmlElement) {
  return htmlElement.getAttribute("data-project-id");
}

/* Function to retrieve the id from an html element */
export function getElementId(htmlElement) {
  return htmlElement.id;
}

/* Function to retrieve an html element by its id */
export function getTodoItemNameFieldById(id) {
  const todoItem = document.getElementById(id);
  return todoItem.querySelector(".todo-item__name");
}

/* Function to retrieve the data-project-id from a 
project that currently has the "active" class */
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

export function isTodoItemTitle(event) {
  return event.target.matches(".todo-item__name");
}

export function isProjectLink(event) {
  return event.target.matches("a");
}

export function isTextContentEmpty(event) {
  return event.target.textContent === "";
}

/* DATA INPUT
####################################################################*/
(function addProjectInputFieldToNav() {
  const inputWrapper = document.querySelector(".input-wrapper");

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Project name";

  inputWrapper.appendChild(input);
})();

/* Function to sanitize user input DataTransfer, to prevent XSS attacks */
export function sanitizeUserData(data) {
  return DOMPurify.sanitize(data);
}
