const textBox = document.getElementById("text");
const tooltip = document.getElementById("copy-tooltip");

//Convert!
document.getElementById("convert").addEventListener("click", function() {
  const caseStyling = document.getElementById("case-styling").checked; 
  if (caseStyling) {
  textBox.innerHTML = textBox.innerHTML.replace(/o/g, "O");
  }
  else {
    let result = textBox.innerHTML = textBox.innerHTML.toLowerCase().replace(/o/g, "O");
    // result = result.replace('<br>','').replace('&nbsp;','');
    // console.log(result);
  }
});

//Copy to clipboard
document.getElementById("copy").addEventListener("click", function() {
  let r = document.createRange();
  // console.log(r);
  r.selectNodeContents(document.getElementById("text"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  tooltip.innerHTML = "Copied";
});
//when mouse leaves button, change text back
document.getElementById("copy").addEventListener("mouseout", function() {
  tooltip.innerHTML = "Copy to clipboard";
});

//Remove formatting from pasting
document.querySelector("[contenteditable]").addEventListener("paste", function(event) {
    event.preventDefault();
    document.execCommand(
      "inserttext",
      false,
      event.clipboardData.getData("text/plain")
    );
  });

//Clear text when div clicked
textBox.addEventListener("click", clear);
function clear() {
  textBox.removeEventListener("click", clear);
  if (textBox.innerHTML == "Hello Lyon!" || "hellO lyOn!") {
    textBox.innerHTML = "";
  }
  textBox.setAttribute("contenteditable", "true");
}



// function onlyOneOfInate () {
// document.body.innerHTML = document.body.innerHTML.toLowerCase().replace(/o/g, "O");
// };
// onlyOneOfInate();

//laoshi's script
// javascript:(function(){
//          function replaceTextNodes(node) {
//           node.childNodes.forEach(function(el) {
//             if (el.nodeType === 3) {
//               if (el.nodeValue.trim() !== '') {
//                 el.nodeValue = el.nodeValue.toLowerCase().replace(/o/g, 'O');
//               }
//             } else {
//               replaceTextNodes(el);
//             }
//           });
//           }
//          replaceTextNodes(document.querySelector('body'));
//          })();
