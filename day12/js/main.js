window.onload = function(){
			var btnL = document.getElementById("btnLeft");
			var btnR = document.getElementById("btnRight");
			var view = document.getElementById("view");
			var btnSearch  = document.getElementsByClassName("btnSearch");
			
			console.log(btnL);
			console.log(btnR);
			var i = 1;
			
			btnL.onclick = function(){
					i++;
					if(i<6){
					view.style.backgroundImage = "url(images/view"+ i +".jpg)";
					}else i--;
				}
			btnR.onclick = function(){
					i--;
					if(i>0){
					view.style.backgroundImage = "url(images/view"+ i +".jpg)";
					}else i++;
				}
		}// JavaScript Document