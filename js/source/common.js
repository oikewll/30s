var common = {};
var $ = function(id){
	return document.getElementById(id);
}
var gameTime = 30; //游戏时间
var initScore = 0; //游戏分数
var body = document.getElementsByTagName("body")[0];
var cacheNum;
var cacheSetinterval;

common.exam = [
		['6 + 9 = ?', 15],
		['50 ÷ 5 = ?', 10],
		['3 × 9 = ?', 27],
		['81 - 9 = ?', 72],

		['19 + 7 = ?', 26],
		['36 ÷ 3 = ?', 12],
		['7 × 70 = ?', 490],
		['16 - 7 = ?', 9],

		['36 + 19 = ?', 55],
		['120 ÷ 3 = ?', 40],
		['19 × 3 = ?', 57],
		['27 - 16 = ?', 11],

		['42 + 4 = ?', 46],
		['44 ÷ 2 = ?', 22],
		['78 × 3 = ?', 234],
		['536 - 257 = ?', 279],

		['392 + 27 = ?', 419],
		['338 ÷ 13 = ?', 16],
		['78 × 15 = ?', 1170],
		['49 - 27 = ?', 22],

		['32 + 19 = ?', 51],
		['81 ÷ 9 = ?', 9],
		['19 × 9 = ?', 171],
		['89 - 12 = ?', 77],

		['51 + 23 = ?', 74],
		['72 ÷ 9 = ?', 8],
		['9 × 18 = ?', 162],
		['2 - 89 = ?', -87]
]

common.countBack = function(){
	if (gameTime === -1) {
		return;
	}
	if(gameTime <= 10){
		$("countBack").setAttribute("class","count-back count-alert");
	}
	gameTime--;
	$("countBack").innerHTML = gameTime;
}

//游戏模版
common.createGame = function(){
	var tpl = document.createElement("div");
		tpl.className = "game-content";
		tpl.id = "game-content";
		tpl.innerHTML = '<div class="wrapCont" id="wrapCont">'
							+'<p class="content" id="question">loading...</p>'
						+'</div>'
						+'<div class="keyboard" id="keyboard">'
							+'<p class="kb-top"><span class="square" id="result-0">?</span></p>'
							+'<p class="kb-middle"><span class="square" id="result-1">?</span><span class="square" id="result-next">不会</span><span class="square" id="result-2">?</span></p>'
							+'<p class="kb-bottom"><span class="square" id="result-3">?</span></p>'
						+'</div>'
						+'<span class="count-back" id="countBack">30</span>';
    $("mainboard").appendChild(tpl);

    common.starGame();
}

//初始化游戏
common.starGame = function(){
	cacheSetinterval = setInterval(function(){
		common.countBack();
		if (gameTime === 0) {
			return common.creatOverMask();
		}
	},1000)

	common.setTopic();

	var kbLen = $("keyboard").getElementsByTagName("span").length;
	for(var i = 0;i < kbLen;i++){
		$("keyboard").getElementsByTagName("span")[i].onclick = function(){
			if(this.innerHTML === '不会'){
				common.setTopic();
			}else if (Number(this.innerHTML) === common.exam[cacheNum][1]) {
				common.showRight();
			}else{
				common.showWrong();
			}
		}
	}
}

//再玩一次
common.refreshGame = function(){
    $("refresh-game").onclick = function(){
		$("over-mask").parentNode.removeChild($("over-mask"));
		$("game-content").parentNode.removeChild($("game-content"));
		gameTime = 30; //游戏时间
		initScore = 0; //游戏分数
		common.createGame();
	}
}

//结束模版
common.creatOverMask = function(){
	clearInterval(cacheSetinterval);
	var level = this.level(initScore);
	var tpl = document.createElement("div");
		tpl.className = "over-mask";
		tpl.id = "over-mask";
		tpl.innerHTML = '<div class="mask-inner">'
								+'<p class="title"><i class="iconfont icon-timeout">&#xe660;</i>时间到啦 :(</p>'
								+'<p class="score">您的得分是：<span class="red" id="final-score">'+initScore+'</span> 等级是：<span class="red" id="final-level">'+level+'</span></p>'
								+'<p class="desc"><a href="javascript:;" class="refresh" id="refresh-game"><i class="iconfont icon-refresh">&#xf0005;</i>再来一次</a></p>'
							+'</div>'
						+'</div>';
    body.appendChild(tpl);
    document.getElementsByTagName("title")[0].innerHTML = "最强右脑—最终得分"+initScore+";级别是:"+level;

    common.refreshGame();
}

//级别算出
common.level = function(score){
	if(initScore >= 25){
		return '爱因斯坦';
	}else if(initScore >= 20 && initScore < 25){
		return '天才';
	}else if(initScore >= 15 && initScore < 20){
		return '靠近天才';
	}else if(initScore >= 5 && initScore < 15){
		return '普通人';
	}else if(initScore < 5){
		return '脑瘫';
	}
}

common.showRight = function(){
	var tpl = document.createElement("div");
		tpl.setAttribute("class","iconfont full-alert alert-right");
		tpl.innerHTML = '&#xf006a;';
		tpl.id = 'full-alert';
    body.appendChild(tpl);

    common.setTopic();//换题

    setTimeout(function(){
    	common.remove("full-alert");
    },600);

    //答题正确加一分
    initScore++;
}

common.showWrong = function(){
	var tpl = document.createElement("div");
		tpl.setAttribute("class","iconfont full-alert alert-wrong");
		tpl.innerHTML = '&#xf00b3;';
		tpl.id = 'full-alert';
    body.appendChild(tpl);

    common.setTopic();//换题

    setTimeout(function(){
    	common.remove("full-alert");
    },600);
}

common.remove = function(id){
	$("full-alert").parentNode.removeChild($("full-alert"));
}

common.setTopic = function(){
	var examLen = common.exam.length;
	var rdExam  = Math.floor(Math.random() * examLen);
	var rd4  = Math.floor(Math.random() * 4);
	var random_0  = Math.floor(Math.random() * 99),
		random_1  = Math.floor(Math.random() * 99),
		random_2  = Math.floor(Math.random() * 99),
		random_3  = Math.floor(Math.random() * 99);

	var question = common.exam[rdExam][0],
		answer   = common.exam[rdExam][1];

	//随机生成答案
	$("result-0").innerHTML = random_0;
	$("result-1").innerHTML = random_1;
	$("result-2").innerHTML = random_2;
	$("result-3").innerHTML = random_3;

	//提出问题
	$("question").innerHTML = question;

	//正确答案
	$("result-"+rd4).innerHTML = answer;
	return cacheNum = rdExam;
}

$("go-play").onclick = function(){
	common.createGame();
	$("game-detial").parentNode.removeChild($("game-detial"));
}
