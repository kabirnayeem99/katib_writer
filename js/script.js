function $(id) {
  return document.getElementById(id);
}

var input = $("area");

window.onload = function () {
  var savedText = localStorage.getItem("cached_text");
  if (savedText) setTextToTextArea(savedText);
};

/**
 * @param {string} inputText - text that is going to be cached
 */
function saveTextToLocalStorage(inputText) {
  var inputText = $("area").value;
  localStorage.setItem("cached_text", inputText);
}

/**
 * @param {string} inputText - text that is going to be cached
 */
function setTextToTextArea(inputText) {
  $("area").scrollTop = $("area").scrollHeight;
  $("area").value = inputText;
}

function convertLatinToArabic() {
  // Get the value of the textarea
  var inputText = $("area").value;

  // Perform character replacements
  inputText = inputText.replace(/3/g, "ع");
  inputText = inputText.replace(/a/g, "ا");
  inputText = inputText.replace(/b/g, "ب");
  inputText = inputText.replace(/p/g, "ب");
  inputText = inputText.replace(/t/g, "ت");
  inputText = inputText.replace(/7/g, "ح");
  inputText = inputText.replace(/c/g, "ث");
  inputText = inputText.replace(/سس/g, "ث");
  inputText = inputText.replace(/ت'/g, "ث");
  inputText = inputText.replace(/j/g, "ج");
  inputText = inputText.replace(/ح'/g, "خ");
  inputText = inputText.replace(/x/g, "خ");
  inputText = inputText.replace(/5/g, "خ");
  inputText = inputText.replace(/k/g, "ك");
  inputText = inputText.replace(/d/g, "د");
  inputText = inputText.replace(/د'/g, "ذ");
  inputText = inputText.replace(/r/g, "ر");
  inputText = inputText.replace(/z/g, "ز");
  inputText = inputText.replace(/ر'/g, "ز");
  inputText = inputText.replace(/R/g, "ز");
  inputText = inputText.replace(/s/g, "س");
  inputText = inputText.replace(/ثه/g, "ش");
  inputText = inputText.replace(/س'/g, "ش");
  inputText = inputText.replace(/S/g, "ص");
  inputText = inputText.replace(/9/g, "ص");
  inputText = inputText.replace(/ص'/g, "ض");
  inputText = inputText.replace(/D/g, "ض");
  inputText = inputText.replace(/9'/g, "ض");
  inputText = inputText.replace(/T/g, "ط");
  inputText = inputText.replace(/6/g, "ط");
  inputText = inputText.replace(/ط'/g, "ظ");
  inputText = inputText.replace(/Z/g, "ظ");
  inputText = inputText.replace(/ع'/g, "غ");
  inputText = inputText.replace(/gه/g, "غ");
  inputText = inputText.replace(/f/g, "ف");
  inputText = inputText.replace(/v/g, "ف");
  inputText = inputText.replace(/ك'/g, "ق");
  inputText = inputText.replace(/K/g, "ق");
  inputText = inputText.replace(/q/g, "ق");
  inputText = inputText.replace(/l/g, "ل");
  inputText = inputText.replace(/m/g, "م");
  inputText = inputText.replace(/n/g, "ن");
  inputText = inputText.replace(/h/g, "ه");
  inputText = inputText.replace(/w/g, "و");
  inputText = inputText.replace(/o/g, "و");
  inputText = inputText.replace(/u/g, "و");
  inputText = inputText.replace(/y/g, "ي");
  inputText = inputText.replace(/i/g, "ي");
  inputText = inputText.replace(/e/g, "آ");
  inputText = inputText.replace(/و'/g, "ؤ");
  inputText = inputText.replace(/وء/g, "ؤ");
  inputText = inputText.replace(/ءي/g, "ئ");
  inputText = inputText.replace(/ء#/g, "ئ");
  inputText = inputText.replace(/ي'/g, "ئ");
  inputText = inputText.replace(/#/g, "ى");
  inputText = inputText.replace(/آآ/g, "ى");
  inputText = inputText.replace(/اءء/g, "إ");
  inputText = inputText.replace(/I/g, "إ");
  inputText = inputText.replace(/A/g, "إ");
  inputText = inputText.replace(/ءا/g, "أ");
  inputText = inputText.replace(/ا'/g, "أ");
  inputText = inputText.replace(/_/g, "ـ");
  inputText = inputText.replace(/2/g, "ء");
  inputText = inputText.replace(/-/g, "ء");
  inputText = inputText.replace(/ه'/g, "ة");
  inputText = inputText.replace(/H/g, "ة");

  // Handle diacritics
  inputText = inputText.replace(/ا=/g, "َ");
  inputText = inputText.replace(/و=/g, "ُ");
  inputText = inputText.replace(/ي=/g, "ِ");
  inputText = inputText.replace(/ون=/g, "ٌ");
  inputText = inputText.replace(/ين=/g, "ٍ");
  inputText = inputText.replace(/ان=/g, "ً");
  inputText = inputText.replace(/1/g, "أ");

  setTextToTextArea(inputText);
  saveTextToLocalStorage(inputText);
}
