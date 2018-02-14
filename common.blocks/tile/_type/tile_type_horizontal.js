modules.define('tile', ['i-bem-dom', 'BEMHTML'], function (provide, bemDom, BEMHTML, Tile) {

var buttons = {
    'prev': {
        bemJson: { block: 'tile', elem: 'arrow', elemMods: { type: 'prev' } },
        motion: function (time, from, distance, duration) {
            if ((time /= duration / 2) < 1) return -distance / 2 * time * time * time * time + from;
            return distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        }
    },
    'next': {
        bemJson: { block: 'tile', elem: 'arrow', elemMods: { type: 'next' } },
        motion: function (time, from, distance, duration) {
            if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
            return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        }
    }
};

provide(Tile.declMod({ modName: 'type', modVal: 'horizontal' }, {
    onSetMod: {
        js: {
            inited: function () {
                // this.__base.apply(this, arguments); // вызов методов 

                this.getButton().map((function (button) {
                    this._domEvents(button).on('click', function (e) {
                        e.preventDefault();

                        var typeArrow = e.bemTarget._elem('arrow').getMod('type');
                        
                        this.toSlide(buttons[typeArrow].motion);
                    });
                }).bind(this));
            }
        }
    },

    getButton: function () {
        var keys = Object.getOwnPropertyNames(buttons);

        return keys.map((function (key) {
            return this.addButton(buttons[key].bemJson);
        }).bind(this));
    },

    addButton: function (bemJson) {
        return bemDom.after(this._elem('list').domElem, BEMHTML.apply(bemJson)).bem(Tile);
    },

    toSlide: function (motion) {
        var duration = 500,
            startTime = new Date().getTime(),
            distance = this._elem('item').domElem[0].getBoundingClientRect().width + 32,
            startFrom = this._elem('list').domElem[0].scrollLeft;

        var timer = bemDom.win[0].setInterval((function () {
            var time = new Date().getTime() - startTime;

            if (time >= duration) {
                bemDom.win[0].clearInterval(timer);
            }

            this._elem('list').domElem[0].scrollLeft = motion(time, startFrom, distance, duration);
        }).bind(this), 1000 / 60);
    }
}));

});