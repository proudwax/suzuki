block('tradein').elem('limit').content()(function() {
    return [
        {
            block: 'radio-group',
            mods: {
                theme: 'islands',
                size: 'm',
                type: 'button'
            },
            name: 'checkbox-button',
            val: 20,
            options: [
                {
                    val: 20,
                    text: '20'
                },
                {
                    val: 40,
                    text: '40'
                },
                {
                    val: 100,
                    text: '100'
                }
            ]
        }
    ];
});
