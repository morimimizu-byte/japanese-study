const HIRAGANA = [
  ["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"],
  ["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"],
  ["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"],
  ["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"],
  ["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"],
  ["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"],
  ["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"],
  ["や", "ya"], ["ゆ", "yu"], ["よ", "yo"],
  ["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"],
  ["わ", "wa"], ["を", "wo"], ["ん", "n"],
  ["が", "ga"], ["ぎ", "gi"], ["ぐ", "gu"], ["げ", "ge"], ["ご", "go"],
  ["ざ", "za"], ["じ", "ji"], ["ず", "zu"], ["ぜ", "ze"], ["ぞ", "zo"],
  ["だ", "da"], ["ぢ", "ji"], ["づ", "zu"], ["で", "de"], ["ど", "do"],
  ["ば", "ba"], ["び", "bi"], ["ぶ", "bu"], ["べ", "be"], ["ぼ", "bo"],
  ["ぱ", "pa"], ["ぴ", "pi"], ["ぷ", "pu"], ["ぺ", "pe"], ["ぽ", "po"],
  ["きゃ", "kya"], ["きゅ", "kyu"], ["きょ", "kyo"],
  ["しゃ", "sha"], ["しゅ", "shu"], ["しょ", "sho"],
  ["ちゃ", "cha"], ["ちゅ", "chu"], ["ちょ", "cho"],
  ["にゃ", "nya"], ["にゅ", "nyu"], ["にょ", "nyo"],
  ["ひゃ", "hya"], ["ひゅ", "hyu"], ["ひょ", "hyo"],
  ["みゃ", "mya"], ["みゅ", "myu"], ["みょ", "myo"],
  ["りゃ", "rya"], ["りゅ", "ryu"], ["りょ", "ryo"],
  ["ぎゃ", "gya"], ["ぎゅ", "gyu"], ["ぎょ", "gyo"],
  ["じゃ", "ja"], ["じゅ", "ju"], ["じょ", "jo"],
  ["びゃ", "bya"], ["びゅ", "byu"], ["びょ", "byo"],
  ["ぴゃ", "pya"], ["ぴゅ", "pyu"], ["ぴょ", "pyo"]
];

const KATAKANA = [
  ["ア", "a"], ["イ", "i"], ["ウ", "u"], ["エ", "e"], ["オ", "o"],
  ["カ", "ka"], ["キ", "ki"], ["ク", "ku"], ["ケ", "ke"], ["コ", "ko"],
  ["サ", "sa"], ["シ", "shi"], ["ス", "su"], ["セ", "se"], ["ソ", "so"],
  ["タ", "ta"], ["チ", "chi"], ["ツ", "tsu"], ["テ", "te"], ["ト", "to"],
  ["ナ", "na"], ["ニ", "ni"], ["ヌ", "nu"], ["ネ", "ne"], ["ノ", "no"],
  ["ハ", "ha"], ["ヒ", "hi"], ["フ", "fu"], ["ヘ", "he"], ["ホ", "ho"],
  ["マ", "ma"], ["ミ", "mi"], ["ム", "mu"], ["メ", "me"], ["モ", "mo"],
  ["ヤ", "ya"], ["ユ", "yu"], ["ヨ", "yo"],
  ["ラ", "ra"], ["リ", "ri"], ["ル", "ru"], ["レ", "re"], ["ロ", "ro"],
  ["ワ", "wa"], ["ヲ", "wo"], ["ン", "n"],
  ["ガ", "ga"], ["ギ", "gi"], ["グ", "gu"], ["ゲ", "ge"], ["ゴ", "go"],
  ["ザ", "za"], ["ジ", "ji"], ["ズ", "zu"], ["ゼ", "ze"], ["ゾ", "zo"],
  ["ダ", "da"], ["ヂ", "ji"], ["ヅ", "zu"], ["デ", "de"], ["ド", "do"],
  ["バ", "ba"], ["ビ", "bi"], ["ブ", "bu"], ["ベ", "be"], ["ボ", "bo"],
  ["パ", "pa"], ["ピ", "pi"], ["プ", "pu"], ["ペ", "pe"], ["ポ", "po"],
  ["キャ", "kya"], ["キュ", "kyu"], ["キョ", "kyo"],
  ["シャ", "sha"], ["シュ", "shu"], ["ショ", "sho"],
  ["チャ", "cha"], ["チュ", "chu"], ["チョ", "cho"],
  ["ニャ", "nya"], ["ニュ", "nyu"], ["ニョ", "nyo"],
  ["ヒャ", "hya"], ["ヒュ", "hyu"], ["ヒョ", "hyo"],
  ["ミャ", "mya"], ["ミュ", "myu"], ["ミョ", "myo"],
  ["リャ", "rya"], ["リュ", "ryu"], ["リョ", "ryo"],
  ["ギャ", "gya"], ["ギュ", "gyu"], ["ギョ", "gyo"],
  ["ジャ", "ja"], ["ジュ", "ju"], ["ジョ", "jo"],
  ["ビャ", "bya"], ["ビュ", "byu"], ["ビョ", "byo"],
  ["ピャ", "pya"], ["ピュ", "pyu"], ["ピョ", "pyo"]
];

