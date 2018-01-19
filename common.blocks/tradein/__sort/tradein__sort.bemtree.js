block('tradein').elem('sort').content()(function() {
    return [
        {
            block: 'select',
            mods: {
                mode: 'radio-check',
                theme: 'suzuki',
                size: 'm',
                sort: true
            },
            js: { 'url': '?re=1' },
            name: 'sort',
            val: 'year-up',
            text: 'Сортировать по',
            options: [
                {
                    val: '/desktop.bundles/index/index.html?sort=price-up',
                    text: 'По цене (дешевле — дороже)'
                },
                {
                    val: '/desktop.bundles/index/index.html?sort=price-down',
                    text: 'По цене (дороже — дешевле)'
                },
                {
                    val: '/desktop.bundles/index/index.html?sort=year-up',
                    text: 'По году (новые — старые)'
                },
                {
                    val: '/desktop.bundles/index/index.html?sort=year-down',
                    text: 'По году (старые — новые)'
                },
                {
                    val: '/desktop.bundles/index/index.html?sort=milage',
                    text: 'Пробегу'
                }
            ]
        }
    ];
});
