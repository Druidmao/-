//当前所有文件夹
render( getChildren( CID ),newion);
//桌面新建
newion.addEventListener('contextmenu',xin);
//打开内容管理
function liChild(item,CIDs){
	conts.style.display = 'block';
	conts.innerHTML ='<div class="aui-outer"><div class="aui-border"> <div class="aui-t"> <div class="aui-title appellation"> <span>'+item.name+'</span> <span class="shut cShut">X</span> </div> </div> <div class="crumb"> <span>大图标</span> <span>中等图标</span> <span>小图标</span> <span>排序</span> <span  class="return"><a href="javascript:;">返回上一级</a></span> <div class="crumb-cr"> </div> </div> <div class="middle content"> <ul class="left"></ul> <ul class="right"></ul> </div> <div class="bottom-bar"> <div class="con"> <a class="btn" href="javascript:;">关闭</a> <a class="btn"href="javascript:;">确定</a> </div> </div> </div> </div>'
	right = document.querySelector(".right");
	var returns = document.querySelector(".return");
	var cShut = document.querySelector(".cShut");
	render(getChildren(CIDs),right);
	//点击关闭
	cShut.onclick =function(){
		conts.style.display = 'none';
	}
	/*
	* 返回上一级
	* */
	returns.onclick = function () {
	    var parent = getParent(CID);
	    CID = parent ? parent.id : 0;
	    render( getChildren( CID ),right);    
	};
	//空白右键新建
	right.addEventListener('contextmenu',xin);
}
/*
* 根据数据渲染html（视图）
* */
function render(data,container){
	container.innerHTML = '';
	data.forEach(function(item){
		var li = document.createElement('li');
		li.pid = item.pid;
		//点击li进入li子集
		li.ondblclick=function(e){
				CID = item.id;
				liChild(item,CID);
				renderCrumbs(crumbCr);
				return false;
		};
		//右键li菜单栏
		li.oncontextmenu=function(e){
			newt(e,data,span,li,item);
		};
		var img = document.createElement('img');
        var span = document.createElement('span');
          	span.innerHTML = item.name;
          	span.onclick=function(){
          		rename(data,span,li,item);
          		return false;
          	};	       
        img.src = item.type;   
		li.appendChild(img);
        li.appendChild(span);
        container.appendChild(li);
	})
	var crumbCr = document.querySelector(".crumb-cr");
    // 渲染面包屑导航
    renderCrumbs(crumbCr);
}
/*
* 渲染面包屑导航
* */
function renderCrumbs(crumbCr) {
	if(CID == 0|| !crumbCr){
		 return false ;
	}
	var parents = getParents(CID);
    // 所有的父级
	crumbCr.innerHTML = '';
	 // 在路径中还需要显示当前的目录
	parents.forEach( function(item) {
        var a = document.createElement('a');
       	a.innerHTML = item.name + ' > ';
        a.href = 'javascript:;';
        a.onclick = function(){
        	console.log(CID)
            CID = item.id;
            render( getChildren( CID ),right);
            return false;
        }
		crumbCr.appendChild(a);
    })  
	var currentInfo = get(CID);
    var a = document.createElement('a');
    a.innerHTML = ' 返回上一级';
    a.innerHTML = currentInfo.name;
    crumbCr.appendChild(a);

}
/*
* 返回指定pid的所有数据
* */
function getChildren(pid) {
    return dataList.filter( function(item) {
        return pid == item.pid;
    } );
}
/*
* 根据指定id获取对应数据
* */
function get(id) {
    return dataList.find( function(item) {
        return item.id == id?id:0;
    } );
}
/*
* 获取指定id的父级
* */
function getParent(id) {
    return get( get(id) ? get(id).pid:0);
}
/*
* 获取所有父级
* */
function getParents(id) {
    var parents = [];
    var parent = getParent(id);
    if ( parent ) {
        parents.push( parent );
        parents = getParents( parent.id ).concat(parents);
    }
    return parents;
}
//空白处右键菜单
function xin(e){
	var l = e.clientX;
	var t = e.clientY;
	kb.style.display='block';
	kb.style.top=t +'px';
	kb.style.left=l +'px';
	nrgl.style.display = 'none';
	e.preventDefault();
	e.stopPropagation();
}
//右键属性菜单栏
function newt(e,data,span,li,item){
		var l = e.clientX;
		var t = e.clientY;
		nrgl.style.display='block';
		nrgl.style.top=t +'px';
		nrgl.style.left=l +'px';
		kb.style.display = 'none';
		//右键下重命名
		remove.onclick=function(){
			rename(data,span,li,item);
		};
		//右键下删除
		nrglDel.onclick=function(){
			del(data,item);
		};
		e.preventDefault();
		e.stopPropagation();
}
//新建文件夹
function news(right){
	++ids;
	var pid = get(CID);
	if(!pid){
		 dataList.push({
		 	id: ids,
	        pid: 0,
	 		type: 'img/content/fileexplorer.png',
          	name: '新建文件夹'+ids+''
         });
         render(getChildren( CID ),newion);
	}else{
		dataList.push({
		 	id: ids,
	        pid: pid.id,
	 		type: 'img/content/fileexplorer.png',
          	name: '新建文件夹'+ids+''
         });
         render(getChildren( CID ),right);
	}    
    kb.style.display ='none';
};
 //重名名
function rename(data,span,li,item){
	var inputs = document.createElement('input');
	var lin = null;
	lin = li;
	
	span.innerHTML = '';
	inputs.type = 'text';
	inputs.style.display = 'block';
	inputs.style.width = '60px';
	inputs.style.position = 'relative';
	if(item.pid == 0){
		inputs.style.bottom = '8px';
		inputs.style.left = '10px';
	}else{
		inputs.style.bottom = '23px';
	}
	li.appendChild(inputs);
	inputs.focus();
	inputs.onblur = function(){
		if(data.length==1){
			item.name = inputs.value;
		}else{
			var fou = false;
			for(var i=0; i<data.length; i++){
				if(item.id == data[i].id){
					continue;
				}
				if(inputs.value == data[i].name){
					fou = true;
				}
			}
			if(fou){
				names.style.display = 'block';	
				names.onclick = function(){
					names.style.display = 'none';
					lin.appendChild(inputs);
					inputs.focus();
				}
			}else if(inputs.value == ''){
					span.innerHTML = item.name;
					if(li.pid == 0){
						CID = 0;
					}
					item.pid==0?render(getChildren( CID ),newion):render(getChildren(CID),right);		
				}else{
					item.name = inputs.value;
					if(li.pid == 0){
						CID = 0;
					}
					item.pid==0?render(getChildren( CID ),newion):render(getChildren(CID),right);	
				}	
			}					
		}
	nrgl.style.display = 'none';
};
 //删除
function del(data,item){	
//	data =data.filter(function(item){
//		return !data.find(function(id));
//	})
	console.log(data,item)
//	render(data,newion)
};
//根据所在位置新建文件夹内容
kbXj.onclick = function(){
	news(right);
	return false;
};