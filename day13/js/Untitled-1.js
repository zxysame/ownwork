 window.onload = function(){
	 	var viewbtn1 = document.getElementById("viewBtn1");
		var viewbtn2 = document.getElementById("viewBtn2");
		var viewbtn3 = document.getElementById("viewBtn3");
		var view = document.getElementById("view");
		view.style.backgroundPosition = "0px 0px";
		var timer;
		var i = -297;	
		
		function clearbtn(){
			viewbtn1.style.backgroundColor = "yellow";
			viewbtn2.style.backgroundColor = "yellow";
			viewbtn3.style.backgroundColor = "yellow";
			}
		
		function viewMove(){
				var arry = view.style.backgroundPosition.split(" ");
				switch(i){
					case -297:clearbtn();viewbtn1.style.backgroundColor = "green"; break;
					case -594:clearbtn();viewbtn2.style.backgroundColor = "green"; break;
					case -891:clearbtn();viewbtn3.style.backgroundColor = "green"; break;
					case -1188:clearbtn();
						viewbtn1.style.backgroundColor = "green";
						view.style.backgroundPosition = arry[0] + " 0px";
						i = -297;
						var arry = view.style.backgroundPosition.split(" ");
						break;
						}
				var newtop = parseInt(arry[1])-9;
				console.log(newtop);
				view.style.backgroundPosition = arry[0] + " " + newtop+ "px";
				if(newtop <= i )
				{	
					window.clearInterval(timer);
					i-=297;
					}
			}
		
		function viewSelfMove()
		{	
			timer= setInterval(viewMove,20);
			}
		
		setInterval(viewSelfMove,5000);
		
		viewbtn1.onclick = function(){
				view.style.backgroundPosition = "0px -297px";
				clearbtn();
				this.style.backgroundColor = "green";
				i = -594;
			}
		viewbtn2.onclick = function(){
				view.style.backgroundPosition = "0px -594px";
				clearbtn();
				this.style.backgroundColor = "green";
				i = -891;
			}
		viewbtn3.onclick = function(){
				view.style.backgroundPosition = "0px 0px";
				clearbtn();
				this.style.backgroundColor = "green";
				i = -297;
			}
			
			
		var newlist = document.getElementById("roate");
		newlist.style.marginTop = "0px";
		
		function rota(){
			var top = parseInt(newlist.style.marginTop);
			if(top <= -90){top = 0;
			newlist.style.marginTop = top + "px";}
			top -= 3;
			newlist.style.marginTop = top + "px";
			}
		setInterval(rota,50);
	 }// JavaScript Document