block('cars').elem('limit').content()(function() {

    var groupLink = [{ limit: 20, active: false }, { limit: 40, active: true }, { limit: 100, active: false }].map(function (item) {
        return {
            block: 'button',
            mods: {
                theme: 'islands',
                size: 'm',
                type: 'link',
                view: item.active ? 'action' : null
            },
            url: '?recNum=' + item.limit,
            text: item.limit
        };
    });

    return [
        'Показать по: ',
        {
            block: 'control-group',
            content: groupLink

        }
    ];
});
