![](https://repository-images.githubusercontent.com/172215571/f9b02b00-b20a-11e9-98e1-85fe0c439e91)
# PBlock
**PBlock** is an extension for chrome based browsers designed for kids and aims to block pornographic websites

## How this work
After installing and activating the extension it will run in the background and recuperate the host names from all the tabs then send it in an https request to [the API](https://github.com/MehdiCHEBBAH/API-detect-porn-website).  
After looking in the database, the API return a response to the browser telling it that the website is safe or not.  
If the website is not safe the extension replace the HTML code of the page with the red page.

## How to install 

### TODO
* A dynamic database in the API.
* A bug in sites that work with the CSP header
