block('tradein').elem('sort').content()(function() {
    return [
        {
            block: 'select',
            mods: {
                mode: 'radio-check',
                theme: 'suzuki',
                size: 'm'
            },
            name: 'sort',
            // val: ,
            text: 'Сортировать по',
            options: [
                {
                    val: 'price-up',
                    text: 'По цене (дешевле — дороже)'
                },
                {
                    val: 'price-down',
                    text: 'По цене (дороже — дешевле)'
                },
                {
                    val: 'year-up',
                    text: 'По году (новые — старые)'
                },
                {
                    val: 'year-down',
                    text: 'По году (старые — новые)'
                },
                {
                    val: 3,
                    text: 'Пробегу'
                }
            ]
        }
    ];
});
