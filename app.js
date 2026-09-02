const PELICANS = [
  // Recognizable early benchmark anchors
  { model: "Cerebras Llama 3.1 70B", file: "cerebras-llama3.1-70b.svg" },
  { model: "Claude 3.5 Sonnet (Oct 2024)", file: "claude-3-5-sonnet-20241022.svg" },
  { model: "Gemini 1.5 Pro", file: "gemini-1.5-pro-002.svg" },
  { model: "GPT-4o", file: "gpt-4o.svg" },
  { model: "o1-preview", file: "o1-preview.svg" },

  // OpenAI
  { model: "GPT-4.5", file: "gpt-4.5-pelican.jpg" },
  { model: "GPT-5", file: "gpt-5.png" },
  { model: "GPT-5 Codex", file: "gpt-5-codex.jpg" },
  { model: "GPT-5.1", file: "gpt-5.1.png" },
  { model: "GPT-5.2", file: "gpt-5.2.png" },
  { model: "GPT-5.4 Pro", file: "gpt-5.4-pro.png" },
  { model: "GPT-5.5", file: "gpt-5.5-xhigh.png" },
  { model: "GPT-5.6 Sol", file: "gpt-5.6-sol-high.svg" },

  // Anthropic
  { model: "Claude 3.7 Sonnet", file: "claude-3.7-sonnet.svg" },
  { model: "Claude Opus 4.1", file: "claude-opus-4.1.png" },
  { model: "Claude Sonnet 4.5", file: "claude-sonnet-4.5.png" },
  { model: "Claude Opus 4.5", file: "claude-opus-4.5.jpg" },
  { model: "Claude Opus 4.8", file: "claude-opus-4.8-max.png" },
  { model: "Claude Sonnet 5", file: "claude-sonnet-5.png" },
  { model: "Claude Fable 5.1", file: "claude-fable-5.1-high.png" },

  // Google
  { model: "Gemini 2.5 Pro", file: "gemini-2.5-pro.jpg" },
  { model: "Gemini 3", file: "gemini-3-high.png" },
  { model: "Gemini 3 Flash", file: "gemini-3-flash-high.jpg" },
  { model: "Gemini 3 Deep Think", file: "gemini-3-deep-think.png" },
  { model: "Gemini 3.5 Flash", file: "gemini-3.5-flash.png" },
  { model: "Gemma 4 26B-A4B", file: "gemma-4-26b.png" },

  // Chinese model families
  { model: "DeepSeek V3-0324", file: "deepseek-v3.jpg" },
  { model: "DeepSeek V4 Pro", file: "deepseek-v4-pro-high.png" },
  { model: "Qwen 3 32B", file: "qwen-3-32b-2025.png" },
  { model: "Qwen 3.6 35B-A3B", file: "qwen-3.6-35b-a3b.png" },
  { model: "Qwen 3.8 27B", file: "qwen-3.8-27b-thinking.jpg" },
  { model: "Qwen 3.8 Flash Next", file: "qwen-3.8-flash-next-xhigh.svg" },
  { model: "GLM-5.1", file: "glm-5.1.png" },
  { model: "GLM-5.2", file: "glm-5.2.svg" },
  { model: "Kimi K2", file: "kimi-k2.png" },
  { model: "Kimi K3", file: "kimi-k3.jpg" },
  { model: "Hunyuan HY 4 Preview", file: "hy4-preview.svg" },

  // Other widely discussed labs
  { model: "Mistral Small 3.2", file: "mistral-3.2.jpg" },
  { model: "Grok 3", file: "grok-3.jpg" },
  { model: "Muse Spark 1.1", file: "muse-spark-1.1.png" },
];

