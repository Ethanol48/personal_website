import { projectComponent } from "./components.js";

document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll("[role=project]");

  console.log(projects);

  projects.forEach((project) => {
    const github = project.attributes["githubRepo"].textContent;
    const website = project.attributes["website"].textContent;
    const photo = project.attributes["photo"].textContent;
    const description = project.attributes["desc"].textContent;

    new projectComponent(project, photo, website, github, description);
  });
});
