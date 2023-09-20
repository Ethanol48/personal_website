import fs from "fs";
import { JSDOM } from "jsdom";

import { articuloComponent, projectComponent } from "./components.js";

async function scrape() {
  const rootLink = "https://ethan-rouimi.medium.com/";
  let response = await fetch(rootLink);

  let data = [];

  // console.log(response);
  const html = await response.text();

  const dom = new JSDOM(html).window.document;

  const articulos = dom.querySelectorAll("article");

  let OFFSET;

  let counter = 0;

  articulos.forEach((atr) => {
    counter += 1;

    OFFSET = 0;

    let titulo = atr.querySelector("h2").innerHTML;

    let lista = atr.querySelectorAll("p");

    console.log("lista length: ", lista.length);
    if (lista.length !== 4) {
      OFFSET = 2;
    }

    let indexPath = 0 + OFFSET;

    let path = atr.querySelectorAll("a")[indexPath].href;
    path = path.split("?source=user_profile")[0];
    path = rootLink + path;
    // console.log(path);

    let indexTexto = 1 + OFFSET;
    let texto = lista[indexTexto].innerHTML;
    // console.log(texto)

    let indexTiempo = 2 + OFFSET;
    let tiempo = lista[indexTiempo].innerHTML;
    tiempo = tiempo.replace(/<\/?span>/g, "");
    // console.log(tiempo)
    // tiempo = tiempo.match(/\d+ min/)[0];

    let imagen = atr.querySelector("img").src;
    // console.log(imagen)

    data.push([titulo, texto, tiempo, imagen, path]);
  });

  console.log(data);

  return data;
}

function modifyHTML(scrapedData) {
  // Read the HTML file
  fs.readFile(
    "/Users/michaelbernardrouimi/code/Ethanol48/personal_website/pruebas/desired.html",
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      if (scrapedData === []) {
        console.error("Scrapped data is empty");
      }

      try {
        const dom = new JSDOM(data);
        const document = dom.window.document;

        const divArt = document.querySelector("#medium-articulos");

        new articuloComponent(divArt, scrapedData, document);

        const projects = document.querySelectorAll(".project");

        console.log("\n\n\n\nProjects:\n\n\n\n");
        console.log(projects);

        projects.forEach((project) => {
          const github = project.attributes["githubRepo"].textContent;
          const website = project.attributes["website"].textContent;
          const photo = project.attributes["photo"].textContent;
          const description = project.attributes["desc"].textContent;

          new projectComponent(
            document,
            project,
            photo,
            website,
            github,
            description
          );
        });

        console.log("the file was modified without problems!!!");
        fs.writeFileSync(
          "/Users/michaelbernardrouimi/code/Ethanol48/personal_website/public/content.html",
          dom.serialize()
        );
      } catch (err) {
        console.log(err);
      }
    }
  );
}

async function main() {
  let data = await scrape();
  modifyHTML(data);
}

main();
