var $btnShow = $('.btn-show-hide');
var $btnMoveBefore = $('.btn-move-before');
var $btnMoveAfter = $('.btn-move-after');
var $btnCollapse = $('.btn-collapse-expand');
var $family = $('.family');
var $about = $('.about');
var $before = $('.before');
var $after = $('.after');
var $tabs = $('.tabs');
var $panels = $('.panels');
var $btn = $('.btn');
var $panel = $('.panel');
var $toggle = $('.toggle');
var $navPanel = $('.nav-panel');

$btnCollapse.on('click', function () {
    $about.toggleClass('js-about-collapse');
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

$tabs.on('click', 'a', function (e) {
  e.preventDefault();
  var id = $(this).attr('href');

$panels.filter(':not([hidden])').attr('hidden', true);
  $(id).removeAttr('hidden');

$tabs.find('.js-current').removeClass('js-current');
  $(this).addClass('js-current');
});

$toggle.on('click', function () {
  $navPanel.toggleClass('js-panel-open');
});