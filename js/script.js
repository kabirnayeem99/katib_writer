function getElementById(id) {
  return document.getElementById(id);
}

var input = getElementById("area");

window.onload = function () {
  var savedText = localStorage.getItem("cached_text");
  if (savedText) {
    setTextToTextArea(savedText);
  }
};

/**
 * Save text to local storage
 * @param {string} inputText - Text to be saved
 */
function saveTextToLocalStorage(inputText) {
  localStorage.setItem("cached_text", inputText);
}

/**
 * Set text to text area
 * @param {string} inputText - Text to be set to text area
 */
function setTextToTextArea(inputText) {
  var textArea = getElementById("area");
  textArea.scrollTop = textArea.scrollHeight;
  textArea.value = inputText;
}

function convertLatinToArabic() {
  var inputText = getElementById("area").value;

  var inputText = event.target.value;
  var lastCharacter = inputText.slice(-1);
  if (lastCharacter === " ") {
    // Character replacements
    var replacements = {
      3: "ع",
      a: "ا",
      b: "ب",
      p: "ب",
      t: "ت",
      7: "ح",
      c: "ث",
      سس: "ث",
      "ت'": "ث",
      j: "ج",
      "ح'": "خ",
      x: "خ",
      5: "خ",
      k: "ك",
      d: "د",
      "د'": "ذ",
      r: "ر",
      z: "ز",
      "ر'": "ز",
      R: "ز",
      s: "س",
      ثه: "ش",
      "س'": "ش",
      S: "ص",
      9: "ص",
      "ص'": "ض",
      D: "ض",
      "9'": "ض",
      T: "ط",
      6: "ط",
      "ط'": "ظ",
      Z: "ظ",
      "ع'": "غ",
      gه: "غ",
      f: "ف",
      v: "ف",
      "ك'": "ق",
      K: "ق",
      q: "ق",
      l: "ل",
      m: "م",
      n: "ن",
      h: "ه",
      w: "و",
      o: "و",
      u: "و",
      y: "ي",
      i: "ي",
      e: "آ",
      "و'": "ؤ",
      وء: "ؤ",
      ءي: "ئ",
      "ء#": "ئ",
      "ي'": "ئ",
      "#": "ى",
      آآ: "ى",
      اءء: "إ",
      I: "إ",
      A: "إ",
      ءا: "أ",
      "ا'": "أ",
      _: "ـ",
      2: "ء",
      "-": "ء",
      "ه'": "ة",
      H: "ة",
      "ا=": "َ",
      "و=": "ُ",
      "ي=": "ِ",
      "ون=": "ٌ",
      "ين=": "ٍ",
      "ان=": "ً",
      1: "أ",
    };

    // Perform character replacements
    Object.keys(replacements).forEach(function (key) {
      inputText = inputText.replace(new RegExp(key, "g"), replacements[key]);
    });
    setTextToTextArea(inputText);
    saveTextToLocalStorage(inputText);
  }
}
