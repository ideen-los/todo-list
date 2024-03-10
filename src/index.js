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
  hideProjectInputField,
  showProjectInputField,
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
Activates a project. 
Returns it from projectsArray[] by looking up it's ID.
It's retrieved from a <div> referencing the project name.
*/
function initializeProjectNavigation() {
  const nav = getNav();

  nav.addEventListener("click", (event) => {
    if (isProjectLink(event)) {
      const projectLink = event.target;
      const projectId = getDataProjectId(projectLink);
      const activeProject = findProjectById(projectId);

      addActiveClass(projectLink);
      updateContent(activeProject);
    }
  });
}

// Manages user interaction/updates to project name
function handleProjectNameInteraction() {
  const nav = getNav();

  /* 
  Hides name field & shows input when a project name is clicked & project is active.
  If not active, a click will activate the project (handled by initializeProjectNavigation()).
  The <span> that wraps the project name has "pointer-events: none" while the project is not active.
  */
  nav.addEventListener("click", (event) => {
    const allProjectLinks = getProjectLinks();

    if (isProjectLink(event)) {
      const projectLink = event.target;

      allProjectLinks.forEach((link) => {
        // Hides name & shows input field of any project other than event.target
        if (link !== projectLink) {
          const name = link.querySelector("span");
          const input = link.querySelector("input");

          name.classList.remove("hide");
          input.classList.add("hide");
        }
      });
    }

    if (isProjectName(event)) {
      showProjectInputField(event);
    }
  });

  /* 
  Stores & updates a project name when a user updates the input field.
  */
  nav.addEventListener("input", (event) => {
    if (isProjectInput(event)) {
      storeProjectName(event);
      updateProjectName(event);
    }
  });

  /* 
  Hides the input field when the focus is lost. 
  Updates the right hand side content, to reflect any possible updates to the name.
  */
  nav.addEventListener("focusout", (event) => {
    if (isProjectInput(event)) {
      const activeProject = getActiveProject();

      hideProjectInputField(event);
      updateContent(activeProject);
    }
  });

  /* 
  Same functionality as above for Escape & Enter key.
  */
  nav.addEventListener("keydown", (event) => {
    if (
      isProjectInput(event) &&
      (event.key === "Escape" || event.key === "Enter")
    ) {
      const activeProject = getActiveProject();

      hideProjectInputField(event);
      updateContent(activeProject);
    }
  });
}

// Creates new todo item via click on "Add Task"
(function initializeNewTaskButton() {
  const newTaskButton = getNewTaskButton();

  newTaskButton.addEventListener("click", () => {
    const activeProject = getActiveProject();

    createAndStoreNewTodoItem();
    updateContent(activeProject);
  });
})();

// Creates new project via click on "New Project"
(function initializeNewProjectButton() {
  const newProjectButton = getNewProjectButton();

  newProjectButton.addEventListener("click", () => {
    createAndStoreNewProject();
    updateNav();
  });
})();

// Manages user interaction with a todo item title
function handleTodoItemTitleInteraction() {
  const content = getContent();

  /* 
  Stores updates to a todo item title.
  Exceptions: "Enter" & "Escape" -> see below. 
  */
  content.addEventListener("input", (event) => {
    if (isTodoItemTitle(event)) {
      storeTodoItemTitle(event);
    }
  });

  // Updates a todo item title when the focus is lost. Removes it when title is empty.
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

  // Creates new todo item when ENTER is pressed. Removes it when title is empty.
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

        const newTodoItemId = createAndStoreNewTodoItem(); // returns the new item's id
        updateContent(activeProject);
        focusElementAndClearContent(newTodoItemId);
      }
    }

    // Focuses <body> when ESCAPE is pressed. Resets the title to the default value when empty.
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
// Pushes default data onto projectsArray[]
storeProject(defaultProject, defaultProject2);
document.addEventListener("DOMContentLoaded", () => {
  // Displays the name of all projects from projectsArray[]
  updateNav();
  // Marks the first project as active
  addActiveClass(getProjectLinks()[0]);
  // Associates the project names with the actual poject objects
  initializeProjectNavigation();
  // Displays all todo items from the first project
  updateContent(projectsArray[0]);
  // Handles updates of todo item title by the user
  handleTodoItemTitleInteraction();
  // Handles updates of project name by the user
  handleProjectNameInteraction();
});
