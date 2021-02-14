window.onload = function(){
 
    var wrap    = document.getElementsByClassName("div_box-left")[0];
    var smallImgBox = wrap.getElementsByClassName("imgBox")[0];
    var smallImg = smallImgBox.getElementsByTagName("img")[0];
    var bigImgBox = wrap.getElementsByClassName("imgBox")[1];
    var bigImg = bigImgBox.getElementsByTagName("img")[0];
    var shadow = document.getElementById("hover_shadow")

    smallImgBox.onmouseover = function () {
        shadow.style.display="block";
        bigImgBox.style.display="block";
    };
    smallImgBox.onmouseout = function () {
        shadow.style.display="none";
        bigImgBox.style.display="none";
    }


    smallImgBox.onmousemove = function (ev) {

        var ev = ev || window.event ;

        //榧犳爣鍦ㄦ寚瀹歞iv閲岄潰鐨勫潗鏍�:鍙鍖洪噷闈㈤紶鏍囧潗鏍�- div鍒版枃妗ｈ竟鐣岀殑璺濈
      /*  var x =  ev.clientX  -   shadow.offsetParent.offsetLeft -shadow.offsetParent.offsetParent.offsetLeft   ;
        var y = ev.clientY  -    shadow.offsetParent.offsetTop  -shadow.offsetParent.offsetParent.offsetLeft;*/
        var x =  ev.clientX  -   smallImgBox.offsetLeft - wrap.offsetLeft   ;
        var y = ev.clientY  -    smallImgBox.offsetTop  -wrap.offsetTop;


        var l = x-shadow.offsetWidth/2;
        var t = y -shadow.offsetHeight/2 ;

        if( l <=0 ) { l=0; }
        else if(  l >=smallImgBox.offsetWidth - shadow.offsetWidth ){
            l = smallImgBox.offsetWidth - shadow.offsetWidth ;
        }
        if(  t <=0 ){  t=0; }
        else if(  t>=smallImgBox.offsetHeight - shadow.offsetHeight )  {
            t=smallImgBox.offsetHeight - shadow.offsetHeight;
        }
        shadow.style.left= l +"px";
        shadow.style.top= t +"px";

      /*  var  radioX = l /   (smallImgBox.offsetWidth - shadow.offsetWidth);
        var  radioY = t /  (smallImgBox.offsetHeight - shadow.offsetHeight) ;
        document.title =radioX+" "+ radioY ;
        bigImg.style.left=-radioX*(bigImg.width - bigImgBox.offsetWidth) +"px";
        bigImg.style.top=-radioY*(bigImg.height - bigImgBox.offsetHeight) +"px";*/

         var  radioX = x /  (smallImgBox.offsetWidth - shadow.offsetWidth)  >=1? 1 : x /   (smallImgBox.offsetWidth - shadow.offsetWidth) ;
         var  radioY = y /  (smallImgBox.offsetHeight - shadow.offsetHeight) >=1? 1 :  y /  (smallImgBox.offsetHeight - shadow.offsetHeight);
        
         bigImg.style.left=-radioX*(bigImg.width - bigImgBox.offsetWidth) +"px";
         bigImg.style.top=-radioY*(bigImg.height - bigImgBox.offsetHeight) +"px";

    };
};