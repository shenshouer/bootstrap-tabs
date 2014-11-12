
$('#btnAddPage').click(function() {
    pageNum++;
    $('#pageTab').append(
        $('<li><a href="#page' + pageNum + '">' +
        'Page ' + pageNum +
        '<button class="close" type="button" ' +
        'title="Remove this page">×</button>' +
        '</a></li>'));

    $('#pageTabContent').append(
        $('<div class="tab-pane" id="page' + pageNum +
        '">Content page' + pageNum + '</div>'));

    $('#page' + pageNum).tab('show');
});

/**
 * Remove a Tab
 */
$('#pageTab').on('click', ' li a .close', function() {
    var tabId = $(this).parents('li').children('a').attr('href');
    $(this).parents('li').remove('li');
    $(tabId).remove();
    reNumberPages();
    $('#pageTab a:first').tab('show');
});

/**
 * Click Tab to show its content
 */
$("#pageTab").on("click", "a", function(e) {
    e.preventDefault();
    $(this).tab('show');
});