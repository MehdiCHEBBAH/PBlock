export function blockSite(xhr){
    if (xhr.status != 200) { // analyze HTTP status of the response
        console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      } else { // show the result
        console.log(`Done, got ${xhr.response.length} bytes`); // responseText is the server
            if (xhr.responseText=='n') {
                showHTML();    		
            }	
        }
}

export function errRequest(xhr){
    console.log("there was an err in the request");
}