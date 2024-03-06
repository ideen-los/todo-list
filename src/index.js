import "./style.scss";
import {
  getNav,
  getContent,
  getProjectLinks,
  getListItems,
  updateNav,
  updateContent,
  addActiveClass,
  getDataProjectId,
  getListItemNameFieldById,
  getElementId,
  focusElementAndClearContent,
} from "./dom";
import {
  findProjectById,
  defaultProject,
  defaultProject2,
  projectsArray,
  storeProject,
  createAndStoreNewProject,
  createAndStoreNewListItem,
  storeListItemTitle,
  getActiveProject,
  updateOrRemoveListItem,
  findListItemById,
  removeListItemById,
} from "./data";

/* EVENT LISTENER FUNCTIONS
####################################################################*/
/* Show the associated project when a project link is clicked */
function initializeProjectNavigation() {
  const nav = getNav();
  nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      const projectId = getDataProjectId(event.target);
      const projectObject = findProjectById(projectId);
      addActiveClass(event.target);
      updateContent(projectObject);
    }
  });
}

/* Add event listener to input that lets user enter a new project name */
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

/* Create a new List Item when "New Task" is clicked */
(function initializeNewTaskButton() {
  const newTaskButton = document.querySelector(".add-task-item");

  newTaskButton.addEventListener("click", () => {
    const activeProjectObject = getActiveProject();
    createAndStoreNewListItem();
    updateContent(activeProjectObject);
  });
})();

/* Make the title  */
export function handleListItemTitleInteraction() {
  const content = getContent();
  const activeProject = getActiveProject();

  content.addEventListener("input", (event) => {
    if (event.target.matches(".list-item__name")) {
      storeListItemTitle(event);
    }
  });

  content.addEventListener("focusout", (event) => {
    if (event.target.matches(".list-item__name")) {
      const listItemId = getElementId(event.target.parentNode);
      updateOrRemoveListItem(listItemId, event.target.textContent, event);
    }
  });

  content.addEventListener("keydown", (event) => {
    if (event.target.matches(".list-item__name") && event.key === "Enter") {
      if (event.target.textContent !== "") {
        event.preventDefault();
        const newListItemId = createAndStoreNewListItem(); // returns the new list item's id
        updateContent(activeProject);
        focusElementAndClearContent(newListItemId);
      } else {
        const listItemId = getElementId(event.target.parentNode);
        removeListItemById(listItemId);
        updateContent(activeProject);
      }
    }
    if (event.target.matches(".list-item__name") && event.key === "Escape") {
      const listItemId = getElementId(event.target.parentNode);
      updateOrRemoveListItem(listItemId, event.target.textContent, event);
      updateContent(activeProject);
    }
  });
}

/* APP INITIALIZATION
####################################################################*/
/* Push default data onto project array */
storeProject(defaultProject, defaultProject2);
document.addEventListener("DOMContentLoaded", () => {
  /* Display the name of all projects in the <nav> section */
  updateNav();
  /* Add class "active" to first project link in the project links array */
  addActiveClass(getProjectLinks()[0]);
  /* Add event listeners to the project names in the <nav> section so
  associated list items are revealed via click on the respective project name */
  initializeProjectNavigation();
  /* Display all list items associated with the default project
  (the first project in the projects array) inside the content div */
  updateContent(projectsArray[0]);
  /* Add event listeners "input", "keydown" and "focusout" to the
  .tasks-container and store any changes done by the user to the 
  list items title */
  handleListItemTitleInteraction();
});
