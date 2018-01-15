modules.define('tradein__view', ['i-bem-dom', 'radio-group'], function (provide, bemDom, RadioGroup) {

provide(bemDom.declElem('tradein', 'view', {
    onSetMod: {
        js: {
            inited: function() {
                this.__base.apply(this, arguments);

                var _block = this._block();

                _block.setMod('view', this.findChildBlock(RadioGroup).getVal());
                 
                this.findChildBlock(RadioGroup)._events(RadioGroup).on('change', function () {
                    _block.setMod('view', this.getVal());
                });
            }
        }
    }
}));

});
