chrome.webRequest.onHeadersReceived.addListener(function(details) {
    console.log("i am here")
    for (let i = 0; i < details.responseHeaders.length; i++) {
   
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
