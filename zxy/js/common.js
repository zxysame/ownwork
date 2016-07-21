window.onload = function(){
	var banner = document.getElementById("banner");//获取轮播图div
	var li = document.getElementById("top-img").getElementsByTagName("li");//获取轮播图li的数组
	banner.style.marginLeft = "0px";
	var cs = [];//记录每张图对应的margin-left
	var newleft;//记录margin-left
	var index = 1;//记录轮播到第几张图
	
	function play(){//轮播函数
		if(newleft == -1320){
		clearselect();
		li[index].setAttribute("class","select");
		sfas();
		newleft=0;
		index = 0; } 
		else if(newleft == -660){
		clearselect();
		li[index].setAttribute("class","select");
		sfas();
		newleft=-682;
		index = 2;	}
		else if(newleft == 0){
		clearselect();
		li[index].setAttribute("class","select");
		sfas();
		newleft=-22;
		index = 1;
			}
		else
		{newleft = parseInt(banner.style.marginLeft)-22;
		banner.style.marginLeft = newleft + "px";}
		}
	
	function sfas(){//每次轮播一张图调用此函数延时五秒
		window.clearInterval(timer);
		setTimeout(fu,5020);
		}
	function fu(){//上个函数延迟五秒后创建新计时器的函数
		timer = setInterval( play , 20);
		banner.style.marginLeft = newleft + "px";
		}
	var timer ;//记录计时器编号
	setTimeout(fu,5000);
	
	function clearselect(){//清除所有轮播图按钮的选中状态
			for(var j = 0; j < 3; j++ )
			{
				li[j].setAttribute("class","noselect");
				}
		
		}
	
	for(var i = 0; i < 3; i++ )//绑定所有轮播图的点击事件
	{
			cs[i] = i * -660;
			li[i].onclick = function(){
				clearselect();
				this.setAttribute("class","select");
				newleft = cs[this.value];
				index = this.value;
				banner.style.marginLeft = cs[this.value]+"px";
			}
		}
		
		
	var content1 = document.getElementById("content_page1")//以下为拓展页面切换代码
	
	var content2 = document.getElementById("content_page2")
	
	var hotcon1 = document.getElementById("conhot_page1");
	
	var hotcon2 = document.getElementById("conhot_page2");
	
	var script1 = document.getElementById("script_page1");
	
	var script2 = document.getElementById("script_page2");
	
	var span1 = document.getElementById("span1")
	
	var span2 = document.getElementById("span2")
	
	var span3 = document.getElementById("span3")
	
	var span4 = document.getElementById("span4")
	
	var span5 = document.getElementById("span5")
	
	var span6 = document.getElementById("span6")
	
	
	span1.onclick = function(){
		content2.style.display = "none";
		content1.style.display = "block";
		}
		
	span2.onclick = function(){
		content1.style.display = "none";
		content2.style.display = "block";
		}
		
	span3.onclick = function(){
		hotcon2.style.display = "none";
		hotcon1.style.display = "block";
		}
		
	span4.onclick = function(){
		hotcon1.style.display = "none";
		hotcon2.style.display = "block";
		}
		
	span5.onclick = function(){
		script2.style.display = "none";
		script1.style.display = "block";
		}
		
	span6.onclick = function(){
		script1.style.display = "none";
		script2.style.display = "block";
		}//以上为拓展页面切换代码
	
	function bindmouse(cont){//鼠标移上按钮显示，移除消失
		var con = cont.getElementsByTagName("li");
		for(var i = 0 ; i< con.length ; i++)
		{
			con[i].onmouseover = function(){
				this.getElementsByClassName("abbanbtn")[0].style.display = "block";
				this.getElementsByClassName("abbanword")[0].style.display = "none";
				}
			con[i].onmouseout = function(){
				this.getElementsByClassName("abbanword")[0].style.display = "block";
				this.getElementsByClassName("abbanbtn")[0].style.display = "none";
				}
			}
		}
	

	bindmouse(content1);
	
	bindmouse(content2);
	
	bindmouse(hotcon1);
	
	bindmouse(hotcon2);	
	
	bindmouse(script1);
	
	bindmouse(script2);
	
	var show = document.getElementById("newshow");
	
	var lis = show.getElementsByTagName("li");
	
	for(var i = 0; i < lis.length ; i++)
	{
		lis[i].onmouseover = function(){
			this.getElementsByClassName("download")[0].style.display = "block";
			}	
		lis[i].onmouseout = function(){
			this.getElementsByClassName("download")[0].style.display = "none";
			}	
		}
	var ad = document.getElementsByClassName("ad");
	var advance = document.getElementsByClassName("adcurrent");
	
	for( var i = -1 ; i < 2 ; i++)
	{
	ad[0].style.left = i*297+"px";
	ad[0].setAttribute("class","adcurrent");
	}
	for(i = 0 ; i < 3; i++)
	{
		ad[i].style.left = "297px";
		}
		
	var index1 = -1;
	var index2 = 0;
	var rotatelog = 0;
	var speed = 9;
	
	function admove(){
		for(var i = 0 ; i < 3 ; i++){
		advance[i].style.left = parseInt(advance[i].style.left) - speed + "px";
			}
		if(parseInt(advance[2].style.left) == 0 || parseInt(advance[1].style.left) == 0 || parseInt(advance[0].style.left) == 0 )
		{
			if( rotatelog == 1 && index2 < 3){
				index2++;
				index1 = -1;
				}
			else{
				if(index2 == 3){
					index1 = -1;
					}
				index2 = 0;
				rotatelog = 0;
				}
			index1++;
			ad[index1].setAttribute("class","adcurrent");
			advance[index2].style.left = "297px";
			advance[index2].setAttribute("class","ad");
			if(index1 >= 2)
			{index1 = -1;
			index2 = 0;
			rotatelog = 1;}
			/*for( var i = -1 ; i < 2 ; i++)
				{
				advance[i+1].style.left = i*297+"px";
				ad[i+1].style.left = "0px" ;
				}*/
			window.clearInterval(timer2);
			setTimeout(setAD,6000);
			speed = 9;
			}
		}
	var timer2;
	setAD();
	function setAD(){
		 timer2 = setInterval(admove,40);
		}
	
	/*var Lbtn = document.getElementById("Larr");
	Lbtn.onclick = function(){
		speed = -27;
		window.clearInterval(timer2);
		setAD();
		}*/
	}// JavaScript Document