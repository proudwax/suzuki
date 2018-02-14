block('car')(

content()(function() {
    var data = this.ctx.data;

    return [
        {
            elem: 'image',
            content: [
                {
                    block: 'image',
                    url: data.img['10000x300'][0]
                }
            ]
        },
        {
            elem: 'container',
            content: [
                {
                    elem: 'title',
                    content: data.brand.name + ' ' + data.model.name
                },
                {
                    elem: 'price',
                    content: data.price.ust
                },
                {
                    elem: 'year',
                    content: data.year + ' г.'
                },
                {
                    elem: 'mileage',
                    content: data.mileage + ' км'
                },
                {
                    elem: 'description',
                    content: [
                        {
                            block: 'car-details',
                            data: data
                        }
                    ]
                }
            ]
        }
    ];
})
);
