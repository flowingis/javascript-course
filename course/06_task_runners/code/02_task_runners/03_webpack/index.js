require('bootstrap/dist/css/bootstrap.css');
require('./app.css');
var $ = require('jquery');

$(document).ready(function () {

    var todoContainer =  $('#todo');
    var input = $("input[name=task]");

    $('button[role=add]').click(function () {
        var li = "<li>" + input.val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></li>"
        todoContainer.append(li);
        input.val("");
        input.focus();
    });

    $("body").on('click', '#todo a', function () {
        $(this).closest("li").remove();
    });
});