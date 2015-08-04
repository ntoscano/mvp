chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  $( document ).ready(function() {
    $('body').on("click", function(){ 
      console.log('clicked');
      chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
      });
    })
  })
});