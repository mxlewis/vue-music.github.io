//适配
var iScale=1/window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,initial-scale='+iScale+',minimum-scale='+iScale+',maximum-scale='+iScale+',user-scalable=no"/>');
//alert(iScale)
var iWidth=document.documentElement.clientWidth;
document.getElementsByTagName('html')[0].style.fontSize=iWidth/30+ 'px';
