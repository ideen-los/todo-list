import "./style.scss";
import {
  getNav,
  getContent,
  getProjectLinks,
  updateNav,
  updateContent,
  addActiveClass,
  getDataProjectId,
  getTodoItemNameFieldById,
  getElementId,
  focusElementAndClearContent,
  isTodoItemTitle,
  isTextContentEmpty,
  getNewTaskButton,
  getNewProjectButton,
  isProjectLink,
  isProjectName,
  isProjectInput,
  updateProjectName,
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
  findTodoItemById,
  removeTodoItemById,
  storeProjectName,
} from "./data";

/* USER INTERACTION
####################################################################*/
/* 
Returns a specific project from the projects array by searching for it's ID.
The ID is retrieved from a link that references a project object by it's name property. */
function initializeProjectNavigation() {
  const nav = getNav();

  nav.addEventListener("click", (event) => {
    if (isProjectLink(event)) {
      const projectLink = event.target;
      const id = getDataProjectId(projectLink);
      const activeProject = findProjectById(id);

      addActiveClass(projectLink);
      updateContent(activeProject);
    }
  });
}

// Manages user interaction with a project's name property represented by a link in the navigation on the left
function handleProjectNameInteraction() {
  const nav = getNav();

  /* 
  Adds and removes classes on a span and input field when a user clicks on the span which wraps a the project's name.
  If the project is not active, a click will only activate the project (handled in initializeProjectNavigation()).
  This is because the span element is set to pointer-events: none as long as a project link doesn't have the "active" class.
  */
  nav.addEventListener("click", (event) => {
    const allProjectLinks = getProjectLinks();

    if (isProjectLink(event)) {
      const projectLink = event.target;

      allProjectLinks.forEach((link) => {
        // Revert all links except the one the event happened on to their original state
        if (link !== projectLink) {
          const name = link.querySelector("span");
          const input = link.querySelector("input");

          name.classList.remove("hide");
          input.classList.add("hide");
        }
      });
    }

    if (isProjectName(event)) {
      const projectLink = event.target.parentNode;
      const name = projectLink.querySelector("span");
      const input = projectLink.querySelector("input");

      name.classList.add("hide");
      input.classList.remove("hide");
      input.select();
    }
  });

  nav.addEventListener("input", (event) => {
    if (isProjectInput(event)) {
      storeProjectName(event);
      updateProjectName(event);
    }
  });

  nav.addEventListener("focusout", (event) => {
    if (isProjectInput(event)) {
      const activeProject = getActiveProject();
      const projectLink = event.target.parentNode;
      const name = projectLink.querySelector("span");
      const input = projectLink.querySelector("input");

      name.classList.remove("hide");
      input.classList.add("hide");
      updateContent(activeProject);
    }
  });
}

// Creates a new todo item when the button "Add Task" is clicked
(function initializeNewTaskButton() {
  const newTaskButton = getNewTaskButton();

  newTaskButton.addEventListener("click", () => {
    const activeProject = getActiveProject();

    createAndStoreNewTodoItem();
    updateContent(activeProject);
  });
})();

// Creates a new project when the button "New Project" is clicked
(function initializeNewProjectButton() {
  const newProjectButton = getNewProjectButton();

  newProjectButton.addEventListener("click", () => {
    createAndStoreNewProject();
    updateNav();
  });
})();

// Manages user interaction with a todo item's title
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

    if (isTodoItemTitle(event) && isTextContentEmpty(event)) {
      removeTodoItemById(todoItemId);
      updateContent(activeProject);
    } else {
      storeTodoItemTitle(event);
    }
  });

  // Creates a new todo item when ENTER is pressed. Removes it when the title is empty.
  content.addEventListener("keydown", (event) => {
    const body = document.querySelector("body");
    const activeProject = getActiveProject();
    const todoItemId = getElementId(event.target.parentNode);

    if (isTodoItemTitle(event) && event.key === "Enter") {
      if (isTextContentEmpty(event)) {
        removeTodoItemById(todoItemId);
        updateContent(activeProject);
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
  handleProjectNameInteraction();
});
