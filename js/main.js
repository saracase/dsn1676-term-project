var $btnShow = $('.btn-show-hide');
var $btnMove = $('.btn-move');
var $btnCollapse = $('.btn-collapse-expand');
var $family = $('.family');
var $panel = $('.panel');
var $before = $('.before');
var $after = $('.after');

$btnCollapse.on('click', function () {
    $panel.toggleClass('js-panel-collapse');
});

$btnShow.on('click', function () {
    $family.toggleClass('js-family-hide');
});

$btnMove.on('click', function () {
    $before.toggleClass('js-before-move');
});

$btnMove.on('click', function () {
    $after.toggleClass('js-after-move');
});