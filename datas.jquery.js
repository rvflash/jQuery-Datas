/**
 * jQuery Datas plugin
 * 
 * @desc Extends jQuery data function to manage internal datas, HTML5
 *       data-attributes and elements with class 'data-*' or 'datas-' for
 *       multiple values by name
 * 
 * @author Hervé GOUCHET
 * @requires jQuery 1.4.3+
 * @licenses Creative Commons BY-SA 2.0
 * @see
 */
;
(function($) {
    var pattern = /^data(s)?\-(.+)$/;

    var datas = function(elem) {
        var data = {
            _datas : true
        };
        var contents = function(element) {
            return $(element).contents().filter(function(index) {
                return pattern.test(this.className);
            });
        };
        var childrens = function(element) {
            return $(element).contents().filter(function(index) {
                return (1 === this.nodeType);
            });
        };
        $.each(contents(elem), function(index, element) {
            if ('undefined' != typeof (element.className.match(pattern)[1])) {
                data[element.className.match(pattern)[2]] = [];
                $.each(childrens(element), function(index, child) {
                    data[element.className.match(pattern)[2]][index] = $(child).html();
                });
            } else {
                data[element.className.match(pattern)[2]] = $(element).html();
            }
        });
        return $(elem).data(data);
    };

    $.extend({
        datas : function(elem, name, value) {
            if (elem && 1 === elem.nodeType) {
                if ('undefined' == typeof (value)) {
                    if ('undefined' == typeof ($(elem).data('_datas'))) {
                        datas(elem);
                    }
                    return (name ? $(elem).data(name) : $(elem).data());
                } else {
                    $(elem).data(name, value);
                }
            }
        }
    });

    $.fn.datas = function(name, value) {
        return $.datas(this[0], name, value);
    };
})(jQuery);