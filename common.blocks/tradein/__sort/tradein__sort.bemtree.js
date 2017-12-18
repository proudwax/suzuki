block('tradein').elem('sort').content()(function() {
    return [
        {
            block: 'select',
            mods: {
                mode: 'radio-check',
                theme: 'islands',
                size: 'm'
            },
            name: 'sort',
            // val: ,
            text: 'Сортировать по',
            options: [
                {
                    val: 'price-up',
                    text: 'Цене',
                    icon: {
                        block: 'icon',
                        mods: {
                            sort: 'up'
                        }
                    }
                },
                {
                    val: 'price-down',
                    text: 'Цене',
                    icon: {
                        block: 'icon',
                        mods: {
                            sort: 'down'
                        }
                    }
                },
                {
                    val: 'year-up',
                    text: 'Году',
                    icon: {
                        block: 'icon',
                        mods: {
                            sort: 'up'
                        }
                    }
                },
                {
                    val: 'year-down',
                    text: 'Году',
                    icon: {
                        block: 'icon',
                        mods: {
                            sort: 'down'
                        }
                    }
                },
                {
                    val: 3,
                    text: 'Пробегу',
                    icon: {
                        block: 'icon',
                        mods: {
                            sort: 'up'
                        }
                    }
                },
                {
                    val: 3,
                    text: 'Пробегу',
                    icon: {
                        block: 'icon',
                        mods: {
                            sort: 'down'
                        }
                    }
                }
            ]
        }
    ];
});
