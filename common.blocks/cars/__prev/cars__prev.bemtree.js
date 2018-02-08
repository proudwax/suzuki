block('cars').elem('prev').content()(function() {
    return [
        {
            block: 'button',
            mods: {
                theme: 'islands',
                type: 'link',
                size: 'm'
            },
            text: 'Назад',
            url: '#2'
        }
    ];
});
