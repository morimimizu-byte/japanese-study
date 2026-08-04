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
const STUDY_STORAGE_KEY = "vocabulary-study-progress-v1";
const VOCABULARY_PROFILE_KEY = "vocabulary-learning-profile-v2";
const STUDY_COMBINATIONS = [
  { mode: "choice", direction: "kana-to-romaji", label: "4たく / かなからromaji" },
  { mode: "choice", direction: "romaji-to-kana", label: "4たく / romajiからかな" },
  { mode: "typing", direction: "kana-to-romaji", label: "つづり / かなからromaji" },
  { mode: "typing", direction: "romaji-to-kana", label: "つづり / romajiからかな" }
];
const VOCABULARY_COMBINATIONS = [
  { mode: "choice", direction: "japanese-to-english", label: "4たく / 日本語 → English" }
];
const CATEGORY_LABELS = {
  new: { text: "新しい", reading: "あたらしい" },
  learning: { text: "練習中", reading: "れんしゅうちゅう" },
  strong: { text: "得意", reading: "とくい" }
};
const CATEGORY_WEIGHTS = {
  new: 10,
  learning: 6,
  strong: 1
};
const AUTO_ADVANCE_MS = 650;
const REVIEW_INTERVAL_DAYS = [1, 3, 7, 14, 30];
let autoAdvanceTimer = null;

const state = {
  screen: "home",
  area: "kana",
  deck: "hiragana",
  chart: "hiragana",
  vocabCategory: "set-1",
  vocabularyTab: "course",
  activeThemeId: VOCABULARY_COURSE.themes[0].id,
  activeLessonId: VOCABULARY_COURSE.lessons[0].id,
  activeVirtualLesson: null,
  activeCollectionKind: "stage",
  activeCollectionId: VOCABULARY_COURSE.stages[0].id,
  activePosStageId: VOCABULARY_COURSE.stages[0].id,
  posBatchLength: 10,
  reviewMode: "difficult",
  todaySessionLength: 8,
  kanaMode: "choice",
  kanaDirection: "kana-to-romaji",
  vocabularyMode: "choice",
  vocabularyDirection: "japanese-to-english",
  mode: "choice",
  direction: "kana-to-romaji",
  sessionLength: 10,
  vocabularySessionLength: 98,
  reviewSessionLength: 20,
  themeSessionLength: 20,
  progress: loadJson(STORAGE_KEY, {}),
  detailProgress: loadJson(DETAIL_STORAGE_KEY, {}),
  studyProgress: loadJson(STUDY_STORAGE_KEY, {}),
  settings: loadJson(SETTINGS_KEY, {}),
  studyCards: [],
  studyIndex: 0,
  studyContext: null,
  studyRevealed: false,
  libraryCards: [],
  vocabularyProfile: loadJson(VOCABULARY_PROFILE_KEY, {}),
  session: createEmptySession(10)
};

const els = {
  pageTitle: document.querySelector("#pageTitle"),
  homeScreen: document.querySelector("#homeScreen"),
  setupScreen: document.querySelector("#setupScreen"),
  vocabularyLevelScreen: document.querySelector("#vocabularyLevelScreen"),
  vocabularyDashboardScreen: document.querySelector("#vocabularyDashboardScreen"),
  foundationScreen: document.querySelector("#foundationScreen"),
  themeScreen: document.querySelector("#themeScreen"),
  lessonScreen: document.querySelector("#lessonScreen"),
  posLevelScreen: document.querySelector("#posLevelScreen"),
  posScreen: document.querySelector("#posScreen"),
  wordStudyScreen: document.querySelector("#wordStudyScreen"),
  vocabularySetupScreen: document.querySelector("#vocabularySetupScreen"),
  quizScreen: document.querySelector("#quizScreen"),
  resultsScreen: document.querySelector("#resultsScreen"),
  openKanaButton: document.querySelector("#openKanaButton"),
  openVocabularyButton: document.querySelector("#openVocabularyButton"),
  setupBackButton: document.querySelector("#setupBackButton"),
  vocabularyLevelBackButton: document.querySelector("#vocabularyLevelBackButton"),
  openN5Button: document.querySelector("#openN5Button"),
  n5LevelWordCount: document.querySelector("#n5LevelWordCount"),
  n5DashboardWordCount: document.querySelector("#n5DashboardWordCount"),
  vocabularyDashboardBackButton: document.querySelector("#vocabularyDashboardBackButton"),
  openFoundationButton: document.querySelector("#openFoundationButton"),
  foundationEntryCount: document.querySelector("#foundationEntryCount"),
  foundationBackButton: document.querySelector("#foundationBackButton"),
  foundationWordCount: document.querySelector("#foundationWordCount"),
  foundationStartedCount: document.querySelector("#foundationStartedCount"),
  foundationProgressRing: document.querySelector("#foundationProgressRing"),
  foundationLearningCount: document.querySelector("#foundationLearningCount"),
  foundationStrongCount: document.querySelector("#foundationStrongCount"),
  themeBackButton: document.querySelector("#themeBackButton"),
  lessonBackButton: document.querySelector("#lessonBackButton"),
  posBackButton: document.querySelector("#posBackButton"),
  wordStudyBackButton: document.querySelector("#wordStudyBackButton"),
  vocabularyBackButton: document.querySelector("#vocabularyBackButton"),
  vocabularySetupWordCount: document.querySelector("#vocabularySetupWordCount"),
  sourceWordCount: document.querySelector("#sourceWordCount"),
  courseProgressSummary: document.querySelector("#courseProgressSummary"),
  courseProgressPercent: document.querySelector("#courseProgressPercent"),
  courseProgressPie: document.querySelector("#courseProgressPie"),
  courseLearningCount: document.querySelector("#courseLearningCount"),
  courseStrongCount: document.querySelector("#courseStrongCount"),
  todayTabPanel: document.querySelector("#todayTabPanel"),
  courseTabPanel: document.querySelector("#courseTabPanel"),
  posTabPanel: document.querySelector("#posTabPanel"),
  reviewTabPanel: document.querySelector("#reviewTabPanel"),
  libraryTabPanel: document.querySelector("#libraryTabPanel"),
  todayStageLabel: document.querySelector("#todayStageLabel"),
  todayStudyTitle: document.querySelector("#todayStudyTitle"),
  todayStudySummary: document.querySelector("#todayStudySummary"),
  todaySessionLengthInput: document.querySelector("#todaySessionLengthInput"),
  decreaseTodayLength: document.querySelector("#decreaseTodayLength"),
  increaseTodayLength: document.querySelector("#increaseTodayLength"),
  startTodayButton: document.querySelector("#startTodayButton"),
  introducedCount: document.querySelector("#introducedCount"),
  learningCount: document.querySelector("#learningCount"),
  todayDueCount: document.querySelector("#todayDueCount"),
  strongCount: document.querySelector("#strongCount"),
  continueLessonButton: document.querySelector("#continueLessonButton"),
  continueLessonTitle: document.querySelector("#continueLessonTitle"),
  continueLessonSummary: document.querySelector("#continueLessonSummary"),
  stageGrid: document.querySelector("#stageGrid"),
  specialCourseGrid: document.querySelector("#specialCourseGrid"),
  posLevelGrid: document.querySelector("#posLevelGrid"),
  posLevelBackButton: document.querySelector("#posLevelBackButton"),
  posLevelTotalCount: document.querySelector("#posLevelTotalCount"),
  posLevelTitle: document.querySelector("#posLevelTitle"),
  posCategoryChoiceGrid: document.querySelector("#posCategoryChoiceGrid"),
  themeGrid: document.querySelector("#themeGrid"),
  dueReviewCount: document.querySelector("#dueReviewCount"),
  difficultReviewCount: document.querySelector("#difficultReviewCount"),
  recentReviewCount: document.querySelector("#recentReviewCount"),
  reviewSessionLengthInput: document.querySelector("#reviewSessionLengthInput"),
  decreaseReviewLength: document.querySelector("#decreaseReviewLength"),
  increaseReviewLength: document.querySelector("#increaseReviewLength"),
  startReviewButton: document.querySelector("#startReviewButton"),
  reviewEmptyState: document.querySelector("#reviewEmptyState"),
  librarySearch: document.querySelector("#librarySearch"),
  libraryTypeFilter: document.querySelector("#libraryTypeFilter"),
  libraryStageFilter: document.querySelector("#libraryStageFilter"),
  libraryWordTypeFilter: document.querySelector("#libraryWordTypeFilter"),
  libraryThemeFilter: document.querySelector("#libraryThemeFilter"),
  libraryStatusFilter: document.querySelector("#libraryStatusFilter"),
  librarySort: document.querySelector("#librarySort"),
  libraryResultCount: document.querySelector("#libraryResultCount"),
  libraryList: document.querySelector("#libraryList"),
  libraryLimitNote: document.querySelector("#libraryLimitNote"),
  studyLibraryResultsButton: document.querySelector("#studyLibraryResultsButton"),
  quizLibraryResultsButton: document.querySelector("#quizLibraryResultsButton"),
  themeWordCount: document.querySelector("#themeWordCount"),
  themeEyebrow: document.querySelector("#themeEyebrow"),
  themeTitle: document.querySelector("#themeTitle"),
  themeDescription: document.querySelector("#themeDescription"),
  themeProgressFill: document.querySelector("#themeProgressFill"),
  themeProgressSummary: document.querySelector("#themeProgressSummary"),
  lessonGrid: document.querySelector("#lessonGrid"),
  themeSessionLengthInput: document.querySelector("#themeSessionLengthInput"),
  decreaseThemeLength: document.querySelector("#decreaseThemeLength"),
  increaseThemeLength: document.querySelector("#increaseThemeLength"),
  startThemeButton: document.querySelector("#startThemeButton"),
  lessonPosition: document.querySelector("#lessonPosition"),
  lessonThemeTitle: document.querySelector("#lessonThemeTitle"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonSummary: document.querySelector("#lessonSummary"),
  lessonViewedCount: document.querySelector("#lessonViewedCount"),
  lessonStrongCount: document.querySelector("#lessonStrongCount"),
  lessonWordList: document.querySelector("#lessonWordList"),
  startLessonStudyButton: document.querySelector("#startLessonStudyButton"),
  startLessonButton: document.querySelector("#startLessonButton"),
  posTotalCount: document.querySelector("#posTotalCount"),
  posScreenTitle: document.querySelector("#posScreenTitle"),
  posScreenDescription: document.querySelector("#posScreenDescription"),
  posViewedCount: document.querySelector("#posViewedCount"),
  posLearningCount: document.querySelector("#posLearningCount"),
  posStrongCount: document.querySelector("#posStrongCount"),
  posBatchLengthInput: document.querySelector("#posBatchLengthInput"),
  collectionBatchControl: document.querySelector("#collectionBatchControl"),
  decreasePosLength: document.querySelector("#decreasePosLength"),
  increasePosLength: document.querySelector("#increasePosLength"),
  posThemeBreakdown: document.querySelector("#posThemeBreakdown"),
  collectionLessonGrid: document.querySelector("#collectionLessonGrid"),
  collectionWordList: document.querySelector("#collectionWordList"),
  collectionActionRow: document.querySelector("#collectionActionRow"),
  startPosStudyButton: document.querySelector("#startPosStudyButton"),
  startPosQuizButton: document.querySelector("#startPosQuizButton"),
  wordStudyPosition: document.querySelector("#wordStudyPosition"),
  wordStudyProgressFill: document.querySelector("#wordStudyProgressFill"),
  wordStudyJapanese: document.querySelector("#wordStudyJapanese"),
  wordStudyKicker: document.querySelector("#wordStudyKicker"),
  wordStudyRecallPrompt: document.querySelector("#wordStudyRecallPrompt"),
  wordStudyRevealButton: document.querySelector("#wordStudyRevealButton"),
  wordStudyDetails: document.querySelector("#wordStudyDetails"),
  wordStudyEnglish: document.querySelector("#wordStudyEnglish"),
  wordStudyPosCard: document.querySelector("#wordStudyPosCard"),
  wordStudyPos: document.querySelector("#wordStudyPos"),
  wordStudySpecialDetail: document.querySelector("#wordStudySpecialDetail"),
  wordStudyConjugations: document.querySelector("#wordStudyConjugations"),
  wordStudyRelatedForms: document.querySelector("#wordStudyRelatedForms"),
  wordStudyRelatedWords: document.querySelector("#wordStudyRelatedWords"),
  wordStudyExamples: document.querySelector("#wordStudyExamples"),
  previousStudyWordButton: document.querySelector("#previousStudyWordButton"),
  nextStudyWordButton: document.querySelector("#nextStudyWordButton"),
  studyBatchQuizButton: document.querySelector("#studyBatchQuizButton"),
  progressPie: document.querySelector("#progressPie"),
  piePercent: document.querySelector("#piePercent"),
  progressTitle: document.querySelector("#progressTitle"),
  progressSummary: document.querySelector("#progressSummary"),
  comboChartGrid: document.querySelector("#comboChartGrid"),
  vocabularyProgressPie: document.querySelector("#vocabularyProgressPie"),
  vocabularyPiePercent: document.querySelector("#vocabularyPiePercent"),
  vocabularyProgressTitle: document.querySelector("#vocabularyProgressTitle"),
  vocabularyProgressSummary: document.querySelector("#vocabularyProgressSummary"),
  startSessionButton: document.querySelector("#startSessionButton"),
  startVocabularySessionButton: document.querySelector("#startVocabularySessionButton"),
  vocabularyQuizLength: document.querySelector("#vocabularyQuizLength"),
  sessionLengthInput: document.querySelector("#sessionLengthInput"),
  decreaseLength: document.querySelector("#decreaseLength"),
  increaseLength: document.querySelector("#increaseLength"),
  vocabularySessionLengthInput: document.querySelector("#vocabularySessionLengthInput"),
  decreaseVocabularyLength: document.querySelector("#decreaseVocabularyLength"),
  increaseVocabularyLength: document.querySelector("#increaseVocabularyLength"),
  quitQuizButton: document.querySelector("#quitQuizButton"),
  deckName: document.querySelector("#deckName"),
  questionCounter: document.querySelector("#questionCounter"),
  categoryBadge: document.querySelector("#categoryBadge"),
  sessionProgressFill: document.querySelector("#sessionProgressFill"),
  promptText: document.querySelector("#promptText"),
  answerText: document.querySelector("#answerText"),
  contextHint: document.querySelector("#contextHint"),
  hintText: document.querySelector("#hintText"),
  feedbackMark: document.querySelector("#feedbackMark"),
  choiceGrid: document.querySelector("#choiceGrid"),
  typingForm: document.querySelector("#typingForm"),
  typingInput: document.querySelector("#typingInput"),
  submitAnswerButton: document.querySelector("#submitAnswerButton"),
  spellingFeedback: document.querySelector("#spellingFeedback"),
  userAnswerText: document.querySelector("#userAnswerText"),
  correctAnswerText: document.querySelector("#correctAnswerText"),
  nextButton: document.querySelector("#nextButton"),
  kanaGrid: document.querySelector("#kanaGrid"),
  vocabularyList: document.querySelector("#vocabularyList"),
  vocabularyListSummary: document.querySelector("#vocabularyListSummary"),
  resultCorrect: document.querySelector("#resultCorrect"),
  resultMissed: document.querySelector("#resultMissed"),
  resultAccuracy: document.querySelector("#resultAccuracy"),
  resultsTitle: document.querySelector("#resultsTitle"),
  resultsHomeButton: document.querySelector("#resultsHomeButton"),
  studyAgainButton: document.querySelector("#studyAgainButton"),
  missedWordsButton: document.querySelector("#missedWordsButton"),
  nextLessonButton: document.querySelector("#nextLessonButton"),
  settingsButton: document.querySelector("#settingsButton"),
  settingsDialog: document.querySelector("#settingsDialog"),
  resetButton: document.querySelector("#resetButton")
};

els.openKanaButton.addEventListener("click", () => openStudyArea("kana"));
els.openVocabularyButton.addEventListener("click", () => openStudyArea("vocabulary"));
els.setupBackButton.addEventListener("click", () => showScreen("home"));
els.vocabularyLevelBackButton.addEventListener("click", () => showScreen("home"));
els.openN5Button.addEventListener("click", () => showScreen("vocabulary-dashboard"));
els.vocabularyDashboardBackButton.addEventListener("click", () => showScreen("vocabulary-level"));
els.openFoundationButton.addEventListener("click", () => showScreen("foundation"));
els.foundationBackButton.addEventListener("click", returnToVocabularyCourse);
els.themeBackButton.addEventListener("click", () => showScreen("vocabulary-dashboard"));
els.lessonBackButton.addEventListener("click", () => showScreen("pos"));
els.posLevelBackButton.addEventListener("click", () => showScreen("vocabulary-dashboard"));
els.posBackButton.addEventListener("click", returnFromCollection);
els.wordStudyBackButton.addEventListener("click", returnFromWordStudy);
els.vocabularyBackButton.addEventListener("click", () => showScreen("vocabulary-dashboard"));
els.startSessionButton.addEventListener("click", startSession);
els.startVocabularySessionButton.addEventListener("click", () =>
  startVocabularySession("set", getVocabularyCards(), state.vocabularySessionLength)
);
els.resultsHomeButton.addEventListener("click", () => showScreen(state.session.returnScreen));
els.studyAgainButton.addEventListener("click", repeatVocabularySession);
els.missedWordsButton.addEventListener("click", startMissedWordsSession);
els.nextLessonButton.addEventListener("click", openNextLesson);
els.continueLessonButton.addEventListener("click", openContinueLesson);
els.startTodayButton.addEventListener("click", startTodayLearning);
els.startReviewButton.addEventListener("click", () =>
  startVocabularySession("review", getReviewCards(), state.reviewSessionLength, {
    label: state.reviewMode === "recent" ? "最近の間違い" : "苦手な語",
    returnScreen: "vocabulary-dashboard"
  })
);
els.startThemeButton.addEventListener("click", () =>
  startVocabularySession("theme", getThemeCards(state.activeThemeId), state.themeSessionLength)
);
els.startLessonStudyButton.addEventListener("click", () => {
  const lesson = getActiveLesson();
  const cards = getActiveLessonCards();
  openWordStudy(cards, {
    source: "lesson",
    returnScreen: "lesson",
    label: lesson.title,
    lessonId: state.activeLessonId
  });
});
els.startLessonButton.addEventListener("click", () => {
  const cards = getActiveLessonCards();
  startVocabularySession(
    "lesson",
    cards,
    cards.length,
    { label: getActiveLesson().title, returnScreen: "lesson", lessonId: state.activeLessonId }
  );
});
els.startPosStudyButton.addEventListener("click", startCollectionStudy);
els.startPosQuizButton.addEventListener("click", startCollectionQuiz);
els.previousStudyWordButton.addEventListener("click", () => moveStudyWord(-1));
els.nextStudyWordButton.addEventListener("click", () => moveStudyWord(1));
els.wordStudyRevealButton.addEventListener("click", revealStudyCard);
els.studyBatchQuizButton.addEventListener("click", startStudyBatchQuiz);
els.studyLibraryResultsButton.addEventListener("click", startLibraryStudy);
els.quizLibraryResultsButton.addEventListener("click", startLibraryQuiz);
els.nextButton.addEventListener("click", nextQuestion);
els.quitQuizButton.addEventListener("click", quitQuiz);
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
    state.kanaMode = state.mode;
    setActive("[data-mode]", button);
    renderSetup();
  });
});

