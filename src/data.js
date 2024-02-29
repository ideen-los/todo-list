import {
  createDefaultElements,
  createDefaultElements2,
} from "./defaultElements";

const defaultProject = createDefaultElements();
const defaultProject2 = createDefaultElements2();
export const projects = [];

// Pushing the element to the projects array returns the new length of the array
let indexOfProject = projects.push(defaultProject, defaultProject2);

export function findProjectById(projectId) {
  return projects.find((project) => project.id === projectId);
}
