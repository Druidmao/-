/*添加拖拽*/
(function(){
	var lis = document.querySelectorAll('li');
	lis.forEach(function(li){
		drag({
			el: li
		});
	});
	function drag(init){
		var el = init.el;
		var startPoint = {};
		var startOffset = {};
		el.onmousedown = function(e){
			startPoint = {
				x: e.clientX,
				y: e.clientY
			};
			startOffset = {
				x: el.offsetLeft,
				y: el.offsetTop
			}
			var newNode = el.cloneNode(true);
			newNode.style.position = 'fixed';
			css(newNode,"left",startOffset.x);
			css(newNode,"top",startOffset.y);
			css(newNode,"opacity",.7);
			el.parentNode.appendChild(newNode);
			document.onmousemove = function(e){
				var nowPoint = {
					x: e.clientX,
					y: e.clientY
				};
				var dis = {
					x: nowPoint.x - startPoint.x,
					y: nowPoint.y - startPoint.y
				};
				css(newNode,"left",startOffset.x + dis.x);
				css(newNode,"top",startOffset.y + dis.y);
				for(var i = 0; i < lis.length; i++){
					if(lis[i] != el){
						if(boom(newNode,lis[i])){
							css(lis[i],"opacity",.5);
						} else {
							css(lis[i],"opacity",1);
						}
					}
				}
			};
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
				var arr = [];
				for(var i = 0; i < lis.length; i++){
					if(lis[i] != el){
						css(lis[i],"opacity",1);
						if(boom(newNode,lis[i])){
							arr.push(lis[i]);
						}
					}
				}
				arr.sort(function(a,b){
					return getDis(a,newNode) - getDis(b,newNode); 
				});
				el.parentNode.removeChild(newNode);
				if(arr.length > 0){
					startMove(arr[0],{
						left: css(el,"left"),
						top: css(el,"top")
					},500,"easeOut");
					startMove(el,{
						left: css(arr[0],"left"),
						top: css(arr[0],"top")
					},500,"easeOut");
				}
			};
			return false;
		};
	}
	function getDis(node,node2){
		var rect1 = node.getBoundingClientRect();
		var rect2 = node2.getBoundingClientRect();
		var x1 = rect1.left + rect1.width/2;
		var y1 = rect1.top + rect1.height/2;
		var x2 = rect2.left + rect2.width/2;
		var y2 = rect2.top + rect2.height/2;
		var x = x1 - x2;
		var y = y1 - y2;
		return Math.sqrt(x*x + y*y);
	}
	function boom(el,el2){
		var elRect = el.getBoundingClientRect();
		var elRect2 = el2.getBoundingClientRect();
		if(elRect.bottom < elRect2.top
		|| elRect.top > elRect2.bottom
		|| elRect.right < elRect2.left
		|| elRect.left > elRect2.right){
			return false;
		}
		return true;
	}
})();	