block('cars').content()(function() {
    var data = this.data,
        list = [];
      
    if (data) {
        list = data.map(function (item) {
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
            elem: 'filter'
        },
        {
            block: 'sticky', 
            content: [
                {
                    block: this.block,
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
