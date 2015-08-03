javascript:(function(){
 var sheets = document.styleSheets;
 var sheet = sheets[sheets.length - 1];
 sheet.insertRule(" p:before { content:''; border-left:1px solid red; border-right:1px solid red; position: absolute; width: 80%; margin-left: 10%; height: 100%; display: inline-block; }");
 sheet.insertRule(" p { display: block; position: relative }");
})();

/*  This doesn't work, but keep around for refference
 sheet.insertRule("p::before { display: block; position: absolute; top: 5px; bottom: 5px; width: 5px; background-color: rgba(255, 0, 0, 0.2); content: '';", 0);
 sheet.insertRule("p::after { display: block; position: absolute; top: 5px; bottom: 5px; width: 5px; background-color: rgba(255, 0, 0, 0.2); content: '';", 1);
 sheet.insertRule("p::before { left: 10%; width: 1px; }", 2);
 sheet.insertRule("p::after { right: 10%; width: 1px; }", 3);
 */
