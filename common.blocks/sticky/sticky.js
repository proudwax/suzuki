modules.define('sticky', ['i-bem-dom', 'functions__throttle'], function (provide, bemDom, throttle) {

    // https://medium.com/@vursen/state-machine-for-sticky-blocks-70ca0bf4ee97
    /* function createFSM({ actions, transitions, initialState }) {
        var currentState = initialState;
        
        findTransitionFor = function (dimensions) {
            return transitions[currentState].find(function ({ when }) {
                return when(dimensions).every(function (condition) { 
                    return condition; 
                });
            });
        };
        
        performTransition = function ({ to: newState }) {
            return function (dimensions, panel) {
                currentState = newState;
                return actions[newState](dimensions, panel);
            }
        }

        return { findTransitionFor, performTransition };
    } */

    // Полифилл Array.find -> https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    if (!Array.prototype.find) {
        Array.prototype.find = function (predicate) {
            if (this == null) {
                throw new TypeError('Array.prototype.find called on null or undefined');
            }
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;

            for (var i = 0; i < length; i++) {
                value = list[i];
                if (predicate.call(thisArg, value, i, list)) {
                    return value;
                }
            }
            return undefined;
        };
    }

    function createFSM(d) {
        var currentState = d.initialState;
        
        findTransitionFor = function (dimensions) {
            return d.transitions[currentState].find(function (item) {
                return item.when(dimensions).every(function (condition) { 
                    return condition; 
                });
            });
        };
        
        performTransition = function (t) {
            return function (dimensions, panel) {
                currentState = t.to;
                return d.actions[t.to](dimensions, panel);
            }
        }

        return { findTransitionFor: findTransitionFor, performTransition: performTransition };
    }

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    this.domElem[0].style.minHeight = this._elem('container').domElem[0].offsetHeight + 'px';
                    this._winScrollTopPrev = 0;

                    this._transitions = {
                        'state_default': [
                            {
                                to: 'state_fixed_visible',
                                when: function (dimensions) {
                                    return [
                                        dimensions.clientRectTop <= 0,
                                        dimensions.winScrollTopPrev < dimensions.winScrollTopCur
                                    ];
                                }
                            },
                            {
                                to: 'state_fixed_invisible',
                                when: function (dimensions) {
                                    return [
                                        dimensions.clientRectTop + dimensions.clientRectHeight <= 0,
                                        dimensions.winScrollTopPrev > dimensions.winScrollTopCur
                                    ];
                                }
                            }
                        ],
                        'state_fixed_visible': [
                            {
                                to: 'state_default',
                                when: function (dimensions) {
                                    return [
                                        dimensions.clientRectTop + dimensions.clientRectHeight > 0,
                                        dimensions.winScrollTopPrev > dimensions.winScrollTopCur
                                    ];
                                }
                            },
                            {
                                to: 'state_fixed_invisible',
                                when: function (dimensions) {
                                    return [
                                        dimensions.clientRectTop + dimensions.clientRectHeight <= 0,
                                        dimensions.winScrollTopPrev > dimensions.winScrollTopCur
                                    ];
                                }
                            }
                        ],
                        'state_fixed_invisible': [
                            {
                                to: 'state_default',
                                when: function (dimensions) {
                                    return [
                                        dimensions.clientRectTop + dimensions.clientRectHeight > 0
                                    ];
                                }
                            },
                            {
                                to: 'state_fixed_visible',
                                when: function (dimensions) {
                                    return [
                                        dimensions.clientRectTop + dimensions.clientRectHeight <= 0,
                                        dimensions.winScrollTopPrev < dimensions.winScrollTopCur
                                    ];
                                }
                            }
                        ]
                    };

                    this._actions = {
                        'state_default': function (dimensions, panel) {
                            panel.setMod('position', 'relative');
                            panel.setMod('type', 'visible');
                        },
                        'state_fixed_visible': function (dimensions, panel) {
                            panel.setMod('position', 'fixed');
                            panel.setMod('type', 'visible');
                        },
                        'state_fixed_invisible': function (dimensions, panel) {
                            panel.setMod('position', 'fixed');
                            panel.setMod('type', 'invisible');
                        }
                    };

                    this._fsm = createFSM({ actions: this._actions, transitions: this._transitions, initialState: 'state_default' });

                    this._tick();
                    this._domEvents(bemDom.win).on('scroll', function (){ this._tick(); });
                    this._domEvents(bemDom.win).on('resize', function () { this._onWinResize(); });
                }
            }
        },

        _clientRectHeight: function () {
            return this.domElem[0].getBoundingClientRect().height;
        },
        
        _clientRectTop: function () {
            return this.domElem[0].getBoundingClientRect().top;
        },

        _tick: function () {
            throttle(this._onWinScroll({ 
                clientRectTop: this._clientRectTop(), 
                clientRectHeight: this._clientRectHeight(), 
                winScrollTopPrev: this._winScrollTopPrev, 
                winScrollTopCur: bemDom.win.scrollTop() 
            }));

            this._winScrollTopPrev = bemDom.win.scrollTop();
        },

        _onWinScroll: function (dimensions) {
            var transition = this._fsm.findTransitionFor(dimensions);

            if (transition) {
                this._fsm.performTransition(transition)(dimensions, this._elem('container'));
            }
        },
        
        _onWinResize: function () {
            this.domElem[0].style.minHeight = this._elem('container').domElem[0].offsetHeight + 'px';
            this._tick();
        }
      
    }));

});
