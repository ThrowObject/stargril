// 定义元素
var can;
var ctx;

var w;
var h;

var padLeft = 100;
var padTop = 100;

var girlWidth = 600;
var girlHeight = 300;

var deltaTime;
var lastTime;

var girlPic = new Image();
var starPic = new Image();

var stars = [];
var num = 30;

var alive = 0;

var switchy = false;
// 初始化数据 加载数据
function init() {
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");

	w = can.width;
	h = can.height;

	document.addEventListener('mousemove', mousemove, false);

	girlPic.src = "src/girl.jpg";
	starPic.src = "src/star.png";

	for (var i = 0; i < num; i++) {
		stars[i] = new starObj();
		stars[i].init();
	}

	lastTime = Date.now();
	gameLoop();
}
// 序列帧
function gameLoop() {
	window.requestAnimFrame(gameLoop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	fillCanvas();
	drawGirl();

	drawStars();

	aliveUpdate();
}

function fillCanvas() {
	// fillStyle 方法设置canvas背景颜色
	ctx.fillStyle = "#393550";
	// fillRect 方法规定了形状、位置和尺寸
	ctx.fillRect(0, 0, w, h);
}

function drawGirl() {
	// darmImage(img,x,y)
	// x轴坐标正方向向右，y轴坐标正方向向下（0.0）在canvas左上角
	// 绘女孩图片
	ctx.drawImage(girlPic, padLeft, padTop, girlWidth, girlHeight);
}

function mousemove(e) {
	if (e.offsetX || e.layerX) {

		var px = e.offsetX == undefined ? e.layerX : e.offsetX;
		var py = e.offsetY == undefined ? e.layerY : e.offsetY;

		if (px > padLeft && px < (padLeft + girlWidth) && py > padTop && py < (padTop + girlHeight)) {
			switchy = true;
		} else {
			switchy = false;
		}
	}
}