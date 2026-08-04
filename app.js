
const completed=new Set(),totalInteractions=5;
const progressLabel=document.getElementById("progressLabel"),progressBar=document.getElementById("progressBar");
function completeInteraction(name){completed.add(name);const count=completed.size;progressLabel.textContent=`${count} of ${totalInteractions} interactions completed`;progressBar.style.width=`${count/totalInteractions*100}%`}

const wheelPillars=document.querySelectorAll(".wheel-pillar"),wheelTitle=document.getElementById("wheelTitle"),wheelDescription=document.getElementById("wheelDescription"),exploredPillars=new Set(["Our Planet"]);
wheelPillars.forEach(pillar=>pillar.addEventListener("click",()=>{wheelPillars.forEach(i=>i.classList.remove("active"));pillar.classList.add("active");wheelTitle.textContent=pillar.dataset.title;wheelDescription.textContent=pillar.dataset.description;exploredPillars.add(pillar.dataset.title);if(exploredPillars.size===wheelPillars.length)completeInteraction("pillar-wheel")}))

const targetCard=document.getElementById("targetCard");
targetCard.addEventListener("click",()=>{targetCard.classList.add("explored");completeInteraction("target")});

const quizOptions=document.querySelectorAll(".quiz-option"),quizFeedback=document.getElementById("quizFeedback");
quizOptions.forEach(option=>option.addEventListener("click",()=>{quizOptions.forEach(i=>i.classList.remove("selected"));option.classList.add("selected");quizFeedback.classList.add("visible");completeInteraction("quiz")}))

const tabButtons=document.querySelectorAll(".tab-button"),tabPanels=document.querySelectorAll(".tab-panel"),visitedTabs=new Set(["grow"]);
tabButtons.forEach(button=>button.addEventListener("click",()=>{tabButtons.forEach(i=>i.classList.remove("active"));tabPanels.forEach(i=>i.classList.remove("active"));button.classList.add("active");document.getElementById(button.dataset.tab).classList.add("active");visitedTabs.add(button.dataset.tab);if(visitedTabs.size===tabButtons.length)completeInteraction("people-tabs")}))

const communityTiles =
  document.querySelectorAll(".community-tile");

const exploredCommunityTiles = new Set();

communityTiles.forEach(function (tile, index) {
  tile.addEventListener("click", function () {
    const isOpen = tile.classList.toggle("open");

    tile.setAttribute("aria-expanded", String(isOpen));

    const symbol =
      tile.querySelector(".community-tile-symbol");

    if (symbol) {
      symbol.textContent = isOpen ? "−" : "+";
    }

    exploredCommunityTiles.add(index);

    if (
      exploredCommunityTiles.size ===
      communityTiles.length
    ) {
      completeInteraction("community-tiles");
    }
  });
});

const integrityCards=document.querySelectorAll(".integrity-card"),exploredIntegrity=new Set();
integrityCards.forEach((card,index)=>card.addEventListener("click",()=>{card.classList.add("explored");exploredIntegrity.add(index)}));
