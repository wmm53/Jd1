var list = document.getElementById("imglist")
var pre = document.getElementById("pre")
var next = document.getElementById("next")
function animate(offset){
    var newleft = parseInt(list.style.left) + offset
    if(newleft<-4130){
        list.style.left = -590 +"px"
    }else if(newleft>-590){
        list.style.left = -4130 +"px"
    }else{
        list.style.left = newleft + "px"
    }
}

// 切换图片时小圆圈跟着高亮
var circles = document.getElementById("circles").getElementsByTagName("span")
var index = 1
function circleLighted(){
    for(var i=0;i<circles.length;i++){
        if(circles[i].className=="on"){
            circles[i].className=""
        }
    }
    circles[index-1].className="on"
}
pre.onclick = function () {
    index-=1
    if(index<1){
        index=7
    }
    animate(590)
    circleLighted()
}
next.onclick = function () {
    index+=1
    if(index>7){
        index=1
    }
    animate(-590)
    circleLighted()
}
//点击小圆圈切换到对应的图片
for(var i=0;i<circles.length;i++){
    (function (i){//使用立即执行函数
        circles[i].onclick= function () {
            var clickIndex=parseInt(this.getAttribute('index'));//getAttribute方法用于返回指定属性的属性值
            var offset=590*(index-clickIndex);
            animate(offset); //存放鼠标点击之后的位置，用于小圆点的正常显示
            index=clickIndex;
           circleLighted()
        }
    })(i)
}
// 设置定时器
var timer = null
function autoPlay(){
    timer = setInterval("next.onclick()",1500)
}
autoPlay()

function stop(){
    clearInterval(timer)
}
var container = document.getElementById("slide")
container.onmouseover = stop
container.onmouseout = autoPlay
