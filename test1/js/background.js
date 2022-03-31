// alert("background.js");
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message == 'Hello') {


		sendResponse('Hello from background.');

	}
});


// chrome.alarms.create('alarmsTest', {
//     periodInMinutes:1,
//     delayInMinutes:1
// });
// var test = 1;
// chrome.alarms.get('alarmsTest', function(alarm) {
//    alert(test);
//     test++;
// });
