angular.module('color', []).controller('colorController', function($scope) {
  console.log('controller');
  $scope.red = 255;
  $scope.green = 0;
  $scope.blue = 0;
  $scope.opacity = 1;
  $scope.width = 1;
  $scope.percent = 10;
  $( document ).ready(function() {
    console.log('ready');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      console.log('conected');
      $('#Btn').on("click", function(){ 
        console.log('clicked');
        chrome.tabs.sendMessage(tabs[0].id, {
          sr : 'sr',
          red: $scope.red,
          green: $scope.green,
          blue: $scope.blue,
          opacity: $scope.opacity,
          width: $scope.width,
          percent: $scope.percent
         }, function(response) {});
      })
    })
  })
});