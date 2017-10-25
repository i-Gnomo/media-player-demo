// JavaScript Document
var iYejyPlayer = {
	Android: function() {  
		return navigator.userAgent.match(/Android/i) ? true : false;  
	},  
	BlackBerry: function() {  
		return navigator.userAgent.match(/BlackBerry/i) ? true : false;  
	},  
	iOS: function() {  
		return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;  
	},  
	Windows: function() {  
		return navigator.userAgent.match(/IEMobile/i) ? true : false;  
	},
	isMobile: function(){
		return (iYejyPlayer.Android() || iYejyPlayer.BlackBerry() || iYejyPlayer.iOS() || iYejyPlayer.Windows());  
	},
	checkVideo: function(){  
	    if(!!document.createElement('video').canPlayType){
	        var vidTest = document.createElement("video");  
		        oggTest = vidTest.canPlayType('video/ogg; codecs="theora, vorbis"');
		        h264Test=vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
		    return ((h264Test=="probably")||(oggTest=="probably"))? true : false;
	    }else{  
	        return false; 
	    }  
	},
	player : function(){
		$("div.videoPlayer").each(function(index, element) {
			var _src = $(this).attr('data-src');
			if(_src === '' || typeof(_src) === 'undefined') return;
			var ext = _src.substr(_src.length-3);
			if($.inArray(ext.toLowerCase(),['swf','flv','mp4'])==-1) return;
			if((iYejyPlayer.checkVideo() && ext.toLowerCase() == 'mp4')||(iYejyPlayer.isMobile() && ext.toLowerCase() == 'mp4')){
				$(this).append('<video id="html5Video" src="'+_src+'" width="100%" height="100%" controls preload></video><div class="videoPlayBtn"></div>');
				return;
			}
			if(ext.toLowerCase() == 'swf'){
				$(this).append('<embed src="'+_src+'" allowfullscreen="true" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="100%" height="100%"></embed>');
				$(this).after('<div class="mediaPlayerButton" style="position:relative;"><input class="fullscreen" type="button" value="全屏观看"><a href="javascript:void(0)" class="exit" style="margin:10px;background:#ddd;padding:5px 10px;color:#000;text-decoration:none;position:fixed;display:none;top:0;left:50%;z-index:100">退出全屏</a><input class="newswindow" type="button" value="新窗口打开"></div>');			
				return;
			}else{
				$(this).append('<embed src="http://s1.yejychina.com/flvplayer.swf" allowfullscreen="true" flashvars="vcastr_file='+_src+'&IsAutoPlay=0&LogoText=" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="700" height="400"></embed>');
				return;
			}
		});
		$("div.videoPlayBtn").click(function(){
			document.getElementById("html5Video").play();
			$(this).remove();
		})
		$("div.mediaPlayerButton :button,div.mediaPlayerButton a").click(function(){
			var o = $(this).parents('div.mediaPlayerButton').prev('div.YejyPlayer');
			switch($(this).attr('class')){
				case 'fullscreen':
					o.css({'position':'fixed','top':'0','left':'0','z-index':'99','width':$(window).width(),'height':$(window).height()});
					$(this).parents('div.mediaPlayerButton').find(":button").hide();
					$(this).parents('div.mediaPlayerButton').find("a").show();
				break;case 'exit':
					$(o).css({ "position":"", "top": "",'left':"",'z-index' : ""});
					$(o).css({'width':$(o).attr('data-width'),'height':$(o).attr('data-height')});
					$(this).parents('div.mediaPlayerButton').find(":button").show();
					$(this).parents('div.mediaPlayerButton').find("a").hide();
				break;case 'newswindow':
					window.open(o.attr('data-src'),'','width='+(window.screen.availWidth-10)+',height='+(window.screen.availHeight-30)+',,channelmode=yes,fullscreen=yes,top=0,left=0,resizable=yes,status=no,menubar=no,scrollbars=yes,location=no,hotkeys=yes');
				break;
			}
		});
	}
}