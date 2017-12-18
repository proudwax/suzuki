block('tradein').content()(function() {
    return [
        {
            elem: 'header',
            content: [
                {
                    elem: 'sort'
                },
                {
                    elem: 'limit'
                },
                {
                    elem: 'view'
                }
            ]
        },
        {
            elem: 'list',
            content: [
                {
                    elem: 'list-item'
                },
                {
                    elem: 'list-item'
                },
                {
                    elem: 'list-item'
                },
                {
                    elem: 'list-item'
                }
            ]
        },
        {
            elem: 'footer',
            content: [
                {
                    elem: 'prev'
                },
                {
                    elem: 'pagination'
                },
                {
                    elem: 'next'
                }
            ]
        }
    ];
});
