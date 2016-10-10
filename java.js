var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}
//swaps image based on class
$(function () {
    $('img.pic-swap').hover(sourceSwap, sourceSwap);
});
//swaps image based on the data-alt-src attribute
$(function() {
    $('img[data-alt-src]').each(function() {
        new Image().src = $(this).data('alt-src');
    }).hover(sourceSwap, sourceSwap);
});
