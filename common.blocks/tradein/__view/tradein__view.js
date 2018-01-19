modules.define('tradein__view', ['i-bem-dom', 'radio-group'], function (provide, bemDom, RadioGroup) {

provide(bemDom.declElem('tradein', 'view', {
    onSetMod: {
        js: {
            inited: function() {
                this.__base.apply(this, arguments);

                var _block = this._block(),
                    radioGroup = this.findChildBlock(RadioGroup),
                    cookieView = document.cookie.replace(/(?:(?:^|.*;\s*)tradeInView\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                
                if (cookieView) {
                    _block.setMod('view', cookieView);
                    radioGroup.setVal(cookieView);
                } else {
                    document.cookie = 'tradeInView=' + radioGroup.getVal();
                }
                
                this.findChildBlock(RadioGroup)._events(RadioGroup).on('change', function () {
                    _block.setMod('view', this.getVal());
                    document.cookie = 'tradeInView=' + this.getVal();
                });
            }
        }
    }
}));

});