const STORAGE_KEY = "kana-kit-progress-v1";
const DETAIL_STORAGE_KEY = "kana-kit-detail-progress-v1";
const SETTINGS_KEY = "kana-kit-settings-v1";
const STUDY_COMBINATIONS = [
  { mode: "choice", direction: "kana-to-romaji", label: "4たく / かなからromaji" },
  { mode: "choice", direction: "romaji-to-kana", label: "4たく / romajiからかな" },
  { mode: "typing", direction: "kana-to-romaji", label: "つづり / かなからromaji" },
  { mode: "typing", direction: "romaji-to-kana", label: "つづり / romajiからかな" }
];
const CATEGORY_LABELS = {
  new: "あたらしい",
  learning: "れんしゅうちゅう",
  strong: "とくい"
};
const CATEGORY_WEIGHTS = {
  new: 10,
  learning: 6,
  strong: 1
};
const AUTO_ADVANCE_MS = 650;
let autoAdvanceTimer = null;

const state = {
  screen: "home",
  deck: "hiragana",
  chart: "hiragana",
  mode: "choice",
  direction: "kana-to-romaji",
  sessionLength: 10,
  progress: loadJson(STORAGE_KEY, {}),
  detailProgress: loadJson(DETAIL_STORAGE_KEY, {}),
  settings: loadJson(SETTINGS_KEY, {}),
  session: createEmptySession(10)
};

const els = {
  pageTitle: document.querySelector("#pageTitle"),
  homeScreen: document.querySelector("#homeScreen"),
  setupScreen: document.querySelector("#setupScreen"),
  quizScreen: document.querySelector("#quizScreen"),
  resultsScreen: document.querySelector("#resultsScreen"),
  openKanaButton: document.querySelector("#openKanaButton"),
  setupBackButton: document.querySelector("#setupBackButton"),
  progressPie: document.querySelector("#progressPie"),
  piePercent: document.querySelector("#piePercent"),
  progressTitle: document.querySelector("#progressTitle"),
  progressSummary: document.querySelector("#progressSummary"),
  comboChartGrid: document.querySelector("#comboChartGrid"),
  startSessionButton: document.querySelector("#startSessionButton"),
  sessionLengthInput: document.querySelector("#sessionLengthInput"),
  decreaseLength: document.querySelector("#decreaseLength"),
  increaseLength: document.querySelector("#increaseLength"),
  deckName: document.querySelector("#deckName"),
  questionCounter: document.querySelector("#questionCounter"),
  categoryBadge: document.querySelector("#categoryBadge"),
  sessionProgressFill: document.querySelector("#sessionProgressFill"),
  promptText: document.querySelector("#promptText"),
  answerText: document.querySelector("#answerText"),
  hintText: document.querySelector("#hintText"),
  feedbackMark: document.querySelector("#feedbackMark"),
  choiceGrid: document.querySelector("#choiceGrid"),
  typingForm: document.querySelector("#typingForm"),
  typingInput: document.querySelector("#typingInput"),
  spellingFeedback: document.querySelector("#spellingFeedback"),
  userAnswerText: document.querySelector("#userAnswerText"),
  correctAnswerText: document.querySelector("#correctAnswerText"),
  nextButton: document.querySelector("#nextButton"),
  kanaGrid: document.querySelector("#kanaGrid"),
  resultCorrect: document.querySelector("#resultCorrect"),
  resultMissed: document.querySelector("#resultMissed"),
  resultAccuracy: document.querySelector("#resultAccuracy"),
  resultsTitle: document.querySelector("#resultsTitle"),
  resultsHomeButton: document.querySelector("#resultsHomeButton"),
  studyAgainButton: document.querySelector("#studyAgainButton"),
  settingsButton: document.querySelector("#settingsButton"),
  settingsDialog: document.querySelector("#settingsDialog"),
  resetButton: document.querySelector("#resetButton")
};