document.querySelectorAll("[data-direction]").forEach((button) => {
  button.addEventListener("click", () => {
    state.direction = button.dataset.direction;
    state.kanaDirection = state.direction;
    setActive("[data-direction]", button);
    renderSetup();
  });
});

document.querySelectorAll("[data-vocab-category]").forEach((button) => {
  button.addEventListener("click", () => {
    state.vocabCategory = button.dataset.vocabCategory;
    setActive("[data-vocab-category]", button);
    renderVocabularySetup();
  });
});

document.querySelectorAll("[data-vocabulary-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    state.vocabularyTab = button.dataset.vocabularyTab;
    setActive("[data-vocabulary-tab]", button);
    renderVocabularyDashboard();
  });
});

document.querySelectorAll("[data-review-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    state.reviewMode = button.dataset.reviewMode;
    setActive("[data-review-mode]", button);
    renderReviewPanel();
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
els.decreaseVocabularyLength.addEventListener("click", () =>
  setVocabularySessionLength(state.vocabularySessionLength - 5)
);
els.increaseVocabularyLength.addEventListener("click", () =>
  setVocabularySessionLength(state.vocabularySessionLength + 5)
);
els.vocabularySessionLengthInput.addEventListener("change", () =>
  setVocabularySessionLength(Number(els.vocabularySessionLengthInput.value))
);
els.decreaseReviewLength.addEventListener("click", () =>
  setReviewSessionLength(state.reviewSessionLength - 5)
);
els.increaseReviewLength.addEventListener("click", () =>
  setReviewSessionLength(state.reviewSessionLength + 5)
);
els.reviewSessionLengthInput.addEventListener("change", () =>
  setReviewSessionLength(Number(els.reviewSessionLengthInput.value))
);
els.decreaseTodayLength.addEventListener("click", () =>
  setTodaySessionLength(state.todaySessionLength - 1)
);
els.increaseTodayLength.addEventListener("click", () =>
  setTodaySessionLength(state.todaySessionLength + 1)
);
els.todaySessionLengthInput.addEventListener("change", () =>
  setTodaySessionLength(Number(els.todaySessionLengthInput.value))
);
els.decreaseThemeLength.addEventListener("click", () =>
  setThemeSessionLength(state.themeSessionLength - 5)
);
els.increaseThemeLength.addEventListener("click", () =>
  setThemeSessionLength(state.themeSessionLength + 5)
);
els.themeSessionLengthInput.addEventListener("change", () =>
  setThemeSessionLength(Number(els.themeSessionLengthInput.value))
);
els.decreasePosLength.addEventListener("click", () =>
  setPosBatchLength(state.posBatchLength - 1)
);
els.increasePosLength.addEventListener("click", () =>
  setPosBatchLength(state.posBatchLength + 1)
);
els.posBatchLengthInput.addEventListener("change", () =>
  setPosBatchLength(Number(els.posBatchLengthInput.value))
);

[els.libraryTypeFilter, els.libraryStageFilter, els.libraryWordTypeFilter,
  els.libraryThemeFilter, els.libraryStatusFilter, els.librarySort].forEach((control) =>
  control.addEventListener("change", renderLibrary)
);
els.librarySearch.addEventListener("input", renderLibrary);

["pointerdown", "mousedown", "touchstart"].forEach((eventName) => {
  els.submitAnswerButton.addEventListener(
    eventName,
    (event) => {
      if (state.mode !== "typing") return;
      event.preventDefault();
      submitTypingAnswer();
    },
    { passive: false }
  );
});

els.submitAnswerButton.addEventListener("click", (event) => {
  if (state.mode !== "typing") return;
  event.preventDefault();
  submitTypingAnswer();
});

els.typingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitTypingAnswer();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js"));
}

function renderVocabularySourceCounts() {
  const total = VOCABULARY.length;
  const foundationTotal = getFoundationCards().length;
  const specialCourseTotal = VOCABULARY_COURSE.specialCourses.length;
  els.n5LevelWordCount.innerHTML = `${total}${rubyMarkup("語", "ご")}`;
  els.n5DashboardWordCount.innerHTML = `JLPT N5 · ${total}${rubyMarkup("語", "ご")}`;
  els.foundationEntryCount.innerHTML = `${specialCourseTotal}${rubyMarkup("種類", "しゅるい")} · ${foundationTotal}${rubyMarkup("語", "ご")}`;
  els.vocabularySetupWordCount.innerHTML = `${rubyMarkup("全単語", "ぜんたんご")} · ${total}${rubyMarkup("語", "ご")}`;
  els.sourceWordCount.innerHTML = `${total}${rubyMarkup("語", "ご")}`;
}

normalizeStaticRuby();
renderVocabularySourceCounts();
renderSetup();
renderVocabularySetup();
renderVocabularyDashboard();
renderChart();
showScreen("home");

function createEmptySession(length) {
  return {
    length,
    source: "kana",
    label: "",
    returnScreen: "setup",
    sourceCards: [],
    lessonId: "",
    nextLessonId: "",
    missedCardIds: [],
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
    queue: [],
    recentIds: []
  };
}

function openStudyArea(area) {
  state.area = area;
  if (area === "vocabulary") {
    state.mode = state.vocabularyMode;
    state.direction = state.vocabularyDirection;
    showScreen("vocabulary-level");
  } else {
    state.mode = state.kanaMode;
    state.direction = state.kanaDirection;
    showScreen("setup");
  }
}

function getSetupScreen() {
  return state.area === "vocabulary" ? "vocabulary-dashboard" : "setup";
}

function showScreen(screen) {
  state.screen = screen;
  els.homeScreen.classList.toggle("hidden", screen !== "home");
  els.setupScreen.classList.toggle("hidden", screen !== "setup");
  els.vocabularyLevelScreen.classList.toggle("hidden", screen !== "vocabulary-level");
  els.vocabularyDashboardScreen.classList.toggle("hidden", screen !== "vocabulary-dashboard");
  els.foundationScreen.classList.toggle("hidden", screen !== "foundation");
  els.themeScreen.classList.toggle("hidden", screen !== "theme");
  els.lessonScreen.classList.toggle("hidden", screen !== "lesson");
  els.posLevelScreen.classList.toggle("hidden", screen !== "pos-level");
  els.posScreen.classList.toggle("hidden", screen !== "pos");
  els.wordStudyScreen.classList.toggle("hidden", screen !== "word-study");
  els.vocabularySetupScreen.classList.toggle("hidden", screen !== "vocabulary");
  els.quizScreen.classList.toggle("hidden", screen !== "quiz");
  els.resultsScreen.classList.toggle("hidden", screen !== "results");
  const pageTitle = {
    home: { text: "にほんごべんきょう" },
    setup: { text: "ひらがな カタカナ" },
    "vocabulary-level": { text: "単語", reading: "たんご" },
    "vocabulary-dashboard": { text: "N5 単語", reading: "N5 たんご" },
    foundation: { text: "基礎表現", reading: "きそひょうげん" },
    theme: { text: "テーマ学習", reading: "テーマがくしゅう" },
    lesson: { text: "単語の課", reading: "たんごのか" },
    "pos-level": { text: "品詞別", reading: "ひんしべつ" },
    pos: { text: "N5 単語", reading: "N5 たんご" },
    "word-study": { text: "単語学習", reading: "たんごがくしゅう" },
    vocabulary: { text: "単語", reading: "たんご" },
    quiz:
      state.area === "vocabulary"
        ? { text: "単語", reading: "たんご" }
        : { text: deckLabel(state.deck) },
    results:
      state.area === "vocabulary"
        ? { text: "結果", reading: "けっか" }
        : { text: "けっか" }
  }[screen];
  setRubyContent(els.pageTitle, pageTitle.text, pageTitle.reading);

  if (screen === "setup") renderSetup();
  if (screen === "vocabulary-dashboard") renderVocabularyDashboard();
  if (screen === "foundation") renderFoundationScreen();
  if (screen === "theme") renderThemeScreen();
  if (screen === "lesson") renderLessonScreen();
  if (screen === "pos-level") renderPartOfSpeechLevelScreen();
  if (screen === "pos") renderCollectionScreen();
  if (screen === "word-study") renderWordStudy();
  if (screen === "vocabulary") renderVocabularySetup();
  window.scrollTo?.({ top: 0, behavior: "instant" });
}

function startSession() {
  if (state.area === "vocabulary") {
    startVocabularySession("set", getVocabularyCards(), state.vocabularySessionLength);
    return;
  }
  clearAutoAdvance();
  const cards = getStudyCards();
  const sessionLength = state.sessionLength;
  state.session = createEmptySession(sessionLength);
  state.session.source = "kana";
  state.session.returnScreen = "setup";
  state.session.shouldFocusInput = state.mode === "typing";
  showScreen("quiz");
  nextQuestion();
}

function startVocabularySession(source, cards, requestedLength, options = {}) {
  if (!cards.length) return;
  clearAutoAdvance();
  state.area = "vocabulary";
  state.mode = state.vocabularyMode;
  state.direction = state.vocabularyDirection;
  const sessionLength = Math.min(requestedLength, cards.length);
  state.session = createEmptySession(sessionLength);
  state.session.source = source;
  state.session.label = options.label || vocabularySessionLabel(source);
  state.session.returnScreen = options.returnScreen || vocabularyReturnScreen(source);
  state.session.sourceCards = [...cards];
  state.session.lessonId = options.lessonId || (source === "lesson" ? state.activeLessonId : "");
  state.session.nextLessonId = getNextLessonId(state.session.lessonId);
  state.session.queue = weightedOrder(cards).slice(0, sessionLength);
  showScreen("quiz");
  nextQuestion();
}

function quitQuiz() {
  clearAutoAdvance();
  const returnScreen = state.session.returnScreen || getSetupScreen();
  state.session = createEmptySession(state.area === "vocabulary" ? state.vocabularySessionLength : state.sessionLength);
  showScreen(returnScreen);
}

