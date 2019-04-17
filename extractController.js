
export function extractHost(){
    var ourURL = document.location.host;
    if(ourURL.indexOf('www.') == 0){
	    ourURL = ourURL.slice(4);
    }
    return ourURL;
}
