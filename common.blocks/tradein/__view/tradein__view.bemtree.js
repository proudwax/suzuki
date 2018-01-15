block('tradein').elem('view').content()(function() {
    return [
        {
            block: 'radio-group',
            mods: {
                theme: 'islands',
                size: 'm',
                type: 'button'
            },
            name: 'view',
            val: 'line',
            options: [
                {
                    val: 'line',
                    name: 'line',
                    icon: {
                        block: 'icon',
                        mods: {
                            view: 'line'
                        }
                    }
                },
                {
                    val: 'block',
                    name: 'block',
                    icon: {
                        block: 'icon',
                        mods: {
                            view: 'block'
                        }
                    }
                }
            ]
        }
    ];
});
