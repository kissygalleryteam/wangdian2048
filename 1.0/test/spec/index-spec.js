KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('wangdian2048', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','gallery/wangdian2048/1.0/']});