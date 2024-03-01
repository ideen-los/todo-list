import "./style.scss";
import { TodoListItem } from "./todoListItemClass";
import { TodoProjectItem } from "./todoProjectClass";
import { populateNav, populateContent, getDataProjectId } from "./dom";
import { findProjectById, projects, addNewProjectsToArray } from "./data";

populateNav(projects);
populateContent(projects[0]);

/* Add event listeners to project links, so a click reveals 
the list items associated with the respective project name  */
(function activateProjectLinks() {
  const projectLinks = document.querySelectorAll("nav a");

  projectLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const projectId = getDataProjectId(event);
      const project = findProjectById(projectId);
      console.log(project);
      populateContent(project);
    });
  });
})();

(function getNewProjectFromInput() {
  const input = document.querySelector("nav input");

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      event.preventDefault();
      const newProject = input.value;
      addNewProjectsToArray(newProject);
    }
  });
})();
