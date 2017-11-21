//获取内容管理空白处右键
var kb = document.querySelector(".kb");
var kbXj = document.querySelector(".kb-xj");
var nrgl = document.querySelector(".nrgl");
var remove = document.querySelector(".remove");
var nrglDel = document.querySelector(".nrgl-del");
var newion = document.querySelector(".newion");
var conts = document.querySelector(".conts");
var start = document.querySelector(".start");
var start1 =  start.querySelector(".start-1");
var start2 =  start.querySelector(".start-2 img");
var start3 =  start.querySelector(".start-3 img");
var start4 =  start.querySelector(".start-4 img");
var start5 =  start.querySelector(".start-5 img");
var startI6 =  start.querySelector(".start-6 img");
var start6 =  start.querySelector(".start-6");
var names = document.querySelector(".names");
var CID = 0;
var ids =23;
var right = null ;
var open = false;
//点击关闭所有右键
document.addEventListener('click',function(e){
	kb.style.display = 'none';
	nrgl.style.display = 'none';
	e.stopPropagation();
})

