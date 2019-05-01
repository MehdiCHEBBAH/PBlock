import {GETrequest,POSTrequest} from './requests.js'
import {blockSite,errRequest} from './resultController.js'
import {extractHost} from './extractController.js'


chrome.webRequest.onHeadersReceived.addListener(function(details) {
    for (i = 0; i < details.responseHeaders.length; i++) {
   
      if (isCSPHeader(details.responseHeaders[i].name.toUpperCase())) {
        var csp = details.responseHeaders[i].value;
   
        // append "https://mysite.com" to the authorized sites
        csp = csp.replace('script-src', 'script-src https://poveleceze.pythonanywhere.com/');
        csp = csp.replace('style-src', 'style-src https://poveleceze.pythonanywhere.com/');
   
        details.responseHeaders[i].value = csp;
      }
    }
   
    return { // Return the new HTTP header
      responseHeaders: details.responseHeaders
    };
  }, {
    urls: ["https://*/*","http://*/*"],
    types: ["main_frame"]
  }, ["blocking", "responseHeaders"]);
   
   
  function isCSPHeader(headerName) {
    return (headerName == 'CONTENT-SECURITY-POLICY') || (headerName == 'X-WEBKIT-CSP');
  }

  
/********************************************* site blocking **********************************************/
var opts = {
	q:extractHost()
};
console.log(opts);
window.onpaint = GETrequest("https://poveleceze.pythonanywhere.com/",opts,errRequest,blockSite);

/********************************************** image blocking ********************************************
var tabIMG = document.getElementsByTagName("img");
for (let i=0;i<tabIMG.length;i++){tabIMG[i] = tabIMG[i].src}
console.log(tabIMG);
*/