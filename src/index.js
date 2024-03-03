import "./style.scss";
import {
  getNav,
  getProjectLinks,
  getListItems,
  getListItemNameFields,
  populateNav,
  populateContent,
  addActiveClass,
  getDataProjectId,
} from "./dom";
import {
  findProjectById,
  defaultProject,
  defaultProject2,
  projects,
  storeProjects,
  createAndStoreNewProject,
  createAndStoreNewListItem,
  storeListItemName,
} from "./data";

/* EVENT LISTENER FUNCTIONS
####################################################################*/
/* Add event listeners to project links, so a click displays 
the list items associated with the respective project name  */
function activateProjectLinks() {
  const nav = getNav();
  nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      const projectId = getDataProjectId(event.target);
      const project = findProjectById(projectId);
      addActiveClass(event.target);
      populateContent(project);
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
      populateNav();
    }
  });
})();

/* Add event listener to the "New task" button */
(function activateNewTaskButton() {
  const newTaskButton = document.querySelector(".add-task-item");

  newTaskButton.addEventListener("click", createAndStoreNewListItem);
})();

/* Add event listener to the <div> that wraps the
editable name of currently active list item elements */
export function activateListItemNameField() {
  const listItemNameFields = getListItemNameFields();

  listItemNameFields.forEach((field) => {
    field.addEventListener("input", storeListItemName);
  });

  listItemNameFields.forEach((field) => {
    console.log("Attaching event listener keydown to title field");
    field.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.keyCode === 13) {
        event.preventDefault();
        createAndStoreNewListItem();
      }
    });
  });
}

/* APP INITIALIZATION
####################################################################*/
/* Push default data onto project array */
storeProjects(defaultProject, defaultProject2);
document.addEventListener("DOMContentLoaded", () => {
  /* Display the name of all projects in the <nav> section */
  populateNav();
  /* Add event listeners to the project names in the <nav> section so
  associated list items are revealed via click on the respective project name */
  activateProjectLinks();
  /* Add class "active" to first project link in the project links array */
  addActiveClass(getProjectLinks()[0]);
  /* Display all list items associated with the default project
  (the first project in the projects array) inside the content div */
  populateContent(projects[0]);
});
