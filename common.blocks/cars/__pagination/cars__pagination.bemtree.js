block('cars').elem('pagination').content()(function() {
    return [
        {
            block: 'control-group',
            content: [
                {
                    block: 'button',
                    mods: {
                        theme: 'islands',
                        type: 'link',
                        size: 'm'
                    },
                    text: '3',
                    url: '#3'
                },
                {
                    block: 'button',
                    mods: {
                        theme: 'islands',
                        type: 'link',
                        size: 'm',
                        view: 'action'
                    },
                    text: '4',
                    url: '#4'
                },
                {
                    block: 'button',
                    mods: {
                        theme: 'islands',
                        type: 'link',
                        size: 'm'
                    },
                    text: '5',
                    url: '#5'
                }
            ]
        }
    ];
});
