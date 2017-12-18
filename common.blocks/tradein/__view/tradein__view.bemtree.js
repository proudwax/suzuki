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
                    // text: 'line',
                    icon: {
                        block: 'icon',
                        mods: {
                            view: 'line'
                        }
                    }
                },
                {
                    val: 'block',
                    // text: 'block',
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
