
if (process.env.NODE_ENV !== 'production') { //开发环境下 raw-loader  html文件 动态加载
    require('./index.html');
    
}
;
require("./sass/style.scss");
var $ = require("jquery");
//require("./js/pJqueryAppearAnimateCSS3/jac.js"); //动画
$(function() {
	function resize() {
	    var pr = ($(window).width()) / 750;
	    if(pr>1)pr=1;
	    $("html").css("font-size", 625 * pr + "%");	    
	}
	resize();
	$(window).load(function() {
	    resize();
	})
	$(window).resize(function() {
	    resize();
	});
	//alert("Test")
});