const BONUS_SETS = [
  {
    model: "Claude Fable 5.1",
    levels: [
      { id: "low", label: "Low", file: "fable-5.1-low.png" },
      { id: "high", label: "High", file: "claude-fable-5.1-high.png" },
      { id: "max", label: "Max", file: "fable-5.1-max.webp" },
    ],
  },
  {
    model: "Claude Opus 4.8",
    levels: [
      { id: "low", label: "Low", file: "claude-opus-4.8-low.png" },
      { id: "high", label: "High", file: "claude-opus-4.8-high.png" },
      { id: "max", label: "Max", file: "claude-opus-4.8-max.png" },
    ],
  },
  {
    model: "Qwen 3.8 Flash Next",
    levels: [
      { id: "low", label: "Low", file: "qwen-3.8-flash-next-low.svg" },
      { id: "medium", label: "Medium", file: "qwen-3.8-flash-next-medium.svg" },
      { id: "xhigh", label: "Extra high", file: "qwen-3.8-flash-next-xhigh.svg" },
    ],
  },
];

const TOTAL_ROUNDS = 10;
const BONUS_POINTS_PER_MATCH = 100;
const ASSET_PATH = "assets/pelicans/";
const BEST_SCORE_KEY = "guess-the-pelican-best";

const elements = {
  game: document.querySelector("#game-screen"),
  bonus: document.querySelector("#bonus-screen"),
  results: document.querySelector("#results-screen"),
  choices: document.querySelector("#choices"),
  modelName: document.querySelector("#model-name"),
  roundCurrent: document.querySelector("#round-current"),
  roundTotal: document.querySelector("#round-total"),
  progress: document.querySelector("#progress-bar"),
  score: document.querySelector("#score"),
  streak: document.querySelector("#streak"),
  streakWrap: document.querySelector("#streak-wrap"),
  bestScore: document.querySelector("#best-score"),
  next: document.querySelector("#next-button"),
  liveResult: document.querySelector("#live-result"),
  finalScore: document.querySelector("#final-score"),
  correctCount: document.querySelector("#correct-count"),
  finalTotal: document.querySelector("#final-total"),
  finalStreak: document.querySelector("#final-streak"),
  resultsGrade: document.querySelector("#results-grade"),
  resultsHeading: document.querySelector("#results-heading"),
  resultsCopy: document.querySelector("#results-copy"),
  playAgain: document.querySelector("#play-again-button"),
  share: document.querySelector("#share-button"),
  copyStatus: document.querySelector("#copy-status"),
  howToButton: document.querySelector("#how-to-button"),
  howToDialog: document.querySelector("#how-to-dialog"),
  dialogClose: document.querySelector("#dialog-close"),
  dialogGotIt: document.querySelector("#dialog-got-it"),
  bonusModel: document.querySelector("#bonus-model"),
  bonusChoices: document.querySelector("#bonus-choices"),
  bonusForm: document.querySelector("#bonus-form"),
  bonusSubmit: document.querySelector("#bonus-submit"),
  bonusResults: document.querySelector("#bonus-results-button"),
  bonusStatus: document.querySelector("#bonus-status"),
  bonusLive: document.querySelector("#bonus-live"),
  bonusScore: document.querySelector("#bonus-score"),
  finalBonus: document.querySelector("#final-bonus"),
  finalBonusTotal: document.querySelector("#final-bonus-total"),
};

let gameState;

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function formatScore(score) {
  return String(score).padStart(4, "0");
}

function readBestScore() {
  try {
    return Number.parseInt(localStorage.getItem(BEST_SCORE_KEY) || "0", 10) || 0;
  } catch {
    return 0;
  }
}

function writeBestScore(score) {
  try {
    localStorage.setItem(BEST_SCORE_KEY, String(score));
  } catch {
    // The game still works when storage is blocked.
  }
}

