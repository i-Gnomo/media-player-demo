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
	isMobile : function(){
		return (iYejyPlayer.Android() || iYejyPlayer.BlackBerry() || iYejyPlayer.iOS() || iYejyPlayer.Windows());  
	},

	player : function(){
		var SITE_URL_ARRAY = ["http://s1.yejychina.com","http://s2.yejychina.com","http://cdn.yejychina.co"];
		$("div.YejyPlayer").each(function(index, element) {
			var ext = $(this).attr('data-src').substr($(this).attr('data-src').length-3);
			if($.inArray(ext.toLowerCase(),['swf','flv','mp4'])==-1) return;
			
			if($.inArray($(this).attr('data-src').substr(0,23),SITE_URL_ARRAY)==-1){
				$(this).html('<embed src="'+$(this).attr('data-src')+'" allowfullscreen="true" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="100%" height="100%"></embed>');
			}else if(ext.toLowerCase() == 'swf'){
				$(this).html('<embed src="'+$(this).attr('data-src')+'" allowfullscreen="true" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="100%" height="100%"></embed>');
				$(this).after('<div class="YejyPlayerButton" style="position:relative;"><input class="fullscreen" type="button" value="全屏观看"><a href="javascript:void(0)" class="exit" style="margin:10px;background:#ddd;padding:5px 10px;color:#000;text-decoration:none;position:fixed;display:none;top:0;left:50%;z-index:100">退出全屏</a><input class="newswindow" type="button" value="新窗口打开"></div>');			
			}else if(iYejyPlayer.isMobile() && ext.toLowerCase() == 'mp4'){
				$(this).html('<video src="'+$(this).attr('data-src')+'" width="100%" height="100%" controls preload></video>');
			}else if($.inArray($(this).attr('data-src').substr(0,23),SITE_URL_ARRAY)!=-1){
				$(this).html('<embed src="'+SITE_URL_ARRAY[0]+'/flvplayer.swf" allowfullscreen="true" flashvars="vcastr_file='+$(this).attr('data-src')+'&LogoText=123&IsAutoPlay=0" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="100%" height="100%"></embed>');
			}
		});
		$("div.YejyPlayerButton :button,div.YejyPlayerButton a").click(function(){
			var o = $(this).parents('div.YejyPlayerButton').prev('div.YejyPlayer');
			switch($(this).attr('class')){
				case 'fullscreen':
					o.css({'position':'fixed','top':'0','left':'0','z-index':'99','width':$(window).width(),'height':$(window).height()});
					$(this).parents('div.YejyPlayerButton').find(":button").hide();
					$(this).parents('div.YejyPlayerButton').find("a").show();
				break;case 'exit':
					$(o).css({ "position":"", "top": "",'left':"",'z-index' : ""});
					$(o).css({'width':$(o).attr('data-width'),'height':$(o).attr('data-height')});
					$(this).parents('div.YejyPlayerButton').find(":button").show();
					$(this).parents('div.YejyPlayerButton').find("a").hide();
				break;case 'newswindow':
					window.open(o.attr('data-src'),'','width='+(window.screen.availWidth-10)+',height='+(window.screen.availHeight-30)+',,channelmode=yes,fullscreen=yes,top=0,left=0,resizable=yes,status=no,menubar=no,scrollbars=yes,location=no,hotkeys=yes');
				break;
			}
			//*/
		});
	}
}