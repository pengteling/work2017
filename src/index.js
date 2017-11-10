if (process.env.NODE_ENV !== 'production') { //开发环境下 raw-loader  html文件 动态加载
    require('./index.html');    
};
require("./sass/style.scss");
// require("jquery");
//require("./js/pJqueryAppearAnimateCSS3/jac.js"); //动画
//require("./js/superslide/jquery.SuperSlide.2.1.2.js");
require("./js/superslide/jquery.SuperSlide.2.1.1.js");

$(function(){
	$(".slider").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,interTime:5000});
})