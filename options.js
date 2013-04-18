// Saves options to localStorage.
function save_options() {
  var input = document.getElementById("defaultURL");
  var defaultURL = input.value;
  localStorage["old_reader_url"] = defaultURL;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
  
  chrome.extension.getBackgroundPage().updateSettings();
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var defaultURL = localStorage["old_reader_url"];
  if (!defaultURL) {
    return;
  }
  var input = document.getElementById("defaultURL");
  input.value = defaultURL;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