els.openKanaButton.addEventListener("click", () => showScreen("setup"));
els.setupBackButton.addEventListener("click", () => showScreen("home"));
els.startSessionButton.addEventListener("click", startSession);
els.resultsHomeButton.addEventListener("click", () => showScreen("setup"));
els.studyAgainButton.addEventListener("click", startSession);
els.nextButton.addEventListener("click", nextQuestion);
els.typingInput.addEventListener("focus", () => {
  setTimeout(() => els.typingInput.scrollIntoView({ block: "center", behavior: "smooth" }), 120);
});
els.settingsButton.addEventListener("click", () => els.settingsDialog.showModal());
els.resetButton.addEventListener("click", resetProgress);

document.querySelectorAll("[data-deck]").forEach((button) => {
  button.addEventListener("click", () => {
    state.deck = button.dataset.deck;
    setActive("[data-deck]", button);
    renderSetup();
  });
});

document.querySelectorAll("[data-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    setActive("[data-mode]", button);
    renderSetup();
  });
});

document.querySelectorAll("[data-direction]").forEach((button) => {
  button.addEventListener("click", () => {
    state.direction = button.dataset.direction;
    setActive("[data-direction]", button);
    renderSetup();
  });
});

document.querySelectorAll("[data-chart]").forEach((button) => {
  button.addEventListener("click", () => {
    state.chart = button.dataset.chart;
    setActive("[data-chart]", button);
    renderChart();
  });
});

els.decreaseLength.addEventListener("click", () => setSessionLength(state.sessionLength - 5));
els.increaseLength.addEventListener("click", () => setSessionLength(state.sessionLength + 5));
els.sessionLengthInput.addEventListener("change", () => setSessionLength(Number(els.sessionLengthInput.value)));

els.typingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const answer = normalizeAnswer(els.typingInput.value);
  if (!answer || state.session.answered) return;
  state.session.selectedAnswer = els.typingInput.value.trim();
  gradeCurrent(answer === normalizeAnswer(getAnswer(state.session.current)));
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js"));
}

renderSetup();
renderChart();
showScreen("home");

function createEmptySession(length) {
  return {
    length,
    asked: 0,
    correct: 0,
  missed: 0,
  answered: false,
  lastCorrect: false,
  feedback: "idle",
  shouldFocusInput: false,
  selectedAnswer: "",
    current: null,
    choices: [],
    recentIds: []
  };
}

function showScreen(screen) {
  state.screen = screen;
  els.homeScreen.classList.toggle("hidden", screen !== "home");
  els.setupScreen.classList.toggle("hidden", screen !== "setup");
  els.quizScreen.classList.toggle("hidden", screen !== "quiz");
  els.resultsScreen.classList.toggle("hidden", screen !== "results");
  els.pageTitle.textContent = {
    home: "にほんごべんきょう",
    setup: "ひらがな カタカナ",
    quiz: deckLabel(state.deck),
    results: "けっか"
  }[screen];

  if (screen === "setup") renderSetup();
}

function startSession() {
  clearAutoAdvance();
  state.session = createEmptySession(state.sessionLength);
  state.session.shouldFocusInput = state.mode === "typing";
  showScreen("quiz");
  nextQuestion();
}

function nextQuestion() {
  clearAutoAdvance();
  if (state.session.asked >= state.session.length) {
    showResults();
    return;
  }

  const cards = getDeckCards(state.deck);
  const current = weightedPick(cards, state.session.recentIds);
  state.session.current = current;
  state.session.choices = makeChoices(current, cards);
  state.session.answered = false;
  state.session.lastCorrect = false;
  state.session.feedback = "idle";
  state.session.shouldFocusInput = state.mode === "typing";
  state.session.selectedAnswer = "";
  state.session.asked += 1;
  state.session.recentIds = [current.id, ...state.session.recentIds].slice(0, 3);
  renderQuiz();
}

