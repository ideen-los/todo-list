import {
  getActiveProject,
  getActiveTodoItemObjects,
  projectsArray,
  saveTodoItemDate,
} from "./data";
import DOMPurify from "dompurify";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import localeEn from "air-datepicker/locale/en";
import { format } from "date-fns";

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
  return content.querySelectorAll(".todo-item");
}
export function getNewTaskButton() {
  return document.querySelector(".add-todo-item");
}
export function getNewProjectButton() {
  return document.querySelector(".add-project");
}

/* CONTENT UPDATES
####################################################################*/
/*
Accesses the projects array, wraps all properties in a div container and appends it to the <nav>.
The name property of all projects is wrapped in a span tag and an input field. Those are appended to the container.
*/
export function refreshNav() {
  const nav = getNav();
  nav.innerHTML = "";

  projectsArray.forEach((project) => {
    let container = createProjectContainer(project);
    const icon = createIcon();
    let span = createSpan(project);
    let input = createInputField(project);

    container.appendChild(icon);
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
export function refreshContent(project) {
  const content = getContent();
  content.innerHTML = "";
  updateContentHeadline();

  if (project.array.length > 0) {
    project.array.forEach((todoItem) => {
      const todoItemContainer = createTodoItemContainer(todoItem);
      const todoDateInput = createTodoItemDateInput(todoItem.id);

      const todoItemCheckComplete = createTodoItemCheckComplete();
      todoItemContainer.appendChild(todoItemCheckComplete);

      for (let key in todoItem) {
        /* 
        Checks if the key belongs to the item's instance and renders it in the DOM.
        It also checks if the key is not part of the isHiddenProperty array.
        */
        if (todoItem.hasOwnProperty(key) && !todoItem.isHiddenProperty(key)) {
          if (key === "title") {
            const todoItemTitleWrapper = createTodoItemTitleWrapper();
            todoItemTitleWrapper.textContent = todoItem[key];
            todoItemContainer.appendChild(todoItemTitleWrapper);
          } else if (key === "dueDate") {
            if (todoItem[key] !== "") {
              const date = format(new Date(), "yyyy-MM-dd");
              todoDateInput.value = todoItem[key];

              if (todoItem[key] < date) {
                todoDateInput.classList.add("expired");
              }
            }
          } else {
            const todoItemKeyWrapper = document.createElement("span");
            todoItemKeyWrapper.textContent = todoItem[key];
            todoItemContainer.appendChild(todoItemKeyWrapper);
          }
          // Checks if a todo item has been marked as complete
        } else if (key === "checked") {
          if (todoItem[key] === "true") {
            todoItemContainer.classList.add("checked");
          }
        }
      }

      todoItemContainer.appendChild(todoDateInput);

      content.appendChild(todoItemContainer);
      addDatepickersToTodoItems();
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

function createIcon() {
  const icon = document.createElement("i");

  icon.textContent = "☰";

  return icon;
}

// Creates an input field and sets a project name as it's value
function createInputField(project) {
  const input = document.createElement("input");
  input.type = "text";
  input.maxLength = "30";
  input.classList.add("hide");
  input.value = project.name;

  return input;
}

// Creates a div container for a project
function createProjectContainer(project) {
  const container = document.createElement("div");
  container.classList.add("project-item");
  container.setAttribute("data-project-id", project.id);

  return container;
}

// Creates a div container for a todo item
function createTodoItemContainer(todoItem) {
  const container = document.createElement("div");
  container.classList.add("todo-item");
  container.setAttribute("data-project-id", todoItem.projectId);
  container.id = todoItem.id;

  return container;
}

/*
Creates a wrapper for a todo item title.
Makes the title editable by contenteditable attribute.
*/
function createTodoItemTitleWrapper() {
  const titleWrapper = document.createElement("div");
  titleWrapper.classList.add("todo-item__name");
  titleWrapper.contentEditable = "true";
  titleWrapper.tabIndex = "1";

  return titleWrapper;
}

// Creates a radio button to mark a todo item as complete
function createTodoItemCheckComplete() {
  const label = document.createElement("label");
  label.classList.add("checkmark-container");

  const input = document.createElement("input");
  input.type = "radio";

  const span = document.createElement("span");
  span.classList.add("checkmark");

  label.appendChild(input);
  label.appendChild(span);

  return label;
}

// Creates a date input field to attach the AirDatepicker
function createTodoItemDateInput(id) {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "No date selected";
  input.classList.add(`datepicker-${id}`);

  return input;
}

/*
Creates an AirDatepicker instance.
A date selected via the picker is stored in the todo item dueDate property.
If dueDate isn't defined, no date will be preselected.
@param {string} id - The ID of the todo item the datepicker will be attached.
@param {string} dueDate - Optional date if provided is preselected in the datepicker.
*/
function createDatePickerObject(id, dueDate) {
  const config = {
    locale: localeEn,
    autoClose: true,
    dateFormat: "yyyy-MM-dd",
    position: "bottom right",
    // Fires when user selects a date in the datepicker
    onSelect: ({ date, formattedDate }) => {
      // Saves the selected date in the todo item's dueDate property
      if (date !== undefined) {
        saveTodoItemDate(id, formattedDate);
      } else {
        // Hide the datepicker if a date was deselected (returns undefined)
        datepicker.hide();
      }
    },
  };

  // If dueDate has been set, preselect this date in the datepicker
  if (dueDate) {
    config.selectedDates = [dueDate];
  }

  // Create a new datepicker instance with the above config settings
  const datepicker = new AirDatepicker(`.datepicker-${id}`, config);

  return datepicker;
}

// Attaches a datepicker to the todo items in the DOM
function addDatepickersToTodoItems() {
  const todoItems = getActiveTodoItemObjects();
  todoItems.forEach((item) => {
    createDatePickerObject(item.id, item.dueDate);
  });
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

// Gets the value from the project name input field, sanitizes it and sets it as textContent for the projects name
export function updateProjectName(event) {
  const projectLink = event.target.parentNode;
  const name = projectLink.querySelector("span");
  const sanitizedValue = sanitizeUserData(event.target.value);

  name.textContent = sanitizedValue;
}

/* DOM ELEMENT DATA RETRIEVAL
####################################################################*/
// Retrieves the data-project-id attribute from an element
export function getDataProjectId(htmlElement) {
  return htmlElement.getAttribute("data-project-id");
}

export function getElementByDataProjectId(id) {
  const allProjectLinks = getProjectLinks();
  let projectLink = null;

  allProjectLinks.forEach((link) => {
    let dataProjectId = getDataProjectId(link);

    if (dataProjectId === id) {
      projectLink = link;
    }
  });

  return projectLink;
}

// Retrieves the ID from an HTML element
export function getElementId(htmlElement) {
  return htmlElement.id;
}

// Retrieves HTML element by ID
export function getElementById(id) {
  return document.getElementById(id);
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

/* 
Removes the class "hide" from the project name input field, making it visible.
Adds the class "hide" to the project'S name wrapping span at the same time.
Finnally selects the text inside the input field for convenience.
*/
export function showProjectInputField(event) {
  const projectLink = event.target.parentNode;
  const name = projectLink.querySelector("span");
  const input = projectLink.querySelector("input");

  name.classList.add("hide");
  input.classList.remove("hide");
  input.select();
}

/* 
Adds the class "hide" to the project name input field, thus hiding it from display.
Removes the class "hide" from the project's name wrapping span at the same time.
*/
export function hideProjectInputField(event) {
  const projectLink = event.target.parentNode;
  const name = projectLink.querySelector("span");
  const input = projectLink.querySelector("input");

  name.classList.remove("hide");
  input.classList.add("hide");
}

// Checks if an event happened on the title of a todo item
export function isTodoItemTitle(event) {
  return event.target.matches(".todo-item__name");
}

// Checks if an event happened on .project-item or a child of .project-item
export function isProjectLink(event) {
  return event.target.matches(".project-item");
}

// Checks if event.target is the name of a project button
export function isProjectName(event) {
  return event.target.matches(".project-item span");
}

// Checks if event.target is the input field in a project button
export function isProjectInput(event) {
  return event.target.matches(".project-item input");
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
