import "./style.scss";
import { TodoListItem } from "./todoListItem";
import { ProjectItem } from "./projectItem";
import {
  populateNav,
  populateContent,
  activateProjectLinks,
} from "./domManipulation";
import {
  createDefaultElements,
  createDefaultElements2,
} from "./defaultElements";

const defaultProject = createDefaultElements();
const defaultProject2 = createDefaultElements2();
const projects = [];

// Pushing the element to the projects array returns the new length of the array
let indexOfProject = projects.push(defaultProject, defaultProject2);

populateNav(projects);
// Substract 1 from the array length to get the correct index position of the project
populateContent(projects[indexOfProject - 1].array);
// Add event listeners to project links
activateProjectLinks();
