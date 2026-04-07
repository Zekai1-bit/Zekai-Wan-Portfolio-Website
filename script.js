var toggleButton = document.getElementById("toggleButton") || document.getElementById("darkModeToggle");
var bodyElement = document.body;

var isDarkMode = false;

if (toggleButton) {
  toggleButton.onclick = function () {
    if (isDarkMode === false) {
      bodyElement.className = "dark-mode";
      toggleButton.innerHTML = "Switch to Light Mode";
      isDarkMode = true;
    } else {
      bodyElement.className = "";
      toggleButton.innerHTML = "Switch to Dark Mode";
      isDarkMode = false;
    }
  };
}