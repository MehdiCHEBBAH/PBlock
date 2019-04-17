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
    url = "?"
    for(let i in opts){
        url += `${i}=${encodeURIComponent(opts[i])},`;
    }
    return url.slice(0,url.lenght -1);
}

function opts2POSTopts(opts){
    var body = new FormData();
    for(let i in opts){
        body.append(i,opts[i]);
    }
    return body;
}

export function GETrequest(url,opts,errFunction,succFunction,){
    var xhr = new XMLHttpRequest();

    // 2. Configure it: GET-request for the URL url+opts
    xhr.open('GET', url + opts2GETopts(opts));
    console.log(site)
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

export function POSTrequest(url,opts,errFunction,succFunction,){
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