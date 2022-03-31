
// alert("popub.js");
// chrome.runtime.sendMessage('Hello', function(response){
//       alert(response);
// });
// function httpRequest(url, callback){
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", url, true);
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4) {
//       callback(xhr.responseText);
//     }
//   }
//   xhr.send();
// }
document.addEventListener('DOMContentLoaded', function() {
  // chrome.tabs.sendRequest(tab.id, { action:  "Test"  },  function  (response) {
  //   alert(response.kw);
  // });
	
  var checkPageButton = document.getElementById('clickIt');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tab){});
    // chrome.tabs.query(null, function() {
      // alert("Hello..! It's my first chrome extension.");
	  
	  // test();
	  document.getElementById('openfile').onclick = function() {
	  	chrome.fileSystem.chooseEntry({}, function(fileEntry) {
	  		alert(fileEntry);
	  		//do something with fileEntry
	  	});
	  }
	  
      // var xhr = new XMLHttpRequest();
      // xhr.open("GET", chrome.runtime.getURL('/config_resources/config.json'), true);
      // xhr.onreadystatechange = function() {
      //   if (xhr.readyState == 4) {
      //       // JSON.parse does not evaluate the attacker's scripts.
      //       var resp = JSON.parse(xhr.responseText);
      //       alert(resp);
      //     }
      //  }
      //  xhr.send();

     //  chrome.tabs.sendRequest(tab.id, { action:  "Test"  },  function  (response) {
     //    response.kw.background="url('https://profile.img.afreecatv.com/LOGO/10/1057123999/1057123999.jpg')"
     //    alert(response.kw);
     // });
    // });
  }, false);

  //  var checkPageButton = document.getElementById('clickIt');
  // checkPageButton.addEventListener('click', function() {

  //   chrome.tabs.getSelected(null, function(tab) {
  //     alert("Hello..! It's my first chrome extension.");
  //     chrome.tabs.sendRequest(tab.id, { action:  "GetBaiduKeyWord"  },  function  (response) {

  //      alert(response.kw);
  //    });
  //   });
  // }, false);
}, false);

