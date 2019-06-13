import {GETrequest,POSTrequest} from './requests.js'
import {blockSite,errRequest} from './resultController.js'
import {extractHost} from './extractController.js'

  
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
