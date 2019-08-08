//import {GETrequest,POSTrequest} from './requests.js'
/*
* opts are passed in this way 
* {
    opt1:val1,
    opt2:val2,
    ...
    optn:valn
}
*/
function opts2GETopts(opts){
    // use the encodeURIComponent() function
    let url = "?"
    for(let i in opts){
        if (opts.hasOwnProperty(i)) {
            url += `${i}=${encodeURIComponent(opts[i])},`;
        }
    }
    return url.slice(0,url.length-1);;
}

function opts2POSTopts(opts){
    let body = new FormData();
    for(let i in opts){
        body.append(i,opts[i]);
    }
    return body;
}

function GETrequest(url,opts,errFunction,succFunction,){
    var xhr = new XMLHttpRequest();

    // 2. Configure it: GET-request for the URL url+opts
    xhr.open('GET', url + opts2GETopts(opts));
    // 3. Send the request over the network
    xhr.send();

    // 4. This will be called after the response is received
    xhr.onload = function() {
        succFunction(xhr);
    }
    xhr.onerror = function() {
    errFunction(xhr);
    };
}

function POSTrequest(url,opts,errFunction,succFunction,){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(opts2POSTopts(opts));
    xhr.onload = function () {
        succFunction(xhr);
    };
    xhr.onerror = function(){
        errFunction(xhr);
    };
    
}
/*==============================================================================*/
//import {blockSite,errRequest} from './resultController.js'
function blockSite(xhr){
    function showHTML(){
        document.getElementsByTagName('html')[0].innerHTML = `
                <!DOCTYPE HTMLPUBLIC"-//W3C//DTDHTML4.01Transitional//EN">
                <html>
                <head>
                <metahttp-equiv="Content-Type"content="text/html;charset=utf-8">
                <style>
                body{font-family:Helvetica,sans-serif;font-weight:400;font-size:18px;line-height:200%;color:#d4cec3;background-color:#421;}
                #main-wrapper{text-align:center;}
                #main{display:inline-block;padding:100px 20%;text-align:center;max-width:30em;}h2{font-size:3em;color:white;line-height:1.3em;}h3{color:white;}a{color:#ddd;text-decoration:none;}a:hover{color:#0cc;}a:active{color:#ccc;}
                #main{padding:50px 5%;}
                </style>
                </head>
                <body style="color:#ebe3e3;background-color:#4b0009">
                <div id=main-wrapper>
                <div id=main>
                <div id=icon><img style="display:inline-block;width:150px;height:150px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Simple_Prohibited.svg/1024px-Simple_Prohibited.svg.png"></div>
                <h2 id=title>Site Blocked</h2>
                <h3 id=gets-domain></h3>
                <p id=categoroid><span id=categorizeLine>This site has been categorized as Pornography.</span><br>
                    <span id=discontinueLine>You are not permitted to be here.</span>
                </p>
                </div>
                </div>
                </body>
                </html>`;
        }
    if (xhr.status != 200) { // analyze HTTP status of the response
        console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      } else { // show the result
        console.log(`Done, got ${xhr.response.length} bytes`); // responseText is the server
            if (xhr.responseText=='n') {
                showHTML();    		
            }	
        }
}

function errRequest(xhr){
    console.log("there was an err in the request");
}
/*=============================================================================*/
//import {extractHost} from './extractController.js'
function extractHost(){
    var ourURL = document.location.host;
    if(ourURL.indexOf('www.') == 0){
	    ourURL = ourURL.slice(4);
    }
    return ourURL;
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
