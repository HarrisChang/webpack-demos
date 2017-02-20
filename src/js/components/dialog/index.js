require('./css/dialog.css');

var html = require('./tmpl/dialog.html');

module.exports = function(){
    var $dialog = $(html).clone();
    $dialog.find('.close').on('click', function(){
        $dialog.fadeOut(function(){
            $(this).remove();
        });
    });
    $('body').append($dialog);
    $dialog.fadeIn();
}