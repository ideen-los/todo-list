import { projectsArray } from "./data";

export function isLocalStorageAvailable() {
  try {
    const test = "test";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

export function saveProjectsToLocalStorage() {
  if (isLocalStorageAvailable()) {
    localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
  }
}

export function getProjectsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("projectsArray"));
}

export function isProjectsArrayInStorage() {
  return localStorage.getItem("projectsArray") !== null;
}
