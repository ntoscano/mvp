var speedReader = function(red, green, blue, opacity, width, percent){
 var sheets = document.styleSheets;
 var sheet = sheets[sheets.length - 1];
 var dist = 100 - (percent * 2);
 sheet.insertRule(" p:before { content:''; border-left:"+width+"px solid rgba("+red+", "+green+", "+blue+", "+opacity+"); border-right:"+width+"px solid rgba("+red+", "+green+", "+blue+", "+opacity+"); position: absolute; width: "+dist+"%; margin-left: "+percent+"%; height: 100%; display: inline-block; }", 0);
 sheet.insertRule(" p { display: block; position: relative }", 1);
};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.sr === "sr") {speedReader(request.red, request.green, request.blue, request.opacity, request.width, request.percent)}
  });