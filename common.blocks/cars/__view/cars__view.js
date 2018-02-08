modules.define('cars__view', ['i-bem-dom', 'radio-group'], function (provide, bemDom, RadioGroup) {

    provide(bemDom.declElem('cars', 'view', {
    onSetMod: {
        js: {
            inited: function() {
                this.__base.apply(this, arguments);

                var _block = this._block(),
                    radioGroup = this.findChildBlock(RadioGroup),
                    cookieView = document.cookie.replace(/(?:(?:^|.*;\s*)carsView\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                
                if (cookieView) {
                    _block.setMod('view', cookieView);
                    radioGroup.setVal(cookieView);
                } else {
                    document.cookie = 'carsView=' + radioGroup.getVal();
                }
                
                this.findChildBlock(RadioGroup)._events(RadioGroup).on('change', function () {
                    _block.setMod('view', this.getVal());
                    document.cookie = 'carsView=' + this.getVal();
                });
            }
        }
    }
}));

});