function gradeCurrent(wasCorrect) {
  if (state.session.answered) return;

  const card = state.session.current;
  const item = state.progress[card.id] || {
    seen: 0,
    correct: 0,
    missed: 0,
    lastStudied: ""
  };

  item.seen += 1;
  item.correct += wasCorrect ? 1 : 0;
  item.missed += wasCorrect ? 0 : 1;
  item.lastStudied = new Date().toISOString();
  state.progress[card.id] = item;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));

  const detailKey = getDetailKey(card);
  const detailItem = state.detailProgress[detailKey] || {
    seen: 0,
    correct: 0,
    missed: 0,
    lastStudied: ""
  };

  detailItem.seen += 1;
  detailItem.correct += wasCorrect ? 1 : 0;
  detailItem.missed += wasCorrect ? 0 : 1;
  detailItem.lastStudied = item.lastStudied;
  state.detailProgress[detailKey] = detailItem;
  localStorage.setItem(DETAIL_STORAGE_KEY, JSON.stringify(state.detailProgress));

  state.session.answered = true;
  state.session.lastCorrect = wasCorrect;
  state.session.feedback = wasCorrect ? "correct" : "wrong";
  state.session.correct += wasCorrect ? 1 : 0;
  state.session.missed += wasCorrect ? 0 : 1;
  renderQuiz();
  if (wasCorrect) scheduleAutoAdvance();
}

function renderSetup() {
  els.sessionLengthInput.value = String(state.sessionLength);
  renderProgressPie();
  renderComboCharts();
}

function renderQuiz() {
  const card = state.session.current;
  const answer = getAnswer(card);
  const answeredCount = state.session.correct + state.session.missed;
  const answerLabel = state.direction === "kana-to-romaji" ? "romaji" : "kana";
  const isTyping = state.mode === "typing";
  const isWrong = state.session.feedback === "wrong";

  els.quizScreen.classList.toggle("spelling-mode", isTyping);
  els.deckName.textContent = deckLabel(state.deck);
  els.questionCounter.textContent = `${state.session.asked} / ${state.session.length} もんめ`;
  renderCategoryBadge(getCardCategory(card));
  els.sessionProgressFill.style.width = `${Math.round((answeredCount / state.session.length) * 100)}%`;
  els.promptText.textContent = getPrompt(card);
  els.promptText.classList.toggle("romaji-prompt", state.direction === "romaji-to-kana");
  els.answerText.textContent = answer;
  els.answerText.classList.toggle("hidden", !state.session.answered);
  els.hintText.textContent = state.session.answered
    ? state.session.lastCorrect
      ? "せいかい"
      : "もうすこし"
    : state.mode === "choice"
      ? `${answerLabel}をえらんで`
      : `${answerLabel}をいれて`;
  renderFeedbackMark();

  els.choiceGrid.classList.toggle("hidden", state.mode !== "choice");
  els.typingForm.classList.toggle("hidden", state.mode !== "typing");
  els.spellingFeedback.classList.toggle("hidden", !(isTyping && isWrong));
  els.userAnswerText.textContent = state.session.selectedAnswer || " ";
  els.correctAnswerText.textContent = answer;
  els.nextButton.classList.toggle("hidden", !isWrong);
  els.nextButton.textContent = state.session.asked >= state.session.length ? "けっか" : "つぎへ";

  renderChoices(answer);
  renderTypingInput();
}

function renderFeedbackMark() {
  const isCorrect = state.session.feedback === "correct";
  const isWrong = state.session.feedback === "wrong";
  els.feedbackMark.classList.toggle("hidden", !isCorrect && !isWrong);
  els.feedbackMark.classList.toggle("correct", isCorrect);
  els.feedbackMark.classList.toggle("wrong", isWrong);
  els.feedbackMark.textContent = isCorrect ? "○" : "×";
}

