block('cars-filter')(

content()(function() {
    var data = this.data,
        models = {};

    var brands = data.map(function (item) {
        models[item.brand.name] = models[item.brand.name] || []; 
        models[item.brand.name].push(item.model.name);

        return item.brand.name;
    });

    brands = Array.from(new Set(brands)); // unique items

    Object.keys(models).forEach(function(key) {
        models[key] = Array.from(new Set(models[key]));
    });

    return [
        {
            block: 'form',
            content: [
                {
                    elem: 'row',
                    content: [
                        {
                            elem: 'col',
                            mix: { block: this.block, elem: 'col' },
                            content: [
                                {
                                    block: 'select',
                                    mods: {
                                        mode: 'radio-check',
                                        theme: 'suzuki',
                                        size: 'm',
                                        width: 'available',
                                        role: 'brand'
                                    },
                                    js: { models: models, model_checked: "Insignia" },
                                    name: 'filter_Vendor',
                                    optionsMaxHeight: 200,
                                    text: 'Марка',
                                    options: brands.sort().map(function (item) {
                                        return {
                                            val: item,
                                            text: item
                                        }
                                    }),
                                    val: 'Opel'
                                }
                            ]
                        },
                        {
                            elem: 'col',
                            mix: { block: this.block, elem: 'col' },
                            content: [
                                {
                                    block: 'select',
                                    mods: {
                                        mode: 'radio-check',
                                        theme: 'suzuki',
                                        size: 'm',
                                        width: 'available',
                                        disabled: true,
                                        role: 'model'
                                    },
                                    name: 'filter_Car_Model',
                                    optionsMaxHeight: 200,
                                    text: 'Модель',
                                    options: []
                                }
                            ]
                        },
                        {
                            elem: 'col',
                            elemMods: {
                                content: 'width'
                            },
                            mix: { block: this.block, elem: 'col' },
                            content: [{
                                block: 'button',
                                mods: {
                                    theme: 'suzuki',
                                    size: 'm',
                                    view: 'action',
                                    disabled: true,
                                    name: 'submit',
                                    type: 'submit'
                                },
                                text: 'Найти'
                            }]
                        },
                        {
                            elem: 'col',
                            elemMods: { content: 'width' },
                            mix: { block: this.block, elem: 'col' },
                            content: [
                                {
                                    block: 'button',
                                    mods: {
                                        theme: 'suzuki',
                                        size: 'm',
                                        disabled: true,
                                        role: 'reset'
                                    },
                                    val: '1',
                                    name: 'nc_filter_reset',
                                    text: 'Сбросить'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
})
);
