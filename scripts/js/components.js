export function projectComponent(
  document,
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
  img.setAttribute("alt", "Project photo");

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
  element.classList.remove("project");
}

export function articuloComponent(element, scrapedData, document) {
  const el = document.createElement("div");
  el.classList.add("medium-container");

  scrapedData.forEach((data) => {
    const article = document.createElement("div");
    article.classList.add("medium-article");

    // let heightArticle = -180;

    el.appendChild(article);

    // photo
    const image = document.createElement("img");
    image.src = data[3];
    image.setAttribute("alt", "Article photo");
    image.classList.add("medium-photo");

    article.appendChild(image);

    // container for all texts
    const texts = document.createElement("div");
    texts.classList.add("medium-texts");

    const title = document.createElement("p");
    title.innerHTML = data[0];
    title.classList.add("medium-title");

    const text = document.createElement("p");
    text.innerHTML = data[1];
    text.classList.add("medium-text");

    const down = document.createElement("div");
    down.classList.add("medium-down");

    const readMore = document.createElement("a");
    readMore.href = data[4];
    readMore.classList.add("medium-read");
    readMore.innerHTML = "Read more";
    down.appendChild(readMore);

    const time = document.createElement("p");
    time.innerHTML = data[2];
    time.classList.add("medium-time");
    down.appendChild(time);

    article.appendChild(down);

    texts.appendChild(title);
    texts.appendChild(text);
    texts.appendChild(down);

    article.appendChild(texts);

    // article.innerHTML = data;
  });

  element.appendChild(el);
}
