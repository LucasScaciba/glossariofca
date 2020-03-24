var headings = "abcçdefghijklmnopqrstuvwxyz";

var $list = $('#list').clone().detach();
$.each( headings, function(){
    $('body').append('<div class="titleh3"><h3>' + this + '</h3></div>');
    $('body').append($('<ul/>').append($list.find("[data-name='" + this + "']") ));
});
