block('form').mod('tradein-filter')(

content()(function() {
    var data = this.data.data,
        models = {};

    var brands = data.map(function (item) {
        models[item.brand.name] = models[item.brand.name] || []; 
        models[item.brand.name].push(item.model.name);

        return item.brand.name;
    });

    brands = Array.from(new Set(brands)); // unique items

    return [
        {
            block: 'select',
            mods: {
                mode: 'radio-check',
                theme: 'islands',
                size: 'm',
                width: 'available'
            },
            name: 'brand',
            optionsMaxHeight: 100,
            text: 'Марка',
            options: brands.sort().map(function (item) {
                return {
                    val: item,
                    text: item
                }
            })
        },
        {
            block: 'select',
            mods: {
                mode: 'radio-check',
                theme: 'islands',
                size: 'm',
                width: 'available',
                disabled: true
            },
            js: { models: models },
            name: 'model',
            optionsMaxHeight: 100,
            text: 'Модель',
            options: brands.sort().map(function (item) {
                return {
                    val: item,
                    text: item
                }
            })
        },
    ];
})
);
