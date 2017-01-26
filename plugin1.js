/* 
	Theme Name: Keremiya Wordpress Film Tema
	Theme URL: http://www.keremiya.com
	Description: Tamamen dinamik wordpress temasÄ±
	Author: Keremiya
	Author URI: http://www.keremiya.com
	Version: 4.1
	Tags: film, dizi, dinamik, tema panel
*/

/************************************************
*	BODY					*
************************************************/
body {background: #272727 url(images/bg.png) repeat-x;color: #333333;font-size: 13px;font-weight:normal;font-family: Arial, Helvetica, sans-serif;margin: 0px auto 0px;padding: 0px;}
a, a:visited {color: #585858;text-decoration: none;}
a:hover {color: #C6E633;text-decoration: underline;}	
a img {border: none;}
a:focus, a:hover, a:active {outline: none }
li { list-style:none; }
ul{ list-style:none; }
ul a {color:#ccc;}
blockquote {background: #0f0f0f;margin: 0px 25px 15px 25px;color:#818181;padding: 10px 10px 0px 10px;border: 1px solid #1f1f1f;text-align: justify;}
code { background: #121212; padding:1px;}
.right {float:right;overflow:hidden;}
.left {float:left;overflow:hidden;}
.clear {clear: both;}
.clearfix:after {content:".";display:block;height:0;clear:both;visibility:hidden;}
.clearfix {display:inline-block;}
.clearfix {display:block;}

/************************************************
*	@FONT FACE				*
************************************************/
@font-face {
  font-family: 'Oswald';
  font-style: normal;
  font-weight: normal;
  src: local('Oswald '), local('Oswald'), url('font/oswald.woff') format('woff');
}

/************************************************
*	ANABOLUM	    		*
************************************************/
#wrap {width: 980px;margin: -10px auto 0px;padding: 0px;}
@media screen and (max-width: 600px) {
}
.leftC {float:left;width:722px;min-height:395px;clear:left;margin-left:26px;}
.filmborder {width:730px;float:left;height:auto;margin-left:-25px;padding: 0px;border:1px solid #191919;margin-bottom:10px;}
.filmcontent {width:728px;float:left;height:auto;padding: 0px;background:#191919;border:1px solid #333333;}
.filmcontent ul { margin:0px 5px 2px 15px; padding:5px 10px 5px 10px;font-size:12px;font-weight:bold;}
.filmcontent li {list-style:square;color:#ccc;}
.filmcontent li a {}
.filmcontent .tagcloud {margin:5px;padding:5px;}
.filmcontent .postform, select {margin:5px 5px 5px 8px;padding:5px;width:98%;background:#242424;border:1px solid #323232;color:#ccc;}

/************************************************
*	ANABOLUM12	    		*
************************************************/
#wrap12 {width: 980px;margin: -10px auto 0px;padding: 0px;}
@media screen and (max-width: 600px) {
}
.leftC12 {float:left;width:722px;min-height:395px;clear:left;margin-left:26px;}
.border {margin-top:10px;width:802px;height:auto;margin-left:auto;margin-right:auto;padding: 0px;border:1px solid #191919;}
.content {width:800px;height:auto;padding: 0px;background:#191919;border:1px solid #333333;}
.content ul { margin:0px 5px 2px 15px; padding:5px 10px 5px 10px;font-size:12px;font-weight:bold;}
.content li {list-style:square;color:#ccc;}
.content li a {}
.content .tagcloud {margin:5px;padding:5px;}
.content .postform, select {margin:5px 5px 5px 8px;padding:5px;width:58%;background:#242424;border:1px solid #323232;color:#ccc;}

/************************************************
*	MANSET		     		*
************************************************/
.filmslayt {width:976px;float:left;height:auto;padding:0px;margin:1px;border:1px solid #191919;margin-bottom:10px;}
.filmslaytc {width:974px;float:left;height:auto;padding:0px;border:1px solid #333333;background:#191919;}
.ozet {margin:-24px 0px 0px 2px;width:97%;text-align:center;color:#ccc;font-size:11px;background:#242424;opacity:0.8;filter:alpha(opacity=80)}
#myslides{background:#121212;}
.stepcarousel{position: relative;overflow: scroll;width: 940px;height: 150px;margin: 0px 14px 0px 14px;}
.stepcarousel .belt{position: absolute;left: 0;top: 0;margin-left:3px;}
.stepcarousel .panel{float: left;overflow: hidden;margin: 4px 16px;width:114px;background:#14181a;height:140px;border:1px solid #333333;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}
.stepcarousel .panel img{background:#040404;margin: 1px 1px 1px 2px;padding:0px 0px;}	
.stepcarousel .panel:hover {background:#F88B00;border:1px solid #F88B00;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}
.filmcontent .stepcarousel {position: relative;overflow: scroll;width: 693px;height: 150px;margin: 0px 14px 0px 14px;}
.filmcontent .stepcarousel .belt{position: absolute;left: 0;top: 0;margin-left:0px;}
.filmcontent .stepcarousel .panel{float: left;overflow: hidden;margin: 4px 17px 4px 25px;width:114px;background:#14181a;height:140px;border:1px solid #333333;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}
.filmcontent .stepcarousel .panel:hover {background:#F88B00;border:1px solid #F88B00;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}

/************************************************
*	DUBLAJ      								*
************************************************/
.tr-dublaj {position:absolute;background:url(images/tr.png) no-repeat;width:65px;height:65px;margin:-3px 0 0 -5px;}
.tr-altyazi{position:absolute;background:url(images/altyazi.png) no-repeat;width:65px;height:65px;margin:-3px 0 0 -5px;}
	
/************************************************
*	UST NAVBAR     									*
************************************************/
.inde {background:url(images/sprite.png) -285px -21px no-repeat;width:35px;padding:0px 0px 0px 20px;}
.favo {background:url(images/sprite.png) -285px -2px no-repeat;width:35px;padding:0px 0px 0px 20px;}
.cikis {background:url(images/sprite.png) -285px -40px no-repeat;width:35px;padding:0px 0px 0px 20px;}

#topnavbar {width: 1003px;height: 30px;color: #FFFFFF;margin-left:-14px;padding: 0px;margin-top:11px;border-top:1px solid #151515;}
#topnavbar a, #topnavbar a:visited {font-size: 11px;font-weight: bold;color: #FFFFFF;text-decoration: none;}
#topnavbar a:hover {text-decoration: underline;}
#topnavbar p {font-size: 11px;font-weight: bold;padding: 0px;margin: 0px;}
#topRight {float:right;font-size:11px;height:20px;margin-top:5px;}
.topnavbarleft {width: 550px;float: left;margin: 0px;padding: 8px 0px 0px 10px;}
.topnavbarright {float: right;font-size:11px;margin: 0px;padding: 7px 10px 0px 0px;text-align: right;}	
.topnavbarright a {margin-left:24px;padding-left:20px;}	
.topnavbarright a:hover {color:#4FD5D5;}
	
/************************************************
*	HEADER	 									*
************************************************/
#header {width: 1003px;height: 85px;color: #FFFFFF;font-size: 11px;margin: 0px;margin-left:-14px;padding: 0px;overflow: hidden;}
#header h1 {color: #FFFFFF;font-size: 36px;font-family: Georgia, Times New Roman;font-weight: normal;margin: 0px;padding: 15px 0px 0px 20px;text-decoration: none;}
#header h1 a, #header h1 a:visited {color: #FFFFFF;font-size: 36px;font-family: Georgia, Times New Roman;font-weight: normal;margin: 0px;padding: 0px;text-decoration: none;}
#header h1 a:hover {color: #FFFFFF;text-decoration: none;}
#header h3 {color: #A91B33;font-size: 16px;font-family: Arial, Tahoma, Verdana;font-weight: normal;margin: 0px;padding: 0px;}
#header p {color: #FFFFFF;padding: 0px 0px 5px 20px;margin: 0px;line-height: 20px;}
.headerleft {width: 240px;float: left;font-size: 14px;margin-top: 5px;margin-left:15px;padding: 0px;}
.headerleft a img {border: none;margin: 0px;padding: 0px;}
.headerright {width: 230px;height: 60px;float: right;margin-top: 6px;font-weight: bold;}
.arama {float:left;width:450px;height:38px;margin-top:17px;font-size:11px;}

/************************************************
*	NAVBAR     								*
************************************************/
#navbarborder {width: 977px;height: 31px;border:1px solid #191919;margin-top:-18px;padding: 0px;border-radius: 3px;}
#navbar {background: url(images/navbar.png);width: 976px;height: 30px;color: #fff;margin: 0px;padding: 0px;border-right:1px solid #333;background-repeat: repeat-x; font-family: Oswald, Arial, Helvetica, sans-serif;}
#navbarleft {width: 100%;float: left;margin: 0px;padding: 0px;overflow:hidden;}
#nav {margin: 0px;padding: 0px;}
#nav ul {float: left;list-style: none;margin: 0px;padding: 0px;}
#nav li {float: left;list-style: none;margin: 0px;padding: 0px;border-right:1px solid #181818;border-left:1px solid #333333;}
#nav li a, #nav li a:link, #nav li a:visited {color: #ccc;display: block;font-size: 11px;font-weight: normal;line-height: 24px;text-transform: uppercase;padding: 4px 10px 2px 14px;}
#nav li a:hover, #nav li a:active {color: #ccc;background:#333333;margin-top: 0px;padding: 4px 10px 2px 14px;text-decoration: none;}
#nav li li a, #nav li li a:link, #nav li li a:visited {background: #333333;width: 130px;color: #ccc;font-size: 11px;font-family: 'Oswald', arial, serif;font-weight: normal;text-transform: uppercase;float: none;margin: 0px;padding: 3px 5px 3px 5px;border-bottom: 1px solid #242424;border-left: 1px solid #161616;border-right: 1px solid #242424;border-top: 1px solid #414141;}
#nav li li a:hover, #nav li li a:active {background: #333333;color: #ccc;padding: 3px 5px 3px 5px;border-bottom: 1px solid #242424;border-left: 1px solid #191919;border-right: 2px solid #97C000;border-top: 1px solid #414141;}
#nav li ul.sub-menu {float:left;margin-left:-2px;padding:0px;border:1px solid #0e0e0e;width:142px;box-shadow:0px 0px 2px 2px #111111;}	
#nav li ul {z-index: 9999;position: absolute;left: -999em;height: auto;min-width: 142px;overflow:hidden;margin: 0px;padding: 0px;}
#nav li li {border:none;}
#nav li ul a {width: 140px;}
#nav li ul a:hover, #nav li ul a:active { }
#nav li ul ul {margin: -32px 0 0 171px;}
#nav li:hover ul ul, #nav li:hover ul ul ul, #nav li.sfhover ul ul, #nav li.sfhover ul ul ul {left: -999em;}
#nav li:hover ul, #nav li li:hover ul, #nav li li li:hover ul, #nav li.sfhover ul, #nav li li.sfhover ul, #nav li li li.sfhover ul {left: auto;}
#nav li:hover, #nav li.sfhover { position: static;}

/************************************************
*	CONTENT						     		    * 
************************************************/
#content {width: 980px;margin: 0px auto 0px;padding: 10px 0px 0px 0px;line-height: 18px;color:#fff;font-size:12px;}
#content h1 {color: #fff;font-size: 14px;font-family: 'Oswald', arial, serif;font-weight: normal;margin-top:2px;padding: 8px 0px 8px 8px;background:#161616;border-bottom: 1px solid #1e1e1e;text-transform:uppercase;}
#content h1 a  {color: #fff;font-size: 14px;font-weight: normal;font-family: 'Oswald', arial, serif;}
#content h1 a:hover {color: #A91B33;text-decoration: none;}
	
#content h1 .Breadcrumb{float:right;padding-right: 10px;color:#545454;font-size:10px;margin-left:-5px;}
#content h1 .Breadcrumb a{font-size:10px;color:#515151;font-family: 'Oswald', arial, serif;text-transform:none;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}
#content h1 .Breadcrumb a:hover {color: #A91B33;text-decoration: none;}
	
#content .yazitip {height:21px;background:url(images/naka.jpg) repeat-x;margin:0px;padding: 9px 0px 8px 8px;border-bottom: 1px solid #131313;color:#fff;font-family: 'Oswald', arial, serif;font-size: 14px;font-weight: normal;text-transform:none;}
#content .yazitip span {float:right;padding-right: 10px;color:#545454;font-size:10px;margin-left:-5px;text-transform:uppercase;}
#content .yazitip span a{font-size:10px;color:#515151;font-family: 'Oswald', arial, serif;text-transform:none;}

#content .tam{height:21px;background:url(images/naka.jpg) repeat-x;margin:0px;padding: 9px 0px 8px 8px;border-bottom: 1px solid #131313;color:#ccc;font-family: 'Oswald', arial, serif;font-weight: normal;text-transform:uppercase;}
#content .tam ul , #content .yazitip ul {float: left;list-style: none;margin: -6px 0px 0px -3px;padding: 0px;}
#content .tam li.menu-item, #content .yazitip li.menu-item {background:url(images/tam-nav.png) no-repeat right;margin: -2px -11px 0px 0px;padding: 0px 11px 0px 0px;float: left;list-style: none;}
#content .tam li.menu-item a, #content .yazitip li.menu-item a {background:url(images/sprite.png) 0 -133px no-repeat;color: #929292;display: block;font-size: 11px;font-weight: normal;line-height: 24px;text-transform: uppercase;padding: 5px 20px 4px 29px;}
#content .tam li.menu-item a:hover, .tam li.current-menu-item a:active, #content .yazitip li.menu-item a:hover, #content .yazitip li.current-menu-item a:active {background:url(images/sprite.png) 0 -103px no-repeat;color: #ccc;margin: 0px 10px 0px 0px;padding: 5px 10px 2px 29px;text-decoration: none;}

#content .tam li.current-menu-item, #content .yazitip li.current-menu-item {background:url(images/tam-nav.png) no-repeat right;margin: -2px -11px 0px 0px;padding: 0px 11px 0px 0px;float: left;list-style: none;}
#content .tam li.current-menu-item a, #content .yazitip li.current-menu-item a {background:url(images/sprite.png) 0 -103px no-repeat;color: #ccc;display: block;font-size: 11px;font-weight: normal;line-height: 24px;text-transform: uppercase;padding: 5px 20px 4px 29px;}
#content .tam li.current-menu-item a:hover, .tam li.current-menu-item a:active, #content .yazitip li.current-menu-item a:hover, #content .yazitip li.current-menu-item a:active {background:url(images/sprite.png) 0 -103px no-repeat;color: #ccc;margin: 0px 10px 0px 0px;padding: 5px 10px 2px 29px;text-decoration: none;}


.begen {margin:2px 12px 0px 0px;float:right;}
.begen .likeThis {border-radius:5px;font-family: 'helvetica', arial, serif;display: block;font-weight:bold;color: #ABABAB;background: url(images/sprite.png) no-repeat 0 -20px;margin:-4px -4px 0px 0px;height: 20px;padding: 0px 6px 0 25px;cursor:pointer;}
.begen .likeThis:hover,
.begen .likeThis.done {background: url(images/sprite.png) no-repeat -136px -20px;text-decoration:none;}
.begen .likeThis.done {color: #E2C023;cursor:default;}

#content h2 {background:#141414;border: 1px solid #1e1e1e;color: #FFFFFF;font-size: 13px;font-family: Arial, Tahoma, Verdana;font-weight: bold;text-transform: uppercase;margin: 0px 0px 6px 0px;padding: 3px 0px 3px 10px;}
#content h3 {background:#141414;border: 1px solid #1e1e1e;color: #FFFFFF;font-size: 12px;font-family: Arial, Tahoma, Verdana;font-weight: bold;text-transform: uppercase;margin: 0px 0px 10px 0px;padding: 3px 0px 3px 10px;}	
#content h4 {background:#141414;border: 1px solid #1e1e1e;color: #FFFFFF;font-size: 10px;font-family: Arial, Tahoma, Verdana;font-weight: bold;text-transform: uppercase;margin: 0px 0px 10px 0px;padding: 3px 0px 3px 10px;}

#content img.wp-smiley {float: none;border: none;margin: 0px;padding: 0px;}
#content img.wp-wink {float: none;border: none;margin: 0px;padding: 0px;}
#content blockquote p {margin: 0px;padding: 0px 0px 15px 0px;}

/* 404 */
.olmayansayfa {font-size:72px;height:250px;color:#888888;text-shadow:1px 1px #111111;font-weight:bold;padding-top:150px;text-align:center;}
.olmayansayfa p {font-size:18px;padding-top:5px;color:#666666;}

/************************************************
*	SIDEBAR		    	        	        * 
************************************************/
#sidebar {width:232px;float:right;}
#content .sidebarborder {float:left;width:229px;overflow:hidden;border:1px solid #191919;}
#content .sidebar-right {width: 227px;overflow:hidden;float:left;background:#1D2729;border:1px solid #333333;}
#content .sidebar-right h2 {display: block;float: left;width: 219px;padding: 7px 0px 7px 6px;margin: 0px 0px 0px 0px;overflow:hidden;text-transform: none;font-family: 'Oswald', arial, serif;font-size: 16px;font-weight: normal;text-align: left;color: #FAFAFA;background:#191919;}
.newsletter {background: url(images/hepsi.png) 0px -152px no-repeat;float: left;width: 238px;height: 48px;margin: 0px -15px 0px -5px;}

#sidebar li {float: left;text-align: left;margin: 0px;width: 280px;padding: 0px;color:#e0e0c8;}
#sidebar li a{width: 280px;display: block;padding:5px 5px 5px 19px;text-decoration: none;overflow:hidden;text-align: left;border-top: 1px solid #494848;font-family: 'Oswald',arial,sans-serif;background-image:url(images/nav-bullet.gif);background-position:left center ;background-repeat:no-repeat;color:#bdbd8c;}
#sidebar li a:hover, .arrow li a:active {width: 280px;text-decoration:underline;display: block;overflow:hidden;text-align: left;color:#fff;border-top: 1px solid #494848;padding:5px 5px 5px 19px;background-image:url(images/nav-bullet-hov.gif);background-position:left center ;background-repeat:no-repeat;background-color:#282828;}
#sidebar ul li {text-align: left;font-weight: 400;color:#e0e0c8;margin: 0px;padding: 0px;}
#sidebar ul {list-style-type: none;text-align: left;margin: 0px;padding: 0px;color:#e0e0c8;}
#sidebar ul li a{width: 280px;display: block;padding:5px 5px 5px 19px;text-decoration: none;overflow:hidden;text-align: left;border-top: 1px solid #494848;background-image:url(images/nav-bullet.gif);background-position:left center ;background-repeat:no-repeat;color:#bdbd8c;}
#sidebar ul li a:hover, .arrow ul li a:active {width: 280px;display: block;padding:5px 5px 5px 19px;text-decoration: none;overflow:hidden;text-align: left;border-top: 1px solid #494848;background-image:url(images/nav-bullet-hov.gif);background-position:left center ;background-repeat:no-repeat;color:#fff;}

#sidebar .tagcloud {background:#181818;padding:5px;}
#sidebar #searchbox {width:110px;border-radius:4px;margin-bottom:8px;}
#sidebar .textwidget {color:#919191;padding:0px;font-weight:400px;background:#191919;}
#sidebar #cat {width:93%;}

/************************************************
*	FOOTER     								*
************************************************/
#footer {background: #161616;min-height: 60px;padding: 0px;margin:0px;border-top:1px solid #292929;font-family: 'Oswald', arial, serif;}
#footer p {color: #FFFFFF;font-size: 11px;font-family: 'Oswald', arial, serif;margin: 0px;padding: 9px 0px 0px 0px;}
#footer a, #footer a:visited {color: #cccccc;text-decoration: none;font-family: 'Oswald', arial, serif;}
#footer a:hover {color: #FFFFFF;text-decoration: underline;}
#footer span {font-size:11px;color:#999999;font-weight:bold;font-family: Arial, Helvetica, sans-serif;}

.footer {width:1003px;padding-bottom:15px;margin:0 auto;}
.footborder {height:1px;background:#000000;}
.footeright { float:right; color: #121212; width:60px; color: #cccccc; margin-top:17px;}
.footerleft { float:left; width:750px; color: #cccccc; margin:17px 0px 0px 15px; font-family: 'Oswald', arial, serif;}	

/************************************************
*	ARAMA FORMU									*
************************************************/
#searchform {margin: 0px;padding: 0px;overflow: hidden;display: inline;}
#searchbox {	width: 270px;color: #242424;font-size: 12px;font-family: 'Oswald', arial, serif;font-weight: normal;margin: 7px 10px 10px 10px;padding: 3px 0px 3px 5px;border:0px;display: inline;}
#searchbox:hover { border:0px;}
#searchbutton {background:url(images/hepsi.png) -431px -42px;color: #FFFFFF;width:75px;height:28px;margin-left:5px;font-weight: bold;border:0px;cursor:pointer;}
#searchbutton:hover {border:0px}	
#subscribe {margin: 0px;padding: 5px 0px 0px 0px;overflow: hidden;}
#subbox {background: #ffffff !important;width: 125px;color: #202020;font-size: 11px;font-family: 'Oswald', arial, serif;font-weight: normal;margin: 8px 0px 0px 15px;padding: 3px 0px 3px 5px;border: 1px solid #ffffff;display: inline;}
#subbutton {background: url(images/hepsi.png) -293px -126px no-repeat;color: #FFFFFF;font-size: 10px;margin: 0px 0px 0px 13px;padding: 0px 3px 2px 3px;height:32px;width:60px;border:none;cursor:pointer;}
	
#author, #url {background: #242424 !important;width: 250px;color: #717171;font-size: 12px;font-weight: normal;margin: 3px 0px 0px 0px;padding: 3px 0px 3px 5px;border:0px;display: inline;}
#email, #url {background: #242424 !important;width: 250px;font-size: 12px;font-weight: normal;margin: 3px 0px 0px 0px;padding: 3px 0px 3px 5px;border:0px;display: inline;}
#submit {background: #7B7B7B;color: #FFFFFF;font-size: 11px;font-family: Arial, Tahoma, Verdana;margin: 0px;padding: 3px 3px 2px 3px;font-weight: bold;border-top: 1px solid #8B8B8B;border-right: 1px solid #7B7B7B;border-left: 1px solid #7B7B7B;border-bottom: 1px solid #8B8B8B;cursor:pointer;}

/************************************************
*	YORUM										*
************************************************/
#comment {background: #0C0C0C;width: 436px;height:120px;color: #717171;font-size: 12px;font-weight: normal;margin: -5px 0px 0px 0px;padding: 5px;border: 1px solid #1C1C1C;display: inline;border-radius:6px;}
#comment:focus{border:1px solid #143C56;}

#gonder {background: #0C0C0C;color: #FFFFFF;font-size: 11px;float:right;font-family: Arial, Tahoma, Verdana;margin: 0px;width:150px;height:30px;font-weight: bold;border: 1px solid #1c1c1c;cursor:pointer;}
#gonder:hover{border:1px solid #143C56;}
#gonder:active {border:1px solid #184A6A;}

.yborder {background:url(images/hepsi.png) 0px -208px no-repeat;padding:0px;width:250px;height:36px;overflow:hidden;border-radius:6px;}
.yborder label {float:left;margin:9px 10px 0px 10px;padding:0px;width:20%;font-size:12px;font-weight: bold;color:#464746;}
.yborder input {width:70%;height:21px;overflow:hidden;border:0px;background: #222222;float:left;margin:0px;padding:0px;font-size:12px;font-weight: normal;color:#cecece;line-height:20px;}

#commentform input {width: 168px;padding: 1px 4px 3px 4px;margin: 6px 0px 0px 0px;border-radius:3px;color:#A9A9A9;}
#commentform {margin: 5px 10px 0px 0px;}
#respond:after {content: "."; display: block; height: 0px; clear: both; visibility: hidden;}
#commentform p {margin: 5px 0px 5px 0px;}
#commentform #submit {margin: 0px;float: left;}

.alt {margin:0px;padding: 10px;}

.commentlist {margin: 0px;padding: 0px;width:707px;}
.commentlist ol {margin: 0px;padding: 10px;}
.commentlist li {font-weight: bold;margin: 15px 0px 10px;padding: 10px 5px 10px 10px;list-style: none;border-radius:6px;}
.commentlist li ul li {font-size: 12px;margin-right: -5px;margin-left: 10px;}
.commentlist li .avatar { background: #484848;width:30px;height:30px;float: right;border: 1px solid #424242;padding: 2px;border-radius:4px;}
.commentlist cite, .commentlist cite a {font-weight: bold;font-style: normal;font-size: 12px;}
.commentlist a { color:#818181; }
.commentlist .url {color:#E6E9D7}
.commentmetadata {font-weight: normal;}
.cancel-comment-reply {margin-left:10px;font-weight: bold;}
.commentlist p {margin: 10px 5px 10px 0px;padding: 0px;color:#707070;font-size:12px;font-weight: bold;text-transform: none;}
.commentlist p:first-letter {text-transform:uppercase;}
.comment-meta {color:#818181;}
.comment-zaman {color:#D8D8D8;font-style:italic;}

.children { margin: 0px;padding: 0px;}
.nocomments {text-align: center;margin: 0px;padding: 0px;}
.commentmetadata {font-size: 10px;margin: 0px;display: block;}
.navigation {display: block;color:#ccc;text-align: center;margin-top: 10px;margin-bottom: 10px;}
.alignright {float: right;}
.alignleft {float: left;}
.thread-alt {background: #1c1c1c;margin: 0px;padding: 0px;}
.thread-even {background: #242424;margin: 0px;padding: 0px;}
.even, .alt {border: 1px dotted #333333;margin: 0px;padding: 0px;}

/************************************************
*	FILM LISTEME	*
************************************************/
.moviefilm {width:129px;height:175px;float:left;background:#242424;color:#005baa;font-size:11px;font-weight:normal;text-align:center;padding-top:3px;margin:7px;margin-bottom:20px;border-top:1px solid #333333;border-left:1px solid #333333;border-right:1px solid #333333;font-family: 'Oswald', arial, serif;border-radius:4px;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}
.moviefilm:hover{ background: #F88B00;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}
.moviefilm img{margin:2px 0px -1px 0px;width:119px;height:125px;}
.movief{width:129px; height:30px;float:left;color:#005baa;font-size:11px;font-weight:normal;background:#242424 url(images/filmalt1.png) no-repeat;overflow:hidden;padding-top:4px; line-height:14px;font-family: 'Oswald', arial, serif;}
.movief a{color:#cecece;}
.movies{width:131px; height:24px;float:left;color:#ccc;font-size:11px;font-weight:normal;overflow:hidden;margin-left:-1px;background: url(images/filmalti2.png) no-repeat;font-family: 'Oswald', arial, serif;}
.movies a{color:#ffffff;}
.moviefilm .yeni {position:absolute;margin:-6px 0px 0px 3px;padding:0px;background: url(images/yeni.png) no-repeat;width:37px;height:18px;}
.moviefilm .likeThis {display: block;}
.moviefilm .likeThis:hover,
.moviefilm .likeThis.done {text-decoration:none;}
.moviefilm .likeThis.done {color: #CCCCCC;cursor:text;}

/************************************************
*	REKLAM		*
************************************************/
#header_sag{z-index:44003;margin:0 auto;position:fixed;top:99px;margin-left:999px;_position:absolute;_top:expression(eval(document.body.scrollTop));}
#header_sol{z-index:44003;margin:0 auto;position:fixed;top:99px;margin-left:-115px;_position:absolute;_top:expression(eval(document.body.scrollTop));}
.bireklam { width: 730px; float:left; text-align:center; height:90px; background:#191919; margin-left:-25px; padding: 0px; border:1px solid #191919; margin-bottom:10px;}
.filmreklam {float:right;width:120px;margin:7px 0px 5px;padding-right:12px;}
#filmoncereklam {margin-top:5px;margin-bottom:15px;}
.reklamgec {font-size:12px;font-family: 'Oswald', arial, serif;color:#515151;}
.reklamgec:hover {color:#A91B33;}

/************************************************
*	EN COK IZLENENLER							*
************************************************/
.fimanaortala {margin-top:-9px;}
.filmana {margin-top:1px;margin-left:0px;width:225px;height:105px;background:#161616;border:1px solid #1D1D1D;float:left;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}
.filmana:hover{border:1px solid #323232;background:#101010;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}
.filmsol {margin-top:8px;margin-left:7px;width:91px;float:left;}
.filmsol img {background:#282828;padding:2px;border:2px solid #111111;border-radius:3px;}
.filmsag {margin-top:5px;width:115px;float:left;}
.filmsag a {font-size:12px;color:#F88B00;font-family: 'Oswald', arial, serif;}
.filmsagalt {float:left;height:30px;}	  
.filmsagicerik {width:125px;height:50px;font-size:11px;font-weight: normal;font-family: 'Oswald', arial, serif;color:#555555;line-height: 14px;margin-left:-7px;margin-top:5px;}
.filmsagicerik a {font-size:11px;font-weight: normal;color:#444444;text-decoration:none;}
.filmsagicerik p {margin-top:5px;padding:0px;}
.filmizleme {float:right;height:20px;width:64px;margin-top:-7px;}	
.filmsagbaslik {width:125px;height:17px;overflow: hidden;margin-top:5px;margin-left:-8px;line-height:16px;}

/************************************************
*	SINGLE										*
************************************************/
.filmicerik {margin:-10px 0 0px 8px;width:711px;height:auto;overflow:hidden;color:#818181;font-weight:normal;}
.filmicerik object, .filmicerik embed{width: 711px;}
.filmicerik2 {margin-left:8px;margin-top:0px;width:711px;height:auto;overflow:hidden;color:#939393;}
.filmicerik2 a {color:#C6E633;}
.pagele {background:#0F0F0F;width:520px;margin:-10px 0 0 104px;border:1px solid #1E1E1E;}
.pageler {margin:5px 0 3px 11px;text-align:center;}	

.filmalti { width:720px;height:auto;margin-left:8px;margin-top:-10px;background:#282828;}
.filmalti p {margin:6px 0;}
.filmaltiimg {float:left;width:120px;height:150;}
.filmaltiimg img {border-radius:4px;width:125px;height:160px;border:3px solid #333333;margin-top:15px;margin-bottom:10px;}
.filmaltiaciklama {font-size:12px;line-height:14px;font-family: Arial, Tahoma, Verdana;font-weight:bold;color:#515151;width:570px;height:auto;float:left;margin:15px 0px 10px 20px;}
.filmaltiaciklama span {color:#4D6A70;font-size:12px;width:70px;float:left;}
.filmaltiaciklama a {color:#666A6D;font-size:12px;}
.filmaltiaciklama span a {color:green;font-size:16px;}
.editpostlink {background:#242424;float:left;font-weight:bold;font-size:11px;width:115px;margin:-14px 0px 10px 8px;text-align:center;border-bottom-right-radius:1em;border-bottom-left-radius:1em;}
.editpostlink a {color:#ABC72C;text-decoration:none;}
.editpostlink:hover {background:#333333; }

#alt {background:url(images/hepsi.png) 0 0 no-repeat;width:713px;height:38px;margin:-9px 0px 0px 8px;border:none;}
.google {float:left;width:60px;margin:9px 0px 0px 5px;}
.facebok {float:left;width:390px;height:31px;margin:7px;}
.izlenme {float:right;margin-top:8px;font-family:Oswald, arial, sans-serif;}
.izlenme span {color:#cccccc;font-size:10px;}
.izlenme .ok {height:24px;background:url(images/tv.png) no-repeat;padding:1px 0px 0px 35px;font-size:18px;}
.facepaylas {float:right;width:144px;height:27px;margin:6px 6px 0px 20px;}
.toplamfilm {font-size: 10px; color:#8a8a93; padding: 0px; margin-top: 1px; font-weight:bold;}
.konuozet {width:580px;margin-top:-7px;}
#parca{width:490px;height:21px;}
#parca a{font-family: Tahoma, Geneva, sans-serif;font-size: 12px;display: inline;padding: 2px 0 2px 0;margin-top: 20px;color:#fff;margin-left: 1px;margin-right: 1px;border:1px solid #005D88; }
#parca p{background:#002B49;display: inline;padding-top: 1px;padding-bottom: 1px;padding-left: 5px;font-family: Tahoma, Geneva, sans-serif;font-size: 12px;text-decoration: none;color: #fff;border:1px solid #114265;padding-right: 5px;}
#parca a:hover {border:1px solid #F2F5F7;text-decoration: none;}

/************************************************
*	ICONLAR										*
************************************************/
.rss-icon {background:url(images/html-icon.png) 0px 0px no-repeat;width:64px;height:64px;border:0px;margin:0px;padding:0px;display:block;text-indent:-9999px;overflow:hidden;float:left;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}
.rss-icon:hover {background:url(images/html-icon.png) 0px -68px no-repeat;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}
.fb-icon {background:url(images/html-icon.png) -147px 0px no-repeat;width:64px;height:64px;border:0px;margin:0px;padding:0px;display:block;text-indent:-9999px;overflow:hidden;float:left;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}
.fb-icon:hover {background:url(images/html-icon.png) -147px -68px no-repeat;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}
.tw-icon {background:url(images/html-icon.png) -72px 0px no-repeat;width:64px;height:64px;border:0px;margin:0px;padding:0px;display:block;text-indent:-9999px;overflow:hidden;float:left;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}
.tw-icon:hover {background:url(images/html-icon.png) -72px -68px no-repeat;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}
.tumunugor {float:right;}	
.tumunugor a{background: url(images/html-icon.png) 0px -141px no-repeat;width:68px;height:23px;text-indent:-9999px;overflow:hidden;display:block;margin-top:-3px;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}
.tumunugor a:hover {background: url(images/html-icon.png) -77px -141px no-repeat;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}
.tumunugurortala {padding-right:12px;}

/************************************************
*	PAGENAVI									*
************************************************/
.wp-pagenavi {margin:9px 0 10px;margin-left:4px;padding-bottom:1px;float:left;font-family: 'Oswald', arial, serif;}
.wp-pagenavi a, .wp-pagenavi span {border: 1px solid #373737;padding: 3px 5px;margin: 0 2px;font-size:11px;background: #2F2F2F;font-family: 'Oswald', arial, serif;border-radius: 5px;-moz-border-radius: 5px;-webkit-border-radius: 5px;color:#cccccc;}
.wp-pagenavi a:hover, .wp-pagenavi span.current {border-color: #666;}
.wp-pagenavi span.current {font-weight: bold;color:#ccc;}
.wp-pagenavi.post-navi a span {border: 1px solid #373737;padding: 3px 5px;margin: 0 2px;font-size:11px;background: #2F2F2F;font-family: 'Oswald', arial, serif;border-radius: 5px;-moz-border-radius: 5px;-webkit-border-radius: 5px;color:#cccccc;}
.wp-pagenavi.post-navi span,
.wp-pagenavi.post-navi a span:hover {border-color: #666;}
.wp-pagenavi.post-navi a {padding: 0;margin: 0;background: none;border: 0;}

/************************************************
*	PART SISTEMI								*
************************************************/
.keremiya_part {	float:left;margin:-4px 0px -7px -3px;padding: 0em 1em 0.2em;font-size: 11px;list-style-type: none;line-height:28px;text-align: left;font-family: tahoma;width:88%;}
.keremiya_part a span {background-color: #444444;text-transform:uppercase;color: #fff;text-decoration: none;font-size: 11px;font-family: tahoma;border-radius: 4px;margin-right: 0px;padding: 5px;text-shadow:1px 1px #414141;transition: all .3s linear;-o-transition: all .3s linear;-moz-transition: all .3s linear;-webkit-transition: all .3s linear;}
.keremiya_part span {background-color: #D4E104;text-transform:uppercase;text-decoration: none;color: #000;text-decoration: none;font-size: 11px;font-family: tahoma;border-radius: 4px;margin-right: 0px;padding: 5px;text-shadow:1px 1px #c8e352;}
.keremiya_part a span:hover {background-color: #505050;}
.keremiya_part a {padding: 0;margin: 0;background: none;border: 0;text-decoration: none;}
span.keros{background-color: #222222;color: #555555;text-decoration: none;text-transform:none;font-size: 11px;font-family: tahoma;border-radius: 4px 4px 4px 4px;margin-left: 3px;padding: 5px;text-shadow:none;}
span.keros a:hover {color:#555555;}
/************************************************
*	KARISIK										*
************************************************/
.cuntent { list-style: square; }
.cuntent a {color:#C6E633;}
.facebookbox {background: #242424;float: left;width: 238px;min-height: 62px;margin: -4px 0px -6px -5px;}

/************************************************
*	UYELIK										*
************************************************/
input#user_login, input#contactSubject {background:#0F0F0F;padding:3px;border:1px solid #242424;color:#ccc;}
input#user_login:focus, input#contactSubject:focus {background:#171717;border:1px solid #282828;}
input#user_email{background:#0F0F0F;padding:3px;border:1px solid #242424;color:#ccc;}
input#user_email:focus {background:#171717;border:1px solid #282828;}
label#user {padding:4px;background:#121212;border:1px solid#313131;}
label#pwd{padding:4px;background:#121212;border:1px solid#313131;}
label#mail {padding:4px;background:#121212;border:1px solid#313131;}
input#user-submit {background:#D08F11;border:1px solid #FEA700;cursor:pointer;}
input#log {background:#0F0F0F;padding:3px;border:1px solid #242424;color:#ccc;}
input#log:focus {background:#171717;border:1px solid #282828;}
input#pwd {background:#0F0F0F;padding:3px;border:1px solid #242424;color:#ccc;}
input#pwd:focus {background:#171717;border:1px solid #282828;}
input.button {background:#B7DF00;border:1px solid #AEC640;cursor:pointer;border-radius:3px}
p.textarea {float:right;}
.contactform {float:left;width:180px;}
.textarea {float:left;margin-top:10px;width:520px;}
#btn-send {background:#B7DF00;border:1px solid #AEC640;float:right;margin-top:-2px;cursor:pointer;border-radius:3px}
#commentsText {width:520px;height:90px;background:#0F0F0F;padding:3px;border:1px solid #242424;color:#ccc;}
.user-left{float:left;width:138px;padding:8px 5px 5px 8px;}
.user-right{float:left;width:250px;padding:8px 0px 5px 10px;margin-top:-1px;min-height:235px;background:url(images/user-profil-ciz.png) repeat-y left;}
.user-right a, .user-left a {color:#C1CD06;}
.user-right ul, .user-left ul {margin:0px;padding:0px;}
.user-right li{color:#fff;list-style:none;}
.user-right li span {color:#666666;}
.user-left li {list-style:none;float:left;border:1px solid #0f0f0f;margin:2px;border-radius:4px;}
.user-left li a{background:#181818;text-decoration:none;border:1px solid #282828;width:115px;padding:2px 7px 2px 7px;float:left;border-radius:4px;}
.user-left li a:hover {background:#9BC100;color:#000;border:1px solid #C1E628;}
.user-avatar {margin:10px;}
.user-avatar img {border:6px solid #0f0f0f;}
.user-avatar a {color:#BF8007;}
.profile-options {}
.profile-avatar img {background:#333333;padding:1px;border:2px solid #0f0f0f;border-radius:5px;}
.row {border-top:1px solid #333333;padding:3px;}
.row span {color:#ccc;}
.row a {color:#BF8007;}
.user-comment {float:left;width:300px;padding:8px 5px 5px 2px;}
.user-comment ul {margin:0px;padding:0px;}
.user-comment li{color:#777777;list-style:none;background:#121212;margin-top:5px;padding:5px;border-radius:5px;border:1px solid #101010;}
.user-comment li a{color:#D4E104;}
.user-comment li p {margin:0px;padding:0px;}
.user-basl {background:#303030;width:auto;padding:3px 3px 3px 6px;margin:-5px -5px 2px -5px;border-radius:5px;}
.user-bas {font-size:16px;font-family:arial, sans-serif;font-weight:bold;margin-bottom:10px;}
