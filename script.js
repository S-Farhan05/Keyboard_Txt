const stimulus = document.getElementById("stimulus");
const stats = document.getElementById("stats");

let trials = 0;
let correct = 0;
let sumRT = 0;

let startTime = 0;
let expectedKey = "";
let waiting = false;

// Start with SPACE
document.addEventListener("keydown", (e) => {

  
  if (e.code === "Space" && !waiting) {
    stimulus.textContent = "Get Ready...";
    
    waiting = true;
    setTimeout(() => {
      // Random A or L
      expectedKey = Math.random() > 0.5 ? "a" : "l";
      stimulus.textContent = expectedKey.toUpperCase();

      startTime = Date.now();
    }, 1000);
  }

  
  if (waiting && (e.key === "a" || e.key === "l")) {
    let endTime = Date.now();
    let rt = endTime - startTime;

    trials++;

    if (e.key === expectedKey) {
      correct++;
    }

    sumRT += rt;

    let avgRT = Math.round(sumRT / trials);

    stats.textContent =
      "Trials: " + trials +
      " | Correct: " + correct +
      " | Avg RT: " + avgRT + " ms";

    stimulus.textContent = "Press Space for Next";

    waiting = false;
  }

});