function renderChoices(answer) {
  els.choiceGrid.innerHTML = "";
  state.session.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.textContent = choice;
    button.disabled = state.session.answered;

    if (state.session.answered) {
      if (choice === answer) button.classList.add("correct");
      if (choice === state.session.selectedAnswer && choice !== answer) button.classList.add("incorrect");
      if (choice !== answer && choice !== state.session.selectedAnswer) button.classList.add("muted");
    }

    button.addEventListener("click", () => {
      if (state.session.answered) return;
      state.session.selectedAnswer = choice;
      gradeCurrent(choice === answer);
    });

    els.choiceGrid.appendChild(button);
  });
}

function renderTypingInput() {
  const expectingRomaji = state.direction === "kana-to-romaji";
  const isWrong = state.session.feedback === "wrong";
  els.typingInput.value = state.session.answered ? state.session.selectedAnswer : "";
  els.typingInput.disabled = isWrong;
  els.typingInput.placeholder = expectingRomaji ? "romajiをいれて" : "かなをいれて";
  els.typingInput.inputMode = expectingRomaji ? "latin" : "text";
  if (state.mode === "typing" && state.session.shouldFocusInput && !isWrong) {
    state.session.shouldFocusInput = false;
    requestAnimationFrame(() => {
      els.typingInput.focus({ preventScroll: true });
    });
  }
}

function showResults() {
  clearAutoAdvance();
  const answered = state.session.correct + state.session.missed;
  const accuracy = answered ? Math.round((state.session.correct / answered) * 100) : 0;
  els.resultsTitle.textContent = `${state.session.correct} / ${state.session.length}`;
  els.resultCorrect.textContent = state.session.correct;
  els.resultMissed.textContent = state.session.missed;
  els.resultAccuracy.textContent = `${accuracy}%`;
  showScreen("results");
}

function scheduleAutoAdvance() {
  clearAutoAdvance();
  autoAdvanceTimer = window.setTimeout(() => {
    autoAdvanceTimer = null;
    nextQuestion();
  }, AUTO_ADVANCE_MS);
}

function clearAutoAdvance() {
  if (!autoAdvanceTimer) return;
  window.clearTimeout(autoAdvanceTimer);
  autoAdvanceTimer = null;
}

function setSessionLength(value) {
  const normalized = Math.min(100, Math.max(5, Number.isFinite(value) ? Math.round(value / 5) * 5 : 10));
  state.sessionLength = normalized;
  renderSetup();
}

function renderProgressPie() {
  const stats = getOverallProgressCategories(state.deck);
  const total = stats.total || 1;
  const strongDeg = (stats.strong / total) * 360;
  const learningDeg = strongDeg + (stats.learning / total) * 360;
  const strongPercent = Math.round((stats.strong / total) * 100);

  els.progressPie.style.background = `conic-gradient(var(--strong) 0deg ${strongDeg}deg, var(--learning) ${strongDeg}deg ${learningDeg}deg, var(--new) ${learningDeg}deg 360deg)`;
  els.progressPie.setAttribute(
    "aria-label",
    `${deckLabel(state.deck)}: とくい ${stats.strong}, れんしゅうちゅう ${stats.learning}, あたらしい ${stats.new}`
  );
  els.piePercent.textContent = `${strongPercent}%`;
  els.progressTitle.textContent = `${deckLabel(state.deck)}ぜんたい`;
  els.progressSummary.textContent = `あたらしい ${stats.new} · れんしゅうちゅう ${stats.learning} · とくい ${stats.strong}`;
}

function renderComboCharts() {
  els.comboChartGrid.innerHTML = "";
  STUDY_COMBINATIONS.forEach((combo) => {
    const stats = getComboProgressCategories(state.deck, combo.mode, combo.direction);
    const card = document.createElement("div");
    card.className = "mini-progress-card";

    const pie = document.createElement("div");
    pie.className = "mini-pie";
    applyPieBackground(pie, stats);

    const label = document.createElement("span");
    label.textContent = combo.label;
    const percent = document.createElement("strong");
    percent.textContent = `${Math.round((stats.strong / (stats.total || 1)) * 100)}%`;

    card.append(pie, label, percent);
    els.comboChartGrid.appendChild(card);
  });
}

function applyPieBackground(element, stats) {
  const total = stats.total || 1;
  const strongDeg = (stats.strong / total) * 360;
  const learningDeg = strongDeg + (stats.learning / total) * 360;
  element.style.background = `conic-gradient(var(--strong) 0deg ${strongDeg}deg, var(--learning) ${strongDeg}deg ${learningDeg}deg, var(--new) ${learningDeg}deg 360deg)`;
}

