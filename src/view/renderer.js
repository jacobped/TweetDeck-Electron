// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


// Doesn't work: https://electron.atom.io/docs/api/webview-tag/
// onload = () => {
//     const webview = document.querySelector('webview')
//     const indicator = document.querySelector('.indicator')

//     const loadstart = () => {
//       indicator.innerText = 'loading...'
//     }

//     const loadstop = () => {
//       indicator.innerText = ''
//     }

//     webview.addEventListener('did-start-loading', loadstart)
//     webview.addEventListener('did-stop-loading', loadstop)
//   }

(function () {
      
      const remote = require('electron').remote; 
      
      function init() { 
        document.getElementById("min-btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          window.minimize(); 
        });
        
        document.getElementById("max-btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          if (!window.isMaximized()) {
            window.maximize();
          } else {
            window.unmaximize();
          }	 
        });
        
        document.getElementById("close-btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          window.close();
        }); 
      }; 
      
      document.onreadystatechange = function () {
        if (document.readyState == "complete") {
          init(); 
        }
      };
})();