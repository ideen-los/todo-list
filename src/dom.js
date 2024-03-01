/* CONTENT POPULATION
####################################################################*/
const content = document.querySelector("#content");
const nav = document.querySelector("nav");

/* Function to display all project names wrapped in an <a> inside the nav section */
export function populateNav(projectsArray) {
  projectsArray.forEach((project) => {
    let projectLink = createHyperlink(project);
    nav.appendChild(projectLink);
  });
}

/* Function to display all list items of a project inside the content section.
The items are all wrapped in a <div> and the items properties are wrapped in a <span> */
export function populateContent(project) {
  project.array.forEach((listItem) => {
    let listItemWrapper = createListItemWrapper(listItem);
    for (let key in listItem) {
      if (listItem.hasOwnProperty(key) && !listItem.isHiddenProperty(key)) {
        let listItemKeyWrapper = document.createElement("span");
        listItemKeyWrapper.textContent = listItem[key];
        listItemWrapper.appendChild(listItemKeyWrapper);
      }
    }

    content.innerHTML = "";
    content.appendChild(listItemWrapper);
  });
}

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

/* DATA EXRACTION
####################################################################*/
/* Function to retrieve the data-project-id
from a project that has been clicked on */
export function getDataProjectId(event) {
  console.log(event.target.getAttribute("data-project-id"));
  return event.target.getAttribute("data-project-id");
}

/* DATA INPUT
####################################################################*/
(function addProjectInputToNav() {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Project name";

  nav.appendChild(input);
})();