function getOverallProgressCategories(deck = state.deck) {
  const cards = getDeckCards(deck);
  return cards.reduce(
    (stats, card) => {
      const categories = STUDY_COMBINATIONS.map((combo) => getCardCategory(card, combo.mode, combo.direction, deck));
      if (categories.every((category) => category === "strong")) {
        stats.strong += 1;
      } else if (categories.every((category) => category === "new")) {
        stats.new += 1;
      } else {
        stats.learning += 1;
      }
      return stats;
    },
    { total: cards.length, new: 0, learning: 0, strong: 0 }
  );
}

function getComboProgressCategories(deck = state.deck, mode = state.mode, direction = state.direction) {
  const cards = getDeckCards(deck);
  return cards.reduce(
    (stats, card) => {
      stats[getCardCategory(card, mode, direction, deck)] += 1;
      return stats;
    },
    { total: cards.length, new: 0, learning: 0, strong: 0 }
  );
}

function getCardCategory(card, mode = state.mode, direction = state.direction, deck = state.deck) {
  const item = state.detailProgress[getDetailKey(card, mode, direction, deck)] || {};
  const seen = item.seen || 0;
  const strength = (item.correct || 0) - (item.missed || 0);
  if (seen === 0) return "new";
  if (strength >= 3) return "strong";
  return "learning";
}

function renderCategoryBadge(category) {
  els.categoryBadge.textContent = CATEGORY_LABELS[category];
  els.categoryBadge.className = `category-badge ${category}`;
}

function getDetailKey(card, mode = state.mode, direction = state.direction, deck = state.deck) {
  return `${deck}|${mode}|${direction}|${card.kana}`;
}

function getDeckCards(deck = state.deck) {
  const hiragana = HIRAGANA.map(([kana, romaji]) => ({ id: `h:${kana}`, kana, romaji, type: "hiragana" }));
  const katakana = KATAKANA.map(([kana, romaji]) => ({ id: `k:${kana}`, kana, romaji, type: "katakana" }));
  return deck === "katakana" ? katakana : hiragana;
}

function weightedPick(cards, recentIds) {
  const avoidRecent = cards.filter((card) => !recentIds.includes(card.id));
  const pool = avoidRecent.length >= 4 ? avoidRecent : cards;
  const weighted = pool.flatMap((card) => {
    const weight = CATEGORY_WEIGHTS[getCardCategory(card)];
    return Array.from({ length: weight }, () => card);
  });
  return weighted[Math.floor(Math.random() * weighted.length)];
}

function makeChoices(card, cards) {
  const correct = getAnswer(card);
  const wrongAnswers = [...new Set(cards.map(getAnswer).filter((answer) => answer !== correct))];
  return shuffle([correct, ...shuffle(wrongAnswers).slice(0, 3)]);
}

function getPrompt(card) {
  return state.direction === "kana-to-romaji" ? card.kana : card.romaji;
}

function getAnswer(card) {
  return state.direction === "kana-to-romaji" ? card.romaji : card.kana;
}

function normalizeAnswer(value) {
  return value.trim().toLowerCase().replace(/\s+/g, "");
}

function renderChart() {
  const cards = getDeckCards(state.chart);
  els.kanaGrid.innerHTML = "";
  cards.forEach((card) => {
    const cell = document.createElement("div");
    cell.className = "kana-cell";

    const kana = document.createElement("b");
    kana.textContent = card.kana;
    const romaji = document.createElement("small");
    romaji.textContent = card.romaji;

    cell.append(kana, romaji);
    els.kanaGrid.appendChild(cell);
  });
}

function setActive(selector, activeButton) {
  document.querySelectorAll(selector).forEach((button) => {
    button.classList.toggle("active", button === activeButton);
  });
}

function deckLabel(deck) {
  return {
    hiragana: "ひらがな",
    katakana: "カタカナ"
  }[deck];
}

function resetProgress() {
  const confirmed = confirm("Reset all study progress on this device?");
  if (!confirmed) return;
  state.progress = {};
  state.detailProgress = {};
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(DETAIL_STORAGE_KEY);
  renderChart();
  renderSetup();
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}
