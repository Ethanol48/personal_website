  // <div class="showcaseContainer">
  //
  //   <div class="showcase hidden">
  //     <img src="./images/projects/NFT-Collection.jpg" alt="Project photo" class="project-imagen">
  //
  //     <div class="info">
  //       <div class="texts">
  //         <p class="title">Crypto Devs</p>
  //         <p class="desc">NFT Project using previously a whitelist with special priviledges</p>
  //       </div>
  //
  //       <div class="links-wrapper">
  //         <a href="https://nft-minting-collection.vercel.app" class="project-link">
  //           <i class="fa-solid fa-globe fa-2xl icon"></i></a>
  //
  //         <a href="https://github.com/Ethanol48/NFT-minting-Collection" class="project-link">
  //           <i class="fa-brands fa-github fa-2xl icon"></i>
  //         </a>
  //
  //       </div>
  //     </div>
  //   </div>


export function projectComponent(
  document,
  element,
  photoPath,
  websitebLink,
  githubRepo,
  projectTitle,
  projectDescription
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

  const showcase = document.createElement("div");
  showcase.classList.add("showcase")
  showcase.classList.add("hidden")

  // crear imagen
  const img = document.createElement("img");
  img.setAttribute("src", photoPath);
  img.setAttribute("alt", "Project photo");
  img.classList.add("project-imagen");

  // add img to showcase div
  showcase.appendChild(img)

  // creating info div
  // inside of this div needs to be other two,
  // the 'texts' and 'links'
  const info = document.createElement("div");
  info.classList.add("info")
  showcase.appendChild(info);

  // creating div texts
  // it has two divs inside of it
  const texts = document.createElement("div");
  texts.classList.add("texts");

  const title = document.createElement("p");
  title.classList.add("title")
  title.innerHTML = projectTitle

  const desc = document.createElement("p");
  desc.classList.add("desc")
  desc.innerHTML = projectDescription

  // pushing objects to texts
  texts.appendChild(title)
  texts.appendChild(desc)

  // pushing texts to info
  info.appendChild(texts)


  // creating link wrapper
  const linkWrapper = document.createElement("div");
  linkWrapper.classList.add("links-wrapper");

  // creating the icons

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

  // adding links to wrapper
  linkWrapper.appendChild(linkWebsite);
  linkWrapper.appendChild(linkGithub);

  // adding wrapper to showcase
  info.appendChild(linkWrapper);


  const parent = element.parentElement;
  parent.appendChild(showcase);

  element.remove()
  

  // element.removeAttribute("role");
  // element.removeAttribute("githubRepo");
  // element.removeAttribute("website");
  // element.removeAttribute("photo");
  // element.removeAttribute("desc");
  // element.removeAttribute("title");
  // // element.classList.add("project-unidad");
  // element.classList.remove("project");
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
