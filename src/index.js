import "./style.scss";
import {
  getNav,
  getContent,
  getProjectLinks,
  refreshNav,
  populateContent,
  getDataProjectId,
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
  createModalBox,
  getContentHeadlineContainer,
  getBody,
  showEmptyPojectPageHeadline,
  disableNewTaskButton,
  disableRemoveProjectButton,
  enableNewTaskButton,
  enableRemoveProjectButton,
  showEmptyTodoListMessage,
  addHighlightClassToNewProjectButton,
  removeHighlightClassFromNewProjectButton,
  addActiveClassToActiveProject,
  updateContentHeadline,
  showEmptyProjectsArrayMessage,
} from "./dom";
import {
  isProjectsArrayNotEmpty,
  findProjectById,
  defaultProject,
  projectsArray,
  storeProjects,
  createAndStoreNewProject,
  createAndStoreNewTodoItem,
  storeTodoItemTitle,
  findTodoItemById,
  removeTodoItemById,
  storeProjectName,
  reconstructAllProjectObjects,
  emptyOldArrayAndPopulateWithNewItems,
  getIndexOfProjectInProjectsArray,
  setActiveProject,
  getActiveProject,
  projectHasTodoItems,
} from "./data";
import {
  getProjectsFromLocalStorage,
  isLocalStorageAvailable,
  isProjectsArrayInStorage,
  saveProjectsToLocalStorage,
} from "./localStorage";

/* 
####################################################################
CONTENT UPDATE & REFRESH
Creates the todo items and projects,
shows the headline, adds datepickers
####################################################################
*/
function updateContent() {
  const content = getContent();
  content.innerHTML = "";

  // Checks whether there are projects to display
  if (isProjectsArrayNotEmpty()) {
    const activeProject = getActiveProject();

    // Checks if a project is marked active -> if not mark the first project in the array
    if (activeProject === null) {
      setActiveProject(projectsArray[0]);
      saveProjectsToLocalStorage();
    }

    addActiveClassToActiveProject();
    updateContentHeadline(activeProject);
    enableNewTaskButton();
    enableRemoveProjectButton();
    removeHighlightClassFromNewProjectButton();

    // Checks whether the active project has todo items
    if (projectHasTodoItems(activeProject)) {
      populateContent(activeProject);
    } else {
      showEmptyTodoListMessage();
    }
  } else {
    // If projectsArray[] is empty change the look of the app
    showEmptyProjectsArrayMessage();
    showEmptyPojectPageHeadline();
    disableNewTaskButton();
    disableRemoveProjectButton();
    addHighlightClassToNewProjectButton();
  }
}

/* 
####################################################################
PROJECT ACTIVATION
Returns project from projectsArray[] by it's ID.
ID is retrieved from a <div> referencing the project's name.
####################################################################
*/
function initializeProjectNavigation() {
  const nav = getNav();

  nav.addEventListener("click", (event) => {
    if (isProjectLink(event)) {
      const projectLink = event.target;
      const projectId = getDataProjectId(projectLink);
      const clickedProject = findProjectById(projectId);

      setActiveProject(clickedProject);
      saveProjectsToLocalStorage();
      updateContent();
    }
  });
}

/* 
###############################################################################
PROJECT CREATION
Creates new project via click on "New Project" 
###############################################################################
*/
(function initializeNewProjectButton() {
  const newProjectButton = getNewProjectButton();
  const body = getBody();

  newProjectButton.addEventListener("click", () => {
    const newProjectId = createAndStoreNewProject(); // returns the new project's ID
    const newProject = findProjectById(newProjectId);

    setActiveProject(newProject);
    saveProjectsToLocalStorage();
    refreshNav();
    updateContent();
    body.focus();
  });
})();