function startGame() {
  gameState = {
    deck: shuffle(PELICANS).slice(0, TOTAL_ROUNDS),
    round: 0,
    score: 0,
    correct: 0,
    streak: 0,
    bestStreak: 0,
    answered: false,
    options: [],
    bonusSet: shuffle(BONUS_SETS)[0],
    bonusOptions: [],
    bonusCorrect: 0,
    bonusScore: 0,
    bonusAnswered: false,
  };

  elements.game.hidden = false;
  elements.bonus.hidden = true;
  elements.results.hidden = true;
  elements.copyStatus.textContent = "";
  elements.share.textContent = "Copy result";
  elements.roundTotal.textContent = String(TOTAL_ROUNDS);
  elements.finalTotal.textContent = String(TOTAL_ROUNDS);
  updateScoreboard();
  renderRound();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function makeOptions(answer) {
  const distractors = shuffle(PELICANS.filter((pelican) => pelican.file !== answer.file)).slice(0, 2);
  return shuffle([answer, ...distractors]);
}

function renderRound() {
  const answer = gameState.deck[gameState.round];
  gameState.options = makeOptions(answer);
  gameState.answered = false;

  elements.modelName.textContent = answer.model;
  elements.roundCurrent.textContent = String(gameState.round + 1).padStart(2, "0");
  elements.progress.style.width = `${((gameState.round + 1) / TOTAL_ROUNDS) * 100}%`;
  elements.next.hidden = true;
  elements.choices.replaceChildren();

  gameState.options.forEach((pelican, index) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.dataset.file = pelican.file;
    button.setAttribute("aria-label", `Choice ${index + 1}`);
    button.innerHTML = `
      <span class="choice__number" aria-hidden="true">${index + 1}</span>
      <span class="choice__image-wrap">
        <img class="choice__image" src="${ASSET_PATH}${pelican.file}" alt="Pelican riding a bicycle, generated by an unnamed AI model" draggable="false" />
      </span>
      <span class="choice__caption">
        <span class="choice__model">${pelican.model}</span>
        <span class="choice__verdict">Pick ${index + 1}</span>
      </span>`;
    button.addEventListener("click", () => chooseAnswer(button, pelican));
    elements.choices.append(button);
  });
}

function chooseAnswer(selectedButton, selectedPelican) {
  if (gameState.answered) return;
  gameState.answered = true;

  const answer = gameState.deck[gameState.round];
  const isCorrect = selectedPelican.file === answer.file;

  if (isCorrect) {
    gameState.streak += 1;
    gameState.correct += 1;
    gameState.score += 100 + Math.max(0, gameState.streak - 1) * 25;
    gameState.bestStreak = Math.max(gameState.bestStreak, gameState.streak);
    elements.liveResult.textContent = `Correct. ${answer.model} drew choice ${gameState.options.indexOf(answer) + 1}.`;
  } else {
    gameState.streak = 0;
    elements.liveResult.textContent = `Not quite. ${answer.model} drew a different pelican, now highlighted.`;
  }

  [...elements.choices.children].forEach((button) => {
    const isAnswer = button.dataset.file === answer.file;
    button.disabled = true;
    button.classList.add("is-revealed");

    if (isAnswer) {
      button.classList.add("is-correct");
      button.querySelector(".choice__verdict").textContent = "Correct ✓";
    } else if (button === selectedButton) {
      button.classList.add("is-wrong");
      button.querySelector(".choice__verdict").textContent = "Nope ×";
    } else {
      button.classList.add("is-dimmed");
      button.querySelector(".choice__verdict").textContent = "";
    }
  });

  updateScoreboard();
  elements.next.textContent = gameState.round === TOTAL_ROUNDS - 1 ? "Bonus round →" : "Next bird →";
  elements.next.hidden = false;
  elements.next.focus({ preventScroll: true });
}

function updateScoreboard() {
  elements.score.textContent = formatScore(gameState.score);
  elements.streak.textContent = String(gameState.streak);
  elements.streakWrap.classList.toggle("is-hot", gameState.streak >= 2);
}

function goNext() {
  if (!gameState.answered) return;
  if (gameState.round >= TOTAL_ROUNDS - 1) {
    showBonus();
    return;
  }

  gameState.round += 1;
  renderRound();
  document.querySelector(".question-block").scrollIntoView({ behavior: "smooth", block: "start" });
}

