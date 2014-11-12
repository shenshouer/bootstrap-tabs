bootstrap-tabs
==============
This base on http://jeykeu.wordpress.com/2013/07/27/dynamically-add-remove-and-re-number-tabs-in-twitter-bootstrap/
I integration with JQuery plugins

Useage :
import the css and js

<!-- 新 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="./bootstrap.css">
<!-- jQuery文件。务必在bootstrap.js 之前引入 -->
<script src="./jquery-2.1.1.js"></script>
<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="./bootstrap.js"></script>
<link rel="stylesheet" href="./goweb.css">
<script src="./goweb.js"></script>


<a href="javascript:;" id="btnAddPage" role="button">Add Page</a>
<div id="mytab"></div>

use example:

<script>
    $(document).ready(function(){
        var goweb = $('#mytab').goweb({});
        
        $('#btnAddPage').on('click', function(){
            goweb.addTabPage();
        });
    });
</script>
