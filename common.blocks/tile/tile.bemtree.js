block('tile')(

content()(function() {

    var list = this.data.map(function(item) {
        return {
            elem: 'item',
            url: '#' + item.id.api,
            content: [
                {
                    elem: 'item-image',
                    url: item.img['10000x440'][0]
                },
                {
                    elem: 'item-title',
                    content: item.brand.name + ' ' + item.model.name
                }
            ]
        };
    });

    return [
        {
            elem: 'header',
            content: [
                {
                    elem: 'title',
                    content: 'Обзор модели'
                }
            ]
        },
        {
            elem: 'list',
            content: list
        }
    ]
})
);
