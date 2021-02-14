var yse1=document.getElementById("div_box-right-6-div-1");
	 	var yse2=document.getElementById("div_box-right-6-div-2");	
	 	var yse3=document.getElementById("div_box-right-6-div-3");	
	 	var yse4=document.getElementById("div_box-right-6-div-4");	
	 	var yse5=document.getElementById("div_box-right-6-div-5");	
	 	var wrap    = document.getElementsByClassName("div_box-left")[0];
        var smallImgBox = wrap.getElementsByClassName("imgBox")[0];//div1
        var smallImg = smallImgBox.getElementsByTagName("img")[0];//鍥剧墖1
        var bigImgBox = wrap.getElementsByClassName("imgBox")[1];//div2
        var bigImg = bigImgBox.getElementsByTagName("img")[0];//鍥剧墖2
        yse1.onclick=function(){
        	yse1.style.border="2px solid #ff0036";
        	yse2.style.border="0.2px solid #e5e4e4";
        	yse3.style.border="0.2px solid #e5e4e4";
        	yse4.style.border="0.2px solid #e5e4e4";
        	yse5.style.border="0.2px solid #e5e4e4";
        	smallImg.src="img/buy1.png";
        	bigImg.src="img/buy1.png";
        }
          yse2.onclick=function(){
        	yse2.style.border="2px solid #ff0036";
        	yse1.style.border="0.2px solid #e5e4e4";
        	yse3.style.border="0.2px solid #e5e4e4";
        	yse4.style.border="0.2px solid #e5e4e4";
        	yse5.style.border="0.2px solid #e5e4e4";
        	smallImg.src="img/buy2.png";
        	bigImg.src="img/buy2.png";
        }
          yse3.onclick=function(){
        	yse3.style.border="2px solid #ff0036";
        	yse1.style.border="0.2px solid #e5e4e4";
        	yse2.style.border="0.2px solid #e5e4e4";
        	yse4.style.border="0.2px solid #e5e4e4";
        	yse5.style.border="0.2px solid #e5e4e4";
        	smallImg.src="img/buy3.png";
        	bigImg.src="img/buy3.png";
        }
            yse4.onclick=function(){
        	yse4.style.border="2px solid #ff0036";
        	yse1.style.border="0.2px solid #e5e4e4";
        	yse2.style.border="0.2px solid #e5e4e4";
        	yse3.style.border="0.2px solid #e5e4e4";
        	yse5.style.border="0.2px solid #e5e4e4";
        	smallImg.src="img/buy4.png";
        	bigImg.src="img/buy4.png";
        }
            yse5.onclick=function(){
        	yse5.style.border="2px solid #ff0036";
        	yse1.style.border="0.2px solid #e5e4e4";
        	yse2.style.border="0.2px solid #e5e4e4";
        	yse3.style.border="0.2px solid #e5e4e4";
        	yse4.style.border="0.2px solid #e5e4e4";

        	smallImg.src="img/buy5.png";
        	bigImg.src="img/buy5.png";
        }
