(function () {
    var viewPortSize = 375;

    [].some.call(document.getElementsByTagName('script'), function (item) {
        if (item.src) {
            var paths = item.src.split('?');
            var alias = item.getAttribute('data-alias');
            if (paths[0].indexOf('resetFontSize.js') > -1 || alias && alias.indexOf('resetFontSize') > -1) {
                viewPortSize = parseInt(paths[1]) || parseInt(item.getAttribute('data-size')) || viewPortSize;
                return true;
            }
        }
    });

    var width = window.innerWidth || document.documentElement.clientWidth;
    var baseFontSize = parseInt(window.getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.fontSize = width * baseFontSize / viewPortSize + 'px';

})();