function showBonus() {
  gameState.bonusOptions = shuffle(gameState.bonusSet.levels);
  gameState.bonusAnswered = false;
  elements.game.hidden = true;
  elements.bonus.hidden = false;
  elements.results.hidden = true;
  elements.bonusModel.textContent = gameState.bonusSet.model;
  elements.bonusChoices.replaceChildren();
  elements.bonusStatus.textContent = "";
  elements.bonusLive.textContent = "";
  elements.bonusScore.textContent = formatScore(gameState.score);
  elements.bonusSubmit.hidden = false;
  elements.bonusResults.hidden = true;

  gameState.bonusOptions.forEach((output, index) => {
    const card = document.createElement("article");
    const selectId = `bonus-effort-${index + 1}`;
    card.className = "bonus-card";
    card.dataset.level = output.id;
    card.innerHTML = `
      <span class="choice__number" aria-hidden="true">${index + 1}</span>
      <span class="choice__image-wrap bonus-card__image-wrap">
        <img class="choice__image" src="${ASSET_PATH}${output.file}" alt="Pelican output ${index + 1} by ${gameState.bonusSet.model}; reasoning effort hidden" draggable="false" />
      </span>
      <span class="bonus-card__control">
        <label for="${selectId}">Pelican ${index + 1}</label>
        <select id="${selectId}" class="bonus-select" aria-label="Reasoning effort for pelican ${index + 1}">
          <option value="">Choose effort…</option>
          ${gameState.bonusSet.levels.map((level) => `<option value="${level.id}">${level.label}</option>`).join("")}
        </select>
        <span class="bonus-card__answer" aria-hidden="true"></span>
      </span>`;
    card.querySelector("select").addEventListener("change", updateBonusSelections);
    elements.bonusChoices.append(card);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateBonusSelections() {
  const selects = [...elements.bonusChoices.querySelectorAll("select")];
  const selectedValues = selects.map((select) => select.value).filter(Boolean);

  selects.forEach((select) => {
    [...select.options].forEach((option) => {
      option.disabled = Boolean(option.value && option.value !== select.value && selectedValues.includes(option.value));
    });
  });

  elements.bonusStatus.textContent = "";
}

function gradeBonus(event) {
  event.preventDefault();
  if (gameState.bonusAnswered) return;

  const cards = [...elements.bonusChoices.children];
  const selections = cards.map((card) => card.querySelector("select").value);
  if (selections.some((selection) => !selection) || new Set(selections).size !== selections.length) {
    elements.bonusStatus.textContent = "Assign each effort level exactly once.";
    return;
  }

  gameState.bonusAnswered = true;
  gameState.bonusCorrect = 0;

  cards.forEach((card) => {
    const select = card.querySelector("select");
    const answer = gameState.bonusSet.levels.find((level) => level.id === card.dataset.level);
    const isCorrect = select.value === answer.id;
    if (isCorrect) gameState.bonusCorrect += 1;

    card.classList.add(isCorrect ? "is-correct" : "is-wrong");
    card.querySelector(".bonus-card__answer").textContent = isCorrect ? "Correct ✓" : `Answer: ${answer.label}`;
    card.querySelector(".bonus-card__answer").removeAttribute("aria-hidden");
    select.disabled = true;
  });

  gameState.bonusScore = gameState.bonusCorrect * BONUS_POINTS_PER_MATCH;
  gameState.score += gameState.bonusScore;
  elements.bonusScore.textContent = formatScore(gameState.score);
  elements.bonusStatus.textContent = `${gameState.bonusCorrect} of 3 matched · +${gameState.bonusScore} points`;
  elements.bonusLive.textContent = `Bonus complete. ${gameState.bonusCorrect} of 3 reasoning levels matched.`;
  elements.bonusSubmit.hidden = true;
  elements.bonusResults.hidden = false;
  elements.bonusResults.focus({ preventScroll: true });
}

function resultMessage(correct) {
  if (correct === TOTAL_ROUNDS) {
    return {
      grade: "PELICAN\nPROFESSOR",
      heading: "Perfect plumage!",
      copy: "Not a single beak out of place. Simon would be proud — and possibly a little concerned.",
    };
  }
  if (correct >= 7) {
    return {
      grade: "SHARP\nEYE",
      heading: "You know your birds.",
      copy: "An impressive command of wonky wheels, improbable feet and model-specific beak geometry.",
    };
  }
  if (correct >= 4) {
    return {
      grade: "KEEN\nBIRDER",
      heading: "A respectable ride.",
      copy: "You spotted a few unmistakable specimens. Another field trip should sharpen that pelican instinct.",
    };
  }
  return {
    grade: "BEAK\nBEGINNER",
    heading: "Back to the rookery.",
    copy: "The bicycles won this round. Study the strange geometry, then take another flight through the gallery.",
  };
}

function showResults() {
  const message = resultMessage(gameState.correct);
  const previousBest = readBestScore();
  const best = Math.max(previousBest, gameState.score);

  if (best > previousBest) writeBestScore(best);

  elements.game.hidden = true;
  elements.bonus.hidden = true;
  elements.results.hidden = false;
  elements.finalScore.textContent = formatScore(gameState.score);
  elements.correctCount.textContent = String(gameState.correct);
  elements.finalBonus.textContent = String(gameState.bonusCorrect);
  elements.finalBonusTotal.textContent = String(gameState.bonusSet.levels.length);
  elements.finalStreak.textContent = String(gameState.bestStreak);
  elements.resultsGrade.textContent = message.grade;
  elements.resultsGrade.style.whiteSpace = "pre-line";
  elements.resultsHeading.textContent = message.heading;
  elements.resultsCopy.textContent = `${message.copy} Bonus match: ${gameState.bonusCorrect} of ${gameState.bonusSet.levels.length}.`;
  elements.bestScore.textContent = String(best);
  elements.resultsHeading.focus?.();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function copyResult() {
  const birds = "🐦".repeat(gameState.correct) + "·".repeat(TOTAL_ROUNDS - gameState.correct);
  const result = `Guess the Pelican — ${gameState.score} points\n${birds} ${gameState.correct}/${TOTAL_ROUNDS}\n🧠 Bonus: ${gameState.bonusCorrect}/${gameState.bonusSet.levels.length}\nBest streak: ${gameState.bestStreak}`;

  try {
    await navigator.clipboard.writeText(result);
    elements.copyStatus.textContent = "Result copied to your clipboard.";
    elements.share.textContent = "Copied ✓";
  } catch {
    elements.copyStatus.textContent = result.replaceAll("\n", " · ");
  }
}

function openHowTo() {
  if (typeof elements.howToDialog.showModal === "function") {
    elements.howToDialog.showModal();
  } else {
    elements.howToDialog.setAttribute("open", "");
  }
}

function closeHowTo() {
  elements.howToDialog.close();
}

elements.next.addEventListener("click", goNext);
elements.bonusForm.addEventListener("submit", gradeBonus);
elements.bonusResults.addEventListener("click", showResults);
elements.playAgain.addEventListener("click", startGame);
elements.share.addEventListener("click", copyResult);
elements.howToButton.addEventListener("click", openHowTo);
elements.dialogClose.addEventListener("click", closeHowTo);
elements.dialogGotIt.addEventListener("click", closeHowTo);
elements.howToDialog.addEventListener("click", (event) => {
  if (event.target === elements.howToDialog) closeHowTo();
});

document.addEventListener("keydown", (event) => {
  if (elements.howToDialog.open) return;
  if (elements.game.hidden) return;

  if (!gameState.answered && ["1", "2", "3"].includes(event.key)) {
    const button = elements.choices.children[Number(event.key) - 1];
    button?.click();
  } else if (gameState.answered && event.key === "Enter") {
    goNext();
  }
});

elements.bestScore.textContent = String(readBestScore());
startGame();
