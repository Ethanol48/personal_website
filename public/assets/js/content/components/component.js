export function projectComponent(
  element,
  photoPath,
  websitebLink,
  githubRepo,
  description
) {
  function createIcon(fontAweIcon1, fontAweIcon2, options = []) {
    const icono = document.createElement("i");
    icono.classList.add(fontAweIcon1);
    icono.classList.add(fontAweIcon2);

    icono.classList.add("icon");

    if (options.length != 0) {
      options.forEach((className) => {
        icono.classList.add(className);
      });
    }

    return icono;
  }

  // la foto
  const marco = document.createElement("div");
  marco.classList.add("project-photo");

  const img = document.createElement("img");
  img.setAttribute("src", photoPath);
  img.classList.add("project-imagen");

  marco.appendChild(img);

  // banda con links y descripción
  const banda = document.createElement("div");

  // descriptción
  const desc = document.createElement("p");
  desc.innerHTML = description;
  desc.classList.add("desc");
  banda.appendChild(desc);

  //creating anchors
  const linkWebsite = document.createElement("a");
  const linkGithub = document.createElement("a");

  linkWebsite.href = websitebLink;
  linkGithub.href = "https://github.com/" + githubRepo;

  // creating icons
  const githubIcon = createIcon("fa-brands", "fa-github", ["fa-2xl"]);
  const websiteIcon = createIcon("fa-solid", "fa-globe", ["fa-2xl"]);

  // appending icons
  linkWebsite.appendChild(websiteIcon);
  linkGithub.appendChild(githubIcon);

  linkWebsite.classList.add("project-link");
  linkGithub.classList.add("project-link");

  banda.classList.add("project-banda");

  banda.appendChild(linkWebsite);
  banda.appendChild(linkGithub);

  element.appendChild(marco);
  element.appendChild(banda);

  element.removeAttribute("role");
  element.removeAttribute("githubRepo");
  element.removeAttribute("website");
  element.removeAttribute("photo");
  element.removeAttribute("desc");
  element.classList.add("project-unidad");
}
