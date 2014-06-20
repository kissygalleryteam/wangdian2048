/**
 * @fileoverview 
 * @author tao21.org<zhaoest@126.com>
 * @module wangdian2048
 **/
KISSY.add(function (S, Node, Lang) {
    var $ = Node.all,
        EventTarget = S.Event.Target;
    /**
     *
     * @class Wangdian2048
     * @constructor
     */
    function Wangdian2048(config) {

    }

    S.augment(Wangdian2048, EventTarget, /** @lends Wangdian2048.prototype*/{

    });

    return Wangdian2048;

}, {requires:['node', 'lang']});



