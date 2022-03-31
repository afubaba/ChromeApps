// const bgURL=chrome.runtime.getURL("img/11.png");



getURL();
function getURL(){
	try{
		const bgURL1=document.getElementsByClassName("thum")[0].style.backgroundImage;
		$('*').css('background', 'none');
		// $('*').css('backgroundImage', 'none');
		bgBackgroundFunction(bgURL1);
	}catch(e){
		setTimeout(function(){
			getURL();
		},1000);
	}
}
var bdBack=document.body;
function bgBackgroundFunction(bgURL) {
	bdBack.style.backgroundImage = bgURL;//设置背景图的的地址
	bdBack.style.backgroundRepeat = "no-repeat";//设置背景不平铺
	bdBack.style.backgroundPosition = "center";//设置背景图的位置
	bdBack.style.backgroundSize = "cover";//设置背景图像的尺寸 
}





// $(bdBack).css('background', 'none');
// bdBack.background=bgURL;
// document.body.style.backgroundSize="100%";
// document.body.style.backgroundWidth="100%";
// document.body.style.background.height="100%";
//css
// .bj {
//       background: url(star.jpg) no-repeat center;
//       background-size: cover;
// }
//.css('background-size','100%').css('height','100%').css('width','100%');