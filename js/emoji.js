/*global $,twemoji,document */
var twemoji_opts = {
    base: '/twemoji2/',
    callback: function (icon, options, variant) {
        switch (icon) {
            case 'a9':      // © copyright
            case 'ae':      // ® registered trademark
            case '2122':    // ™ trademark
                return false;
        }
        return ''.concat(options.base, options.size, '/', icon, options.ext);
    }
};

twemoji.parse(document.body, twemoji_opts);