function nextQuestion() {
  clearAutoAdvance();
  if (state.session.asked >= state.session.length) {
    showResults();
    return;
  }

  const cards =
    state.area === "vocabulary" && state.session.sourceCards.length
      ? state.session.sourceCards
      : getStudyCards();
  const current =
    state.area === "vocabulary"
      ? state.session.queue[state.session.asked]
      : weightedPick(cards, state.session.recentIds);
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
  if (!wasCorrect) detailItem.lastMissed = item.lastStudied;
  if (state.area === "vocabulary") {
    markCardViewed(card);
    const previousStreak = detailItem.reviewStreak || 0;
    detailItem.reviewStreak = wasCorrect
      ? Math.min(previousStreak + 1, REVIEW_INTERVAL_DAYS.length)
      : 0;
    const intervalDays = wasCorrect
      ? REVIEW_INTERVAL_DAYS[Math.max(0, detailItem.reviewStreak - 1)]
      : 0;
    detailItem.reviewIntervalDays = intervalDays;
    detailItem.nextReview = new Date(
      Date.now() + intervalDays * 24 * 60 * 60 * 1000
    ).toISOString();
    if (!wasCorrect && !state.session.missedCardIds.includes(card.id)) {
      state.session.missedCardIds.push(card.id);
      state.session.queue.push(card);
      state.session.length += 1;
    }
  }
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

function submitTypingAnswer() {
  if (state.mode !== "typing" || !state.session.current) return;
  const answer = normalizeAnswer(els.typingInput.value);
  if (!answer || state.session.answered) return;
  state.session.selectedAnswer = els.typingInput.value.trim();
  const acceptedAnswers = getAcceptedAnswers(state.session.current).map(normalizeAnswer);
  gradeCurrent(acceptedAnswers.includes(answer));
}

function renderSetup() {
  els.sessionLengthInput.value = String(state.sessionLength);
  renderProgressPie();
  renderComboCharts();
}

function renderVocabularySetup() {
  els.vocabularySessionLengthInput.value = String(state.vocabularySessionLength);
  els.vocabularyQuizLength.innerHTML = `${state.vocabularySessionLength}${rubyMarkup("問", "もん")}`;
  els.startVocabularySessionButton.innerHTML =
    `${state.vocabularySessionLength}${rubyMarkup("問", "もん")}を${rubyMarkup("始める", "はじめる")}`;
  renderVocabularyProgressPie();
  renderVocabularyList();
}

function renderVocabularyDashboardLegacy() {
  const allCards = getAllVocabularyCards();
  const learned = allCards.filter(hasViewedCard).length;
  const percent = Math.round((learned / allCards.length) * 100);
  els.courseProgressSummary.innerHTML =
    `${learned} / ${allCards.length}${rubyMarkup("語", "ご")}を${rubyMarkup("学習", "がくしゅう")}`;
  els.courseProgressPercent.textContent = `${percent}%`;
  els.courseProgressPie.style.background = `conic-gradient(var(--learning) 0deg ${percent * 3.6}deg, var(--new) ${percent * 3.6}deg 360deg)`;

  els.courseTabPanel.classList.toggle("hidden", state.vocabularyTab !== "course");
  els.reviewTabPanel.classList.toggle("hidden", state.vocabularyTab !== "review");
  els.posTabPanel.classList.toggle("hidden", state.vocabularyTab !== "pos");
  els.allTabPanel.classList.toggle("hidden", state.vocabularyTab !== "all");

  renderContinueLesson();
  renderThemeGrid();
  renderReviewPanel();
  renderPartOfSpeechGrid();
}

function renderContinueLessonLegacy() {
  const lesson =
    VOCABULARY_COURSE.lessons.find((candidate) => {
      const cards = getLessonCards(candidate.id);
      return cards.some((card) => !hasViewedCard(card));
    }) || VOCABULARY_COURSE.lessons[0];
  const cards = getLessonCards(lesson.id);
  const learned = cards.filter(hasViewedCard).length;
  const coursePosition = VOCABULARY_COURSE.lessons.findIndex(
    (candidate) => candidate.id === lesson.id
  );
  els.continueLessonButton.dataset.lessonId = lesson.id;
  els.continueLessonTitle.innerHTML =
    `${coursePosition + 1} · ${rubyMarkup(lesson.title, lesson.reading)}`;
  els.continueLessonSummary.innerHTML =
    `${cards.length}${rubyMarkup("語", "ご")} · ` +
    (learned
      ? `${learned}${rubyMarkup("語", "ご")}を${rubyMarkup("学習済み", "がくしゅうずみ")}`
      : `まだ${rubyMarkup("学習", "がくしゅう")}していません`);
}

function openContinueLessonLegacy() {
  const lessonId = els.continueLessonButton.dataset.lessonId;
  if (!lessonId) return;
  state.activeLessonId = lessonId;
  state.activeThemeId = getLesson(lessonId).themeId;
  showScreen("lesson");
}

function renderThemeGridLegacy() {
  els.themeGrid.innerHTML = "";
  VOCABULARY_COURSE.themes.forEach((theme, index) => {
    const cards = getThemeCards(theme.id);
    const learned = cards.filter(hasViewedCard).length;
    const percent = Math.round((learned / cards.length) * 100);
    const button = document.createElement("button");
    button.className = "theme-card";
    button.type = "button";
    button.innerHTML = `
      <span class="theme-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="theme-card-copy">
        <strong>${rubyMarkup(theme.title, theme.reading)}</strong>
        <small>${theme.wordCount}${rubyMarkup("語", "ご")} · ${theme.lessonCount}${rubyMarkup("課", "か")}</small>
      </span>
      <span class="theme-percent">${percent}%</span>
      <span class="mini-linear"><i style="width:${percent}%"></i></span>
    `;
    button.addEventListener("click", () => {
      state.activeThemeId = theme.id;
      state.activeLessonId = getThemeLessons(theme.id)[0].id;
      showScreen("theme");
    });
    els.themeGrid.appendChild(button);
  });
}

function renderReviewPanelLegacy() {
  const cards = getReviewCards();
  els.dueReviewCount.textContent = String(cards.length);
  els.reviewSessionLengthInput.value = String(state.reviewSessionLength);
  els.startReviewButton.disabled = cards.length === 0;
  els.reviewEmptyState.classList.toggle("hidden", cards.length !== 0);
}

function renderPartOfSpeechGrid() {
  els.posGrid.innerHTML = "";
  const allCards = getAllVocabularyCards();
  Object.entries(VOCABULARY_COURSE.partsOfSpeech).forEach(([id, label]) => {
    const cards = allCards.filter((card) => card.partOfSpeech === id);
    if (!cards.length) return;
    const learned = cards.filter(hasViewedCard).length;
    const button = document.createElement("button");
    button.className = "pos-card";
    button.type = "button";
    button.innerHTML = `
      <strong>${rubyMarkup(label.label, label.reading)}</strong>
      <span>${cards.length}${rubyMarkup("語", "ご")}</span>
      <small>${learned}${rubyMarkup("語", "ご")}を${rubyMarkup("学習済み", "がくしゅうずみ")}</small>
    `;
    button.addEventListener("click", () => {
      state.activePartOfSpeech = id;
      state.posThemeFilter = "all";
      showScreen("pos");
    });
    els.posGrid.appendChild(button);
  });
}

function renderPartOfSpeechScreen() {
  const label = VOCABULARY_COURSE.partsOfSpeech[state.activePartOfSpeech];
  const allCards = getPartOfSpeechCards(state.activePartOfSpeech);
  const filteredCards = getPartOfSpeechCards(
    state.activePartOfSpeech,
    state.posThemeFilter
  );
  const viewed = allCards.filter(hasViewedCard).length;
  const learning = allCards.filter(
    (card) => getCardCategory(card) === "learning"
  ).length;
  const strong = allCards.filter((card) => getCardCategory(card) === "strong").length;

  els.posScreenTitle.innerHTML = rubyMarkup(label.label, label.reading);
  els.posScreenDescription.innerHTML = rubyMarkup(
    label.description,
    label.descriptionReading
  );
  els.posTotalCount.innerHTML = `${allCards.length}${rubyMarkup("語", "ご")}`;
  els.posViewedCount.textContent = String(viewed);
  els.posLearningCount.textContent = String(learning);
  els.posStrongCount.textContent = String(strong);

  els.posThemeSelect.innerHTML =
    `<option value="all">すべてのテーマ</option>` +
    VOCABULARY_COURSE.themes
      .filter((theme) => allCards.some((card) => card.themeId === theme.id))
      .map(
        (theme) =>
          `<option value="${escapeHtml(theme.id)}">${escapeHtml(theme.title)}</option>`
      )
      .join("");
  els.posThemeSelect.value = state.posThemeFilter;

  setPosBatchLength(Math.min(state.posBatchLength, filteredCards.length));
  els.startPosStudyButton.disabled = filteredCards.length === 0;
  els.startPosQuizButton.disabled = filteredCards.length === 0;
  renderPartOfSpeechThemeBreakdown(allCards);
}

function renderPartOfSpeechThemeBreakdown(cards) {
  els.posThemeBreakdown.innerHTML = "";
  VOCABULARY_COURSE.themes.forEach((theme) => {
    const count = cards.filter((card) => card.themeId === theme.id).length;
    if (!count) return;
    const item = document.createElement("span");
    item.innerHTML =
      `${rubyMarkup(theme.title, theme.reading)} <b>${count}</b>`;
    els.posThemeBreakdown.appendChild(item);
  });
}

function startPartOfSpeechStudy() {
  const label = VOCABULARY_COURSE.partsOfSpeech[state.activePartOfSpeech];
  const cards = getPartOfSpeechStudyBatch();
  openWordStudy(cards, {
    source: "pos",
    returnScreen: "pos",
    label: label.label,
    partOfSpeech: state.activePartOfSpeech
  });
}

function startPartOfSpeechQuiz() {
  const label = VOCABULARY_COURSE.partsOfSpeech[state.activePartOfSpeech];
  const cards = getPartOfSpeechStudyBatch();
  startVocabularySession("pos", cards, cards.length, {
    label: label.label,
    returnScreen: "pos"
  });
}

function getPartOfSpeechStudyBatch() {
  const cards = getPartOfSpeechCards(
    state.activePartOfSpeech,
    state.posThemeFilter
  );
  return orderStudyCards(cards).slice(0, Math.min(state.posBatchLength, cards.length));
}

function orderStudyCardsLegacy(cards) {
  const categoryRank = { new: 0, learning: 1, strong: 2 };
  return [...cards].sort((left, right) => {
    const leftViewed = hasViewedCard(left) ? 1 : 0;
    const rightViewed = hasViewedCard(right) ? 1 : 0;
    if (leftViewed !== rightViewed) return leftViewed - rightViewed;
    return categoryRank[getCardCategory(left)] - categoryRank[getCardCategory(right)];
  });
}

function openWordStudyLegacy(cards, context) {
  if (!cards.length) return;
  state.studyCards = [...cards];
  state.studyContext = context;
  const firstUnviewed = state.studyCards.findIndex((card) => !hasViewedCard(card));
  state.studyIndex = firstUnviewed >= 0 ? firstUnviewed : 0;
  showScreen("word-study");
}

function returnFromWordStudyLegacy() {
  showScreen(state.studyContext?.returnScreen || "vocabulary-dashboard");
}

function moveStudyWordLegacy(offset) {
  const nextIndex = state.studyIndex + offset;
  if (nextIndex < 0 || nextIndex >= state.studyCards.length) return;
  state.studyIndex = nextIndex;
  renderWordStudy();
  window.scrollTo?.({ top: 0, behavior: "smooth" });
}

function renderWordStudyLegacy() {
  const card = state.studyCards[state.studyIndex];
  if (!card) return;
  markCardViewed(card);
  const pos = VOCABULARY_COURSE.partsOfSpeech[card.partOfSpeech];
  const viewed = state.studyCards.filter(hasViewedCard).length;
  const percent = Math.round((viewed / state.studyCards.length) * 100);

  els.wordStudyPosition.textContent = `${state.studyIndex + 1} / ${state.studyCards.length}`;
  els.wordStudyProgressFill.style.width = `${percent}%`;
  els.wordStudyJapanese.innerHTML = furiganaMarkup(card.japanese, card.reading);
  els.wordStudyEnglish.textContent = cleanDisplayEnglish(card.english);
  els.wordStudyPos.innerHTML = rubyMarkup(pos.label, pos.reading);
  els.wordStudyExamples.innerHTML = card.examples
    .map(
      (example, index) => `
        <div class="usage-example-card">
          ${
            card.examples.length > 1
              ? `<span class="example-number">${rubyMarkup("例", "れい")} ${index + 1}</span>`
              : ""
          }
          <p class="example-japanese">${highlightedExampleMarkup(example)}</p>
          <p class="example-english">${escapeHtml(example.english)}</p>
        </div>
      `
    )
    .join("");
  els.previousStudyWordButton.disabled = state.studyIndex === 0;
  els.nextStudyWordButton.disabled =
    state.studyIndex === state.studyCards.length - 1;
}

function startStudyBatchQuizLegacy() {
  const source = state.studyContext?.source === "lesson" ? "lesson" : "pos";
  startVocabularySession(source, state.studyCards, state.studyCards.length, {
    label: state.studyContext?.label || "単語学習",
    returnScreen: "word-study",
    lessonId: state.studyContext?.lessonId || ""
  });
}

function markCardViewedLegacy(card) {
  const current = state.studyProgress[card.id] || { viewed: 0, lastViewed: "" };
  current.viewed += 1;
  current.lastViewed = new Date().toISOString();
  state.studyProgress[card.id] = current;
  localStorage.setItem(STUDY_STORAGE_KEY, JSON.stringify(state.studyProgress));
}

function renderThemeScreen() {
  const theme = getTheme(state.activeThemeId);
  const cards = getThemeCards(theme.id);
  const learned = cards.filter(hasViewedCard).length;
  const percent = Math.round((learned / cards.length) * 100);
  const themeIndex = VOCABULARY_COURSE.themes.findIndex((item) => item.id === theme.id);
  els.themeEyebrow.innerHTML = `${rubyMarkup("テーマ", "テーマ")} ${themeIndex + 1}`;
  els.themeTitle.innerHTML = rubyMarkup(theme.title, theme.reading);
  els.themeDescription.innerHTML = rubyMarkup(theme.description, theme.descriptionReading);
  els.themeWordCount.innerHTML = `${cards.length}${rubyMarkup("語", "ご")}`;
  els.themeProgressFill.style.width = `${percent}%`;
  els.themeProgressSummary.innerHTML =
    `${learned} / ${cards.length}${rubyMarkup("語", "ご")}を${rubyMarkup("学習済み", "がくしゅうずみ")}`;
  setThemeSessionLength(Math.min(state.themeSessionLength, cards.length));
  renderLessonGrid();
}

function renderLessonGrid() {
  els.lessonGrid.innerHTML = "";
  getThemeLessons(state.activeThemeId).forEach((lesson) => {
    const cards = getLessonCards(lesson.id);
    const learned = cards.filter(hasViewedCard).length;
    const strong = cards.filter((card) => getCardCategory(card) === "strong").length;
    const button = document.createElement("button");
    button.className = "lesson-card";
    button.type = "button";
    button.innerHTML = `
      <span class="lesson-number">${lesson.number}</span>
      <span>
        <strong>${rubyMarkup(lesson.title, lesson.reading)}</strong>
        <small>${learned} / ${cards.length}${rubyMarkup("語", "ご")} · ${rubyMarkup("得意", "とくい")} ${strong}</small>
      </span>
      <span aria-hidden="true">→</span>
    `;
    button.addEventListener("click", () => {
      state.activeLessonId = lesson.id;
      showScreen("lesson");
    });
    els.lessonGrid.appendChild(button);
  });
}

function renderLessonScreenLegacy() {
  const lesson = getLesson(state.activeLessonId);
  const theme = getTheme(lesson.themeId);
  const cards = getLessonCards(lesson.id);
  const lessonIndex = VOCABULARY_COURSE.lessons.findIndex((item) => item.id === lesson.id);
  const learned = cards.filter(hasViewedCard).length;
  const strong = cards.filter((card) => getCardCategory(card) === "strong").length;
  els.lessonPosition.textContent = `${lessonIndex + 1} / ${VOCABULARY_COURSE.lessons.length}`;
  els.lessonThemeTitle.innerHTML = rubyMarkup(theme.title, theme.reading);
  els.lessonTitle.innerHTML = rubyMarkup(lesson.title, lesson.reading);
  els.lessonSummary.innerHTML =
    `${cards.length}${rubyMarkup("語", "ご")} · ${learned}${rubyMarkup("語", "ご")}を${rubyMarkup("学習済み", "がくしゅうずみ")}`;
  els.lessonViewedCount.textContent = `${learned} / ${cards.length}`;
  els.lessonStrongCount.textContent = `${strong} / ${cards.length}`;
  els.startLessonButton.innerHTML =
    `${cards.length}${rubyMarkup("問", "もん")}のクイズを${rubyMarkup("始める", "はじめる")}`;
}

function renderQuiz() {
  const card = state.session.current;
  const answer = getAnswer(card);
  const answeredCount = state.session.correct + state.session.missed;
  const answerLabel =
    state.area === "vocabulary"
      ? state.direction === "japanese-to-english"
        ? "English"
        : "日本語"
      : state.direction === "kana-to-romaji"
        ? "romaji"
        : "kana";
  const isTyping = state.mode === "typing";
  const isWrong = state.session.feedback === "wrong";

  els.quizScreen.classList.toggle("spelling-mode", isTyping);
  els.quizScreen.classList.toggle("vocabulary-mode", state.area === "vocabulary");
  els.deckName.textContent =
    state.area === "vocabulary"
      ? state.session.label || vocabularyCategoryLabel(state.vocabCategory)
      : deckLabel(state.deck);
  if (state.area === "vocabulary") {
    els.questionCounter.innerHTML = `${state.session.asked} / ${state.session.length} ${rubyMarkup("問目", "もんめ")}`;
  } else {
    els.questionCounter.textContent = `${state.session.asked} / ${state.session.length} もんめ`;
  }
  renderCategoryBadge(getCardCategory(card));
  els.sessionProgressFill.style.width = `${Math.round((answeredCount / state.session.length) * 100)}%`;
  if (state.area === "vocabulary" && state.direction === "japanese-to-english") {
    els.promptText.innerHTML = furiganaMarkup(card.japanese, card.reading);
  } else {
    els.promptText.textContent = getPrompt(card);
  }
  els.promptText.classList.toggle(
    "romaji-prompt",
    state.direction === "romaji-to-kana" || state.direction === "english-to-japanese"
  );
  els.contextHint.textContent = card.contextHint || "";
  els.contextHint.classList.toggle("hidden", !card.contextHint);
  els.answerText.textContent = answer;
  els.answerText.classList.toggle("hidden", !state.session.answered);
  if (state.area === "vocabulary") {
    els.hintText.innerHTML = state.session.answered
      ? state.session.lastCorrect
        ? rubyMarkup("正解", "せいかい")
        : `もう${rubyMarkup("少し", "すこし")}`
      : `${escapeHtml(answerLabel)}を${rubyMarkup("選んで", "えらんで")}`;
  } else {
    els.hintText.textContent = state.session.answered
      ? state.session.lastCorrect
        ? "せいかい"
        : "もうすこし"
      : state.mode === "choice"
        ? `${answerLabel}をえらんで`
        : `${answerLabel}をいれて`;
  }
  renderFeedbackMark();

  els.choiceGrid.classList.toggle("hidden", state.mode !== "choice");
  els.typingForm.classList.toggle("hidden", state.mode !== "typing");
  els.spellingFeedback.classList.toggle("hidden", !(isTyping && isWrong));
  els.userAnswerText.textContent = state.session.selectedAnswer || " ";
  els.correctAnswerText.textContent = answer;
  els.nextButton.classList.toggle("hidden", !isWrong);
  if (state.area === "vocabulary") {
    els.nextButton.innerHTML =
      state.session.asked >= state.session.length
        ? rubyMarkup("結果", "けっか")
        : rubyMarkup("次へ", "つぎへ");
  } else {
    els.nextButton.textContent = state.session.asked >= state.session.length ? "けっか" : "つぎへ";
  }

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
  const expectingLatin =
    state.direction === "kana-to-romaji" || state.direction === "japanese-to-english";
  const isWrong = state.session.feedback === "wrong";
  els.typingInput.value = state.session.answered ? state.session.selectedAnswer : "";
  els.typingInput.disabled = isWrong;
  els.submitAnswerButton.disabled = isWrong;
  els.typingInput.placeholder =
    state.area === "vocabulary"
      ? expectingLatin
        ? "Englishをいれて"
        : "日本語をいれて"
      : expectingLatin
        ? "romajiをいれて"
        : "かなをいれて";
  els.typingInput.inputMode = expectingLatin ? "latin" : "text";
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
  const isVocabulary = state.area === "vocabulary";
  els.missedWordsButton.classList.toggle(
    "hidden",
    !isVocabulary || state.session.missedCardIds.length === 0
  );
  els.nextLessonButton.classList.toggle(
    "hidden",
    !isVocabulary || state.session.source !== "lesson" || !state.session.nextLessonId
  );
  showScreen("results");
}

function repeatVocabularySession() {
  if (state.area !== "vocabulary") {
    startSession();
    return;
  }
  startVocabularySession(
    state.session.source,
    state.session.sourceCards,
    state.session.length,
    {
      label: state.session.label,
      returnScreen: state.session.returnScreen,
      lessonId: state.session.lessonId
    }
  );
}

function startMissedWordsSession() {
  const missedCards = state.session.sourceCards.filter((card) =>
    state.session.missedCardIds.includes(card.id)
  );
  startVocabularySession("missed", missedCards, missedCards.length, {
    label: "間違えた単語",
    returnScreen: state.session.returnScreen
  });
}

function openNextLessonLegacy() {
  if (!state.session.nextLessonId) return;
  state.activeLessonId = state.session.nextLessonId;
  const lesson = getLesson(state.activeLessonId);
  state.activeThemeId = lesson.themeId;
  showScreen("lesson");
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
  els.sessionLengthInput.value = String(normalized);
}

function setVocabularySessionLength(value) {
  const maximum = getVocabularyCards().length || 98;
  const requested = Number.isFinite(value) ? value : maximum;
  const normalized =
    requested >= maximum
      ? maximum
      : Math.min(maximum, Math.max(5, Math.round(requested / 5) * 5));
  state.vocabularySessionLength = normalized;
  renderVocabularySetup();
}

function setReviewSessionLength(value) {
  state.reviewSessionLength = normalizeVocabularyLength(value, 20);
  els.reviewSessionLengthInput.value = String(state.reviewSessionLength);
}

function setThemeSessionLength(value) {
  const maximum = getThemeCards(state.activeThemeId).length || 100;
  state.themeSessionLength = Math.min(maximum, normalizeVocabularyLength(value, 20));
  els.themeSessionLengthInput.value = String(state.themeSessionLength);
}

function setPosBatchLengthLegacy(value) {
  const maximum = Math.max(
    1,
    getPartOfSpeechCards(state.activePartOfSpeech, state.posThemeFilter).length
  );
  const normalized = normalizeVocabularyLength(value, 10);
  state.posBatchLength = Math.min(maximum, normalized);
  els.posBatchLengthInput.value = String(state.posBatchLength);
}

function normalizeVocabularyLength(value, fallback) {
  return Math.min(
    100,
    Math.max(5, Number.isFinite(value) ? Math.round(value / 5) * 5 : fallback)
  );
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
  els.progressSummary.textContent = `4つのクイズ: あたらしい ${stats.new} · れんしゅうちゅう ${stats.learning} · とくい ${stats.strong}`;
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

function renderVocabularyProgressPie() {
  const stats = getVocabularyOverallProgressCategories();
  const total = stats.total || 1;
  const strongDeg = (stats.strong / total) * 360;
  const learningDeg = strongDeg + (stats.learning / total) * 360;
  const strongPercent = Math.round((stats.strong / total) * 100);
  const categoryLabel = vocabularyCategoryLabel(state.vocabCategory);

  els.vocabularyProgressPie.style.background = `conic-gradient(var(--strong) 0deg ${strongDeg}deg, var(--learning) ${strongDeg}deg ${learningDeg}deg, var(--new) ${learningDeg}deg 360deg)`;
  els.vocabularyProgressPie.setAttribute(
    "aria-label",
    `${categoryLabel}: 得意 ${stats.strong}, 練習中 ${stats.learning}, 新しい ${stats.new}`
  );
  els.vocabularyPiePercent.textContent = `${strongPercent}%`;
  els.vocabularyProgressTitle.innerHTML = `${escapeHtml(categoryLabel)}の${rubyMarkup("進捗", "しんちょく")}`;
  els.vocabularyProgressSummary.innerHTML =
    `${stats.total}${rubyMarkup("語", "ご")}: ` +
    `${rubyMarkup("新しい", "あたらしい")} ${stats.new} · ` +
    `${rubyMarkup("練習中", "れんしゅうちゅう")} ${stats.learning} · ` +
    `${rubyMarkup("得意", "とくい")} ${stats.strong}`;
}

function applyPieBackground(element, stats) {
  const total = stats.total || 1;
  const strongDeg = (stats.strong / total) * 360;
  const learningDeg = strongDeg + (stats.learning / total) * 360;
  element.style.background = `conic-gradient(var(--strong) 0deg ${strongDeg}deg, var(--learning) ${strongDeg}deg ${learningDeg}deg, var(--new) ${learningDeg}deg 360deg)`;
}

function getOverallProgressCategories(deck = state.deck) {
  const cards = getDeckCards(deck);
  const stats = {
    total: cards.length * STUDY_COMBINATIONS.length,
    new: 0,
    learning: 0,
    strong: 0
  };

  cards.forEach((card) => {
    STUDY_COMBINATIONS.forEach((combo) => {
      stats[getCardCategory(card, combo.mode, combo.direction, deck)] += 1;
    });
  });

  return stats;
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

function getVocabularyOverallProgressCategories() {
  const cards = getVocabularyCards();
  const stats = {
    total: cards.length * VOCABULARY_COMBINATIONS.length,
    new: 0,
    learning: 0,
    strong: 0
  };

  cards.forEach((card) => {
    VOCABULARY_COMBINATIONS.forEach((combo) => {
      stats[getCardCategory(card, combo.mode, combo.direction, state.deck, "vocabulary")] += 1;
    });
  });

  return stats;
}

function getVocabularyComboProgressCategories(mode = state.mode, direction = state.direction) {
  const cards = getVocabularyCards();
  return cards.reduce(
    (stats, card) => {
      stats[getCardCategory(card, mode, direction, state.deck, "vocabulary")] += 1;
      return stats;
    },
    { total: cards.length, new: 0, learning: 0, strong: 0 }
  );
}

function getCardCategoryLegacy(
  card,
  mode = state.mode,
  direction = state.direction,
  deck = state.deck,
  area = state.area
) {
  const item = state.detailProgress[getDetailKey(card, mode, direction, deck, area)] || {};
  const seen = item.seen || 0;
  const strength = (item.correct || 0) - (item.missed || 0);
  if (seen === 0) return "new";
  if (strength >= 3) return "strong";
  return "learning";
}

function renderCategoryBadge(category) {
  const label = CATEGORY_LABELS[category];
  setRubyContent(els.categoryBadge, label.text, label.reading);
  els.categoryBadge.className = `category-badge ${category}`;
}

function getDetailKey(
  card,
  mode = state.mode,
  direction = state.direction,
  deck = state.deck,
  area = state.area
) {
  if (area === "vocabulary") return `vocabulary|${mode}|${direction}|${card.id}`;
  return `${deck}|${mode}|${direction}|${card.kana}`;
}

function getDeckCards(deck = state.deck) {
  const hiragana = HIRAGANA.map(([kana, romaji]) => ({ id: `h:${kana}`, kana, romaji, type: "hiragana" }));
  const katakana = KATAKANA.map(([kana, romaji]) => ({ id: `k:${kana}`, kana, romaji, type: "katakana" }));
  return deck === "katakana" ? katakana : hiragana;
}

function getVocabularyCards(category = state.vocabCategory) {
  return getAllVocabularyCards().filter((word) => word.category === category);
}

function getAllVocabularyCards() {
  return VOCABULARY.map((word) => ({
    ...word,
    ...VOCABULARY_COURSE.assignments[word.id],
    sourceId: word.id,
    id: `v:${word.id}`,
    type: "vocabulary"
  }));
}

function getThemeCards(themeId) {
  return getAllVocabularyCards().filter((card) => card.themeId === themeId);
}

function getPartOfSpeechCards(partOfSpeech, themeId = "all") {
  return getAllVocabularyCards().filter(
    (card) =>
      card.partOfSpeech === partOfSpeech &&
      (themeId === "all" || card.themeId === themeId)
  );
}

function getLessonCards(lessonId) {
  const lesson = getLesson(lessonId);
  const wordIds = new Set(lesson.wordIds);
  return getAllVocabularyCards().filter((card) => wordIds.has(card.sourceId));
}

function getReviewCardsLegacy() {
  const now = Date.now();
  return getAllVocabularyCards().filter((card) => {
    const detail = getVocabularyDetail(card);
    if (!detail.seen) return false;
    if (!detail.nextReview) return true;
    return new Date(detail.nextReview).getTime() <= now;
  });
}

function getVocabularyDetail(card) {
  return (
    state.detailProgress[
      getDetailKey(card, "choice", "japanese-to-english", state.deck, "vocabulary")
    ] || {}
  );
}

function hasStudiedCard(card) {
  return (getVocabularyDetail(card).seen || 0) > 0;
}

function hasViewedCard(card) {
  return (state.studyProgress[card.id]?.viewed || 0) > 0;
}

function getTheme(themeId) {
  return VOCABULARY_COURSE.themes.find((theme) => theme.id === themeId);
}

function getLesson(lessonId) {
  return VOCABULARY_COURSE.lessons.find((lesson) => lesson.id === lessonId);
}

function getThemeLessons(themeId) {
  return VOCABULARY_COURSE.lessons.filter((lesson) => lesson.themeId === themeId);
}

function getNextLessonIdLegacy(lessonId) {
  if (!lessonId) return "";
  const index = VOCABULARY_COURSE.lessons.findIndex((lesson) => lesson.id === lessonId);
  return index >= 0 && index < VOCABULARY_COURSE.lessons.length - 1
    ? VOCABULARY_COURSE.lessons[index + 1].id
    : "";
}

function vocabularySessionLabel(source) {
  if (source === "set") return vocabularyCategoryLabel(state.vocabCategory);
  if (source === "theme") return getTheme(state.activeThemeId).title;
  if (source === "lesson") return getLesson(state.activeLessonId).title;
  if (source === "review") return state.reviewMode === "recent" ? "最近の間違い" : "苦手な語";
  if (source === "missed") return "間違えた単語";
  return "N5 単語";
}

function vocabularyReturnScreen(source) {
  if (source === "set") return "vocabulary";
  if (source === "theme") return "theme";
  if (source === "lesson") return "lesson";
  return "vocabulary-dashboard";
}

function getStudyCards() {
  return state.area === "vocabulary" ? getVocabularyCards() : getDeckCards(state.deck);
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

function weightedOrder(cards) {
  return cards
    .map((card) => {
      const weight = CATEGORY_WEIGHTS[getCardCategory(card)];
      return {
        card,
        score: -Math.log(Math.max(Number.EPSILON, Math.random())) / weight
      };
    })
    .sort((left, right) => left.score - right.score)
    .map((item) => item.card);
}

function makeChoicesLegacy(card, cards) {
  const correct = getAnswer(card);
  const wrongAnswers = [...new Set(cards.map(getAnswer).filter((answer) => answer !== correct))];
  return shuffle([correct, ...shuffle(wrongAnswers).slice(0, 3)]);
}

function getPrompt(card) {
  if (state.area === "vocabulary") {
    return state.direction === "japanese-to-english" ? card.japanese : card.english;
  }
  return state.direction === "kana-to-romaji" ? card.kana : card.romaji;
}

function getAnswerLegacy(card) {
  if (state.area === "vocabulary") {
    if (state.direction === "japanese-to-english") return card.english;
    return card.japanese === card.reading ? card.japanese : `${card.japanese}（${card.reading}）`;
  }
  return state.direction === "kana-to-romaji" ? card.romaji : card.kana;
}

function getAcceptedAnswers(card) {
  if (state.area !== "vocabulary") return [getAnswer(card)];
  if (state.direction === "japanese-to-english") {
    return [card.english, ...(card.aliases || [])];
  }
  return [card.japanese, card.reading];
}

function normalizeAnswer(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[。、,.!?！？]/g, "")
    .replace(/\s+/g, "");
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

function renderVocabularyList() {
  const cards = getVocabularyCards();
  els.vocabularyListSummary.innerHTML =
    `${rubyMarkup("単語", "たんご")}リスト · ` +
    `${cards.length}${rubyMarkup("語", "ご")}`;
  renderWordRows(els.vocabularyList, cards);
}

function renderWordRows(container, cards, showStatus = false) {
  container.innerHTML = "";
  cards.forEach((card) => {
    const row = document.createElement("div");
    row.className = "vocabulary-row";

    const japanese = document.createElement("div");
    japanese.className = "vocabulary-word-ruby";
    const surface = document.createElement("b");
    surface.innerHTML = furiganaMarkup(card.japanese, card.reading);
    japanese.appendChild(surface);
    const english = document.createElement("span");
    english.textContent = card.english;

    row.append(japanese, english);
    if (showStatus) {
      const category = getCardCategory(card);
      const status = document.createElement("small");
      status.className = `word-status ${category}`;
      status.innerHTML = rubyMarkup(CATEGORY_LABELS[category].text, CATEGORY_LABELS[category].reading);
      row.appendChild(status);
    }
    container.appendChild(row);
  });
}

function containsKanji(text) {
  return /\p{Script=Han}/u.test(text);
}

function cleanDisplayEnglish(value) {
  return String(value)
    .replace(/\[[^\]]+\]/g, "")
    .replace(/\s*=\s*.+$/, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.。]+$/, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function rubyMarkup(text, reading) {
  return furiganaMarkup(text, reading);
}

function furiganaMarkup(text, reading) {
  const surface = String(text || "");
  const pronunciation = String(reading || "");
  if (!pronunciation || !containsKanji(surface)) return escapeHtml(surface);

  const variantParts = surface.split(/([／/])/);
  if (variantParts.length > 1) {
    const readingVariants = pronunciation.split(/[／/]/);
    let variantIndex = 0;
    return variantParts
      .map((part) => {
        if (part === "／" || part === "/") return escapeHtml(part);
        const variantReading =
          readingVariants[variantIndex] || readingVariants[0] || pronunciation;
        variantIndex += 1;
        return furiganaMarkup(part, variantReading);
      })
      .join("");
  }

  const tokens = surface.match(/\p{Script=Han}+|[^\p{Script=Han}]+/gu) || [surface];
  let readingCursor = 0;
  return tokens
    .map((token, index) => {
      if (!containsKanji(token)) {
        if (pronunciation.startsWith(token, readingCursor)) {
          readingCursor += token.length;
        } else {
          const kana = (token.match(/[\p{Script=Hiragana}\p{Script=Katakana}ー]+/u) || [])[0] || "";
          if (kana) {
            const kanaIndex = pronunciation.indexOf(kana, readingCursor);
            if (kanaIndex >= readingCursor) readingCursor = kanaIndex + kana.length;
          }
        }
        return escapeHtml(token);
      }

      let readingEnd = pronunciation.length;
      for (let nextIndex = index + 1; nextIndex < tokens.length; nextIndex += 1) {
        if (containsKanji(tokens[nextIndex])) continue;
        const exact = tokens[nextIndex];
        const exactIndex = pronunciation.indexOf(exact, readingCursor);
        if (exactIndex >= readingCursor) {
          readingEnd = exactIndex;
          break;
        }
        const kana = (exact.match(/[\p{Script=Hiragana}\p{Script=Katakana}ー]+/gu) || [])[0] || "";
        const kanaIndex = kana ? pronunciation.indexOf(kana, readingCursor) : -1;
        if (kanaIndex >= readingCursor) {
          readingEnd = kanaIndex;
          break;
        }
      }
      const tokenReading = pronunciation.slice(readingCursor, readingEnd);
      readingCursor = readingEnd;
      if (!tokenReading) return escapeHtml(token);
      return `<ruby class="ui-ruby">${escapeHtml(token)}<rt>${escapeHtml(tokenReading)}</rt></ruby>`;
    })
    .join("");
}

function highlightedExampleMarkup(example) {
  const japanese = String(example.japanese || "");
  const reading = String(example.reading || "");
  const target = String(example.target || "");
  const targetReading = String(example.targetReading || "");
  const japaneseIndex = japanese.indexOf(target);
  const readingIndex = reading.indexOf(targetReading);
  if (!target || !targetReading || japaneseIndex < 0 || readingIndex < 0) {
    return furiganaMarkup(japanese, reading);
  }

  const beforeJapanese = japanese.slice(0, japaneseIndex);
  const afterJapanese = japanese.slice(japaneseIndex + target.length);
  const beforeReading = reading.slice(0, readingIndex);
  const afterReading = reading.slice(readingIndex + targetReading.length);
  return [
    furiganaMarkup(beforeJapanese, beforeReading),
    `<mark class="learning-word-highlight">${furiganaMarkup(target, targetReading)}</mark>`,
    furiganaMarkup(afterJapanese, afterReading)
  ].join("");
}

function normalizeStaticRuby() {
  document.querySelectorAll("ruby.ui-ruby").forEach((element) => {
    const readingElement = element.querySelector("rt");
    if (!readingElement) return;
    const clone = element.cloneNode(true);
    clone.querySelector("rt")?.remove();
    element.outerHTML = furiganaMarkup(clone.textContent, readingElement.textContent);
  });
}

function setRubyContent(element, text, reading) {
  if (reading) {
    element.innerHTML = rubyMarkup(text, reading);
  } else {
    element.textContent = text;
  }
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

function vocabularyCategoryLabel(category) {
  return VOCABULARY_CATEGORIES.find((item) => item.id === category)?.label || "たんご";
}

// Vocabulary learning experience v2. These declarations intentionally replace the
// earlier theme-first helpers while leaving the kana study area unchanged.
function getVocabularyLearningState(card) {
  const detail = getVocabularyDetail(card);
  if (!hasIntroducedCard(card)) return "new";
  const dueAt = detail.nextReview ? new Date(detail.nextReview).getTime() : Number.POSITIVE_INFINITY;
  if (dueAt <= Date.now()) return "due";
  const strength = (detail.correct || 0) - (detail.missed || 0);
  if ((detail.reviewStreak || 0) >= 4 || strength >= 3) return "strong";
  return "learning";
}

function hasIntroducedCard(card) {
  const study = state.studyProgress[card.id] || {};
  return Boolean(study.introduced || study.viewed || getVocabularyDetail(card).seen);
}

function vocabularyLearningStats(cards = getAllVocabularyCards()) {
  return cards.reduce(
    (stats, card) => {
      const learningState = getVocabularyLearningState(card);
      stats[learningState] += 1;
      if (hasIntroducedCard(card)) stats.introduced += 1;
      return stats;
    },
    { total: cards.length, introduced: 0, new: 0, learning: 0, due: 0, strong: 0 }
  );
}

function vocabularyProgressBreakdown(stats) {
  const total = stats.total || 0;
  const practicing = Math.max(0, stats.introduced - stats.strong);
  const practicedPercent = Math.round(((practicing + stats.strong) / (total || 1)) * 100);
  const practicingDegrees = (practicing / (total || 1)) * 360;
  const strongDegrees = (stats.strong / (total || 1)) * 360;
  const background = `conic-gradient(var(--strong) 0deg ${strongDegrees}deg, var(--learning) ${strongDegrees}deg ${strongDegrees + practicingDegrees}deg, var(--new) ${strongDegrees + practicingDegrees}deg 360deg)`;
  return { practicing, strong: stats.strong, percent: practicedPercent, background };
}

function compactProgressRingMarkup(stats) {
  const progress = vocabularyProgressBreakdown(stats);
  return `<span class="progress-ring compact-progress-ring" style="background:${progress.background}" role="img" aria-label="練習中 ${progress.practicing}語、覚えた ${progress.strong}語"><b>${progress.percent}%</b></span>`;
}

function compactProgressLegendMarkup(stats) {
  const progress = vocabularyProgressBreakdown(stats);
  return `<span class="compact-progress-legend"><small><i class="legend-learning"></i>${rubyMarkup("練習中", "れんしゅうちゅう")} ${progress.practicing}</small><small><i class="legend-strong"></i>${rubyMarkup("覚えた", "おぼえた")} ${progress.strong}</small></span>`;
}

function renderVocabularyDashboard() {
  const allCards = getAllVocabularyCards();
  const stats = vocabularyLearningStats(allCards);
  const progress = vocabularyProgressBreakdown(stats);
  els.courseProgressSummary.innerHTML = `${stats.total}${rubyMarkup("語", "ご")}中`;
  els.courseProgressPercent.textContent = `${progress.percent}%`;
  els.courseProgressPie.style.background = progress.background;
  els.courseProgressPie.setAttribute("aria-label", `N5単語の進捗。練習中 ${progress.practicing}語、覚えた ${progress.strong}語`);
  els.courseLearningCount.textContent = String(progress.practicing);
  els.courseStrongCount.textContent = String(progress.strong);

  els.todayTabPanel.classList.add("hidden");
  els.courseTabPanel.classList.toggle("hidden", state.vocabularyTab !== "course");
  els.posTabPanel.classList.toggle("hidden", state.vocabularyTab !== "pos");
  els.reviewTabPanel.classList.toggle("hidden", state.vocabularyTab !== "review");
  els.libraryTabPanel.classList.toggle("hidden", state.vocabularyTab !== "library");

  renderStageGrid();
  renderFoundationEntry();
  renderPartOfSpeechLevels();
  renderReviewPanel();
  initializeLibraryFilters();
  if (state.vocabularyTab === "library") renderLibrary();
}

function getFoundationCards() {
  return getAllVocabularyCards().filter((card) => card.stageId === "foundation");
}

function renderFoundationEntry() {
  const stats = vocabularyLearningStats(getFoundationCards());
  const progress = vocabularyProgressBreakdown(stats);
  els.foundationStartedCount.textContent = `${progress.percent}%`;
  els.foundationLearningCount.textContent = String(progress.practicing);
  els.foundationStrongCount.textContent = String(progress.strong);
  els.foundationProgressRing.style.background = progress.background;
  els.foundationProgressRing.setAttribute(
    "aria-label",
    `基礎表現の進捗。練習中 ${progress.practicing}語、覚えた ${progress.strong}語`
  );
}

function renderFoundationScreen() {
  const cards = getFoundationCards();
  els.foundationWordCount.innerHTML = `${cards.length}${rubyMarkup("語", "ご")}`;
  renderSpecialCourseGrid();
}

function returnToVocabularyCourse() {
  state.vocabularyTab = "course";
  showScreen("vocabulary-dashboard");
}

function renderTodayPanel(stats = vocabularyLearningStats()) {
  const nextCards = getNextNewCards(state.todaySessionLength);
  const nextCard = nextCards[0];
  const nextStage = nextCard
    ? VOCABULARY_COURSE.stages.find((stage) => stage.id === nextCard.stageId)
    : null;
  els.todaySessionLengthInput.value = String(state.todaySessionLength);
  els.introducedCount.textContent = String(stats.introduced);
  els.learningCount.textContent = String(stats.learning);
  els.todayDueCount.textContent = String(stats.due);
  els.strongCount.textContent = String(stats.strong);
  els.todayStageLabel.innerHTML = nextStage
    ? `${rubyMarkup(nextStage.title, nextStage.reading)} · ${escapeHtml(nextStage.english)}`
    : rubyMarkup("学習完了", "がくしゅうかんりょう");
  els.todayStudyTitle.innerHTML = nextCards.length
    ? `${rubyMarkup("新しい単語", "あたらしいたんご")}を${nextCards.length}${rubyMarkup("語", "ご")}`
    : stats.due
      ? `${stats.due}${rubyMarkup("語", "ご")}を${rubyMarkup("復習", "ふくしゅう")}`
      : rubyMarkup("今日の学習は完了", "きょうのがくしゅうはかんりょう");
  els.todayStudySummary.innerHTML = nextCards.length
    ? `${rubyMarkup("使用頻度", "しようひんど")}と${rubyMarkup("初心者", "しょしんしゃ")}への${rubyMarkup("有用度", "ゆうようど")}が${rubyMarkup("高い順", "たかいじゅん")}です。`
    : stats.due
      ? rubyMarkup("間隔を空けて思い出しましょう。", "かんかくをあけておもいだしましょう。").replace("<ruby", "<ruby")
      : rubyMarkup("よくできました。明日また確認しましょう。", "よくできました。あしたまたかくにんしましょう。");
  els.startTodayButton.disabled = !nextCards.length && !stats.due;
  els.startTodayButton.innerHTML = nextCards.length
    ? `${rubyMarkup("カード学習", "かーどがくしゅう")}を${rubyMarkup("始める", "はじめる")}`
    : `${rubyMarkup("復習", "ふくしゅう")}を${rubyMarkup("始める", "はじめる")}`;
}

function setTodaySessionLength(value) {
  state.todaySessionLength = Math.min(20, Math.max(5, Number.isFinite(value) ? Math.round(value) : 8));
  els.todaySessionLengthInput.value = String(state.todaySessionLength);
  renderTodayPanel();
}

function getNextNewCards(count = state.todaySessionLength) {
  const primary = getAllVocabularyCards()
    .filter((card) => card.learningType === "word" && !hasIntroducedCard(card))
    .sort((left, right) => left.overallRank - right.overallRank);
  if (primary.length) return primary.slice(0, count);
  return getAllVocabularyCards()
    .filter((card) => !hasIntroducedCard(card))
    .sort((left, right) => left.overallRank - right.overallRank)
    .slice(0, count);
}

function startTodayLearning() {
  const cards = getNextNewCards(state.todaySessionLength);
  if (cards.length) {
    openWordStudy(cards, {
      source: "today",
      returnScreen: "vocabulary-dashboard",
      label: "今日の学習"
    });
    return;
  }
  const reviewCards = getReviewCards();
  if (reviewCards.length) {
    startVocabularySession("review", reviewCards, Math.min(state.reviewSessionLength, reviewCards.length), {
      label: "今日の復習",
      returnScreen: "vocabulary-dashboard"
    });
  }
}

function getRecommendedLesson() {
  return VOCABULARY_COURSE.lessons.find((lesson) =>
    lesson.courseId.startsWith("stage-") && getLessonCards(lesson.id).some((card) => getVocabularyLearningState(card) !== "strong")
  ) || VOCABULARY_COURSE.lessons.find((lesson) => lesson.courseId.startsWith("stage-"));
}

function renderContinueLesson() {
  const lesson = getRecommendedLesson();
  if (!lesson) return;
  const cards = getLessonCards(lesson.id);
  const stats = vocabularyLearningStats(cards);
  const courseLessons = VOCABULARY_COURSE.lessons.filter((item) => item.courseId === lesson.courseId);
  const lessonPosition = courseLessons.findIndex((item) => item.id === lesson.id) + 1;
  const stageId = lesson.courseId.replace("stage-", "");
  const stage = VOCABULARY_COURSE.stages.find((item) => item.id === stageId);
  els.continueLessonButton.dataset.lessonId = lesson.id;
  els.continueLessonTitle.innerHTML = `${rubyMarkup(stage.title, stage.reading)} ${lessonPosition}`;
  els.continueLessonSummary.innerHTML =
    `${cards.length}${rubyMarkup("語", "ご")} · ${stats.introduced}${rubyMarkup("語", "ご")}を${rubyMarkup("練習中", "れんしゅうちゅう")}`;
}

function openContinueLesson() {
  const lessonId = els.continueLessonButton.dataset.lessonId;
  if (!lessonId) return;
  const lesson = getLesson(lessonId);
  state.activeLessonId = lessonId;
  state.activeVirtualLesson = null;
  state.activeCollectionKind = lesson.courseId.startsWith("stage-") ? "stage" : "special";
  state.activeCollectionId = lesson.courseId.replace(/^stage-|^special-/, "");
  showScreen("lesson");
}

function renderStageGrid() {
  els.stageGrid.innerHTML = "";
  VOCABULARY_COURSE.stages.forEach((stage, index) => {
    const cards = getAllVocabularyCards().filter((card) => card.learningType === "word" && card.stageId === stage.id);
    const stats = vocabularyLearningStats(cards);
    const button = document.createElement("button");
    button.className = "stage-card";
    button.type = "button";
    button.innerHTML = `
      <span class="stage-index">${index + 1}</span>
      <span class="stage-card-copy">
        <strong>${rubyMarkup(stage.title, stage.reading)}</strong>
        <span>${cards.length}${rubyMarkup("語", "ご")} · ${stage.lessonIds.length}${rubyMarkup("課", "か")}</span>
      </span>
      ${compactProgressLegendMarkup(stats)}
      ${compactProgressRingMarkup(stats)}`;
    button.addEventListener("click", () => openCollection("stage", stage.id));
    els.stageGrid.appendChild(button);
  });
}

function renderSpecialCourseGrid() {
  els.specialCourseGrid.innerHTML = "";
  VOCABULARY_COURSE.specialCourses.forEach((course) => {
    const cards = getAllVocabularyCards().filter((card) => card.foundationCourseId === course.id);
    const stats = vocabularyLearningStats(cards);
    const button = document.createElement("button");
    button.className = `special-course-card special-${course.id}`;
    button.type = "button";
    button.innerHTML = `
      <strong>${rubyMarkup(course.title, course.reading)}</strong>
      <small>${cards.length}${rubyMarkup("語", "ご")} · ${stats.introduced}${rubyMarkup("語", "ご")}を${rubyMarkup("練習中", "れんしゅうちゅう")}</small>`;
    button.addEventListener("click", () => openCollection("special", course.id));
    els.specialCourseGrid.appendChild(button);
  });
}

function renderPartOfSpeechLevels() {
  els.posLevelGrid.innerHTML = "";
  VOCABULARY_COURSE.stages.forEach((stage) => {
    const stageCards = getAllVocabularyCards().filter((card) => card.learningType === "word" && card.stageId === stage.id);
    const stats = vocabularyLearningStats(stageCards);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "pos-level-card";
    const progress = vocabularyProgressBreakdown(stats);
    button.innerHTML = `
      <span><strong>${rubyMarkup(stage.title, stage.reading)}</strong><small>${stageCards.length}${rubyMarkup("語", "ご")}</small></span>
      <span class="compact-progress-legend"><small><i class="legend-learning"></i>${rubyMarkup("練習中", "れんしゅうちゅう")} ${progress.practicing}</small><small><i class="legend-strong"></i>${rubyMarkup("覚えた", "おぼえた")} ${progress.strong}</small></span>
      ${compactProgressRingMarkup(stats)}`;
    button.addEventListener("click", () => {
      state.activePosStageId = stage.id;
      showScreen("pos-level");
    });
    els.posLevelGrid.appendChild(button);
  });
}

function partOfSpeechStudyGroups() {
  return [
    { id: "noun", label: "名詞", reading: "めいし", parts: ["noun"] },
    { id: "verb", label: "動詞", reading: "どうし", parts: ["verb"] },
    { id: "adjective", label: "形容詞", reading: "けいようし", parts: ["i-adjective", "na-adjective"] },
    { id: "adverb", label: "副詞", reading: "ふくし", parts: ["adverb"] },
  ];
}

function renderPartOfSpeechLevelScreen() {
  const stage = VOCABULARY_COURSE.stages.find((item) => item.id === state.activePosStageId);
  const stageCards = getAllVocabularyCards().filter((card) => card.learningType === "word" && card.stageId === stage.id);
  els.posLevelTitle.innerHTML = rubyMarkup(stage.title, stage.reading);
  els.posLevelTotalCount.innerHTML = `${stageCards.length}${rubyMarkup("語", "ご")}`;
  els.posCategoryChoiceGrid.innerHTML = "";
  partOfSpeechStudyGroups().forEach((group) => {
    const cards = stageCards.filter((card) => group.parts.includes(card.partOfSpeech));
    if (!cards.length) return;
    const stats = vocabularyLearningStats(cards);
    const progress = vocabularyProgressBreakdown(stats);
    const sessions = Math.ceil(cards.length / 10);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "pos-category-choice-card";
    button.innerHTML = `
      <span><strong>${rubyMarkup(group.label, group.reading)}</strong><small>${cards.length}${rubyMarkup("語", "ご")} · ${sessions}${rubyMarkup("回", "かい")}</small></span>
      <span class="compact-progress-legend"><small><i class="legend-learning"></i>${rubyMarkup("練習中", "れんしゅうちゅう")} ${progress.practicing}</small><small><i class="legend-strong"></i>${rubyMarkup("覚えた", "おぼえた")} ${progress.strong}</small></span>
      ${compactProgressRingMarkup(stats)}`;
    button.addEventListener("click", () => openCollection("part-of-speech", `${stage.id}|${group.id}`));
    els.posCategoryChoiceGrid.appendChild(button);
  });
}

function renderThemeGrid() {
  els.themeGrid.innerHTML = "";
  VOCABULARY_COURSE.themes.forEach((theme, index) => {
    const cards = getThemeCards(theme.id);
    const stats = vocabularyLearningStats(cards);
    const percent = Math.round((stats.introduced / (cards.length || 1)) * 100);
    const button = document.createElement("button");
    button.className = "theme-card";
    button.type = "button";
    button.innerHTML = `
      <span class="theme-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="theme-card-copy">
        <strong>${rubyMarkup(theme.title, theme.reading)}</strong>
        <small>${cards.length}${rubyMarkup("語", "ご")}</small>
      </span>
      <span class="theme-percent">${percent}%</span>
      <span class="mini-linear"><i style="width:${percent}%"></i></span>`;
    button.addEventListener("click", () => openCollection("theme", theme.id));
    els.themeGrid.appendChild(button);
  });
}

function openCollection(kind, id) {
  state.activeCollectionKind = kind;
  state.activeCollectionId = id;
  state.posBatchLength = 10;
  showScreen("pos");
}

function getCollectionMetadata() {
  if (state.activeCollectionKind === "stage") {
    const stage = VOCABULARY_COURSE.stages.find((item) => item.id === state.activeCollectionId);
    return { ...stage, itemLabel: "語" };
  }
  if (state.activeCollectionKind === "special") {
    const course = VOCABULARY_COURSE.specialCourses.find((item) => item.id === state.activeCollectionId);
    return { ...course, itemLabel: "語" };
  }
  if (state.activeCollectionKind === "part-of-speech") {
    const [stageId, groupId] = state.activeCollectionId.split("|");
    const stage = VOCABULARY_COURSE.stages.find((item) => item.id === stageId);
    const group = partOfSpeechStudyGroups().find((item) => item.id === groupId);
    return {
      title: `${stage.title}・${group.label}`,
      reading: `${stage.reading}・${group.reading}`,
      itemLabel: "語",
      description: `${stage.title}の${group.label}を、10語ずつ学びます。`,
      descriptionReading: `${stage.reading}の${group.reading}を、10ごずつまなびます。`,
    };
  }
  const theme = VOCABULARY_COURSE.themes.find((item) => item.id === state.activeCollectionId);
  return {
    ...theme,
    itemLabel: "語",
    description: "テーマを手がかりに、言葉を確認できます。",
    descriptionReading: "テーマをてがかりに、ことばをかくにんできます。"
  };
}

function getCollectionCards() {
  if (state.activeCollectionKind === "stage") {
    return getAllVocabularyCards().filter((card) => card.learningType === "word" && card.stageId === state.activeCollectionId);
  }
  if (state.activeCollectionKind === "special") {
    const course = VOCABULARY_COURSE.specialCourses.find((item) => item.id === state.activeCollectionId);
    return getAllVocabularyCards().filter((card) => card.foundationCourseId === course.id);
  }
  if (state.activeCollectionKind === "part-of-speech") {
    const [stageId, groupId] = state.activeCollectionId.split("|");
    const group = partOfSpeechStudyGroups().find((item) => item.id === groupId);
    return getAllVocabularyCards().filter((card) =>
      card.learningType === "word" && card.stageId === stageId && group.parts.includes(card.partOfSpeech)
    );
  }
  return getThemeCards(state.activeCollectionId);
}

function getCollectionLessons() {
  if (state.activeCollectionKind === "stage") {
    return VOCABULARY_COURSE.lessons.filter((lesson) => lesson.courseId === `stage-${state.activeCollectionId}`);
  }
  if (state.activeCollectionKind === "part-of-speech") {
    const cards = [...getCollectionCards()].sort((left, right) => left.overallRank - right.overallRank);
    const lessons = [];
    for (let index = 0; index < cards.length; index += 10) {
      const lessonCards = cards.slice(index, index + 10);
      lessons.push({
        id: `pos-${state.activeCollectionId.replace("|", "-")}-${String(lessons.length + 1).padStart(2, "0")}`,
        number: lessons.length + 1,
        title: `セッション ${lessons.length + 1}`,
        wordIds: lessonCards.map((card) => card.sourceId),
        virtual: true,
      });
    }
    return lessons;
  }
  return [];
}

function getActiveLesson() {
  if (state.activeVirtualLesson?.id === state.activeLessonId) return state.activeVirtualLesson;
  return getLesson(state.activeLessonId);
}

function getCardsForLesson(lesson) {
  if (!lesson) return [];
  if (lesson.virtual) {
    return getAllVocabularyCards().filter((card) => lesson.wordIds.includes(card.sourceId));
  }
  return getLessonCards(lesson.id);
}

function getActiveLessonCards() {
  return getCardsForLesson(getActiveLesson());
}

function renderCollectionScreen() {
  const metadata = getCollectionMetadata();
  const cards = getCollectionCards();
  const stats = vocabularyLearningStats(cards);
  els.posScreenTitle.innerHTML = rubyMarkup(metadata.title, metadata.reading);
  els.posScreenDescription.innerHTML = metadata.descriptionReading
    ? rubyMarkup(metadata.description, metadata.descriptionReading)
    : escapeHtml(metadata.description || "");
  els.posTotalCount.innerHTML = `${cards.length}${rubyMarkup(metadata.itemLabel, metadata.itemLabel === "語" ? "ご" : "こうもく")}`;
  els.posViewedCount.textContent = String(stats.introduced);
  els.posLearningCount.textContent = String(stats.due);
  els.posStrongCount.textContent = String(stats.strong);
  const isFoundation = state.activeCollectionKind === "special";
  const usesLessonSessions = ["stage", "part-of-speech"].includes(state.activeCollectionKind);
  els.collectionBatchControl.classList.add("hidden");
  els.collectionActionRow.classList.toggle("hidden", usesLessonSessions);
  els.collectionWordList.classList.toggle("hidden", !isFoundation);
  els.posThemeBreakdown.classList.toggle("hidden", isFoundation || usesLessonSessions);
  setPosBatchLength(Math.min(state.posBatchLength, Math.max(5, cards.length)));
  els.startPosStudyButton.disabled = cards.length === 0;
  els.startPosQuizButton.disabled = cards.length < 4;
  if (state.activeCollectionKind === "part-of-speech") {
    const stage = VOCABULARY_COURSE.stages.find((item) => item.id === state.activeCollectionId.split("|")[0]);
    els.posBackButton.innerHTML = `${rubyMarkup(stage.title, stage.reading)}へ`;
  } else if (state.activeCollectionKind === "special") {
    els.posBackButton.innerHTML = `${rubyMarkup("基礎表現", "きそひょうげん")}へ`;
  } else {
    els.posBackButton.innerHTML = `${rubyMarkup("単語総合", "たんごそうごう")}へ`;
  }
  renderCollectionLessonGrid();
  renderCollectionBreakdown(cards);
  renderCollectionWordList(cards);
}

function renderCollectionLessonGrid() {
  const lessons = getCollectionLessons();
  els.collectionLessonGrid.innerHTML = "";
  els.collectionLessonGrid.classList.toggle("hidden", lessons.length === 0);
  lessons.forEach((lesson) => {
    const cards = lesson.virtual
      ? getAllVocabularyCards().filter((card) => lesson.wordIds.includes(card.sourceId))
      : getLessonCards(lesson.id);
    const stats = vocabularyLearningStats(cards);
    const button = document.createElement("button");
    button.className = "lesson-card";
    button.type = "button";
    button.innerHTML = `
      <span class="lesson-number">${lesson.number}</span>
      <span><strong>${escapeHtml(lesson.title)}</strong><small>${stats.introduced} / ${cards.length}${rubyMarkup("語", "ご")} · ${rubyMarkup("定着", "ていちゃく")} ${stats.strong}</small></span>
      <span aria-hidden="true">→</span>`;
    button.addEventListener("click", () => {
      if (lesson.virtual) {
        state.activeLessonId = lesson.id;
        state.activeVirtualLesson = lesson;
        showScreen("lesson");
        return;
      }
      state.activeLessonId = lesson.id;
      state.activeVirtualLesson = null;
      showScreen("lesson");
    });
    els.collectionLessonGrid.appendChild(button);
  });
}

function renderCollectionWordList(cards) {
  els.collectionWordList.innerHTML = "";
  if (state.activeCollectionKind !== "special") return;
  renderWordList(els.collectionWordList, cards, {
    heading: "語の一覧",
    headingReading: "ごのいちらん",
    source: "foundation-list",
    returnScreen: "pos",
    label: getCollectionMetadata().title,
  });
}

function renderWordList(container, cards, options) {
  container.innerHTML = "";
  const heading = document.createElement("div");
  heading.className = "collection-word-list-heading";
  heading.innerHTML = `<strong>${rubyMarkup(options.heading, options.headingReading)}</strong><span>${cards.length}${rubyMarkup("語", "ご")}</span>`;
  container.appendChild(heading);
  orderCollectionDisplayCards(cards).forEach((card) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "collection-word-row";
    row.innerHTML = `
      <span><b>${furiganaMarkup(card.japanese, card.reading)}</b><small>${escapeHtml(cleanDisplayEnglish(card.english))}</small></span>
      <i aria-hidden="true">→</i>`;
    row.addEventListener("click", () => openWordStudy([card], {
      source: options.source,
      returnScreen: options.returnScreen,
      label: options.label,
      lessonId: options.lessonId || "",
    }));
    container.appendChild(row);
  });
}

function returnFromCollection() {
  if (state.activeCollectionKind === "part-of-speech") {
    showScreen("pos-level");
    return;
  }
  if (state.activeCollectionKind === "special") {
    showScreen("foundation");
    return;
  }
  returnToVocabularyCourse();
}

function renderCollectionBreakdown(cards) {
  els.posThemeBreakdown.innerHTML = "";
  const counts = new Map();
  cards.forEach((card) => counts.set(card.partOfSpeech, (counts.get(card.partOfSpeech) || 0) + 1));
  [...counts.entries()].sort((left, right) => right[1] - left[1]).forEach(([id, count]) => {
    const type = VOCABULARY_COURSE.partsOfSpeech[id];
    if (!type) return;
    const item = document.createElement("span");
    item.innerHTML = `${rubyMarkup(type.japanese, type.reading)} <b>${count}</b>`;
    els.posThemeBreakdown.appendChild(item);
  });
}

function setPosBatchLength(value) {
  const maximum = Math.max(1, getCollectionCards().length);
  state.posBatchLength = Math.min(maximum, Math.max(5, Number.isFinite(value) ? Math.round(value) : 8));
  els.posBatchLengthInput.value = String(state.posBatchLength);
}

function getCollectionStudyBatch() {
  return orderStudyCards(getCollectionCards()).slice(0, Math.min(state.posBatchLength, getCollectionCards().length));
}

function startCollectionStudy() {
  const metadata = getCollectionMetadata();
  const cards = state.activeCollectionKind === "special" ? orderSpecialStudyCards(getCollectionCards()) : getCollectionStudyBatch();
  openWordStudy(cards, {
    source: "collection",
    returnScreen: "pos",
    label: metadata.title
  });
}

function startCollectionQuiz() {
  const metadata = getCollectionMetadata();
  const cards = state.activeCollectionKind === "special" ? orderSpecialStudyCards(getCollectionCards()) : getCollectionStudyBatch();
  startVocabularySession("collection", cards, cards.length, {
    label: metadata.title,
    returnScreen: "pos"
  });
}

function orderStudyCards(cards) {
  const categoryRank = { new: 0, due: 1, learning: 2, strong: 3 };
  return [...cards].sort((left, right) =>
    categoryRank[getVocabularyLearningState(left)] - categoryRank[getVocabularyLearningState(right)] ||
    left.overallRank - right.overallRank
  );
}

function orderCollectionDisplayCards(cards) {
  return [...cards].sort((left, right) =>
    (left.courseOrder ?? Number.MAX_SAFE_INTEGER) - (right.courseOrder ?? Number.MAX_SAFE_INTEGER) ||
    left.overallRank - right.overallRank
  );
}

function orderSpecialStudyCards(cards) {
  const categoryRank = { new: 0, due: 1, learning: 2, strong: 3 };
  const displayOrder = orderCollectionDisplayCards(cards);
  const sequence = new Map(displayOrder.map((card, index) => [card.id, index]));
  return [...cards].sort((left, right) =>
    categoryRank[getVocabularyLearningState(left)] - categoryRank[getVocabularyLearningState(right)] ||
    (sequence.get(left.id) ?? Number.MAX_SAFE_INTEGER) - (sequence.get(right.id) ?? Number.MAX_SAFE_INTEGER)
  );
}

function openWordStudy(cards, context) {
  if (!cards.length) return;
  state.studyCards = [...cards];
  state.studyContext = context;
  state.studyIndex = Math.max(0, state.studyCards.findIndex((card) => !hasIntroducedCard(card)));
  state.studyRevealed = false;
  showScreen("word-study");
}

function returnFromWordStudy() {
  showScreen(state.studyContext?.returnScreen || "vocabulary-dashboard");
}

function moveStudyWord(offset) {
  const nextIndex = state.studyIndex + offset;
  if (nextIndex < 0 || nextIndex >= state.studyCards.length) return;
  state.studyIndex = nextIndex;
  state.studyRevealed = false;
  renderWordStudy();
  window.scrollTo?.({ top: 0, behavior: "smooth" });
}

function renderWordStudy() {
  const card = state.studyCards[state.studyIndex];
  if (!card) return;
  const type = VOCABULARY_COURSE.partsOfSpeech[card.partOfSpeech];
  const progress = Math.round(((state.studyIndex + (state.studyRevealed ? 1 : 0)) / state.studyCards.length) * 100);
  els.wordStudyPosition.textContent = `${state.studyIndex + 1} / ${state.studyCards.length}`;
  els.wordStudyProgressFill.style.width = `${progress}%`;
  els.wordStudyKicker.innerHTML = "";
  els.wordStudyKicker.classList.add("hidden");
  els.wordStudyBackButton.innerHTML = studyBackLabelMarkup();
  els.wordStudyJapanese.innerHTML = furiganaMarkup(card.japanese, card.reading);
  els.wordStudyRecallPrompt.classList.add("hidden");
  els.wordStudyRevealButton.classList.toggle("hidden", state.studyRevealed);
  els.wordStudyDetails.classList.toggle("hidden", !state.studyRevealed);
  els.previousStudyWordButton.disabled = state.studyIndex === 0;
  els.nextStudyWordButton.disabled = state.studyIndex === state.studyCards.length - 1;
  els.studyBatchQuizButton.disabled = !state.studyCards.some(hasIntroducedCard);
  if (!state.studyRevealed) return;

  els.wordStudyEnglish.textContent = cleanDisplayEnglish(card.english);
  const showPartOfSpeech = card.learningType !== "expression";
  els.wordStudyPosCard.classList.toggle("hidden", !showPartOfSpeech);
  els.wordStudyPos.innerHTML = showPartOfSpeech ? learnerTypeMarkup(card, type) : "";
  renderSpecialStudyDetail(card);
  renderVerbConjugations(card);
  renderWordFamilyDetails(card);
  els.wordStudyExamples.innerHTML = card.examples.map((example, index) => `
    <div class="usage-example-card">
      ${card.examples.length > 1 ? `<span class="example-number">${rubyMarkup("例", "れい")} ${index + 1}</span>` : ""}
      <p class="example-japanese">${highlightedExampleMarkup(example)}</p>
      <p class="example-english">${escapeHtml(example.english)}</p>
    </div>`).join("");
}

function studyBackLabelMarkup() {
  if (state.studyContext?.returnScreen === "pos") {
    const metadata = getCollectionMetadata();
    return `${rubyMarkup(metadata.title, metadata.reading)}へ`;
  }
  if (state.studyContext?.returnScreen === "lesson") {
    const lessonId = state.studyContext?.lessonId || state.activeLessonId;
    const lesson = state.activeVirtualLesson?.id === lessonId ? state.activeVirtualLesson : getLesson(lessonId);
    return lesson ? `${escapeHtml(lesson.title)}へ` : `${rubyMarkup("単語総合", "たんごそうごう")}へ`;
  }
  if (state.studyContext?.source === "library") return `${rubyMarkup("単語帳", "たんごちょう")}へ`;
  return `N5 ${rubyMarkup("単語", "たんご")}へ`;
}

function learnerTypeMarkup(card, type) {
  if (card.partOfSpeech === "verb") {
    return `${rubyMarkup("動詞", "どうし")} <small>(${escapeHtml(cleanVerbType(card.verbType))})</small>`;
  }
  if (card.partOfSpeech === "i-adjective") {
    return `${rubyMarkup("形容詞", "けいようし")} <small>(い-adjective)</small>`;
  }
  if (card.partOfSpeech === "na-adjective") {
    return `${rubyMarkup("形容詞", "けいようし")} <small>(な-adjective)</small>`;
  }
  return rubyMarkup(type.japanese, type.reading);
}

function cleanVerbType(value) {
  const verbType = String(value || "");
  if (verbType.startsWith("U-verb")) return "U-verb";
  if (verbType.startsWith("Ru-verb")) return "Ru-verb";
  return "Irregular";
}

function renderSpecialStudyDetail(card) {
  let content = "";
  if (card.learningType === "counter") {
    content = `<span>${rubyMarkup("数えるもの", "かぞえるもの")}</span><strong>${escapeHtml(card.counterFor || "もの・単位")}</strong>`;
  } else if (card.learningType === "affix") {
    content = `<span>${rubyMarkup("付く位置", "つくいち")}</span><strong>${escapeHtml(card.affixPosition || "接辞")}</strong>`;
  }
  els.wordStudySpecialDetail.innerHTML = content;
  els.wordStudySpecialDetail.classList.toggle("hidden", !content);
}

function renderWordFamilyDetails(card) {
  const formSections = [];
  if (card.relatedForms?.length) {
    formSections.push(`
      <section class="word-family-section">
        <span class="word-family-heading">${rubyMarkup("関連する形", "かんれんするかたち")}</span>
        <div class="word-family-list">${card.relatedForms.map((form) => `
          <div class="word-family-item">
            <strong>${furiganaMarkup(form.japanese, form.reading)}</strong>
            <small>${escapeHtml(form.role)}</small>
          </div>`).join("")}</div>
      </section>`);
  }
  if (card.variants?.length) {
    formSections.push(`
      <section class="word-family-section">
        <span class="word-family-heading">${rubyMarkup("別の言い方", "べつのいいかた")}</span>
        <div class="word-family-list">${card.variants.map((variant) => `
          <div class="word-family-item"><strong>${furiganaMarkup(variant.japanese, variant.reading)}</strong></div>`).join("")}</div>
      </section>`);
  }
  els.wordStudyRelatedForms.innerHTML = formSections.join("");
  els.wordStudyRelatedForms.classList.toggle("hidden", formSections.length === 0);

  const relatedCards = (card.relatedWordIds || [])
    .map((id) => getAllVocabularyCards().find((candidate) => candidate.sourceId === id))
    .filter(Boolean);
  els.wordStudyRelatedWords.innerHTML = relatedCards.length ? `
    <section class="word-family-section">
      <span class="word-family-heading">${rubyMarkup("関連する語", "かんれんするご")}</span>
      ${card.relatedWordRelation ? `<small class="word-family-relation">${escapeHtml(card.relatedWordRelation)}</small>` : ""}
      <div class="word-family-list">${relatedCards.map((relatedCard) => `
        <div class="word-family-item related-word-item">
          <strong>${furiganaMarkup(relatedCard.japanese, relatedCard.reading)}</strong>
          <small>${escapeHtml(cleanDisplayEnglish(relatedCard.english))}</small>
        </div>`).join("")}</div>
    </section>` : "";
  els.wordStudyRelatedWords.classList.toggle("hidden", relatedCards.length === 0);
}

function renderVerbConjugations(card) {
  const forms = card.conjugations;
  if (!forms) {
    els.wordStudyConjugations.classList.add("hidden");
    els.wordStudyConjugations.innerHTML = "";
    return;
  }
  const rows = [
    ["ます形", "ますけい", "polite"],
    ["ない形", "ないけい", "negative"],
    ["て形", "てけい", "te"],
    ["た形", "たけい", "past"],
  ];
  els.wordStudyConjugations.innerHTML = `
    <span class="conjugation-heading">Basic conjugations</span>
    <div>${rows.map(([label, reading, key]) => `<p><small>${rubyMarkup(label, reading)}</small><strong>${furiganaMarkup(forms[key], conjugationReading(card, forms[key]))}</strong></p>`).join("")}</div>`;
  els.wordStudyConjugations.classList.remove("hidden");
}

function conjugationReading(card, form) {
  if (!containsKanji(form)) return form;
  if (card.japanese === "来る") {
    return { "来ます": "きます", "来ない": "こない", "来て": "きて", "来た": "きた" }[form] || card.reading;
  }
  let prefixLength = 0;
  while (prefixLength < card.japanese.length && prefixLength < form.length && card.japanese[prefixLength] === form[prefixLength]) prefixLength += 1;
  const dictionarySuffix = card.japanese.slice(prefixLength);
  const formSuffix = form.slice(prefixLength);
  const rootReading = dictionarySuffix && card.reading.endsWith(dictionarySuffix)
    ? card.reading.slice(0, -dictionarySuffix.length)
    : card.reading;
  return `${rootReading}${formSuffix}`;
}

function revealStudyCard() {
  const card = state.studyCards[state.studyIndex];
  if (!card) return;
  state.studyRevealed = true;
  markCardViewed(card);
  renderWordStudy();
}

function markCardViewed(card) {
  const current = state.studyProgress[card.id] || { viewed: 0, introduced: false, lastViewed: "" };
  current.viewed += 1;
  current.introduced = true;
  current.lastViewed = new Date().toISOString();
  state.studyProgress[card.id] = current;
  localStorage.setItem(STUDY_STORAGE_KEY, JSON.stringify(state.studyProgress));
}

function startStudyBatchQuiz() {
  const cards = state.studyCards.filter((card, index, all) => all.findIndex((item) => item.id === card.id) === index);
  startVocabularySession(state.studyContext?.source || "study", cards, cards.length, {
    label: state.studyContext?.label || "学習した言葉",
    returnScreen: "word-study",
    lessonId: state.studyContext?.lessonId || ""
  });
}

function renderLessonScreen() {
  const lesson = getActiveLesson();
  const cards = getCardsForLesson(lesson);
  const stats = vocabularyLearningStats(cards);
  const courseLessons = lesson.virtual
    ? getCollectionLessons()
    : VOCABULARY_COURSE.lessons.filter((item) => item.courseId === lesson.courseId);
  const lessonIndex = courseLessons.findIndex((item) => item.id === lesson.id);
  const metadata = getCollectionMetadata();
  els.lessonPosition.textContent = `${lessonIndex + 1} / ${courseLessons.length}`;
  els.lessonBackButton.innerHTML = `${rubyMarkup(metadata.title, metadata.reading)}へ`;
  els.lessonThemeTitle.innerHTML = rubyMarkup(metadata.title, metadata.reading);
  els.lessonTitle.textContent = lesson.title;
  els.lessonSummary.innerHTML = `${cards.length}${rubyMarkup("語", "ご")} · ${stats.introduced}${rubyMarkup("語", "ご")}を${rubyMarkup("練習中", "れんしゅうちゅう")}`;
  els.lessonViewedCount.textContent = `${stats.introduced} / ${cards.length}`;
  els.lessonStrongCount.textContent = `${stats.strong} / ${cards.length}`;
  els.startLessonButton.innerHTML = `${cards.length}${rubyMarkup("問", "もん")}のクイズを${rubyMarkup("始める", "はじめる")}`;
  renderWordList(els.lessonWordList, cards, {
    heading: "この課の単語",
    headingReading: "このかのたんご",
    source: "lesson-list",
    returnScreen: "lesson",
    label: lesson.title,
    lessonId: lesson.id,
  });
}

function getNextLessonId(lessonId) {
  const lesson = getLesson(lessonId);
  if (!lesson) {
    const virtualLessons = getCollectionLessons();
    const virtualIndex = virtualLessons.findIndex((item) => item.id === lessonId);
    return virtualIndex >= 0 && virtualIndex < virtualLessons.length - 1 ? virtualLessons[virtualIndex + 1].id : "";
  }
  const courseLessons = VOCABULARY_COURSE.lessons.filter((item) => item.courseId === lesson.courseId);
  const index = courseLessons.findIndex((item) => item.id === lessonId);
  return index >= 0 && index < courseLessons.length - 1 ? courseLessons[index + 1].id : "";
}

function openNextLesson() {
  if (!state.session.nextLessonId) return;
  state.activeLessonId = state.session.nextLessonId;
  state.activeVirtualLesson = getLesson(state.activeLessonId)
    ? null
    : getCollectionLessons().find((lesson) => lesson.id === state.activeLessonId) || null;
  showScreen("lesson");
}

function renderReviewPanel() {
  const difficultCards = getDifficultCards();
  const recentCards = getRecentlyMissedCards();
  const cards = state.reviewMode === "recent" ? recentCards : difficultCards;
  els.difficultReviewCount.textContent = String(difficultCards.length);
  els.recentReviewCount.textContent = String(recentCards.length);
  els.dueReviewCount.textContent = String(cards.length);
  els.reviewSessionLengthInput.value = String(state.reviewSessionLength);
  els.startReviewButton.disabled = cards.length === 0;
  els.startReviewButton.innerHTML = state.reviewMode === "recent"
    ? `${rubyMarkup("最近の間違い", "さいきんのまちがい")}を${rubyMarkup("復習", "ふくしゅう")}`
    : `${rubyMarkup("苦手な語", "にがてなご")}を${rubyMarkup("復習", "ふくしゅう")}`;
  els.reviewEmptyState.classList.toggle("hidden", cards.length !== 0);
}

function getReviewCards() {
  return state.reviewMode === "recent" ? getRecentlyMissedCards() : getDifficultCards();
}

function getDifficultCards() {
  return getAllVocabularyCards()
    .map((card) => {
      const detail = getVocabularyDetail(card);
      const dueWeight = getVocabularyLearningState(card) === "due" ? 2 : 0;
      const reviewStreak = detail.reviewStreak || 0;
      const missed = detail.missed || 0;
      const score = missed * 4 + dueWeight - reviewStreak * 2;
      return { card, missed, score, reviewStreak, lastActivity: detail.lastMissed || detail.lastStudied || "" };
    })
    .filter((item) => item.missed > 0 && item.score > 0 && item.reviewStreak < 2)
    .sort((left, right) => right.score - left.score || new Date(right.lastActivity || 0) - new Date(left.lastActivity || 0))
    .map((item) => item.card);
}

function getRecentlyMissedCards() {
  return getAllVocabularyCards()
    .filter((card) => (getVocabularyDetail(card).missed || 0) > 0)
    .sort((left, right) => {
      const leftDetail = getVocabularyDetail(left);
      const rightDetail = getVocabularyDetail(right);
      return new Date(rightDetail.lastMissed || rightDetail.lastStudied || 0) - new Date(leftDetail.lastMissed || leftDetail.lastStudied || 0);
    });
}

function initializeLibraryFilters() {
  if (els.libraryTypeFilter.dataset.ready) return;
  const option = (value, label) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`;
  els.libraryTypeFilter.innerHTML = option("all", "すべての語彙タイプ") +
    option("general", "初級・中級・上級") + VOCABULARY_COURSE.specialCourses
      .map((course) => option(`foundation:${course.id}`, course.title)).join("");
  els.libraryStageFilter.innerHTML = option("all", "すべてのN5内レベル") + option("foundation", "基礎表現") + VOCABULARY_COURSE.stages
    .map((stage) => option(stage.id, stage.title)).join("");
  els.libraryWordTypeFilter.innerHTML = option("all", "すべての品詞") + Object.entries(VOCABULARY_COURSE.partsOfSpeech)
    .map(([id, type]) => option(id, type.japanese)).join("");
  els.libraryThemeFilter.innerHTML = option("all", "すべてのテーマ") + VOCABULARY_COURSE.themes
    .map((theme) => option(theme.id, theme.title)).join("");
  els.libraryStatusFilter.innerHTML = [
    ["all", "すべての学習状態"], ["new", "新しい"], ["learning", "練習中"],
    ["due", "復習待ち"], ["strong", "定着"]
  ].map(([value, label]) => option(value, label)).join("");
  els.libraryTypeFilter.dataset.ready = "true";
}

function getFilteredLibraryCards() {
  const query = els.librarySearch.value.trim().toLowerCase();
  const vocabularyType = els.libraryTypeFilter.value;
  const cards = getAllVocabularyCards().filter((card) => {
    const searchable = `${card.japanese} ${card.reading} ${card.english}`.toLowerCase();
    const matchesVocabularyType = vocabularyType === "all" ||
      (vocabularyType === "general" && card.stageId !== "foundation") ||
      (vocabularyType.startsWith("foundation:") && card.foundationCourseId === vocabularyType.slice("foundation:".length));
    return (!query || searchable.includes(query)) &&
      matchesVocabularyType &&
      (els.libraryStageFilter.value === "all" || card.stageId === els.libraryStageFilter.value) &&
      (els.libraryWordTypeFilter.value === "all" || card.partOfSpeech === els.libraryWordTypeFilter.value) &&
      (els.libraryThemeFilter.value === "all" || card.themeId === els.libraryThemeFilter.value) &&
      (els.libraryStatusFilter.value === "all" || getVocabularyLearningState(card) === els.libraryStatusFilter.value);
  });
  return cards.sort((left, right) => els.librarySort.value === "kana"
    ? left.reading.localeCompare(right.reading, "ja")
    : left.overallRank - right.overallRank);
}

function renderLibrary() {
  const cards = getFilteredLibraryCards();
  state.libraryCards = cards;
  els.libraryResultCount.textContent = String(cards.length);
  els.libraryLimitNote.classList.toggle("hidden", cards.length <= 120);
  els.studyLibraryResultsButton.disabled = cards.length === 0;
  els.quizLibraryResultsButton.disabled = cards.length < 4;
  els.libraryList.innerHTML = "";
  cards.slice(0, 120).forEach((card) => {
    const stateLabel = { new: "新しい", learning: "練習中", due: "復習待ち", strong: "定着" }[getVocabularyLearningState(card)];
    const type = VOCABULARY_COURSE.partsOfSpeech[card.partOfSpeech];
    const row = document.createElement("button");
    row.className = "library-word-row";
    row.type = "button";
    row.innerHTML = `
      <span class="library-word-main"><b>${furiganaMarkup(card.japanese, card.reading)}</b><small>${escapeHtml(cleanDisplayEnglish(card.english))}</small></span>
      <span class="library-word-meta"><i>${escapeHtml(type.label)}</i><em class="status-${getVocabularyLearningState(card)}">${escapeHtml(stateLabel)}</em></span>`;
    row.addEventListener("click", () => openWordStudy([card], {
      source: "library", returnScreen: "vocabulary-dashboard", label: "単語帳"
    }));
    els.libraryList.appendChild(row);
  });
}

function startLibraryStudy() {
  const cards = orderStudyCards(state.libraryCards).slice(0, Math.min(10, state.libraryCards.length));
  openWordStudy(cards, { source: "library", returnScreen: "vocabulary-dashboard", label: "単語帳" });
}

function startLibraryQuiz() {
  const cards = orderStudyCards(state.libraryCards).slice(0, Math.min(20, state.libraryCards.length));
  startVocabularySession("library", cards, cards.length, { label: "単語帳", returnScreen: "vocabulary-dashboard" });
}

function getCardCategory(card, mode = state.mode, direction = state.direction, deck = state.deck, area = state.area) {
  if (area === "vocabulary" || card.type === "vocabulary") {
    const learningState = getVocabularyLearningState(card);
    return learningState === "due" ? "learning" : learningState;
  }
  const item = state.detailProgress[getDetailKey(card, mode, direction, deck, area)] || {};
  const seen = item.seen || 0;
  const strength = (item.correct || 0) - (item.missed || 0);
  if (seen === 0) return "new";
  if (strength >= 3) return "strong";
  return "learning";
}

function makeChoices(card, cards) {
  const correct = getAnswer(card);
  if (state.area !== "vocabulary") {
    const wrongAnswers = [...new Set(cards.map(getAnswer).filter((answer) => answer !== correct))];
    return shuffle([correct, ...shuffle(wrongAnswers).slice(0, 3)]);
  }
  const sourcePool = getAllVocabularyCards();
  const candidates = sourcePool
    .filter((candidate) => candidate.id !== card.id && getAnswer(candidate) !== correct)
    .filter((candidate) => !meaningsOverlap(correct, getAnswer(candidate)))
    .map((candidate) => ({
      answer: getAnswer(candidate),
      score:
        (candidate.learningType === card.learningType ? 6 : 0) +
        (candidate.partOfSpeech === card.partOfSpeech ? 4 : 0) +
        (candidate.stageId === card.stageId ? 2 : 0) +
        (candidate.themeId === card.themeId ? 1 : 0) + Math.random()
    }))
    .sort((left, right) => right.score - left.score);
  const wrong = [];
  for (const candidate of candidates) {
    if (!wrong.includes(candidate.answer)) wrong.push(candidate.answer);
    if (wrong.length === 3) break;
  }
  return shuffle([correct, ...wrong]);
}

function meaningsOverlap(left, right) {
  const words = (value) => new Set(cleanDisplayEnglish(value).toLowerCase().split(/[^a-z]+/).filter((word) => word.length > 3));
  const leftWords = words(left);
  return [...words(right)].some((word) => leftWords.has(word));
}

function getAnswer(card) {
  if (state.area === "vocabulary") {
    if (state.direction === "japanese-to-english") return cleanDisplayEnglish(card.english);
    return card.japanese === card.reading ? card.japanese : `${card.japanese}（${card.reading}）`;
  }
  return state.direction === "kana-to-romaji" ? card.romaji : card.kana;
}

function resetProgress() {
  const confirmed = confirm("Reset all kana and vocabulary progress on this device?");
  if (!confirmed) return;
  state.progress = {};
  state.detailProgress = {};
  state.studyProgress = {};
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(DETAIL_STORAGE_KEY);
  localStorage.removeItem(STUDY_STORAGE_KEY);
  renderChart();
  renderSetup();
  renderVocabularySetup();
  renderVocabularyDashboard();
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