/* 
###############################################################################
PROJECT NAME INTERACTION
Manages user interaction/updates to project name 
###############################################################################
*/
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

  // Stores & updates a project name when a user updates the input field.
  nav.addEventListener("input", (event) => {
    if (isProjectInput(event)) {
      storeProjectName(event);
      updateProjectName(event);
      saveProjectsToLocalStorage();
    }
  });

  /* 
  Hides the input field when the focus is lost. 
  Updates the right hand side content, to reflect any possible updates to the name.
  */
  nav.addEventListener("focusout", (event) => {
    if (isProjectInput(event)) {
      const activeProject = getActiveProject();

      if (activeProject.name === "") {
        activeProject.name = "Unnamed Project";
        saveProjectsToLocalStorage();
      }

      hideProjectInputField(event);
      refreshNav();
      updateContent();
    }
  });

  // Same functionality as above for Escape & Enter key.
  nav.addEventListener("keydown", (event) => {
    if (
      isProjectInput(event) &&
      (event.key === "Escape" || event.key === "Enter")
    ) {
      const activeProject = getActiveProject();

      if (activeProject.name === "") {
        activeProject.name = "Unnamed Project";
        saveProjectsToLocalStorage();
      }

      hideProjectInputField(event);
      refreshNav();
      updateContent();
    }
  });
}

/* 
###############################################################################
PROJECT REMOVAL
Removes a project when clicking "remove" next to the project's page title
###############################################################################
*/
function initializeRemoveProjectButton() {
  const body = getBody();
  const projectHeadlineContainer = getContentHeadlineContainer();

  projectHeadlineContainer.addEventListener("click", (event) => {
    if (isProjectsArrayNotEmpty()) {
      if (event.target.matches(".remove-project")) {
        const modalBox = createModalBox();
        body.appendChild(modalBox);

        // Short timeout so the browser recongnizes the new class
        setTimeout(() => {
          modalBox.classList.add("fade-in");
        }, 2);

        initializeModalBox();
        body.focus();
      }
    }
  });
}

function initializeModalBox() {
  const modalBox = document.querySelector(".modal-container");
  const cancelButton = modalBox.querySelector(".modal-cancel");
  const confirmButton = modalBox.querySelector(".modal-confirm");

  const handleKeydownEvent = (event) => {
    if (event.key === "Escape" || event.key === "Enter") {
      if (event.key === "Enter") {
        const activeProject = getActiveProject();
        const activeProjectIndex =
          getIndexOfProjectInProjectsArray(activeProject);
        const projectLinks = getProjectLinks();

        projectsArray.splice(activeProjectIndex, 1); // remove the active project from the projectsArray[]
        if (projectsArray.length > 0) {
          setActiveProject(projectsArray[0]);
        }
        saveProjectsToLocalStorage();
        refreshNav();
        updateContent();
      }
      modalBox.remove();
      document.removeEventListener("keydown", handleKeydownEvent);
    }
  };

  modalBox.addEventListener("click", (event) => {
    if (event.target === modalBox && event.target !== modalBox.firstChild) {
      modalBox.remove();
      document.removeEventListener("keydown", handleKeydownEvent);
    } else if (event.target === cancelButton) {
      modalBox.remove();
      document.removeEventListener("keydown", handleKeydownEvent);
    } else if (event.target === confirmButton) {
      const activeProject = getActiveProject();
      const activeProjectIndex =
        getIndexOfProjectInProjectsArray(activeProject);
      const projectLinks = getProjectLinks();

      projectsArray.splice(activeProjectIndex, 1); // remove the active project from the projectsArray[]
      if (projectsArray.length > 0) {
        setActiveProject(projectsArray[0]);
      }
      saveProjectsToLocalStorage();
      refreshNav();
      updateContent();
      modalBox.remove();
      document.removeEventListener("keydown", handleKeydownEvent);
    }
  });

  document.addEventListener("keydown", handleKeydownEvent);
}

