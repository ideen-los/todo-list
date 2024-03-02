import { getActiveProject, projects } from "./data";

/* CONTENT POPULATION
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
export function getProjectHeadline() {
  return document.querySelector("h1");
}

/* Function to red the projects array, wrap all project
names in an <a> tag and list them in the <nav> section */
export function populateNav() {
  const nav = getNav();
  nav.innerHTML = "";

  projects.forEach((project) => {
    let projectLink = createHyperlink(project);
    nav.appendChild(projectLink);
  });
}

/* Function to display all list items associated with a project inside the content section.
The items are all wrapped in a <div>, while the items properties are wrapped in a <span> */
export function populateContent(project) {
  const content = getContent();
  content.innerHTML = "";
  setProjectHeadline();

  if (project.array.length > 0) {
    project.array.forEach((listItem) => {
      let listItemWrapper = createListItemWrapper(listItem);
      /* Wrap all property values of list items in a HTML <span> tag */
      for (let key in listItem) {
        /* Check if the key belongs to the list item and not to the prototype
        and if the key is not part of the isHiddenProperty array */
        if (listItem.hasOwnProperty(key) && !listItem.isHiddenProperty(key)) {
          if (key !== "title") {
            let listItemKeyWrapper = document.createElement("span");
            listItemKeyWrapper.textContent = listItem[key];
            listItemWrapper.appendChild(listItemKeyWrapper);
            /* Wrap the title value in a special editable <div> */
          } else {
            let listItemTitleWrapper = createListItemTitleWrapper();
            listItemTitleWrapper.textContent = listItem[key];
            listItemWrapper.appendChild(listItemTitleWrapper);
          }
        }
      }

      content.appendChild(listItemWrapper);
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
function createListItemWrapper(listItem) {
  let wrapper = document.createElement("div");
  wrapper.classList.add("list-item");
  wrapper.setAttribute("data-project-id", listItem.projectId);

  return wrapper;
}

function createListItemTitleWrapper() {
  const titleWrapper = document.createElement("div");
  titleWrapper.contentEditable = "true";

  return titleWrapper;
}

/* DOM ELEMENT MANIPULATION
####################################################################*/
function removeAllActiveClasses() {
  const projectLinks = getProjectLinks();
  projectLinks.forEach((link) => {
    if (link.classList.contains("active")) link.classList.remove("active");
  });
}

export function addActiveClass(htmlElement) {
  removeAllActiveClasses();
  htmlElement.classList.add("active");
}

export function setProjectHeadline() {
  const headline = getProjectHeadline();
  headline.textContent = getActiveProject().name;
}

/* DOM ELEMENT DATA RETRIEVAL
####################################################################*/
/* Function to retrieve the data-project-id
from a project that has been clicked on */
export function getDataProjectId(element) {
  return element.getAttribute("data-project-id");
}

export function getActiveProjectId() {
  const projectLinks = getProjectLinks();
  let projectId = "";

  projectLinks.forEach((link) => {
    if (link.classList.contains("active")) {
      projectId = getDataProjectId(link);
    }
  });

  return projectId;
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
