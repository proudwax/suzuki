modules.define('form', ['i-bem-dom', 'select', 'BEMHTML'], function(provide, bemDom, Select, BEMHTML, Form) {

provide(Form.declMod({ modName: 'cars-filter', modVal: true }, {
    onSetMod: {
        js: {
            inited: function() {
                this.__base.apply(this, arguments);

                var _this = this,
                    selectBrand = this.findChildBlock({ block: Select, modName: 'role', modVal: 'brand' });

                selectBrand._events(Select).on('change', function () {
                    var selectModel = _this.findChildBlock({ block: Select, modName: 'role', modVal: 'model' });

                    if (this.getVal() != undefined) {
                        var options = selectBrand.params.models[this.getVal()].map(function (model) {
                                return { text: model, val: model };
                            });
     
                        bemDom.replace(selectModel.domElem, BEMHTML.apply({
                            block: 'select',
                            mods: {
                                mode: 'radio-check',
                                theme: 'islands',
                                size: 'm',
                                width: 'available',
                                role: 'model'
                            },
                            name: 'model',
                            optionsMaxHeight: 200,
                            text: 'Модель',
                            options: options
                        }));
                    } else {
                        selectModel.setVal('undefined');
                        selectModel.setMod('disabled');
                    }
                });
            }
        }
    }
}));

});
