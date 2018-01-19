modules.define('tradein__sort', ['i-bem-dom', 'select'], function(provide, bemDom, Select) {

provide(bemDom.declElem('tradein', 'sort', {
    onSetMod: {
        js: {
            inited: function() {
                var select = this.findChildBlock(Select);

                this._onInitSelect(select);
                
                select._events(Select).on('change', function (e) {
                    if (!this.getVal() && this.params.url) {
                        window.location.href = this.params.url;
                    }

                    if (this.getVal() != undefined) {
                        window.location.href = this.getVal();
                    }
                });
            }
        }
    },

    _onInitSelect: function(select) {
        window.location.search.substr(1).split('&').forEach(function(item) {
            var param = item.split('=');
            
            if (param[0] == select.getName()) {
                select.setVal(window.location.href.replace(/.*\/\/[^\/]*/, ''));
            }

        });
    }
}));

});
