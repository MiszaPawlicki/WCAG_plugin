/* 
File Name: wcagify.js
Original Source Author(s): abbott567 - https://github.com/abbott567
Original Source Repository: https://github.com/abbott567/wcagify
Date: 2023-10-16
*/

// Get a reference to the text box by its ID
const guidelineInput = document.getElementById("guideline-input");
guidelineInput.focus();

function writeToClipboard(text) {
  // Request clipboard write permission (make sure it's in your manifest.json):
  chrome.permissions.request(
    { permissions: ["clipboardWrite"] },
    function (granted) {
      if (granted) {
        // Write the text to the clipboard
        navigator.clipboard
          .writeText(text)
          .then(() => {
            console.log("Text copied to clipboard: " + text);
          })
          .catch((error) => {
            console.error("Failed to copy text to clipboard: " + error);
          });
      } else {
        console.error("Clipboard write permission denied.");
      }
    }
  );
}

// Function to call the wcagify function from background.js
function wcagify(guideline, callback) {
  // Call the function from background.js
  chrome.runtime.sendMessage(
    { action: "callWCAGify", data: guideline },
    (response) => {
      if (response && response.action === "backgroundResponse") {
        const details = response.data.criterion + " - " + response.data.link;
        writeToClipboard(details);
        // Call the callback function with the result
        callback(details);
      } else {
        callback("No results");
      }
    }
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const guidelineInput = document.getElementById("guideline-input");
  const autofillButton = document.getElementById("autofill-button");
  const autofillResult = document.getElementById("autofill-result");

  //run wcagify function when button is clicked
  autofillButton.addEventListener("click", function () {
    const guideline = guidelineInput.value;

    wcagify(guideline, function (result) {
      console.log("result:" + result);
      autofillResult.textContent = result;
    });
  });

  //run wcagify when entered
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      const guideline = guidelineInput.value;

      wcagify(guideline, function (result) {
        console.log("result:" + result);
        autofillResult.textContent = result;
      });
    }
  });
});
