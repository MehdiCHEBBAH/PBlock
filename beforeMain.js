// Content script is injecting a script with ES6 module support into the current page
var s = document.createElement('script');
s.src = chrome.runtime.getURL('main.js');
s.type = "module";
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);