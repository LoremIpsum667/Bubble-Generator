// counter des bubbles que on pourra faire "exploser"
const counterDisplay = document.querySelector('h3');
let counter = 0;

const bubbleGenerator = () => {
  // creation des bubbles graçe à une span
  const bubble = document.createElement("span");
  // math random pour generate en mode aleatoire la taille des bubbles
  const size = Math.random() * 200 + 100 + "px";

  // ajoute la class crée dans le css + apres dans le span dans le HTML
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  // on fait appelle à la const size pour donner une taille à les bubbles
  bubble.style.height = size;
  bubble.style.width = size;

  // deplacement des bubbles en mode aleatoire
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  // event qui permets de supprimer une bubble quand on click
  bubble.addEventListener("click", () => {
      counter++;
      counterDisplay.textContent = counter;
    bubble.remove();
  });
  // timer pour eviter de surcharger le nav
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

// function qui nous permets de generer plusieures bubbles
setInterval(bubbleGenerator, 300);
