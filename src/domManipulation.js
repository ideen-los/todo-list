export function populateNav(projectArray) {
  const nav = document.querySelector("nav");
  projectArray.forEach((project) => {
    nav.innerHTML += project.name;
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
