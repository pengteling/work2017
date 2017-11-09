if (process.env.NODE_ENV !== 'production') { //开发环境下 raw-loader  html文件 动态加载
    require('./index.html');    
};
require("./sass/style.scss");
var $ = require("jquery");
//require("./js/pJqueryAppearAnimateCSS3/jac.js"); //动画
