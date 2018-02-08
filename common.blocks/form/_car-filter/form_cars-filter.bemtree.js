block('form').mod('cars-filter')(

content()(function() {
    var data = this.data.data,
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
            elem: 'row',
            content: [
                {
                    elem: 'col',
                    content: [
                        {
                            block: 'select',
                            mods: {
                                mode: 'radio-check',
                                theme: 'islands',
                                size: 'm',
                                width: 'available',
                                role: 'brand'
                            },
                            js: { models: models },
                            name: 'brand',
                            optionsMaxHeight: 200,
                            text: 'Марка',
                            options: brands.sort().map(function (item) {
                                return {
                                    val: item,
                                    text: item
                                }
                            })
                        }
                    ]
                },
                {
                    elem: 'col',
                    content: [
                        {
                            block: 'select',
                            mods: {
                                mode: 'radio-check',
                                theme: 'islands',
                                size: 'm',
                                width: 'available',
                                disabled: true,
                                role: 'model'
                            },
                            name: 'model',
                            optionsMaxHeight: 200,
                            text: 'Модель',
                            options: []
                        }
                    ]
                }
            ]
        }
    ];
})
);
