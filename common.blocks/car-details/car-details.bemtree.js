block('car-details').content()(function() {
    var data = this.ctx.data;

    return [
        {
            elem: 'label',
            content: 'Год'
        },
        {
            elem: 'value',
            content: data.year + ' г.'
        },
        {
            elem: 'label',
            content: 'Пробег'
        },
        {
            elem: 'value',
            content: data.mileage + ' км.'
        },
        {
            elem: 'label',
            content: 'Кузов'
        },
        {
            elem: 'value',
            content: data.body.name
        },
        { 
            elem: 'label', 
            content: 'Коробка' 
        }, 
        { 
            elem: 'value', 
            content: data.gearbox.name 
        },
        {
            elem: 'label',
            content: 'Тип привода'
        },
        {
            elem: 'value',
            content: data.gearbox.wheel
        },
        {
            elem: 'label',
            content: 'Тип двигателя'
        },
        {
            elem: 'value',
            content: data.engine.type
        },
        {
            elem: 'label',
            content: 'Объем двигателя'
        },
        {
            elem: 'value',
            content: data.engine.volume.short.toFixed(1)
        }
    ];
});
