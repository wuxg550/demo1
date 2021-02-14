var div1=document.getElementById("div_box-bottom-left-div-1");
var div2=document.getElementById("div_box-bottom-left-div-2");
var div3=document.getElementById("div_box-bottom-left-div-3");
var div4=document.getElementById("div_box-bottom-left-div-4");
var div5=document.getElementById("div_box-bottom-left-div-5");
var wrap    = document.getElementsByClassName("div_box-left")[0];
var smallImgBox = wrap.getElementsByClassName("imgBox")[0];//div1
var smallImg = smallImgBox.getElementsByTagName("img")[0];//鍥剧墖1
var bigImgBox = wrap.getElementsByClassName("imgBox")[1];//div2
var bigImg = bigImgBox.getElementsByTagName("img")[0];//鍥剧墖2

div1.onmouseover=function(){
    div1.style.border="2px solid #000";
    div2.style.border="1px solid #fff";
    div3.style.border="1px solid #fff";
    div4.style.border="1px solid #fff";
    div5.style.border="1px solid #fff";
    smallImg.src="img/buy1.png";
    bigImg.src="img/buy1.png";
}
div2.onmouseover=function(){
    div2.style.border="2px solid #000";
    div1.style.border="1px solid #fff";
    div3.style.border="1px solid #fff";
    div4.style.border="1px solid #fff";
    div5.style.border="1px solid #fff";
    smallImg.src="img/buy2.png";
    bigImg.src="img/buy2.png";
}
div3.onmouseover=function(){
    div3.style.border="2px solid #000";
    div1.style.border="1px solid #fff";
    div2.style.border="1px solid #fff";
    div4.style.border="1px solid #fff";
    div5.style.border="1px solid #fff";
    smallImg.src="img/buy3.png";
    bigImg.src="img/buy3.png";
}
div4.onmouseover=function(){
    div4.style.border="2px solid #000";
    div1.style.border="1px solid #fff";
    div2.style.border="1px solid #fff";
    div3.style.border="1px solid #fff";
    div5.style.border="1px solid #fff";
    smallImg.src="img/buy4.png";
    bigImg.src="img/buy4.png";
}
div5.onmouseover=function(){
    div5.style.border="2px solid #000";
    div1.style.border="1px solid #fff";
    div2.style.border="1px solid #fff";
    div3.style.border="1px solid #fff";
    div4.style.border="1px solid #fff";
    smallImg.src="img/buy5.png";
    bigImg.src="img/buy5.png";
}