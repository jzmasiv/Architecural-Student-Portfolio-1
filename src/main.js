import './style.css';
// Create a <link> element
document.addEventListener('DOMContentLoaded', () => {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = './style.css'; // Correct path to your CSS file
    document.head.appendChild(link);
});

import data from "./data/data.js"; 
// Ensure the correct file extension is used
//import { createThreeScene } from "./threeScene";

const media = [
  "./cubeDrawings/Rachdi_Zyad_A1.1_DSGN313.png",
  "./cubeDrawings/Rachdi_Zyad_A1.1_DSGN313_Extraction1.png",
  "./cubeDrawings/Rachdi_Zyad_A1.1_DSGN313_Extraction2.png",
  "./cubeDrawings/Rachdi_Zyad_A1.1_DSGN313_Extraction3.png",
  "./cubeDrawings/Rachdi_Zyad_A1.1_DSGN313_Extraction4.png",
];

const treeDrawings = [
  "./treeDrawings/image5.jpeg",
  "./treeDrawings/image6.jpeg",
  "./treeDrawings/image7.jpeg",
  "./treeDrawings/image8.jpeg",
  "./treeDrawings/image9.jpeg",
  "./treeDrawings/image10.jpeg",
  "./treeDrawings/image11.jpeg",
  "./treeDrawings/image12.jpeg",
  "./treeDrawings/image13.jpeg",
  "./treeDrawings/image14.jpeg",
  "./treeDrawings/image15.jpeg",
  "./treeDrawings/image16.jpeg",
  "./treeDrawings/image17.jpeg",
  "./treeDrawings/image18.jpeg",
  "./treeDrawings/image19.jpeg",
  "./treeDrawings/image20.jpeg",
];

const treeDrawings2 = [
"./treeDrawings/image1.jpg",
"./treeDrawings/image2.jpg",
"./treeDrawings/image3.jpg",
"./treeDrawings/image4.svg",
];

const A2Images = [
  "/A2/DSGN313_A2-1.png",
  "/A2/DSGN313_A2-12.png",
  "/A2/DSGN313_A2-13.png"
];

const A2Models = [
  "/A2/3.obj",
  "/A2/2.obj",
  "/A2/1.obj"
];

try {
  document.querySelector("#app").innerHTML = `
    <main id="container">
      <section id="heading">
        <h1>${data.name}</h1>
        <p>${data.bio}</p>
      </section>

      <section id="projects">
        <div class="project-container" style="width: 100%; max-width: 1200px; margin: 0 auto;">
          <div id="project-row" style="width: 100%; display: flex; flex-direction: row; align-items: center; justify-content: center;">
            <div class="image-container" style="width: 80%; display: flex; justify-content: center; align-items: start;">
              <img src="./cubeDrawings/A1_DSGN313.gif" alt="Project 1 Image" style="width: 50%; height: auto;" />
              <div id="images-container" style="width: 40%; padding-left: 5%;">
                <h2 id="title">Mindful Excess</h2>
                <h4 id="description">My "Cadavre Equis" examines the relationship between my use of technology for entertainment and my desire to remain mindful and present. These two seemingly conflicting desires encapsulate my experience of life in the digital age—a constant flux between contradictory frameworks of thought. Whole heartedly believing that happiness comes from within; I still indulge in thoughtless hedonism. As I get carried away on the ever stimulating rollercoaster of content I remember what I had originally meant to do. Life in the digital age is confusing…</h4>
              </div>
            </div>
          </div>
          <div id="images" style="display: flex; justify-content: center; flex-wrap: wrap;">
            ${media
              .map(
                (item, index) => `<img src="${item}" alt="media${index + 1}" style="margin: 5px; width: 220px; height: auto; cursor: pointer;" onclick="openModal('${item}')" />`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section style="width: 100%; display: flex; flex-direction: column; align-items: center;" class="grid-section">
        <h3 style="margin-bottom: 1rem;">Used Images</h3>
        <div style="width: 100%; max-width: 1200px; display: flex; justify-content: center;">
          <div class="grid grid-regular masonry" style="margin: 0 auto;">
            ${[...treeDrawings, ...treeDrawings2]
              .map(
                (item, index) => `
                <div class="grid-item">
                  <img src="${item}" alt="treeDrawing${index + 1}" style="width: 100%; cursor: pointer;" onclick="openModal('${item}')" />
                </div>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <hr class="section-divider">

      <section style="width: 100%; display: flex; flex-direction: column; align-items: center;" class="grid-section">
        <h3 style="margin-bottom: 1rem;">A2 Project</h3>
        <div style="width: 100%; max-width: 1200px; display: flex; justify-content: center;">
          <div class="grid grid-a2 masonry" style="margin: 0 auto;">
            ${A2Images
              .map(
                (item, index) => `
                <div class="grid-item">
                  <img src="${item}" alt="A2-image${index + 1}" style="width: 100%; cursor: pointer;" onclick="openModal('${item}')" />
                </div>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section style="width: 100%; display: flex; flex-direction: column; align-items: center;" class="grid-section">
        <h3 style="margin-bottom: 1rem;">A2 3D Models</h3>
        <div class="three-model" style="width: 100%; max-width: 1200px; display: flex; justify-content: center; gap: 3rem;">
          <div id="model1" class="model-container"></div>
          <div id="model2" class="model-container"></div>
          <div id="model3" class="model-container"></div>
        </div>
      </section>
    </main>

    <div id="modal" style="display: none; position: fixed; z-index: 1; left: 0; top: 1; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.9);">
      <span style="position: absolute; top: 20px; right: 35px; color: #f1f1f1; font-size: 40px; font-weight: bold; cursor: pointer;" onclick="closeModal()">&times;</span>
      <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
        <img id="modal-content" style="max-width: 75%; max-height: 75%;">
      </div>
    </div>
  `;

  // Initialize Masonry
  document.addEventListener('DOMContentLoaded', () => {
    const grids = document.querySelectorAll('.masonry');
    grids.forEach(grid => {
      imagesLoaded(grid, function() {
        new Masonry(grid, {
          itemSelector: '.grid-item',
          columnWidth: '.grid-item',
          fitWidth: true,
          gutter: 10,
          horizontalOrder: true,
          initLayout: true
        });
      });
    });

    // Initialize Three.js scenes
    A2Models.forEach((modelPath, index) => {
      initThreeScene(`model${index + 1}`, modelPath);
    });
  });

} catch (error) {
  console.error("Error rendering the app:", error);
}

window.openModal = function(src) {
  try {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-content');
    modal.style.display = "block";
    modalImg.src = src;
    modalImg.style.cursor = "default";

    // Only for the three specific images that should be linked
    if (src === "./treeDrawings/image1.jpg" || 
        src === "./treeDrawings/image2.jpg" || 
        src === "./treeDrawings/image3.jpg") {
      modalImg.style.cursor = "pointer";
      modalImg.onclick = function() {
        let url;
        switch(src) {
          case "./treeDrawings/image1.jpg":
            url = "https://tr.pinterest.com/pin/844493674056859/";
            break;
          case "./treeDrawings/image2.jpg":
            url = "https://ca.pinterest.com/pin/266205027949346314/";
            break;
          case "./treeDrawings/image3.jpg":
            url = "https://www.freepik.com/free-vector/different-shape-message-bubbles-blue-grey_77988500.htm";
            break;
        }
        if (url) window.open(url, '_blank');
      };
    } else {
      modalImg.onclick = null;
    }
  } catch (error) {
    console.error("Error opening modal:", error);
  }
}

window.closeModal = function() {
  try {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
  } catch (error) {
    console.error("Error closing modal:", error);
  }
}
