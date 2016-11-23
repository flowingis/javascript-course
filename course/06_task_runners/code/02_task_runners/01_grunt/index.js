$(document).ready(function () {
    $('button').click(function () {
        $('#todo').append("<ul>" + $("input[name=task]").val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></ul>");
    });
    $("body").on('click', '#todo a', function () {
        $(this).closest("ul").remove();
    });
});