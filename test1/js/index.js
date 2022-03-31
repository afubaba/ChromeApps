 //console.log("index.js");
if (location.href=="https://afreecatv.com/") {
	// console.log("进入了主页");
	//背景图地址
	var backUrl1 = "https://profile.img.afreecatv.com/LOGO/10/1057123999/1057123999.jpg";
	var backUrl = "https://afubaba.github.io/Afreecatv/img/bg1.jpg";
	// console.log(chrome.*);
	// const bgURL=chrome.extension.getURL("img/11.png");
	const bgURL=chrome.runtime.getURL("img/11.png");
	// console.log(bgURL);
	//清除背景.css('background-repeat','no-repeat')
	$('*').css('background', 'none');
	$('body').css('background','url('+bgURL+')').css('background-size','100%').css('height','100%').css('width','100%');
	
	// getURL();
	// function getURL(){
	// 	try{
	// 		// $('*').css('backgroundImage', 'none');
	// 		bgBackgroundFunction('url('+backUrl+')');
	// 	}catch(e){
	// 		setTimeout(function(){
	// 			getURL();
	// 		},1000);
	// 	}
	// }
	
	// var bdBack=document.body;
	// function bgBackgroundFunction(bgURL) {
	// 	bdBack.style.backgroundImage = bgURL;//设置背景图的的地址
	// 	bdBack.style.backgroundRepeat = "no-repeat";//设置背景不平铺
	// 	bdBack.style.backgroundPosition = "center";//设置背景图的位置
	// 	bdBack.style.backgroundSize = "cover";//设置背景图像的尺寸 

	// }

	//$('body').css('background-image','url('+backUrl+')');
	// var dynamicLoading = {
	// 	css: function(path){
	// 		if(!path || path.length === 0){
	// 			throw new Error('argument "path" is required !');
	// 		}
	// 		var head = document.getElementsByTagName('head')[0];
	// 		var link = document.createElement('link');
	// 		link.href = path;
	// 		link.rel = 'stylesheet';
	// 		link.type = 'text/css';
	// 		head.appendChild(link);
	// 	},
	// 	js: function(path){
	// 		if(!path || path.length === 0){
	// 			throw new Error('argument "path" is required !');
	// 		}
	// 		var head = document.getElementsByTagName('head')[0];
	// 		var script = document.createElement('script');
	// 		script.src = path;
	// 		script.type = 'text/javascript';
	// 		head.appendChild(script);
	// 	}
	// };
	// dynamicLoading.js("https://afubaba.github.io/Afreecatv/js/afreecatv.index.js");

}

// chrome.app.window.create('blank.html', {
// 	id: 'default'
// });
// window.open("111","abc");

// chrome.tabs.executeScript(null, {file: "content_script.js"});

// chrome.extension.onRequest.addListener( //监听扩展程序进程或内容脚本发送的请求
// 	function  (request, sender, sendResponse) {
// 		if( request.action ==  "GetBaiduKeyWord" ) {
// 			// sendResponse({ kw: document.forms[0].wd.value });
// 			if (location.href=="https://afreecatv.com/") {
// 				console.log("进入了主页");
// 			}
// 			// var loginBtn=document.getElementById("loginBtn");
// 			// loginBtn.click();
// 			// 
// 			sendResponse({ kw: document.getElementById("szKeyword").value});
// 		}
// 	}
// 	);


// alert("Hello..! It's my first chrome extension.");
// chrome.tabs.sendRequest(tab.id, { action:  "GetBaiduKeyWord"  },  function  (response) {
	
	
// 	alert(response.kw);
// });


function httpRequest(url, callback){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			callback(xhr.responseText);
		}
	}
	xhr.send();
}

// document.getElementById('myFile').onchange = function(){
//  var file = this.files[0];
//  console.log(file);
// }


// var html;
// httpRequest('test.txt', function(result){
//  html = result;
//  console.log(html);
// });
var title = chrome.i18n.getMessage('extName');
// console.log(title);
// 获取浏览器可接受的语言：
chrome.i18n.getAcceptLanguages(function(languageArray){
 //do something with languageArray
 // console.log(languageArray);
});
// 获得指定消息的本地化字符串。如果消息不存在，该方法返回空字符串""：
var msg = chrome.i18n.getMessage("extName", "ko");
console.log(msg);
var err=chrome.i18n.getMessage("error", "errorDetails");
console.log(err);

// 获取浏览器用户界面的语言1：
var currentLanguage = chrome.i18n.getUILanguage(); 
// console.log(currentLanguage);
// console.log( __MSG_@@bidi_dir__);
// 
// 
// 
// 
// chrome.alarms.create('alarmsTest', {
//     periodInMinutes:1,
//     delayInMinutes:1
// });
// var test = 1;
// chrome.alarms.get('alarmsTest', function(alarm) {
//     console.log(test);
//     test++;
// });