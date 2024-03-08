import "./style.scss";
import {
  getNav,
  getContent,
  getProjectLinks,
  getTodoItems,
  updateNav,
  updateContent,
  addActiveClass,
  getDataProjectId,
  getTodoItemNameFieldById,
  getElementId,
  focusElementAndClearContent,
  isTodoItemTitle,
  isTextContentEmpty,
  isProjectLink,
} from "./dom";
import {
  findProjectById,
  defaultProject,
  defaultProject2,
  projectsArray,
  storeProject,
  createAndStoreNewProject,
  createAndStoreNewTodoItem,
  storeTodoItemTitle,
  getActiveProject,
  resetOrRemoveTodoItem,
  findTodoItemById,
  removeTodoItemById,
} from "./data";

/* USER INTERACTION
####################################################################*/
// Returns a project from the projects array by searching for it's ID retrieved from the project's link
function initializeProjectNavigation() {
  const nav = getNav();

  nav.addEventListener("click", (event) => {
    const projectId = getDataProjectId(event.target);
    const activeProject = findProjectById(projectId);

    if (isProjectLink(event)) {
      addActiveClass(event.target);
      updateContent(activeProject);
    }
  });
}

(function getNewProjectFromInputField() {
  const input = document.querySelector(".input-wrapper input");

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      event.preventDefault();

      createAndStoreNewProject(input.value);
      updateNav();
    }
  });
})();

// Creates a new todo item when the button "New Task" is clicked
(function initializeNewTaskButton() {
  const newTaskButton = document.querySelector(".add-task-item");

  newTaskButton.addEventListener("click", () => {
    const activeProject = getActiveProject();

    createAndStoreNewTodoItem();
    updateContent(activeProject);
  });
})();

// Handles user interaction with a todo item's title
function handleTodoItemTitleInteraction() {
  const content = getContent();

  /* 
  Listens for and stores updates to the todo item's title by the user.
  Several keys/actions are excluded -> see below. 
  */
  content.addEventListener("input", (event) => {
    if (isTodoItemTitle(event)) {
      storeTodoItemTitle(event);
    }
  });

  // Updates a todo item's title when it loses focus. Removes it when empty.
  content.addEventListener("focusout", (event) => {
    const activeProject = getActiveProject();
    const todoItemId = getElementId(event.target.parentNode);

    if (isTodoItemTitle(event)) {
      if (isTextContentEmpty(event)) {
        removeTodoItemById(todoItemId);
        updateContent(activeProject);
      } else {
        storeTodoItemTitle(event);
      }
    }
  });

  /*
  Creates a new todo item when ENTER is pressed. Removes it when the title is empty.
  If the user deletes the title by pressing DEL or BACKSPACE, the item won't be removed.
  */
  content.addEventListener("keydown", (event) => {
    const activeProject = getActiveProject();
    const todoItemId = getElementId(event.target.parentNode);
    const body = document.querySelector("body");

    if (isTodoItemTitle(event) && event.key === "Enter") {
      if (isTextContentEmpty(event)) {
        if (
          event.inputType !== "deleteContentBackward" &&
          event.inputType !== "deleteContentForward"
        ) {
          removeTodoItemById(todoItemId);
          updateContent(activeProject);
        } else {
          removeTodoItemById(todoItemId);
          updateContent(activeProject);
        }
      } else {
        event.preventDefault();

        const newTodoItemId = createAndStoreNewTodoItem(); // returns the new todo item's id
        updateContent(activeProject);
        focusElementAndClearContent(newTodoItemId);
      }
    }
    // Updates a todo item's title when ESCAPE is pressed. Resets it to the default when empty.
    if (isTodoItemTitle(event) && event.key === "Escape") {
      const activeProject = getActiveProject();
      const todoItemId = getElementId(event.target.parentNode);
      const todoItem = findTodoItemById(todoItemId);

      if (isTextContentEmpty(event)) {
        todoItem.resetTitle();
        updateContent(activeProject);
      } else {
        storeTodoItemTitle(event);
        body.focus();
      }
    }
  });
}

/* APP INITIALIZATION
####################################################################*/
// Pushes default data onto the projects array
storeProject(defaultProject, defaultProject2);
document.addEventListener("DOMContentLoaded", () => {
  // Displays the title of all stored projects in the <nav> as links
  updateNav();
  // Adds the class "active" to first project link
  addActiveClass(getProjectLinks()[0]);
  // Adds event listeners to the project links
  initializeProjectNavigation();
  // Populate content with the default todo items
  updateContent(projectsArray[0]);
  // Handles updates to the todo item title
  handleTodoItemTitleInteraction();
});
