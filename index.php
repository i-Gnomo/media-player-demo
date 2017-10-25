<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>VR</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="renderer" content="webkit" />
	<meta name="viewport" content="width=device-width, initial-scale=0,user-scalable=yes,maximum-scale=1.0">
	<meta name="format-detection" content="telephone=no" />
	 <meta name="keywords" content="content">
    <meta name="description" content="content">
    <link rel="stylesheet" type="text/css" href="css/normalize.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <?php
	    $staticPath = 'http://'.$_SERVER['SERVER_NAME'];//静态文件目录
	    $version = '1.0.0';
    ?>
    <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="js/jquery.media-player.js"></script>
</head>
<body>
	<div class="main-wrap">
		<div class="bg">
			<div class="main">
				<div class="logo"><img src="image/LOGO.png" alt=""></div>
				<div class="btn clearfloat">
					<a class="btn-cart" href="http://store.steampowered.com/app/719410/Magical_Squash/" target="_blank">立刻购买<i></i></a>
					<a class="btn-video " href="javascript:;" title="">游戏视频<i></i></a>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="main">
				<div class="footer-box clearfloat">
					<div class="footer-icon clearfloat">
						<a class="icon1" href="javascript:void(0);"><img src="image/icon1.png" alt=""></a>
						<a class="icon2" href="javascript:void(0);"><img src="image/icon2.png" alt=""></a>
						<a class="icon3" href="javascript:void(0);"><img src="image/icon3.png" alt=""></a>
					</div>
					<div class="content">
						<p>抵制不良游戏，拒绝盗版游戏，注意自我保护，谨防受骗上当，适度游戏益脑，沉迷游戏伤身，合理安排时间，享受健康生活。</p>
						<p>CopyRight © 2008-2018 杭州美盛游戏技术开发有限公司 版权所有</p>
						<p>网络文化经营许可证 浙网文[2015]0327-097号 网站备案/许可证号: 浙B2-20090280-4 浙公安备案号:33010502000875</p>
					</div>
					<div class="footer-logo">
						<a href="http://www.nextsee.com/" target="_blank"><img src="image/MSLOGO.png" alt=""></a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class='video_play'>
		<div class='video_shade'></div>
		<div style="width:900px;height:570px" class="videoPlayer" data-src="<?php echo $staticPath ?>/video/Magical-Squash-720.mp4" data-width="900" data-height="570">
			<div class="btn-video-colse"></div>
		</div>
	</div>
	<!-- 底部js -->
    <script type="text/javascript" src="js/common.js"></script>
</body>
</html>