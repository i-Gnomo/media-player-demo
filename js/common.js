function AnimateLogo(){
	$('.logo').fadeIn(1500);
};
function MyLayer(){
	$(document).on("click",".btn-video",function(event){
		event.stopPropagation();
		iYejyPlayer.player();
		var _box = $('.video_play');
		_box.fadeIn(500);
	});
	$(document).on("click",".btn-video-colse",function(event){
		var _box = $('.video_play');
		_box.fadeOut(500);
		$("div.videoPlayer").html('<div class="btn-video-colse"></div>');
	})
};
$(function(){
	AnimateLogo();
	MyLayer();
});