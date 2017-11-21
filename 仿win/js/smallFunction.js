//点击开始
start1.onclick = function(){
	if(!open){
		startMove(start2,{height:65},100,'easeOut',function(){
			startMove(start3,{height:28},100,'easeOut',function(){
				startMove(start4,{height:24},100,'easeOut',function(){
					startMove(start5,{height:32},100,'easeOut',function(){
						startMove(startI6,{height:60},100,'easeOut',function(){});
						open = true;
					});
					start6.style.display = 'block';
				});
			});
		});
	}else{
		startMove(startI6,{height:0},100,'easeOut',function(){
			start6.style.display = 'none';
			startMove(start5,{height:0},100,'easeOut',function(){
				startMove(start4,{height:0},100,'easeOut',function(){
					startMove(start3,{height:0},100,'easeOut',function(){
						startMove(start2,{height:0},100,'easeOut',function(){});
						open = false;
					});
				});
			});
		});
	}	
}
