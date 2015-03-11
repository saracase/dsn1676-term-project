var $btnShow = $('.btn-show-hide');
var $btnMoveBefore = $('.btn-move-before');
var $btnMoveAfter = $('.btn-move-after');
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

$btnMoveBefore.on('click', function () {
    $before.toggleClass('js-before-move');
});

$btnMoveAfter.on('click', function () {
    $after.toggleClass('js-after-move');
});