/* 
###############################################################################
TODO ITEM CREATION
Creates new todo item via click on "Add Task" 
###############################################################################
*/
function initializeNewTaskButton() {
  const newTaskButton = getNewTaskButton();

  newTaskButton.addEventListener("click", () => {
    if (isProjectsArrayNotEmpty()) {
      const activeProject = getActiveProject();
      const newTodoItemId = createAndStoreNewTodoItem(); // returns the new todo item's ID

      saveProjectsToLocalStorage();
      populateContent(activeProject);
      focusElementAndClearContent(newTodoItemId);
    }
  });
}

/*
###############################################################################
TODO ITEM TITLE INTERACTION
Manages user interaction with a todo item title 
###############################################################################
*/
function handleTodoItemTitleInteraction() {
  const content = getContent();

  /* 
  Stores updates to a todo item title.
  Exceptions: "Enter" & "Escape" -> see below. 
  */
  content.addEventListener("input", (event) => {
    if (isTodoItemTitle(event)) {
      storeTodoItemTitle(event);
      saveProjectsToLocalStorage();
    }
  });

  // Updates a todo item title when the focus is lost. Removes it when title is empty.
  content.addEventListener("focusout", (event) => {
    const activeProject = getActiveProject();
    const todoItemId = getElementId(event.target.parentNode);

    if (isTodoItemTitle(event)) {
      if (isTextContentEmpty(event)) {
        removeTodoItemById(todoItemId);
        saveProjectsToLocalStorage();
        populateContent(activeProject);
      } else {
        storeTodoItemTitle(event);
        saveProjectsToLocalStorage();
      }
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
        saveProjectsToLocalStorage();
        populateContent(activeProject);
      } else {
        event.preventDefault();

        const newTodoItemId = createAndStoreNewTodoItem(); // returns the new item's id
        saveProjectsToLocalStorage();
        populateContent(activeProject);
        focusElementAndClearContent(newTodoItemId);
      }
    }

    // Focuses <body> when ESCAPE is pressed. Resets the title to the default value when empty.
    if (isTodoItemTitle(event) && event.key === "Escape") {
      const activeProject = getActiveProject();
      const todoItem = findTodoItemById(todoItemId);

      if (isTextContentEmpty(event)) {
        todoItem.resetTitle();
        saveProjectsToLocalStorage();
        populateContent(activeProject);
      } else {
        storeTodoItemTitle(event);
        saveProjectsToLocalStorage();
        body.focus();
      }
    }
  });
}

function handleTodoItemCheckComplete() {
  const content = getContent();

  content.addEventListener("click", (event) => {
    const activeProject = getActiveProject();

    if (event.target.matches(".todo-item .checkmark-container .checkmark")) {
      const todoItemId = getElementId(event.target.parentNode.parentNode);
      const todoItem = findTodoItemById(todoItemId);

      // Mark as complete so checkbox will stay checked when content is refreshed
      todoItem.checked = "true";

      setTimeout(function () {
        removeTodoItemById(todoItemId);
        saveProjectsToLocalStorage();
        updateContent();
      }, 1100);
    }
  });
}

/* APP INITIALIZATION
####################################################################*/
// Gets all projects from local storage if available or loads default data
if (isLocalStorageAvailable() && isProjectsArrayInStorage()) {
  const localStorageProjectsArray = getProjectsFromLocalStorage();
  // Reconstructs all project objects to reestablish prototype inheritance and methods
  const newProjectsArray = reconstructAllProjectObjects(
    localStorageProjectsArray
  );
  emptyOldArrayAndPopulateWithNewItems(newProjectsArray);
} else {
  storeProjects(defaultProject); // load default data
}

document.addEventListener("DOMContentLoaded", () => {
  refreshNav();
  updateContent();
  // Associates the project names with the actual poject objects
  initializeProjectNavigation();
  // Handles updates of project name by the user
  handleProjectNameInteraction();
  // Handles removal of projects via button next to project page title
  initializeRemoveProjectButton();
  // Handles creation of new todo items via a button on top right
  initializeNewTaskButton();
  // Handles updates of todo item title by the user
  handleTodoItemTitleInteraction();
  // Handles the "check as complete" action
  handleTodoItemCheckComplete();
});
