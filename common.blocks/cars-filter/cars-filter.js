modules.define('cars-filter', ['i-bem-dom', 'select', 'button', 'BEMHTML'], function(provide, bemDom, Select, Button, BEMHTML) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var _this = this;

                this._selectBrand = this.findChildBlock({ block: Select, modName: 'role', modVal: 'brand' });
                this._selectModel = this.findChildBlock({ block: Select, modName: 'role', modVal: 'model' });
                this._resetButton = this.findChildBlock({ block: Button, modName: 'role', modVal: 'reset' });
                this._submitButton = this.findChildBlock({ block: Button, modName: 'type', modVal: 'submit' });

                this.onChange(this._selectBrand);

                this._selectBrand._events(Select).on('change', function () {
                    _this.onChange(this);
                });
            }
        }
    },

    onChange: function (objChanged) {
        this._selectModel = this.findChildBlock({ block: Select, modName: 'role', modVal: 'model' });
        if (objChanged.getVal() != undefined) {

            this._submitButton.delMod('disabled');
            this._resetButton.delMod('disabled');

            var optionsModels = objChanged.params.models[objChanged.getVal()].map(function (model) {
                    return { text: model, val: model };
                }),
                optionsModelChecked = objChanged.params.model_checked || '';

            bemDom.replace(this._selectModel.domElem, BEMHTML.apply({
                block: 'select',
                mods: {
                    mode: 'radio-check',
                    theme: 'suzuki',
                    size: 'm',
                    width: 'available',
                    role: 'model'
                },
                name: 'filter_Car_Model',
                optionsMaxHeight: 200,
                text: 'Модель',
                options: optionsModels,
                val: optionsModelChecked
            }));
        } else {
            this._selectModel.setVal(undefined);
            this._onDisabled(this._selectModel, this._submitButton, this._resetButton);
        }
    },

    _onDisabled: function () {
        [].slice.call(arguments).forEach(function(element) {
            element.setMod('disabled');
        }, this);
    }
}));

});
