
function openWindow(link){

	console.log('打开窗口:' + link);
	//navigator游览器对象


	//创建一个window 0-49
	// eval("if ('undefined' !=typeof "+windowName+") {console.log('已经存在，重新创建');"+windowName+".close();}else{console.log('不存在')}
	getRandomWindowName();
	function getRandomWindowName() {
		let myWindowName;
		let ranNO;
		try {
			ranNO = parseInt(Math.random() * 50 / 1);
			myWindowName = 'myWindow' + ranNO;
			console.log("随机的名字" + myWindowName);
			//捕获异常
			eval(myWindowName);
			getRandomWindowName();
		} catch (e) {
			console.log(e);
			console.log("已经找到" + myWindowName);

			// let ranNO= parseInt(Math.random() * 50 / 1);
			// var winName='myWindow'+ranNO;


			var winName = myWindowName;
			let ctrWindow = winName + "= createWindow(\'" + link + "\',\'" + winName + "\');";

			console.log('ctrWindow:' + ctrWindow);
			eval(ctrWindow);
			console.log('--run Window--');
			// eval(" runWindow("+myWindow+");");
			// console.log(myWindow);
			// runWindow(myWindow);
			eval(" runWindow(" + winName + ");");
			// try{console.log('11');eval('myWindow2') ;}catch(e){console.log(e)}
			// alert('--运行前--');


		}
	}

	//创建窗口
	function createWindow(link, windowName) {
		//判断是否存在
		function isWindowExist() {

			// if ('undefined' != typeof myWindow) {
			//     console.log('createWindow:myWindow已经存在，重新创建')
			//     myWindow.close();
			//
			// }
			// eval("if ('undefined' !=typeof "+windowName+") {console.log('已经存在，重新创建');"+windowName+".close();}else{console.log('不存在')}")
		}
		//直接创建窗口
		var strWindow = windowName + " =window.open(\'" + link + "\', \'" + windowName + "\')";
		console.log(strWindow);
		// windowName.close();
		console.log('windowName:' + windowName);
		return eval(strWindow);
	}


	//10秒以后初始化被打开的窗口
	function runWindow(myWindowName) {
		//传送数据
		//myWindow
		console.log('runWin:')
		console.log(myWindowName);

		// parent.document
		var i = 0;
		let initButtonInterval = setInterval(() => {
			console.log(myWindowName.document.readyState);
			if (i == 5 || 'complete' == myWindowName.document.readyState) {
				console.log('执行了计时器');

				//$('head', myWindowName.document).append("<script>$.ajax({url: 'https://afubaba.github.io/test/frame.son.html',type: 'get',success: function(result, statis) {console.log($('.broadcast_information'));$('.broadcast_information').before(result);setTimeout(function() {$('#startButtonId').click();}, 3000);},error: function(error, errorMessage) {console.log(error);console.log(errorMessage);}});</script>");

				$.ajax({
					url: sonWindowUrl,
					type: 'get',
					success: function(result, statis) {
						console.log($('.broadcast_information'), myWindowName.document);
						/*	findGrandSon('.broadcast_information').before(result);*/
						$('.broadcast_information', myWindowName.document).before(result);
						//执行点击子窗口初始化
						setTimeout(function() {
							$('#startButtonId', myWindowName.document).click();
						}, 3000);
					},
					error: function(error, errorMessage) {
						console.log(error);
						console.log(errorMessage);
					}
				});
				console.log('执行了计时器');
				
				clearInterval(initButtonInterval)
			}
			i++;

		}, 2000);

	}

}