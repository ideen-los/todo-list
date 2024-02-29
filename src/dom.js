import { projects } from ".";

/* Function to display all project names wrapped in an <a> inside the nav section */
export function populateNav(projectsArray) {
  const nav = document.querySelector("nav");

  projectsArray.forEach((project) => {
    let projectLink = createHyperlink(project);
    nav.appendChild(projectLink);
  });
}

/* Function to display all list items of a project inside the content section.
The items are all wrapped in a <div> and the items properties are wrapped in a <span> */
export function populateContent(project) {
  const content = document.querySelector("#content");

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

/* A function to streamline the creation divs that wrap the list Items */
function createListItemWrapper(listItem) {
  let wrapper = document.createElement("div");
  wrapper.classList.add("list-item");
  wrapper.setAttribute("data-project-id", listItem.projectId);

  return wrapper;
}

export function getDataProjectId(e) {
  console.log(e.target.getAttribute("data-project-id"));
  return e.target.getAttribute("data-project-id");
}
