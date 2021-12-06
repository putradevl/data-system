var domainuc='herokuapp.com,redirector-putraappsoft.herokuapp.com';


//MUDAR AKI...
var urluc='http://go.paid4link.com/putraappsoft';
//MUDAR AKI...


var domainsuc='redirector-putraappsoft.herokuapp.com';

function cuc(){
   var linkuc=document.getElementsByTagName("A");
   
   try{
      var locuc=(""+top.location.href).replace("http://","").replace("https://","").replace("www.","");
   }catch(e){
      var locuc=(""+document.location.href).replace("http://","").replace("https://","").replace("www.","");
   }
   
     
   for(i=0;i<linkuc.length;i++){    
   		  
      domain_urluc=(""+linkuc[i].href).replace(/^\s+/g,"").replace(/\s+$/g,"").replace("http://","").replace("https://","");
	  if(duc(linkuc[i].href)&&(((" "+linkuc[i].href).indexOf(locuc)<=0||(" "+linkuc[i].href).indexOf("http")<=0)||(" "+linkuc[i].href).lastIndexOf("http:")>3)&&(" "+linkuc[i].href).indexOf("script:")<=0&&(" "+linkuc[i].href).indexOf("#")!=1&&(" "+linkuc[i].href).indexOf("mailto:")<=0&&(" "+linkuc[i].href).indexOf("file:")<=0&&(" "+linkuc[i].href).indexOf("#exit")<=0&&!(!isNaN(parseInt(domain_urluc.substr(0,1)))&&(!isNaN(parseInt(domain_urluc.substr(0,2)))||domain_urluc.substr(0,2)=="."))){
	     
		 linkuc[i].target="_blank";		 
		 var inverte = linkuc[i].href.match(/[^|]/gi).join("");
		 linkuc[i].href=urluc+ base64_encode(inverte);		 
	  }
   }
   

}

function duc(urluc){
       
   if(""+domainuc!="undefined"&&domainuc!=""&&domainuc.replace(/\s/g,"")!=""&&urluc!=""){
      if((" "+domainuc).indexOf(",")>0){
	     params_to_skip=domainuc.split(",");
	   }else{
		  params_to_skip=new Array(domainuc);
	   }for(s=0;s<params_to_skip.length;s++){
		  if((" "+urluc.toLowerCase()).indexOf(params_to_skip[s].toLowerCase())>0){
			 if(""+domainsuc!="undefined"&&domainsuc!=""&&domainsuc.replace(/\s/g,"")!=""&&urluc!=""){
				if((" "+domainsuc).indexOf(",")>0){
				   params_to_skip=domainsuc.split(",");
				}else{params_to_skip=new Array(domainsuc);}
				for(s=0;s<params_to_skip.length;s++){
				   if((" "+urluc.toLowerCase()).indexOf(params_to_skip[s].toLowerCase())>0){
					  return false;
					  break;
				   };
				}return true;
			 }else{
			    return true;
			 }
		   };
		}
		return false;
    }else{
	    return false;
	}
}if(""+window.onload==""||""+window.onload=="null"){
   window.onload=cuc;
}else{
   var tout=window.setTimeout("cuc(); clearTimeout(tout)",1);
};
function base64_encode (data) 
{
	
	    
	var b64 = ""
	var bits, i = 0, ac = 0, enc="", tmp_arr = [];
	
	if (!data) {
	    return data;
	}
	
	data = this.utf8_encode(data+'');
	
	do { // pack three octets into four hexets
	    o1 = data.charCodeAt(i++);
	    o2 = data.charCodeAt(i++);
	    o3 = data.charCodeAt(i++);
	
	    bits = o1<<16 | o2<<8 | o3;
	
	    h1 = bits>>18 & 0x3f;
	    h2 = bits>>12 & 0x3f;
	    h3 = bits>>6 & 0x3f;
	    h4 = bits & 0x3f;
	
	    // use hexets to index into b64, and append result to encoded string
	    tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
	} while (i < data.length);
	
	enc = tmp_arr.join('');
	
	switch (data.length  ) {
	    case 1:
	        enc = enc.slice(0, -2) + '==';
	    break;
	    case 2:
	        enc = enc.slice(0, -1) + '=';
	    break;
	}
	
	return enc;
}
function utf8_encode ( argString ) 
{
   
    var string = (argString+''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
 
    var utftext = "";
    var start, end;
    var stringl = 0;
 
    start = end = 0;
    stringl = string.length;
    for (var n = 0; n < stringl; n++) {
        var c1 = string.charCodeAt(n);
        var enc = null;
 
        if (c1 < 128) {
            end++;
        } else if (c1 > 127 && c1 < 2048) {
            enc = String.fromCharCode((c1 >> 6) | 192) + String.fromCharCode((c1 & 63) | 128);
        } else {
            enc = String.fromCharCode((c1 >> 12) | 224) + String.fromCharCode(((c1 >> 6) & 63) | 128) + String.fromCharCode((c1 & 63) | 128);
        }
        if (enc !== null) {
            if (end > start) {
                utftext += string.substring(start, end);
            }
            utftext += enc;
            start = end = n+1;
        }
    }
 
    if (end > start) {
        utftext += string.substring(start, string.length);
    }
 
    return utftext;
}




var _wau = _wau || []; _wau.push(["small", "hf2inccflu", "i56"]);
(function() {var s=document.createElement("script"); s.async=true;
s.src="//whos.amung.us/swidget/hf2inccflu";
document.getElementsByTagName("head")[0].appendChild(s);
})();








