/**
 * @fileoverview 
 * @author tao21.org<zhaoest@126.com>
 * @module wangdian2048
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class Wangdian2048
     * @constructor
     * @extends Base
     */
    function Wangdian2048(comConfig) {
        var self = this;
        //调用父类构造函数
        Wangdian2048.superclass.constructor.call(self, comConfig);
    }
    S.extend(Wangdian2048, Base, /** @lends Wangdian2048.prototype*/{

    }, {ATTRS : /** @lends Wangdian2048*/{

    }});
    return Wangdian2048;
}, {requires:['node', 'base']});



