bootstrap-tabs
==============
This base on http://jeykeu.wordpress.com/2013/07/27/dynamically-add-remove-and-re-number-tabs-in-twitter-bootstrap/
I integration with JQuery plugins

Useage :
import the css and js

&lt;!-- 新 Bootstrap 核心 CSS 文件 --&gt;<br/>
&lt;link rel="stylesheet" href="./bootstrap.css"&gt;<br/>
&lt;!-- jQuery文件。务必在bootstrap.js 之前引入 --&gt;<br/>
&lt;script src="./jquery-2.1.1.js"&gt;&gt;/script&gt;<br/>
&lt;!-- 最新的 Bootstrap 核心 JavaScript 文件 --&gt;<br/>
&lt;script src="./bootstrap.js"&gt;&lt;/script&gt;<br/>
&lt;link rel="stylesheet" href="./goweb.css"&gt;<br/>
&lt;script src="./goweb.js"&gt;&lt;/script&gt;<br/>


&lt;a href="javascript:;" id="btnAddPage" role="button">Add Page&lt;/a&gt;<br/>
&lt;div id="mytab"&gt;&lt;/div&gt;<br/>

use example:<br/>

&lt;script&gt;<br/>

    $(document).ready(function(){<br/>
        var goweb = $('#mytab').goweb({});<br/>
        
        $('#btnAddPage').on('click', function(){<br/>
            goweb.addTabPage();<br/>
        });<br/>
    });<br/>
    
&lt;/script&gt;<br/>
