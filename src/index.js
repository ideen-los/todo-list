import "./style.scss";
import { TodoListItem } from "./todoListItem";
import { ProjectItem } from "./projectItem";
import { populateNav, populateContent } from "./domManipulation";
import { createDefaultElements } from "./defaultElements";

const defaultProject = createDefaultElements();
const projects = [];

// Pushing the element to the projects array returns the new length of the array
let indexOfProject = projects.push(defaultProject);

populateNav(projects);
// Substract 1 from the array length to get the correct index position of the project
populateContent(projects[indexOfProject - 1].array);
