(function($){
	$.fn.goweb = function(options){
		//获取当前上下文
		var $this = $(this);
		//初始化当前标签页
		var initTab = function(){
			//添加标签页头容器
			$($this).append('<ul class="nav nav-tabs"></ul>');
			//添加标签页内容容器
			$($this).append('<div class="tab-content"></div>');
		};
		//默认参数设置
		var defaults = {
			mytab : true,	//默认开启mytab插件功能
			reNumberPages: function(){}
		};

		//继承默认的设置
		var opts = $.extend(defaults, options);

		var pageImages = [];
		var pageNum = 1;

		initTab();

		/**
		 * Reset numbering on tab buttons
		 */
		var reNumberPages = function() {
			pageNum = 1;
			var tabCount = $($this).find('li').length;

			$($this).find('li').each(function() {
				var pageId = $($this).children('a').attr('href');
				if (pageId == "#page1") {
					return true;
				}
				pageNum++;
				$($this).children('a').html('Page ' + pageNum +
				'<button class="close" type="button" title="Remove this page">X</button>');
			});
		};

		/**
		 * Remove a Tab
		 */
		$($this).find('ul').on('click', ' li a .close', function() {
			var tabId = $(this).parents('li').children('a').attr('href');
			$(this).parents('li').remove('li');
			$(tabId).remove();
			reNumberPages();
			$($this).find('ul').find('a:first').tab('show');
		});

		/**
		 * Click Tab to show its content
		 */
		$($this).find('ul').on("click", "a", function(e) {
			e.preventDefault();
			$(this).tab('show');
		});

		var goweb = {
			//添加标签页
			addTabPage: function(){
				//标签头添加
				$($this).find('.nav-tabs').append(
					$('<li><a href="#page' + pageNum + '">Page ' + pageNum +'<button class="close" type="button" title="Remove this page">X</button></a></li>'));
				$($this).find('.tab-content').append($('<div class="tab-pane" id="page' + pageNum +'">Content page' + pageNum + '</div>'));

				$($this).find('a[href="#page'+pageNum+'"]').tab('show');
				pageNum++;
			}
		}

		return goweb;
	};
})(jQuery);