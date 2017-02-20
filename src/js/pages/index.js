require('../../css/lib/reset.css');
require('../../css/common/global.css');
require('../../css/common/grid.css');
require('../../css/page/index.less');

$('.g-bd').append('<p class="text">This dialog comes from JavaScript.</p>')

$('.btn').click(function(){
    require.ensure(['../components/dialog/index.js'], function(require){
       var Dialog = require('../components/dialog/index.js');
       new Dialog();
    });
});