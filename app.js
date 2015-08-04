var speedReader = function(){
 var sheets = document.styleSheets;
 var sheet = sheets[sheets.length - 1];
 sheet.insertRule(" p:before { content:''; border-left:1px solid red; border-right:1px solid red; position: absolute; width: 80%; margin-left: 10%; height: 100%; display: inline-block; }", 0);
 sheet.insertRule(" p { display: block; position: relative }", 1);
};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.greeting === "hello") {speedReader()}
  });