console.log("Index.js loaded!");

// function updateInnerHTML(selector, string) {
//   document.querySelector(selector).innerHTML = string;
// }
// Adding text using InsertAdjacentHTML()

const updateInnerHTML = function (selector, htmlString) {
  document.querySelector(selector).insertAdjacentHTML("beforeend", htmlString);
};
const template = strong("making things useful");
console.log(template);
updateInnerHTML("section", template);

// updateInnerHTML("h1", "New Topic");

// Function with a return value
function strong(string) {
  return `<strong>${string}</strong>`;
}
