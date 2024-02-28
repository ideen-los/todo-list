export function populateNav(projectsArray) {
  const nav = document.querySelector("nav");

  projectsArray.forEach((project) => {
    let projectLink = createHyperlink(project);
    nav.appendChild(projectLink);
  });
}

export function populateContent(singleProjectListItemArray) {
  const content = document.querySelector("#content");

  singleProjectListItemArray.forEach((listItem) => {
    for (let key in listItem) {
      content.innerHTML += `${key}: ${listItem[key]}</br>`;
    }
  });
}

function createHyperlink(project) {
  let link = document.createElement("a");
  link.href = "#";
  link.textContent = project.name;
  link.setAttribute("data-project-id", project.id);

  return link;
}

export function activateProjectLinks() {
  const projectLinks = document.querySelectorAll("nav a");
  console.log(projectLinks);
}
