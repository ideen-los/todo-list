import "./style.scss";
import { TodoListItem } from "./todoListItem";
import { ProjectItem } from "./projectItem";
import { populateNav, populateContent, getDataProjectId } from "./dom";
import { findProjectById, projects } from "./data";

populateNav(projects);
// Substract 1 from the array length to get the correct index position of the project
populateContent(projects[0]);
// Add event listeners to project links
(function activateProjectLinks() {
  const projectLinks = document.querySelectorAll("nav a");

  projectLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const projectId = getDataProjectId(e);
      const project = findProjectById(projectId);
      console.log(project);
      populateContent(project);
    });
  });
})();
