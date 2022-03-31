
// console.log("playLive.js");
// chrome.extension.onRequest.addListener( //监听扩展程序进程或内容脚本发送的请求
// 	function  (request, sender, sendResponse) {
// 		if( request.action ==  "Test" ) {
// 			// sendResponse({ kw: document.forms[0].wd.value });
			
// 			// console.log(document.getElementsByClassName("broadcast_information"));
// 			// alert(document.getElementsByClassName("broadcast_information"));
// 			// sendResponse({ kw:1});szKeyword
// 			// console.log(document.getElementById("szKeyword").value);
// 			// sendResponse({ kw:document.getElementsByClassName("broadcast_information")});
// 			sendResponse({ kw:document.body});
// 		}
// 	}
// 	);


var dynamicLoading = {
	css: function(path){
		if(!path || path.length === 0){
			throw new Error('argument "path" is required !');
		}
		var head = document.getElementsByTagName('head')[0];
		var link = document.createElement('link');
		link.href = path;
		link.rel = 'stylesheet';
		link.type = 'text/css';
		head.appendChild(link);
	},
	js: function(path){
		if(!path || path.length === 0){
			throw new Error('argument "path" is required !');
		}
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.src = path;
		script.type = 'text/javascript';
		head.appendChild(script);
	}
};

//背景图地址
var backUrl1 = "https://profile.img.afreecatv.com/LOGO/10/1057123999/1057123999.jpg";
var backUrl = "https://afubaba.github.io/Afreecatv/img/bg1.jpg";
const bgURL=chrome.runtime.getURL("img/11.png");


var headImg=$('.thum')[0];
var bgInterval=setInterval(function(){
	if (headImg.src!="https://res.afreecatv.com/images/afmain/img_thumb_profile.gif") {
		// $('body').css('background','url('+headImg.src+')').css('background-size','100%').css('height','100%').css('width','100%');
		bgBackgroundFunction('url('+headImg.src+')');
		clearInterval(bgInterval);
	}
},1000);
var bdBack=document.body;
function bgBackgroundFunction(bgURL) {
	bdBack.style.backgroundImage = bgURL;//设置背景图的的地址
	bdBack.style.backgroundRepeat = "no-repeat";//设置背景不平铺
	bdBack.style.backgroundPosition = "center";//设置背景图的位置
	bdBack.style.backgroundSize = "cover";//设置背景图像的尺寸 

}
//清除背景.css('background-repeat','no-repeat')
// $('*').css('background', 'none');

//$('body').css('background-image','url('+backUrl+')');
//本地
const htmlURL=chrome.runtime.getURL("afreecatv.son.html");
//子页面地址(在线)
// var sonWindowUrl = "https://afubaba.github.io/Afreecatv/afreecatv.son.html";



let initButtonInterval = setInterval(() => {
	// console.log(document.readyState);
	if ( 'complete' == document.readyState) {
		//$('head', myWindowName.document).append("<script>$.ajax({url: 'https://afubaba.github.io/test/frame.son.html',type: 'get',success: function(result, statis) {console.log($('.broadcast_information'));$('.broadcast_information').before(result);setTimeout(function() {$('#startButtonId').click();}, 3000);},error: function(error, errorMessage) {console.log(error);console.log(errorMessage);}});</script>");
		$.ajax({
			url: htmlURL,
			type: 'get',
			success: function(result, statis) {
				// console.log($('.broadcast_information'))	;
				/*	findGrandSon('.broadcast_information').before(result);*/
				$('.broadcast_information').before(result);
				//执行点击子窗口初始化
				$('#startButtonId').click();
				// setTimeout(function() {
				// 	$('#startButtonId').click();
				// }, 3000);
			},
			error: function(error, errorMessage) {
				console.log(error);
				console.log(errorMessage);
			}
		});
		
		clearInterval(initButtonInterval)
	}
}, 1000);

const jsURL=chrome.runtime.getURL("js/afreecatv.son.js");

dynamicLoading.js(jsURL);




