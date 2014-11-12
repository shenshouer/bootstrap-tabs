bootstrap-tabs
==============
This base on http://jeykeu.wordpress.com/2013/07/27/dynamically-add-remove-and-re-number-tabs-in-twitter-bootstrap/
I integration with JQuery plugins

Useage :
import the css and js

&lt;!-- 新 Bootstrap 核心 CSS 文件 --&gt;
&lt;link rel="stylesheet" href="./bootstrap.css"&gt;
&lt;!-- jQuery文件。务必在bootstrap.js 之前引入 --&gt;
&lt;script src="./jquery-2.1.1.js"&gt;&gt;/script&gt;
&lt;!-- 最新的 Bootstrap 核心 JavaScript 文件 --&gt;
&lt;script src="./bootstrap.js"&gt;&lt;/script&gt;
&lt;link rel="stylesheet" href="./goweb.css"&gt;
&lt;script src="./goweb.js"&gt;&lt;/script&gt;


&lt;a href="javascript:;" id="btnAddPage" role="button">Add Page&lt;/a&gt;
&lt;div id="mytab"&gt;&lt;/div&gt;

use example:

&lt;script&gt;

    $(document).ready(function(){
        var goweb = $('#mytab').goweb({});
        
        $('#btnAddPage').on('click', function(){
            goweb.addTabPage();
        });
    });
    
&lt;/script&gt;
