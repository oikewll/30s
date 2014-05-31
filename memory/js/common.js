var common={hasClass:function(e,o){return e.className.match(new RegExp("(\\s|^)"+o+"(\\s|$)"))},addClass:function(e,o){this.hasClass(e,o)||(e.className+=" "+o)},removeClass:function(e,o){if(this.hasClass(e,o)){var n=new RegExp("(\\s|^)"+o+"(\\s|$)");e.className=e.className.replace(n,"")}},getOffsetLeft:function(e){for(var o=0,n=e;null!=n&&n!=document.body;)o+=n.offsetLeft,n=n.offsetParent;return o},getOffsetTop:function(e){for(var o=0,n=e;null!=n&&n!=document.body;)o+=n.offsetTop,n=n.offsetParent;return o}},$=function(e){return document.getElementById(e)},gameTime=30,initScore=0,playCout=3,addTime=2,body=document.getElementsByTagName("body")[0],cacheResult,cacheSetinterval;common.exam=["&#xf004e;","&#xf0051;","&#xf0057;","&#xf0059;","&#xf005f;","&#xf0064;","&#xf0066;","&#xf0069;","&#xf006a;","&#xf0075;","&#xf0078;","&#xf007c;","&#xf0083;","&#xf0085;","&#xf0091;","&#xf0095;","&#xf009a;","&#xf00a5;","&#xf00a7;","&#xf00b6;","&#xf019a;","&#xf01af;","&#xf01b0;","&#xf01c7;","&#xf01ca;","&#xf01d4;","&#xf01d5;","&#xf01ef;","&#xf01f0;","&#xf01f3;","&#xf0200;","&#x3432;","&#x3450;","&#x3452;","&#x3453;","&#x3455;","&#x3457;","&#x3459;","&#xf027f;","&#x3432;","&#x3438;","&#x343e;","&#x3448;","&#x344f;","&#x3451;","&#x3452;","&#x3454;","&#x3455;","&#x3456;","&#x3457;","&#x3458;","&#x3459;","&#x345a;","&#x345c;","&#x345d;","&#x345f;","&#x3460;","&#x3461;","&#x3469;","&#x346c;","&#x346d;","&#x346e;","&#x3481;","&#x3485;","&#x3486;","&#xf029d;","&#xf0007;","&#xf003e;","&#xe63e;"],common.countBack=function(){return-1!==gameTime?(10>=gameTime?$("countBack").setAttribute("class","count-back count-alert"):$("countBack").setAttribute("class","count-back"),gameTime--,$("countBack").innerHTML=gameTime,gameTime):void 0},common.playCountNum=function(){return 1===playCout?(playCout="GO!",$("play-cn").innerHTML=playCout,clearInterval(cacheSetinterval),setTimeout(function(){common.createGame(),$("game-detial").parentNode.removeChild($("game-detial"))},500),void 0):(playCout--,$("play-cn").innerHTML=playCout,void 0)},common.cacheIcon=function(){for(var e,o=["images/icon-over-1.png","images/icon-over-2.png","style/icon/icon.woff","style/icon/icon.eot","style/icon/icon.ttf","style/icon/icon.svg"],n=0;n<o.length;n++)e+='<img src="'+o[n]+'" />';var a=document.createElement("div");a.setAttribute("style","display:none;"),a.innerHTML=e,$("game-detial").appendChild(a)},common.createGame=function(){var e=document.createElement("div");e.className="game-content",e.id="game-content",e.innerHTML='<div class="wrapCont" id="wrapCont"><ul class="micon-list micon-advance" id="micon-list"></ul></div><div class="q-link"><span class="q-inner">消失的图案是？</span></div><div class="keyboard" id="keyboard"><p class="kb-top"><span class="square" id="result-0">&#xf003e;</span></p><p class="kb-middle"><span class="square" id="result-1">&#x3451;</span><span class="square" id="result-next">忘了</span><span class="square" id="result-2">&#xf003e;</span></p><p class="kb-bottom"><span class="square" id="result-3">&#x3456;</span></p></div><span class="count-back" id="countBack">30</span>',$("mainboard").appendChild(e),common.starGame()},common.starGame=function(){cacheSetinterval=setInterval(function(){return common.countBack(),0===gameTime?common.creatOverMask():void 0},1e3),common.setTopic();for(var e=$("keyboard").getElementsByTagName("span").length,o=0;e>o;o++)$("keyboard").getElementsByTagName("span")[o].onclick=function(){"忘了"===this.innerHTML?common.setTopic():this.innerHTML===cacheResult?common.showRight():common.showWrong()}},common.refreshGame=function(){$("refresh-game").onclick=function(){$("over-mask").parentNode.removeChild($("over-mask")),$("game-content").parentNode.removeChild($("game-content")),gameTime=30,initScore=0,common.createGame()}},common.creatOverMask=function(){var e=Math.floor(2*Math.random());clearInterval(cacheSetinterval);var o=this.quote(initScore),n=document.createElement("div");n.className="over-mask",n.id="over-mask",n.innerHTML='<div class="mask-wrap"><div class="mask-inner"><div class="icon-over over-'+e+'"></div>'+'<p class="title"><i class="iconfont icon-timeout">&#xe660;</i>时间到啦 :(</p>'+'<p class="score">最终得分是：<span class="red" id="final-score">'+initScore+"</span></p>"+'<p class="quote">“'+o+"”</p>"+'<p class="desc"><a href="javascript:;" class="refresh" id="refresh-game"><i class="iconfont icon-refresh">&#xf0005;</i>再来一次</a></p>'+"</div>"+"</div></div>",body.appendChild(n),document.getElementsByTagName("title")[0].innerHTML="最强右脑—测试得分"+initScore+";“"+o+"”",common.refreshGame()},common.quoteArr={junior:["骚年，还是得继续努力啊，你饿不饿我下面给你吃？","呐，做人呢~最重要是认真，输了不要紧再来一次","所以呢，这个游戏还是挺适合智力缺陷的玩家的","哇靠，经测试您的分数简直就是未老先衰的迹象啊！","经游戏组委会研究得出，您有点轻度脑障！","玩出这样的分数，你对得起祖国，对得起养你育你的父母吗！","测试这么低分，今天你是不是穿反了内裤？","恭喜你！又破了我们游戏的新低啊！","样子丑不要紧，右脑智力缺陷问题可是很严重的哦","分数这么低，你妈妈造吗？你爸呢？"],middle:["看起来还不错的样子，再认真一点就好了","呐，做人呢~和玩游戏一样的，敢不敢再来一次？","风水先生说，你这个姿势玩不高分的啊","哇靠，经测试您的分数简直就是未老先衰的迹象啊！","测试右脑之前，要把头发梳成五五分才高分的哦","你的右脑似乎还有待开发哦","分数这么低，你妈妈造吗？你爸呢？"],advance:["嗯，还不错，就是怀疑你作弊的。敢不敢再来一次？","呐，做人呢~最重要是认真，玩饿了吧？我下面给你吃？","咦？手机型号不错，再刷一次高分吧","哇靠，经测试您的分数简直就是未老先衰的迹象啊！","既然那么丧心病狂的牛x，就赠你5个Q币好了：IQOU24RJFLJJL","喂喂，怎么能够这么高分啊，有什么秘籍吗？","天呐，我都怀疑你是不是开挂刷的分数","分数这么高，你妈妈造吗？你爸呢？"]},common.quote=function(e){if(20>e){var o=common.quoteArr.junior.length,n=Math.floor(Math.random()*o);return common.quoteArr.junior[n]}if(e>=20&&40>e){var o=common.quoteArr.middle.length,n=Math.floor(Math.random()*o);return common.quoteArr.middle[n]}if(e>=40){var o=common.quoteArr.advance.length,n=Math.floor(Math.random()*o);return common.quoteArr.advance[n]}},common.level=function(e){return 10>e?"脑瘫":e>=10&&20>e?"幼儿园":e>=20&&30>e?"小学生":e>=30&&40>e?"中学生":e>=40&&50>e?"大学生":e>=50&&60>e?"研究生":e>=60&&80>e?"博士生":e>=80&&150>e?"天才！你妈妈知道吗？":e>=150?"骚年，收我为徒吧":void 0},common.showRight=function(){var e=document.createElement("div");e.setAttribute("class","iconfont full-alert alert-right"),e.innerHTML="&#xf006a;",e.id="full-alert",body.appendChild(e),common.remove("full-alert",600),initScore++,gameTime=Number(Number(gameTime)+addTime),$("countBack").innerHTML=gameTime,common.addTimeAnimate(),setTimeout(function(){common.setTopic()},600)},common.showWrong=function(){var e=document.createElement("div");e.setAttribute("class","iconfont full-alert alert-wrong"),e.innerHTML="&#xf00b3;",e.id="full-alert",body.appendChild(e),common.remove("full-alert",600),setTimeout(function(){common.setTopic()},600)},common.remove=function(e,o){setTimeout(function(){$(e).parentNode.removeChild($(e))},o)},common.setTopic=function(){for(var e=common.exam.length,o=Math.floor(4*Math.random()),n=0;4>n;n++){var a=Math.floor(Math.random()*e);$("result-"+n).innerHTML=common.exam[a]}for(var t="",c=[],m="",r=0;e>r;r++)t='<li class="micon item">'+common.exam[r]+"</li>",c.push(t);var i,s="junior";4>initScore?(i=6,s="junior"):initScore>=4&&10>initScore?(i=8,s="middle"):initScore>=10&&16>initScore?(i=10,s="advance"):initScore>=16&&(i=12,s="superman");for(var l=0;i>l;l++){var d=Math.floor(Math.random()*e);m+=c[d]}$("micon-list").className="micon-list micon-"+s,$("micon-list").innerHTML=m;var u=Math.floor(Math.random()*i),f=$("micon-list").getElementsByTagName("li")[u].innerHTML;return $("micon-list").getElementsByTagName("li")[u].className="micon item result-hide",$("result-"+o).innerHTML=f,$("result-"+o).className="square result-answer",cacheResult=f},common.addTimeAnimate=function(){var e=common.getOffsetLeft($("countBack")),o=common.getOffsetTop($("countBack")),n=$("countBack").clientWidth,a=$("countBack").clientHeight,t=document.createElement("em");t.className="add-time-out",t.id="add-time-out",t.innerHTML="+"+addTime,t.setAttribute("style","width:"+n+"px;height:"+a+"px;line-height:"+a+"px;left:"+e+"px;top:"+o+"px;"),body.appendChild(t),common.remove("add-time-out",1e3)},$("go-play").onclick=function(){var e=document.createElement("div");e.className="play-cout-back",e.innerHTML='<span class="play-cn" id="play-cn">3</span>',$("game-detial").appendChild(e),common.cacheIcon(),cacheSetinterval=setInterval(function(){common.playCountNum()},1e3)};