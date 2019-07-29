![](https://repository-images.githubusercontent.com/172215571/f9b02b00-b20a-11e9-98e1-85fe0c439e91)
# PBlock
**PBlock** is an extension for chrome based browsers that aims to block pornographic websites

### How this work
Whene a website is loading the extention will inject a javascript code in the page, the injected code will recuperate the host name from the browser then send it in an https request to [the API](https://github.com/MehdiCHEBBAH/API-detect-porn-website).  
After looking in the database, the API return a response to the browser telling it that the website is safe or not.  
If the website is not safe the extension replace the HTML code of the page with the red page.

### TODO
* A dynamic database in the API.
* A bug in sites that work with the CSP header
