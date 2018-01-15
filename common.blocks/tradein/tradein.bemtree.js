block('tradein').content()(function() {
    var data = this.data,
        list = [];

    if (data.status == 'success') {
        list = data.data.map(function (item) {
            return {
                elem: 'list-item',
                data: item
            }
        });
    } else {
        list = [
            {
                elem: 'list-item'
            }
        ];
    }

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
            content: list
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
